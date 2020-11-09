import type { Config, Queue, Store, Tool, VisibleTool } from './types'

import Color from './color'
import Worker, { WorkerStatus } from './worker'
import { RootElement } from './element'
import assets from './assets'

export enum ToolToken {
  BUTTON = 'BUTTON',
  DIV = 'DIV',
  IMAGE = 'IMAGE',
  MOVE = 'MOVE',
  NONE = 'NONE',
  POINTER = 'POINTER',
  TEXT = 'TEXT',
  ZOOM_IN = 'ZOOM_IN',
  ZOOM_OUT = 'ZOOM_OUT'
}

const tools: Tool[] = [
  {
    token: ToolToken.POINTER,
    cursor: 'default',
    hoverDisabled: false,
    svg: assets['tool-pointer'],
    visible: true
  },
  {
    token: ToolToken.BUTTON,
    cursor: 'default',
    hoverDisabled: false,
    svg: assets['tool-button'],
    visible: true
  },
  {
    token: ToolToken.DIV,
    cursor: 'crosshair',
    hoverDisabled: false,
    svg: assets['tool-div'],
    visible: true
  },
  {
    token: ToolToken.TEXT,
    cursor: 'text',
    hoverDisabled: false,
    svg: assets['tool-text'],
    visible: true
  },
  {
    token: ToolToken.IMAGE,
    cursor: 'default',
    hoverDisabled: false,
    svg: assets['tool-image'],
    visible: true
  },
  {
    token: ToolToken.MOVE,
    cursor: 'grab',
    hoverDisabled: true,
    visible: false
  },
  {
    token: ToolToken.ZOOM_IN,
    cursor: 'zoom-in',
    hoverDisabled: true,
    visible: false
  },
  {
    token: ToolToken.ZOOM_OUT,
    cursor: 'zoom-out',
    hoverDisabled: true,
    visible: false
  }
]

const visibleTools: VisibleTool[] = tools
  .filter((tool) => {
    return tool.visible
  })
  .map((tool) => {
    return {
      cursor: tool.cursor,
      hoverDisabled: tool.hoverDisabled,
      svg: tool.svg as string,
      token: tool.token,
      visible: true
    }
  })

class HTMLEditor {
  private readonly _config: Config
  private readonly _store: Store
  private readonly _tree: RootElement

  public constructor (config: Config) {
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')

    if (ctx === null) {
      throw new Error('Failed to get context for canvas')
    }

    this._config = config

    this._store = {
      canvas: canvas,
      ctx: ctx,
      height: canvas.height,
      queue: [],
      scale: window.devicePixelRatio,
      sleeping: false,
      width: canvas.width,
      workers: []
    }

    this._tree = new RootElement(this._store, [
      {
        type: 'div',
        children: this._config.elements,
        style: {
          background: Color.ghostWhite,
          height: '100%',
          position: 'relative'
        }
      },
      {
        type: 'div',
        children: visibleTools.map((visibleTool) => {
          return {
            type: 'button',
            style: {
              background: `url('data:image/svg+xml;utf8,${visibleTool.svg}') center / 24px no-repeat`,
              borderRadius: '9px',
              height: '36px',
              width: '36px',
              ':hover': {
                backgroundColor: Color.blackAlpha(0.05)
              }
            }
          }
        }),
        style: {
          background: Color.white,
          borderRadius: '14px',
          bottom: '20px',
          boxShadow: '0 0 10px ' + Color.blackAlpha(0.1),
          left: '50%',
          padding: '10px',
          position: 'fixed',
          transform: 'translateX(-50%)'
        }
      }
    ])
  }

  public mount (selector: string): void {
    const container: HTMLElement | null = document.querySelector(selector)

    if (container === null) {
      throw new Error(`Element with container selector "${selector}" was not found`)
    }

    container.appendChild(this._store.canvas)

    this._store.container = container
    this._store.queue = []
    this._store.sleeping = false
    this._store.workers = []

    this._attachListeners()
    this._resize()
    this._loop()
  }

  private _attachListeners (): void {
    window.addEventListener('resize', this._resize.bind(this))

    this._store.canvas.addEventListener('mousemove', (e) => {
      const x = e.offsetX
      const y = e.offsetY

      for (let i = this._tree.children.length - 1; i >= 0; i--) {
        const element = this._tree.children[i]
        const rect = element.getBoundingClientRect()

        if (x >= rect.x && x <= rect.x + rect.width && y >= rect.y && y <= rect.y + rect.height) {
          this._enqueue({
            element: element,
            type: 'mousemove'
          })

          break
        }
      }
    })
  }

  private _enqueue (payload: Queue): void {
    this._store.queue.push(payload)

    if (this._store.sleeping) {
      this._loop()
    }
  }

  private _loop (): void {
    while (this._store.queue.length !== 0) {
      const payload = this._store.queue[0]

      if (payload.type === 'render') {
        this._render()
      } else {
        const task = async (): Promise<void> => {
          payload.element.onMouseMove()
        }

        this._store.workers.push(new Worker(task))
      }

      this._store.queue.splice(0, 1)
    }

    for (let i = this._store.workers.length - 1; i >= 0; i--) {
      const worker = this._store.workers[i]

      switch (worker.getStatus()) {
        case WorkerStatus.Failure: {
          throw worker.getError()
        }
        case WorkerStatus.New: {
          worker.run()
          break
        }
        case WorkerStatus.Success: {
          this._store.queue.push({ type: 'render' })
          this._store.workers.splice(i, 1)

          break
        }
      }
    }

    if (this._store.queue.length !== 0 || this._store.workers.length !== 0) {
      this._store.sleeping = false

      window.requestAnimationFrame(() => {
        this._loop()
      })
    } else {
      this._store.sleeping = true
    }
  }

  private _render (): void {
    this._store.ctx.clearRect(0, 0, this._store.canvas.width, this._store.canvas.height)
    this._tree.compute()
    this._tree.render()
  }

  private _resize (): void {
    if (this._store.container === undefined) {
      throw new Error('HTMLEditor is not mounted yet')
    }

    const rect = this._store.container.getBoundingClientRect()

    this._store.height = rect.height
    this._store.width = rect.width

    this._store.canvas.height = Math.floor(this._store.height * this._store.scale)
    this._store.canvas.width = Math.floor(this._store.width * this._store.scale)
    this._store.canvas.style.height = String(this._store.height) + 'px'
    this._store.canvas.style.width = String(this._store.width) + 'px'

    this._store.ctx.transform(this._store.scale, 0, 0, this._store.scale, 0, 0)
    this._enqueue({ type: 'render' })
  }
}

export default HTMLEditor

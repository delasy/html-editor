import type { ConfigElement, ConfigElementBaseStyle, ElementStyle, Rect, Store } from './types'

import { clone, noop } from './utils'

const getElementStyle = (style?: ConfigElementBaseStyle): ElementStyle => {
  const styleObj: ConfigElementBaseStyle = style === undefined ? {} : clone(style)
  return styleObj as ElementStyle
}

class Element {
  public readonly children: Element[]
  public readonly onMouseMove: () => any
  public readonly parent: Element
  public readonly style: ElementStyle
  public readonly type: ConfigElement['type']
  // private readonly _computedStyle: ElementStyle
  private readonly _height: number = 0
  protected _isRoot: boolean
  private readonly _store: Store
  private readonly _width: number = 0
  private readonly _x: number = 0
  private readonly _y: number = 0

  public constructor (store: Store, element: ConfigElement, parent: Element) {
    this.children = []

    if (Array.isArray(element.children)) {
      for (const child of element.children) {
        this.children.push(
          new Element(store, child, this)
        )
      }
    } else if (element.children !== undefined) {
      this.children.push(
        new Element(store, element.children, this)
      )
    }

    this.onMouseMove = element.onMouseMove === undefined ? noop : element.onMouseMove
    this.parent = parent
    this.type = element.type
    this.style = getElementStyle(element.style)

    this._isRoot = false
    this._store = store
  }

  public compute (): void {
    /* const { height, width } = this._store
    this._height = parseInt(this.getComputedStyle('height').slice(0, -2))
    this._width = parseInt(this.getComputedStyle('width').slice(0, -2))
    this._x = 0
    this._y = 0

    const position = this.getComputedStyle('position')

    if (!this._isRoot && position === 'fixed') { // TODO: Implement absolute
      const bottom = this.getComputedStyle('bottom')
      const left = this.getComputedStyle('left')
      const right = this.getComputedStyle('right')
      const top = this.getComputedStyle('top')

      if (left !== 'auto') {
        this._x = parseInt(left.slice(0, -2))
      }

      if (top !== 'auto') {
        this._y = parseInt(top.slice(0, -2))
      }

      if (left !== 'auto' && right !== 'auto') {
        this._width = width - this._x - parseInt(right.slice(0, -2))
      } else if (right !== 'auto') {
        this._x = width - this._width - parseInt(right.slice(0, -2))
      }

      if (bottom !== 'auto' && top !== 'auto') {
        this._height = height - this._y - parseInt(bottom.slice(0, -2))
      } else if (bottom !== 'auto') {
        this._y = height - this._height - parseInt(bottom.slice(0, -2))
      }
    } else if (!this._isRoot && ['relative', 'static'].includes(position)) {
      let parent = this.parent

      while (parent.getComputedStyle('position') === 'static' && !parent._isRoot) {
        parent = parent.parent
      }

      const parentBorderLeftWidth = parent.getComputedStyle('borderLeftWidth')
      const parentBorderTopWidth = parent.getComputedStyle('borderTopWidth')
      const parentPaddingLeft = parent.getComputedStyle('paddingLeft')
      const parentPaddingTop = parent.getComputedStyle('paddingTop')
      const parentRect = parent.getBoundingClientRect()

      this._x = parentRect.x
      this._y = parentRect.y

      if (parentBorderLeftWidth !== 'medium') {
        this._x += parseInt(parentBorderLeftWidth.slice(0, -2))
      }

      if (parentBorderTopWidth !== 'medium') {
        this._y += parseInt(parentBorderTopWidth.slice(0, -2))
      }

      if (parentPaddingLeft !== 'auto') {
        this._x += parseInt(parentPaddingLeft.slice(0, -2))
      }

      if (parentPaddingTop !== 'auto') {
        this._y += parseInt(parentPaddingTop.slice(0, -2))
      }
    }

    const marginBottom = this.getComputedStyle('marginBottom')
    const marginLeft = this.getComputedStyle('marginLeft')
    const marginRight = this.getComputedStyle('marginRight')
    const marginTop = this.getComputedStyle('marginTop')

    if (marginLeft !== 'auto') {
      this._x += parseInt(marginLeft.slice(0, -2))
    }

    if (marginTop !== 'auto') {
      this._y += parseInt(marginTop.slice(0, -2))
    }

    if (marginRight !== 'auto') {
      this._width -= parseInt(marginRight.slice(0, -2))
    }

    if (marginBottom !== 'auto') {
      this._height -= parseInt(marginBottom.slice(0, -2))
    }

    console.log({
      height: this._height,
      width: this._width,
      x: this._x,
      y: this._y
    })

    switch (key) {
      case 'height': {
        if (this._isRoot) {
          return String(this._store.height) + 'px'
        }

        let height = elementStyleConfig.height.initialValue

        if (this.style.height !== '') {
          height = this.style.height
        }

        if (height === 'inherit') {
          height = this.parent.getComputedStyle('height')
        }

        if (height === 'auto' || height.slice(-1) === '%') {
          const parentHeight = parseInt(this.parent.getComputedStyle('height').slice(0, -2))

          if (height.slice(-1) === '%') {
            height = String(Math.floor(parentHeight * parseInt(height.slice(0, -1)) / 100)) + 'px'
          } else if (height === 'auto') {
            height = String(Math.floor(parentHeight / this.parent.children.length)) + 'px'
          }
        }

        return height
      }
      case 'width': {
        if (this._isRoot) {
          return String(this._store.width) + 'px'
        }

        let width = elementStyleConfig.width.initialValue

        if (this.style.width !== '') {
          width = this.style.width
        }

        if (width === 'inherit') {
          width = this.parent.getComputedStyle('width')
        }

        if (width === 'auto' || width.slice(-1) === '%') {
          const parentWidth = parseInt(this.parent.getComputedStyle('width').slice(0, -2))

          if (width.slice(-1) === '%') {
            width = String(Math.floor(parentWidth * parseInt(width.slice(0, -1)) / 100)) + 'px'
          } else if (width === 'auto') {
            const staticParentChildren = this.parent.children.filter((child) => {
              return ['relative', 'static'].includes(child.getComputedStyle('position'))
            })

            width = String(Math.floor(parentWidth / staticParentChildren.length)) + 'px'
          }
        }

        return width
      }
    }

    for (const child of this.children) {
      child.compute()
    } */
  }

  public getBoundingClientRect (): Rect {
    return {
      height: this._height,
      width: this._width,
      x: this._x,
      y: this._y
    }
  }

  public getComputedStyle (_key: keyof ElementStyle): string {
    return ''
  }

  public render (): void {
    const { ctx } = this._store
    const { height, width, x, y } = this.getBoundingClientRect()
    const background = this.getComputedStyle('background').match(/#(?:[0-9a-fA-F]{3}){1,2}/)

    if (background !== null) {
      ctx.fillStyle = background[0]
      ctx.fillRect(x, y, width, height)
    }

    for (const child of this.children) {
      child.render()
    }
  }
}

export class RootElement extends Element {
  public constructor (store: Store, children: ConfigElement[]) {
    const element: ConfigElement = {
      type: 'div',
      children: children
    }

    super(store, element, null as any)
    this._isRoot = true
  }
}

export default Element

export enum WorkerStatus {
  Failure,
  New,
  Pending,
  Success
}

class Worker {
  private _error?: Error
  private readonly _fn: () => void | Promise<void>
  private _status: WorkerStatus = WorkerStatus.New

  public constructor (fn: () => void | Promise<void>) {
    this._fn = fn
  }

  public getError (): Error {
    if (this._error === undefined) {
      return new Error('Failed to get error before it was set')
    }

    return this._error
  }

  public getStatus (): WorkerStatus {
    return this._status
  }

  public run (): void {
    if (this._status !== WorkerStatus.New) {
      return
    }

    this._status = WorkerStatus.Pending

    Promise.resolve(this._fn())
      .then(() => {
        this._status = WorkerStatus.Success
      })
      .catch((e) => {
        this._error = e
        this._status = WorkerStatus.Failure
      })
  }
}

export default Worker

import { createPromise } from './createPromise'

export interface PollTaskActions<SuccessData = any> {
  next: () => void
  success: (data: SuccessData) => void
  error: (err?: Error | string) => void
}

export interface PollTaskCallback<SuccessData> {
  (actions: PollTaskActions<SuccessData>):(Promise<void> | void)
}

export interface PollTaskOptions {
  /** auto start the poll task */
  auto?: boolean
  /** poll interval time (ms) */
  interval?: number
  /** invoking on the leading edge of the timeout. */
  leading?: boolean
  /** max poll times. poll task would be error over max times */
  max?: number
}

export enum PollTaskStatus {
  CANCELED,
  INIT,
  RUNNING,
  SUCCESS,
  PENDING,
  ERROR
}

export enum PollTaskErrorType {
  /** the poll task canceled */
  CANCELED = 'CANCELED',
  /** invoke callback while error causes */
  EXECUTE_ERROR = 'EXECUTE_ERROR',
  /** error passed by error callback */
  CALLBACK_ERROR = 'CALLBACK_ERROR',
  /** exceed the max times */
  EXCEED_MAX = 'EXCEED_MAX'
}

export type PollTask = ReturnType<typeof createPollTask>

export function createPollTask<SuccessData>(
  callback: PollTaskCallback<SuccessData>,
  options: PollTaskOptions
) {
  const { auto, leading, interval, max } = options

  const maxCounter = max !== undefined && max !== null
    ? Math.max(max, 1)
    : null

  let status: PollTaskStatus = PollTaskStatus.INIT

  let timer: number

  let counter = 0

  const [donePromise, donePromiseActions] = createPromise<
    SuccessData,
    Error | string
  >()

  const isStatusCompleted = () => [
    PollTaskStatus.CANCELED,
    PollTaskStatus.ERROR,
    PollTaskStatus.SUCCESS
  ].includes(status)
  
  const clearTimer = () => timer && clearTimeout(timer)

  const success = (data: SuccessData) => {
    if (!isStatusCompleted()) {
      status = PollTaskStatus.SUCCESS
      donePromiseActions.resolve(data)
    }
  }

  const error = (err: Error | string) => {
    if (!isStatusCompleted()) {
      const adaptError = err instanceof Error
        ? err
        : new Error(err)
      adaptError.name = PollTaskErrorType.CALLBACK_ERROR
      status = PollTaskStatus.ERROR
      donePromiseActions.reject(adaptError)
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  const next = () => scheduleCallback()

  const execCallback = async () => {
    // max time check
    if (maxCounter && counter >= maxCounter) {
      const err = new Error('exceed max poll times')
      err.name = PollTaskErrorType.EXCEED_MAX
      error(err)
    }

    counter += 1 

    try {
      await callback({ success, error, next })
    } catch(err: any) {
      const adaptError = err instanceof Error
        ? err
        : new Error(err)
      err.name = PollTaskErrorType.EXECUTE_ERROR
      status = PollTaskStatus.ERROR
      donePromiseActions.reject(adaptError)
    }
  }

  const scheduleCallback = () => {
    clearTimer()
    timer = setTimeout(execCallback, interval)
  }

  const cancel = () => {
    if (isStatusCompleted()) {
      return
    }
    status = PollTaskStatus.CANCELED
    const err = new Error('poll task canceled')
    err.name = PollTaskErrorType.CANCELED
    donePromiseActions.reject(err)
  }

  const start = (startLeading: boolean = leading) => {
    if (isStatusCompleted()) {
      return
    }
    if (status === PollTaskStatus.RUNNING) {
      return
    }
    clearTimer()
    status = PollTaskStatus.RUNNING
    startLeading ? execCallback() : scheduleCallback()
  }

  const stop = () => {
    if (isStatusCompleted()) {
      return
    }
    clearTimer()
    status = PollTaskStatus.PENDING
  }

  if (auto) {
    start()
  }

  return {
    get status() {
      return status
    },
    get counter() {
      return counter
    },
    done() {
      return donePromise
    },
    start,
    stop,
    cancel,
  }
}

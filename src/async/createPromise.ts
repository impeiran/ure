export function createPromise<T, K = any>() {
  let resolve: (data: T) => void

  let reject: (err: K) => void

  const promise = new Promise<T>((res, rej) => {
    resolve = res
    reject = rej
  })

  const actions = {
    resolve,
    reject
  }

  return [promise, actions] as const
}
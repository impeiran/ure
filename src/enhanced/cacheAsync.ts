export type CacheOptions = {
  key?: string | number | symbol | ((...args: any) => any),
  expire?: number
}

const CACHE_MAP = new Map<unknown, {
  resolved: boolean
  expire: number,
  value: Promise<unknown> | unknown
}>()

const DEFAULT_EXPIRE = Number.MAX_SAFE_INTEGER

/**
 * async cache
 * @param fn 
 * @param cacheOptions
 * @param cacheOptions.key cache key
 * @param cacheOptions.expire ms number
 * @returns {Function} cached fn
 */
const cacheAsync = <K, T extends (...args : any) => Promise<K>>(
  fn: T,
  cacheOptions: CacheOptions = {}
): (...args: Parameters<T>) => Promise<K> => {
  const { key, expire = DEFAULT_EXPIRE } = cacheOptions

  return function cacheAsyncAction (...args: Parameters<T>): Promise<K> {
    const cacheKey = typeof key === 'function'
      ? key(...args)
      : key === null || key === undefined ? fn : key
    
    const cache = CACHE_MAP.get(cacheKey)

    /**
     * set cache with fn invoke
     * @returns Promise<K>
     */
    const setCache = () => {
      let result = fn.apply(this, args)

      result = result instanceof Promise 
        ? result
        : Promise.resolve(result)
      
      /**
       * record the fullfilled handler
       */
      result
        .then(res => {
          const firstTimeCache = CACHE_MAP.get(cacheKey)
          CACHE_MAP.set(cacheKey, {
            ...firstTimeCache,
            resolved: true,
            value: res
          })
          return res
        })
        .catch(error => {
          // remove the cache while the promise reject
          CACHE_MAP.set(cacheKey, null)
          return Promise.reject(error)
        })

      /**
       * set pending cache
       */
      CACHE_MAP.set(cacheKey, {
        resolved: false,
        expire: +new Date() + expire,
        value: result
      })

      return result
    }

    /**
     * first time to invoke fn
     * cache the pending promise
     */
    if (!cache) return setCache()

    return cache.expire > +new Date()
      ? cache.resolved 
        // hit the cache
        ? Promise.resolve(cache.value as K) 
        // hit the pending promise
        : cache.value as Promise<K>
      // cache expired
      : setCache()
  }
}

export default cacheAsync
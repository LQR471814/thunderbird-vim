/**
 * @returns {Map<string, unknown>}}
 */
function queryCache() {
  if (!(window.tbvimQueryCache instanceof window.Map)) {
    window.tbvimQueryCache = new window.Map()
  }
  return window.tbvimQueryCache
}

/**
 * @param {[element: HTMLElement, id: string]} e
 * @param {(changes: MutationRecord[]) => void} onchange 
 */
function observeTree([element, elementId], onchange) {
  const cache = queryCache()
  const id = `OBSERVER: ${elementId}`

  const existing = cache.get(id)
  if (existing) {
    existing.disconnect()
  }

  const observer = new window.MutationObserver(onchange)
  observer.observe(element, {
    subtree: true,
    childList: true,
    attributes: false,
    characterData: false,
  })
  cache.set(id, observer)
}

/**
 * @param {string} selector
 * @param {[element: HTMLElement, id: string]?} src 
 * @returns {HTMLElement}
 */
export function querySelector(selector, src) {
  let srcId = ""
  let srcElement = window.document
  if (src) {
    srcElement = src[0]
    srcId = src[1]
  }

  const id = `${srcId} ${selector}`
  const cache = queryCache()
  const cached = cache.get(id)

  if (cached && srcElement.contains(cached)) {
    return cached
  }

  console.info("[querySelector] cache miss:", selector, srcId, cached)

  const e = srcElement.querySelector(selector)
  cache.set(id, e)
  return e
}

/**
 * @param {[element: HTMLElement, id: string]} container
 * @param {string} selector 
 * @returns {HTMLElement[]}
 */
export function querySelectList([container, containerId], selector) {
  const cache = queryCache()
  const id = `LIST: ${containerId} ${selector}`

  const cached = cache.get(id)
  if (cached) {
    return cached
  }

  const res = Array.from(container.querySelectorAll(selector))
  cache.set(id, res)

  observeTree([container, containerId], (changes) => {
    console.info("[querySelectList] cache miss:", selector, containerId, changes)
    cache.set(id, Array.from(container.querySelectorAll(selector)))
  })
  return cache.get(id)
}


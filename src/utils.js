/**
 * @param {number} offset
 */
export function changeFolder(offset) {
  const rows = Array.from(
    window.document.querySelector('browser#mail3PaneTabBrowser1')
      .contentDocument.querySelectorAll('li[is=folder-tree-row]')
  )

  for (let i = 0; i < rows.length; i++) {
    if (!rows[i].classList?.contains("selected")) {
      continue
    }

    let next
    let nextOffset = i
    do {
      nextOffset += offset
      next = rows[nextOffset]
      if (!next) {
        return
      }
    } while (next.parentNode.style.height === "0px")

    next.click()
    return
  }

  rows[0]?.click()
}

/**
 * @returns {HTMLLIElement | null}
 */
export function getCurrentMailbox() {
  let current = window.document.querySelector("browser#mail3PaneTabBrowser1")
    .contentDocument.querySelector("li[is=folder-tree-row].selected.current")

  while (!current.getAttribute("data-server-type") && current) {
    current = current.parentNode
  }
  return current
}

/**
 * @param {string[]} names
 */
export function gotoFolder(names) {
  const mailbox = getCurrentMailbox()
  const rows = mailbox.querySelectorAll("li[is=folder-tree-row]")

  for (const r of rows) {
    const name = r.innerText.toLowerCase()
    for (const n of names) {
      if (name.includes(n)) {
        r.click()
        return
      }
    }
  }
}


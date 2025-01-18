import { querySelectList, querySelector } from "./query"

/**
 * @returns {HTMLElement[]}
 */
function getMailList() {
  const container = querySelector("ul#folderTree", [
    querySelector("browser#mail3PaneTabBrowser1")
      .contentDocument,
    "maillist",
  ])
  return querySelectList([container, "maillist.folderTree"], "li[is=folder-tree-row]")
}

/**
 * @param {number} offset
 */
export function changeFolder(offset) {
  const rows = getMailList()

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
  let current = getMailList().
    find((e) => e.classList.contains("selected") && e.classList.contains("current"))

  while (!current.getAttribute("data-server-type") && current) {
    current = current.parentNode
  }
  return current
}

/**
 * @param {string} type
 */
export function gotoFolder(type) {
  const mailbox = getCurrentMailbox()
  const e = querySelector(`li[is=folder-tree-row][data-folder-type=${type}]`, [mailbox, "mailbox"])
  if (!e) {
    return
  }
  e.click()
}


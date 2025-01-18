import { getCurrentMailbox } from "./lib/logic"

(() => {
  const mailbox = getCurrentMailbox()
  const sibling = mailbox.previousSibling?.querySelector("ul li")
  if (!sibling) {
    return
  }
  sibling.click()
})()

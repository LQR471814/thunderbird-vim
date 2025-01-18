import { getCurrentMailbox } from "./lib/logic"

(() => {
  const mailbox = getCurrentMailbox()
  const sibling = mailbox.nextSibling?.querySelector("ul li")
  if (!sibling) {
    return
  }
  sibling.click()
})()

import { getCurrentMailbox } from "./lib/logic"

(() => {
  const mailbox = getCurrentMailbox()
  mailbox.previousSibling?.click()
})()

import { getCurrentMailbox } from "./lib/logic"

(() => {
  const mailbox = getCurrentMailbox()
  mailbox.nextSibling?.click()
})()

import { getCurrentMailbox } from "./utils"

(() => {
  const mailbox = getCurrentMailbox()
  mailbox.previousSibling?.click()
})()

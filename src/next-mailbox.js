import { getCurrentMailbox } from "./utils"

(() => {
  const mailbox = getCurrentMailbox()
  mailbox.nextSibling?.click()
})()

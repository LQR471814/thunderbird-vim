import { querySelector } from "./lib/query";

(() => {
  const getMessages = querySelector(
    '#folderPaneGetMessages',
    [
      querySelector("browser#mail3PaneTabBrowser1").contentDocument,
      "maillist"
    ]
  )
  getMessages.click()
})()

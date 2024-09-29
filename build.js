import { build } from "esbuild"
import { basename } from "path"
import { readFile, writeFile } from "fs/promises"

const results = await build({
  minify: true,
  entryPoints: [
    "src/next-mailbox.js",
    "src/prev-mailbox.js",
    "src/next-folder.js",
    "src/prev-folder.js",
    "src/goto-junk.js",
    "src/goto-drafts.js",
    "src/goto-sent.js",
    "src/goto-inbox.js",
    "src/goto-trash.js",
  ],
  target: [
    "es2022",
    "firefox128"
  ],
  write: false,
  outdir: "out",
  bundle: true,
})

const decoder = new TextDecoder()

let config = await readFile("src/config.json", "utf8")

for (const file of results.outputFiles) {
  const name = basename(file.path)
  const content = decoder.decode(file.contents).trim()
  config = config.replace(`"$${name}$"`, JSON.stringify(content))
}

await writeFile("config.json", config)


import { build } from "esbuild"
import { basename, join } from "path"
import { readFile, writeFile } from "fs/promises"

/**
 * @type {string}
 */
let config = await readFile("src/config.json", "utf8")

const entryPoints = Array.from(config.matchAll(/\$(.*\.js)\$/g))
  .map((name) => join("src", name[1]))

const results = await build({
  minify: true,
  entryPoints: entryPoints,
  target: [
    "es2022",
    "firefox128"
  ],
  write: false,
  outdir: "out",
  bundle: true,
})

const decoder = new TextDecoder()

for (const file of results.outputFiles) {
  const name = basename(file.path)
  const content = decoder.decode(file.contents).trim()
  config = config.replace(`"$${name}$"`, JSON.stringify(content))
}

await writeFile("config.json", config)


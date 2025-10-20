// Bulk convert all images in public/images to optimized WebP and AVIF
// Usage: node scripts/convert-images.mjs
import { readdir, mkdir, readFile, writeFile, stat } from "node:fs/promises"
import { join, extname, basename } from "node:path"
import sharp from "sharp"

const SRC_DIR = "public/images"
const OUT_DIR = "public/images/optimized"

async function ensureDir(dir) {
  try {
    const s = await stat(dir)
    if (!s.isDirectory()) throw new Error(`${dir} exists and is not a directory`)
  } catch {
    await mkdir(dir, { recursive: true })
  }
}

async function convert(filePath) {
  const name = basename(filePath, extname(filePath))
  const input = await readFile(filePath)
  const image = sharp(input).rotate()

  // WebP
  const webp = await image.clone().webp({ quality: 78 }).toBuffer()
  await writeFile(join(OUT_DIR, `${name}.webp`), webp)

  // AVIF
  const avif = await image.clone().avif({ quality: 55 }).toBuffer()
  await writeFile(join(OUT_DIR, `${name}.avif`), avif)

  console.log(`Optimized: ${name} -> webp,avif`)
}

async function main() {
  await ensureDir(OUT_DIR)
  const files = await readdir(SRC_DIR)
  const targets = files.filter((f) => /\.(png|jpg|jpeg)$/i.test(f))
  for (const f of targets) {
    await convert(join(SRC_DIR, f))
  }
  console.log("Done.")
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})

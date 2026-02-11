import { defineConfig } from 'tsup'
import { writeFileSync, readFileSync } from 'fs'
import { join } from 'path'

export default defineConfig({
  entry: {
    index: 'src/index.ts',
    'tailwind/preset': 'src/tailwind/preset.ts',
  },
  format: ['esm', 'cjs'],
  dts: {
    compilerOptions: {
      skipLibCheck: true,
    },
  },
  sourcemap: true,
  clean: true,
  external: [
    'react',
    'react-dom',
    'tailwindcss',
  ],
  treeshake: true,
  splitting: false,
  async onSuccess() {
    // Prepend "use client" directive to component entry files
    const files = ['dist/index.js', 'dist/index.cjs']
    for (const file of files) {
      const path = join(process.cwd(), file)
      try {
        const content = readFileSync(path, 'utf-8')
        if (!content.startsWith('"use client"')) {
          writeFileSync(path, `"use client";\n${content}`)
        }
      } catch {}
    }
  },
})

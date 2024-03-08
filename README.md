# Learn Vite Typescript

Just a boiler template to start with `Vanilla Typescript`.

## Getting Started

* Running this command will automatically create a new folder for you.

```bash
npm create vite@latest
```

```bash
√ Project name: ... learn-vite-ts
√ Select a framework: » Vanilla
√ Select a variant: » TypeScript

Scaffolding project ...

Done. Now run:

  cd learn-vite-ts
  npm install
  npm run dev
```

## Vite Configuration

Create `vite.config.ts`

```ts
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 4200,
  },
  base: '',
  build: {
    outDir: 'docs',
    rollupOptions: {
      output: {
        format: 'umd',
      },
    },
  },
});
```

## Static Build

```bash
npm run build
```

Defer the injected `<script>`

```diff
-<script type="module" crossorigin src="./assets/index-CAIZZaCa.js"></script>
+<script defer src="./assets/index-CAIZZaCa.js"></script>
```

### Automatic defer every build

Create `scripts/defer-script.mjs`:

```js
import fs from 'fs';
import path from 'path';

const outDir = 'docs';
const indexPath = path.join(outDir, 'index.html');
const index = fs.readFileSync(indexPath, { encoding: 'utf-8' });
const regex = /type="module" crossorigin/i;
const update = index.replace(regex, 'defer');

fs.writeFileSync(path.join(indexPath), update, { encoding: 'utf-8' });
```

Update `package.json` script.

```diff
{
  "scripts": {
    "dev": "vite",
-   "build": "tsc && vite build",
+   "build": "tsc && vite build && npm run defer",
    "preview": "vite preview",
+   "defer": "node scripts/defer-script.mjs"
  }
}
```

## Tailwind

### Installation

```bash
npm install -D tailwindcss postcss autoprefixer
```

### Init Tailwind config

```bash
npx tailwindcss init -p
```

This will generate `tailwind.config.js` and `postcss.config.js`

### Update Tailwind config

```diff
/** @type {import('tailwindcss').Config} */
export default {
  content: [
+   "./index.html",
+   "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### Add Tailwind directives

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

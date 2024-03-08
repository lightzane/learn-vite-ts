import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="flex flex-col gap-y-8 opacity-0 animate-enter">
    <div class="flex items-center justify-center gap-x-14">
      <a href="https://vitejs.dev" target="_blank">
        <img src="${viteLogo}" class="logo !p-0" alt="Vite logo" />
      </a>
      <a href="https://www.typescriptlang.org/" target="_blank">
        <img src="${typescriptLogo}" class="logo vanilla !p-0" alt="TypeScript logo" />
      </a>
    </div>
    <h1 class="text-sky-500 font-semibold">Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button" class="bg-sky-500 text-white hover:text-white/90 !border-none !outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-white"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)

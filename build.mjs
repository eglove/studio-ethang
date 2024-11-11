import {projectBuilder} from '@ethang/project-builder/project-builder.js'

await projectBuilder('studio-ethang', 'main', {
  scripts: ['pnpm up -i --latest', 'pnpm dedupe', 'pnpm lint', 'pnpm build'],
  isLibrary: false,
})

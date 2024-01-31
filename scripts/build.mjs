/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import esbuild from 'esbuild'
import { commonOptions } from './config.mjs'

await esbuild.build({
  ...commonOptions,
  define: {
    isDevelopment: 'false'
  },
  minify: true
})

console.info('Compiled successfully')

/** @type {import('esbuild').BuildOptions} */
export const commonOptions = {
  bundle: true,
  entryPoints: ['src/index.tsx'],
  format: 'esm',
  jsx: 'automatic',
  loader: {
    '.module.css': 'local-css',
    '.svg': 'dataurl'
  },
  outfile: 'public/dist/bundle.js',
  target: 'es2018'
}

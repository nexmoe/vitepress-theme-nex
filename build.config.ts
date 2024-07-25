// build.config.ts
import { defineBuildConfig } from 'unbuild'
// import unocss from 'unocss/postcss'
import tailwindcss from 'tailwindcss'

export default defineBuildConfig({
    entries: [
        { builder: 'mkdist', input: './src/' },
        { builder: 'mkdist', input: './src/', format: 'cjs', ext: 'cjs' }
    ],
    clean: true,
    declaration: true,
    sourcemap: true,
    externals: ['vue'],
    hooks: {
        'mkdist:entry:options': (a, b, options) => {
            options.postcss = {
                ...options.postcss,
                plugins: [
                    // unocss()
                    tailwindcss()
                ]
            }
        }
    }
})
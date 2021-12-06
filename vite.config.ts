import { defineConfig } from 'vite'
import WindiCSS from 'vite-plugin-windicss'

export default defineConfig({
    build: {
        minify: false
    },
    plugins: [
        WindiCSS(),
    ]
})

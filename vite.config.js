import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { defineConfig } from 'vite'

import path from 'path'

export default {
    plugins: [vue(), vueJsx()],

    resolve: {
        extensions: [".js", '.vue', '.json', '.jsx', '.ts'],
        // alias: {
        //     '@': resolve('src')
        // }
        alias: {
            '@': path.resolve(__dirname, 'src'),
            'comps': path.resolve(__dirname, 'src/components')
        }
    }

}
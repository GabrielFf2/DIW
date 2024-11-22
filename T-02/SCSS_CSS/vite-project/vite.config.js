import { defineConfig } from 'vite';


export default defineConfig({
    root: './bootstrap-5.3.3',

    server:{
        port : 8888,
        strictPort : true,

    },
    build:{
        outDir: '../dist',
        emptyOutDir : true,
        minify: false
    }


});


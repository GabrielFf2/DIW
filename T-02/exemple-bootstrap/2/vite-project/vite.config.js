import { defineConfig } from 'vite';


export default defineConfig({
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


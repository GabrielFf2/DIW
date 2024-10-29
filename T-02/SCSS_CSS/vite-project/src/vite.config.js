import { defineConfig } from 'vite';


export default defineConfig({
    root: './src',

    server:{
        port : 8888,
        strictPort : true,

    },
    build:{
        outDir: '../dist',
        emptyOutDir : true
    }


});


///<reference types="vitest"/>
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from '@vitejs/plugin-vue-jsx';
import Unocss from "./config/unocss";

const rollupOptions={
    external:["vue","vue-router"],
    output:{
        globals:{
            vue:"Vue",
        }
    },
}


export default defineConfig({
    plugins:[
        vue(),
        vueJsx({

    }),
        Unocss()
    ],
    test:{
        globals:true,
        environment:'happy-dom',
        transformMode:{
            web:[/.[tj]sx$/]
        }
    },
    build:{
        rollupOptions,
        minify:false,
        cssCodeSplit:true,
        lib:{
            entry:"./src/entrys.ts",
            name:"SmartyUI",
            fileName:"smarty-ui",
            formats:['es','umd','iife'],
        }
    }
})


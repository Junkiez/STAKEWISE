import path from "path"
import react from "@vitejs/plugin-react"
import {defineConfig} from "vite"
import {htmlPrerender} from "vite-plugin-html-prerender";

export default defineConfig({
    plugins: [
        htmlPrerender({
            /**
             * Required: Output directory of "vite build"
             */
            staticDir: path.join(__dirname, "dist"),

            /**
             * Required: List of routes to pre-render.
             */
            routes: ["/"],

            /**
             * Optional: To minify html. Uses https://github.com/kangax/html-minifier.
             */
            minify: {
                collapseBooleanAttributes: true,
                collapseWhitespace: true,
                decodeEntities: true,
                keepClosingSlash: true,
                sortAttributes: true
            }
        }),
        react()
    ],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
})

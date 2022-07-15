import { defineConfig } from "vite";
import svgLoader from "vite-svg-loader";

export default defineConfig({
  plugins: [svgLoader()],
  // slidev: {
  //   vue: {
  //     /* vue options */
  //   },
  //   markdown: {
  //     /* markdown-it options */
  //     markdownItSetup(md) {
  //       /* custom markdown-it plugins */
  //       md.use(/* ... */)
  //     },
  //   },
  //   /* options for other plugins */
  // },
});

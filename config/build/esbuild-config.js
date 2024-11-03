const ESBuild = require('esbuild')
const path = require('path')
const CssModulesPlugin = require("esbuild-css-modules-plugin");

const mode = process.env.MODE || 'prod'

const isProd = mode === 'prod'

module.exports = {
    outdir: path.resolve(__dirname, '..', '..', 'build'),
    entryPoints: [path.resolve(__dirname, '..', '..', 'src', 'index.jsx')],
    entryNames: 'bundle',
    bundle: true,
    minify: isProd,
    sourcemap: !isProd,
    loader: {
        '.png': 'file',
        '.jpg': 'file',
        '.svg': 'file'},
    plugins: [
        CssModulesPlugin({
            // @see https://github.com/indooorsman/esbuild-css-modules-plugin/blob/main/index.d.ts for more details
            force: true,
            emitDeclarationFile: true,
            localsConvention: 'camelCaseOnly',
            namedExports: true,
            inject: false
        }),
    ],

}
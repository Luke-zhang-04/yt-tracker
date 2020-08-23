module.exports = {
    presets: ["@babel/preset-env"],
    plugins: [
        "babel-plugin-loop-optimizer",
        "minify-constant-folding",
        "minify-dead-code-elimination",
        "transform-merge-sibling-variables",
        "transform-minify-booleans"
    ],
    minified: true,
    shouldPrintComment: (val) => /@license/.test(val),
}

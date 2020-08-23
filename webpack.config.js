/* eslint-disable */

const path = require("path")

module.exports = [
    {
        entry: "./lib/index.js",
        output: {
            path: path.resolve(__dirname, "dist"),
            filename: "tracker.js",
            library: "tracker",
            libraryTarget: "umd",
        },
        mode: "production",
    },
    {
        entry: "./ui/lib/index.js",
        output: {
            path: path.resolve(__dirname, "ui/js"),
            filename: "script.js",
            library: "trackerUI",
            libraryTarget: "umd",
        },
        mode: "production",
    },
]

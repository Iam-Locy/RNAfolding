const path = require("path")

module.exports = {
    entry: "./src/index.js",
    module: {
        rules: [
            {
                test: /\.(mjs|js)$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            }
        ]
    },
    resolve:{
        extensions: ["*", ".js"]
    },
    output: {
        path: path.resolve(__dirname, "build"),
        publicPath: "/",
        filename: "script.bundle.js",
    },
    stats: {
        colors: true
    },
    mode: "production",
    devtool: "source-map"
}
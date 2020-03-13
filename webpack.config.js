const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./js/main.js",
    output: {
        path: path.resolve(__dirname, "./js"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.hbs$/,
                use: [{
                    loader: "handlebars-loader"
                }]
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html"
        })
    ]
};
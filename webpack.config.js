const path = require('path');
const webpack = require("webpack");

module.exports = {

    entry: {
        vendor: ["react", "react-dom"],
        index: "./public/js/main.js"
    },
    output: {
        path: path.resolve("./public/dist"),
        filename: "[name].js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style-loader!css-loader"  },
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    cacheDirectory: true,
                    presets: ['react', 'es2015']
                }
            }
        ]
    }
};

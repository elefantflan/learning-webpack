const path = require("path")

module.exports = {
    mode: "development",
    entry: {
        bundle:path.resolve(__dirname,"src/index.js")
    },
    output: {
        path: path.resolve(__dirname,"dist"),
        filename: "[name].js",
    },
    watch:true,
    module:{
        rules:[
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ],
    },
};
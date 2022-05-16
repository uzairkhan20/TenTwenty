const HtmlWebPackPlugin = require("html-webpack-plugin");
const htmlPlugin = new HtmlWebPackPlugin({
    template: "./src/index.html",
    filename: "./index.html"
});
module.exports = {
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                  {
                    loader: 'url-loader',
                    options: {
                      limit: 8192
                    }
                  }
                ]
              },
              {
                test: /\.svg/,
                use: {
                  loader: "svg-url-loader",
                  options: {
                    // make all svg images to work in IE
                    iesafe: true,
                  },
                },
              },
              {
                test: /\.mp4$/,
                use: 'file-loader?name=videos/[name].[ext]',
              }

        ]
    },
    plugins: [htmlPlugin]
};
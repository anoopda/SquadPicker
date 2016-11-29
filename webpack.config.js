module.exports = {
    entry: "./public/scripts/main.jsx",
    output: {
        path: __dirname + '/public/build/',
        filename: "bundle.js"
    },

    eslint: {
    configFile: './.eslintrc.js'
    },


    module: {
        loaders: [
            {
              test: /\.css$/,
              loader: ['style', 'css']
            },
            {
              test: /\.jsx$/,
              exclude: /node_modules/,
              loader: 'babel-loader',
              query: {
                presets: ['es2015', 'react']
              }
            }
             
        ]
    }

};

module.exports = {
    entry: './modules/main.js',
    output: {
        filename: "./js/bundle.js"
    },
    module:{
        loaders: [
            {test: /\.js$/, loaders: ""}
        ]
    },
    plugin: {},
    resolve: {},
    watch: true
};
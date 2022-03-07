const path = require("path");
const fs = require("fs");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { VueLoaderPlugin } = require('vue-loader');
const isDev = process.env.NODE_ENV === 'development';
const SVGSpritemapPlugin = require('svg-spritemap-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");
const { resolve } = require("path");
const templateName = path.resolve(__dirname, '..').split(path.sep).pop();
/*sprites path settings*/
const svgPath = '/sprites/spritemap.svg';

/*****************************************/

function generateHtmlPlugins(templateDir) {
  const templateFiles = fs.readdirSync(path.resolve(__dirname, templateDir));
  return templateFiles.map(item => {
    const parts = item.split(".");
    const name = parts[0];
    const extension = parts[1];
    return new HtmlWebpackPlugin({
      filename: `${name}.html`,
      template: path.resolve(__dirname, `${templateDir}/${name}.${extension}`),
      inject: false,
      svgPath: svgPath
    });
  });
}


const htmlPlugins = generateHtmlPlugins("./src/html/views");

const config = {
  entry: {
    main: ["./src/js/main.js", "./src/scss/main.scss"],
  },
  output: {
    filename: "./js/[name].bundle.js",
    clean: true,
    //Ниже настройки для cms,
    //Путь куда билдить файлы в шаблон CMS
    //publicPath : `/local/templates/${templateName}/assets/dist/`,
    //Создёт чанк с названием префикс_Хеш, для формирования Preload Link.
    //Нужен php скрипт, который по префиксу name будет получить путь до чанка и в head вставлять preload ссылку до чанка.
    //chunkFilename: 'js/[name]_[contenthash].js',
  },
  devtool: isDev ? "source-map" : false,
  mode: isDev ? "development" : "production",
  optimization: {
    minimize: !isDev,
    runtimeChunk: 'single',
    minimizer: [
      new TerserPlugin({
        extractComments: true,
        terserOptions: {
          sourceMap: isDev,
        },
      })
    ],
  },
  resolve: {
    extensions: ['.js', '.vue'],
    modules: ["node_modules"],
    alias: {
      '@': resolve('src'),
      vue : "vue/dist/vue.esm-bundler.js",
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [{
          loader: 'vue-loader'
        }],
        include: path.resolve(__dirname, "src/components")
      },
      {
        test: /\.(css|sass|scss)$/,
        include: [
          path.resolve(__dirname, "src/scss"),
          path.resolve(__dirname, "src/components"),
          path.resolve(__dirname, 'node_modules'),
        ],
        use: [{
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
            options: {
              url: false
            }
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [, ],
                sourceMap: isDev,
              },
            },
          },
          {
            loader: "sass-loader",
            options: {
              additionalData: `
                @import "./src/scss/_variables.scss";
                @import "~breakpoint-sass";
              `
            }
          }
        ]
      },
      {
        test: /\.html$/,
        include: path.resolve(__dirname, "src/html/includes"),
        use: ["raw-loader"]
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        include: path.resolve(__dirname, "src/fonts/"),
        use: [{
          loader: 'file-loader',
        }]
      }
    ]
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "./dist/"),
    },
    host: 'localhost',
    devMiddleware: {
      writeToDisk: false,
    },
    compress: true,
    port: 9000
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/[name].bundle.css",
    }),
    new SVGSpritemapPlugin('./src/svgicons/**/*.svg', {
      output: {
        filename: svgPath,
      }
    }),
    new CopyWebpackPlugin({
      patterns: [{
          from: "./src/fonts",
          to: "./fonts"
        },
        {
          from: "./src/favicon",
          to: "./favicon"
        },
        {
          from: "./src/img",
          to: "./img"
        },
        {
          from: "./src/uploads",
          to: "./uploads"
        }
      ]
    }),
  ].concat(htmlPlugins)
};

if (!isDev) {
  config.plugins.push(
    new CompressionPlugin({
      filename: "[path][base].gz",
      algorithm: 'gzip',
      test: /\.js$|\.svg$|\.css$$/,
      threshold: 10240,
      minRatio: 1
    }));
}

module.exports = (env, argv) => {
  if (argv.mode === "production") {

  }
  return config;
};

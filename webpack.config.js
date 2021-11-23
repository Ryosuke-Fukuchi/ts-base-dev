const path = require("path");

module.exports = {
  // モード値を production に設定すると最適化された状態で、
  // development に設定するとソースマップ有効でJSファイルが出力される
  mode: "development",

  // メインとなるJavaScriptファイル（エントリーポイント）
  entry: { bundle: "./src/index.ts" },

  // ファイルの出力設定
  output: {
    //  出力ファイルのディレクトリ名
    path: path.join(__dirname, "build"),
    // 出力ファイル名
    filename: "[name].js",
  },

  module: {
    rules: [
      {
        // 拡張子 .ts の場合
        test: /\.ts$/,
        // TypeScript をコンパイルする
        use: "ts-loader",
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "build"),
    }, // webpack-dev-serverの公開フォルダ
    open: true, // サーバー起動時にブラウザを開く
  },
  // import 文で .ts ファイルを解決するため
  resolve: {
    // 拡張子を配列で指定
    extensions: [".ts", ".js"],
  },
};

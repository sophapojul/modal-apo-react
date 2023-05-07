/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: [require("react-css-modules"), require("postcss-modules")],
};

module.exports = config;

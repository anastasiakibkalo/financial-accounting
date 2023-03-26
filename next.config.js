const withPlugins = require("next-compose-plugins");
const webpack = require("webpack");
const withImages = require("next-images");
const withFonts = require("next-fonts");
const path = require("path");
const { parsed: localEnv } = require("dotenv").config();

const nextConfig = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        "babel-loader",
        {
          loader: "@svgr/webpack",
          options: {
            svgo: {
              plugins: [{ removeViewBox: false }],
            },
          },
        },
      ],
    });

    config.plugins.push(
      new webpack.EnvironmentPlugin({
        NODE_ENV: "development", // use 'development' unless process.env.NODE_ENV is defined
        DEBUG: false,
      })
    );

    return config;
  },
};

module.exports = withPlugins(
  [
    [
      withImages,
      {
        exclude: path.join(__dirname, "src/assets/images"),
        removeViewBox: false,
      },
    ],
    withFonts,
    {
      i18n: {
        localeDetection: false,
        locales: ["uk", "ru"],
        defaultLocale: "uk",
      },
    },
  ],
  nextConfig
);

const mix = require("laravel-mix");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js(
    [
        "resources/js/bootstrap.js",
        "resources/js/jquery.bootstrap-duallistbox.js"
        // "./node_modules/jquery/dist/jquery.js"
    ],
    "public/js/vendor.js"
)
    .sass("resources/sass/app.scss", "public/css")
    .version();

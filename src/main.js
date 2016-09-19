"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var http_1 = require('@angular/http');
var app_1 = require('./app');
if (process.env.ENV === 'production') {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.bootstrap(app_1.AppComponent, [
    platform_browser_1.Title,
    http_1.HTTP_PROVIDERS,
    app_1.appRouterProviders
]).catch(function (err) { return console.error(err); });
//# sourceMappingURL=main.js.map
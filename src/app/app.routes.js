"use strict";
var router_1 = require('@angular/router');
var weather_station_component_1 = require('./weather-station/weather-station.component');
var dashboard_component_1 = require('./dashboard/dashboard.component');
var not_found_component_1 = require('./404/not-found.component');
var routes = [
    { path: '', redirectTo: '/overview', pathMatch: 'full' },
    { path: 'overview', component: dashboard_component_1.DashboardComponent },
    { path: 'weather-information', component: weather_station_component_1.WeatherStationComponent },
    { path: '**', component: not_found_component_1.NotFoundComponent }
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map
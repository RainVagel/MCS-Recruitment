"use strict";
/**
 * Created by rainvagel on 18.09.16.
 */
var Weather = (function () {
    function Weather(temp, baro, wind_dir, wind_len) {
        this.temp = temp;
        this.baro = baro;
        this.wind_dir = wind_dir;
        this.wind_len = wind_len;
    }
    return Weather;
}());
exports.Weather = Weather;
//# sourceMappingURL=weather.js.map
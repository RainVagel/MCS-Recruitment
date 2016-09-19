"use strict";
require('core-js/es6');
require('reflect-metadata');
require('zone.js/dist/zone');
if (process.env.ENV === 'production') {
}
else {
    // Development
    Error['stackTraceLimit'] = Infinity;
    /* tslint:disable-next-line:no-require-imports */
    require('zone.js/dist/long-stack-trace-zone');
}
//# sourceMappingURL=polyfills.js.map
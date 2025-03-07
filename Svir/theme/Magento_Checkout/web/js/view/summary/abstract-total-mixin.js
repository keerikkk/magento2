define([], function () {
    'use strict';

    const mixin = {
        isFullMode() {
            return !!this.getTotals();
        }
    };

    return function (target) {
        return target.extend(mixin);
    };
});

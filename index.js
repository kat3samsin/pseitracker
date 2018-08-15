var prompt = require('prompt');

prompt.get(['stockCode', 'cookie', 'startDate', 'endDate'], function (err, result) {
    var params = {
        stockCode: result.stockCode,
        cookie: result.cookie,
        startDate: result.startDate,
        endDate: result.endDate
    };

    var historicalBroker = require('./historicalbroker.js')();
    historicalBroker.getStockInfo(params);
});
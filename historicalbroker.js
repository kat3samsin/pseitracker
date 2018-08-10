var request = require('request');

module.exports = function () {
    return new HistoricalBroker();
};

var HistoricalBroker = function () {
};

HistoricalBroker.prototype.getStockInfo = function (params) {
    var request = require("request");
    var options = {
        method: 'POST',
        url: 'https://ph6.colfinancial.com/ape/FINAL2_STARTER/quotes/HistoricalBrokerTxOUT2.asp',
        headers: {
            // 'Postman-Token': '287802a5-4ee1-453a-95dc-85079212a9bb',
            'Cache-Control': 'no-cache',
            Cookie: params.cookie,
            mode: 'cors',
            method: 'POST',
            referrerPolicy: 'no-referrer-when-downgrade',
            referrer: 'https://ph6.colfinancial.com/ape/FINAL2_STARTER/quotes/HistoricalBrokerTxIN2.asp?SB=&ID=',
            headers: '{}',
            credentials: 'include',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        form: {
            SearchBy: 'Stock',
            ebrokerno: params.stockCode,
            cbDateFrom: params.startDate,
            cbDateTo: params.endDate,
            bsubmit: 'Search'
        }
    };

    request(options, function (error, response, body) {
        if (error) throw new Error(error);
        console.log(body);
    });
};
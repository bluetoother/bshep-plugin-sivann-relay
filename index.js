module.exports = {
    gattDefs: {
        service: [
            { name: 'dinServ', uuid: '0xbb00' },
            { name: 'ainServ', uuid: '0xbb10' },
            { name: 'pwrAndCurrServ', uuid: '0xbb30' },
            { name: 'relayServ', uuid: '0xbb40' }
        ],
        characteristic: [
            { name: 'ainMeasPeriod', uuid: '0xbb11', params: ['period'], types: ['uint8'] },
            { name: 'pwrAndCurrMeasPeriod', uuid: '0xbb31', params: ['period'], types: ['uint8'] }
        ]
     },
     analysis: function (periph, basicInfo) {
        var checkFlag = false;

        if (basicInfo.manufacturer === 'sivann' &&
            basicInfo.model === 'RelayModule' &&
            basicInfo.version.fw === 'v1.0.0' && 
            basicInfo.version.hw === 'v1.0.0' &&
            basicInfo.version.sw === 'v1.0.0')
            checkFlag = true;

        return checkFlag;
    }
};
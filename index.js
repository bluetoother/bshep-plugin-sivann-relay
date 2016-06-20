module.exports = {
    gattDefs: {
        service: [
            { name: 'pwrAndCurrServ', uuid: '0xbb30' },
            { name: 'relayServ', uuid: '0xbb40' }
        ],
        characteristic: [
            { name: 'pwrAndCurrMeasPeriod', uuid: '0xbb31', params: ['period'], types: ['uint8'] }
        ]
     },
     examine: function (periph, basicInfo) {
        var isMine = false;

        if (basicInfo.manufacturer === 'sivann' &&
            basicInfo.model === 'RelayModule' &&
            basicInfo.version.fw === 'v1.0.0' && 
            basicInfo.version.hw === 'v1.0.0' &&
            basicInfo.version.sw === 'v1.0.0')
            isMine = true;

        return isMine;
    }
};
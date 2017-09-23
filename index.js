module.exports = {
    gattDefs: {
        service: [
            { name: 'dInServ', uuid: '0xbb00' },
            { name: 'aInServ', uuid: '0xbb10' },
            { name: 'meteringServ', uuid: '0xbb30' },
            { name: 'relayServ', uuid: '0xbb40' },
            { name: 'pirServ', uuid: '0xbb90' }
        ],
        characteristic: [
            { name: 'aInConfig', uuid: '0xbb11', params: ['config'], types: ['boolean'] },
            { name: 'aInMeasPeriod', uuid: '0xbb12', params: ['period'], types: ['uint8'] },
            { name: 'meteringConfig', uuid: '0xbb31', params: ['config'], types: ['boolean'] },
            { name: 'meteringMeasPeriod', uuid: '0xbb32', params: ['period'], types: ['uint8'] }
        ]
     },
     examine: function (periph, basicInfo) {
        var isMine = false;

        if (basicInfo.manufacturer === 'sivann' &&
            basicInfo.devName === 'Power Meter Relay')
            isMine = true;

        return isMine;
    }
};

export const configWidgetPrice = {
    "symbols": [
        {
            "title": "BTC/USD",
            "proName": "BINANCE:BTCUSDT"
        },
        {
            "title": "ETH/USD",
            "proName": "BINANCE:ETHUSDT"
        },
        {
            "description": "XLM/USD",
            "proName": "COINBASE:XLMUSD"
        },
        {
            "description": "TRX/USD",
            "proName": "BINANCE:TRXUSDT"
        }
    ],
    "colorTheme": "dark",
    "isTransparent": false,
    "displayMode": "adaptive",
    "locale": "vi_VN"
};

export const configWidgetChart = {
    config: {
        'autosize': true,
        'symbol': 'BINANCE:BTCUSDT',
        'interval': 'D',
        'timezone': 'Asia/Bangkok',
        'theme': 'Dark',
        'style': '1',
        'locale': 'vi_VN',
        'toolbar_bg': '#f1f3f6',
        'enable_publishing': false,
        'hide_side_toolbar': false,
        'allow_symbol_change': true,
        'details': true,
        'show_popup_button': true,
        'container_id': 'widget-chart'
    },
    type: [{
        'code': 'BINANCE:BTCUSDT',
        'name': 'BTC/USD'
    }, {
        'code': 'BINANCE:ETHUSDT',
        'name': 'ETH/USD'
    }, {
        'code': 'COINBASE:BCHUS',
        'name': 'BCH/USD'
    }, {
        'code': 'BINANCE:ETCUSDT',
        'name': 'ETC/USD'
    }, {
        'code': 'COINBASE:XLMUSD',
        'name': 'XLM/USD'
    }, {
        'code': 'BINANCE:BNBUSDT',
        'name': 'BNB/USD'
    }, {
        'code': 'BINANCE:TRXUSDT',
        'name': 'TRX/USD'
    }, {
        'code': 'FX_IDC:USDVND',
        'name': 'VND/USD'
    }]
};

export const configWidgetCryptocurrency = {
    "height": "100%",
    "width": "100%",
    "defaultColumn": "overview",
    "screener_type": "crypto_mkt",
    "displayCurrency": "USD",
    "colorTheme": "dark",
    "transparency": false,
    "locale": "vi_VN"
}

export const configWidgetAnalysis = {
    config: {
        "showIntervalTabs": true,
        "height": "100%",
        "width": "100%",
        "colorTheme": "dark",
        "isTransparent": false,
        "locale": "vi_VN",
        "symbol": "BINANCE:BTCUSDT",
        "interval": "1m"
    },
    type: [{
        "name": "BTC/USD",
        "code": "BINANCE:BTCUSDT"
    }, {
        "name": "ETH/USD",
        "code": "BINANCE:ETHUSDT"
    }, {
        "name": "BCH/USD",
        "code": "COINBASE:BCHUSD"
    }, {
        "name": "ETC/USD",
        "code": "BINANCE:ETCUSDT"
    }, {
        "name": "XLM/USD",
        "code": "COINBASE:XLMUSD"
    }, {
        "name": "BNB/USD",
        "code": "BINANCE:BNBUSDT"
    }]

}

export const configWidgetChatRoom = {
    "height": "100%",
    "width": "100%",
    "theme": "dark",
    "colorTheme": "dark",
    "container_id": "widget-chatroom",
    "room": "bitcoin_vi_VN",
    "locale": "vi_VN"
}
export const configWidgetPriceFix = {
    "symbols": [
        {
            "description": "BTCUSDT",
            "proName": "BINANCE:BTCUSDT"
        },
        {
            "description": "BCHUSDT",
            "proName": "BINANCE:BCHUSDT"
        },
        {
            "description": "ETHUSDT",
            "proName": "BINANCE:ETHUSDT"
        },
        {
            "description": "ETCUSDT",
            "proName": "BINANCE:ETCUSDT"
        },
        {
            "description": "XRPUSDT",
            "proName": "BINANCE:XRPUSDT"
        },
        {
            "description": "TRXUSDT",
            "proName": "BINANCE:TRXUSDT"
        },
        {
            "description": "XLMUSDT",
            "proName": "BINANCE:XLMUSDT"
        },
        {
            "description": "EOSUSDT",
            "proName": "BINANCE:EOSUSDT"
        }
    ],
    "colorTheme": "dark",
    "isTransparent": false,
    "locale": navigator.language
};

export const configWidgetPrice = {
    "symbols": [
        // {
        //     "title": "BTC/USD",
        //     "proName": "BINANCE:BTCUSDT"
        // },
        // {
        //     "title": "ETH/USD",
        //     "proName": "BINANCE:ETHUSDT"
        // },
        // {
        //     "description": "XLM/USD",
        //     "proName": "COINBASE:XLMUSD"
        // },
        // {
        //     "description": "TRX/USD",
        //     "proName": "BINANCE:TRXUSDT"
        // }
    ],
    "colorTheme": "dark",
    "isTransparent": false,
    "displayMode": "adaptive",
    "locale": navigator.language
};

export const configWidgetChart = {
    config: {
        'autosize': true,
        'symbol': 'BINANCE:BTCUSDT',
        'interval': 'D',
        'timezone': 'Asia/Bangkok',
        'theme': 'Dark',
        'style': '1',
        'locale': navigator.language,
        'toolbar_bg': '#f1f3f6',
        'enable_publishing': false,
        'hide_side_toolbar': false,
        'allow_symbol_change': true,
        'details': true,
        'show_popup_button': true,
        'container_id': 'widget-chart',
        "studies": [ // https://www.tradingview.com/wiki/Widget:TradingView_Widget
            {
                "id": "MASimple@tv-basicstudies",
                "inputs": {
                    "length": 50
                }
            },
            {
                "id": "MASimple@tv-basicstudies",
                "inputs": {
                    "length": 200
                }
            },
            {
                "id": "MAExp@tv-basicstudies",
                "inputs": {
                    "length": 21
                }
            },
            {
                "id": "RSI@tv-basicstudies",
                "inputs": {
                    "length": 14
                }
            },
            {
                "id": "BB@tv-basicstudies",
                "inputs": {
                    "length": 20
                }
            }
        ]
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
        'code': 'BINANCE:XRPUSDT',
        'name': 'XRP/USD'
    }, {
        'code': 'BINANCE:TRXUSDT',
        'name': 'TRX/USD'
    }, {
        'code': 'BINANCE:TRXXRP',
        'name': 'TRX/XRP'
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
    "locale": navigator.language
}

export const configWidgetAnalysis = {
    config: {
        "showIntervalTabs": true,
        "height": "100%",
        "width": "100%",
        "colorTheme": "dark",
        "isTransparent": false,
        "locale": navigator.language,
        "symbol": "BINANCE:BTCUSDT",
        "interval": "1m"
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
        'code': 'BINANCE:XRPUSDT',
        'name': 'XRP/USD'
    }, {
        'code': 'BINANCE:TRXUSDT',
        'name': 'TRX/USD'
    }, {
        'code': 'BINANCE:TRXXRP',
        'name': 'TRX/XRP'
    }]

}

export const configWidgetChatRoom = {
    "height": "100%",
    "width": "100%",
    "theme": "dark",
    "colorTheme": "dark",
    "container_id": "widget-chatroom",
    "room": "bitcoin_vi_VN",
    "locale": navigator.language
}

export const FullLocales: any[] = [
    {
        value: "ar_BH",
        label: "Arabic – Bahrain"
    },
    {
        value: "ar_DZ",
        label: "Arabic – Algeria"
    },
    {
        value: "ar_EG",
        label: "Arabic – Egypt"
    },
    {
        value: "ar_IN",
        label: "Arabic – India"
    },
    {
        value: "ar_IQ",
        label: "Arabic – Iraq"
    },
    {
        value: "ar_JO",
        label: "Arabic – Jordan"
    },
    {
        value: "ar_KW",
        label: "Arabic – Kuwait"
    },
    {
        value: "ar_LB",
        label: "Arabic – Lebanon"
    },
    {
        value: "ar_LY",
        label: "Arabic – Libya"
    },
    {
        value: "ar_MA",
        label: "Arabic – Morocco"
    },
    {
        value: "ar_OM",
        label: "Arabic – Oman"
    },
    {
        value: "ar_QA",
        label: "Arabic – Qatar"
    },
    {
        value: "ar_SA",
        label: "Arabic – Saudi Arabia"
    },
    {
        value: "ar_SD",
        label: "Arabic – Sudan"
    },
    {
        value: "ar_SY",
        label: "Arabic – Syria"
    },
    {
        value: "ar_TN",
        label: "Arabic – Tunisia"
    },
    {
        value: "ar_YE",
        label: "Arabic – Yemen"
    },
    {
        value: "be_BY",
        label: "Belarusian – Belarus"
    },
    {
        value: "bg_BG",
        label: "Bulgarian – Bulgaria"
    },
    {
        value: "ca_ES",
        label: "Catalan – Spain"
    },
    {
        value: "cs_CZ",
        label: "Czech – Czech Republic"
    },
    {
        value: "da_DK",
        label: "Danish – Denmark"
    },
    {
        value: "de_AT",
        label: "German – Austria"
    },
    {
        value: "de_BE",
        label: "German – Belgium"
    },
    {
        value: "de_CH",
        label: "German – Switzerland"
    },
    {
        value: "de_DE",
        label: "German – Germany"
    },
    {
        value: "de_LU",
        label: "German – Luxembourg"
    },
    {
        value: "el_GR",
        label: "Greek – Greece"
    },
    {
        value: "en_AU",
        label: "English – Australia"
    },
    {
        value: "en_CA",
        label: "English – Canada"
    },
    {
        value: "en_GB",
        label: "English – United Kingdom"
    },
    {
        value: "en_IN",
        label: "English – India"
    },
    {
        value: "en_NZ",
        label: "English – New Zealand"
    },
    {
        value: "en_PH",
        label: "English – Philippines"
    },
    {
        value: "en_US",
        label: "English – United States"
    },
    {
        value: "en_ZA",
        label: "English – South Africa"
    },
    {
        value: "en_ZW",
        label: "English – Zimbabwe"
    },
    {
        value: "es_AR",
        label: "Spanish – Argentina"
    },
    {
        value: "es_BO",
        label: "Spanish – Bolivia"
    },
    {
        value: "es_CL",
        label: "Spanish – Chile"
    },
    {
        value: "es_CO",
        label: "Spanish – Colombia"
    },
    {
        value: "es_CR",
        label: "Spanish – Costa Rica"
    },
    {
        value: "es_DO",
        label: "Spanish – Dominican Republic"
    },
    {
        value: "es_EC",
        label: "Spanish – Ecuador"
    },
    {
        value: "es_ES",
        label: "Spanish – Spain"
    },
    {
        value: "es_GT",
        label: "Spanish – Guatemala"
    },
    {
        value: "es_HN",
        label: "Spanish – Honduras"
    },
    {
        value: "es_MX",
        label: "Spanish – Mexico"
    },
    {
        value: "es_NI",
        label: "Spanish – Nicaragua"
    },
    {
        value: "es_PA",
        label: "Spanish – Panama"
    },
    {
        value: "es_PE",
        label: "Spanish – Peru"
    },
    {
        value: "es_PR",
        label: "Spanish – Puerto Rico"
    },
    {
        value: "es_PY",
        label: "Spanish – Paraguay"
    },
    {
        value: "es_SV",
        label: "Spanish – El Salvador"
    },
    {
        value: "es_US",
        label: "Spanish – United States"
    },
    {
        value: "es_UY",
        label: "Spanish – Uruguay"
    },
    {
        value: "es_VE",
        label: "Spanish – Venezuela"
    },
    {
        value: "et_EE",
        label: "Estonian – Estonia"
    },
    {
        value: "eu_ES",
        label: "Basque – Basque"
    },
    {
        value: "fi_FI",
        label: "Finnish – Finland"
    },
    {
        value: "fo_FO",
        label: "Faroese – Faroe Islands"
    },
    {
        value: "fr_BE",
        label: "French – Belgium"
    },
    {
        value: "fr_CA",
        label: "French – Canada"
    },
    {
        value: "fr_CH",
        label: "French – Switzerland"
    },
    {
        value: "fr_FR",
        label: "French – France"
    },
    {
        value: "fr_LU",
        label: "French – Luxembourg"
    },
    {
        value: "gl_ES",
        label: "Galician – Spain"
    },
    {
        value: "gu_IN",
        label: "Gujarati – India"
    },
    {
        value: "he_IL",
        label: "Hebrew – Israel"
    },
    {
        value: "hi_IN",
        label: "Hindi – India"
    },
    {
        value: "hr_HR",
        label: "Croatian – Croatia"
    },
    {
        value: "hu_HU",
        label: "Hungarian – Hungary"
    },
    {
        value: "id_ID",
        label: "Indonesian – Indonesia"
    },
    {
        value: "is_IS",
        label: "Icelandic – Iceland"
    },
    {
        value: "it_CH",
        label: "Italian – Switzerland"
    },
    {
        value: "it_IT",
        label: "Italian – Italy"
    },
    {
        value: "ja_JP",
        label: "Japanese – Japan"
    },
    {
        value: "ko_KR",
        label: "Korean – Republic of Korea"
    },
    {
        value: "lt_LT",
        label: "Lithuanian – Lithuania"
    },
    {
        value: "lv_LV",
        label: "Latvian – Latvia"
    },
    {
        value: "mk_MK",
        label: "Macedonian – FYROM"
    },
    {
        value: "mn_MN",
        label: "Mongolia – Mongolian"
    },
    {
        value: "ms_MY",
        label: "Malay – Malaysia"
    },
    {
        value: "nb_NO",
        label: "Norwegian(Bokmål) – Norway"
    },
    {
        value: "nl_BE",
        label: "Dutch – Belgium"
    },
    {
        value: "nl_NL",
        label: "Dutch – The Netherlands"
    },
    {
        value: "no_NO",
        label: "Norwegian – Norway"
    },
    {
        value: "pl_PL",
        label: "Polish – Poland"
    },
    {
        value: "pt_BR",
        label: "Portugese – Brazil"
    },
    {
        value: "pt_PT",
        label: "Portugese – Portugal"
    },
    {
        value: "rm_CH",
        label: "Romansh – Switzerland"
    },
    {
        value: "ro_RO",
        label: "Romanian – Romania"
    },
    {
        value: "ru_RU",
        label: "Russian – Russia"
    },
    {
        value: "ru_UA",
        label: "Russian – Ukraine"
    },
    {
        value: "sk_SK",
        label: "Slovak – Slovakia"
    },
    {
        value: "sl_SI",
        label: "Slovenian – Slovenia"
    },
    {
        value: "sq_AL",
        label: "Albanian – Albania"
    },
    {
        value: "sr_RS",
        label: "Serbian – Yugoslavia"
    },
    {
        value: "sv_FI",
        label: "Swedish – Finland"
    },
    {
        value: "sv_SE",
        label: "Swedish – Sweden"
    },
    {
        value: "ta_IN",
        label: "Tamil – India"
    },
    {
        value: "te_IN",
        label: "Telugu – India"
    },
    {
        value: "th_TH",
        label: "Thai – Thailand"
    },
    {
        value: "tr_TR",
        label: "Turkish – Turkey"
    },
    {
        value: "uk_UA",
        label: "Ukrainian – Ukraine"
    },
    {
        value: "ur_PK",
        label: "Urdu – Pakistan"
    },
    {
        value: "vi_VN",
        label: "Vietnamese – Viet Nam"
    },
    {
        value: "zh_CN",
        label: "Chinese – China"
    },
    {
        value: "zh_HK",
        label: "Chinese – Hong Kong"
    },
    {
        value: "zh_TW",
        label: "Chinese – Taiwan Province"
    }
]

export const Cryptos: any[] = [
    {
        label: "Ethereum",
        value: "ETH/USDT"
    },
    {
        label: "Bitcoin Cash",
        value: "BCH/USDT"
    },
    {
        label: "XRP",
        value: "XRP/USDT"
    },
    {
        label: "Bitcoin Cash",
        value: "BCH/USDT"
    },
    // {
    //     label: "3X Short Bitcoin Token",
    //     value: "BEAR/USDT"
    // },
    // {
    //     label: "3X Short Ethereum Token",
    //     value: "ETHBEAR/USDT"
    // },
    // {
    //     label: "3X Long Bitcoin Token",
    //     value: "BULL/USDT"
    // },
    {
        label: "Ethereum",
        value: "ETH/BTC"
    },
    {
        label: "Binance Coin",
        value: "BNB/USDT"
    },
    {
        label: "Litecoin",
        value: "LTC/USDT"
    },
    {
        label: "EOS",
        value: "EOS/USDT"
    },
    // {
    //     label: "3X Long Ethereum Token",
    //     value: "ETHBULL/USDT"
    // },
    {
        label: "Bitcoin",
        value: "BTC/USDB"
    },
    {
        label: "Chainlink",
        value: "LINK/USDT"
    },
    {
        label: "Binance USD",
        value: "BUSD/USDT"
    },
    {
        label: "Litecoin",
        value: "LTC/USDT"
    },
    {
        label: "Chainlink",
        value: "LINK/USDT"
    },
    {
        label: "EOS",
        value: "EOS/USDT"
    },
    {
        label: "XRP",
        value: "XRP/BTC"
    },
    {
        label: "Ethereum Classic",
        value: "ETC/USDT"
    },
    {
        label: "Binance Coin",
        value: "BNB/USDT"
    },
    {
        label: "Bitcoin",
        value: "BTC/USDC"
    },
    {
        label: "Tezos",
        value: "XTZ/USDT"
    },
    {
        label: "Dash",
        value: "DASH/USDT"
    },
    {
        label: "Tezos",
        value: "XTZ/USDT"
    },
    {
        label: "Binance Coin",
        value: "BNB/BTC"
    },
    {
        label: "Ethereum Classic",
        value: "ETC/USDT"
    },
    {
        label: "Dash",
        value: "DASH/USDT"
    },
    {
        label: "USD Coin",
        value: "USDC/USDT"
    },
    {
        label: "Monero",
        value: "XMR/USDT"
    },
    {
        label: "Bitcoin",
        value: "BTC/USDT"
    },
    {
        label: "TRON",
        value: "TRX/USDT"
    },
    {
        label: "Cardano",
        value: "ADA/USDT"
    },
    {
        label: "TrueUSD",
        value: "TUSD/USDT"
    },
    {
        label: "Bitcoin Cash",
        value: "BCH/BTC"
    },
    {
        label: "Etherparty",
        value: "FUEL/BTC"
    },
    {
        label: "Monero",
        value: "XMR/USDT"
    },
    {
        label: "EOS",
        value: "EOS/BTC"
    },
    {
        label: "Bitcoin",
        value: "BTC/PAX"
    },
    {
        label: "Litecoin",
        value: "LTC/BTC"
    },
    {
        label: "Chainlink",
        value: "LINK/BTC"
    },
    {
        label: "TRON",
        value: "TRX/USDT"
    },
    {
        label: "VeChain",
        value: "VET/USDT"
    },
    {
        label: "Dash",
        value: "DASH/BTC"
    },
    // {
    //     label: "3X Long BNB Token",
    //     value: "BNBBULL/USDT"
    // },
    {
        label: "Paxos Standard",
        value: "PAX/USDT"
    },
    {
        label: "Cortex",
        value: "CTXC/BTC"
    },
    {
        label: "Monero",
        value: "XMR/BTC"
    },
    {
        label: "Zcash",
        value: "ZEC/USDT"
    },
    {
        label: "Metal",
        value: "MTL/BTC"
    },
    {
        label: "Tezos",
        value: "XTZ/BTC"
    },
    {
        label: "Stellar",
        value: "XLM/USDT"
    },
    {
        label: "Neo",
        value: "NEO/USDT"
    },
    {
        label: "Cardano",
        value: "ADA/USDT"
    },
    {
        label: "Matic Network",
        value: "MATIC/USDT"
    },
    {
        label: "iExec RLC",
        value: "RLC/BTC"
    },
    {
        label: "Neo",
        value: "NEO/USDT"
    },
    {
        label: "Zcash",
        value: "ZEC/USDT"
    },
    {
        label: "Agrello",
        value: "DLT/BTC"
    },
    {
        label: "WazirX",
        value: "WRX/USDT"
    },
    {
        label: "Stellar",
        value: "XLM/USDT"
    },
    {
        label: "Ethereum",
        value: "ETH/USDC"
    },
    {
        label: "Cosmos",
        value: "ATOM/USDT"
    },
    {
        label: "Ethereum",
        value: "ETH/BUSD"
    },
    // {
    //     label: "3X Short BNB Token",
    //     value: "BNBBEAR/USDT"
    // },
    {
        label: "Cosmos",
        value: "ATOM/USDT"
    },
    {
        label: "Ethereum",
        value: "ETH/TUSD"
    },
    {
        label: "WazirX",
        value: "WRX/BTC"
    },
    {
        label: "Enigma",
        value: "ENG/BTC"
    },
    {
        label: "Matic Network",
        value: "MATIC/BTC"
    },
    {
        label: "Cortex",
        value: "CTXC/USDT"
    },
    {
        label: "Ethereum Classic",
        value: "ETC/BTC"
    },
    {
        label: "Algorand",
        value: "ALGO/USDT"
    },
    {
        label: "Qtum",
        value: "QTUM/USDT"
    },
    {
        label: "VeChain",
        value: "VET/USDT"
    },
    {
        label: "Streamr DATAcoin",
        value: "DATA/BTC"
    },
    {
        label: "Ontology",
        value: "ONT/USDT"
    },
    {
        label: "Hedera Hashgraph",
        value: "HBAR/BTC"
    },
    {
        label: "Elrond",
        value: "ERD/USDT"
    },
    // {
    //     label: "3X Short Bitcoin Token",
    //     value: "BEAR/BUSD"
    // },
    {
        label: "Metal",
        value: "MTL/USDT"
    },
    {
        label: "Cardano",
        value: "ADA/BTC"
    },
    {
        label: "Basic Attention Token",
        value: "BAT/USDT"
    },
    // {
    //     label: "3X Long Bitcoin Token",
    //     value: "BULL/BUSD"
    // },
    {
        label: "IOST",
        value: "IOST/USDT"
    },
    {
        label: "Hedera Hashgraph",
        value: "HBAR/USDT"
    },
    {
        label: "Stellar",
        value: "XLM/BTC"
    },
    {
        label: "BitTorrent",
        value: "BTT/USDT"
    },
    {
        label: "Kyber Network",
        value: "KNC/BTC"
    },
    {
        label: "Dusk Network",
        value: "DUSK/BTC"
    },
    // {
    //     label: "3X Long Ethereum Token",
    //     value: "ETHBULL/BUSD"
    // },
    {
        label: "Litecoin",
        value: "LTC/USDC"
    },
    {
        label: "Cosmos",
        value: "ATOM/BTC"
    },
    {
        label: "Enjin Coin",
        value: "ENJ/BTC"
    },
    // {
    //     label: "3X Short Ethereum Token",
    //     value: "ETHBEAR/BUSD"
    // },
    {
        label: "Zcash",
        value: "ZEC/BTC"
    },
    {
        label: "TRON",
        value: "TRX/BTC"
    },
    {
        label: "Fetch.ai",
        value: "FET/BTC"
    },
    {
        label: "Ethereum",
        value: "ETH/PAX"
    },
    {
        label: "Ontology",
        value: "ONT/USDT"
    },
    {
        label: "ICON",
        value: "ICX/USDT"
    },
    {
        label: "Chiliz",
        value: "CHZ/BTC"
    },
    {
        label: "Neo",
        value: "NEO/BTC"
    },
    {
        label: "Augur",
        value: "REP/BTC"
    },
    {
        label: "XRP",
        value: "XRP/ETH"
    },
    {
        label: "Origin Protocol",
        value: "OGN/USDT"
    },
    {
        label: "Algorand",
        value: "ALGO/BTC"
    },
    {
        label: "Origin Protocol",
        value: "OGN/BTC"
    },
    {
        label: "AppCoins",
        value: "APPC/BTC"
    },
    {
        label: "Binance Coin",
        value: "BNB/ETH"
    },
    {
        label: "Basic Attention Token",
        value: "BAT/BTC"
    },
    {
        label: "IOTA",
        value: "IOTA/USDT"
    },
    {
        label: "Basic Attention Token",
        value: "BAT/USDT"
    },
    {
        label: "Bitcoin Cash",
        value: "BCH/TUSD"
    },
    {
        label: "Fetch.ai",
        value: "FET/USDT"
    },
    {
        label: "VeChain",
        value: "VET/BTC"
    },
    {
        label: "iExec RLC",
        value: "RLC/USDT"
    },
    // {
    //     label: "COTI",
    //     value: "COTI/BTC"
    // },
    {
        label: "Everex",
        value: "EVX/BTC"
    },
    {
        label: "XRP",
        value: "XRP/BUSD"
    },
    {
        label: "Bitcoin",
        value: "BTC/EUR"
    },
    {
        label: "WINk",
        value: "WIN/USDT"
    },
    {
        label: "Steem",
        value: "STEEM/BTC"
    },
    {
        label: "Dogecoin",
        value: "DOGE/USDT"
    },
    {
        label: "Bitcoin",
        value: "BTC/NGN"
    },
    {
        label: "Enjin Coin",
        value: "ENJ/USDT"
    },
    {
        label: "Standard Tokenization Protocol",
        value: "STPT/BTC"
    },
    {
        label: "TRON",
        value: "TRX/ETH"
    },
    {
        label: "Litecoin",
        value: "LTC/TUSD"
    },
    {
        label: "Bitcoin Cash",
        value: "BCH/USDC"
    },
    {
        label: "Ravencoin",
        value: "RVN/BTC"
    },
    {
        label: "EOS",
        value: "EOS/ETH"
    },
    {
        label: "Binance Coin",
        value: "BNB/BUSD"
    },
    {
        label: "WePower",
        value: "WPR/BTC"
    },
    {
        label: "Status",
        value: "SNT/BTC"
    },
    {
        label: "Bitcoin Cash",
        value: "BCH/PAX"
    },
    {
        label: "NULS",
        value: "NULS/BTC"
    },
    {
        label: "Elrond",
        value: "ERD/BTC"
    },
    {
        label: "XRP",
        value: "XRP/USDC"
    },
    {
        label: "ICON",
        value: "ICX/BTC"
    },
    {
        label: "Waves",
        value: "WAVES/USDT"
    },
    {
        label: "MovieBloc",
        value: "MBL/USDT"
    },
    {
        label: "Chainlink",
        value: "LINK/ETH"
    },
    {
        label: "Band Protocol",
        value: "BAND/USDT"
    },
    {
        label: "Ravencoin",
        value: "RVN/USDT"
    },
    {
        label: "Waves",
        value: "WAVES/BTC"
    },
    // {
    //     label: "3X Long BNB Token",
    //     value: "BNBBULL/BUSD"
    // },
    {
        label: "Syscoin",
        value: "SYS/BTC"
    },
    {
        label: "Blockstack",
        value: "STX/BTC"
    },
    {
        label: "MCO",
        value: "MCO/BTC"
    },
    {
        label: "THETA",
        value: "THETA/BTC"
    },
    {
        label: "TomoChain",
        value: "TOMO/BTC"
    },
    {
        label: "TomoChain",
        value: "TOMO/USDT"
    },
    {
        label: "Loopring",
        value: "LRC/BTC"
    },
    {
        label: "Qtum",
        value: "QTUM/BTC"
    },
    {
        label: "Harmony",
        value: "ONE/BTC"
    },
    {
        label: "Perlin",
        value: "PERL/BTC"
    },
    {
        label: "Band Protocol",
        value: "BAND/BTC"
    },
    {
        label: "Blockmason Credit Protocol",
        value: "BCPT/BTC"
    },
    {
        label: "Dusk Network",
        value: "DUSK/USDT"
    },
    {
        label: "Ontology",
        value: "ONT/BTC"
    },
    {
        label: "Viberate",
        value: "VIB/BTC"
    },
    {
        label: "NULS",
        value: "NULS/USDT"
    },
    {
        label: "Ankr",
        value: "ANKR/BTC"
    },
    {
        label: "Aion",
        value: "AION/USDT"
    },
    {
        label: "Bitcoin Cash",
        value: "BCH/BUSD"
    },
    {
        label: "XRP",
        value: "XRP/TUSD"
    },
    {
        label: "IOTA",
        value: "IOTA/BTC"
    },
    {
        label: "COTI",
        value: "COTI/USDT"
    },
    {
        label: "XRP",
        value: "XRP/BNB"
    },
    {
        label: "Ankr",
        value: "ANKR/USDT"
    },
    {
        label: "Bitcoin Cash",
        value: "BCH/BNB"
    },
    {
        label: "NEM",
        value: "XEM/BTC"
    },
    {
        label: "Zilliqa",
        value: "ZIL/USDT"
    },
    {
        label: "Waltonchain",
        value: "WTC/BTC"
    },
    {
        label: "Ren",
        value: "REN/BTC"
    },
    {
        label: "Aion",
        value: "AION/BTC"
    },
    {
        label: "Dogecoin",
        value: "DOGE/BTC"
    },
    {
        label: "Eidoo",
        value: "EDO/BTC"
    },
    {
        label: "Nebulas",
        value: "NAS/BTC"
    },
    {
        label: "Chiliz",
        value: "CHZ/USDT"
    },
    {
        label: "Aeron",
        value: "ARN/BTC"
    },
    {
        label: "0x",
        value: "ZRX/BTC"
    },
    {
        label: "Nano",
        value: "NANO/BTC"
    },
    {
        label: "FTX Token",
        value: "FTT/BTC"
    },
    {
        label: "Nano",
        value: "NANO/USDT"
    },
    {
        label: "Bitcoin Gold",
        value: "BTG/BTC"
    },
    {
        label: "GoChain",
        value: "GO/BTC"
    },
    {
        label: "EOS",
        value: "EOS/USDC"
    },
    {
        label: "LTO Network",
        value: "LTO/BTC"
    },
    {
        label: "Blockstack",
        value: "STX/USDT"
    },
    {
        label: "Metal",
        value: "MTL/ETH"
    },
    {
        label: "Litecoin",
        value: "LTC/PAX"
    },
    {
        label: "Power Ledger",
        value: "POWR/BTC"
    },
    {
        label: "0x",
        value: "ZRX/USDT"
    },
    {
        label: "Perlin",
        value: "PERL/USDT"
    },
    {
        label: "EOS",
        value: "EOS/BNB"
    },
    {
        label: "aelf",
        value: "ELF/BTC"
    },
    {
        label: "Litecoin",
        value: "LTC/BUSD"
    },
    // {
    //     label: "3X Short BNB Token",
    //     value: "BNBBEAR/BUSD"
    // },
    {
        label: "PIVX",
        value: "PIVX/BTC"
    },
    {
        label: "Kava",
        value: "KAVA/USDT"
    },
    {
        label: "Litecoin",
        value: "LTC/ETH"
    },
    {
        label: "Harmony",
        value: "ONE/USDT"
    },
    {
        label: "Standard Tokenization Protocol",
        value: "STPT/USDT"
    },
    {
        label: "Lisk",
        value: "LSK/BTC"
    },
    {
        label: "HyperCash",
        value: "HC/BTC"
    },
    {
        label: "Bitcoin",
        value: "BTC/TRY"
    },
    {
        label: "Tether",
        value: "USDT/TRY"
    },
    {
        label: "Blox",
        value: "CDT/BTC"
    },
    {
        label: "Aave",
        value: "LEND/BTC"
    },
    {
        label: "Bread",
        value: "BRD/BTC"
    },
    {
        label: "Beam",
        value: "BEAM/BTC"
    },
    {
        label: "Verge",
        value: "XVG/BTC"
    },
    {
        label: "Stratis",
        value: "STRAT/BTC"
    },
    {
        label: "THETA",
        value: "THETA/USDT"
    },
    {
        label: "OmiseGO",
        value: "OMG/BTC"
    },
    {
        label: "Decentraland",
        value: "MANA/BTC"
    },
    {
        label: "iExec RLC",
        value: "RLC/ETH"
    },
    {
        label: "YOYOW",
        value: "YOYO/BTC"
    },
    {
        label: "SingularityNET",
        value: "AGI/BTC"
    },
    {
        label: "TRON",
        value: "TRX/USDC"
    },
    {
        label: "VIBE",
        value: "VIBE/BTC"
    },
    {
        label: "Chainlink",
        value: "LINK/USDC"
    },
    {
        label: "Storj",
        value: "STORJ/BTC"
    },
    {
        label: "Holo",
        value: "HOT/USDT"
    },
    {
        label: "Litecoin",
        value: "LTC/BNB"
    },
    {
        label: "Beam",
        value: "BEAM/USDT"
    },
    {
        label: "Aeternity",
        value: "AE/BTC"
    },
    {
        label: "Fantom",
        value: "FTM/BTC"
    },
    {
        label: "Ren",
        value: "REN/USDT"
    },
    {
        label: "TRON",
        value: "TRX/BUSD"
    },
    {
        label: "Dash",
        value: "DASH/ETH"
    },
    {
        label: "Zilliqa",
        value: "ZIL/BTC"
    },
    {
        label: "TROY",
        value: "TROY/BTC"
    },
    {
        label: "TRON",
        value: "TRX/BNB"
    },
    {
        label: "TRON",
        value: "TRX/XRP"
    },
    {
        label: "Raiden Network Token",
        value: "RDN/BTC"
    },
    {
        label: "EOS",
        value: "EOS/BUSD"
    },
    {
        label: "Tael",
        value: "WABI/BTC"
    },
    {
        label: "Bitcoin",
        value: "BTC/RUB"
    },
    {
        label: "Kava",
        value: "KAVA/BTC"
    },
    {
        label: "Enigma",
        value: "ENG/ETH"
    },
    {
        label: "VeChain",
        value: "VET/ETH"
    },
    {
        label: "OmiseGO",
        value: "OMG/USDT"
    },
    {
        label: "Moeda Loyalty Points",
        value: "MDA/BTC"
    },
    {
        label: "XRP",
        value: "XRP/PAX"
    },
    {
        label: "Kyber Network",
        value: "KNC/ETH"
    },
    {
        label: "IOST",
        value: "IOST/BTC"
    },
    {
        label: "Voyager Token",
        value: "BQX/BTC"
    },
    {
        label: "Binance Coin",
        value: "BNB/TUSD"
    },
    {
        label: "Fantom",
        value: "FTM/USDT"
    },
    {
        label: "Lunyr",
        value: "LUN/BTC"
    },
    {
        label: "OAX",
        value: "OAX/BTC"
    },
    {
        label: "Cardano",
        value: "ADA/ETH"
    },
    {
        label: "Ark",
        value: "ARK/BTC"
    },
    {
        label: "FTX Token",
        value: "FTT/USDT"
    },
    {
        label: "Neblio",
        value: "NEBL/BTC"
    },
    {
        label: "Loom Network",
        value: "LOOM/BTC"
    },
    {
        label: "Decred",
        value: "DCR/BTC"
    },
    {
        label: "Populous",
        value: "PPT/BTC"
    },
    {
        label: "Storm",
        value: "STORM/BTC"
    },
    {
        label: "Po.et",
        value: "POE/BTC"
    },
    {
        label: "TRON",
        value: "TRX/PAX"
    },
    {
        label: "Chainlink",
        value: "LINK/BUSD"
    },
    {
        label: "Zcoin",
        value: "XZC/BTC"
    },
    {
        label: "Nexus",
        value: "NXS/BTC"
    },
    {
        label: "GXChain",
        value: "GXS/BTC"
    },
    {
        label: "ARPA Chain",
        value: "ARPA/BTC"
    },
    {
        label: "Monero",
        value: "XMR/ETH"
    },
    {
        label: "LTO Network",
        value: "LTO/USDT"
    },
    {
        label: "Chainlink",
        value: "LINK/TUSD"
    },
    {
        label: "TRON",
        value: "TRX/TUSD"
    },
    {
        label: "Holo",
        value: "HOT/ETH"
    },
    {
        label: "Wanchain",
        value: "WAN/BTC"
    },
    {
        label: "Dock",
        value: "DOCK/BTC"
    },
    {
        label: "ARPA Chain",
        value: "ARPA/USDT"
    },
    {
        label: "Tether",
        value: "USDT/RUB"
    },
    {
        label: "Genesis Vision",
        value: "GVT/BTC"
    },
    {
        label: "Bitcoin Diamond",
        value: "BCD/BTC"
    },
    {
        label: "Ontology Gas",
        value: "ONG/BTC"
    },
    {
        label: "Ethereum",
        value: "ETH/TRY"
    },
    {
        label: "Binance Coin",
        value: "BNB/USDC"
    },
    {
        label: "Ardor",
        value: "ARDR/BTC"
    },
    {
        label: "Tezos",
        value: "XTZ/BUSD"
    },
    {
        label: "Komodo",
        value: "KMD/BTC"
    },
    {
        label: "Dash",
        value: "DASH/BNB"
    },
    {
        label: "POA",
        value: "POA/BTC"
    },
    {
        label: "Aave",
        value: "LEND/ETH"
    },
    {
        label: "XRP",
        value: "XRP/TRY"
    },
    {
        label: "TROY",
        value: "TROY/USDT"
    },
    {
        label: "USD Coin",
        value: "USDC/PAX"
    },
    {
        label: "Celer Network",
        value: "CELR/USDT"
    },
    {
        label: "Agrello",
        value: "DLT/ETH"
    },
    {
        label: "Polymath",
        value: "POLY/BTC"
    },
    {
        label: "Harmony",
        value: "ONE/USDC"
    },
    {
        label: "EOS",
        value: "EOS/TUSD"
    },
    {
        label: "Siacoin",
        value: "SC/BTC"
    },
    {
        label: "Lisk",
        value: "LSK/USDT"
    },
    {
        label: "Ambrosus",
        value: "AMB/BTC"
    },
    {
        label: "Status",
        value: "SNT/ETH"
    },
    {
        label: "Binance USD",
        value: "BUSD/NGN"
    },
    {
        label: "Contentos",
        value: "COS/BTC"
    },
    {
        label: "WINk",
        value: "WIN/TRX"
    },
    {
        label: "Neo",
        value: "NEO/ETH"
    },
    {
        label: "Waves",
        value: "WAVES/ETH"
    },
    {
        label: "CyberMiles",
        value: "CMT/BTC"
    },
    {
        label: "Augur",
        value: "REP/ETH"
    },
    {
        label: "MCO",
        value: "MCO/USDT"
    },
    {
        label: "Selfkey",
        value: "KEY/BTC"
    },
    {
        label: "MovieBloc",
        value: "MBL/BTC"
    },
    {
        label: "Fetch.ai",
        value: "FET/BNB"
    },
    {
        label: "Pundi X",
        value: "NPXS/ETH"
    },
    {
        label: "Dent",
        value: "DENT/ETH"
    },
    {
        label: "Tierion",
        value: "TNT/BTC"
    },
    {
        label: "BitTorrent",
        value: "BTT/TRX"
    },
    {
        label: "QuarkChain",
        value: "QKC/BTC"
    },
    {
        label: "Red Pulse Phoenix",
        value: "PHB/BTC"
    },
    {
        label: "Stellar",
        value: "XLM/ETH"
    },
    {
        label: "Ethereum Classic",
        value: "ETC/ETH"
    },
    {
        label: "USD Coin",
        value: "USDC/TUSD"
    },
    {
        label: "Viacoin",
        value: "VIA/BTC"
    },
    {
        label: "Dash",
        value: "DASH/BUSD"
    },
    {
        label: "Nebulas",
        value: "NAS/ETH"
    },
    {
        label: "NKN",
        value: "NKN/BTC"
    },
    {
        label: "Matic Network",
        value: "MATIC/BNB"
    },
    {
        label: "Ontology Gas",
        value: "ONG/USDT"
    },
    {
        label: "Bluzelle",
        value: "BLZ/BTC"
    },
    {
        label: "Ethereum",
        value: "ETH/EUR"
    },
    {
        label: "Streamr DATAcoin",
        value: "DATA/ETH"
    },
    {
        label: "Enjin Coin",
        value: "ENJ/ETH"
    },
    {
        label: "Algorand",
        value: "ALGO/TUSD"
    },
    {
        label: "Civic",
        value: "CVC/BTC"
    },
    {
        label: "Cindicator",
        value: "CND/BTC"
    },
    {
        label: "SONM",
        value: "SNM/BTC"
    },
    {
        label: "AdEx",
        value: "ADX/BTC"
    },
    {
        label: "Stratis",
        value: "STRAT/USDT"
    },
    {
        label: "Skycoin",
        value: "SKY/BTC"
    },
    {
        label: "Theta Fuel",
        value: "TFUEL/BTC"
    },
    {
        label: "Tezos",
        value: "XTZ/BNB"
    },
    {
        label: "SingularDTV",
        value: "SNGLS/BTC"
    },
    {
        label: "Qtum",
        value: "QTUM/ETH"
    },
    {
        label: "AirSwap",
        value: "AST/BTC"
    },
    {
        label: "Holo",
        value: "HOT/BTC"
    },
    {
        label: "WINk",
        value: "WIN/USDC"
    },
    {
        label: "Harmony",
        value: "ONE/BNB"
    },
    {
        label: "Loopring",
        value: "LRC/ETH"
    },
    {
        label: "WINk",
        value: "WIN/BNB"
    },
    {
        label: "Celer Network",
        value: "CELR/BTC"
    },
    {
        label: "IOTA",
        value: "IOTA/ETH"
    },
    {
        label: "NULS",
        value: "NULS/ETH"
    },
    {
        label: "Neo",
        value: "NEO/TUSD"
    },
    {
        label: "Pundi X",
        value: "NPXS/USDT"
    },
    {
        label: "Ripio Credit Network",
        value: "RCN/BTC"
    },
    {
        label: "Monetha",
        value: "MTH/BTC"
    },
    {
        label: "NavCoin",
        value: "NAV/BTC"
    },
    {
        label: "Request",
        value: "REQ/BTC"
    },
    {
        label: "Zcash",
        value: "ZEC/ETH"
    },
    {
        label: "EOS",
        value: "EOS/PAX"
    },
    {
        label: "Wanchain",
        value: "WAN/USDT"
    },
    {
        label: "HyperCash",
        value: "HC/USDT"
    },
    {
        label: "Quantstamp",
        value: "QSP/BTC"
    },
    {
        label: "Basic Attention Token",
        value: "BAT/ETH"
    },
    {
        label: "Groestlcoin",
        value: "GRS/BTC"
    },
    {
        label: "Horizen",
        value: "ZEN/BTC"
    },
    {
        label: "DREP",
        value: "DREP/BTC"
    },
    {
        label: "XRP",
        value: "XRP/EUR"
    },
    {
        label: "Civic",
        value: "CVC/USDT"
    },
    {
        label: "Gifto",
        value: "GTO/USDT"
    },
    {
        label: "Zilliqa",
        value: "ZIL/ETH"
    },
    {
        label: "Gifto",
        value: "GTO/BTC"
    },
    {
        label: "WazirX",
        value: "WRX/BNB"
    },
    {
        label: "Gas",
        value: "GAS/BTC"
    },
    {
        label: "BitShares",
        value: "BTS/BTC"
    },
    {
        label: "iExec RLC",
        value: "RLC/BNB"
    },
    {
        label: "Binance USD",
        value: "BUSD/RUB"
    },
    {
        label: "OST",
        value: "OST/BTC"
    },
    {
        label: "NKN",
        value: "NKN/USDT"
    },
    {
        label: "Cardano",
        value: "ADA/TUSD"
    },
    {
        label: "TokenClub",
        value: "TCT/BTC"
    },
    {
        label: "Viberate",
        value: "VIB/ETH"
    },
    {
        label: "Mithril",
        value: "MITH/BTC"
    },
    {
        label: "Band Protocol",
        value: "BAND/BNB"
    },
    {
        label: "Everex",
        value: "EVX/ETH"
    },
    {
        label: "Decentraland",
        value: "MANA/ETH"
    },
    {
        label: "Steem",
        value: "STEEM/ETH"
    },
    {
        label: "BitTorrent",
        value: "BTT/USDC"
    },
    {
        label: "BitTorrent",
        value: "BTT/BNB"
    },
    {
        label: "Basic Attention Token",
        value: "BAT/USDC"
    },
    {
        label: "Zcash",
        value: "ZEC/TUSD"
    },
    {
        label: "Dent",
        value: "DENT/USDT"
    },
    {
        label: "Storm",
        value: "STORM/USDT"
    },
    {
        label: "Aeron",
        value: "ARN/ETH"
    },
    {
        label: "Paxos Standard",
        value: "PAX/TUSD"
    },
    {
        label: "Hedera Hashgraph",
        value: "HBAR/BNB"
    },
    {
        label: "Cocos-BCX",
        value: "COCOS/USDT"
    }
];

configWidgetPrice.symbols = [];
Cryptos.forEach(e => {
    configWidgetPrice.symbols.push(
        {
            "description": e.value.replace('/', ""),
            "proName": `BINANCE:${e.value.replace('/', "")}`
        }
    );
});
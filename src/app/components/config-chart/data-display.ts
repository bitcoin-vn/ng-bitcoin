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
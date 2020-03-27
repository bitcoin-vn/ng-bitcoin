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

export const localeFormats = [
    "ar_SA",
    "bg_BG",
    "ca_ES",
    "zh_TW",
    "cs_CZ",
    "da_DK",
    "de_DE",
    "el_GR",
    "en_US",
    "fi_FI",
    "fr_FR",
    "he_IL",
    "hu_HU",
    "is_IS",
    "it_IT",
    "ja_JP",
    "ko_KR",
    "nl_NL",
    "nb_NO",
    "pl_PL",
    "pt_BR",
    "ro_RO",
    "ru_RU",
    "hr_HR",
    "sk_SK",
    "sq_AL",
    "sv_SE",
    "th_TH",
    "tr_TR",
    "ur_PK",
    "id_ID",
    "uk_UA",
    "be_BY",
    "sl_SI",
    "et_EE",
    "lv_LV",
    "lt_LT",
    "fa_IR",
    "vi_VN",
    "hy_AM",
    "az_Latn_AZ",
    "eu_ES",
    "mk_MK",
    "af_ZA",
    "ka_GE",
    "fo_FO",
    "hi_IN",
    "ms_MY",
    "kk_KZ",
    "ky_KG",
    "sw_KE",
    "uz_Latn_UZ",
    "tt_RU",
    "pa_IN",
    "gu_IN",
    "ta_IN",
    "te_IN",
    "kn_IN",
    "mr_IN",
    "sa_IN",
    "mn_MN",
    "gl_ES",
    "kok_IN",
    "syr_SY",
    "dv_MV",
    "ar_IQ",
    "zh_CN",
    "de_CH",
    "en_GB",
    "es_MX",
    "fr_BE",
    "it_CH",
    "nl_BE",
    "nn_NO",
    "pt_PT",
    "sr_Latn_CS",
    "sv_FI",
    "az_Cyrl_AZ",
    "ms_BN",
    "uz_Cyrl_UZ",
    "ar_EG",
    "zh_HK",
    "de_AT",
    "en_AU",
    "es_ES",
    "fr_CA",
    "sr_Cyrl_CS",
    "ar_LY",
    "zh_SG",
    "de_LU",
    "en_CA",
    "es_GT",
    "fr_CH",
    "ar_DZ",
    "zh_MO",
    "de_LI",
    "en_NZ",
    "es_CR",
    "fr_LU",
    "ar_MA",
    "en_IE",
    "es_PA",
    "fr_MC",
    "ar_TN",
    "en_ZA",
    "es_DO",
    "ar_OM",
    "en_JM",
    "es_VE",
    "ar_YE",
    "en_029",
    "es_CO",
    "ar_SY",
    "en_BZ",
    "es_PE",
    "ar_JO",
    "en_TT",
    "es_AR",
    "ar_LB",
    "en_ZW",
    "es_EC",
    "ar_KW",
    "en_PH",
    "es_CL",
    "ar_AE",
    "es_UY",
    "ar_BH",
    "es_PY",
    "ar_QA",
    "es_BO",
    "es_SV",
    "es_HN",
    "es_NI",
    "es_PR",
    "am_ET",
    "tzm_Latn_DZ",
    "iu_Latn_CA",
    "sma_NO",
    "mn_Mong_CN",
    "gd_GB",
    "en_MY",
    "prs_AF",
    "bn_BD",
    "wo_SN",
    "rw_RW",
    "qut_GT",
    "sah_RU",
    "gsw_FR",
    "co_FR",
    "oc_FR",
    "mi_NZ",
    "ga_IE",
    "se_SE",
    "br_FR",
    "smn_FI",
    "moh_CA",
    "arn_CL",
    "ii_CN",
    "dsb_DE",
    "ig_NG",
    "kl_GL",
    "lb_LU",
    "ba_RU",
    "nso_ZA",
    "quz_BO",
    "yo_NG",
    "ha_Latn_NG",
    "fil_PH",
    "ps_AF",
    "fy_NL",
    "ne_NP",
    "se_NO",
    "iu_Cans_CA",
    "sr_Latn_RS",
    "si_LK",
    "sr_Cyrl_RS",
    "lo_LA",
    "km_KH",
    "cy_GB",
    "bo_CN",
    "sms_FI",
    "as_IN",
    "ml_IN",
    "en_IN",
    "or_IN",
    "bn_IN",
    "tk_TM",
    "bs_Latn_BA",
    "mt_MT",
    "sr_Cyrl_ME",
    "se_FI",
    "zu_ZA",
    "xh_ZA",
    "tn_ZA",
    "hsb_DE",
    "bs_Cyrl_BA",
    "tg_Cyrl_TJ",
    "sr_Latn_BA",
    "smj_NO",
    "rm_CH",
    "smj_SE",
    "quz_EC",
    "quz_PE",
    "hr_BA",
    "sr_Latn_ME",
    "sma_SE",
    "en_SG",
    "ug_CN",
    "sr_Cyrl_BA",
    "es_US",
];

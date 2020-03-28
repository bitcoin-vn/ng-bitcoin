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

export const localeFormats: any[] = [
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
    "sv_FI",
    "ms_BN",
    "ar_EG",
    "zh_HK",
    "de_AT",
    "en_AU",
    "es_ES",
    "fr_CA",
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
    "sma_NO",
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
    "fil_PH",
    "ps_AF",
    "fy_NL",
    "ne_NP",
    "se_NO",
    "si_LK",
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
    "mt_MT",
    "se_FI",
    "zu_ZA",
    "xh_ZA",
    "tn_ZA",
    "hsb_DE",
    "smj_NO",
    "rm_CH",
    "smj_SE",
    "quz_EC",
    "quz_PE",
    "hr_BA",
    "sma_SE",
    "en_SG",
    "ug_CN",
    "es_US",
];

export const jsonCountry: any[] = [
    {
        name: "ÅLAND ISLANDS",
        id: "AX"
    }, {
        name: "ALBANIA",
        id: "AL"
    }, {
        name: "ALGERIA",
        id: "DZ"
    }, {
        name: "AMERICAN SAMOA",
        id: "AS"
    }, {
        name: "ANDORRA",
        id: "AD"
    }, {
        name: "ANGOLA",
        id: "AO"
    }, {
        name: "ANGUILLA",
        id: "AI"
    }, {
        name: "ANTARCTICA",
        id: "AQ"
    }, {
        name: "ANTIGUA AND BARBUDA",
        id: "AG"
    }, {
        name: "ARGENTINA",
        id: "AR"
    }, {
        name: "ARMENIA",
        id: "AM"
    }, {
        name: "ARUBA",
        id: "AW"
    }, {
        name: "AUSTRALIA",
        id: "AU"
    }, {
        name: "AUSTRIA",
        id: "AT"
    }, {
        name: "AZERBAIJAN",
        id: "AZ"
    }, {
        name: "BAHAMAS",
        id: "BS"
    }, {
        name: "BAHRAIN",
        id: "BH"
    }, {
        name: "BANGLADESH",
        id: "BD"
    }, {
        name: "BARBADOS",
        id: "BB"
    }, {
        name: "BELARUS",
        id: "BY"
    }, {
        name: "BELGIUM",
        id: "BE"
    }, {
        name: "BELIZE",
        id: "BZ"
    }, {
        name: "BENIN",
        id: "BJ"
    }, {
        name: "BERMUDA",
        id: "BM"
    }, {
        name: "BHUTAN",
        id: "BT"
    }, {
        name: "BOLIVIA",
        id: "BO"
    }, {
        name: "BOSNIA AND HERZEGOVINA",
        id: "BA"
    }, {
        name: "BOTSWANA",
        id: "BW"
    }, {
        name: "BOUVET ISLAND",
        id: "BV"
    }, {
        name: "BRAZIL",
        id: "BR"
    }, {
        name: "BRITISH INDIAN OCEAN TERRITORY",
        id: "IO"
    }, {
        name: "BRUNEI DARUSSALAM",
        id: "BN"
    }, {
        name: "BULGARIA",
        id: "BG"
    }, {
        name: "BURKINA FASO",
        id: "BF"
    }, {
        name: "BURUNDI",
        id: "BI"
    }, {
        name: "CAMBODIA",
        id: "KH"
    }, {
        name: "CAMEROON",
        id: "CM"
    }, {
        name: "CANADA",
        id: "CA"
    }, {
        name: "CAPE VERDE",
        id: "CV"
    }, {
        name: "CAYMAN ISLANDS",
        id: "KY"
    }, {
        name: "CENTRAL AFRICAN REPUBLIC",
        id: "CF"
    }, {
        name: "CHAD",
        id: "TD"
    }, {
        name: "CHILE",
        id: "CL"
    }, {
        name: "CHINA",
        id: "CN"
    }, {
        name: "CHRISTMAS ISLAND",
        id: "CX"
    }, {
        name: "COCOS (KEELING) ISLANDS",
        id: "CC"
    }, {
        name: "COLOMBIA",
        id: "CO"
    }, {
        name: "COMOROS",
        id: "KM"
    }, {
        name: "CONGO",
        id: "CG"
    }, {
        name: "CONGO, THE DEMOCRATIC REPUBLIC OF THE",
        id: "CD"
    }, {
        name: "COOK ISLANDS",
        id: "CK"
    }, {
        name: "COSTA RICA",
        id: "CR"
    }, {
        name: "CÔTE D'IVOIRE",
        id: "CI"
    }, {
        name: "CROATIA",
        id: "HR"
    }, {
        name: "CUBA",
        id: "CU"
    }, {
        name: "CYPRUS",
        id: "CY"
    }, {
        name: "CZECH REPUBLIC",
        id: "CZ"
    }, {
        name: "DENMARK",
        id: "DK"
    }, {
        name: "DJIBOUTI",
        id: "DJ"
    }, {
        name: "DOMINICA",
        id: "DM"
    }, {
        name: "DOMINICAN REPUBLIC",
        id: "DO"
    }, {
        name: "ECUADOR",
        id: "EC"
    }, {
        name: "EGYPT",
        id: "EG"
    }, {
        name: "EL SALVADOR",
        id: "SV"
    }, {
        name: "EQUATORIAL GUINEA",
        id: "GQ"
    }, {
        name: "ERITREA",
        id: "ER"
    }, {
        name: "ESTONIA",
        id: "EE"
    }, {
        name: "ETHIOPIA",
        id: "ET"
    }, {
        name: "FALKLAND ISLANDS (MALVINAS)",
        id: "FK"
    }, {
        name: "FAROE ISLANDS",
        id: "FO"
    }, {
        name: "FIJI",
        id: "FJ"
    }, {
        name: "FINLAND",
        id: "FI"
    }, {
        name: "FRANCE",
        id: "FR"
    }, {
        name: "FRENCH GUIANA",
        id: "GF"
    }, {
        name: "FRENCH POLYNESIA",
        id: "PF"
    }, {
        name: "FRENCH SOUTHERN TERRITORIES",
        id: "TF"
    }, {
        name: "GABON",
        id: "GA"
    }, {
        name: "GAMBIA",
        id: "GM"
    }, {
        name: "GEORGIA",
        id: "GE"
    }, {
        name: "GERMANY",
        id: "DE"
    }, {
        name: "GHANA",
        id: "GH"
    }, {
        name: "GIBRALTAR",
        id: "GI"
    }, {
        name: "GREECE",
        id: "GR"
    }, {
        name: "GREENLAND",
        id: "GL"
    }, {
        name: "GRENADA",
        id: "GD"
    }, {
        name: "GUADELOUPE",
        id: "GP"
    }, {
        name: "GUAM",
        id: "GU"
    }, {
        name: "GUATEMALA",
        id: "GT"
    }, {
        name: "GUINEA",
        id: "GN"
    }, {
        name: "GUINEA-BISSAU",
        id: "GW"
    }, {
        name: "GUYANA",
        id: "GY"
    }, {
        name: "HAITI",
        id: "HT"
    }, {
        name: "HEARD ISLAND AND MCDONALD ISLANDS",
        id: "HM"
    }, {
        name: "HOLY SEE (VATICAN CITY STATE)",
        id: "VA"
    }, {
        name: "HONDURAS",
        id: "HN"
    }, {
        name: "HONG KONG",
        id: "HK"
    }, {
        name: "HUNGARY",
        id: "HU"
    }, {
        name: "ICELAND",
        id: "IS"
    }, {
        name: "INDIA",
        id: "IN"
    }, {
        name: "INDONESIA",
        id: "ID"
    }, {
        name: "IRAN, ISLAMIC REPUBLIC OF",
        id: "IR"
    }, {
        name: "IRAQ",
        id: "IQ"
    }, {
        name: "IRELAND",
        id: "IE"
    }, {
        name: "ISRAEL",
        id: "IL"
    }, {
        name: "ITALY",
        id: "IT"
    }, {
        name: "JAMAICA",
        id: "JM"
    }, {
        name: "JAPAN",
        id: "JP"
    }, {
        name: "JORDAN",
        id: "JO"
    }, {
        name: "KAZAKHSTAN",
        id: "KZ"
    }, {
        name: "KENYA",
        id: "KE"
    }, {
        name: "KIRIBATI",
        id: "KI"
    }, {
        name: "KOREA, DEMOCRATIC PEOPLE'S REPUBLIC OF",
        id: "KP"
    }, {
        name: "KOREA, REPUBLIC OF",
        id: "KR"
    }, {
        name: "KUWAIT",
        id: "KW"
    }, {
        name: "KYRGYZSTAN",
        id: "KG"
    }, {
        name: "LAO PEOPLE'S DEMOCRATIC REPUBLIC",
        id: "LA"
    }, {
        name: "LATVIA",
        id: "LV"
    }, {
        name: "LEBANON",
        id: "LB"
    }, {
        name: "LESOTHO",
        id: "LS"
    }, {
        name: "LIBERIA",
        id: "LR"
    }, {
        name: "LIBYAN ARAB JAMAHIRIYA",
        id: "LY"
    }, {
        name: "LIECHTENSTEIN",
        id: "LI"
    }, {
        name: "LITHUANIA",
        id: "LT"
    }, {
        name: "LUXEMBOURG",
        id: "LU"
    }, {
        name: "MACAO",
        id: "MO"
    }, {
        name: "MACEDONIA, THE FORMER YUGOSLAV REPUBLIC OF",
        id: "MK"
    }, {
        name: "MADAGASCAR",
        id: "MG"
    }, {
        name: "MALAWI",
        id: "MW"
    }, {
        name: "MALAYSIA",
        id: "MY"
    }, {
        name: "MALDIVES",
        id: "MV"
    }, {
        name: "MALI",
        id: "ML"
    }, {
        name: "MALTA",
        id: "MT"
    }, {
        name: "MARSHALL ISLANDS",
        id: "MH"
    }, {
        name: "MARTINIQUE",
        id: "MQ"
    }, {
        name: "MAURITANIA",
        id: "MR"
    }, {
        name: "MAURITIUS",
        id: "MU"
    }, {
        name: "MAYOTTE",
        id: "YT"
    }, {
        name: "MEXICO",
        id: "MX"
    }, {
        name: "MICRONESIA, FEDERATED STATES OF",
        id: "FM"
    }, {
        name: "MOLDOVA, REPUBLIC OF",
        id: "MD"
    }, {
        name: "MONACO",
        id: "MC"
    }, {
        name: "MONGOLIA",
        id: "MN"
    }, {
        name: "MONTSERRAT",
        id: "MS"
    }, {
        name: "MOROCCO",
        id: "MA"
    }, {
        name: "MOZAMBIQUE",
        id: "MZ"
    }, {
        name: "MYANMAR",
        id: "MM"
    }, {
        name: "NAMIBIA",
        id: "NA"
    }, {
        name: "NAURU",
        id: "NR"
    }, {
        name: "NEPAL",
        id: "NP"
    }, {
        name: "NETHERLANDS",
        id: "NL"
    }, {
        name: "NETHERLANDS ANTILLES",
        id: "AN"
    }, {
        name: "NEW CALEDONIA",
        id: "NC"
    }, {
        name: "NEW ZEALAND",
        id: "NZ"
    }, {
        name: "NICARAGUA",
        id: "NI"
    }, {
        name: "NIGER",
        id: "NE"
    }, {
        name: "NIGERIA",
        id: "NG"
    }, {
        name: "NIUE",
        id: "NU"
    }, {
        name: "NORFOLK ISLAND",
        id: "NF"
    }, {
        name: "NORTHERN MARIANA ISLANDS",
        id: "MP"
    }, {
        name: "NORWAY",
        id: "NO"
    }, {
        name: "OMAN",
        id: "OM"
    }, {
        name: "PAKISTAN",
        id: "PK"
    }, {
        name: "PALAU",
        id: "PW"
    }, {
        name: "PALESTINIAN TERRITORY, OCCUPIED",
        id: "PS"
    }, {
        name: "PANAMA",
        id: "PA"
    }, {
        name: "PAPUA NEW GUINEA",
        id: "PG"
    }, {
        name: "PARAGUAY",
        id: "PY"
    }, {
        name: "PERU",
        id: "PE"
    }, {
        name: "PHILIPPINES",
        id: "PH"
    }, {
        name: "PITCAIRN",
        id: "PN"
    }, {
        name: "POLAND",
        id: "PL"
    }, {
        name: "PORTUGAL",
        id: "PT"
    }, {
        name: "PUERTO RICO",
        id: "PR"
    }, {
        name: "QATAR",
        id: "QA"
    }, {
        name: "RÉUNION",
        id: "RE"
    }, {
        name: "ROMANIA",
        id: "RO"
    }, {
        name: "RUSSIAN FEDERATION",
        id: "RU"
    }, {
        name: "RWANDA",
        id: "RW"
    }, {
        name: "SAINT HELENA",
        id: "SH"
    }, {
        name: "SAINT KITTS AND NEVIS",
        id: "KN"
    }, {
        name: "SAINT LUCIA",
        id: "LC"
    }, {
        name: "SAINT PIERRE AND MIQUELON",
        id: "PM"
    }, {
        name: "SAINT VINCENT AND THE GRENADINES",
        id: "VC"
    }, {
        name: "SAMOA",
        id: "WS"
    }, {
        name: "SAN MARINO",
        id: "SM"
    }, {
        name: "SAO TOME AND PRINCIPE",
        id: "ST"
    }, {
        name: "SAUDI ARABIA",
        id: "SA"
    }, {
        name: "SENEGAL",
        id: "SN"
    }, {
        name: "SERBIA AND MONTENEGRO",
        id: "CS"
    }, {
        name: "SEYCHELLES",
        id: "SC"
    }, {
        name: "SIERRA LEONE",
        id: "SL"
    }, {
        name: "SINGAPORE",
        id: "SG"
    }, {
        name: "SLOVAKIA",
        id: "SK"
    }, {
        name: "SLOVENIA",
        id: "SI"
    }, {
        name: "SOLOMON ISLANDS",
        id: "SB"
    }, {
        name: "SOMALIA",
        id: "SO"
    }, {
        name: "SOUTH AFRICA",
        id: "ZA"
    }, {
        name: "SOUTH GEORGIA AND THE SOUTH SANDWICH ISLANDS",
        id: "GS"
    }, {
        name: "SPAIN",
        id: "ES"
    }, {
        name: "SRI LANKA",
        id: "LK"
    }, {
        name: "SUDAN",
        id: "SD"
    }, {
        name: "SURINAME",
        id: "SR"
    }, {
        name: "SVALBARD AND JAN MAYEN",
        id: "SJ"
    }, {
        name: "SWAZILAND",
        id: "SZ"
    }, {
        name: "SWEDEN",
        id: "SE"
    }, {
        name: "SWITZERLAND",
        id: "CH"
    }, {
        name: "SYRIAN ARAB REPUBLIC",
        id: "SY"
    }, {
        name: "TAIWAN, PROVINCE OF CHINA",
        id: "TW"
    }, {
        name: "TAJIKISTAN",
        id: "TJ"
    }, {
        name: "TANZANIA, UNITED REPUBLIC OF",
        id: "TZ"
    }, {
        name: "THAILAND",
        id: "TH"
    }, {
        name: "TIMOR-LESTE",
        id: "TL"
    }, {
        name: "TOGO",
        id: "TG"
    }, {
        name: "TOKELAU",
        id: "TK"
    }, {
        name: "TONGA",
        id: "TO"
    }, {
        name: "TRINIDAD AND TOBAGO",
        id: "TT"
    }, {
        name: "TUNISIA",
        id: "TN"
    }, {
        name: "TURKEY",
        id: "TR"
    }, {
        name: "TURKMENISTAN",
        id: "TM"
    }, {
        name: "TURKS AND CAICOS ISLANDS",
        id: "TC"
    }, {
        name: "TUVALU",
        id: "TV"
    }, {
        name: "UGANDA",
        id: "UG"
    }, {
        name: "UKRAINE",
        id: "UA"
    }, {
        name: "UNITED ARAB EMIRATES",
        id: "AE"
    }, {
        name: "UNITED KINGDOM",
        id: "GB"
    }, {
        name: "UNITED STATES",
        id: "US"
    }, {
        name: "UNITED STATES MINOR OUTLYING ISLANDS",
        id: "UM"
    }, {
        name: "URUGUAY",
        id: "UY"
    }, {
        name: "UZBEKISTAN",
        id: "UZ"
    }, {
        name: "VANUATU",
        id: "VU"
    }, {
        name: "VENEZUELA",
        id: "VE"
    }, {
        name: "VIET NAM",
        id: "VN"
    }, {
        name: "VIRGIN ISLANDS, BRITISH",
        id: "VG"
    }, {
        name: "VIRGIN ISLANDS, U.S.",
        id: "VI"
    }, {
        name: "WALLIS AND FUTUNA",
        id: "WF"
    }, {
        name: "WESTERN SAHARA",
        id: "EH"
    }, {
        name: "YEMEN",
        id: "YE"
    }, {
        name: "ZAMBIA",
        id: "ZM"
    }, {
        name: "ZIMBABWE",
        id: "ZW"
    }, {
        name: "Vatican City ",
        id: "VA"
    }];

export const localesData: any[] = [
    {
        "icon": "sa",
        "label": "saudi arabia",
        "value": "ar"
    },
    {
        "icon": "bg",
        "label": "bulgaria",
        "value": "bg"
    },
    {
        "icon": "es",
        "label": "spain",
        "value": "ca"
    },
    {
        "icon": "tw",
        "label": "taiwan, province of china",
        "value": "zh"
    },
    {
        "icon": "cz",
        "label": "czech republic",
        "value": "cs"
    },
    {
        "icon": "dk",
        "label": "denmark",
        "value": "da"
    },
    {
        "icon": "de",
        "label": "germany",
        "value": "de"
    },
    {
        "icon": "gr",
        "label": "greece",
        "value": "el"
    },
    {
        "icon": "us",
        "label": "united states",
        "value": "en"
    },
    {
        "icon": "fi",
        "label": "finland",
        "value": "fi"
    },
    {
        "icon": "fr",
        "label": "france",
        "value": "fr"
    },
    {
        "icon": "il",
        "label": "israel",
        "value": "he"
    },
    {
        "icon": "hu",
        "label": "hungary",
        "value": "hu"
    },
    {
        "icon": "is",
        "label": "iceland",
        "value": "is"
    },
    {
        "icon": "it",
        "label": "italy",
        "value": "it"
    },
    {
        "icon": "jp",
        "label": "japan",
        "value": "ja"
    },
    {
        "icon": "kr",
        "label": "korea, republic of",
        "value": "ko"
    },
    {
        "icon": "nl",
        "label": "netherlands",
        "value": "nl"
    },
    {
        "icon": "no",
        "label": "norway",
        "value": "nb"
    },
    {
        "icon": "pl",
        "label": "poland",
        "value": "pl"
    },
    {
        "icon": "br",
        "label": "brazil",
        "value": "pt"
    },
    {
        "icon": "ro",
        "label": "romania",
        "value": "ro"
    },
    {
        "icon": "ru",
        "label": "russian federation",
        "value": "ru"
    },
    {
        "icon": "hr",
        "label": "croatia",
        "value": "hr"
    },
    {
        "icon": "sk",
        "label": "slovakia",
        "value": "sk"
    },
    {
        "icon": "al",
        "label": "albania",
        "value": "sq"
    },
    {
        "icon": "se",
        "label": "sweden",
        "value": "sv"
    },
    {
        "icon": "th",
        "label": "thailand",
        "value": "th"
    },
    {
        "icon": "tr",
        "label": "turkey",
        "value": "tr"
    },
    {
        "icon": "pk",
        "label": "pakistan",
        "value": "ur"
    },
    {
        "icon": "id",
        "label": "indonesia",
        "value": "id"
    },
    {
        "icon": "ua",
        "label": "ukraine",
        "value": "uk"
    },
    {
        "icon": "by",
        "label": "belarus",
        "value": "be"
    },
    {
        "icon": "si",
        "label": "slovenia",
        "value": "sl"
    },
    {
        "icon": "ee",
        "label": "estonia",
        "value": "et"
    },
    {
        "icon": "lv",
        "label": "latvia",
        "value": "lv"
    },
    {
        "icon": "lt",
        "label": "lithuania",
        "value": "lt"
    },
    {
        "icon": "ir",
        "label": "iran, islamic republic of",
        "value": "fa"
    },
    {
        "icon": "vn",
        "label": "viet nam",
        "value": "vi"
    },
    {
        "icon": "am",
        "label": "armenia",
        "value": "hy"
    },
    {
        "icon": "es",
        "label": "spain",
        "value": "eu"
    },
    {
        "icon": "mk",
        "label": "macedonia, the former yugoslav republic of",
        "value": "mk"
    },
    {
        "icon": "za",
        "label": "south africa",
        "value": "af"
    },
    {
        "icon": "ge",
        "label": "georgia",
        "value": "ka"
    },
    {
        "icon": "fo",
        "label": "faroe islands",
        "value": "fo"
    },
    {
        "icon": "in",
        "label": "india",
        "value": "hi"
    },
    {
        "icon": "my",
        "label": "malaysia",
        "value": "ms"
    },
    {
        "icon": "kz",
        "label": "kazakhstan",
        "value": "kk"
    },
    {
        "icon": "kg",
        "label": "kyrgyzstan",
        "value": "ky"
    },
    {
        "icon": "ke",
        "label": "kenya",
        "value": "sw"
    },
    {
        "icon": "ru",
        "label": "russian federation",
        "value": "tt"
    },
    {
        "icon": "in",
        "label": "india",
        "value": "pa"
    },
    {
        "icon": "in",
        "label": "india",
        "value": "gu"
    },
    {
        "icon": "in",
        "label": "india",
        "value": "ta"
    },
    {
        "icon": "in",
        "label": "india",
        "value": "te"
    },
    {
        "icon": "in",
        "label": "india",
        "value": "kn"
    },
    {
        "icon": "in",
        "label": "india",
        "value": "mr"
    },
    {
        "icon": "in",
        "label": "india",
        "value": "sa"
    },
    {
        "icon": "mn",
        "label": "mongolia",
        "value": "mn"
    },
    {
        "icon": "es",
        "label": "spain",
        "value": "gl"
    },
    {
        "icon": "in",
        "label": "india",
        "value": "kok"
    },
    {
        "icon": "sy",
        "label": "syrian arab republic",
        "value": "syr"
    },
    {
        "icon": "mv",
        "label": "maldives",
        "value": "dv"
    },
    {
        "icon": "iq",
        "label": "iraq",
        "value": "ar"
    },
    {
        "icon": "cn",
        "label": "china",
        "value": "zh"
    },
    {
        "icon": "ch",
        "label": "switzerland",
        "value": "de"
    },
    {
        "icon": "gb",
        "label": "united kingdom",
        "value": "en"
    },
    {
        "icon": "mx",
        "label": "mexico",
        "value": "es"
    },
    {
        "icon": "be",
        "label": "belgium",
        "value": "fr"
    },
    {
        "icon": "ch",
        "label": "switzerland",
        "value": "it"
    },
    {
        "icon": "be",
        "label": "belgium",
        "value": "nl"
    },
    {
        "icon": "no",
        "label": "norway",
        "value": "nn"
    },
    {
        "icon": "pt",
        "label": "portugal",
        "value": "pt"
    },
    {
        "icon": "fi",
        "label": "finland",
        "value": "sv"
    },
    {
        "icon": "bn",
        "label": "brunei darussalam",
        "value": "ms"
    },
    {
        "icon": "eg",
        "label": "egypt",
        "value": "ar"
    },
    {
        "icon": "hk",
        "label": "hong kong",
        "value": "zh"
    },
    {
        "icon": "at",
        "label": "austria",
        "value": "de"
    },
    {
        "icon": "au",
        "label": "australia",
        "value": "en"
    },
    {
        "icon": "es",
        "label": "spain",
        "value": "es"
    },
    {
        "icon": "ca",
        "label": "canada",
        "value": "fr"
    },
    {
        "icon": "ly",
        "label": "libyan arab jamahiriya",
        "value": "ar"
    },
    {
        "icon": "sg",
        "label": "singapore",
        "value": "zh"
    },
    {
        "icon": "lu",
        "label": "luxembourg",
        "value": "de"
    },
    {
        "icon": "ca",
        "label": "canada",
        "value": "en"
    },
    {
        "icon": "gt",
        "label": "guatemala",
        "value": "es"
    },
    {
        "icon": "ch",
        "label": "switzerland",
        "value": "fr"
    },
    {
        "icon": "dz",
        "label": "algeria",
        "value": "ar"
    },
    {
        "icon": "mo",
        "label": "macao",
        "value": "zh"
    },
    {
        "icon": "li",
        "label": "liechtenstein",
        "value": "de"
    },
    {
        "icon": "nz",
        "label": "new zealand",
        "value": "en"
    },
    {
        "icon": "cr",
        "label": "costa rica",
        "value": "es"
    },
    {
        "icon": "lu",
        "label": "luxembourg",
        "value": "fr"
    },
    {
        "icon": "ma",
        "label": "morocco",
        "value": "ar"
    },
    {
        "icon": "ie",
        "label": "ireland",
        "value": "en"
    },
    {
        "icon": "pa",
        "label": "panama",
        "value": "es"
    },
    {
        "icon": "mc",
        "label": "monaco",
        "value": "fr"
    },
    {
        "icon": "tn",
        "label": "tunisia",
        "value": "ar"
    },
    {
        "icon": "za",
        "label": "south africa",
        "value": "en"
    },
    {
        "icon": "do",
        "label": "dominican republic",
        "value": "es"
    },
    {
        "icon": "om",
        "label": "oman",
        "value": "ar"
    },
    {
        "icon": "jm",
        "label": "jamaica",
        "value": "en"
    },
    {
        "icon": "ve",
        "label": "venezuela",
        "value": "es"
    },
    {
        "icon": "ye",
        "label": "yemen",
        "value": "ar"
    }
];
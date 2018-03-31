	// Initialize Firebase
const config = {
apiKey: "AIzaSyBjGBLVPxiEzET1mqtZebJgXwsbVQE_3Ck",
authDomain: "codeforgoodsite.firebaseapp.com",
databaseURL: "https://codeforgoodsite.firebaseio.com",
projectId: "codeforgoodsite",
storageBucket: "codeforgoodsite.appspot.com",
messagingSenderId: "824518102248"
};
firebase.initializeApp(config);

//console.log(root);


(function(){
	var countriesData = {
		"AFGHANISTAN": "AF",
		"ÅLAND ISLANDS": "AX",
		"ALBANIA": "AL",
		"ALGERIA": "DZ",
		"AMERICAN SAMOA": "AS",
		"ANDORRA": "AD",
		"ANGOLA": "AO",
		"ANGUILLA": "AI",
		"ANTARCTICA": "AQ",
		"ANTIGUA AND BARBUDA": "AG",
		"ARGENTINA": "AR",
		"ARMENIA": "AM",
		"ARUBA": "AW",
		"AUSTRALIA": "AU",
		"AUSTRIA": "AT",
		"AZERBAIJAN": "AZ",
		"BAHAMAS": "BS",
		"BAHRAIN": "BH",
		"BANGLADESH": "BD",
		"BARBADOS": "BB",
		"BELARUS": "BY",
		"BELGIUM": "BE",
		"BELIZE": "BZ",
		"BENIN": "BJ",
		"BERMUDA": "BM",
		"BHUTAN": "BT",
		"BOLIVIA, PLURINATIONAL STATE OF": "BO",
		"BONAIRE, SINT EUSTATIUS AND SABA": "BQ",
		"BOSNIA AND HERZEGOVINA": "BA",
		"BOTSWANA": "BW",
		"BOUVET ISLAND": "BV",
		"BRAZIL": "BR",
		"BRITISH INDIAN OCEAN TERRITORY": "IO",
		"BRUNEI DARUSSALAM": "BN",
		"BULGARIA": "BG",
		"BURKINA FASO": "BF",
		"BURUNDI": "BI",
		"CAMBODIA": "KH",
		"CAMEROON": "CM",
		"CANADA": "CA",
		"CAPE VERDE": "CV",
		"CAYMAN ISLANDS": "KY",
		"CENTRAL AFRICAN REPUBLIC": "CF",
		"CHAD": "TD",
		"CHILE": "CL",
		"CHINA": "CN",
		"CHRISTMAS ISLAND": "CX",
		"COCOS (KEELING) ISLANDS": "CC",
		"COLOMBIA": "CO",
		"COMOROS": "KM",
		"CONGO": "CG",
		"CONGO, THE DEMOCRATIC REPUBLIC OF THE": "CD",
		"COOK ISLANDS": "CK",
		"COSTA RICA": "CR",
		"CÔTE D'IVOIRE": "CI",
		"CROATIA": "HR",
		"CUBA": "CU",
		"CURAÇAO": "CW",
		"CYPRUS": "CY",
		"CZECH REPUBLIC": "CZ",
		"DENMARK": "DK",
		"DJIBOUTI": "DJ",
		"DOMINICA": "DM",
		"DOMINICAN REPUBLIC": "DO",
		"ECUADOR": "EC",
		"EGYPT": "EG",
		"EL SALVADOR": "SV",
		"EQUATORIAL GUINEA": "GQ",
		"ERITREA": "ER",
		"ESTONIA": "EE",
		"ETHIOPIA": "ET",
		"FALKLAND ISLANDS (MALVINAS)": "FK",
		"FAROE ISLANDS": "FO",
		"FIJI": "FJ",
		"FINLAND": "FI",
		"FRANCE": "FR",
		"FRENCH GUIANA": "GF",
		"FRENCH POLYNESIA": "PF",
		"FRENCH SOUTHERN TERRITORIES": "TF",
		"GABON": "GA",
		"GAMBIA": "GM",
		"GEORGIA": "GE",
		"GERMANY": "DE",
		"GHANA": "GH",
		"GIBRALTAR": "GI",
		"GREECE": "GR",
		"GREENLAND": "GL",
		"GRENADA": "GD",
		"GUADELOUPE": "GP",
		"GUAM": "GU",
		"GUATEMALA": "GT",
		"GUERNSEY": "GG",
		"GUINEA": "GN",
		"GUINEA-BISSAU": "GW",
		"GUYANA": "GY",
		"HAITI": "HT",
		"HEARD ISLAND AND MCDONALD ISLANDS": "HM",
		"HOLY SEE (VATICAN CITY STATE)": "VA",
		"HONDURAS": "HN",
		"HONG KONG": "HK",
		"HUNGARY": "HU",
		"ICELAND": "IS",
		"INDIA": "IN",
		"INDONESIA": "ID",
		"IRAN, ISLAMIC REPUBLIC OF": "IR",
		"IRAQ": "IQ",
		"IRELAND": "IE",
		"ISLE OF MAN": "IM",
		"ISRAEL": "IL",
		"ITALY": "IT",
		"JAMAICA": "JM",
		"JAPAN": "JP",
		"JERSEY": "JE",
		"JORDAN": "JO",
		"KAZAKHSTAN": "KZ",
		"KENYA": "KE",
		"KIRIBATI": "KI",
		"KOREA, DEMOCRATIC PEOPLE'S REPUBLIC OF": "KP",
		"KOREA, REPUBLIC OF": "KR",
		"KUWAIT": "KW",
		"KYRGYZSTAN": "KG",
		"LAO PEOPLE'S DEMOCRATIC REPUBLIC": "LA",
		"LATVIA": "LV",
		"LEBANON": "LB",
		"LESOTHO": "LS",
		"LIBERIA": "LR",
		"LIBYA": "LY",
		"LIECHTENSTEIN": "LI",
		"LITHUANIA": "LT",
		"LUXEMBOURG": "LU",
		"MACAO": "MO",
		"MACEDONIA, THE FORMER YUGOSLAV REPUBLIC OF": "MK",
		"MADAGASCAR": "MG",
		"MALAWI": "MW",
		"MALAYSIA": "MY",
		"MALDIVES": "MV",
		"MALI": "ML",
		"MALTA": "MT",
		"MARSHALL ISLANDS": "MH",
		"MARTINIQUE": "MQ",
		"MAURITANIA": "MR",
		"MAURITIUS": "MU",
		"MAYOTTE": "YT",
		"MEXICO": "MX",
		"MICRONESIA, FEDERATED STATES OF": "FM",
		"MOLDOVA, REPUBLIC OF": "MD",
		"MONACO": "MC",
		"MONGOLIA": "MN",
		"MONTENEGRO": "ME",
		"MONTSERRAT": "MS",
		"MOROCCO": "MA",
		"MOZAMBIQUE": "MZ",
		"MYANMAR": "MM",
		"NAMIBIA": "NA",
		"NAURU": "NR",
		"NEPAL": "NP",
		"NETHERLANDS": "NL",
		"NEW CALEDONIA": "NC",
		"NEW ZEALAND": "NZ",
		"NICARAGUA": "NI",
		"NIGER": "NE",
		"NIGERIA": "NG",
		"NIUE": "NU",
		"NORFOLK ISLAND": "NF",
		"NORTHERN MARIANA ISLANDS": "MP",
		"NORWAY": "NO",
		"OMAN": "OM",
		"PAKISTAN": "PK",
		"PALAU": "PW",
		"PALESTINE, STATE OF": "PS",
		"PANAMA": "PA",
		"PAPUA NEW GUINEA": "PG",
		"PARAGUAY": "PY",
		"PERU": "PE",
		"PHILIPPINES": "PH",
		"PITCAIRN": "PN",
		"POLAND": "PL",
		"PORTUGAL": "PT",
		"PUERTO RICO": "PR",
		"QATAR": "QA",
		"RÉUNION": "RE",
		"ROMANIA": "RO",
		"RUSSIAN FEDERATION": "RU",
		"RWANDA": "RW",
		"SAINT BARTHÉLEMY": "BL",
		"SAINT HELENA, ASCENSION AND TRISTAN DA CUNHA": "SH",
		"SAINT KITTS AND NEVIS": "KN",
		"SAINT LUCIA": "LC",
		"SAINT MARTIN (FRENCH PART)": "MF",
		"SAINT PIERRE AND MIQUELON": "PM",
		"SAINT VINCENT AND THE GRENADINES": "VC",
		"SAMOA": "WS",
		"SAN MARINO": "SM",
		"SAO TOME AND PRINCIPE": "ST",
		"SAUDI ARABIA": "SA",
		"SENEGAL": "SN",
		"SERBIA": "RS",
		"SEYCHELLES": "SC",
		"SIERRA LEONE": "SL",
		"SINGAPORE": "SG",
		"SINT MAARTEN (DUTCH PART)": "SX",
		"SLOVAKIA": "SK",
		"SLOVENIA": "SI",
		"SOLOMON ISLANDS": "SB",
		"SOMALIA": "SO",
		"SOUTH AFRICA": "ZA",
		"SOUTH GEORGIA AND THE SOUTH SANDWICH ISLANDS": "GS",
		"SOUTH SUDAN": "SS",
		"SPAIN": "ES",
		"SRI LANKA": "LK",
		"SUDAN": "SD",
		"SURINAME": "SR",
		"SVALBARD AND JAN MAYEN": "SJ",
		"SWAZILAND": "SZ",
		"SWEDEN": "SE",
		"SWITZERLAND": "CH",
		"SYRIAN ARAB REPUBLIC": "SY",
		"TAIWAN, PROVINCE OF CHINA": "TW",
		"TAJIKISTAN": "TJ",
		"TANZANIA, UNITED REPUBLIC OF": "TZ",
		"THAILAND": "TH",
		"TIMOR-LESTE": "TL",
		"TOGO": "TG",
		"TOKELAU": "TK",
		"TONGA": "TO",
		"TRINIDAD AND TOBAGO": "TT",
		"TUNISIA": "TN",
		"TURKEY": "TR",
		"TURKMENISTAN": "TM",
		"TURKS AND CAICOS ISLANDS": "TC",
		"TUVALU": "TV",
		"UGANDA": "UG",
		"UKRAINE": "UA",
		"UNITED ARAB EMIRATES": "AE",
		"UNITED KINGDOM": "GB",
		"UNITED STATES": "US",
		"UNITED STATES MINOR OUTLYING ISLANDS": "UM",
		"URUGUAY": "UY",
		"UZBEKISTAN": "UZ",
		"VANUATU": "VU",
		"VENEZUELA, BOLIVARIAN REPUBLIC OF": "VE",
		"VIET NAM": "VN",
		"VIRGIN ISLANDS, BRITISH": "VG",
		"VIRGIN ISLANDS, U.S.": "VI",
		"WALLIS AND FUTUNA": "WF",
		"WESTERN SAHARA": "EH",
		"YEMEN": "YE",
		"ZAMBIA": "ZM",
		"ZIMBABWE": "ZW"
	};

	function CountryCode() {
		this.fromName = {};
		this.fromCode = {};

		var keys = Object.keys(countriesData);
		for (i=0; i < keys.length; i++) {
			var country = keys[i];
			var code = countriesData[country];
			var countryParts = country.split(/,\s+/);
			var name = "";

			for (ii=0; ii < countryParts.length; ii++) {
				name += countryParts[ii];
				this.fromCode[code.toUpperCase()] = name;
				this.fromName[name.toUpperCase()] = code;
				name += ', ';
			}
		}
	}

	CountryCode.prototype.getCode = function(name) {
		return this.fromName[name.toUpperCase()];
	};

	CountryCode.prototype.getName = function(code) {
		return this.fromCode[code.toUpperCase()];
	};


	window.CountryCode = CountryCode;
	window.countriesData=countriesData;

})();

function base_format(name){
	let main_event = {};
	let event = {};
	let countries = {};
	let count = 0;
	for (var key in countriesData){
		countries[countriesData[key]] = 0
	}
	event["countries"] = countries;
	event["count"] = count;
	main_event[name] = event;
	return main_event;

}
function create_event(name){
	firebase.database().ref(name).set(base_format(name)[name]);
}


function edit_db(event, request){
	let database = firebase.database().ref().child(event);
	database.once('value').then(function(snapshot){
		let initialVal = snapshot.val();
		initialVal["count"]+=request.length;
		for (i=0; i<request.length; i++){
			initialVal["countries"][request[i]]++;
			}
		return firebase.database().ref().child(event).update(initialVal);
	}, function(err){
		return ("Something went wrong")
	});

}


// var starCountRef = firebase.database().ref('posts/' + postId + '/starCount');
// starCountRef.on('value', function(snapshot) {
//   updateStarCount(postElement, snapshot.val());
// });

function read_db(event){
	let database = firebase.database().ref().child(event);
	database.on('value', function(snapshot){
		let data = snapshot.val();
		console.log(data["countries"]);
		return data["countries"];
	})
}


// create_event()
// create_event()

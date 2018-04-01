var configuration = {
apiKey: "AIzaSyBjGBLVPxiEzET1mqtZebJgXwsbVQE_3Ck",
authDomain: "codeforgoodsite.firebaseapp.com",
databaseURL: "https://codeforgoodsite.firebaseio.com",
projectId: "codeforgoodsite",
storageBucket: "codeforgoodsite.appspot.com",
messagingSenderId: "824518102248"
};
firebase.initializeApp(configuration);

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

})();



function select(){

let country =  ["--Select a country--","Afghanistan", "Åland Islands", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua And Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia, Plurinational State Of", "Bonaire, Sint Eustatius And Saba", "Bosnia And Herzegovina", "Botswana", "Bouvet Island", "Brazil", "British Indian Ocean Territory", "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Christmas Island", "Cocos (keeling) Islands", "Colombia", "Comoros", "Congo", "Congo, The Democratic Republic Of The", "Cook Islands", "Costa Rica", "Côte D'ivoire", "Croatia", "Cuba", "Curaçao", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Falkland Islands (malvinas)", "Faroe Islands", "Fiji", "Finland", "France", "French Guiana", "French Polynesia", "French Southern Territories", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea-bissau", "Guyana", "Haiti", "Heard Island And Mcdonald Islands", "Holy See (vatican City State)", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran, Islamic Republic Of", "Iraq", "Ireland", "Isle Of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, Democratic People's Republic Of", "Korea, Republic Of", "Kuwait", "Kyrgyzstan", "Lao People's Democratic Republic", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macao", "Macedonia, The Former Yugoslav Republic Of", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia, Federated States Of", "Moldova, Republic Of", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfolk Island", "Northern Mariana Islands", "Norway", "Oman", "Pakistan", "Palau", "Palestine, State Of", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Pitcairn", "Poland", "Portugal", "Puerto Rico", "Qatar", "Réunion", "Romania", "Russian Federation", "Rwanda", "Saint Barthélemy", "Saint Helena, Ascension And Tristan Da Cunha", "Saint Kitts And Nevis", "Saint Lucia", "Saint Martin (french Part)", "Saint Pierre And Miquelon", "Saint Vincent And The Grenadines", "Samoa", "San Marino", "Sao Tome And Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Sint Maarten (dutch Part)", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Georgia And The South Sandwich Islands", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Svalbard And Jan Mayen", "Swaziland", "Sweden", "Switzerland", "Syrian Arab Republic", "Taiwan, Province Of China", "Tajikistan", "Tanzania, United Republic Of", "Thailand", "Timor-leste", "Togo", "Tokelau", "Tonga", "Trinidad And Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks And Caicos Islands", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "United States Minor Outlying Islands", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela, Bolivarian Republic Of", "Viet Nam", "Virgin Islands, British", "Virgin Islands, U.s.", "Wallis And Futuna", "Western Sahara", "Yemen", "Zambia", "Zimbabwe"];

let myDiv = document.getElementById("yo")

//Create and append select list
let selectList = document.createElement("select");
selectList.id = "added_country";
myDiv.appendChild(selectList);

//Create and append the options
for (let i = 0; i < country.length; i++) {
    let option = document.createElement("option");
    option.value = country[i];
    option.text = country[i];
    selectList.appendChild(option);
}
}

function display(){
	let x = document.getElementById("country").value
		return xx
}

function get_shade_values(country_dict){
    let maxval = 0
    for (var key in country_dict){
        if (country_dict[key] >= maxval){
            maxval = country_dict[key]
        }
    }
    
    var shade_vals = {}
    for (var key in country_dict){
        shade_vals[key] = country_dict[key]/maxval
    }
    return shade_vals
}

function update_map(code, shade_val){
	console.log(code)
	let target = document.getElementById(code);
	target.style.fill = '#003b4c';
    target.style.fillOpacity = shade_val;

}	

function update_map2(code){
    let target = document.getElementById(code);
    target.style.fill = '#003b4c';
    target.style.fillOpacity = .05;
}

function read_db(event){
	let database = firebase.database().ref().child(event);
	database.on('value', function(snapshot){
		let data = snapshot.val();
		var country_dict = data["countries"];
        console.log(country_dict)
        var shade_dict = get_shade_values(country_dict)
        console.log(shade_dict)
        for (var key in shade_dict){
            if(shade_dict[key] != 0){
                if (shade_dict[key] < 0.3){
                    update_map(key, 0.3)
                }
                else if (shade_dict[key] > 0.8){
                    update_map(key, 0.8)
                }
                else{
                    update_map(key, shade_dict[key]);
                }
            }
            else{
                update_map2(key)
            }
        }
	})
}

window.addEventListener("load", main);


function main(){
	let selections = []
	let country = new CountryCode();
    
    read_db('event5')
    
}
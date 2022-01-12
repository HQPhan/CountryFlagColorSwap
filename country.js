var Country = /** @class */ (function () {
    function Country(countryname, lang, greeting, colors, url) {
        this.countryname = countryname;
        this.lang = lang;
        this.greeting = greeting;
        this.colors = colors;
        this.url = url;
    }
    return Country;
}());
var Countries = [];
var usa = Countries.push(new Country("USA", "English", "Hello World", ["red", "blue", "white"], "USAFlag.png"));
var egypt = Countries.push(new Country("Egypt", "Arabic", "Marhaban Bialealam", ["red", "black", "white"], "EgyptFlag.png"));
var france = Countries.push(new Country("France", "French", "Bonjour Le Monde", ["blue", "red", "white"], "FranceFlag.png"));
var italy = Countries.push(new Country("Italy", "Italian", "Ciao Mondo", ["green", "red", "white"], "ItalyFlag.png"));
var germany = Countries.push(new Country("Germany", "German", "Hallo Welt", ["black", "yellow", "red"], "GermanyFlag.png"));
var india = Countries.push(new Country("India", "Hindi", "Namaste Duniya", ["orange", "green", "white"], "IndiaFlag.png"));
console.log(Countries);
function SwitchCountry() {
    var country = Countries[0];
    var input = document.getElementById("CountryList").value;
    var output1 = "Country: ".concat(country.countryname);
    var output2 = "Language: ".concat(country.lang);
    var output3 = "Greeting: ".concat(country.greeting);
    var output4 = "USAFlag.png";
    for (var i = 0; i < Countries.length; i++) {
        country = Countries[i];
        if (input === country.countryname) {
            output1 = "Country: ".concat(country.countryname);
            output2 = "Language: ".concat(country.lang);
            output3 = "Greeting: ".concat(country.greeting);
            output4 = country.url;
            ChangeBackgroundColor1(country.colors[0]);
            ChangeBackgroundColor2(country.colors[1]);
            ChangeBackgroundColor3(country.colors[2]);
            break;
        }
    }
    document.getElementById("CountryName").innerText = output1;
    document.getElementById("OfficialLanguage").innerText = output2;
    document.getElementById("HelloWorld").innerText = output3;
    document.getElementById("Image").src = output4;
}
function ChangeBackgroundColor1(color) {
    document.getElementById("Color1").style.backgroundColor = color;
}
function ChangeBackgroundColor2(color) {
    document.getElementById("Color2").style.backgroundColor = color;
}
function ChangeBackgroundColor3(color) {
    document.getElementById("Color3").style.backgroundColor = color;
}

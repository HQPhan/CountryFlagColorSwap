var Country = /** @class */ (function () {
    function Country(countryname, lang, greeting, colors) {
        this.countryname = countryname;
        this.lang = lang;
        this.greeting = greeting;
        this.colors = colors;
    }
    return Country;
}());
var Countries = [];
var usa = Countries.push(new Country("USA", "English", "Hello World", ["red", "blue", "white"]));
var egypt = Countries.push(new Country("Egypt", "Arabic", "Marhaban Bialealam", ["red", "black", "white"]));
var france = Countries.push(new Country("France", "French", "Bonjour Le Monde", ["blue", "red", "white"]));
var italy = Countries.push(new Country("Italy", "Italian", "Ciao Mondo", ["green", "red", "white"]));
var germany = Countries.push(new Country("Germany", "German", "Hallo Welt", ["black", "red", "yellow"]));
var india = Countries.push(new Country("India", "Hindi", "Namaste Duniya", ["red", "black", "white"]));
console.log(Countries);
function SwitchCountry() {
    var country = Countries[0];
    var input = document.getElementById("CountryList").value;
    var output1 = "Country: ".concat(country.countryname);
    var output2 = "Language: ".concat(country.lang);
    var output3 = "Greeting: ".concat(country.greeting);
    for (var i = 0; i < Countries.length; i++) {
        country = Countries[i];
        if (input === country.countryname) {
            output1 = "Country: ".concat(country.countryname);
            output2 = "Language: ".concat(country.lang);
            output3 = "Greeting: ".concat(country.greeting);
            ChangeBackgroundColor1(country.colors[0]);
            ChangeBackgroundColor2(country.colors[1]);
            ChangeBackgroundColor3(country.colors[2]);
            break;
        }
    }
    document.getElementById("CountryName").innerText = output1;
    document.getElementById("OfficialLanguage").innerText = output2;
    document.getElementById("HelloWorld").innerText = output3;
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

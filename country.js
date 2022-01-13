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
    var input = document.getElementById("CountryList").value;
    for (var i = 0; i < Countries.length; i++) {
        //country = Countries[i];
        if (input === Countries[i].countryname) {
            document.getElementById("CountryName").innerText = Countries[i].countryname;
            document.getElementById("OfficialLanguage").innerText = Countries[i].lang;
            document.getElementById("HelloWorld").innerText = Countries[i].greeting;
            document.getElementById("Image").src = Countries[i].url;
            document.getElementById("Color1").style.backgroundColor = Countries[i].colors[0];
            document.getElementById("Color2").style.backgroundColor = Countries[i].colors[1];
            document.getElementById("Color3").style.backgroundColor = Countries[i].colors[2];
            break;
        }
    }
}

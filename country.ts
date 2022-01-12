class Country{
  countryname:string;
  lang:string;
  greeting:string;
  colors:string[];

  constructor(countryname:string, lang:string, greeting:string, colors:string[]){
      this.countryname = countryname;
      this.lang = lang;
      this.greeting = greeting;
      this.colors = colors;
  }
}

let Countries:Country[] = [];
let usa = Countries.push(new Country("USA", "English", "Hello World", ["red","blue","white"]));
let egypt = Countries.push(new Country("Egypt", "Arabic", "Marhaban Bialealam", ["red","black","white"]));
let france = Countries.push(new Country("France", "French", "Bonjour Le Monde", ["blue","red","white"]));
let italy = Countries.push(new Country("Italy", "Italian", "Ciao Mondo", ["green","red","white"]));
let germany = Countries.push(new Country("Germany", "German", "Hallo Welt", ["black","red","yellow"]));
let india = Countries.push(new Country("India", "Hindi", "Namaste Duniya", ["red","black","white"]));

console.log(Countries);

function SwitchCountry(){

  let country:Country = Countries[0];
  let input:string = document.getElementById("CountryList").value;
  let output1:string = `Country: ${country.countryname}`;
  let output2:string = `Language: ${country.lang}`;
  let output3:string = `Greeting: ${country.greeting}`;

  for(let i=0;i<Countries.length;i++){
    country = Countries[i];
    if (input === country.countryname) {
      output1 = `Country: ${country.countryname}`;
      output2 = `Language: ${country.lang}`;
      output3 = `Greeting: ${country.greeting}`;
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

function ChangeBackgroundColor1(color:string){
  document.getElementById("Color1").style.backgroundColor = color;
}

function ChangeBackgroundColor2(color:string){
document.getElementById("Color2").style.backgroundColor = color;
}

function ChangeBackgroundColor3(color:string){
document.getElementById("Color3").style.backgroundColor = color;
}
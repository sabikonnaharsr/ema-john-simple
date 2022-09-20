
const loadCountries = () => {
    fetch(`https://restcountries.com/v3.1/all`)
    .then(res => res.json())
    .then(data => displayCountries(data))
}
const displayCountries = countries => {
    console.log(countries)

    const allCountriesData = countries.map(country =>
        getAllCountryData(country))
        const container = document.getElementById('country')
         container.innerHTML = allCountriesData;
}


const getAllCountryData = country => {
    console.log(country)
    return `
     <div>
        <h2>${country.name.common}</h2>      
        <h2>${country.flags.png}</h2>      
     </div>
    `
 
}
let ul = `<li>programming</li>`;
 ul+= `<ul></ul>`;
 console.log(ul)


loadCountries();
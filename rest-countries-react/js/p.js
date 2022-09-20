const loadCountreis = () => {
    fetch(`https://restcountries.com/v2/all
    `)
    .then(res => res.json())
    .then(data =>  displayCountries(data)); 
}

const displayCountries = countries => { 
  console.log(countries)
  const allCountriesData = countries.map(country => getallCountryData(country));
  const container = document.getElementById('countries');
  container.innerHTML = allCountriesData.join( ' ');


}

const getallCountryData = country => {
    console.log(country)
    return `
       <div class="country">
          <h2>${country.name}</h2>
          <img src="${country.flags.png}">
          <h2>${country.capital}</h2>
          <h2>${country.population}</h2>
          <h2>${country.timezones}</h2>
       </div>
    
    
    `
}



loadCountreis()

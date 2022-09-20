const loadCountries = () => {
    fetch(`https://restcountries.com/v3.1/all `)
    .then(res => res.json())
    .then(data => disPlayCountries(data))
}
const disPlayCountries = countries => {
  console.log(countries)
    const countriesHTML = countries.map(country => getCountryHTML(country));
    const container = document.getElementById('countries');
    container.innerHTML = countriesHTML.join(' ');
}

const getCountryHTML = ({name, flags, capital, maps, official}) =>{
  // option 1 parameter 
    return `
      <div class ="country">
          <h2>${name.common}</h2>
          <h2>${name.official}</h2>
          <img src ="${flags.png}">
          <h3>${capital}</h3>
          <h4>${maps.googleMaps}</h4>
      </div>
    `
}

   
// const getCountryHTML = country =>{
//   // option 1 original system
//   console.log(country)
//     return `
//       <div class ="country">
//         <h2>${common.name.common}</h2>
//         <h2>${common.name.official}</h2>
//         <img src ="${common.flags.png}">
//         <h3>${common.capital}</h3>
//         <h4>${common.maps.googleMaps}</h4>
// //       </div>
//      `
// // }


// const getCountryHTML = country =>{
//   // option 1: destructuring system
// const {name, flags, capital, maps, area } = country;

//   console.log(country)
//     return `
//       <div class ="country">
//         <p>Area: ${area}</p>
//         <h2>${name.common}</h2>
//         <h2>${name.official}</h2>
//         <img src ="${flags.png}">
//         <h3>${capital}</h3>
//         <h4>${maps.googleMaps}</h4>

//       </div>
//     `
// }


loadCountries();
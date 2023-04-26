// Anonymous function for retrieving and displaying a random beer
const grabRandomBeer = () => {
  // Fetching random beer data from API
  fetch("https://api.punkapi.com/v2/beers/random")
    .then(response => response.json())
    .then(beers => {
      // API returns an array containg only one element: grab it
      const beer = beers[0];
      // Creating DOM element for some beer properties
      const nameElement = document.createElement("h2");
      nameElement.textContent = beer.name;
      const descriptionElement = document.createElement("p");
      descriptionElement.textContent = beer.description;
      
      const abvText = document.createElement("h2");
      const abvElement = document.createElement("h2");
      abvText.innerHTML = "ABV: ";
      abvElement.textContent = beer.abv;
      const ingredientsElement = document.createElement("p");
      ingredientsElement.textContent = beer.ingredients.name;
      
      const foodTitle = document.createElement("h2");
      foodTitle.innerHTML = "Food pairing: ";
      const foodPairingElement = document.createElement("p");
      foodPairingElement.textContent = beer.food_pairing;
      // Clear previous beer data
      const beerElement1 = document.querySelector(".light");
      const beerElement2 = document.querySelector(".mid");
      const beerElement3 = document.querySelector(".dark");
      beerElement1.innerHTML = " ";
      beerElement2.innerHTML = " ";
      beerElement3.innerHTML = " ";
      // Add beer info to the page
      beerElement1.appendChild(nameElement);
      beerElement1.appendChild(descriptionElement);
      beerElement2.appendChild(abvText);
      beerElement2.appendChild(abvElement);
      beerElement2.appendChild(ingredientsElement);
      beerElement3.appendChild(foodTitle);
      beerElement3.appendChild(foodPairingElement);
      // Add style
      foodTitle.style.color = "white";
      foodPairingElement.style.color = "white";
    })
    // Catch errors
    .catch(err => {
      console.error(err.message);
    });
};

// Grab a new beer when clicking the button
document.getElementById("grabButton").addEventListener("click", grabRandomBeer);
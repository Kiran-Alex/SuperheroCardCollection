const superheroContainer = document.getElementById("superhero-container");
const heroNameInput = document.getElementById("hero-name-input");
const searchButton = document.getElementById("search-button");

searchButton.addEventListener("click", searchSuperhero);

function searchSuperhero() {
  const heroName = heroNameInput.value;
  const apiKey = "732823754852330";
  const apiUrl = `https://superheroapi.com/api.php/${apiKey}/search/${heroName}`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const heroes = data.results;
      superheroContainer.innerHTML = "";

      heroes.forEach(hero => {
        const superheroCard = document.createElement("div");
        superheroCard.classList.add("superhero-card");

        const superheroName = document.createElement("div");
        superheroName.classList.add("superhero-name");
        superheroName.textContent = hero.name;

        const superheroImage = document.createElement("img");
        superheroImage.classList.add("superhero-image");
        superheroImage.src = hero.image.url;

        const superheroPowers = document.createElement("div");
        superheroPowers.classList.add("superhero-powers");
        superheroPowers.textContent = `Powers: ${hero.powerstats.power}`;

        superheroCard.appendChild(superheroName);
        superheroCard.appendChild(superheroImage);
        superheroCard.appendChild(superheroPowers);
        superheroContainer.appendChild(superheroCard);
    });
  })
  .catch(error => {
    console.log(error);
  });
}  

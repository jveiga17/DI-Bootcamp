const planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];

const solarSystemSection = document.querySelector('.listPlanets');

planets.forEach(planet => {
    // div for each planet
    const planetDiv = document.createElement('div');
    planetDiv.classList.add('planet', planet.toLowerCase());

    // the planet name
    planetDiv.textContent = planet;

    // Append the planet div to the section
    solarSystemSection.appendChild(planetDiv);
});

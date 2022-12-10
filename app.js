const container = document.querySelector('.container');

const basicUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';


// To repeat
for (let i = 1; i <= 905; i++) {
    // Create div [pokemon]
    const pokemon = document.createElement('div');
    pokemon.classList.add('pokemon');

    // Create image
    const newImg = document.createElement('img');
    newImg.src = `${basicUrl}${i}.png`;

    // Create label
    const label = document.createElement('span');
    label.innerText = `#${i}`;

    // Append {newImg} and {label} inside the div [pokemon]
    pokemon.appendChild(newImg);
    pokemon.appendChild(label);

    // Append the div [pokemon] inside the div [container]
    container.appendChild(pokemon);
}

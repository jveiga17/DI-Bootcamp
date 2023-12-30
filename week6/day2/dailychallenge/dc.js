document.getElementById('libform').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get input values
    const noun = document.getElementById('noun').value;
    const adjective = document.getElementById('adjective').value;
    const person = document.getElementById('person').value;
    const verb = document.getElementById('verb').value;
    const place = document.getElementById('place').value;

    // check if values are not empty
    if (noun && adjective && person && verb && place) {
        // story using the input values
        const story = `${person} went to ${place} with a ${adjective} ${noun}. Suddenly, they decided to ${verb}.`;

        // the story
        document.getElementById('story').textContent = story;
    } else {
        // error message if any input is empty
        console.error('Please fill in all the fields.');
    }
});

document.getElementById('shuffle-button').addEventListener('click', function() {
    // array of different stories
    const stories = [
        'Once upon a time, a brave adventurer found a magical {noun} in the {place}.',
        'In a {adjective} land, there lived a wise {person} who loved to {verb} near the {place}.',
        'At the top of the mountain, there was a mysterious {noun} waiting for the daring {person} to discover.'
    ];

    // Pick a random story
    const randomIndex = Math.floor(Math.random() * stories.length);
    const randomStory = stories[randomIndex];

    // random story
    document.getElementById('story').textContent = randomStory;
});
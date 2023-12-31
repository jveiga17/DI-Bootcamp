const robotsArray = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      image: 'https://robohash.org/1?200x200'
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
      image: 'https://robohash.org/2?200x200'
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net',
      image: 'https://robohash.org/3?200x200'
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      email: 'Julianne.OConner@kory.org',
      image: 'https://robohash.org/4?200x200'
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      username: 'Kamren',
      email: 'Lucio_Hettinger@annie.ca',
      image: 'https://robohash.org/5?200x200'
    },
    {
      id: 6,
      name: 'Mrs. Dennis Schulist',
      username: 'Leopoldo_Corkery',
      email: 'Karley_Dach@jasper.info',
      image: 'https://robohash.org/6?200x200'
    },
    {
      id: 7,
      name: 'Kurtis Weissnat',
      username: 'Elwyn.Skiles',
      email: 'Telly.Hoeger@billy.biz',
      image: 'https://robohash.org/7?200x200'
    },
    {
      id: 8,
      name: 'Nicholas Runolfsdottir V',
      username: 'Maxime_Nienow',
      email: 'Sherwood@rosamond.me',
      image: 'https://robohash.org/8?200x200'
    },
    {
      id: 9,
      name: 'Glenna Reichert',
      username: 'Delphine',
      email: 'Chaim_McDermott@dana.io',
      image:'https://robohash.org/9?200x200'
    },
    {
      id: 10,
      name: 'Clementina DuBuque',
      username: 'Moriah.Stanton',
      email: 'Rey.Padberg@karina.biz',
      image:'https://robohash.org/10?200x200'
    }
    ];

// Define an array of robots, each represented as an object with properties.
  
  // Function to create an HTML article element for a given robot and append it to the container.
  function createArticle(robot) {
    const container = document.getElementById("robot-results");
    const article = document.createElement("article");
    const articleImage = document.createElement("img");
    const articleH3 = document.createElement("h3");
    const articleP = document.createElement("p");
  
    articleImage.src = robot.image;
    articleH3.innerHTML = robot.name;
    articleP.innerHTML = robot.email;
    articleP.classList.add("paragraph");
  
    article.appendChild(articleImage);
    article.appendChild(articleH3);
    article.appendChild(articleP);
  
    container.appendChild(article);
  }
  
  // Loop through each robot in the robotsArray and create a profile card for each one.
  robotsArray.forEach((robot) => {
    createArticle(robot);
  });
  
  // Get the search input element from the HTML.
  const searchInput = document.getElementById("search-input");
  
  // Function to run when the input in the search bar changes.
  function onInputSearchChange(event) {
    const searchText = event.target.value.toLowerCase();
    const containerElement = document.getElementById("robot-results");
  
    // Clear the current content on the noticeboard.
    containerElement.innerHTML = '';
  
    // If the search bar is empty, show all the robots.
    if (searchText === '') {
      robotsArray.forEach((robot) => {
        createArticle(robot);
      });
      return;
    }
  
    // Filter the robots whose names include the text from the search bar.
    const robotsArrayCopy = robotsArray
      .slice()
      .filter((robot) => robot.name.toLowerCase().includes(searchText));
  
    // Display the profile cards of the filtered robots on the noticeboard.
    robotsArrayCopy.forEach((robot) => {
      createArticle(robot);
    });
  }
  
  // Add an event listener to the search bar to run the onInputSearchChange function when the text changes.
  searchInput.addEventListener('input', onInputSearchChange);
  






// function createArticle(article) {
//   const containerEl = document.getElementById("robot-results");
//   const articleEl = document.createElement("article");
//   const articleImageEl = document.createElement("img");
//   const articleH3El = document.createElement("h3");
//   const articlePEl = document.createElement("p");

//   articleImageEl.src = article.image;

//   articleH3El.innerHTML = article.name;

//   articlePEl.innerHTML = article.email;
//   articlePEl.classList.add("money");
//   articleEl.appendChild(articleImageEl);
//   articleEl.appendChild(articleH3El)
//   articleEl.appendChild(articlePEl)

//   containerEl.appendChild(articleEl)

// }

// robotsArray.forEach((robot) => {
//   createArticle(robot)
// })

// const searchInputEl = document.getElementById("search-input")

// function onInputSearchChange(event) {
//   const searchText = event.target.value.toLowerCase()
//   const containerElement = document.getElementById("robot-results");
//   containerElement.innerHTML = ''
//   if (searchText === '') {
//     robotsArray.forEach((robot) => {
//       createArticle(robot)
//     })
//     return
//   }
//   const robotsArrayCopy = robotsArray.slice().filter((robot) => robot.name.toLowerCase().includes(searchText))
//   robotsArrayCopy.forEach((robot) => {
//     createArticle(robot)
//   })
// }

// searchInputEl.addEventListener('input', onInputSearchChange);
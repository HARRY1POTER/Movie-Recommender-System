// document.addEventListener("DOMContentLoaded", () => {
//   const movieSelect = document.getElementById("movie-select");
//   const recommendBtn = document.getElementById("recommend-btn");
//   const recommendationsDiv = document.getElementById("recommendations");

//   // Fetch movie list
//   fetch("/movies")
//     .then((response) => response.json())
//     .then((data) => {
//       data.forEach((movie) => {
//         const option = document.createElement("option");
//         option.value = movie;
//         option.textContent = movie;
//         movieSelect.appendChild(option);
//       });
//     });

//   // Handle recommendation button click
//   recommendBtn.addEventListener("click", () => {
//     const selectedMovie = movieSelect.value;
//     fetch("/recommend", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ movie: selectedMovie }),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         recommendationsDiv.innerHTML = "";
//         data.names.forEach((name, index) => {
//           const div = document.createElement("div");
//           div.innerHTML = `<h3>${name}</h3><img src="${data.posters[index]}" alt="${name} poster">`;
//           recommendationsDiv.appendChild(div);
//         });
//       });
//   });
// // });

// document.addEventListener("DOMContentLoaded", () => {
//   const movieSelect = document.getElementById("movie-select");
//   const recommendBtn = document.getElementById("recommend-btn");
//   const recommendationsDiv = document.getElementById("recommendations");

//   // Fetch movie list from the server
//   fetch("/get_movie_titles")
//     .then((response) => response.json())
//     .then((data) => {
//       data.movies.forEach((movie) => {
//         const option = document.createElement("option");
//         option.value = movie;
//         option.textContent = movie;
//         movieSelect.appendChild(option);
//       });
//     })
//     .catch((error) => console.error("Error fetching movie titles:", error));

//   // Handle recommendation button click
//   recommendBtn.addEventListener("click", () => {
//     const selectedMovie = movieSelect.value;

//     fetch("/recommend_movies", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ movie: selectedMovie }),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         recommendationsDiv.innerHTML = ""; // Clear previous recommendations
//         data.names.forEach((name, index) => {
//           const div = document.createElement("div");
//           div.innerHTML = `<h3>${name}</h3><img src="${data.posters[index]}" alt="${name} poster">`;
//           recommendationsDiv.appendChild(div);
//         });
//       })
//       .catch((error) =>
//         console.error("Error fetching recommendations:", error)
//       );
//   });
// });

//working

// document.addEventListener("DOMContentLoaded", () => {
//   const movieSelect = document.getElementById("movie-select");
//   const recommendBtn = document.getElementById("recommend-btn");
//   const recommendationsDiv = document.getElementById("recommendations");
//   const movieSearch = document.getElementById("movie-search");

//   let allMovies = []; // Array to store all movie titles

//   // Fetch movie list from the server
//   fetch("http://127.0.0.1:5000/get_movie_titles")
//     .then((response) => response.json())
//     .then((data) => {
//       allMovies = data?.movies; // Store all movie titles
//       populateMovieSelect(allMovies); // Populate select with all movies
//     })
//     .catch((error) => console.error("Error fetching movie titles:", error));

//   // Function to populate the select element
//   function populateMovieSelect(movies) {
//     movieSelect.innerHTML = ""; // Clear previous options
//     movies.forEach((movie) => {
//       const option = document.createElement("option");
//       option.value = movie;
//       option.textContent = movie;
//       movieSelect.appendChild(option);
//     });
//   }

//   // Filter movies based on search input
//   movieSearch.addEventListener("input", () => {
//     const searchTerm = movieSearch.value.toLowerCase();
//     const filteredMovies = allMovies.filter((movie) =>
//       movie.toLowerCase().includes(searchTerm)
//     );
//     populateMovieSelect(filteredMovies);
//   });

//   // Handle recommendation button click
//   // recommendBtn.addEventListener("click", () => {
//   //   const selectedMovie = movieSelect.value;

//   //   fetch("http://127.0.0.1:5000/recommend_movies", {
//   //     method: "POST",
//   //     headers: {
//   //       "Content-Type": "application/json",
//   //     },
//   //     body: JSON.stringify({ movie: selectedMovie }),
//   //   })
//   //     .then((response) => response.json())
//   //     .then((data) => {
//   //       recommendationsDiv.innerHTML = ""; // Clear previous recommendations
//   //       data.names.forEach((name, index) => {
//   //         const div = document.createElement("div");
//   //         div.innerHTML = `<h3>${name}</h3><img src="${data.posters[index]}" alt="${name} poster">`;
//   //         recommendationsDiv.appendChild(div);
//   //       });
//   //     })
//   //     .catch((error) =>
//   //       console.error("Error fetching recommendations:", error)
//   //     );
//   // });

//   recommendBtn.addEventListener("click", () => {
//     const selectedMovie = movieSelect.value;

//     fetch("http://127.0.0.1:5000/recommend_movies", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ movie: selectedMovie }),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         recommendationsDiv.innerHTML = ""; // Clear previous recommendations
//         // Check if we received both movie names and posters
//         if (data.names && data.posters) {
//           data.names.forEach((name, index) => {
//             const div = document.createElement("div");
//             div.classList.add("recommendation-item"); // Optional: for styling
//             div.innerHTML = `
//             <h3>${name}</h3>
//             <img src="${data.posters[index]}" alt="${name} poster" class="movie-poster">
//           `;
//             recommendationsDiv.appendChild(div);
//           });
//         } else {
//           recommendationsDiv.innerHTML = "<p>No recommendations found.</p>";
//         }
//       })
//       .catch((error) => {
//         console.error("Error fetching recommendations:", error);
//         recommendationsDiv.innerHTML =
//           "<p>Error fetching recommendations. Please try again.</p>";
//       });
//   });
// });

document.addEventListener("DOMContentLoaded", () => {
  const movieSearch = document.getElementById("movie-search");
  const recommendBtn = document.getElementById("recommend-btn");
  const recommendationsDiv = document.getElementById("recommendations");

  let allMovies = []; // Array to store all movie titles

  // Fetch movie list from the server
  fetch("http://127.0.0.1:5000/get_movie_titles")
    .then((response) => response.json())
    .then((data) => {
      allMovies = data?.movies; // Store all movie titles
      populateMovieList(allMovies); // Populate datalist with all movies
    })
    .catch((error) => console.error("Error fetching movie titles:", error));

  // Function to populate the datalist element with movie options
  function populateMovieList(movies) {
    const movieList = document.getElementById("movie-list");
    movieList.innerHTML = ""; // Clear previous options
    movies.forEach((movie) => {
      const option = document.createElement("option");
      option.value = movie;
      movieList.appendChild(option);
    });
  }

  // Handle recommendation button click
  recommendBtn.addEventListener("click", () => {
    const selectedMovie = movieSearch.value;

    recommendationsDiv.innerHTML = "<p>Loading recommendations...</p>";

    fetch("http://127.0.0.1:5000/recommend_movies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ movie: selectedMovie }),
    })
      .then((response) => response.json())
      .then((data) => {
        recommendationsDiv.innerHTML = ""; // Clear previous recommendations
        if (data.names.length > 0) {
          data.names.forEach((name, index) => {
            const div = document.createElement("div");
            div.innerHTML = `<h3>${name}</h3><img src="${data.posters[index]}" alt="${name} poster">`;
            recommendationsDiv.appendChild(div);
          });
        } else {
          recommendationsDiv.innerHTML = "<p>No recommendations found.</p>";
        }
      })
      .catch((error) => {
        console.error("Error fetching recommendations:", error);
        recommendationsDiv.innerHTML =
          "<p>Error fetching recommendations. Try again later.</p>";
      });
  });
});

// suggestion

document.getElementById("movie-search").addEventListener("input", function () {
  const input = this.value.toLowerCase();
  const suggestionsContainer = document.getElementById("suggestions");
  suggestionsContainer.innerHTML = ""; // Clear previous suggestions

  // Sample movie data (this could come from an API or database)
  const movies = [
    "Inception",
    "Interstellar",
    "The Dark Knight",
    "The Prestige",
    "Memento",
  ]; 

  // Filter and display matching suggestions
  if (input) { 
    const filteredMovies = movies.filter((movie) =>
      movie.toLowerCase().includes(input)
    );
    filteredMovies.forEach((movie) => {
      const suggestionItem = document.createElement("div");
      suggestionItem.classList.add("suggestion-item");
      suggestionItem.textContent = movie;
      suggestionItem.addEventListener("click", function () {
        document.getElementById("movie-search").value = movie;
        suggestionsContainer.innerHTML = ""; // Clear suggestions after selection
      });
      suggestionsContainer.appendChild(suggestionItem);
    });
  }
});

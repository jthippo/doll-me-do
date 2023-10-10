// Specify HTML title element
const title = document.getElementById("title");
const poster = document.getElementById("poster");
const synopsis = document.getElementById("synopsis");

// Create array for answer to go into
let finalSelection = [];

// Grab local storage, parse and whack back into array
function grabLocalStorage() {
  const answersFromLocalStorage = JSON.parse(
    localStorage.getItem("finalSelection")
  );
  for (let i = 0; i < answersFromLocalStorage.length; i++) {
    finalSelection.push(answersFromLocalStorage[i]);
  }
}

// Invoke it early so the code has data to work with
grabLocalStorage();

// Convert finalSelection to string
let stringSelection = finalSelection.join("");
console.log(stringSelection);

// Compare stringSelection to allMovies criteriaCodes
function stringCompare() {
  for (let i = 0; i < allMovies.length; i++) {
    if (stringSelection === allMovies[i].criteriaCode) {
      const h3 = document.createElement("h3");
      h3.textContent = `${allMovies[i].name}`;
      title.appendChild(h3);

      poster.src = allMovies[i].poster;

      const p = document.createElement("p");
      p.textContent = `${allMovies[i].synopsis}`;
      synopsis.appendChild(p);

      break;
    }
  }
}

// Array to hold Movies
allMovies = [];

// Constructor to make Movies and push to array
function Movie(name, criteriaCode, poster, synopsis) {
  this.name = name;
  this.criteriaCode = criteriaCode;
  this.poster = `/posters/${poster}.jpg`;
  this.synopsis = synopsis;
  allMovies.push(this);
}

// Make some Movies
new Movie("Dead of Night (1945)", "01010", "deadofnight");
new Movie("Barbarella (1968)", "10111", "barbarella");
new Movie("Asylum (1972)", "11110", "asylum", "This is all about Asylum");
new Movie("Trilogy of Terror (1975)", "00110", "trilogyofterror");
new Movie("Magic (1978)", "01001", "magic", "Magic is well scary bruv");
new Movie(
  "Tourist Trap (1979)",
  "11101",
  "touristtrap",
  "Stephen King likes it!"
);
new Movie(
  "The Pit (1981)",
  "00111",
  "thepit",
  "Weird Canadian thing, scary teddy"
);
new Movie("Dolls (1987)", "10001", "dolls");
new Movie("Child's Play (1988)", "00001", "childsplay");
new Movie("Pinocchio's Revenge (1996)", "01101", "pinocchiosrevenge");

stringCompare();

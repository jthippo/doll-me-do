// Create array for answer to go into

let finalSelection = [];

// Function to collect answer as a string of 1s and 0s, push to finalSelection array (after emptying it) and add to local storage

function displayTotal() {
  let answers = document.getElementsByTagName("input");
  finalSelection.length = 0;
  for (i = 0; i < answers.length; i++) {
    if (answers[i].checked) {
      finalSelection.push(answers[i].value);
    }
  }
  addLocalStorage();
  window.location.href = "./results.html";
}

// Function to add total to local storage
function addLocalStorage() {
  const answersStringified = JSON.stringify(finalSelection);
  localStorage.setItem("finalSelection", answersStringified);
}

// Invoke displayTotal on button click
const assembleTotal = document.getElementById("displayTotal");
assembleTotal.addEventListener("click", displayTotal);

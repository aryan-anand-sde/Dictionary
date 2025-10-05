const btn = document.getElementById("search-btn");
const searchInput = document.getElementById("search-input");

btn.addEventListener("click", Dictionary);
searchInput.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    Dictionary();
  }
});

wordHere = document.getElementsByClassName("word");
meaningHere = document.getElementsByClassName("definition");
synonymsHere = document.getElementsByClassName("synonyms");

async function Dictionary() {
  input = document.getElementById("search-input").value;
  url = "https://api.dictionaryapi.dev/api/v2/entries/en/" + input;
  if (input === "") {
    alert("Please enter a word");
    return;
  }

  let fetchPromise = await fetch(url);
  let data = await fetchPromise.json();
  let word = data[0].word;
  let meaning = data[0].meanings[0].definitions[0].definition;
  let synonym = data[0].meanings[0].synonyms[0];
  // console.log(word);
  // console.log(meaning);
  // console.log(synonym);
  wordHere[0].innerHTML = word;
  meaningHere[0].innerHTML = meaning;
  synonymsHere[0].innerHTML = synonym;
}

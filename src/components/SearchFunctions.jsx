import AlbumCard from "./AlbumCard";

const SearchFunctions = async (event) => {
  event.preventDefault();
  let div = document.querySelector("#searchResults .row");
  div.innerHTML = "";
  let searchQuery = document.querySelector("#searchField").value;

  if (searchQuery.length > 2) {
    document.querySelector("#searchResults").style.display = "block";

    try {
      let response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + searchQuery, {
        method: "GET",
        headers: {
          "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
          "X-RapidAPI-Key": "9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0",
        },
      });
      if (response.ok) {
        let result = await response.json();
        let { data } = result;
        for (let x = 0; x < data.length; x++) {
          div.innerHTML += AlbumCard(data[x]);
        }
      } else {
        throw new Error("error in search");
      }
    } catch (err) {
      console.log("error", err);
    }
  } else {
    document.querySelector("#searchResults").style.display = "none";
  }
};

export default SearchFunctions;

import AlbumCard from "./AlbumCard";

const HandleSection = async (artistName, querySelector) => {
  try {
    let response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + artistName, {
      method: "GET",
      headers: {
        "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
        "X-RapidAPI-Key": "9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0",
      },
    });
    if (response.ok) {
      let { data } = await response.json();
      let musicSection = document.querySelector(querySelector);
      for (let i = 0; i < 4; i++) {
        musicSection.innerHTML += AlbumCard(data[i]);
      }
    } else {
      throw new Error("Error in fetching songs");
    }
  } catch (err) {
    console.log("error", err);
  }
  HandleSection("queen", "#rockSection");
  HandleSection("katyperry", "#popSection");
  HandleSection("eminem", "#hipHopSection");
};

export default HandleSection;

const teamsContainer = document.getElementById("teams-container");
const playersContainer = document.getElementById("players-container");

// 5 Top NBA Teams with players (manually added)
const teamsData = [
  {
    name: "Los Angeles Lakers",
    logo: "images/teams/lakers.png",
    players: [
      { name: "LeBron James", photo: "images/players/lebron.jpg" },
      { name: "Anthony Davis", photo: "images/players/davis.jpg" },
    ],
  },
  {
    name: "Golden State Warriors",
    logo: "images/teams/warriors.png",
    players: [
      { name: "Stephen Curry", photo: "images/players/curry.jpg" },
      { name: "Klay Thompson", photo: "images/players/klay.jpg" },
    ],
  },
  {
    name: "Denver Nuggets",
    logo: "images/teams/nuggets.png",
    players: [
      { name: "Nikola Jokic", photo: "images/players/jokic.jpg" },
      { name: "Jamal Murray", photo: "images/players/murray.jpg" },
    ],
  },
  {
    name: "Boston Celtics",
    logo: "images/teams/celtics.png",
    players: [
      { name: "Jayson Tatum", photo: "images/players/tatum.jpg" },
      { name: "Jaylen Brown", photo: "images/players/brown.jpg" },
    ],
  },
  {
    name: "Milwaukee Bucks",
    logo: "images/teams/bucks.png",
    players: [
      { name: "Giannis Antetokounmpo", photo: "images/players/giannis.jpg" },
      { name: "Damian Lillard", photo: "images/players/lillard.jpg" },
    ],
  },
];

function showPlayers(players) {
  playersContainer.innerHTML = "";
  playersContainer.classList.remove("hidden");

  players.forEach((player) => {
    const card = document.createElement("div");
    card.classList.add("player-card");

    const img = document.createElement("img");
    img.src = player.photo;
    img.alt = player.name;

    const name = document.createElement("p");
    name.textContent = player.name;

    card.appendChild(img);
    card.appendChild(name);
    playersContainer.appendChild(card);
  });

  window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
}

function displayTeams() {
  teamsData.forEach((team) => {
    const logo = document.createElement("img");
    logo.src = team.logo;
    logo.alt = team.name;
    logo.title = team.name;
    logo.classList.add("team-logo");

    logo.addEventListener("click", () => {
      showPlayers(team.players);
    });

    teamsContainer.appendChild(logo);
  });
}

displayTeams();

const teamsContainer = document.getElementById('teams-container');

async function fetchTeams() {
  const res = await fetch('https://www.balldontlie.io/api/v1/teams');
  const data = await res.json();
  return data.data;
}

async function fetchPlayersByTeam(teamId) {
  const res = await fetch(`https://www.balldontlie.io/api/v1/players?per_page=10&team_ids[]=${teamId}`);
  const data = await res.json();
  return data.data;
}

async function displayTeams() {
  const teams = await fetchTeams();

  for (const team of teams) {
    const players = await fetchPlayersByTeam(team.id);
    
    const teamCard = document.createElement('div');
    teamCard.classList.add('team-card');

    const teamName = document.createElement('div');
    teamName.classList.add('team-name');
    teamName.textContent = `${team.full_name}`;

    const playersDiv = document.createElement('div');
    playersDiv.classList.add('players');

    for (const player of players) {
      const playerDiv = document.createElement('div');
      playerDiv.classList.add('player');

      const playerImg = document.createElement('img');
      playerImg.src = `https://ui-avatars.com/api/?name=${player.first_name}+${player.last_name}`;
      playerImg.style.width = '40px';
      playerImg.style.borderRadius = '50%';

      playerDiv.appendChild(playerImg);
      playerDiv.innerHTML += `<br>${player.first_name} ${player.last_name}`;
      playersDiv.appendChild(playerDiv);
    }

    teamCard.appendChild(teamName);
    teamCard.appendChild(playersDiv);
    teamsContainer.appendChild(teamCard);
  }
}

displayTeams();

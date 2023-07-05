function createGame(player1, hour, player2) {
  return `
    <li>
      <img src="./assets/img/icon/icon-${player1}.svg" alt="${player1}" />
      <strong>${hour}</strong>
      <img src="./assets/img/icon/icon-${player2}.svg" alt="${player2}" />
    </li>
  `;
}

let delay = -0.4;
function createCard(date, day, games) {
  delay = delay + 0.4;
  return `
    <div class="card" style="animation-delay: ${delay}">
      <h2>${date} <span>${day}</span></h2>
      <ul>
        ${games}
      </ul>
    </div>
  `;
}

document.querySelector("#app").innerHTML = `
        ${createCard(
          "24/11",
          "quinta",
          createGame("brazil", "16:00", "serbia")
        )}
        ${createCard(
          "28/11",
          "segunda",
          createGame("switzerland", "13:00", "brazil")
        )}
        ${createCard(
          "02/12",
          "sexta",
          createGame("brazil", "16:00", "cameroon")
        )}
`;

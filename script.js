const gameboardContainer = document.getElementById("gameboard-container");
const playerTurnLabel = document.getElementById("player-turn-label");

const gameboard = () => {
    let theGameboard = [];
    const create = () => {
        for (let i = 0; i < 9; i++) {
            const gameboardTile = document.createElement("div");
            gameboardContainer.appendChild(gameboardTile);
            gameboardTile.classList.add("gameboard-tile");
            theGameboard.push(gameboardTile);
        }
    }
    return { theGameboard, create };
}

const player = (name) => {
    return { name };
}

const gameFlow = () => {

}

const mainGameboard = gameboard();
mainGameboard.create();

playerTurnLabel.innerText = "Player ";
const gameboardContainer = document.getElementById("gameboard-container");
const playerTurnLabel = document.getElementById("player-turn-label");
const gameBoardTiles = document.getElementsByClassName("gameboard-tile");

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

for (let i = 0; i < mainGameboard.theGameboard.length; i++) {
    gameBoardTiles[i].addEventListener("mouseover", () => {
        gameBoardTiles[i].classList.add("hover");
    })
    gameBoardTiles[i].addEventListener("mouseout", () => {
        gameBoardTiles[i].classList.remove("hover");
    })
    gameBoardTiles[i].addEventListener("click", () => {
        gameBoardTiles[i].classList.add("filled-tile");
    })
}
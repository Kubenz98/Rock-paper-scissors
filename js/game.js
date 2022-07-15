class Game {
    constructor() {
        this.hands = [...document.querySelectorAll(".hand")];
        this.spanYourChoice = document.querySelector(".info__result-player-choice-span");
        this.spanAiChoice = document.querySelector(".info__result-ai-choice-span");
        this.spanWinner = document.querySelector(".info__result-winner-span");
        this.spanGamesCount = document.querySelector(".info__stats-games-span");
        this.spanWins = document.querySelector(".info__stats-wins-span");
        this.spanLosses = document.querySelector(".info__stats-losses-span");
        this.spanDraws = document.querySelector(".info__stats-draws-span");
        this.select = new Select(this.hands);
        document.querySelector(".hands__button").addEventListener("click", this.startGame.bind(this));
    }
    startGame() {
        this.select.aiSelect();
        console.log(this.select.choices);
        
    }

}
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const SELECT_ELM = document.querySelector("select");
const TWO_ELM = document.querySelector("#twoPercentRange");
const THREE_ELM = document.querySelector("#ThreePercentRange");
const POINT_ELM = document.querySelector("#pointRange");
const SEARCH_BUTTON_ELM = document.querySelector(".searchplayer");
const NBA_URL = "https://nbaserver-q21u.onrender.com/api/filter";
// const THTEAM:NodeListOf<HTMLDivElement> = document.querySelectorAll(".player")
// const [PG_ELM, SG_ELM, SF_ELM, PF_ELM, C_ELM] = THTEAM
//const SEARCH_ELMS:NodeListOf<HTMLElement> = document.querySelectorAll(".search>*")!
const DIV_TABLE = document.querySelector(".divtable");
SELECT_ELM.parentElement;
function getPlayers() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const res = yield fetch(NBA_URL, {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify({
                    "position": `${SELECT_ELM.value}`,
                    "twoPercent": TWO_ELM.value,
                    "threePercent": THREE_ELM.value,
                    "points": POINT_ELM.value
                }),
            });
            const players = yield res.json();
            DIV_TABLE.innerHTML = "";
            for (const player of players) {
                popleiRow(player);
            }
            return players;
        }
        catch (err) {
            console.log(err);
        }
    });
}
;
function popleiRow(player) {
    const divrow = document.createElement("div");
    divrow.className = "row";
    for (const key of ["playerName", "position", "points", "twoPercent", "threePercent",]) {
        const divcell = document.createElement("div");
        divcell.className = "cell";
        // ------אל תשכח אותי ---------\\
        console.log(player[key]);
        divcell.textContent = player[key];
        divrow.appendChild(divcell);
        console.log(divcell.textContent);
    }
    const divbutton = document.createElement("div");
    divbutton.className = "divButton";
    const button = document.createElement("button");
    button.className = "button";
    button.textContent = `Add ${player.playerName} to current Team`;
    button.addEventListener("click", (e) => {
        createAppendFunc(player);
    });
    divbutton.appendChild(button);
    divrow.appendChild(divbutton);
    DIV_TABLE.appendChild(divrow);
}
function createAppendFunc(player) {
    console.log(player);
    const plaierElms = document.querySelectorAll(`.${player.position}>*`);
    player.kais = ["playerName", "position", "points", "twoPercent", "threePercent",];
    let i = 0;
    for (const element of plaierElms) {
        element.textContent += player.kais[i++];
    }
}
//SEARCH_BUTTON_ELM.onclick(getPlayers)
SEARCH_BUTTON_ELM.addEventListener("click", e => getPlayers());
//   <p class="playerPosition">Point Guard</p>
//   <h5 class="playerNmae"></h5>
//   <p class="playerTwoPercent"></p>
//   <p class="playerThreePercent"></p>
//   <p class="playerPoints"></p>

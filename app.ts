interface Player {
    playerName:string,
    position:string,
    twoPercent:number,
    threePercent:number
    points:number
}



const SELECT_ELM:HTMLSelectElement = document.querySelector("select")!
const TWO_ELM:HTMLInputElement = document.querySelector("#twoPercentRange")!
const THREE_ELM:HTMLInputElement = document.querySelector("#ThreePercentRange")!
const POINT_ELM:HTMLInputElement = document.querySelector("#pointRange")!
const SEARCH_BUTTON_ELM:HTMLInputElement = document.querySelector(".searchplayer")!

const NBA_URL:string = "https://nbaserver-q21u.onrender.com/api/filter"
// const THTEAM:NodeListOf<HTMLDivElement> = document.querySelectorAll(".player")
// const [PG_ELM, SG_ELM, SF_ELM, PF_ELM, C_ELM] = THTEAM
//const SEARCH_ELMS:NodeListOf<HTMLElement> = document.querySelectorAll(".search>*")!
const  DIV_TABLE:HTMLDivElement = document.querySelector(".divtable")!


SELECT_ELM.parentElement


async function getPlayers ():Promise<Player[] | void> {
    try{
    const res = await fetch(NBA_URL , {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        "position": `${(SELECT_ELM as HTMLSelectElement).value}`,
        "twoPercent": TWO_ELM.value,
        "threePercent": THREE_ELM.value,
        "points":POINT_ELM.value      
      }),

    });
    const players:Player[] = await res.json()
    for (const player of players) {
        popleiRow(player)
        
    }
    return players


}
catch (err)
{console.log(err);
}

  };

  function popleiRow(player:Player | any):void{
    const divrow:HTMLDivElement = document.createElement("div")
    divrow.className = "row"
    for (const key of ["playerName", "position", "points", "twoPercent", "threePercent",]) {
        const divcell  = document.createElement("div")
        divcell.className = "cell"
         // ------אל תשכח אותי ---------\\
         console.log(player[key]);
         divcell.textContent = player[key] 
         divrow.appendChild(divcell) 
    }
    DIV_TABLE.appendChild(divrow)
    const divbutton  = document.createElement("div")
    divrow.className = "divButton"
    const button:HTMLButtonElement = document.createElement("button")
    button.className = "button"
    button.textContent= `Add ${player.playerName} to current Team`
    divrow.addEventListener("click", (e) => 
    {createAppendFunc(player)
    })
    divrow.appendChild(divbutton) 
  }


  function createAppendFunc(player:Player | any)
  {
    const plaierElms:NodeListOf<HTMLElement> =  document.querySelectorAll(`.${player.position}>*`)
    for (const element of plaierElms) {
        element.textContent += player.element.className
    }

    

  }

  //SEARCH_BUTTON_ELM.onclick(getPlayers)
  SEARCH_BUTTON_ELM.addEventListener("click", e => getPlayers())













//   <p class="playerPosition">Point Guard</p>
//   <h5 class="playerNmae"></h5>
//   <p class="playerTwoPercent"></p>
//   <p class="playerThreePercent"></p>
//   <p class="playerPoints"></p>
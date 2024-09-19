interface Player {
    _id:number,
    playerName:string,
    position:string,
    twoPercent:number,
    threePercent:number
    points:number
}
const NBA_URL:string = "https://nbaserver-q21u.onrender.com/api/filter"
const THTEAM:NodeListOf<HTMLDivElement> = document.querySelectorAll(".player")
const [PG_ELM, SG_ELM, SF_ELM, PF_ELM, C_ELM] = THTEAM
const SEARCH_ELMS:NodeListOf<HTMLElement> = document.querySelectorAll(".search>*")!
const [SELECT_ELM, TWO_ELM, THREE_ELM, POINT_ELM] = SEARCH_ELMS
const  DIV_TABLE:HTMLDivElement = document.querySelector(".divtable")!





const getPlayers = async () => {
    const res = await fetch(NBA_URL , {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        "position": "PG",
        "twoPercent": 24,
        "threePercent": 23,
        "points":13000      
      }),

    });
    const players:Player[] =  res.json()
    log

  };
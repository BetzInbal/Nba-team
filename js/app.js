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
const NBA_URL = "https://nbaserver-q21u.onrender.com/api/filter";
const THTEAM = document.querySelectorAll(".player");
const [PG_ELM, SG_ELM, SF_ELM, PF_ELM, C_ELM] = THTEAM;
const SEARCH_ELMS = document.querySelectorAll(".search>*");
const [SELECT_ELM, TWO_ELM, THREE_ELM, POINT_ELM] = SEARCH_ELMS;
const DIV_TABLE = document.querySelector(".divtable");
const getPlayers = () => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield fetch(NBA_URL, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
            "position": "PG",
            "twoPercent": 24,
            "threePercent": 23,
            "points": 13000
        }),
    });
    const players = res.json();
    log;
});

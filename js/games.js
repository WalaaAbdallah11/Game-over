
import { Ui } from "./ui.js";
import { Details } from "./gamesDetail.js";
 export class Games{
    constructor(){
        this.getGames("mmorpg");
        document.querySelectorAll(".navLink a").forEach((link) => {
            link.addEventListener("click", (e) => {
               document.querySelector(".navLink .active").classList.remove("active");
               e.target.classList.add("active");
               this.getGames(e.target.dataset.category);
        // let navLink = document.querySelectorAll(".navLink a");
        // let linkActive = document.querySelectorAll(".navLink .active");
        // navLink.forEach((link)=>{
        //     link.addEventListener("click",(e) =>{
        //         linkActive.classList.remove("active");
        //         e.target.classList.add("active");
        //         this.getGames(e.target.dataset.category);
            });
        });
        this.ui = new Ui();
    }
    async getGames(category){
        const options = {
	        method: 'GET',
	        headers: {
		     'x-rapidapi-key': '150fdf4495msh22fa6462bb1f0cbp11362djsn67dd940a2e6c',
		     'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
	        },
        };
       const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`, options);
       
       const response = await api.json();
       this.ui.displayGame(response);
       this.getId();
    }
    getId(){
        document.querySelectorAll(".card").forEach((item) => {
            item.addEventListener("click", () => {
               const id = item.dataset.id;
               this.showDetails(id);
            });
         });
    }
    showDetails(idGame) {
        const details = new Details(idGame);
        document.querySelector(".games").classList.add("d-none");
        document.querySelector(".detail").classList.remove("d-none");
     }
 }
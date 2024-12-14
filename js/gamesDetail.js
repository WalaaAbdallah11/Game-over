import { Ui } from "./ui.js";
export class Details{
    constructor(id){
        this.ui = new Ui();

        document.getElementById("btnClose").addEventListener("click", () => {
            document.querySelector(".games").classList.remove("d-none");
            document.querySelector(".detail").classList.add("d-none");
         });
   
         this.getDetails(id);
    }

     async getDetails( idGames){
        const options = {
	      method: 'GET',
	      headers: {
		    'x-rapidapi-key': '150fdf4495msh22fa6462bb1f0cbp11362djsn67dd940a2e6c',
		    'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
	      },
        };
        
        const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${idGames}`, options);
        const response = await api.json();
        this.ui.displayDetails(response);
     

        // fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${idGames}`, options)
        //  .then((response) => response.json())
        //  .then((response) => this.ui.displayDetails(response))
        //  .catch((err) => console.error(err))
     
    }
}

export class Ui{

    displayGame(data) {
        let gamecard = ``;
        for (let i = 0; i < data.length; i++) {
            gamecard += `
           <div class="col-md-6 col-lg-4 col-xl-3 ">
                        <div data-id="${data[i].id}"  class="card">
                            <div class="p-3">
                                <img src="${data[i].thumbnail}" class="card-img-top " alt="Game image">
                            </div>
                            <div class="card-body pt-0">
                                <div class="d-flex justify-content-between align-items-center">
                                    <h6 class="card-title">${data[i].title}</h6>
                                    <span class="badge text-bg-primary py-2 px-2">Free</span>
                                </div>
                                <p class="card-text text-center"> ${data[i].short_description.split(" ", 8)}</p>

                            </div>
                            <div class="card-footer d-flex justify-content-between align-items-center ">
                                <span class="badge  text-uppercase">${data[i].genre}</span>
                                <span class="badge ">${data[i].platform}</span>
                            </div>
                        </div>
                    </div>
           `;
        }
  
        document.getElementById("gamesCard").innerHTML = gamecard;
     }
  
     displayDetails(data) {
        const cartona = `
         <div class="col-md-4">
                    <img src="${data.thumbnail}" class="w-100" alt="game image">
                </div>
                <div class="col-md-8 text-white">
                    <h3 class="h4 fw-bolder"> ${data.title}</h3>
                    <h5 class="h6">Category: <span class="badge text-bg-info ">${data.genre}</span></h5>
                    <h5 class="h6 py-2">Platform: <span class="badge text-bg-info"> ${data.platform}</span></h5>
                    <h5 class="h6">Status: <span class="badge text-bg-info"> ${data.status}</span></h5>
                    <p style="font-size: 14px;" class="fw-bolder  pt-3">${data.description}</p>
                       
                        <a class="btn btn-outline-warning text-white" target="_blank" href="${data.game_url}">Show Game</a>
                </div>
        
        `;
  
        document.getElementById("gameDetails").innerHTML = cartona;
     }
  }


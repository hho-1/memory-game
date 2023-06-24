let cards = document.querySelectorAll(".cards")
const snow = document.getElementById("snow")
const anchor = document.getElementById("anchor")
const dice = document.getElementById("dice")
const umbrella = document.getElementById("umbrella")
const hippo = document.getElementById("hippo")
const mosquito = document.getElementById("mosquito")
const chess = document.getElementById("chess")
const flask = document.getElementById("flask")
const phone = document.getElementById("phone")
const star = document.getElementById("star")
const snow1 = document.getElementById("snow1")
const anchor1 = document.getElementById("anchor1")
const dice1 = document.getElementById("dice1")
const umbrella1 = document.getElementById("umbrella1")
const hippo1 = document.getElementById("hippo1")
const mosquito1 = document.getElementById("mosquito1")
const chess1 = document.getElementById("chess1")
const flask1 = document.getElementById("flask1")
const phone1 = document.getElementById("phone1")
const star1 = document.getElementById("star1")

let openedListIDs = []
let openedList = []


snow.addEventListener("click", openCard)
snow1.addEventListener("click", openCard)
anchor.addEventListener("click", openCard)
anchor1.addEventListener("click", openCard)
dice.addEventListener("click", openCard)
dice1.addEventListener("click", openCard)
umbrella.addEventListener("click", openCard)
umbrella1.addEventListener("click", openCard)
hippo.addEventListener("click", openCard)
hippo1.addEventListener("click", openCard)
mosquito.addEventListener("click", openCard)
mosquito1.addEventListener("click", openCard)
chess.addEventListener("click", openCard)
chess1.addEventListener("click", openCard)
flask.addEventListener("click", openCard)
flask1.addEventListener("click", openCard)
phone.addEventListener("click", openCard)
phone1.addEventListener("click", openCard)
star.addEventListener("click", openCard)
star1.addEventListener("click", openCard)


const delay = ms => new Promise(res => setTimeout(res, ms));


async function openCard(event){
    openedListIDs.push(event.currentTarget.id)
    
    event.currentTarget.classList.add('opClass')
    
    if(openedListIDs.length === 2){
        if(openedListIDs[0].startsWith(openedListIDs[1].slice(0,3))){
                
            cards.forEach(async (x) => {
                if(x.id === openedListIDs[0] || x.id === openedListIDs[1]){
                        
                    await delay(1000);
                    x.classList.remove("opClass")
                    x.classList.add("found")
                    openedList.push(x.classList)
                        
                } 
            })
            bildi()
                
        }
        else{
                
            cards.forEach(async (x) => {
                if(x.id === openedListIDs[0] || x.id === openedListIDs[1]){
                        
                    await delay(2000);
                    x.classList.remove("opClass")
                        
                } 
            })
            bilemedi()
        }
            
        openedListIDs.pop()
        openedListIDs.pop()
            
    }
    console.log(openedList.length);
    await delay(1000);
    if(openedList.length === 20){
        bitti()
    }
}

let text = document.querySelector(".text")

function bildi(){

    text.innerHTML = '<i class="fa-solid fa-check"></i>'
    text.style.color = "green"
    text.style.animation = "resultTextPositive 1s 1 ease-in-out forwards";
    
}
function bilemedi(){
    text.innerHTML = '<i class="fa-sharp fa-solid fa-xmark"></i>'
    text.style.color = "red"
    text.style.animation = "resultTextNegative 1s 1 ease-in-out forwards";
}
function bitti (){
    text.innerHTML = 'Game Over... Press Play Again button to play again'
    text.style.color = "#1f66d6"
    text.style.fontSize = "large"
    text.style.animation = "resultTextBitti 1s 1 ease-in-out forwards";
}

const playAgainBtn = document.querySelector(".btn-danger")

playAgainBtn.addEventListener(('click'), () => {
    
    //cards = Array.from(cards)

    const shuffleArray = (array) => {
        const newArray = [...array];
        for (let i = newArray.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
      };
      
    
    cards = shuffleArray(cards)
    updateDOM(cards)
      
    function updateDOM(providedData){
        
        
        let sectionRow = document.getElementById("row")
        console.log(typeof sectionRow);
        sectionRow = Array.from(sectionRow)

        providedData.forEach(item => {
            const element = document.createElement('div')
            element.innerHTML = `<div class="col col-xs-1 col-sm-2 col-md-4 col-lg-2 cards">${item.textContent}</div>`
            sectionRow.appendChild(element) 
        })
      
    }  
}
)



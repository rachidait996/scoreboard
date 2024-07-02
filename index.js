const homeScore = document.getElementById("home-score")
const guestScore = document.getElementById("guest-score")

let hScore = Number(homeScore.textContent)
let hScoreCount=0
let gScore = Number(guestScore.textContent)
let gScoreCount=0

function hOne(){
    hScoreCount +=1
    hScore=hScoreCount
    homeScore.textContent=hScore 
    
if (hScore>gScore) {
    homeScore.style.color="green"
    guestScore.style.color="red"
    }
  
}
function hTwo(){
     hScoreCount +=2
     hScore=hScoreCount
     homeScore.textContent=hScore 
    
     if (hScore>gScore) {
    homeScore.style.color="green"
    guestScore.style.color="red"
    }
}
function hTree(){
    hScoreCount +=3
    hScore=hScoreCount
    homeScore.textContent=hScore
    if (hScore>gScore) {
    homeScore.style.color="green"
    guestScore.style.color="red"
    }
    
    
}
function one(){
    gScoreCount +=1
    gScore=gScoreCount
    guestScore.textContent=gScore
    
if (hScore<gScore) {
        guestScore.style.color="green"
        homeScore.style.color= "red"
    }

    
}
function two(){
     gScoreCount +=2
     gScore=gScoreCount
    guestScore.textContent=gScore
    if (hScore<gScore) {
        guestScore.style.color="green"
        homeScore.style.color= "red"
}}
function tree(){
    gScoreCount +=3
    gScore=gScoreCount
    guestScore.textContent=gScore  
    if (hScore<gScore) {
        guestScore.style.color="green"
        homeScore.style.color= "red"
}

}
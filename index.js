let homeCount = 0
let guestCount = 0
let homeScore = document.getElementById("home-score-counter")
let guestScore = document.getElementById("guest-score-counter")

let homeScoreIncrement1 = document.getElementById("home-score-1")
let homeScoreIncrement2 = document.getElementById("home-score-2")
let homeScoreIncrement3 = document.getElementById("home-score-3")

let guestScoreIncrement1 = document.getElementById("guest-score-1")
let guestScoreIncrement2 = document.getElementById("guest-score-2")
let guestScoreIncrement3 = document.getElementById("guest-score-3")

function homeScore1(){
    homeCount += 1
    homeScore.innerText = homeCount

}
function homeScore2(){
    homeCount += 2
    homeScore.innerText = homeCount
}
function homeScore3(){
    homeCount += 3
    homeScore.innerText = homeCount
}

function guestScore1(){
    guestCount += 1
    guestScore.innerText = guestCount

}
function guestScore2(){
    guestCount += 2
    guestScore.innerText = guestCount
}
function guestScore3(){
    guestCount += 3
    guestScore.innerText = guestCount
}
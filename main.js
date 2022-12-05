'use strict'
//Poping Balloons! 


const screanHeight = window.innerHeight

var ginterval
var gBalloons = [
    { id: 1, bottom: 0, speed: getRandomIntInclusive(5, 19) },
    { id: 2, bottom: 0, speed: getRandomIntInclusive(5, 19) },
    { id: 3, bottom: 0, speed: getRandomIntInclusive(5, 19) },
    { id: 4, bottom: 0, speed: getRandomIntInclusive(5, 19) },
    { id: 5, bottom: 0, speed: getRandomIntInclusive(5, 19) },
    { id: 6, bottom: 0, speed: getRandomIntInclusive(5, 19) },
]



init()
function init() {
    renderBalloons()
}


function startGame() {
    ginterval = setInterval(flyingBalloons, 800)
}

function pauseGame() {
    clearInterval(ginterval)

}

function resertGame() {
    resetBallons()
}


function resetBallons() {
    var elBalloons = document.querySelectorAll('.balloon')
    for (var i = 0; i < gBalloons.length; i++) {
        var balloon = gBalloons[i]
        var elBalloon = elBalloons[i]
        balloon.bottom = 0
        elBalloon.style.bottom = -30 + '%'
        elBalloon.style.display = 'block'
        clearInterval(ginterval)
    }

}


function popBalloons(elBalloons) {
    const popingAudio = document.querySelector('.audio')
    elBalloons.style.display = 'none'
    popingAudio.play()
}


function renderBalloons() {
    var strHtml = ''
    for (var i = 0; i < gBalloons.length - 2; i++) {
        strHtml += '<div class = "balloon balloon' + (i + 3) + '" onclick="popBalloons(this)"></div>'
    }
    var elBalloonContainer = document.querySelector('.balloon-container')
    elBalloonContainer.innerHTML += strHtml
}


function flyingBalloons() {
    var elBalloons = document.querySelectorAll('.balloon')
    for (var i = 0; i < gBalloons.length; i++) {
        var balloon = gBalloons[i]
        var elBalloon = elBalloons[i]
        balloon.bottom += balloon.speed
        elBalloon.style.bottom = balloon.bottom + '%'
    }

}



function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

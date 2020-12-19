function random(x) {
    var y
    
    y = x[Math.floor(Math.random()*x.length)]

    return y
}

window.onload = function () {
    var challengeText = document.getElementById("Challenge-Text")
    
    var kills = ["3", "5", "10", "15", "20", "25"]
    var maps = ["badwater", "upward", "2fort", "borneo"]
    var character = ["scout", "soldier", "pyro", "demoman", "heavy", "engie", "medic", "sniper", "spy"]
    var points = ["10", "20", "30", "50", "70", "100"]
    var specialKills = ["headshot", "backstab", "sentry", "destruction", "market garden", "meatshot", "trickstab", "melee", "airblast", "bleed"]

    var i = Math.floor(Math.random() * 4)
    switch(i) {
        case 0: 
        challengeText.innerHTML = "Play on " + random(maps) + " as " + random(character) + " and get " + random(kills) + " kills in one life."
            break;
        case 1: 
        challengeText.innerHTML = "Play on " + random(maps) + " and get " + random(points) + " points in one game."
            break;
        case 2:
            challengeText.innerHTML = "Play on " + random(maps) + " as " + random(character) + " and get " + random(points) + " points in one game."
            break;
        case 3:
            challengeText.innerHTML = "Play on " + random(maps) + " and get " + random(kills) + " "+  random(specialKills) + " kills in one round"
            break;
        default: 
        challengeText.innerHTML = "Play on " + random(maps) + " as " + random(character) + " and get " + random(kills) + " kills in one life."
    }
}
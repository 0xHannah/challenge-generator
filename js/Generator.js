var difficultyIsDefined = false;
var basekills = ["5", "10", "15", "20", "25"]
var basespecialKillAmounts = ["2", "4", "5", "10", "15"]
var maps = ["2fort", "double cross", "landfall", "sawmill", "turbine", "well", "5gorge", "badlands", "coldfront", "fastlane", "foundry", "freight", "granary", "gullywash", "metalworks", "powerhouse", "process", "snakewater", "sunshine", "vanguard", "well", "yukon", "dustbowl", "egypt", "gorge", "gravel pit", "junction", "mercenary park", "mossrock", "mountain lab", "snowplow", "steel", "standin", "hydro", "badwater basin", "barnblitz", "borneo", "enclosure", "frontier", "gold rush", "hoodoo", "precipice", "snowycoast", "swiftwater", "thunder mountain", "upward", "banana bay", "hightower", "nightfall", "pipeline", "badlands", "koth badlands", "brazil", "harvest", "highpass", "kong king", "lakeside", "lazarus", "nucleus", "probed", "sawmill", "suijin", "viaduct", "doomsday", "dustbowl", "ctf foundry", "ctf gorge", "hellfire", "ctf thunder mountain", "brickyard", "district", "timbertown", "watergate"]
var character = ["scout", "soldier", "pyro", "demoman", "heavy", "engineer", "medic", "sniper", "spy"]
var basepoints = ["10", "30", "50", "70", "100"]
var specialKills = ["headshot", "backstab", "sentry", "market garden", "meatshot", "trickstab", "melee", "airblast", "bleed"]
var basewins = ["1,", "2", "3", "4", "5"]

function random(x) {
    if(difficultyIsDefined && x.length <= 3) {
        return x
    } else {
        var y = x[Math.floor(Math.random()*x.length)]
        return y
    }
}

function rookie() {
    kills = basewins[0]
    specialKillAmounts = basespecialKillAmounts[0]
    points = basepoints[0]
    wins = basewins[0]
    difficultyIsDefined = true;
}
function crook() {
    kills = basekills[1]
    specialKillAmounts = basespecialKillAmounts[1]
    points = basepoints[1]
    wins = basewins[1]
    difficultyIsDefined = true;
}
function merc() {
    kills = basekills[2]
    specialKillAmounts = basespecialKillAmounts[2]
    points = basepoints[2]
    wins = basewins[2]
    difficultyIsDefined = true;
}
function assassin() {
    kills = basekills[3]
    specialKillAmounts = basespecialKillAmounts[3]
    points = basepoints[3]
    wins = basewins[3]
    difficultyIsDefined = true;
}
function pub() {
    kills = basekills[4]
    specialKillAmounts = basespecialKillAmounts[4]
    points = basepoints[4]
    wins = basewins[4]
    difficultyIsDefined = true;
}

function displayChallenge() {
    var challengeText = document.getElementById("Challenge-Text")
    challengeText.innerHTML = "Choose a difficulty"
    var i = Math.floor(Math.random() * 6)
    switch(i) {
        case 0: 
        challengeText.innerHTML = "Play on " + random(maps) + " as " + random(character) + " and get " + random(kills) + " kills in one life."
            break;
        case 1: 
        challengeText.innerHTML = "Play on " + random(maps) + " and get " + random(points) + " points in one game."
            break;
        case 2:
            challengeText.innerHTML = "Play on " + random(maps) + " as " + random(character) + " and get " + random(points) + " points."
            break;
        case 3:
            challengeText.innerHTML = "Play on " + random(maps) + " and get " + random(specialKillAmounts) + " "+  random(specialKills) + " kills."
            break;
        case 4:
            challengeText.innerHTML = "Get " + random(kills) + " assists as " + random(character) + " in one life."
            break;
        case 5:
            challengeText.innerHTML = "Complete " + random(wins) + " map objectives on " + random(maps) + "."
            break;
        default: 
            challengeText.innerHTML = "Complete " + random(wins) + " map objectives on " + random(maps) + "."
    }
}
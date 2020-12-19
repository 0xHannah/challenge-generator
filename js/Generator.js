function random(x) {
    var y = x[Math.floor(Math.random()*x.length)]
    return y
}

window.onload = function () {
    var challengeText = document.getElementById("Challenge-Text")
    
    var kills = ["3", "5", "10", "15", "20", "25"]
    var specialKillAmounts = ["2", "4", "5", "8", "10", "15"]
    var maps = ["pier", "snowfall", "snowville", "wutville", "2fort", "double cross", "landfall", "sawmill", "turbine", "well", "5gorge", "badlands", "coldfront", "fastlane", "foundry", "freight", "granary", "gullywash", "metalworks", "powerhouse", "process", "snakewater", "sunshine", "vanguard", "well", "yukon", "dustbowl", "egypt", "gorge", "gravel pit", "junction", "mercenary park", "mossrock", "mountain lab", "snowplow", "steel", "standin", "hydro", "badwater basin", "barnblitz", "borneo", "enclosure", "frontier", "gold rush", "hoodoo", "precipice", "snowycoast", "swiftwater", "thunder mountain", "upward", "banana bay", "hightower", "nightfall", "pipeline", "badlands", "koth badlands", "brazil", "harvest", "highpass", "kong king", "lakeside", "lazarus", "nucleus", "probed", "sawmill", "suijin", "viaduct", "doomsday", "dustbowl", "ctf foundry", "ctf gorge", "hellfire", "ctf thunder mountain", "brickyard", "district", "timbertown", "watergate"]
    var character = ["scout", "soldier", "pyro", "demoman", "heavy", "engineer", "medic", "sniper", "spy"]
    var points = ["10", "20", "30", "50", "70", "100"]
    var specialKills = ["headshot", "backstab", "sentry", "market garden", "meatshot", "trickstab", "melee", "airblast", "bleed"]
    var wins = ["2", "3", "5"]

    var i = Math.floor(Math.random() * 6)
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
            challengeText.innerHTML = "Play on " + random(maps) + " and get " + random(specialKillAmounts) + " "+  random(specialKills) + " kills in one round"
            break;
        case 4:
            challengeText.innerHTML = "Get " + random(kills) + " assists as " + random(character) + " in one life."
            break;
        case 5:
            challengeText.innerHTML = "Win " + random(wins) + " rounds on " + random(maps) + "."
            break;
        default: 
        challengeText.innerHTML = "Play on " + random(maps) + " as " + random(character) + " and get " + random(kills) + " kills in one life."
    }
}
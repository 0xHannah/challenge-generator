var difficultyIsDefined = false;
var basekills = ["5", "10", "15", "20", "25"]
var basespecialKillAmounts = ["2", "4", "5", "10", "15"]
var maps = ["2fort", "double cross", "landfall", "sawmill", "turbine", "well", "5gorge", "badlands", "coldfront", "fastlane", "foundry", "freight", "granary", "gullywash", "metalworks", "powerhouse", "process", "snakewater", "sunshine", "vanguard", "well", "yukon", "dustbowl", "egypt", "gorge", "gravel pit", "junction", "mercenary park", "mossrock", "mountain lab", "snowplow", "steel", "standin", "hydro", "badwater basin", "barnblitz", "borneo", "enclosure", "frontier", "gold rush", "hoodoo", "precipice", "snowycoast", "swiftwater", "thunder mountain", "upward", "banana bay", "hightower", "nightfall", "pipeline", "badlands", "koth badlands", "brazil", "harvest", "highpass", "kong king", "lakeside", "lazarus", "nucleus", "probed", "sawmill", "suijin", "viaduct", "doomsday", "dustbowl", "ctf foundry", "ctf gorge", "hellfire", "ctf thunder mountain", "brickyard", "district", "timbertown", "watergate"]
var character = ["scout", "soldier", "pyro", "demoman", "heavy", "engineer", "medic", "sniper", "spy"]
var basepoints = ["10", "30", "50", "70", "100"]
var specialKills = ["market garden", "trickstab", "melee", "airblast", "bleed"]
var easierKills = ["headshot", "backstab", "sentry", "meatshot"]
var basewins = ["1", "2", "3", "4", "5"]
var hardWeapons = ["flying guillotine", "bat", "holy mackerel", "Fan o' war", "wrap assassin", "direct hit", "beggars bazooka", "manntread", "shovel", "escape plan", "fire axe", "lollichop", "sharpened volcano fragment", "third degree", "hot hand", "ullapool caber", "huo-long heater", "family business", "holiday punch", "pomson 6000", "eureka effect", "syringe gun", "blutsauger", "overdose", "bonesaw", "übersaw", "vita-saw", "amputator", "solemn vow", "sydney sleeper", "shahanshah", "enforcer"] 
var mvmMaps = ["Big Rock", "Coal Town", "Decoy", "Ghost Town", "Mannhattan", "Mannworks", "Rottenburg"]
var tourAmounts = ["1", "1", "2", "3", "4"]
var mvmMission = ["Doe's Drill", "Doe's Doom", "Day of Wreckening", "Disk Deletion", "Data Demolition", "Disintegration", "Desperation", "Crash Course", "Cave-in", "Quarry", "Ctrl+Alt+Destruction", "CPU Slaughter", "Cataclysm", "Caliginous Caper", "Mann-euvers", "Mean Machines", "Mannhunt", "Machine Massacre", "Mech Mutiliation" ,"Mannslaughter", "Benign Infiltration", "Broken Parts", "Bone Shaker", "Big Apple Barricade", "Empire Escalation", "Metro Malice", "Village Vanguard", "Hamlet Hostility", "Bavarian Botbash"]
var operations = ["Steel Trap", "Oil Spill", "Gear Grinder", "Mecha Engine", "Two Cities"]
var x = false

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
    x = false
}
function crook() {
    kills = basekills[1]
    specialKillAmounts = basespecialKillAmounts[1]
    points = basepoints[1]
    wins = basewins[1]
    difficultyIsDefined = true;
    x = false
}
function merc() {
    kills = basekills[2]
    specialKillAmounts = basespecialKillAmounts[2]
    points = basepoints[2]
    wins = basewins[2]
    difficultyIsDefined = true;
    x = false
}
function assassin() {
    kills = basekills[3]
    specialKillAmounts = basespecialKillAmounts[3]
    points = basepoints[3]
    wins = basewins[3]
    difficultyIsDefined = true;
    x = false
}
function pub() {
    kills = basekills[4]
    specialKillAmounts = basespecialKillAmounts[4]
    points = basepoints[4]
    wins = basewins[4]
    difficultyIsDefined = true;
    x = false
}
function mvm() {
    x = true
}

function displayChallenge() {
    var challengeText = document.getElementById("Challenge-Text")
    challengeText.innerHTML = "Choose a difficulty"
    
    if (x == true) {
        var i = Math.floor(Math.random() * 4)
        switch(i) {
        case 0:
            challengeText.innerHTML = "Complete  " + random(tourAmounts) + " missions on " + random(mvmMaps) + "."
            break;
        case 1:
            challengeText.innerHTML = "Complete the " + random(operations) + " operation."
            break;
        case 2:
            challengeText.innerHTML = "Complete the " + random(mvmMaps) + " map."
            break;
        case 3:
            challengeText.innerHTML = "Complete the " + random(mvmMission) + " mission."
        default:

        }
    } else {
        var i = Math.floor(Math.random() * 11)
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
                challengeText.innerHTML = "Play on " + random(maps) + " and get " + random(specialKillAmounts) + " "+  random(specialKills) + " kills in one game."
                break;
            case 4:
                challengeText.innerHTML = "Get " + random(kills) + " assists as " + random(character) + " in one round."
                break;
            case 5:
                challengeText.innerHTML = "Complete " + random(wins) + " map objectives on " + random(maps) + "."
                break;
            case 6:
                challengeText.innerHTML = "Get " + random(specialKillAmounts) + " kills with the " + random(hardWeapons) + " in one game."
                break;
            case 7:
                challengeText.innerHTML = "Surive one round without dying"
                break;
            case 8:
                challengeText.innerHTML = "Survive one round without dying as " + random(character) + "."
                break;
            case 9:
                challengeText.innerHTML = "Get a " + random(kills) + " killstreak."
                break;
            case 10:
                challengeText.innerHTML = "Get a " + random(kills) + " killstreak as " + random(character) + "."
            default: 
                challengeText.innerHTML = "Complete " + random(wins) + " map objectives on " + random(maps) + "."
        }
    }
    
    
}
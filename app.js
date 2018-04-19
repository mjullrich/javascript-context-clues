
// Context Clues Lab


var names = ["Luke", "Harry", "Halo", "Yoda", "Hermione"];

var weapons = ["Sniper Rifle", "Catspaw Blad Dagger", "Ion Canon", "Luke's Light Saber", "Blaster Pistol",
    "Rubberduck", "Spagetti", "Stun Baton", "Cluster Bomb", "Galexy Gun", "Bug Catching Net", "Blitzball",
    "Fire Extinguisher", "Umbrella", "Legos", "Sword of Gryffindor", "Winged Catapult", "Pukwudgie Arrow",
    "Pickle Jar", "Elder Wand"];

var locations = ["Portapotty", "Hufflepuff House", "Honeyduke's Sweetshop", "Millenium Falcon",
    "Number 12 Grimmauld Place", "Malfoy Manner", "Hogwarts", "Refrigerator", "Slytherin House", "Ravenclaw House"];


$(document).ready(function () {
    for (var i = 0; i < 100; i++) {
        var h3 = $('<h3> Accusation ' + (i + 1) + '</h3>');
        $(document.body).append(h3);
        var trigger = randomAlert(i);
        h3.click(trigger);
    }
    function randomAlert(num) {
        return function () {
            var name = Math.floor(Math.random() * names.length);
            var location = Math.floor(Math.random() * locations.length);
            var weapon = Math.floor(Math.random() * weapons.length);
            alert('I accuse ' + names[name] + ' with the ' + weapons[weapon] + ' in the ' + locations[location] + '!');
        }
    }
});



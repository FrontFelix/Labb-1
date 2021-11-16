const pages = {
    "starter": document.getElementById('start'),
    "settings": document.getElementById('settings'),
    "fightscene": document.getElementById('fightingScene')
}

const player =
{
    "name": "default",
    "fighter": "default",
    "weapon": "pistol",
    "age": 13
}
const fighterImage = document.getElementById('fighter')
const arenaImage = document.getElementById('fighterArena')
const arenaName = document.getElementById('arenaName')
const arenaAge = document.getElementById('arenaAge')
const arenaWeapon = document.getElementById('arenaWeapon')


// Arena 
const wolf = document.getElementById('wolf')
const person = document.getElementById('fighterArena')

// Arena buttons
const attackBtn = document.getElementById('buttonAttack')
const friendBtn = document.getElementById('buttonFriend')

// Weapons

const bullet = document.getElementById('bullet')
const swing = document.getElementById('swing')
const scratch = document.getElementById('scratch')

function updateFighter(item) {
    attackBtn.style.display = "block"
    friendBtn.style.display = "block"
    bullet.style.display = "none"
    swing.style.display = "none"
    if(item.id === "Male") {
        player.fighter = "./images/fighter1.png"
        player.weapon = "Sword"
    }else if(item.id === "Female") {
        player.fighter = "./images/fighter2.png"
        player.weapon = "Pistol"
    }
    console.log(player)
    pages.starter.style.display = "none"
    pages.settings.style.display = "block"
    fighterImage.src = player.fighter
}

function settingsFighter() {
    const ageValue = document.getElementById('fighterAge').value
    const nameValue = document.getElementById('fighterName').value
    player.age = ageValue
    player.name = nameValue
    pages.settings.style.display = "none"
    pages.fightscene.style.display = "block"
    arenaImage.src = player.fighter
    arenaName.innerHTML = player.name
    arenaAge.innerHTML = player.age
    arenaWeapon.innerHTML = player.weapon
    console.log(player)

}


function fightWolf() {
    attackBtn.style.display = "none"
    friendBtn.style.display = "none"
    if(player.weapon === "Pistol") {
        bullet.style.display = "block"
        bullet.style.animation = "bulletShoot 1s linear"
        setTimeout(function(){wolf.style.animation = "rotatePerson 1s linear"}, 4000)
        wolf.style.animation = "rotateWolf 1s linear"
        setTimeout(function(){alert("YOU WON THE GAME BY KILLING THE WOLF")}, 3000)
    }else if(player.weapon === "Sword") {
        swing.style.display = "block"
        swing.style.animation = "rotateSwing 1s linear"
        setTimeout(function(){wolf.style.animation = "rotateWolf 1s linear"}, 1000)
        setTimeout(function(){alert("YOU WON THE GAME BY KILLING THE WOLF")}, 3000)
    }


    setTimeout(function(){
        pages.fightscene.style.display = "none"
        pages.starter.style.display = "block"
    }, 8000)
}

function friendWolf() {
    attackBtn.style.display = "none"
    friendBtn.style.display = "none"
    scratch.style.display = "block"
    scratch.style.animation = "rotateScratch 1s linear"
    setTimeout(function(){alert("THE WOLF KILLED YOU, YOU LOST!")}, 3000)

    setTimeout(function(){
        pages.fightscene.style.display = "none"
        pages.starter.style.display = "block"
    }, 8000)
}
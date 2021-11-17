const fighterImage = document.getElementById('fighter')
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
const arena = {
    "wolf": document.getElementById('wolf'),
    "person": document.getElementById('fighterArena'),
    "image": document.getElementById('fighterArena'),
    "name": document.getElementById('arenaName'),
    "age": document.getElementById('arenaAge'),
    "weapon": document.getElementById('arenaWeapon'),
    "attackBtn": document.getElementById('buttonAttack'),
    "friendBtn": document.getElementById('buttonFriend'),
    "weaponBullet": document.getElementById('bullet'),
    "weaponSwing": document.getElementById('swing'),
    "weaponScratch": document.getElementById('scratch')
}


function updateFighter(item) {
    arena.attackBtn.style.display = "block"
    arena.friendBtn.style.display = "block"
    arena.weaponBullet.style.display = "none"
    arena.weaponSwing.style.display = "none"
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
    arena.image.src = player.fighter
    arena.name.innerHTML = player.name
    arena.age.innerHTML = player.age
    arena.weapon.innerHTML = player.weapon
    console.log(player)

}


function fightWolf() {
    arena.attackBtn.style.display = "none"
    arena.friendBtn.style.display = "none"
    if(player.weapon === "Pistol") {
        arena.weaponBullet.style.display = "block"
        arena.weaponBullet.style.animation = "bulletShoot 1s linear"
        setTimeout(function(){arena.wolf.style.animation = "rotatePerson 1s linear"}, 4000)
        arena.wolf.style.animation = "rotateWolf 1s linear"
        setTimeout(function(){alert("YOU WON THE GAME BY KILLING THE WOLF")}, 3000)
    }else if(player.weapon === "Sword") {
        arena.weaponSwing.style.display = "block"
        arena.weaponSwing.style.animation = "rotateSwing 1s linear"
        setTimeout(function(){arena.wolf.style.animation = "rotateWolf 1s linear"}, 1000)
        setTimeout(function(){alert("YOU WON THE GAME BY KILLING THE WOLF")}, 3000)
    }


    setTimeout(function(){
        pages.fightscene.style.display = "none"
        pages.starter.style.display = "block"
    }, 8000)
}

function friendWolf() {
    arena.attackBtn.style.display = "none"
    arena.friendBtn.style.display = "none"
    arena.weaponScratch.style.display = "block"
    arena.weaponScratch.style.animation = "rotateScratch 1s linear"
    setTimeout(function(){alert("THE WOLF KILLED YOU, YOU LOST!")}, 3000)

    setTimeout(function(){
        pages.fightscene.style.display = "none"
        pages.starter.style.display = "block"
    }, 8000)
}
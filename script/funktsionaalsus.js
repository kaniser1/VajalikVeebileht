var championid = [
    "Aatrox", "Ahri", "Akali", "Annie", "Aphelios", "Ashe", "Azir", "Cassiopeia", "Diana",
    "Elise", "Evelynn", "Ezreal", "Fiora", "Garen", "Hecarim", "Irelia", "Janna", "Jarva IV",
    "Jax", "Jhin", "Jinx", "Kalista", "Katarina", "Kayn", "Kennen", "Kindred", "Lee sin",
    "Lillia", "Lissandra", "Lulu", "Lux", "Maokai", "Morgana", "Nami", "Nidalee", "Nunu",
    "Pyke", "Riven", "Sejuani", "Sett", "Shen", "Sylas", "Tahm Kench", "Talon", "Teemo",
    "Thresh", "Twisted Fate", "Vayne", "Veigar", "Vi", "Warwick", "Wukong", "Xin Zhao",
    "Yasuo", "Yone", "Yuumi", "Zed", "Zilean"
]
function uus_champion() {
    var suvalineNumber = Math.floor(Math.random() * (championid.length));
    document.getElementById('championiDisplay').innerHTML = championid[suvalineNumber]
}
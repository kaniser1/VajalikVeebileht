var championid = [
    "Aatrox", "Ahri", "Akali", "Annie", "Aphelios", "Ashe", "Azir", "Cassiopeia", "Diana",
    "Elise", "Evelynn", "Ezreal", "Fiora", "Garen", "Hecarim", "Irelia", "Janna", "Jarvan IV",
    "Jax", "Jhin", "Jinx", "Kalista", "Katarina", "Kayn", "Kennen", "Kindred", "Lee Sin",
    "Lillia", "Lissandra", "Lulu", "Lux", "Maokai", "Morgana", "Nami", "Nidalee", "Nunu",
    "Pyke", "Riven", "Sejuani", "Sett", "Shen", "Sylas", "Tahm Kench", "Talon", "Teemo",
    "Thresh", "Twisted Fate", "Vayne", "Veigar", "Vi", "Warwick", "Wukong", "Xin Zhao",
    "Yasuo", "Yone", "Yuumi", "Zed", "Zilean"
] // loob champinite nimekirja
function uus_champion() {
    var suvalineNumber = Math.floor(Math.random() * (championid.length)); // toob suvalise numbri, mis valib meile järgmise championi
    var kuvatavChamp = championid[suvalineNumber]; // paneb selle championi muutujasse
    document.getElementById('championiDisplay').innerHTML = kuvatavChamp; // Muudab championi nime lehel
    document.getElementById('championiPilt').src = "images/" + kuvatavChamp + ".jpg"; // Muudab championi pildi lehel
}
const node = document.getElementById("tweet")
const clone = node.cloneNode(true);
document.getElementById("tweet2").appendChild(clone);

const node2 = document.getElementById("tweet")
const clone2 = node2.cloneNode(true);
document.getElementById("tweet3").appendChild(clone2);

let profilePictureArr = ["./profile_picture_comp/1.jpg","./profile_picture_comp/2.jpg","./profile_picture_comp/3.jpg","./profile_picture_comp/4.jpg","./profile_picture_comp/5.jpg"]
let tweetsArr = ['Nama doang ada jordannya, padahal gak bisa main basket #sport', "god of war ragnarok already my GOTY in my heart indeed tapi kenapa di delay lagi suu #gaming","kenapa hogwarts legacy diundur melolo seeh i want to escape my life and live like a wizard rite nowwww biychees #gaming", "madrid bayarr wasit teroooooooooooooooooshhhhh, jelas-jelas penalty suuu #sport", "WKWKWKWKWKWKWWKWKWK emyu lawaaak betttt mampoussssssssss #sport", "taeklaaaaaaaah kapan final champions leaguenya cokkkkk viscabarcaaa!!! #sport", "need another content deh kayaknya di mh sunbreak bosenin cok #gaming" , 'undur aja terus tgl rilis RTX 4080 butuh apgred ASAP WOI!!!! #gaming' , "NI ODA TERUS AJA GAK NGE REVEAL shanks in action! #musicnmovies" , "oklahoma city thunder kapan bisa nge draft macem big three lagi,kek jaman KD-RUSS-HARDEN ampas BANGET DRAFT PICKNYA!! #sport" , "ARCTIC MONKEYS WE NEED YOU TO COME TO INDONESIA!! #musicnmovies" , "switch pro kapan riliss woyyyy!!! biar game-gamenya kagak farming-rpg game terosshhh sampaaaah! #gaming" , "music scorenya tower of fantasy gabisa nyaingin music scorenya genshin titik!!!! #musicnmovies" , "penaldo the tap in merchant dah pensi ajee bangg!!! #sport" , "forspoken delay terossshh hasuuuu!!! #gaming" , "joycon drift meloloooooooo cibayyyyyyyyyyyyy woeee nintendooogs benerin QC lo napaaa O_O #gaming", "butuh asupan game2 berkualitas di swtich jangan farming-simulator RPG terosssh mana zeldanyaaaa nintendogs!!! #gaming" , "mana di manaaa trophy champions league barca~~  #sport" ,"kesian banget sih tottenham ayam kampus club udah 5 dekade masih aja kaga ada trophy satupun HAHAHAHAAH! #sport" , "arsendal the ampas jewel of london utara WKWKWKWKWWK #sport" , "FFFFFUUUUUUU ELDEN RING CHEATERS, bandai namco fix your GAMEEEEEEEEE!!! #gaming"]
let usersArr = ["Makrusus", "Pesa", "Fethir", "Onad", "jenud", "pakjul", "akhirudin", "wali", "andreak", "tidar", 'Ari', 'Ayu', 'Aulia', 'Anggi', 'Agus', 'Ade' ,'Adryan', 'Arya', 'Amel', 'Andi','Bayu', 'Bagas', 'Budi', 'Bagus', 'Bastian','Bintang', 'Ben', 'Chika', 'Cinta', 'Citra', 'Cakra', 'Candra', 'Darius', 'Dimas', 'Deo', 'Dean','Ivan' ,'Dinda', 'Dika', 'Dodi', 'Ernes', 'Erwin', 'Eka', 'Elin', 'Elsa', 'Ema', 'Ela', 'Fikri', 'Fitri', 'Fika', 'Fani', 'Fina', 'Farid', 'Fadel', 'Galih', 'Gading', 'Guntur', 'Gilang', 'Geri', 'Gibran', 'Hamidah', 'Hilda', 'Hilmi', 'Hisyam', 'Haikal', 'Harun', 'Gayuh' , 'Anuman', 'Kiet', 'Kob Sinn', 'Kriang', 'Kasemchai','Khemkhaeng', 'Kittibun', 'Kamon', 'khalahan', ' kraisee', 'Lamon', 'Mongkut', 'makok', 'Mennoi', 'Nopadonlai', 'Ngaplai', 'niran', 'Narong' ,'paiton', 'Panit', 'pravat','Phet', 'ngablay', 'thangsei','Sakda','Ritpacong' , 'Shonchai', 'Suctratlai' , 'Shomcai','Songranglai' , 'naprep', 'Udom', 'Thapang', 'Xuwangab', 'Yuthankon', 'Shonthiak', 'Shochak', 'Akemi','Genjeh', 'Arata', 'Chai' ,'Nande', 'Goro', 'Hiroki' , 'Nantumunan', 'Kazuki', 'Ken', 'Kenji', 'Kenshin' , 'Kenta', 'Monkey', 'Nishinoya', 'Lawliet', 'Kazuto', 'Kirigaya', 'Sakata', 'Naruto', 'Uzumaki', 'Zoro', 'Edward', 'Elric', 'Monkey', 'Luffy', 'Toshiro', 'Hitsugaya', 'Kaede', 'Rukawa', 'Chrollo', 'Lucilfer', 'Kyoya', 'Hibari', 'Gojo', 'Satoru', 'araki', 'Himiko', 'Toga', 'Nobara', 'Kugisaki', 'Kenpachi', 'Yuji', 'Itadori', 'Megumi', 'Fushiguro', 'Nobara', 'Kugisaki', 'Maki', 'Zenin', 'Toge', 'Inumaki', 'Yuta', 'Okkotsu', 'Kinji', 'Hakari', 'Kirara']
let tempArr =[]

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}


let image = document.getElementsByClassName("foto")
for (let i = 0; i < image.length; i++) {
    let profilePicture = profilePictureArr[getRndInteger(0,profilePictureArr.length-1)]
    if (!(tempArr.includes(profilePicture))) { // filter apabila sudah ditampilkan
        image[i].src = profilePicture
        tempArr.push(profilePicture)
    } else{
        i--
    }
}

let twit = document.getElementsByClassName("twit")
for (let i = 0; i < twit.length; i++) {
    let twits = tweetsArr[getRndInteger(0,tweetsArr.length-1)]
    if (!(tempArr.includes(twits))) { // filter apabila sudah ditampilkan
        twit[i].innerText = twits
        tempArr.push(twits)
    } else{
        i--
    }
}

let nama = document.getElementsByClassName("nama")
for (let i = 0; i < nama.length; i++) {
    let namas = usersArr[getRndInteger(0,usersArr.length-1)]
    if (!(tempArr.includes(namas))) { // filter apabila sudah ditampilkan
        nama[i].innerText = namas
        tempArr.push(namas)
    } else{
        i--
    }
}

let sessionId = document.getElementsByClassName("RNG")
for (let i = 0; i < sessionId.length; i++) {
    let strNum = ''
    let output = ''
    while (strNum.length < 9){
        let number = Math.floor(Math.random()*10)
        strNum+= number.toString();
    }
    output = `#${strNum}`
    sessionId[i].innerText = output
}
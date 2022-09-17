function generateSessionId() { //RNG untuk session ID
    let strNum = ''
    let output = ''
    
        while (strNum.length < 9){
            let number = Math.floor(Math.random()*10)
            strNum+= number.toString();
        }
    output = `#${strNum}`
    return output
}

function getRndInteger(min, max) { //random untuk profile picture user
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

let profilePictureArr = ["./profile_picture_comp/1.jpg","./profile_picture_comp/2.jpg","./profile_picture_comp/3.jpg","./profile_picture_comp/4.jpg","./profile_picture_comp/5.jpg"] //url profile picture user

let sessionId = generateSessionId()                                                 // session-id
let displayName = sessionStorage.getItem("displayName")
let userName = displayName                       // display-name
let profilePicture = profilePictureArr[getRndInteger(0,profilePictureArr.length-1)] // profile-picture

function updateUserData() {
    let userSessionIdElement = document.getElementsByClassName('session-id')
    let userDisplayNameElement = document.getElementsByClassName('display-name')
    let userProfilePictureElement = document.getElementsByClassName('profile-picture')

    for(let i=0; i<userSessionIdElement.length;i++) {
        userSessionIdElement[i].innerText = sessionId
    }

    for(let i=0;i<userDisplayNameElement.length;i++) {
        userDisplayNameElement[i].innerText = displayName
    }

    for(let i=0;i<userProfilePictureElement.length;i++) {
        userProfilePictureElement[i].src = profilePicture
    }
    // sessionStorage.removeItem("displayName");
    sessionStorage.setItem("sessionId", sessionId)
}

updateUserData()
// console.log(feedBox)

let feedBox = document.getElementById("feed-box")

// let selectTopicCheckbox = document.getElementById("topic-checkbox") // checkbox untuk menampilkan TWOT yang relevan
let selectTopicGamingElement = document.getElementById("topic-gaming")
let selectTopicSportsElement = document.getElementById("topic-sports")
let selectTopicMusicMoviesElement = document.getElementById("topic-musicmovies")

addEventListener

let twotTextInputElement = document.getElementById("twotTextArea")

const submitFeedButton = document.getElementById("submit-twot") // elemen button untuk submit feed
// const deleteTwotButton = document.getElementById("delete-twot")


const deleteTwotButton = document.getElementsByClassName("delete-twot")

console.log(twotTextInputElement)
let twotCounter = 1

submitFeedButton.addEventListener('click', function () {
    if (!twotTextInputElement.value) {
        return alert('Silahkan masukkan keluhanmu')
    }
     // radio untuk memilih topic TWOT

let topicSelectorGaming = document.getElementById("gaming")
let topicSelectorSport = document.getElementById("sport")
let topicSelectorMusicMovies = document.getElementById("musik__and__movie")

// topicSelectorGamingElement.addEventListener('input', function () {
//         if(topicSelectorGaming.value) {

//         } else {

//         }
//     })


// topicSelectorSportsElement.addEventListener('input', function () {
//         if(topicSelectorSportsElement.value) {

//         } else {

//         }
//     })


// topicSelectorMusicMoviesElement.addEventListener('input', function () {
//         if(topicSelectorMusicMoviesElement.value) {

//         } else {

//         }
//     })
    
    let twotTopic = 0
    let textInput = twotTextInputElement.value

    // console.log(topicSelectorGaming,topicSelectorSport,topicSelectorMusicMovies)
    
    if(topicSelectorGaming.checked) twotTopic = "gaming"
    if(topicSelectorSport.checked) twotTopic = "sport"
    if(topicSelectorMusicMovies.checked) twotTopic = "musicnmovies"

    console.log(twotTopic)
    
    if(!twotTopic) {
        return alert(`Silahkan pilih topik keluhan`)
    }
    
    let feedList = document.getElementById('feed-list') // elemen yang akan menampilkan feed-feed
    let divTwot = document.createElement('div') // how to add class to an element
    divTwot.classList.add(`Twot${twotCounter}`)
    divTwot.innerHTML = `
          <div id="twot${twotCounter}">  
          <div class="flex p-4 pb-0">
          <img id="" class="profile-picture h-9 w-9 rounded-full "
          src="${profilePicture}" alt="" />
          <div class="xl:flex flex-col ml-2">
          <h4 id="" class="display-name text-gray-800 dark:text-white font-bold text-sm">${userName}</h4>
          <p id="" class="session-id text-gray-400 text-sm">${sessionId}</p>
          </div>
          </p>
          </div>
          <!-- PROFIL-->
          
          <!-- CARD TWEET-->
          <div id="twot${twotCounter}" class="pl-8 xl:pl-16">
          <p id="twot0" class="w-auto font-medium text-gray-800 dark:text-white">
          ${textInput} #${twotTopic}
          </p>
          <button onclick="deleteButton('twot${twotCounter}')" id="twot${twotCounter}" href="" class="delete-twot font-bold bg-red-600  text-white rounded-full mt-6 px-6  flex items-center hover:bg-red-900">
          Delete
          </button>
          </div>
          </div>
          <!-- CARD TWEET END-->`

    console.log(divTwot)
          
    feedList.prepend(divTwot) 
    twotCounter++
    twotTextInputElement.value = ""
    topicSelectorGaming.checked = false
    topicSelectorSport.checked = false
    topicSelectorMusicMovies.checked = false
    alert("U WOTTED M8!")
})

let deleteElement = document.getElementById(deleteTwotButton.id)
var functionDeleteTwot = function() {

    console.log('click!')
    console.log(deleteTwotButton)
    console.log(deleteElement)
    if (confirm("Delete WOT?")) {
        let text = `deleted WOT`
        // let deletedTwot = document.getElementById()
        // deleteTwotButton.parentNode.childNodes[1].innerText = text
        // deleteTwotButton.parentNode.childNodes[1].style.fontStyle = "italic";
        // deleteTwotButton.parentNode.childNodes[1].style.fontWeight = "100";
        deleteElement.remove()
    }
};

var deleteButton = function (id) {
    // let nameOfFunction = this[event.target.name]
    console.log(">>>>>", id)
    let deleteElement = document.getElementById(id)
    // deleteElement = document.getElementById(this.id)
    // console.log(this)
    // console.log(deleteElement)
    if (confirm("Delete WOT?")) {
        let text = `deleted WOT`
        // let deletedTwot = document.getElementById()
        // deleteTwotButton.parentNode.childNodes[1].innerText = text
        // deleteTwotButton.parentNode.childNodes[1].style.fontStyle = "italic";
        // deleteTwotButton.parentNode.childNodes[1].style.fontWeight = "100";
        deleteElement.remove()
    }
}

for (var i = 0; i < deleteTwotButton.length; i++) {
    deleteElement = document.getElementById(deleteTwotButton[i].id)
    deleteTwotButton[i].addEventListener('click', functionDeleteTwot, false);
}

// deleteTwotButton.addEventListener('click', function () {

// })

function populateFeed () {

    const node = document.getElementById("tweet")
    const clone = node.cloneNode(true);
    document.getElementById("tweet2").appendChild(clone);
    
    const node2 = document.getElementById("tweet")
    const clone2 = node2.cloneNode(true);
    document.getElementById("tweet3").appendChild(clone2);
    
    // let profilePictureArr = ["./profile_picture_comp/1.jpg","./profile_picture_comp/2.jpg","./profile_picture_comp/3.jpg","./profile_picture_comp/4.jpg","./profile_picture_comp/5.jpg"]
    let tweetsArr = ['Nama doang ada jordannya, padahal gak bisa main basket #sport', "bayernnnn anjenkkkkk, need barcelona another sextuplet this year please #sport" , "god of war ragnarok already my GOTY in my heart indeed tapi kenapa di delay lagi suu #gaming","kenapa hogwarts legacy diundur melolo seeh i want to escape my life and live like a wizard rite nowwww biychees #gaming", "madrid bayarr wasit teroooooooooooooooooshhhhh, jelas-jelas penalty suuu #sport", "WKWKWKWKWKWKWWKWKWK emyu lawaaak betttt mampoussssssssss #sport", "taeklaaaaaaaah kapan final champions leaguenya cokkkkk viscabarcaaa!!! #sport", "need another content deh kayaknya di mh sunbreak bosenin cok #gaming" , 'undur aja terus tgl rilis RTX 4080 butuh apgred ASAP WOI!!!! #gaming' , "NI ODA TERUS AJA GAK NGE REVEAL shanks in action! #musicnmovies" , "oklahoma city thunder kapan bisa nge draft macem big three lagi,kek jaman KD-RUSS-HARDEN ampas BANGET DRAFT PICKNYA!! #sport" , "ARCTIC MONKEYS WE NEED YOU TO COME TO INDONESIA!! #musicnmovies" , "switch pro kapan riliss woyyyy!!! biar game-gamenya kagak farming-rpg game terosshhh sampaaaah! #gaming" , "music scorenya tower of fantasy gabisa nyaingin music scorenya genshin titik!!!! #musicnmovies" , "penaldo the tap in merchant dah pensi ajee bangg!!! #sport" , "forspoken delay terossshh hasuuuu!!! #gaming" , "joycon drift meloloooooooo cibayyyyyyyyyyyyy woeee nintendooogs benerin QC lo napaaa O_O #gaming", "butuh asupan game2 berkualitas di swtich jangan farming-simulator RPG terosssh mana zeldanyaaaa nintendogs!!! #gaming" , "mana di manaaa trophy champions league barca~~  #sport" , "tsunade= tsu tsu nya gedeekkkkk KAPAN GUA BISA DAPET GF MACEM TSUNADE SANGEE-AHHHHHHHHHHHH!!! #musicnmovies" , "kesian banget sih tottenham ayam kampus club udah 5 dekade masih aja kaga ada trophy satupun HAHAHAHAAH! #sport" , "arsendal the ampas jewel of london utara WKWKWKWKWWK #sport" , "FFFFFUUUUUUU ELDEN RING CHEATERS, bandai namco fix your GAMEEEEEEEEE!!! #gaming"]
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
    
    let sessionIdDummy = document.getElementsByClassName("RNG")
    for (let i = 0; i < sessionId.length; i++) {
        let strNum = ''
        let output = ''
        while (strNum.length < 9){
            let number = Math.floor(Math.random()*10)
            strNum+= number.toString();
        }
        output = `#${strNum}`
        sessionIdDummy[i].innerText = output

        console.log('run!')
    }
}

populateFeed()
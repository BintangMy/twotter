let displayNameInputElement = document.getElementById("display-name-input")
const submitDisplayNameButton = document.getElementById("signIn")

submitDisplayNameButton.addEventListener('click', function () {
    
    let displayNameCheck = displayNameInputElement.value
    if (displayNameCheck === '') {
        return alert('Silahkan masukkan nama yang ingin ditampilkan')
    }
    
    if (displayNameCheck.length < 4 || displayNameCheck.length > 15) {
        return alert('Masukkan display name dengan 4-15 alphabet')
    }

    if (!(/^[a-zA-Z]+$/.test(displayNameCheck))) {
        return alert('Display name tidak boleh berisi angka atau symbol')
    }

    sessionStorage.setItem("displayName", displayNameCheck);
})

displayNameInputElement.addEventListener('input', function () {

    let actionName = document.getElementById('loginprocess')
    console.log(actionName)
    
    let displayNameCheck = displayNameInputElement.value
    let isNotEmpty = false
    let is4OrMore = false
    let isAlphabet = false
    
    if (displayNameCheck !== '') {
        isNotEmpty = true
    }
    
    if (displayNameCheck.length >= 4 && displayNameCheck.length < 15) {
        is4OrMore = true
    }

    if ((/^[a-zA-Z]+$/.test(displayNameCheck))) {
        isAlphabet = true
    }

    console.log("isNotEmpty:",isNotEmpty," isMoreThan4:",is4OrMore," isAlphabet: ",isAlphabet)

    if(isNotEmpty && is4OrMore && isAlphabet) {
        actionName.action = './main/index.html'
    } else {
        actionName.action = ""
    }
})
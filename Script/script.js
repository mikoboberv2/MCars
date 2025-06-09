function swipeRight () {
    const elements = document.querySelectorAll('.offer-main-img');
    const elements2 = document.querySelectorAll('.offer-all-images-img')

    let elementId;
    let errorPrevent = 0;
    for(let i = 0; i < elements.length; i++){
        if(elements[i].width > 0){
            elementId = i;
        }
    }
    console.log(elementId)
    if(elementId==elements.length-1){
        return 0
    }
    elements2[elementId+1].classList.add('offer-all-images-img-selected')
    elements2[elementId].classList.remove('offer-all-images-img-selected')
    elements[elementId].classList.add('swipeRight')
    elements[elementId].classList.remove('swipeLeft')
    elements[elementId+1].classList.remove('swipeRight');
    elements[elementId+1].classList.add('swipeLeft');
}

function swipeLeft () {
    const elements = document.querySelectorAll('.offer-main-img');
    const elements2 = document.querySelectorAll('.offer-all-images-img')
    let elementId;
    let errorPrevent = 0;
    for(let i = 0; i < elements.length; i++){
        if(elements[i].width > 0){
            elementId = i;
        }
    }        
    console.log(elementId)
    if(elements[elementId]==undefined || elementId==0){
        return 0
    }
    elements2[elementId-1].classList.add('offer-all-images-img-selected')
    elements2[elementId].classList.remove('offer-all-images-img-selected')
    elements[elementId].classList.add('swipeRight')
    elements[elementId].classList.remove('swipeLeft')
    elements[elementId-1].classList.remove('swipeRight');
    elements[elementId-1].classList.add('swipeLeft');
}

function sendOffer (){
    const main = document.querySelector('main')
    const name = main.querySelector('#name').value
    const surName = main.querySelector('#surName').value
    const email = main.querySelector('#email').value
    const phoneNumber = main.querySelector('#phoneNumber').value
    const carName = main.querySelector('#car-model').value
    if(name == ''){
        alert('Źle wpisane imie')
    }
    else if(surName == ''){
        alert('Źle wpisane nazwisko')
    }
    else if(email == '' || email.includes('@') == false || email.includes('.') == false){
        alert('Źle wpisany email')
    }
    else if(phoneNumber == ''){
        alert('Źle wpisany numer telefonu')
    }
    else{
        main.innerHTML = ''
        main.innerHTML += '<br>'
        main.innerHTML += `Twój wybrany model to ${carName}`
        main.innerHTML += '<br>'
        main.innerHTML += '<br>'
        main.innerHTML += `<h2">Dziekujemy ${name} ${surName} za korzystanie z naszych usług nasz doradca niedługo się z tobą skontaktuje</h2>`
        main.innerHTML += '<br>'
        main.innerHTML += '<br>'
        main.innerHTML += '<h1>Możesz już opuścić tą strone</h1>'
        main.innerHTML += '<br>'
        main.innerHTML += '<br>'
    }
}

function calculateFinanse (){
    const carValue = document.querySelector('#kwota').value
    const months = document.querySelector('#months').value
    const h3 = document.querySelector("#result")
    let raty = 'error';
    if(months >= 48 && months < 60){
        raty = carValue / months * 1.02
    }
    else if(months >= 60 && months < 84){
        raty = carValue / months * 1.08
    }
    else if(months >= 84 && months < 96){
        raty = carValue / months * 1.12
    }
    else if(months >=96 && months < 120){
        raty = carValue / months * 1.20        
    }
    else{
        alert('Błąd w wyełnieniu formularz')
        return 0
    }
    const main = document.querySelector('main')
    console.log(h3)
    h3.innerText= `Twoja rata bedzie wynosiła: ${raty}`
}

const main = document.querySelector('main');
const mainBefore = main.innerHTML 
const mainLogowanie = '<div id="menu-logowanie"><div><h1>Zaloguj się</h1><input type="text" id="username" placeholder="Nazwa użytkownika"><input type="text" id="password" placeholder="Hasło"><br><button id="submit" onclick="logged()">Zaloguj się</button></div></div>'

function login (){
     main.innerHTML = mainLogowanie
}

function logged(){
    const username = document.querySelector('#username').value
    const password = document.querySelector('#password').value
    console.log(username)
    console.log(password)
    alert(`Użytkownik ${username} o haslie ${password} został zalogowany`)
    main.innerHTML = mainBefore
}
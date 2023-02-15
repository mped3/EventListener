weather = {
    sunny: {
        temp: "Don't Blink!",
        url: 'https://thumbs.gfycat.com/GiantShabbyFlamingo-size_restricted.gif',
        text: 'This is fireeee'
    },
    rainy: {
        temp: "Just Rideeee",
        url: 'https://th.bing.com/th/id/R.d8f6b5cf073deb0e82fa33381985d691?rik=cD2KXuwDbW33xg&pid=ImgRaw&r=0',
        text: 'This is HARLEY'
    },
    snowy: {
        temp: "Flower Boy",
        url: 'https://media.giphy.com/media/Z9UlOV2ZPpe00/giphy.gif',
        text: 'GOLF WANGGGG'
    },
    dusty: {
        temp: "Just A Casual Day",
        url: 'https://th.bing.com/th/id/R.97366e48dcf79532c9b18b995d08cdec?rik=gWurStnuQRxkTg&riu=http%3a%2f%2fwww.missionmission.org%2fwp-content%2fuploads%2f2014%2f07%2fskateboarding.gif&ehk=BwsPZCXe4PmgtBmT4ceREXLNEf62ZbdUjGAm313YjKg%3d&risl=&pid=ImgRaw&r=0',
        text: 'WHEEPSS'
    },
}
const changeSunny = ()=>{
    let firstpic = document.querySelector('.sImg')
    firstpic.setAttribute('src', weather.sunny.url )
    // -----------------------------------------------
    // targetBlue
    let blue = document.querySelector('.tempContainer')
    // append Temp
    blue.innerHTML = weather.sunny.temp
    // target green 
    let green = document.querySelector('.txt')
    // append text
    green.innerHTML = weather.sunny.text
}
const changeRainy = ()=>{
    let firstpic = document.querySelector('.sImg')
    firstpic.setAttribute('src', weather.rainy.url )
    // -----------------------------------------------
    // targetBlue
    let blue = document.querySelector('.tempContainer')
    // append Temp
    blue.innerHTML = weather.rainy.temp
    // target green 
    let green = document.querySelector('.txt')
    // append text
    green.innerHTML = weather.rainy.text
}
const changeSnowy = ()=>{
    let firstpic = document.querySelector('.sImg')
    firstpic.setAttribute('src', weather.snowy.url )
    // -----------------------------------------------
    // targetBlue
    let blue = document.querySelector('.tempContainer')
    // append Temp
    blue.innerHTML = weather.snowy.temp
    // target green 
    let green = document.querySelector('.txt')
    // append text
    green.innerHTML = weather.snowy.text
}
const changeDusty = ()=>{
    let firstpic = document.querySelector('.sImg')
    firstpic.setAttribute('src', weather.dusty.url )
    // -----------------------------------------------
    // targetBlue
    let blue = document.querySelector('.tempContainer')
    // append Temp
    blue.innerHTML = weather.dusty.temp
    // target green 
    let green = document.querySelector('.txt')
    // append text
    green.innerHTML = weather.dusty.text
}
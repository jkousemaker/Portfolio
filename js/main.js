
const button = document.querySelector('.theme-switcher')
const thumbnailPics = document.querySelectorAll('.img-thumbnail')
const themeButton = document.querySelector('.theme-switcher')
let darkMode = false;

const swapTheme = function(){
    const elements = document.querySelectorAll('.purple, .display-3, .list-group, .white, .card, body, .card-body, .list-group-item, .head, .jumbotron, .list-group-item, .white')

    for (let i = 0; i < elements.length; i++){
        elements[i].classList.toggle("themer")
    }
    for (let k = 0; k < thumbnailPics.length; k++) {
        thumbnailPics[k].classList.toggle("img-thumbnail")
    }
        
    if (darkMode){
        darkMode = false;
        localStorage.setItem("darkMode", darkMode);
    }
    else{
        darkMode = true;
        localStorage.setItem("darkMode", darkMode);
    }

    console.log(darkMode)
}
const buttonStatus = function(){
    
}
themeButton.addEventListener('click', swapTheme)

const localTheme = localStorage.getItem("darkMode")

if (localTheme == "true"){
    swapTheme();
    document.querySelector('.themeswitch').checked = true;
}

const emailButton = document.querySelector('.email-getter')
emailButton.addEventListener('click', function(){
    navigator.clipboard.writeText("j.l.kousemaker@gmail.com").then(function(){
        console.log("succes")
    }).catch(function(){
            console.log("failed to copy to clipboard")
    })
})

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
        var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl)
        })


    /*Variables*/
const button = document.querySelector('.theme-switcher');
const thumbnailPics = document.querySelectorAll('.bagus-img, .code-img, .mondriaan-image');
const themeButton = document.querySelector('.theme-switcher');
const emailButton = document.querySelector('.email-getter');
const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))

const localTheme = localStorage.getItem("darkMode");
let darkMode = false;

//addEventListener for Theme Switcher.
themeButton.addEventListener('click', swapTheme)

//Checks if darkmode is saved in local storage and if so enables it + checks the button.
if (localTheme == "true"){
    swapTheme();
    document.querySelector('.themeswitch').checked = true;
}

//addEventListener for Contact Me button.
emailButton.addEventListener('click', function(){
    navigator.clipboard.writeText("j.l.kousemaker@gmail.com").then(function(){
        console.log("succes");
    }).catch(function(){
        console.log("failed to copy to clipboard");
    })
})

    /*Functions*/

//Swaps the theme of the whole website.
function swapTheme() {
    const elements = document.querySelectorAll('.gcard1, .gcard2, .gcard3, .input, .main, .list-items, .sun-moon, .card1, .card2, .card3, .carddd, .cardd-body, .btn-switch.themer, .points, .question, .points, .card1, .buttons-active, .card:hover, .active-navbut, .purple, .display-3, .list-group, .white, .card, body, .card-body, .list-group-item, .head, .jumbotron, .list-group-item, .white')

    //For loop which enables themer styling for every selected element.
    for (let i = 0; i < elements.length; i++){
        elements[i].classList.toggle("themer")
    }
    //For loop which enables themer styling for every selected image.
    for (let k = 0; k < thumbnailPics.length; k++) {
        thumbnailPics[k].classList.toggle("img-dark-mode")
    }
    
    //Stores veriable in local storage.
    if (darkMode){
        darkMode = false;
        localStorage.setItem("darkMode", darkMode);
    }
    else{
        darkMode = true;
        localStorage.setItem("darkMode", darkMode);
    }

    console.log("Dark mode is: " + darkMode);
}

//Pop Over for Contact Me button.
const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
})


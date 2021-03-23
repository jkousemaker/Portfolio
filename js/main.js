let darkMode = false;
const themeButton = document.querySelector('.theme-switcher')
const swapTheme = function(){
    const elements = document.querySelectorAll('body, .card-body, .list-group-item, .head, .jumbotron, .list-group-item, .white')
    for (let k = 0; k < elements.length; k++){
        elements[k].classList.toggle("themer")
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
themeButton.addEventListener('click', swapTheme)

const localTheme = localStorage.getItem("darkMode")

if (localTheme == "true"){
    swapTheme();
}

const emailButton = document.querySelector('.email-getter')
emailButton.addEventListener('click', function(){
    navigator.clipboard.writeText("j.l.kousemaker@gmail.com").then(function(){
        console.log("succes")
    }).catch(function(){
        console.log("failed to copy to clipboard")
    })
    alert(copyText.value)
}
)
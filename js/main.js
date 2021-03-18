
const button = document.querySelector('.theme-switcher')
button.addEventListener('click', function(){
    const elements = document.querySelectorAll('body, .card-body, .list-group-item, .head, .jumbotron, .list-group-item, .white')
    for (let k = 0; k < elements.length; k++){
        elements[k].classList.toggle("themer")
    }
}   
) 

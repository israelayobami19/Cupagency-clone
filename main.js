const toggle_btn = document.querySelector('.dropdown_toggle');
const navigation = document.querySelector('.header .navigation');

toggle_btn.addEventListener('click', () => {
    if(navigation.classList.contains('active')){
        navigation.classList.remove('active')
    } else {
        navigation.classList.add('active')
    }
})
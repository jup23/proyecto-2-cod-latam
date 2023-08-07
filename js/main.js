const menuItems = document.querySelectorAll('.menu-item');

const menuBtn = document.querySelector('#menu-btn')
console.log(menuBtn);
menuBtn.addEventListener('click', function() {
    document.body.classList.toggle('mobile-menu-active')
})

menuItems.forEach(function(item){
    item.addEventListener('click', function (e) {
        const currentItem = document.querySelector
        ('.active');
        currentItem.classList.remove('active');
        e.target.classList.add('active');
    });

})
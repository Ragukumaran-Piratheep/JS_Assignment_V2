const btn = getElementByClassName('btn')[0];
const navbar = getElementByClassName('nav-link')[0];

btn.addEventListner('click',()=>{
    navbar.classlist.toggle('active');
});
var courses = [{
        image: 'images/javascriptDef.png',
        title: 'what is javascript?',
        category: 'JS',
        price: 9.9
    },
    {
        image: 'images/htmlBasics.PNG',
        title: 'basics of HTML',
        category: 'HTML',
        price: 5.9
    },
    {
        image: 'images/htmlElements.png',
        title: 'HTML elements and tags',
        category: 'HTML',
        price: 9.9
    },
    {
        image: 'images/cssSelectors.jpg',
        title: 'CSS selectors',
        category: 'CSS',
        price: 69.9
    },
    {
        image: 'images/javascriptVariables.png',
        title: 'variables and data type of javascript',
        category: 'JS',
        price: 19.9
    },
    {
        image: 'images/javascriptOperators.png',
        title: 'Javascript operators and conditions',
        category: 'JS',
        price: 29.9
    },
    {
        image: 'images/htmlAttrVal.jpg',
        title: 'HTML attributes and values',
        category: 'HTML',
        price: 19.9
    },
    {
        image: 'images/cssProperties.png',
        title: 'CSS properties',
        category: 'CSS',
        price: 29.9
    },
    {
        image: 'images/javascriptObjects.png',
        title: 'Javascript objects and arrays',
        category: 'JS',
        price: 39.9
    },
    {
        image: 'images/cssMesures.png',
        title: 'mesures and unites of CSS',
        category: 'CSS',
        price: 19.9
    },
    {
        image: 'images/cssAnimation.png',
        title: 'CSS animations',
        category: 'CSS',
        price: 19.9
    },
    {
        image: 'images/javascriptFunctions.png',
        title: 'The basics of javascript',
        category: 'JS',
        price: 29.9
    },
    {
        image: 'images/javascriptEvents.png',
        title: 'javascript events',
        category: 'JS',
        price: 59.9
    },
    {
        image: 'images/cssColors.png',
        title: 'css colors',
        category: 'CSS',
        price: 29.9
    },
    {
        image: 'images/phpBasics.png',
        title: 'getting started with php',
        category: 'PHP',
        price: 15.9
    },
    {
        image: 'images/javascriptFunctions2.png',
        title: 'functions and loops with javascript',
        category: 'JS',
        price: 19.9
    },
    {
        image: 'images/phpDataBase.png',
        title: 'connecting to database using PHP',
        category: 'PHP',
        price: 29.9
    },
    {
        image: 'images/phpCRUD.png',
        title: 'manipulating crud using php',
        category: 'PHP',
        price: 45.9
    },
    {
        image: 'images/javascriptDOM.png',
        title: 'DOM the power of javascript',
        category: 'JS',
        price: 23.9
    }
]
var cont2 = document.querySelector('.cont2');
var  showc = document.querySelector('#listCat');

showco();
showcat();
taman();
cati();
no();
//functions show 
//show courses
function showco(){
courses.forEach((F) => {
    addcourses(F.image, F.title, F.price);
})
}
//show categories
function showcat(){
    function addcategory(cat) {
        let B=document.createElement("B");
        B.id=cat;
        B.style.cursor="pointer";
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(cat));
        li.setAttribute('class', 'list-group-item');
        B.appendChild(li);
        showc.append(B);
    }
let category = ['ALL', ...new Set(courses.map((v) => v.category))]

category.forEach((v) => {
    addcategory(v);
})
}
//searching functions
//searching by price value
function taman(){
    let price=document.getElementById("price");
    let pricevalue=document.getElementById("pricevalue");
    pricevalue.innerHTML=price.value;
    
    price.addEventListener("change",()=>{
        pricevalue.innerHTML=price.value;
        cont2.innerHTML="";
        let s=0;
        courses.forEach((f) => {
            if(f.price<price.value){
                addcourses(f.image, f.title, f.price);
                s++;
            }
        })
        if(s===0)
            cont2.innerHTML="<div class='hoh'><h1>ERROR !!!</h1><h1>THERE IS NO COURSES WITH THIS PRICE.</h1></div>";
    
    })}
//searching by title
function no(){
        let bkl=document.getElementById("search");

bkl.addEventListener("keyup",()=>{
        cont2.innerHTML="";
    let s=0;
    courses.forEach((F) => {
        if(F.title.toLowerCase().search(bkl.value.toLowerCase())>=0){
            addcourses(F.image, F.title, F.price);
            s++;
        }
    })
    if(s===0)
        cont2.innerHTML="<div class='hoh'><h1>ERROR !!!</h1><h1>THER IS NO COURSES WITH THIS NAME.</h1></div>";
    }


)}

//searching by category
function cati(){
let all=document.getElementById("ALL");
let js=document.getElementById("JS");
let html=document.getElementById("HTML");
let css=document.getElementById("CSS");
let php=document.getElementById("PHP");

all.addEventListener("click",()=>{
    cont2.innerHTML="";
    courses.forEach((f) => {
        addcourses(f.image, f.title, f.price);
    })
})
js.addEventListener("click",()=>{
    cont2.innerHTML="";
    courses.forEach((f) => {
        if(f.category==="JS")
            addcourses(f.image, f.title, f.price);
    })
})
html.addEventListener("click",()=>{
    cont2.innerHTML="";
    courses.forEach((f) => {
        if(f.category==="HTML")
            addcourses(f.image, f.title, f.price);
    })
})
css.addEventListener("click",()=>{
    cont2.innerHTML="";
    courses.forEach((f) => {
        if(f.category==="CSS")
            addcourses(f.image, f.title, f.price);
    })
})
php.addEventListener("click",()=>{
    cont2.innerHTML="";
    courses.forEach((f) => {
        if(f.category==="PHP")
           addcourses(f.image, f.title, f.price);
    })
})}

//function to add courses
function addcourses(image, titre, prix) {
    let d= document.createElement('div');
    d.setAttribute('class', 'card col-3 me-2 mb-2 h-');
    let MM = document.createElement('img');
    MM.src = image;

    let p = document.createElement('p');
    p.setAttribute('class', 'card-title');
    let contenu = document.createTextNode(titre);
    p.appendChild(contenu);

     let  sp = document.createElement('span');
     sp.setAttribute('class', 'card-text');
    sp.appendChild(document.createTextNode(prix + '$'));

    d.appendChild(MM);
    d.appendChild(p);
    d.appendChild(sp);
    cont2.append(d)
}
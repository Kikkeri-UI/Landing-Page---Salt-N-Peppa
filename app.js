const reviews = [
    {
        id: 1,
        name: 'Sarah Anderson',
        job: 'travel blogger',
        img: 'https://www.course-api.com/images/people/person-1.jpeg',
        text: "I had the most amazing stay at this hotel! The staff was incredibly welcoming, and the views from my room were breathtaking. As a travel blogger, I've seen my fair share of places, and this hotel ranks among the top. The food at the restaurant was exquisite, and I can't wait to return",
    },
    {
        id: 2,
        name: 'anna johnson',
        job: 'Journalist',
        img: 'https://www.course-api.com/images/people/person-2.jpeg',
        text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
    },
    {
        id: 3,
        name: 'peter jones',
        job: 'Family traveller',
        img: 'https://www.course-api.com/images/people/person-4.jpeg',
        text: 'My family and I had a wonderful time at this hotel. The kid-friendly amenities, including a pool and play area, kept my children busy all day.'
    },
    {
        id: 4,
        name: 'bill anderson',
        job: 'Food Critic',
        img: 'https://www.course-api.com/images/people/person-3.jpeg',
        text: 'The dining experience at this hotel is a culinary delight! Iam a food critic, and I can be quite discerning, but the restaurant here exceeded my expectations. Each dish was a masterpiece, and the sommelier wine pairings were spot on. A must-visit for foodies ',
    },
];
const menu = [
    {
        id: 1,
        title: "buttermilk pancakes",
        category: "breakfast",
        price: 15.99,
        img: "./images/item-1.jpeg",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
        id: 2,
        title: "diner double",
        category: "lunch",
        price: 13.99,
        img: "./images/item-2.jpeg",
        desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
        id: 3,
        title: "godzilla milkshake",
        category: "shakes",
        price: 6.99,
        img: "./images/item-3.jpeg",
        desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
        id: 4,
        title: "country delight",
        category: "breakfast",
        price: 20.99,
        img: "./images/item-4.jpeg",
        desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
        id: 5,
        title: "egg attack",
        category: "lunch",
        price: 22.99,
        img: "./images/item-5.jpeg",
        desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
        id: 6,
        title: "oreo dream",
        category: "shakes",
        price: 18.99,
        img: "./images/item-6.jpeg",
        desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
        id: 7,
        title: "bacon overflow",
        category: "breakfast",
        price: 8.99,
        img: "./images/item-7.jpeg",
        desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
        id: 8,
        title: "american classic",
        category: "lunch",
        price: 12.99,
        img: "./images/item-8.jpeg",
        desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
        id: 9,
        title: "quarantine buddy",
        category: "shakes",
        price: 16.99,
        img: "./images/item-9.jpeg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
        id: 10,
        title: "Pizza Blast",
        category: "Fast Food",
        price: 16.99,
        img: "./images/item-9.jpeg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
        id: 10,
        title: "Pizza Blast",
        category: "Combo Meal",
        price: 16.99,
        img: "./images/item-9.jpeg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
];

// reviews section

const id = document.getElementById('id');
const name = document.getElementById('name');
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');
const prevBtn = document.querySelector('.prev-btn');
const nextbtn = document.querySelector('.next-btn');
const surprsieBtn = document.querySelector('.random-btn');

let currentItem = 0;

window.addEventListener('DOMContentLoaded', function () {
    showReviews();
    displayMenu(menu);
    displayCategoryFilters();
});

nextbtn.addEventListener('click', function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showReviews();

});

prevBtn.addEventListener('click', function () {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showReviews();
});

surprsieBtn.addEventListener('click', function () {
    currentItem = generateRandomNumber();
    showReviews();
})

function showReviews() {
    let item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
    return item;
}

function generateRandomNumber() {
    return Math.floor(Math.random() * reviews.length);
}

// toggle functionality

const toggleBtn = document.querySelector('.nav-toggle');
const links = document.querySelector('.links-container');

toggleBtn.addEventListener('click',function(){
    links.classList.toggle('show-links');
});

// menu section

const sectionCenter = document.querySelector('.section-center');


function displayMenu(menuItem){
    let menuItems = menuItem.map((item)=>{
        return `<article class="menu-item">
        <img src="${item.img}" class="photo" alt="${item.title}">
        <div class="item-info">
            <div class="header">
                <h4>${item.title}</h4>
                <h4 class="price">${item.price}</h4>
            </div>
            <p>${item.desc}</p>
        </div>
    </article>`

    });
    menuItems = menuItems.join('');
    //console.log(menuItems);
    sectionCenter.innerHTML = menuItems;
}

// filterBtns 

function displayCategoryFilters(){
    const categories = menu.reduce(function(values,item){
        if(!values.includes(item.category)){
            values.push(item.category);
        }
        console.log(values);
        return values;
        

    },['all'])
    const categoryBtns = categories.map(function(category){
        return `<button class="filter-btn" type="button" data-category="${category}">${category}</button>`  
    }).join('');
    const btnContainer = document.querySelector('.btn-container');
    btnContainer.innerHTML = categoryBtns;
    const filterBtns = document.querySelectorAll('.filter-btn');

filterBtns.forEach(function(filterBtn){
    filterBtn.addEventListener('click',function(e){
        const category = e.currentTarget.dataset.category;
        // console.log(category);
        const filteredMenu = menu.filter((item)=>{
            if(item.category === category){
                return item;
            }
           

        })
        if(category === 'all'){
            displayMenu(menu);
        }
        else{
            displayMenu(filteredMenu);
        }
    })
})
}
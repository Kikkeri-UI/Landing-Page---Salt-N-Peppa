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
        desc: `A delightful stack of fluffy buttermilk pancakes, served with a drizzle of pure maple syrup and a dollop of fresh whipped cream. The perfect way to start your day. `,
    },
    {
        id: 2,
        title: "diner double",
        category: "lunch",
        price: 13.99,
        img: "./images/item-2.jpeg",
        desc: `Our signature Diner Double burger features two juicy beef patties, melted cheese, fresh lettuce, and a special house sauce. It's a classic with a modern twist.`,
    },
    {
        id: 3,
        title: "godzilla milkshake",
        category: "shakes",
        price: 6.99,
        img: "./images/item-3.jpeg",
        desc: `The Godzilla Milkshake is a monstrous treat! Indulge in a creamy blend of organic flavors, topped with whipped cream and sprinkled with colorful jimmies. A shake that's larger than life.`,
    },
    {
        id: 4,
        title: "country delight",
        category: "breakfast",
        price: 20.99,
        img: "./images/item-4.jpeg",
        desc: `Experience the taste of the countryside with our Country Delight breakfast. This hearty platter includes farm-fresh eggs, crispy bacon, golden hash browns, and a warm, buttered biscuit.`,
    },
    {
        id: 5,
        title: "egg attack",
        category: "lunch",
        price: 22.99,
        img: "./images/item-5.jpeg",
        desc: `Our Egg Attack lunch option is a flavor explosion! It features a fluffy omelet stuffed with a variety of fresh vegetables, served with a side of crispy, seasoned fries.`,
    },
    {
        id: 6,
        title: "oreo dream",
        category: "shakes",
        price: 18.99,
        img: "./images/item-6.jpeg",
        desc: `For all the cookie lovers out there, the Oreo Dream shake is a dream come true. A creamy blend of crushed Oreos and vanilla ice cream, topped with a crown of Oreo chunks.`,
    },
    {
        id: 7,
        title: "bacon overflow",
        category: "breakfast",
        price: 8.99,
        img: "./images/item-7.jpeg",
        desc: `Satisfy your bacon cravings with the Bacon Overflow breakfast. Crispy bacon strips piled high on a bed of fluffy scrambled eggs. A breakfast that overflows with flavor.`,
    },
    {
        id: 8,
        title: "american classic",
        category: "lunch",
        price: 12.99,
        img: "./images/item-8.jpeg",
        desc: `The American Classic lunch offers a taste of nostalgia with a modern twist. Enjoy a classic grilled cheese sandwich with a side of tomato soup, perfect for dipping.`,
    },
    {
        id: 9,
        title: "quarantine buddy",
        category: "shakes",
        price: 16.99,
        img: "./images/item-9.jpeg",
        desc: `Our Quarantine Buddy shake is the ultimate comfort drink. A creamy concoction of nostalgic flavors that will keep you company during any time of the day.`,
    },
    {
        id: 10,
        title: "Savory Delight Combo",
        category: "Combo Meal",
        price: 24.99,
        img: "./images/item-9.jpeg",
        desc: "Our Savory Delight Combo is the perfect combination of flavors. Enjoy a juicy burger with your choice of toppings, a side of crispy fries, and a refreshing drink. It's a complete meal that's sure to satisfy your taste buds."
    }
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
            <p class="ptop">  ${item.desc}</p>
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
        //console.log(values);
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

// FAQ

const questions = document.querySelectorAll('.question');

questions.forEach((question)=>{
    const btn = question.querySelector('.question-btn');
    btn.addEventListener('click',()=>{
       questions.forEach(function(item){
        if(item !== question){
            item.classList.remove('show-text');
        }
       })
       question.classList.toggle('show-text');
    })
})

// About Us Section

const about = document.querySelector('.aboutcontainer');
const btns = document.querySelectorAll('.tab-btn');
const articles = document.querySelectorAll('.content');

about.addEventListener('click',(e)=>{
    const id = e.target.dataset.id;
    if(id){
        btns.forEach((btn)=>{
            btn.classList.remove('active');
        })
        e.target.classList.add('active');
        articles.forEach((article)=>{
            article.classList.remove('active')
        });
        const element = document.getElementById(id);
        element.classList.add('active');
    }
})




// Footer Date

const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();
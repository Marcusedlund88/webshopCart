//localStorage.removeItem('cart')

/*CLASS ITEM*/
  class Item {
    constructor(imgPath,name, quantity, unitPrice) {
        this.imgPath = imgPath;
      this.name = name;
      this.quantity = quantity;
      this.unitPrice = unitPrice;
      this.totalCost = parseInt(quantity) * parseFloat(unitPrice);
    }
  }

  /*FUNCTIONS*/

    function getTotalAmount(element){
        var sum = 0;
        element.forEach(e=>{
        sum = sum + parseFloat(e.totalCost);
    });
    return sum;
    } 
    function stringify(storedObject, objectToStore){
    var storedArray = JSON.parse(localStorage.getItem(storedObject)) || [];

// Add a new task to the list
storedArray.push(objectToStore);

// Store the updated tasks list in LocalStorage
localStorage.setItem(storedObject, JSON.stringify(storedArray));
    }

function onPageLoad(){
    let backgroundVisibility = document.querySelector('.loading-background');
    
   /* backgroundVisibility.style.visibility = 'visible';*/
    
    function animation(){
    let div = document.querySelector('.on-enter');
    let loadingText = 'GNIDAOL'
    for(let i = 0; i < loadingText.length; i++){
      let smoke = document.createElement('div');
      smoke.innerText = loadingText[i];
        setTimeout(()=>{
        div.appendChild(smoke);
      },400 * i);
    }
    
    setTimeout(()=>{
  for(let i = 0; i < loadingText.length; i++){
      let smoke = document.createElement('div');
      smoke.innerText = loadingText[i];
      smoke.style.left = '30%';
        setTimeout(()=>{
        div.appendChild(smoke);
      },400 * i);
    }
    },900)
    
  setTimeout(()=>{
  for(let i = 0; i < loadingText.length; i++){
      let smoke = document.createElement('div');
      smoke.innerText = loadingText[i];
      smoke.style.left = '50%'
        setTimeout(()=>{
        div.appendChild(smoke);
      },400 * i);
    }
  },1700);
  
  }
    animation();
  
    function stopAnimation(){
  setTimeout(()=>{
    
    let animationOpacity = document.querySelector('.on-enter');
    
  animationOpacity.style.opacity = '0';
    animationOpacity.style.transition = 'opacity 1s linear';
    
    let animation = document.querySelector('.on-enter').children
    
    animation
    setTimeout(()=>{
  for(let i = 0; i < animation.length; i++){
      animation[i].innerHTML = '';
      
      backgroundVisibility.style.visibility = 'collapse';
    }
    },1000);
  },3000);
  }
    stopAnimation();
  }

 function squeezeBurger(e, actionOne, actionTwo){
    e.style.height = actionOne;
    e.style.transition = actionTwo;
}

function makeX(e1,e2,e3,action1,action2,action3,action4){
    e2.style.backgroundColor = action1;
    e1.style.transition = action2;
    e3.style.transition = action2;
    e1.style.transform = action3;
    e3.style.transform = action4;
}

function enableClose(e1){
    e1.disabled = false;
    //e2.style.height = action1;
}

function makeLine(e1,e2,action1,action2){
    e1.style.transition = action1;
    e2.style.transition = action1;
    e1.style.transform = action2;
    e2.style.transform = action2;
}

function deSqueezeBurger(e1,e2,action1,action2,action3){
    e1.style.backgroundColor = action1;
    e2.style.height = action2;
    e2.style.transition = action3;

}

function closeMenu(e1,action1,action2,action3){
    e1.style.opacity = action1;
    e1.style.height = action2;
    e1.style.transition = action3;    
}

function closeMenuWidth(e1,action1,action2,action3){
    e1.style.opacity = action1;
    e1.style.width = action2;
    e1.style.transition = action3;    
}

function collapseMenu(e1,action1){
    e1.style.visibility = action1;
}

function collapseFunc(element, action) {
    if (action === "collapse") {
      element.style.visibility = "hidden";
    } else if (action === "visible") {
      element.style.visibility = "visible";
    }
  }

/*BURGER-BUTTON EVENTS*/
const burgerBtn = document.getElementById('burger');
const burgerCloseBtn = document.getElementById('close-burger');
const burgerMenu = document.getElementById('burger-menu');
const burgerCloseBtnSpan = document.getElementById('close-burger-id');

const lineOne = document.getElementById('line-one-close-id');
const lineTwo = document.getElementById('line-two-close-id');
const lineThree = document.getElementById('line-three-close-id');

const closeBurger = document.getElementById('close-burger');

burgerBtn.addEventListener('click', () => {
    burgerCloseBtn.disabled = true;
  
    lineOne.style.backgroundColor = 'black';
    lineTwo.style.backgroundColor = 'black';
    lineThree.style.backgroundColor = 'black';
  
    setTimeout(() => squeezeBurger(burgerCloseBtnSpan, '1px', 'height 0.5s linear'), 1000);
    setTimeout(() => makeX(lineOne, lineTwo, lineThree, 'transparent', 'rotate 0.5s', 'rotate(45deg)', 'rotate(-45deg)'), 2000);
    setTimeout(() => enableClose(burgerCloseBtn, burgerBtn, ''), 2500);
  
    burgerMenu.style.cssText = 'visibility: visible; opacity: 1; height: 100vh; transition: height 0.5s, opacity 0.5s linear;';
  });

burgerCloseBtn.addEventListener('click', function(){

    makeLine(lineOne, lineThree,'rotate 0.5s','rotate(0deg)');

    setTimeout(()=>deSqueezeBurger(lineTwo,burgerCloseBtnSpan,'black','100%','height 0.5s linear'),500);

    setTimeout(()=>closeMenu(burgerMenu,'0','0vh','height 0.5s opacity 0.5s linear'),1500);

    setTimeout(()=>collapseMenu(burgerMenu,'collapse'),2000);

});

/*SEARCH-BUTTON EVENTS*/
const searchBtn = document.getElementById('search-button-id');
const searchField = document.getElementById('search-field');

searchBtn.addEventListener('click', ()=>{
let input = searchField.value;
searchField.value = "";
});

searchField.addEventListener('keydown',(e)=>{
    if(e.keyCode == 13){
        let input = searchField.value;
        alert('you wrote' + ' ' + input)
        searchField.value = "";
    }
});

/*CART-BUTTON EVENTS*/
const cartBtn = document.getElementById('cart-button-id');
const cartCloseBtn = document.getElementById('cart-button-close-id');
const cartMenu = document.getElementById('cart-menu-id');

const lineOneCart = document.getElementById('line-one-cart-id');
const lineTwoCart = document.getElementById('line-two-cart-id');
const lineThreeCart = document.getElementById('line-three-cart-id');

if(!window.location.pathname.includes('verification')){
    if(!window.location.pathname.includes('confirmation')){
document.querySelector('.check-out').addEventListener('click',()=>{
    window.location.href = 'verification.html';
});
    }
}

if (!window.location.pathname.includes('verification')) {
    if (!window.location.pathname.includes('confirmation')) {


        cartBtn.addEventListener('click',function(){

            cartCloseBtn.disabled = 'true';

            setTimeout(() => squeezeBurger(cartCloseBtn, '1%', 'height 0.5s linear'), 1000);
            setTimeout(() => makeX(lineOneCart, lineTwoCart, lineThreeCart, 'transparent', 'rotate, 0.5s', 'rotate(45deg)', 'rotate(-45deg)'), 2000);
            setTimeout(() => enableClose(cartCloseBtn, cartCloseBtn, '1%'), 2500);
    
            Object.assign(cartMenu.style, {
                visibility: 'visible',
                opacity: '1',
                width: '100%',
                transition: 'width 0.5s, opacity .5s linear'
            });
            
            Object.assign(document.querySelector('.total-amount-cart').style,{
                visibility: 'visible',
                width: '20vw',
                opacity: '1',
                transition:'width 0.5s, opacity .5s linear'
            });
           

        makeCart();

        });

        cartCloseBtn.addEventListener('click',function(){
    
            makeLine(lineOneCart, lineThreeCart,'rotate 0.5s','rotate(0deg)');
            setTimeout(()=>{deSqueezeBurger(lineTwoCart,cartCloseBtn,'black','20%','height 0.5s linear');},500);
            setTimeout(()=>{closeMenuWidth(cartMenu,'0','0vw','height 0.5s opacity 0.5s linear');
            Object.assign(document.querySelector('.total-amount-cart').style,{
                width: '0vw',
                opacity: '0',
                transition:'width 0.5s, opacity .5s linear'
            });
            },1500);

            setTimeout(()=>{collapseMenu(cartMenu,'collapse');
            Object.assign(document.querySelector('.total-amount-cart').style,{
                visibility: 'collapse',
            });},2000);
    
        });
    }
}

/*TRANSITION TO PRODUCT PAGE*/
/*ADD API-ELEMENTS TO MENU*/
const sectionTwoProducts = document.getElementById('section-two-id')

/*FETCH FAKESTOREAPI ALL PRODUCTS*/

function fetchProducts(action){
    return products = fetch(action)
.then(res=>res.json())
.then(json=>{
return json;
}).catch(err => {
    alert('Error fetching object from api');
    console.log(err);
  })};


  /*FETCH FAKESTOREAPI CATEGORIES*/
  function fetchCategories() {
    return fetch('https://fakestoreapi.com/products/categories')
      .then(res => res.json())
      .then(json => {
        categories = json;
        return categories;
      })
      .catch(err => {
        alert('Error fetching object from api');
        console.log(err);
      });
  }

  fetchCategories()
  .then(categories => {
    makeMenu(categories);
  })
  .catch(err => {
    alert('Error fetching object from api');
    console.log(err);
  });

  window.addEventListener('load', () => {
    
    onPageLoad();
    const url = window.location.href;

    
    let sectionTwo = document.querySelector('.section-two');
    if (url.includes('products.html')) {

        let symbolIndex = url.indexOf("?");
        let result = url.substring(symbolIndex + 1);
            fetchProducts('https://fakestoreapi.com/products/category/'+result)
                    .then(products => {
                        addAndSetVisible(products);
                    })
                    .catch(err => {
                      alert('Error fetching object from api');
                      console.log(err);
                    });
        

    window.scrollTo({top: sectionTwo.offsetTop, behavior: 'smooth'});
    }
});

    function makeMenu(categories) {
        let categoryList = document.querySelector(".category-menu ul");
        for (let i = 0; i < categories.length; i++) {
          let product = categories[i];
          let listItem = categoryList.children.item(i);
          let li = document.createElement('li');
          li.textContent = product;
          
           
            li.addEventListener('click',()=>{


                let sectionTwo = document.querySelector('.section-two');
                if (window.location.pathname.includes('index.html'))  {
                    let innerText = li.innerText.toLowerCase();
                    
                    window.location.href = 'products.html'+'?'+innerText;

                }
                if (window.location.pathname.includes('products.html'))  {
                    let innerText = li.innerText.toLowerCase();
                    fetchProducts('https://fakestoreapi.com/products/category/'+innerText)
                    .then(products => {
                        addAndSetVisible(products);
                    })
                    .catch(err => {
                      alert('Error fetching object from api');
                      console.log(err);
                    });
                    window.scrollTo({top: sectionTwo.offsetTop, behavior: 'smooth'});
                }
            });
            
            categoryList.appendChild(li)
        }     
        };



/*ADD SWIPER TO SECTION*/
const swiper = new Swiper('.swiper', {
        // Optional parameters
    loop: true,
          
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },
          
    // Navigation arrows
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },
});
  

/*MANIPULATE FETCHED PRODUCTS*/

const popUpCloseBtn = document.querySelector('.product-popup .burger-product-button span');
const popUpLineOne = document.getElementById('line-one-close-product-id');
const popUpLineTwo = document.getElementById('line-two-close-product-id');
const popUpLineThree = document.getElementById('line-three-close-product-id');

let popupBackground = document.querySelectorAll('.popup-background');
let popUpQuantityBtn = document.querySelector('.quantity-button');

const popUp = document.querySelector('.product-popup');
const productDiv = document.querySelector('.products-grid');

function makeCart(){
    document.querySelector('.total-amount-cart').innerHTML = '';
    let cartSum = JSON.parse(localStorage.getItem('cart'));
    let cart2 = localStorage.getItem('cart');
    
    document.querySelector('.total-amount-cart').textContent = 'Total: $'+getTotalAmount(cartSum).toFixed(2);;
   

    existingCart = document.querySelector('.top-container-cart');   
    existingCart.querySelectorAll(':not(template)').forEach(e => e.remove());

    let cart = localStorage.getItem('cart');
    let data = JSON.parse(cart);

    if(data!=null){
    data.forEach((e)=>{

    let template = document.querySelector('template');

    let clone = document.importNode(template.content, true);
    let itemDescription = clone.querySelector('.item-description');
    let thumbnail = clone.querySelector('.thumbnail');
    let text = clone.querySelector('.text');
    let thumbnailIMG = clone.querySelector('.thumbnail img');
    let textItem = clone.querySelector('.text p');
    let quantity = clone.querySelector('.quantity-item');
    let subQuantity = clone.querySelector('.subtract');
    let addQuantity = clone.querySelector('.add');
  
    let quantityInt = clone.querySelector('.quantity-int');
  
    let remove = clone.querySelector('.remove-item');
    let removeBtn = clone.querySelector('.remove-item button');
  
    let price = clone.querySelector('.price-item');
    let cartItem = clone.querySelector('.cart-item');

    textItem.textContent = e.name;
    quantityInt.textContent = e.quantity.toString();
    price.textContent = '$'+e.totalCost;


    thumbnail.appendChild(thumbnailIMG);
    text.appendChild(textItem);
  
  itemDescription.appendChild(thumbnail);
  itemDescription.appendChild(textItem);
  
  quantity.appendChild(subQuantity);
  quantity.appendChild(quantityInt);
  quantity.appendChild(addQuantity);
   
  cartItem.appendChild(itemDescription)
  cartItem.appendChild(quantity)
  cartItem.appendChild(remove)
  cartItem.appendChild(price)
  
  let topContainer = document.querySelector('.top-container-cart')
  topContainer.appendChild(cartItem)
//localStorage.removeItem('cart')

  removeBtn.addEventListener('click',(e)=>{
    
    let button = removeBtn.parentNode;
    let parent = button.parentNode;
    let index1 = Array.from(parent.parentNode.childNodes).indexOf(parent);
    let grandParent = parent.parentNode;

    const childToRemove = grandParent.childNodes[index1];
    childToRemove.remove();

    const items = JSON.parse(localStorage.getItem('cart')) || [];
    items.splice(index1-3, 1);
    localStorage.setItem('cart', JSON.stringify(items));
    
    let local = localStorage.getItem('cart');
    local.removeitem
    });

    quantity.addEventListener('click', event => {
        if (event.target.classList.contains('subtract')) {
        if(quantityInt.textContent == 1){
            return;
        }

        let change = parseInt(quantityInt.textContent) + (event.target.classList.contains('add') ? 1 : -1);
        quantityInt.textContent = change;


        const items = JSON.parse(localStorage.getItem('cart')) || [];
        const index = Array.from(event.target.closest('.cart-item').parentNode.children).indexOf(event.target.closest('.cart-item'));
        items[index - 1].quantity = change;
        items[index -1].totalCost = parseInt(items[index - 1].quantity)*parseFloat(items[index-1].unitPrice)
        localStorage.setItem('cart', JSON.stringify(items));

    } else if (event.target.classList.contains('add')) {

        let change = parseInt(quantityInt.textContent) + 1;
        quantityInt.textContent = change;

        const items = JSON.parse(localStorage.getItem('cart')) || [];
        const index = Array.from(event.target.closest('.cart-item').parentNode.children).indexOf(event.target.closest('.cart-item'));

        items[index - 1].quantity = change;
        items[index -1].totalCost = parseInt(items[index - 1].quantity)*parseFloat(items[index-1].unitPrice)
        localStorage.setItem('cart', JSON.stringify(items));  
    }
    makeCart();

    });

  });
}
}

/*ADD ALL PRODUCTS TO GRID*/
function addProductsToGrid(products){

        popUp.addEventListener('click', (e)=>{
            e.stopPropagation();
        });

    
    for(let i = 0; i< products.length; i++){

        let array = products[i];
        let div = document.createElement('div');
        let img = document.createElement('img');
        let description = document.createElement('p');
        let name = document.createElement('p');
        let price = document.createElement('p');
        let category = document.createElement('p');
        let id = document.createElement('p');
        let rating = document.createElement('p');
       

        img.src = array.image;

        description.textContent = array.description;
        description.setAttribute('attribute','product-description');

        name.textContent = array.title;
        name.setAttribute('attribute', 'product-name');

        price.textContent = array.price;
        price.setAttribute('attribute','product-price');

        category.textContent = array.category;
        category.setAttribute('attribute', 'product-category');

        id.textContent = array.id;
        id.setAttribute('attribute','product-id');

        rating.textContent = array.rating;
        rating.setAttribute('attribute', 'product-rating');

        div.appendChild(img);
        div.appendChild(description);
        div.appendChild(name);
        div.appendChild(price);
        div.appendChild(category);
        div.appendChild(id);
        div.appendChild(rating);

        div.addEventListener('click',()=>{

            products.forEach((element)=>{
                let img= element.image;
                let div = document.createElement('div');
                div.style.backgroundImage = `url(${img})`;
                let swiperSlide = document.querySelector('.bottom-container .swiper .swiper-wrapper');
                div.setAttribute('class','swiper-slide');

                swiperSlide.appendChild(div);
                
               });


        popupBackground[0].style.visibility = 'visible';
        popUpCloseBtn.disabled = 'true';

        setTimeout(() => squeezeBurger(popUpCloseBtn, '1px', 'height 0.5s linear'), 1000);

        setTimeout(() => makeX(popUpLineOne, popUpLineTwo, popUpLineThree, 'transparent', 'rotate, 0.5s', 'rotate(45deg)', 'rotate(-45deg)'), 2000);
        
        setTimeout(() => enableClose(popUpCloseBtn, popUpCloseBtn, ''), 2500);

    popUpCloseBtn.addEventListener('click',()=>{
        makeLine(popUpLineOne, popUpLineThree,'rotate 0.5s','rotate(0deg)');

        setTimeout(()=>{
            deSqueezeBurger(popUpLineTwo,popUpCloseBtn,'black','30%','height 0.5s linear');
        },500);
        
        setTimeout(()=>{
            let image= document.querySelector('.popup-background .product-popup .top-container .top-left-container');
            let text = document.querySelector('.popup-background .product-popup .top-container .top-right-container .top-container');
            let div = document.querySelector('.invicible-data-storage');
            div.innerHTML ='';
            image.innerHTML ='';
            text.innerHTML = '';
            popupBackground[0].style.visibility = 'collapse';
        },1500);;
    });
    popupBackground[0].addEventListener('click',()=>{
        setTimeout(()=>{
            popUpCloseBtn.click();
        },1500)

    });


    let img1 = div.getElementsByTagName('img');
    let imgContainer = document.querySelector('.popup-background .product-popup .top-container .top-left-container');
    let popUpImg = document.createElement('img');
    let textContainer = document.querySelector('.popup-background .product-popup .top-container .top-right-container .top-container');
    let storage = document.querySelector('.invicible-data-storage');

    let description = document.createElement('p');
    let name = document.createElement('p');
    let price = document.createElement('p');
    let id = document.createElement('p');
    let rating = document.createElement('p');
    let category = document.createElement('p');
    let priceOne = document.createElement('p');
    let nameOne = document.createElement('p');
   
    let imgSrc = document.createElement('p');
    imgSrc.textContent = img.src;
    imgSrc.setAttribute('attribute','product-image');


    let priceFromDiv = div.querySelector('[attribute="product-price"]');
    price.textContent = priceFromDiv.textContent;
    priceOne.textContent = price.textContent;
    price.setAttribute('attribute','product-price');
    priceOne.setAttribute('attribute','product-price');

    let nameFromDiv = div.querySelector('[attribute="product-name"]');
    name.textContent = nameFromDiv.textContent;
    nameOne.textContent = name.textContent;
    name.setAttribute('attribute','product-name');
    nameOne.setAttribute('attribute','product-name');

    let descriptionFromDiv = div.querySelector('[attribute="product-description"]');
    description.textContent = descriptionFromDiv.textContent;
    description.setAttribute('attribute','product-description');

    let idFromDiv = div.querySelector('[attribute="product-id"]');
    id.textContent = idFromDiv.textContent;
    id.setAttribute('attribute','product-id');

    let ratingFromDiv = div.querySelector('[attribute="product-rating"]');
    rating.textContent = ratingFromDiv.textContent;
    rating.setAttribute('attribute','product-rating');

    let categoryFromDiv = div.querySelector('[attribute="product-category"]');
    category.textContent = categoryFromDiv.textContent;
    category.setAttribute('attribute','product-category');

    storage.appendChild(description);
    storage.appendChild(nameOne);
    storage.appendChild(priceOne);
    storage.appendChild(id);
    storage.appendChild(rating);
    storage.appendChild(category);
    storage.appendChild(imgSrc);

    popUpImg.src = img1[0].src;
    imgContainer.appendChild(popUpImg);
    textContainer.appendChild(name);
    textContainer.appendChild(price)
        });

        productDiv.appendChild(div);
    }
    
    productDiv.style.visibility = 'collapse';
};
if(window.location.pathname.includes('products.html')){
let popUpBuyBtn = document.querySelector('.buy-product-button');

popUpBuyBtn.addEventListener('click',()=>{

    let isInCart = false;

    let div = document.querySelector('.invicible-data-storage');
    let priceFromDiv = div.querySelector('[attribute="product-price"]');
    let imagePath =div.querySelector('[attribute="product-image"]').textContent;
    let descritionFromDiv = div.querySelector('[attribute="product-name"]').textContent;
    let quantity = 1;
    
    let item = new Item(imagePath,descritionFromDiv , quantity, priceFromDiv.textContent); 

    let cart = JSON.parse(localStorage.getItem('cart'));
    let totalSum = getTotalAmount(cart);

    if(cart != null){
    cart.forEach(item => {
        if(item.name == descritionFromDiv){
            isInCart = true;
            item.quantity = item.quantity + 1;
            item.totalCost = parseInt(item.quantity)*parseFloat(item.unitPrice)
            localStorage.setItem('cart', JSON.stringify(cart));
            return;
        }
    });
}
else{
    localStorage.setItem('cart', JSON.stringify([item]));
}
if(!isInCart){
    cart = cart || [];
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
}
});

let checkOutBtn = document.querySelector('.quantity-button');

checkOutBtn.addEventListener('click', ()=>{
    let div = document.querySelector('.invicible-data-storage');
    localStorage.setItem('myContent', div.innerHTML);



    window.location.href = 'check-out.html';
});

}
/*MAKE DROP DOWN FILTER MENU*/
function addAndSetVisible(products){
    let productGrid = document.querySelector('.products-grid');
    $(".products-grid").empty();
    addProductsToGrid(products);
    productGrid.style.visibility = 'visible';
}


function makeDropDown(categories){
    let ulDropdownCategory = document.querySelector('.drop-down-list ul')

    categories.forEach(element =>{
        let li = document.createElement('li');
        li.innerText = element;
        let liUpper= li.innerText.toUpperCase();
        li.innerText = liUpper
        
        li.addEventListener('click', ()=>{
            let filterBtn = document.querySelector('.drop-down button');
            filterBtn.click();
            var xhr = new XMLHttpRequest();

            xhr.onload = function() {
                 if (xhr.status == 200) {
                    var response = xhr.responseText;
                    console.log(response)
                    document.getElementById('products-grid').innerHTML = response;
                console.log(response)
                }
            }
            let innerText = li.innerText.toLowerCase();
                if (window.location.pathname.includes('products.html'))  {
                    fetchProducts('https://fakestoreapi.com/products/category/'+innerText)
                    .then(products => {
                        addAndSetVisible(products);
                    })
                    .catch(err => {
                      alert('Error fetching object from api');
                      console.log(err);
                    });
                }
           
        })
        ulDropdownCategory.appendChild(li)
    })

    let queriedProducts = document.querySelector('.products-grid');
    queriedProducts.style.visibility = 'visible'
    let li = document.createElement('li');
    li.innerText = "SHOW ALL";
    li.addEventListener('click', ()=>{
        fetchProducts('https://fakestoreapi.com/products')
        .then(products => {
            addAndSetVisible(products)
        })
        .catch(err => {
          alert('Error fetching object from api');
          console.log(err);
        });
        let filterBtn = document.querySelector('.drop-down button');
            filterBtn.click();
    });
    ulDropdownCategory.appendChild(li);
};

if (window.location.pathname.includes('products.html'))  {
    fetchCategories()
    .then(categories => {
      makeDropDown(categories);
    })
    .catch(err => {
      alert('Error fetching object from api');
      console.log(err);
    });
}

/*GO TO LOG-IN PAGE*/
let signInBtn = document.getElementById('sign-in-button');
let signUpBtn = document.getElementById('sign-up-button');

const isUserMenu = document.getElementById('is-user-id');
const notUserMenu = document.getElementById('not-user-id');
const notUserWelcome = document.getElementById('not-user-welcome-id')
const notUserInfo = document.getElementById('not-user-info-id');

const signUpCloseBtn = document.getElementById('sign-in-close-button-id');

const lineOneSign = document.getElementById('line-one-sign-id');
const lineTwoSign = document.getElementById('line-two-sign-id');
const lineThreeSign = document.getElementById('line-three-sign-id');


const goToLoginBtn = document.getElementById('go-to-login');
const goToSignUpBtn = document.getElementById('go-to-signup');
const loginMenu = document.getElementById('login-menu-id');

/*GO TO LOGIN PAGE*/
goToLoginBtn.addEventListener('click', ()=>{

    burgerCloseBtn.click();
    notUserWelcome.style.width = '0';
    notUserWelcome.style.visibility = 'collapse';

    isUserMenu.style.width = '100%';
    isUserMenu.style.visibility = 'visible';

    notUserInfo.style.width = '0';
    notUserInfo.style.visibility = 'collapse';

    notUserMenu.style.width = '100%';
    notUserMenu.style.visibility = 'visible';

    loginMenu.style.visibility = 'visible';
    loginMenu.style.width = '80%';
    loginMenu.style.height = '75vh';
    loginMenu.style.opacity = '1';
    loginMenu.style.transition = 'height 0.5s, opacity .5s linear';
        signUpCloseBtn.disabled = 'true';

        setTimeout(()=>{
            squeezeBurger(signUpCloseBtn, '1px', 'height 0.5s linear')
        }, 1000);
        
        setTimeout(()=>{
            makeX(lineOneSign,lineTwoSign,lineThreeSign,'transparent','rotate, 0.5s','rotate(45deg)','rotate(-45deg)')
        }, 2000);
    
        setTimeout(()=>{
            enableClose(signUpCloseBtn, '1px')
        },2500);
    
});

/*GO TO SIGN-UP PAGE USING TRANSITION*/
goToSignUpBtn.addEventListener('click', ()=>{
    

    loginMenu.style.visibility = 'visible';
    loginMenu.style.width = '80%';
    loginMenu.style.height = '75vh';
    loginMenu.style.opacity = '1';
   // loginMenu.style.transition = 'height 0.5s opacity .5s linear';
   
    setTimeout(()=>{
    notUserWelcome.style.width = '100%';
    notUserWelcome.style.visibility = 'visible';

    isUserMenu.style.width = '0%';
    isUserMenu.style.visibility = 'collapse';

    notUserInfo.style.width = '100%';
    notUserInfo.style.visibility = 'visible';

    notUserMenu.style.width = '0%';
    notUserMenu.style.visibility = 'collapse';
   },2500)
   

        signUpCloseBtn.disabled = 'true';

        setTimeout(()=>{
            burgerCloseBtn.click();
            squeezeBurger(signUpCloseBtn, '1px', 'height 0.5s linear')
        }, 1000);
        
        setTimeout(()=>{
            makeX(lineOneSign,lineTwoSign,lineThreeSign,'transparent','rotate, 0.5s','rotate(45deg)','rotate(-45deg)')
        }, 2000);
    
        setTimeout(()=>{
            enableClose(signUpCloseBtn, '1px')
        },500);
    
});

/*SIGN IN/UP MENU ACTIONS*/
/*LOGIN FUNCTIONS*/
async function login() {
    let username = document.getElementById("form-username").value;
    let password = document.getElementById("form-password").value;
    let response = await fetch("https://fakestoreapi.com/users");
    let json = await response.json();
  
    let userFound = false;
    for (let user of json) {
      if (user.username === username && user.password === password) {
        userFound = true;
        break;
      }
    }
    if (userFound) {
      alert("You are successfully logged in");
      window.location.href = "index.html";
    } else {
      alert("Incorrect username or password, please try again");
    }
  }

  /* SIGN UP BUTTON*/
signUpBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    signUp();
});
/* SIGN IN BUTTON*/
signInBtn.addEventListener('click', (e)=>{
    e.preventDefault()
    login();

});




signUpCloseBtn.addEventListener('click',()=>{

    setTimeout(()=>{
        makeLine(lineOneSign, lineThreeSign,'rotate 0.5s','rotate(0deg)');
    },0) ;

    setTimeout(()=>{
        deSqueezeBurger(lineTwoSign,signUpCloseBtn,'black','100%','height 0.5s linear');
    },500);
   

    setTimeout(()=>{
        closeMenu(loginMenu,'0','0vh','height 0.5s opacity 0.5s linear');
    },1500);

    setTimeout(()=>{
        collapseMenu(loginMenu,'collapse');
    },2000);
});

function signUp(){

            //loginMenu.style.visibility ='visible';
            notUserMenu.style.width = '0%';
            notUserMenu.style.transition = 'width 0.5s'
        
            setTimeout(()=>{
                collapseFunc(notUserMenu,'collapse');
                isUserMenu.style.visibility = 'collapse';
            },500);
        
            function doAnimation(){
                isUserMenu.style.width = '0';
                
                notUserWelcome.style.visibility = 'visible';
                notUserWelcome.style.width = '100%';
                notUserWelcome.style.transition = 'width, 0.5s'
                notUserWelcome.style.zIndex = '2';
            }
            setTimeout(doAnimation,0);
        
            function getInfoScreen(){
                notUserInfo.style.visibility = 'visible';
                notUserInfo.style.width = '100%';
                notUserInfo.style.transition = 'width, 0.5s';
            }
            setTimeout(getInfoScreen, 1000);   
}

/*FILTER BUTTON ANIMATION*/
if (window.location.pathname.includes('products.html'))  {
let filterBtn = document.querySelector('.drop-down button');
let burgerSpan = document.querySelector('.burger-span');
let filterMenu = document.querySelector('.drop-down-list')

let lineOneFilter = document.getElementById('filter-line-one');
let lineTwoFilter = document.getElementById('filter-line-two');
let lineThreeFilter = document.getElementById('filter-line-three');



filterBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    var elementVisibility = window.getComputedStyle(filterMenu).visibility;

    if(elementVisibility == 'collapse'){

    filterBtn.disabled = 'true';

    setTimeout(()=>{
        squeezeBurger(burgerSpan, '1px', 'height 0.5s linear')
    }, 1000);
    
    setTimeout(()=>{
        makeX(lineOneFilter,lineTwoFilter,lineThreeFilter,'transparent','rotate, 0.5s','rotate(45deg)','rotate(-45deg)')
    }, 2000);

    setTimeout(()=>{
        enableClose(filterBtn, '1px')
        filterMenu.style.visibility = 'visible';
        filterMenu.style.opacity = '1';
        filterMenu.style.height = '60vh';
        filterMenu.style.transition = 'height 0.2s linear';
    },2500);
    }
    if(elementVisibility == 'visible'){
        setTimeout(()=>{
            makeLine(lineOneFilter, lineThreeFilter,'rotate 0.5s','rotate(0deg)');
        },0) ;
    
        setTimeout(()=>{
            deSqueezeBurger(lineTwoFilter,burgerSpan,'black','40%','height 0.5s linear');
        },500);
       
    
        setTimeout(()=>{
            closeMenu(filterMenu,'0','0vh','height 0.5s opacity 0.2s linear');
        },1500);
    
        setTimeout(()=>{
            collapseMenu(filterMenu,'collapse');
        },2000);
    }

});
}

if(window.location.pathname.includes('verification.html')){

    let items = JSON.parse(localStorage.getItem('cart'));
    
    items.forEach(element =>{

       let slide = document.createElement('div');
       slide.className = 'swiper-slide';

       let imageDiv = document.createElement('div');
       imageDiv.className = 'image-check-out';
       let img = document.createElement('img');

       let name = document.createElement('div');
       let nameP = document.createElement('p');
       name.className = 'name';

       let price = document.createElement('div');
       let priceP = document.createElement('p');
       price.className = 'price'; 


        img.src = element.imgPath;
        nameP.textContent = element.name;
        priceP.textContent = '$'+element.unitPrice;

        imageDiv.appendChild(img);
        name.appendChild(nameP);
        price.appendChild(priceP);
        slide.appendChild(imageDiv);
        slide.appendChild(name);
        slide.appendChild(price);

        document.querySelector('.confirm-product .swiper .swiper-wrapper').appendChild(slide)

    })
   
}
if(window.location.pathname.includes('verification.html')){
    let proceedBtn = document.querySelector('.confirm .proceed');
    let discardBtn = document.querySelector('.confirm .discard');

    discardBtn.addEventListener('click',()=>{
        window.location.href = 'index.html';
    });

    proceedBtn.addEventListener('click', ()=>{
        let currentWindow = document.querySelector('.confirm-product');
        let checkOutWindow = document.querySelector('.check-out-form');

        currentWindow.style.height = '0%';
        currentWindow.style.visibility = 'collapse';

        checkOutWindow.style.height = '100%';
        checkOutWindow.style.visibility = 'visible';
    })

}

if (window.location.pathname.includes('verification')) {

$(document).ready(function() {
    $(function() {
        $("#validate-form-check-out").submit(false);
        $("#fname-error-message-check-out").hide();
        $("email-error-message-check-out").hide();
        $("phone-error-message-check-out").hide();
        $("#address-error-message-check-out").hide();
        
         
    
        $("#form-first-name-check-out").focusout(function(){
            checkFirstname();
        });
        $("#form-email-check-out").focusout(function(){
            checkEmail();
        });
        $("#form-phone-check-out").focusout(function(){
            checkPhone();
        });
        $("#form-address-check").focusout(function(){
            checkAddress();
        });
      
        function checkFirstname() {
            let pattern =  /^[a-zA-ZåäöÅÄÖ]{2,50}$/;
            const firstname = $("#form-first-name-check-out").val();
            if(pattern.test(firstname) && firstname !== ''){
                $("#fname-error-message-check-out").hide();
                $("#form-first-name-check-out").css("border-bottom","2px solid #34F458");
                return true;
            } else {
                $("#fname-error-message-check-out").html("Should only contain between 2 - 50 characters");
                $("#fname-error-message-check-out").show();
                $("#form-first-name").css("border-bottom","2px solid #F90A0A");
                return false;
            }
        }
        function checkEmail() {
            let pattern = /^[\w-\.]{1,50}@\w+\.\w+$/;
            let email = $("#form-email-check-out").val();
            if(pattern.test(email) && email !== '') {
                $("#email-error-message-check-out").hide();
                $("#form-email-check-out").css("border-bottom","2px solid #34F458");
                return true;
            }else{
                $("#email-error-message-check-out").html("Email must contain @ and be less than 50 characters");
                $("#email-error-message-check-out").show();
                $("#form-email-check-out").css("border-bottom","2px solid #F90A0A");
                return false;
            }
        }
        function checkPhone() {
            let pattern = /^[\d\(\)-]+$/;;
            let phoneNumber = $("#form-phone-check-out").val();
            if(pattern.test(phoneNumber) ){
                $("#phone-error-message-check-out").hide();
                $("#form-phone-check-out").css("border-bottom","2px solid #34F458");
                return true;
            }else {
                $("#phone-error-message-check-out").html("Phone number can only contaion digits, hyphens and parentheses");
                $("#phone-error-message-check-out").show();
                $("#form-phone-check-out").css("border-bottom", "2px solid #F90A0A");
                return false;  
            }
        } 
        function checkAddress() {
            let pattern =/^[a-zA-ZåäöÅÄÖ0-9\s]{0,50} \d{3}-\d{2} [a-zA-ZåäöÅÄÖ0-9\s]{0,50}$/;
            const address = $("#form-address-check-out").val();
            if(pattern.test(address) && address !== ''){ 
                $("#address-error-message-check-out").hide();
                $("#form-address-check-out").css("border-bottom","2px solid #34F458");
                return true;
            }else {
                $("#address-error-message-check-out").html("Conform to Swedish standard (Street max 50char), zipcode 000-00, City max 50 char");
                $("#address-error-message-check-out").show();
                $("#form-phone-check-out").css("border-bottom", "2px solid #F90A0A");
                return false;  
            }
        }
        $("#send-btn").click(function() {
            if(checkFirstname() &&
            checkEmail() &&
            checkPhone()&&
            checkAddress()){
                swal({
                    title: "Order placed",
                    text: "Do you want to confirm the order?",
                    icon: "warning",
                    buttons: true,
                    dangerMode: true,
                  })
                  .then((willDelete) => {
                    if (willDelete) {
                      swal("Your order is sent to us! Thank you for shopping!", {
                        icon: "success",
                      }).then(() => {
                        //Produkt info / cart.

                        localStorage.setItem('firstname', $("#form-first-name-check-out").val());
                        localStorage.setItem('email', $("#form-email-check-out").val());
                        localStorage.setItem('phone', $("#form-phone-check-out").val());
                        localStorage.setItem('address', $("#form-address-check-out").val());

                        window.location.href = 'confirmation.html';
                      })
                    } else {
                      swal("Good! Let's continue shopping!");
                    }
                  });              
            }else {
                swal({
                    title: "Something went wrong",
                    text: "Fill in the form correctly",
                    icon: "error",
                    button: "ok",
                  });
            }
        });
    
    });
})
}
if(window.location.pathname.includes('confirmation')){

    let items = JSON.parse(localStorage.getItem('cart'));
    let products = document.querySelector('.container .product-info .checked-out-products .product')
    let storageName = localStorage.getItem('firstname');
    let storageEmail = localStorage.getItem('email');
    let storagePhone = localStorage.getItem('phone');
    let storageAddress = localStorage.getItem('address');

    var sum = 0;
    items.forEach(element=>{
        let product = document.createElement('div');
        let name = document.createElement('div');
        let price = document.createElement('div');
        let quantity = document.createElement('div');
        let totalAmount = document.createElement('div');
    
        product.className = 'product';
        name.className = 'name';
        price.className = 'price';
        quantity.className = 'quantity';
        totalAmount.className = 'total-amount';

        name.innerText = element.name;
        price.innerText = element.unitPrice;
        quantity.innerText = element.quantity;
        totalAmount.innerText = parseFloat(element.quantity) * parseFloat(element.unitPrice);

        product.appendChild(name);
        product.appendChild(price);
        product.appendChild(quantity);
        product.appendChild(totalAmount);

        sum += parseFloat(totalAmount.innerText);
        document.querySelector('.checked-out-products').appendChild(product)
    })
   

    let subTotal = document.querySelector(".total-cost p")
    subTotal.innerHTML = sum.toFixed(2)

    let date = document.querySelector('.container .top-container-two .date');

    let today = new Date();

    let day = today.getDate();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();

    let formattedDate = year + '-' + month.toString().padStart(2, '0') + '-' + day.toString().padStart(2, '0');
    date.innerText = formattedDate;

    let userName = document.querySelector('.user-info ul #user-info-name');
    let userEmail = document.querySelector('.user-info ul #user-info-email');
    let userPhone = document.querySelector('.user-info ul #user-info-phone');
    let userAddress = document.querySelector('.user-info ul #user-info-address');

    userName.innerHTML = 'Name: '+storageName;
    userEmail.innerHTML = 'Email: '+storageEmail;
    userPhone.innerHTML = 'Phone: '+storagePhone;
    userAddress.innerHTML = 'Address: '+storageAddress;
}
if(window.location.pathname.includes('confirmation')){
    let saveBtn = document.querySelector('.total-cost button');

    saveBtn.addEventListener('click',()=>{
        saveAsImage();
    });
}
    function saveAsImage() {
        const element = document.getElementById("container-save");
      
}
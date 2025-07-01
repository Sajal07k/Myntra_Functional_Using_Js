let bagItems; // store items
onLoad();
function onLoad() {
    let bagItemsString = localStorage.getItem('bagItems');
    bagItems = bagItemsString ? JSON.parse(bagItemsString) : [];
    displayItemsOnHomePage();
    displayBagIcon();
} 

function addToBag(itemId) {
    bagItems.push(itemId);
    localStorage.setItem('bagItems', JSON.stringify(bagItems));
    displayBagIcon();
}

function displayBagIcon() {
    let bagItemCountEle = document.querySelector(".bag-item-count");
    if(bagItems.length > 0) {
        bagItemCountEle.style.visibility = 'visible';
        bagItemCountEle.innerHTML = bagItems.length;
    } else {
        bagItemCountEle.style.visibility = 'hidden';
    }
}

function displayItemsOnHomePage() {
    let itemsContainer = document.querySelector(".items-container");
    if(!itemsContainer) {
        return;
    }
    let innerhtml = '';
    
    items.forEach(item => {
        innerhtml += `
        <div class="item-container">
            <img src="${item.image}">
            <div class="raiting">${item.rating.stars} ⭐ | ${item.rating.count}</div>
            <div class="company-name">${item.company}</div>
            <div class="item-name">${item.item_name}</div>
            <div class="pricing">
                <span class="current-price">Rs ${item.current_price}</span>
                <span class="original-price">Rs ${item.original_price}</span>
                <span class="discount">(${item.discount_percentage}% OFF)</span>
            </div>
            <button class="btn" onclick="addToBag(${item.id})">Add to Bag</button>
        </div>`
    });

    itemsContainer.innerHTML = innerhtml;
}

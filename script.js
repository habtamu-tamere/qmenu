// Language configurations
const languages = {
    en: {
        menuTitle: "Our Menu",
        categories: {
            all: "All",
            starters: "Starters",
            mains: "Main Dishes",
            desserts: "Desserts",
            drinks: "Drinks"
        },
        cart: {
            title: "Your Cart",
            total: "Total",
            checkout: "Proceed to Checkout",
            empty: "Your cart is empty"
        },
        buttons: {
            addToCart: "Add to Cart",
            quantity: "Quantity:"
        }
    },
    am: {
        menuTitle: "ምግብ ዝርዝራችን",
        categories: {
            all: "ሁሉም",
            starters: "መደርሻ",
            mains: "ዋና ምግቦች",
            desserts: "ምቁር ምግቦች",
            drinks: "መጠጥ"
        },
        cart: {
            title: "ጋሪ",
            total: "ጠቅላላ",
            checkout: "ወደ ክፍያ ቀጥል",
            empty: "ጋሪ ባዶ ነው"
        },
        buttons: {
            addToCart: "ወደ ጋሪ ጨምር",
            quantity: "ብዛት፡"
        }
    },
    zh: {
        menuTitle: "我们的菜单",
        categories: {
            all: "所有",
            starters: "前菜",
            mains: "主菜",
            desserts: "甜点",
            drinks: "饮料"
        },
        cart: {
            title: "您的购物车",
            total: "总计",
            checkout: "前往结账",
            empty: "您的购物车是空的"
        },
        buttons: {
            addToCart: "加入购物车",
            quantity: "数量："
        }
    }
};

let currentLanguage = 'en';
let direction = 'ltr';

// Shopping cart logic
let cart = [];

// Updated menu items with numeric prices
const menuItems = [
    {
        id: 1,
        category: "starters",
        price: 12.99,
        image: "https://placehold.co/300x200?text=Your+Menu",
        tags: ["vegetarian"],
        translations: {
            en: {
                title: "Caesar Salad",
                description: "Fresh romaine lettuce with parmesan cheese, croutons, and our signature Caesar dressing."
            },
            am: {
                title: "ሴሳር ሰላጣ",
                description: "በፓርሜሳን አይብ፣ ክሩቶን እና የሴሳር ልብስ የተለየ ሰላጣ።"
            },
            zh: {
                title: "凯撒沙拉",
                description: "新鲜罗马生菜配帕尔马干酪、面包丁和特制凯撒酱。"
            }
        }
    },
    {
        id: 2,
        category: "mains",
        price: 24.99,
        image: "https://placehold.co/300x200?text=Your+Menu",
        tags: ["gluten-free"],
        translations: {
            en: {
                title: "Grilled Salmon",
                description: "Fresh Atlantic salmon grilled to perfection, served with seasonal vegetables."
            },
            am: {
                title: "ሴሳር ሰላጣ",
                description: "በፓርሜሳን አይብ፣ ክሩቶን እና የሴሳር ልብስ የተለየ ሰላጣ።"
            },
            zh: {
                title: "凯撒沙拉",
                description: "新鲜罗马生菜配帕尔马干酪、面包丁和特制凯撒酱。"
            }
        }
    }, 
    {
        id: 3,
        category: "starters",
        price: 12.99,
        image: "https://placehold.co/300x200?text=Your+Menu",
        tags: ["vegetarian"],
        translations: {
            en: {
                title: "Caesar Salad",
                description: "Fresh romaine lettuce with parmesan cheese, croutons, and our signature Caesar dressing."
            },
            am: {
                title: "ሴሳር ሰላጣ",
                description: "በፓርሜሳን አይብ፣ ክሩቶን እና የሴሳር ልብስ የተለየ ሰላጣ።"
            },
            zh: {
                title: "凯撒沙拉",
                description: "新鲜罗马生菜配帕尔马干酪、面包丁和特制凯撒酱。"
            }
        }
    },
    {
        id: 4,
        category: "starters",
        price: 12.99,
        image: "https://placehold.co/300x200?text=Your+Menu",
        tags: ["vegetarian"],
        translations: {
            en: {
                title: "Caesar Salad",
                description: "Fresh romaine lettuce with parmesan cheese, croutons, and our signature Caesar dressing."
            },
            am: {
                title: "ሴሳር ሰላጣ",
                description: "በፓርሜሳን አይብ፣ ክሩቶን እና የሴሳር ልብስ የተለየ ሰላጣ።"
            },
            zh: {
                title: "凯撒沙拉",
                description: "新鲜罗马生菜配帕尔马干酪、面包丁和特制凯撒酱。"
            }
        }
    },
    {
        id: 5,
        category: "starters",
        price: 12.99,
        image: "https://placehold.co/300x200?text=Your+Menu",
        tags: ["vegetarian"],
        translations: {
            en: {
                title: "Caesar Salad",
                description: "Fresh romaine lettuce with parmesan cheese, croutons, and our signature Caesar dressing."
            },
            am: {
                title: "ሴሳር ሰላጣ",
                description: "በፓርሜሳን አይብ፣ ክሩቶን እና የሴሳር ልብስ የተለየ ሰላጣ።"
            },
            zh: {
                title: "凯撒沙拉",
                description: "新鲜罗马生菜配帕尔马干酪、面包丁和特制凯撒酱。"
            }
        }
    },
    {
        id: 6,
        category: "starters",
        price: 12.99,
        image: "https://placehold.co/300x200?text=Your+Menu",
        tags: ["vegetarian"],
        translations: {
            en: {
                title: "Caesar Salad",
                description: "Fresh romaine lettuce with parmesan cheese, croutons, and our signature Caesar dressing."
            },
            am: {
                title: "ሴሳር ሰላጣ",
                description: "በፓርሜሳን አይብ፣ ክሩቶን እና የሴሳር ልብስ የተለየ ሰላጣ።"
            },
            zh: {
                title: "凯撒沙拉",
                description: "新鲜罗马生菜配帕尔马干酪、面包丁和特制凯撒酱。"
            }
        }
    },
    // Add more items...
];

// Language change handler
function changeLanguage(lang) {
    currentLanguage = lang;
    direction = lang === 'ar' ? 'rtl' : 'ltr'; // Add RTL support if needed
    document.body.className = direction;
    updateAllTexts();
    initMenu();
    updateCartDisplay();
}

// Update all static texts
function updateAllTexts() {
    // Update header
    document.querySelector('header h1').textContent = languages[currentLanguage].menuTitle;

    // Update category buttons
    document.querySelectorAll('.category-btn').forEach(btn => {
        const category = btn.dataset.category;
        btn.textContent = languages[currentLanguage].categories[category];
    });

    // Update cart texts
    document.querySelector('#cartModal h2').textContent = languages[currentLanguage].cart.title;
    document.querySelector('.cart-total').textContent = 
        `${languages[currentLanguage].cart.total}: $`;
    document.querySelector('.checkout-btn').textContent = 
        languages[currentLanguage].cart.checkout;
}

// Modified initMenu function with translations
function initMenu() {
    const container = document.getElementById('menu-container');
    container.innerHTML = '';

    menuItems.forEach(item => {
        const translation = item.translations[currentLanguage];
        const itemElement = document.createElement('div');
        itemElement.className = 'menu-item';
        itemElement.innerHTML = `
            <img src="${item.image}" class="item-image" alt="${translation.title}">
            <div class="item-info">
                <h3 class="item-title">${translation.title}</h3>
                <p class="item-description">${translation.description}</p>
                <p class="item-price">$${item.price.toFixed(2)}</p>
                <div class="dietary-tags">
                    ${item.tags.map(tag => `<span class="tag ${tag}">${tag}</span>`).join('')}
                </div>
            </div>
        `;

        itemElement.addEventListener('click', () => openModal(item));
        container.appendChild(itemElement);
    });
}



// Category filtering
document.querySelectorAll('.category-btn').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.category-btn').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        const category = button.dataset.category;
        filterMenu(category);
    });
});

function filterMenu(category) {
    // Implement filtering logic here
}

  // Updated modal with quantity selector
  function openModal(item) {
    const translation = item.translations[currentLanguage];
    const modal = document.getElementById('itemModal');
    document.getElementById('modalImage').src = item.image;
    document.getElementById('modalTitle').textContent = translation.title;
    document.getElementById('modalDescription').textContent = translation.description;
    document.getElementById('modalPrice').textContent = `$${item.price.toFixed(2)}`;

    // Update modal controls
    const controls = document.createElement('div');
    controls.className = 'modal-controls';
    controls.innerHTML = `
        <div style="margin: 1rem 0; display: flex; gap: 1rem; align-items: center;">
            <label>${languages[currentLanguage].buttons.quantity}</label>
            <input type="number" id="itemQuantity" value="1" min="1" style="width: 60px; padding: 0.5rem;">
        </div>
        <button onclick="addToCart(${item.id})" 
                style="padding: 1rem; background-color: #333; color: white; border: none; cursor: pointer;">
            ${languages[currentLanguage].buttons.addToCart}
        </button>
    `;

    // Update tags
    document.getElementById('modalTags').innerHTML = 
        item.tags.map(tag => `<span class="tag ${tag}">${tag}</span>`).join('');

    const existingControls = document.querySelector('.modal-controls');
    if (existingControls) existingControls.remove();
    document.querySelector('.modal-content .item-info').appendChild(controls);
    modal.style.display = 'block';
}






document.getElementById('closeModal').addEventListener('click', () => {
    document.getElementById('itemModal').style.display = 'none';
});

// Cart functions
function addToCart(itemId) {
    const quantity = parseInt(document.getElementById('itemQuantity').value) || 1;
    const item = menuItems.find(i => i.id === itemId);
    
    const existingItem = cart.find(i => i.id === itemId);
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            ...item,
            quantity: quantity
        });
    }
    
    updateCartDisplay();
    document.getElementById('itemModal').style.display = 'none';
}

function updateCartDisplay() {
    // Update cart count
    document.getElementById('cartCount').textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    // Update cart items list
    const cartItems = document.getElementById('cartItems');
    cartItems.innerHTML = '';
    
    let total = 0;
    
    cart.forEach(item => {
        const translation = menuItems.find(m => m.id === item.id).translations[currentLanguage];
        total += item.price * item.quantity;
        
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="cart-item-info">
                <div class="cart-item-title">${translation.title}</div>
                <div class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</div>
            </div>
            <!-- rest of cart item code -->
        `;
        cartItems.appendChild(cartItem);
    });
                
    document.getElementById('cartTotal').textContent = total.toFixed(2);

    // Handle empty cart
    if (cart.length === 0) {
        cartItems.innerHTML = `<div class="empty-cart">${languages[currentLanguage].cart.empty}</div>`;
    }
}

function updateQuantity(itemId, change) {
    const item = cart.find(i => i.id === itemId);
    if (item) {
        item.quantity += change;
        if (item.quantity < 1) {
            cart = cart.filter(i => i.id !== itemId);
        }
        updateCartDisplay();
    }
}

function removeItem(itemId) {
    cart = cart.filter(i => i.id !== itemId);
    updateCartDisplay();
}

// Cart modal toggle
document.getElementById('cartIcon').addEventListener('click', () => {
    document.getElementById('cartModal').style.display = 'block';
});

window.onclick = function(event) {
    const modal = document.getElementById('itemModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

window.onclick = function(event) {
    const cartModal = document.getElementById('cartModal');
    if (event.target === cartModal) {
        cartModal.style.display = 'none';
    }
}


// Initialize the menu on load
initMenu();
// Initialize language on load
changeLanguage('en');

/* ============================================
   FoodOrder - Complete JavaScript Logic
   Cart, Auth, Navigation, Checkout
   ============================================ */

// ==========================================
// DATA - Menu Items, Restaurants, Promos
// ==========================================

const menuItems = [
  { id: 1, name: "Nasi Goreng Spesial", price: 25000, category: "nasi", restaurant: "Warung Mantap", rating: 4.8, time: "20 min", img: "", badge: "Best Seller" },
  { id: 2, name: "Ayam Geprek Sambal Matah", price: 28000, category: "makanan", restaurant: "Geprek House", rating: 4.7, time: "25 min", img: "", badge: "Populer" },
  { id: 3, name: "Mie Ayam Bakso Jumbo", price: 22000, category: "mie", restaurant: "Mie Express", rating: 4.6, time: "15 min", img: "", badge: "" },
  { id: 4, name: "Es Teh Manis Segar", price: 8000, category: "minuman", restaurant: "Segar Jaya", rating: 4.5, time: "5 min", img: "", badge: "" },
  { id: 5, name: "Pizza Margherita", price: 55000, category: "pizza", restaurant: "Pizza Corner", rating: 4.9, time: "30 min", img: "", badge: "Favorit" },
  { id: 6, name: "Kentang Goreng Crispy", price: 18000, category: "snack", restaurant: "Snack Attack", rating: 4.4, time: "10 min", img: "", badge: "" },
  { id: 7, name: "Cheesecake Blueberry", price: 35000, category: "dessert", restaurant: "Sweet Bakery", rating: 4.8, time: "15 min", img: "", badge: "New" },
  { id: 8, name: "Es Kopi Susu Gula Aren", price: 22000, category: "minuman", restaurant: "Kopi Nusantara", rating: 4.7, time: "8 min", img: "", badge: "Trending" },
  { id: 9, name: "Sate Ayam Madura", price: 30000, category: "makanan", restaurant: "Sate Pak Amin", rating: 4.9, time: "20 min", img: "", badge: "Best Seller" },
  { id: 10, name: "Rendang Padang", price: 35000, category: "makanan", restaurant: "RM Padang Sederhana", rating: 4.8, time: "25 min", img: "", badge: "" },
  { id: 11, name: "Nasi Uduk Komplit", price: 20000, category: "nasi", restaurant: "Warung Betawi", rating: 4.5, time: "15 min", img: "", badge: "" },
  { id: 12, name: "Mie Goreng Seafood", price: 28000, category: "mie", restaurant: "Mie Express", rating: 4.6, time: "20 min", img: "", badge: "" },
  { id: 13, name: "French Fries Truffle", price: 25000, category: "snack", restaurant: "Snack Attack", rating: 4.3, time: "10 min", img: "", badge: "" },
  { id: 14, name: "Chocolate Lava Cake", price: 32000, category: "dessert", restaurant: "Sweet Bakery", rating: 4.9, time: "15 min", img: "", badge: "Favorit" },
  { id: 15, name: "Jus Alpukat Premium", price: 18000, category: "minuman", restaurant: "Segar Jaya", rating: 4.6, time: "8 min", img: "", badge: "" },
  { id: 16, name: "Pizza Pepperoni Large", price: 75000, category: "pizza", restaurant: "Pizza Corner", rating: 4.8, time: "35 min", img: "", badge: "" },
  { id: 17, name: "Nasi Goreng Kambing", price: 32000, category: "nasi", restaurant: "Warung Mantap", rating: 4.7, time: "25 min", img: "", badge: "" },
  { id: 18, name: "Brownies Panggang", price: 28000, category: "dessert", restaurant: "Sweet Bakery", rating: 4.5, time: "10 min", img: "", badge: "" },
  { id: 19, name: "Bakso Urat Spesial", price: 25000, category: "makanan", restaurant: "Bakso Jawara", rating: 4.7, time: "15 min", img: "", badge: "Populer" },
  { id: 20, name: "Matcha Latte", price: 25000, category: "minuman", restaurant: "Kopi Nusantara", rating: 4.6, time: "8 min", img: "", badge: "" },
];

const restaurants = [
  { id: 1, name: "Warung Mantap", cuisine: "Nasi Goreng, Aneka Nasi", rating: 4.8, distance: "1.2 km", deliveryTime: "20-30 min", img: "", status: "Buka" },
  { id: 2, name: "Geprek House", cuisine: "Ayam Geprek, Crispy Chicken", rating: 4.7, distance: "2.5 km", deliveryTime: "25-35 min", img: "", status: "Buka" },
  { id: 3, name: "Pizza Corner", cuisine: "Pizza, Pasta, Italian", rating: 4.9, distance: "3.0 km", deliveryTime: "30-40 min", img: "", status: "Buka" },
  { id: 4, name: "Mie Express", cuisine: "Mie Ayam, Mie Goreng", rating: 4.6, distance: "0.8 km", deliveryTime: "15-25 min", img: "", status: "Buka" },
  { id: 5, name: "Sweet Bakery", cuisine: "Cake, Dessert, Pastry", rating: 4.8, distance: "4.2 km", deliveryTime: "20-30 min", img: "", status: "Buka" },
  { id: 6, name: "Kopi Nusantara", cuisine: "Kopi, Teh, Minuman", rating: 4.7, distance: "1.5 km", deliveryTime: "10-15 min", img: "", status: "Buka" },
  { id: 7, name: "RM Padang Sederhana", cuisine: "Masakan Padang", rating: 4.8, distance: "2.0 km", deliveryTime: "20-30 min", img: "", status: "Buka" },
  { id: 8, name: "Sate Pak Amin", cuisine: "Sate, Nasi Goreng", rating: 4.9, distance: "3.5 km", deliveryTime: "20-25 min", img: "", status: "Buka" },
  { id: 9, name: "Snack Attack", cuisine: "Snack, Kentang, Finger Food", rating: 4.4, distance: "1.8 km", deliveryTime: "10-15 min", img: "", status: "Buka" },
];

const promos = [
  { id: 1, title: "Diskon 50% Hari Pertama!", description: "Nikmati potongan harga 50% untuk pesanan pertamamu. Berlaku untuk semua menu.", discount: "50% OFF", code: "FIRSTORDER50" },
  { id: 2, title: "Gratis Ongkir Tanpa Minimum", description: "Pesan dari restoran mana saja tanpa biaya ongkir. Promo terbatas!", discount: "FREE ONGKIR", code: "FREEONGKIR" },
  { id: 3, title: "Beli 2 Gratis 1", description: "Beli 2 menu pilihan, gratis 1 minuman. Berlaku setiap weekend.", discount: "BUY 2 GET 1", code: "B2G1WEEKEND" },
  { id: 4, title: "Cashback 30% Pakai E-Wallet", description: "Bayar dengan OVO, Dana, atau GoPay dan dapatkan cashback hingga 30%.", discount: "30% CASHBACK", code: "EWALLET30" },
  { id: 5, title: "Diskon Makan Siang 25%", description: "Setiap hari pukul 11:00-14:00, dapatkan diskon 25% untuk semua makanan.", discount: "25% OFF", code: "LUNCH25" },
  { id: 6, title: "Spesial Weekend: Hemat 40%", description: "Promo khusus Sabtu & Minggu. Diskon hingga 40% untuk menu pilihan!", discount: "40% OFF", code: "WEEKEND40" },
];

// ==========================================
// STATE
// ==========================================

let cart = JSON.parse(localStorage.getItem('foodorder_cart')) || [];
let savedAddresses = JSON.parse(localStorage.getItem('foodorder_addresses')) || [];
let currentCategory = 'all';
let deliveryFee = 15000;
const serviceFee = 2000;

// ==========================================
// INITIALIZATION
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
  renderRecommended();
  renderRestaurantsHome();
  renderPromosHome();
  renderMenuPage();
  renderRestaurantPage();
  renderPromoPage();
  updateCartBadge();
  renderCartPage();
  renderSavedAddresses();
  initScrollEffects();
});

// ==========================================
// NAVIGATION (SPA)
// ==========================================

function navigateTo(page) {
  // Hide all pages
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));

  // Show target page
  const target = document.getElementById(`page-${page}`);
  if (target) {
    target.classList.add('active');
  }

  // Update nav links
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.classList.remove('active');
    if (a.dataset.page === page) a.classList.add('active');
  });

  // Close mobile menu
  closeMobileMenu();

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Update specific pages
  if (page === 'cart') renderCartPage();
  if (page === 'checkout') renderCheckoutPage();
}

// ==========================================
// MOBILE MENU
// ==========================================

function toggleMobileMenu() {
  const navLinks = document.getElementById('navLinks');
  const hamburger = document.getElementById('hamburger');
  navLinks.classList.toggle('mobile-open');
  hamburger.classList.toggle('active');
}

function closeMobileMenu() {
  const navLinks = document.getElementById('navLinks');
  const hamburger = document.getElementById('hamburger');
  navLinks.classList.remove('mobile-open');
  hamburger.classList.remove('active');
}

// ==========================================
// SCROLL EFFECTS
// ==========================================

function initScrollEffects() {
  const navbar = document.getElementById('navbar');
  const backToTop = document.getElementById('backToTop');

  window.addEventListener('scroll', () => {
    // Navbar scroll effect
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Back to top button
    if (window.scrollY > 400) {
      backToTop.classList.add('show');
    } else {
      backToTop.classList.remove('show');
    }
  });
}

// ==========================================
// SEARCH
// ==========================================

function handleSearch(event) {
  if (event.key === 'Enter') {
    const query = document.getElementById('searchInput').value.trim().toLowerCase();
    if (!query) return;

    navigateTo('menu');

    // Filter and render
    const filtered = menuItems.filter(item =>
      item.name.toLowerCase().includes(query) ||
      item.restaurant.toLowerCase().includes(query) ||
      item.category.toLowerCase().includes(query)
    );

    renderFoodGrid('menuGrid', filtered);
    showToast(`Ditemukan ${filtered.length} hasil untuk "${query}"`);
  }
}

// ==========================================
// RENDER FUNCTIONS
// ==========================================

function createFoodCard(item) {
  const imgContent = item.img
    ? `<img src="${item.img}" alt="${item.name}">`
    : `<i class="fas fa-image img-placeholder"></i>`;

  const badgeHTML = item.badge
    ? `<span class="food-card-badge">${item.badge}</span>`
    : '';

  return `
    <div class="food-card">
      <div class="food-card-img">
        ${imgContent}
        ${badgeHTML}
      </div>
      <div class="food-card-body">
        <div class="food-restaurant">${item.restaurant}</div>
        <h3>${item.name}</h3>
        <div class="food-card-meta">
          <span class="rating"><i class="fas fa-star"></i> ${item.rating}</span>
          <span><i class="fas fa-clock"></i> ${item.time}</span>
        </div>
        <div class="food-card-footer">
          <span class="price">Rp ${item.price.toLocaleString('id-ID')}</span>
          <button class="add-cart-btn" onclick="addToCart(${item.id})" title="Tambah ke Keranjang">
            <i class="fas fa-plus"></i>
          </button>
        </div>
      </div>
    </div>
  `;
}

function renderFoodGrid(containerId, items) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = items.map(createFoodCard).join('');
}

function renderRecommended() {
  const recommended = menuItems.filter(item => item.badge).slice(0, 8);
  renderFoodGrid('recommendedGrid', recommended);
}

function renderMenuPage() {
  renderFoodGrid('menuGrid', menuItems);
}

function createRestaurantCard(restaurant) {
  const imgContent = restaurant.img
    ? `<img src="${restaurant.img}" alt="${restaurant.name}">`
    : `<i class="fas fa-store img-placeholder"></i>`;

  return `
    <div class="restaurant-card">
      <div class="restaurant-card-img">
        ${imgContent}
        <span class="restaurant-card-status">${restaurant.status}</span>
      </div>
      <div class="restaurant-card-body">
        <h3>${restaurant.name}</h3>
        <div class="restaurant-cuisine">${restaurant.cuisine}</div>
        <div class="restaurant-card-info">
          <span class="rating"><i class="fas fa-star"></i> ${restaurant.rating}</span>
          <span><i class="fas fa-map-marker-alt"></i> ${restaurant.distance}</span>
          <span><i class="fas fa-clock"></i> ${restaurant.deliveryTime}</span>
        </div>
      </div>
    </div>
  `;
}

function renderRestaurantsHome() {
  const container = document.getElementById('restaurantHomeGrid');
  if (!container) return;
  container.innerHTML = restaurants.slice(0, 4).map(createRestaurantCard).join('');
}

function renderRestaurantPage() {
  const container = document.getElementById('restaurantGrid');
  if (!container) return;
  container.innerHTML = restaurants.map(createRestaurantCard).join('');
}

function createPromoCard(promo) {
  return `
    <div class="promo-card">
      <span class="promo-discount">${promo.discount}</span>
      <h3>${promo.title}</h3>
      <p>${promo.description}</p>
      <div class="promo-code">
        <i class="fas fa-ticket-alt"></i>
        ${promo.code}
      </div>
    </div>
  `;
}

function renderPromosHome() {
  const container = document.getElementById('promoHomeGrid');
  if (!container) return;
  container.innerHTML = promos.slice(0, 3).map(createPromoCard).join('');
}

function renderPromoPage() {
  const container = document.getElementById('promoGrid');
  if (!container) return;
  container.innerHTML = promos.map(createPromoCard).join('');
}

// ==========================================
// CATEGORY FILTER
// ==========================================

function filterMenu(category) {
  currentCategory = category;

  // Update active state on both category grids
  document.querySelectorAll('.category-card').forEach(card => {
    card.classList.remove('active');
    if (card.dataset.category === category) card.classList.add('active');
  });

  const filtered = category === 'all'
    ? menuItems
    : menuItems.filter(item => item.category === category);

  renderFoodGrid('recommendedGrid', filtered.filter(i => i.badge).length > 0 ? filtered.filter(i => i.badge) : filtered.slice(0, 4));
  renderFoodGrid('menuGrid', filtered);
}

// ==========================================
// CART SYSTEM
// ==========================================

function addToCart(itemId) {
  const item = menuItems.find(i => i.id === itemId);
  if (!item) return;

  const existingIndex = cart.findIndex(c => c.id === itemId);

  if (existingIndex !== -1) {
    cart[existingIndex].qty += 1;
  } else {
    cart.push({ ...item, qty: 1 });
  }

  saveCart();
  updateCartBadge();
  showToast(`${item.name} ditambahkan ke keranjang!`);
}

function removeFromCart(itemId) {
  cart = cart.filter(c => c.id !== itemId);
  saveCart();
  updateCartBadge();
  renderCartPage();
}

function updateQty(itemId, change) {
  const item = cart.find(c => c.id === itemId);
  if (!item) return;

  item.qty += change;
  if (item.qty <= 0) {
    removeFromCart(itemId);
    return;
  }

  saveCart();
  updateCartBadge();
  renderCartPage();
}

function clearCart() {
  cart = [];
  saveCart();
  updateCartBadge();
  renderCartPage();
  showToast('Keranjang telah dikosongkan');
}

function saveCart() {
  localStorage.setItem('foodorder_cart', JSON.stringify(cart));
}

function updateCartBadge() {
  const badge = document.getElementById('cartBadge');
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  badge.textContent = totalItems;
  badge.style.display = totalItems > 0 ? 'flex' : 'none';
}

function getCartSubtotal() {
  return cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
}

function renderCartPage() {
  const itemsList = document.getElementById('cartItemsList');
  const cartEmpty = document.getElementById('cartEmpty');
  const cartLayout = document.getElementById('cartLayout');
  const clearBtn = document.getElementById('clearCartBtn');

  if (!itemsList) return;

  if (cart.length === 0) {
    cartLayout.style.display = 'none';
    cartEmpty.style.display = 'block';
    clearBtn.style.display = 'none';
    return;
  }

  cartLayout.style.display = 'grid';
  cartEmpty.style.display = 'none';
  clearBtn.style.display = 'inline-flex';

  itemsList.innerHTML = cart.map(item => {
    const imgContent = item.img
      ? `<img src="${item.img}" alt="${item.name}">`
      : `<i class="fas fa-image img-placeholder"></i>`;

    return `
      <div class="cart-item">
        <div class="cart-item-img">${imgContent}</div>
        <div class="cart-item-details">
          <h4>${item.name}</h4>
          <div class="cart-item-restaurant">${item.restaurant}</div>
          <div class="cart-item-price">Rp ${(item.price * item.qty).toLocaleString('id-ID')}</div>
        </div>
        <div class="cart-item-actions">
          <button class="cart-item-remove" onclick="removeFromCart(${item.id})" title="Hapus">
            <i class="fas fa-trash-alt"></i>
          </button>
          <div class="qty-control">
            <button onclick="updateQty(${item.id}, -1)"><i class="fas fa-minus"></i></button>
            <span class="qty-value">${item.qty}</span>
            <button onclick="updateQty(${item.id}, 1)"><i class="fas fa-plus"></i></button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  // Update summary
  const subtotal = getCartSubtotal();
  const shipping = cart.length > 0 ? 15000 : 0;
  const service = cart.length > 0 ? serviceFee : 0;
  const total = subtotal + shipping + service;

  document.getElementById('cartSubtotal').textContent = `Rp ${subtotal.toLocaleString('id-ID')}`;
  document.getElementById('cartShipping').textContent = `Rp ${shipping.toLocaleString('id-ID')}`;
  document.getElementById('cartService').textContent = `Rp ${service.toLocaleString('id-ID')}`;
  document.getElementById('cartTotal').textContent = `Rp ${total.toLocaleString('id-ID')}`;
}

// ==========================================
// CHECKOUT SYSTEM
// ==========================================

function renderCheckoutPage() {
  // Render order items
  const container = document.getElementById('checkoutOrderItems');
  if (!container) return;

  container.innerHTML = cart.map(item => {
    const imgContent = item.img
      ? `<img src="${item.img}" alt="${item.name}" style="width:100%;height:100%;object-fit:cover;">`
      : `<i class="fas fa-image img-placeholder"></i>`;

    return `
      <div class="checkout-order-item">
        <div class="order-item-img">${imgContent}</div>
        <div class="order-item-info">
          <h4>${item.name}</h4>
          <span>${item.qty}x Rp ${item.price.toLocaleString('id-ID')}</span>
        </div>
        <div class="order-item-price">Rp ${(item.price * item.qty).toLocaleString('id-ID')}</div>
      </div>
    `;
  }).join('');

  // Render address
  const addressContainer = document.getElementById('checkoutAddress');
  if (savedAddresses.length > 0) {
    const addr = savedAddresses[savedAddresses.length - 1];
    addressContainer.innerHTML = `
      <div style="color: var(--text); font-size: 0.92rem;">
        <strong>${addr.name}</strong> · ${addr.phone}<br>
        <span style="color: var(--text-muted);">${addr.address}, ${addr.city} ${addr.postalCode || ''}</span>
      </div>
    `;
  }

  // Update totals
  updateCheckoutTotals();
}

function updateCheckoutTotals() {
  const subtotal = getCartSubtotal();
  const total = subtotal + deliveryFee + serviceFee;

  document.getElementById('checkoutSubtotal').textContent = `Rp ${subtotal.toLocaleString('id-ID')}`;
  document.getElementById('checkoutShipping').textContent = `Rp ${deliveryFee.toLocaleString('id-ID')}`;
  document.getElementById('checkoutService').textContent = `Rp ${serviceFee.toLocaleString('id-ID')}`;
  document.getElementById('checkoutTotal').textContent = `Rp ${total.toLocaleString('id-ID')}`;
}

function selectDelivery(element, fee) {
  deliveryFee = fee;
  document.querySelectorAll('.delivery-option').forEach(opt => opt.classList.remove('selected'));
  element.classList.add('selected');
  element.querySelector('input[type="radio"]').checked = true;
  updateCheckoutTotals();
}

function selectPayment(element) {
  document.querySelectorAll('.payment-method').forEach(m => m.classList.remove('selected'));
  element.classList.add('selected');
  element.querySelector('input[type="radio"]').checked = true;
}

function placeOrder() {
  if (cart.length === 0) {
    showToast('Keranjang kosong! Tambahkan item terlebih dahulu.');
    return;
  }

  // Show success modal
  document.getElementById('orderSuccessModal').classList.add('show');

  // Clear cart
  cart = [];
  saveCart();
  updateCartBadge();
}

function closeModal() {
  document.getElementById('orderSuccessModal').classList.remove('show');
  navigateTo('home');
}

// ==========================================
// ADDRESS SYSTEM
// ==========================================

function handleAddressForm(event) {
  event.preventDefault();

  const address = {
    id: Date.now(),
    name: document.getElementById('recipientName').value,
    phone: document.getElementById('recipientPhone').value,
    label: document.getElementById('addressLabel').value || 'Rumah',
    address: document.getElementById('fullAddress').value,
    city: document.getElementById('city').value,
    postalCode: document.getElementById('postalCode').value,
    note: document.getElementById('addressNote').value,
  };

  savedAddresses.push(address);
  localStorage.setItem('foodorder_addresses', JSON.stringify(savedAddresses));

  renderSavedAddresses();
  showToast('Alamat berhasil disimpan!');

  // Reset form
  event.target.reset();

  // Navigate to checkout
  setTimeout(() => navigateTo('checkout'), 800);
}

function renderSavedAddresses() {
  const container = document.getElementById('savedAddresses');
  const list = document.getElementById('addressesList');

  if (!container || !list) return;

  if (savedAddresses.length === 0) {
    container.style.display = 'none';
    return;
  }

  container.style.display = 'block';
  list.innerHTML = savedAddresses.map((addr, index) => `
    <div class="address-item ${index === savedAddresses.length - 1 ? 'selected' : ''}" onclick="selectAddress(${index})">
      <div class="address-radio"></div>
      <div class="address-item-info">
        <strong>${addr.label} - ${addr.name}</strong>
        <span>${addr.address}, ${addr.city} ${addr.postalCode || ''}<br>${addr.phone}</span>
      </div>
    </div>
  `).join('');
}

function selectAddress(index) {
  document.querySelectorAll('.address-item').forEach((item, i) => {
    item.classList.toggle('selected', i === index);
  });
}

// ==========================================
// AUTH SYSTEM
// ==========================================

function switchAuthTab(tab) {
  // Update tabs
  document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.auth-form').forEach(f => f.classList.remove('active'));

  if (tab === 'login') {
    document.querySelectorAll('.auth-tab')[0].classList.add('active');
    document.getElementById('loginForm').classList.add('active');
  } else {
    document.querySelectorAll('.auth-tab')[1].classList.add('active');
    document.getElementById('registerForm').classList.add('active');
  }
}

function handleLogin(event) {
  event.preventDefault();
  let valid = true;

  const email = document.getElementById('loginEmail');
  const password = document.getElementById('loginPassword');

  // Validate email
  if (!email.value || !email.value.includes('@')) {
    email.classList.add('error');
    document.getElementById('loginEmailError').classList.add('show');
    valid = false;
  } else {
    email.classList.remove('error');
    document.getElementById('loginEmailError').classList.remove('show');
  }

  // Validate password
  if (!password.value || password.value.length < 6) {
    password.classList.add('error');
    document.getElementById('loginPasswordError').classList.add('show');
    valid = false;
  } else {
    password.classList.remove('error');
    document.getElementById('loginPasswordError').classList.remove('show');
  }

  if (valid) {
    showToast('Login berhasil! Selamat datang kembali.');
    setTimeout(() => navigateTo('home'), 1000);
  }
}

function handleRegister(event) {
  event.preventDefault();
  let valid = true;

  const name = document.getElementById('registerName');
  const email = document.getElementById('registerEmail');
  const phone = document.getElementById('registerPhone');
  const password = document.getElementById('registerPassword');

  // Validate name
  if (!name.value.trim()) {
    name.classList.add('error');
    document.getElementById('registerNameError').classList.add('show');
    valid = false;
  } else {
    name.classList.remove('error');
    document.getElementById('registerNameError').classList.remove('show');
  }

  // Validate email
  if (!email.value || !email.value.includes('@')) {
    email.classList.add('error');
    document.getElementById('registerEmailError').classList.add('show');
    valid = false;
  } else {
    email.classList.remove('error');
    document.getElementById('registerEmailError').classList.remove('show');
  }

  // Validate phone
  if (!phone.value || phone.value.length < 10) {
    phone.classList.add('error');
    document.getElementById('registerPhoneError').classList.add('show');
    valid = false;
  } else {
    phone.classList.remove('error');
    document.getElementById('registerPhoneError').classList.remove('show');
  }

  // Validate password
  if (!password.value || password.value.length < 6) {
    password.classList.add('error');
    document.getElementById('registerPasswordError').classList.add('show');
    valid = false;
  } else {
    password.classList.remove('error');
    document.getElementById('registerPasswordError').classList.remove('show');
  }

  if (valid) {
    showToast('Pendaftaran berhasil! Silakan login.');
    switchAuthTab('login');
  }
}

// ==========================================
// CONTACT FORM
// ==========================================

function handleContactForm(event) {
  event.preventDefault();
  showToast('Pesan berhasil dikirim! Kami akan segera merespons.');
  event.target.reset();
}

// ==========================================
// TOAST NOTIFICATION
// ==========================================

let toastTimeout;

function showToast(message) {
  const toast = document.getElementById('toast');
  const msg = document.getElementById('toastMessage');

  msg.textContent = message;
  toast.classList.add('show');

  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

// Animasi hover Warpper 
const wrapper = document.querySelector('.hero-image-wrapper');

wrapper.addEventListener('mousemove', (e) => {
  const rect = wrapper.getBoundingClientRect();
  const x = e.clientX - rect.left - rect.width / 2;
  const y = e.clientY - rect.top - rect.height / 2;

  const tiltX = -(y / rect.height) * 20; // max 20deg
  const tiltY =  (x / rect.width)  * 20;

  wrapper.style.transform = `
    perspective(600px)
    rotateX(${tiltX}deg)
    rotateY(${tiltY}deg)
    scale(1.07)
  `;
  wrapper.style.boxShadow = `
    ${-tiltY}px ${tiltX}px 80px rgba(37, 99, 235, 0.6),
    0 0 40px rgba(37, 99, 235, 0.4)
  `;
});

wrapper.addEventListener('mouseleave', () => {
  wrapper.style.transform = '';
  wrapper.style.boxShadow = '';
});

// ==========================================
// CLOSE MODAL ON OVERLAY CLICK
// ==========================================

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal-overlay')) {
    closeModal();
  }
});

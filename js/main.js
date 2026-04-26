const products = [
  {
    id: 1,
    name: "Vintage Wooden Arch Wall Shelf",
    short: "Boho scalloped wall shelf — zero clutter, maximum character.",
    desc: "Transform any blank wall into a statement. This hand-finished wooden arch shelf brings mid-century boho vibes with its scalloped silhouette — perfect for plants, candles, or your favorite trinkets. Mounts in minutes. Looks like it took years to find.",
    details: [
      "Material: solid natural wood with a smooth matte finish",
      "Dimensions: approx. 40cm wide × 25cm tall",
      "Wall mounting hardware included",
      "Works great with small plants, candles, crystals or books",
      "Fits any room — living room, bedroom, hallway, bathroom"
    ],
    category: "Home Decor",
    price: 20.00,
    emoji: "🪵",
    tag: "Best Seller",
    images: ["images/p1-1.jpg","images/p1-2.jpg","images/p1-3.jpg"]
  },
  {
    id: 2,
    name: "Modern Acrylic Rectangular Vase",
    short: "Clear acrylic vase with a sculptural frame-like structure.",
    desc: "Clean lines. Bold presence. This acrylic vase looks like a piece of art even when empty. Fill it with dried pampas, fresh stems, or just let it catch the light on your shelf. Makes the perfect gift — for literally anyone.",
    details: [
      "Material: high-clarity acrylic, lightweight and durable",
      "Dimensions: approx. 20cm tall × 8cm wide",
      "Waterproof — safe for fresh flowers and stems",
      "Looks stunning with dried pampas or eucalyptus",
      "Great gift for housewarmings, birthdays, Mother's Day"
    ],
    category: "Home Decor",
    price: 15.00,
    emoji: "🫙",
    tag: "New",
    images: ["images/p2-1.jpg","images/p2-2.jpg","images/p2-3.jpg"]
  },
  {
    id: 3,
    name: "Lifelike Artificial Potted Tree",
    short: "Three-branch faux tree — lush, full, zero maintenance.",
    desc: "All the green, none of the guilt. This high-fidelity artificial tree sits in a minimalist white pot and looks so real your guests will do a double take. No watering. No trimming. Just instant, effortless freshness in any room.",
    details: [
      "Set includes 1 pot with three-branch artificial tree",
      "Pot material: ceramic-finish white planter",
      "Height: approx. 30cm total",
      "UV-resistant foliage — won't fade over time",
      "Perfect for desks, shelves, windowsills, bathrooms"
    ],
    category: "Home Decor",
    price: 15.00,
    emoji: "🌳",
    images: ["images/p3-1.jpg","images/p3-2.jpg","images/p3-3.jpg"]
  },
  {
    id: 4,
    name: "Abstract Reader Statue Ornament",
    short: "Minimalist figurine — art for your shelf, soul for your space.",
    desc: "Small but mighty. This minimalist reader statue adds a quiet, thoughtful energy to any desk, bookshelf, or side table. Modern. Artistic. The kind of piece that makes people say 'where did you get that?'",
    details: [
      "Material: resin with a matte finish",
      "Height: approx. 12cm",
      "Lightweight and easy to move around",
      "Pairs well with books, plants, candles on a shelf",
      "Makes a thoughtful gift for readers and creatives"
    ],
    category: "Home Decor",
    price: 10.00,
    emoji: "📖",
    tag: "Popular",
    images: ["images/p4-1.jpg","images/p4-2.jpg","images/p4-3.jpg"]
  },
  {
    id: 5,
    name: "Upside-Down Wooden Incense Holder",
    short: "Zen aromatherapy with a twist — smoke flows downward.",
    desc: "Watch the smoke cascade like a tiny waterfall. This wooden incense holder with its upside-down design creates a mesmerizing visual as it fills your space with calm. Compatible with sandalwood and agarwood. Pure daily ritual material.",
    details: [
      "Material: natural wood with smooth carved finish",
      "Compatible with cone and stick incense",
      "Smoke flows downward — creates a waterfall effect",
      "Includes small ash catcher tray",
      "Dimensions: approx. 15cm tall"
    ],
    category: "Home Decor",
    price: 15.00,
    emoji: "🕯️",
    images: ["images/p5-1.jpg","images/p5-2.jpg","images/p5-3.jpg"]
  },
  {
    id: 6,
    name: "Ocean Grain Wood-Look Coasters (6pcs)",
    short: "Tropical faux wood coasters — protect your table in style.",
    desc: "Six coasters with a stunning ocean and tropical wood grain print. Practical enough for daily coffee, pretty enough to leave on display. A conversation starter at every gathering — and a thoughtful housewarming or Christmas gift.",
    details: [
      "Set of 6 coasters with tropical wood grain print",
      "Material: MDF with protective coating",
      "Diameter: approx. 10cm each",
      "Non-slip bottom, heat resistant",
      "Comes packaged — great as a gift"
    ],
    category: "Home Decor",
    price: 15.00,
    emoji: "🌊",
    images: ["images/p6-1.jpg","images/p6-2.jpg","images/p6-3.jpg"]
  },
  {
    id: 7,
    name: "Plum Blossom Bonsai Set (4pcs)",
    short: "Cherry & plum blossom bonsai — desk zen, zero effort.",
    desc: "Four delicate bonsai pots that bring the beauty of spring indoors — permanently. Realistic plum and cherry blossom design that looks stunning on a desk, shelf, or windowsill. Perfect for Valentine's Day, Mother's Day, or just because.",
    details: [
      "Set of 4 mini bonsai pots",
      "Mix of plum and cherry blossom designs",
      "Pot diameter: approx. 6cm each",
      "Silk flower construction — looks incredibly realistic",
      "No maintenance required — just place and enjoy"
    ],
    category: "Home Decor",
    price: 20.00,
    emoji: "🌸",
    tag: "Popular",
    images: ["images/p7-1.jpg","images/p7-2.jpg","images/p7-3.jpg"]
  },
  {
    id: 8,
    name: "Rustic Wood Stump Tealight Holders (Set of 3)",
    short: "Natural tree stump candle holders — handmade, warm, cozy.",
    desc: "Three handmade wooden stump tealight holders that bring an earthy, European cottage feel to any room. Light them at dinner, scatter them on the porch, or gift the set — the ambiance is instant and unforgettable.",
    details: [
      "Set of 3 wooden stump tealight holders",
      "Each piece is unique — natural wood grain variations",
      "Fits standard tealight candles",
      "Heights: approx. 6cm, 8cm, 10cm",
      "Suitable for indoor and outdoor use"
    ],
    category: "Home Decor",
    price: 20.00,
    emoji: "🌲",
    tag: "New",
    images: ["images/p8-1.jpg","images/p8-2.jpg","images/p8-3.jpg"]
  },
  {
    id: 9,
    name: "Van Gogh Style Acrylic Hourglass",
    short: "360° rotating art-deco hourglass — where art meets time.",
    desc: "Part timepiece, part art installation. This 2D flat oil painting hourglass in Van Gogh's swirling style rotates 360° and sits beautifully on any desk or shelf. A gift that's genuinely unlike anything else out there.",
    details: [
      "Material: acrylic stand with printed art panel",
      "360° rotating base",
      "Height: approx. 18cm",
      "Sand timer runs approx. 3 minutes",
      "Van Gogh Starry Night inspired design"
    ],
    category: "Home Decor",
    price: 15.00,
    emoji: "⏳",
    images: ["images/p9-1.jpg","images/p9-2.jpg","images/p9-3.jpg"]
  },
  {
    id: 10,
    name: "Stained Glass Swirl Coasters (6pcs)",
    short: "Colorful stained glass print coasters — bold and giftable.",
    desc: "Six wooden coasters with vibrant 2D stained glass swirl prints that look like tiny works of art. Perfect for your coffee table, home bar, or restaurant setup. Packaged beautifully — an easy win for Christmas or birthday gifts.",
    details: [
      "Set of 6 coasters with stained glass swirl print",
      "Material: natural wood with UV print",
      "Diameter: approx. 10cm each",
      "Cork backing — protects surfaces",
      "Comes in a gift-ready box"
    ],
    category: "Home Decor",
    price: 17.00,
    emoji: "🎨",
    images: ["images/p10-1.jpg","images/p10-2.jpg","images/p10-3.jpg"]
  }
];

const SHIPPING_COST = 6.00;
const FREE_SHIPPING_THRESHOLD = 50.00;

let cart = [];

function getShipping() {
  const subtotal = cart.reduce((s, c) => s + c.price * c.qty, 0);
  return subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_COST;
}

function getTotal() {
  const subtotal = cart.reduce((s, c) => s + c.price * c.qty, 0);
  return subtotal + getShipping();
}

function renderProducts(list) {
  const grid = document.getElementById('product-grid');
  if (!grid) return;
  const toRender = list || products;
  grid.innerHTML = toRender.map(p => `
    <div class="product-card" onclick="window.location.href='product.html?id=${p.id}'">
      <div class="product-img">${p.emoji}</div>
      <div class="product-body">
        ${p.tag ? `<span class="product-cat">${p.tag}</span>` : `<span class="product-cat">${p.category}</span>`}
        <div class="product-name">${p.name}</div>
        <div class="product-short">${p.short}</div>
        <div class="product-footer">
          <div>
            <span class="product-price">$${p.price.toFixed(2)}</span>
            <span class="product-ship">+ $${SHIPPING_COST} shipping</span>
          </div>
          <button class="add-to-cart" onclick="addToCart(event, ${p.id})">+</button>
        </div>
      </div>
    </div>
  `).join('');
}

function addToCart(e, id) {
  e.stopPropagation();
  const product = products.find(p => p.id === id);
  const existing = cart.find(c => c.id === id);
  if (existing) { existing.qty++; } else { cart.push({ ...product, qty: 1 }); }
  saveCart();
  updateCartBadge();
  showToast('Added to cart!');
}

function saveCart() {
  try { localStorage.setItem('ce_cart', JSON.stringify(cart)); } catch(e) {}
}

function loadCart() {
  try {
    const saved = localStorage.getItem('ce_cart');
    if (saved) cart = JSON.parse(saved);
  } catch(e) {}
}

function updateCartBadge() {
  const badge = document.getElementById('cart-badge');
  const total = cart.reduce((s, c) => s + c.qty, 0);
  if (badge) { badge.textContent = total; badge.style.display = total > 0 ? 'flex' : 'none'; }
}

function openCart() {
  renderCart();
  document.getElementById('cart-modal').style.display = 'flex';
}

function closeCart() { document.getElementById('cart-modal').style.display = 'none'; }

function renderCart() {
  const body = document.getElementById('cart-body');
  if (!body) return;
  if (cart.length === 0) {
    body.innerHTML = '<p style="text-align:center;color:#9E9383;padding:40px 0">Your cart is empty.</p>';
    updateCartTotals();
    return;
  }
  body.innerHTML = cart.map(c => `
    <div class="cart-item">
      <span style="font-size:28px">${c.emoji}</span>
      <div class="cart-item-info">
        <div class="cart-item-name">${c.name}</div>
        <div class="cart-item-price">$${c.price.toFixed(2)} each</div>
      </div>
      <div class="cart-item-controls">
        <button onclick="changeQty(${c.id},-1)">−</button>
        <span>${c.qty}</span>
        <button onclick="changeQty(${c.id},1)">+</button>
      </div>
    </div>
  `).join('');
  updateCartTotals();
}

function updateCartTotals() {
  const subtotal = cart.reduce((s, c) => s + c.price * c.qty, 0);
  const shipping = getShipping();
  const total = subtotal + shipping;
  const el = document.getElementById('cart-totals');
  if (!el) return;
  el.innerHTML = `
    <div class="cart-total-row"><span>Subtotal</span><span>$${subtotal.toFixed(2)}</span></div>
    <div class="cart-total-row">
      <span>Shipping</span>
      <span>${shipping === 0 ? '<span style="color:#5A6E3A;font-weight:500">Free!</span>' : '$' + shipping.toFixed(2)}</span>
    </div>
    ${subtotal > 0 && subtotal < FREE_SHIPPING_THRESHOLD ? `<div class="cart-free-ship">Add $${(FREE_SHIPPING_THRESHOLD - subtotal).toFixed(2)} more for free shipping!</div>` : ''}
    <div class="cart-total-row cart-grand-total"><span>Total</span><span>$${total.toFixed(2)}</span></div>
  `;
}

function changeQty(id, delta) {
  const item = cart.find(c => c.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) cart = cart.filter(c => c.id !== id);
  saveCart();
  updateCartBadge();
  renderCart();
}

function goToCheckout() {
  if (cart.length === 0) { showToast('Your cart is empty!'); return; }
  closeCart();
  const total = getTotal();
  document.getElementById('checkout-total').textContent = '$' + total.toFixed(2);
  document.getElementById('pay-total').textContent = '$' + total.toFixed(2);
  document.getElementById('checkout-modal').style.display = 'flex';
}

function closeCheckout() { document.getElementById('checkout-modal').style.display = 'none'; }

function selectPayment(btn, method) {
  document.querySelectorAll('.pay-method').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('card-section').style.display = method === 'card' ? 'block' : 'none';
}

function handleSubscribe(e) {
  e.preventDefault();
  showToast('Thanks! 10% discount is on its way to your inbox.');
  e.target.reset();
}

function showToast(msg) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2800);
}

document.addEventListener('DOMContentLoaded', () => {
  loadCart();
  renderProducts();
  updateCartBadge();
});

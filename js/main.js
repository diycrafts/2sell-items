const products = [
  {
    id: 1,
    name: "Vintage Wooden Arch Wall Shelf",
    short: "Boho scalloped wall shelf — zero clutter, maximum character.",
    desc: "Transform any blank wall into a statement. This hand-finished wooden arch shelf brings mid-century boho vibes with its scalloped silhouette — perfect for plants, candles, or your favorite trinkets. Mounts in minutes. Looks like it took years to find.",
    category: "Home Decor",
    price: 20.00,
    shipping: "free",
    emoji: "🪵",
    tag: "Best Seller"
  },
  {
    id: 2,
    name: "Modern Acrylic Rectangular Vase",
    short: "Clear acrylic vase with a sculptural frame-like structure.",
    desc: "Clean lines. Bold presence. This acrylic vase looks like a piece of art even when empty. Fill it with dried pampas, fresh stems, or just let it catch the light on your shelf. Makes the perfect gift — for literally anyone.",
    category: "Home Decor",
    price: 15.00,
    shipping: "free",
    emoji: "🫙",
    tag: "New"
  },
  {
    id: 3,
    name: "Lifelike Artificial Potted Tree",
    short: "Three-branch faux tree — lush, full, zero maintenance.",
    desc: "All the green, none of the guilt. This high-fidelity artificial tree sits in a minimalist white pot and looks so real your guests will do a double take. No watering. No trimming. Just instant, effortless freshness in any room.",
    category: "Home Decor",
    price: 15.00,
    shipping: "free",
    emoji: "🌳"
  },
  {
    id: 4,
    name: "Abstract Reader Statue Ornament",
    short: "Minimalist figurine — art for your shelf, soul for your space.",
    desc: "Small but mighty. This minimalist reader statue adds a quiet, thoughtful energy to any desk, bookshelf, or side table. Modern. Artistic. The kind of piece that makes people say 'where did you get that?'",
    category: "Home Decor",
    price: 10.00,
    shipping: "free",
    emoji: "📖",
    tag: "Popular"
  },
  {
    id: 5,
    name: "Upside-Down Wooden Incense Holder",
    short: "Zen aromatherapy with a twist — smoke flows downward.",
    desc: "Watch the smoke cascade like a tiny waterfall. This wooden incense holder with its upside-down design creates a mesmerizing visual as it fills your space with calm. Compatible with sandalwood and agarwood. Pure daily ritual material.",
    category: "Home Decor",
    price: 15.00,
    shipping: "free",
    emoji: "🕯️"
  },
  {
    id: 6,
    name: "Ocean Grain Wood-Look Coasters (6pcs)",
    short: "Tropical faux wood coasters — protect your table in style.",
    desc: "Six coasters with a stunning ocean and tropical wood grain print. Practical enough for daily coffee, pretty enough to leave on display. A conversation starter at every gathering — and a thoughtful housewarming or Christmas gift.",
    category: "Home Decor",
    price: 15.00,
    shipping: "free",
    emoji: "🌊"
  },
  {
    id: 7,
    name: "Plum Blossom Bonsai Set (4pcs)",
    short: "Cherry & plum blossom bonsai — desk zen, zero effort.",
    desc: "Four delicate bonsai pots that bring the beauty of spring indoors — permanently. Realistic plum and cherry blossom design that looks stunning on a desk, shelf, or windowsill. Perfect for Valentine's Day, Mother's Day, or just because.",
    category: "Home Decor",
    price: 20.00,
    shipping: "free",
    emoji: "🌸",
    tag: "Popular"
  },
  {
    id: 8,
    name: "Rustic Wood Stump Tealight Holders (Set of 3)",
    short: "Natural tree stump candle holders — handmade, warm, cozy.",
    desc: "Three handmade wooden stump tealight holders that bring an earthy, European cottage feel to any room. Light them at dinner, scatter them on the porch, or gift the set — the ambiance is instant and unforgettable.",
    category: "Home Decor",
    price: 20.00,
    shipping: "free",
    emoji: "🌲",
    tag: "New"
  },
  {
    id: 9,
    name: "Van Gogh Style Acrylic Hourglass",
    short: "360° rotating art-deco hourglass — where art meets time.",
    desc: "Part timepiece, part art installation. This 2D flat oil painting hourglass in Van Gogh's swirling style rotates 360° and sits beautifully on any desk or shelf. A gift that's genuinely unlike anything else out there.",
    category: "Home Decor",
    price: 15.00,
    shipping: "free",
    emoji: "⏳"
  },
  {
    id: 10,
    name: "Stained Glass Swirl Coasters (6pcs)",
    short: "Colorful stained glass print coasters — bold and giftable.",
    desc: "Six wooden coasters with vibrant 2D stained glass swirl prints that look like tiny works of art. Perfect for your coffee table, home bar, or restaurant setup. Packaged beautifully — an easy win for Christmas or birthday gifts.",
    category: "Home Decor",
    price: 17.00,
    shipping: "free",
    emoji: "🎨"
  }
];

let cart = [];

function renderProducts(list) {
  const grid = document.getElementById('product-grid');
  if (!grid) return;
  const toRender = list || products;
  grid.innerHTML = toRender.map(p => `
    <div class="product-card" onclick="openProduct(${p.id})">
      <div class="product-img">${p.emoji}</div>
      <div class="product-body">
        ${p.tag ? `<span class="product-cat">${p.tag}</span>` : `<span class="product-cat">${p.category}</span>`}
        <div class="product-name">${p.name}</div>
        <div class="product-short">${p.short}</div>
        <div class="product-footer">
          <div>
            <span class="product-price">$${p.price.toFixed(2)}</span>
            <span class="product-ship">${p.shipping === 'free' ? '✦ Free shipping' : '+ $' + p.shipping + ' shipping'}</span>
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
  updateCartBadge();
  showToast('Added to cart!');
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
    return;
  }
  const total = cart.reduce((s, c) => s + c.price * c.qty, 0);
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
  `).join('') + `
    <div style="display:flex;justify-content:space-between;font-weight:500;border-top:1px solid #E8DFC8;padding-top:14px;margin-top:8px;font-size:18px;">
      <span>Total</span><span>$${total.toFixed(2)}</span>
    </div>`;
}

function changeQty(id, delta) {
  const item = cart.find(c => c.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) cart = cart.filter(c => c.id !== id);
  updateCartBadge();
  renderCart();
}

function openProduct(id) {
  const p = products.find(x => x.id === id);
  if (!p) return;
  document.getElementById('pm-emoji').textContent = p.emoji;
  document.getElementById('pm-name').textContent = p.name;
  document.getElementById('pm-desc').textContent = p.desc;
  document.getElementById('pm-price').textContent = '$' + p.price.toFixed(2);
  document.getElementById('pm-ship').textContent = p.shipping === 'free' ? 'Free shipping' : '+ $' + p.shipping + ' shipping';
  document.getElementById('pm-add').onclick = () => { addToCart({ stopPropagation: () => {} }, p.id); closeProduct(); };
  document.getElementById('product-modal').style.display = 'flex';
}

function closeProduct() { document.getElementById('product-modal').style.display = 'none'; }

function goToCheckout() {
  if (cart.length === 0) { showToast('Your cart is empty!'); return; }
  closeCart();
  const total = cart.reduce((s, c) => s + c.price * c.qty, 0);
  document.getElementById('checkout-total').textContent = '$' + total.toFixed(2);
  document.getElementById('checkout-modal').style.display = 'flex';
}

function closeCheckout() { document.getElementById('checkout-modal').style.display = 'none'; }

function handleSubscribe(e) {
  e.preventDefault();
  showToast('Thanks! 10% discount is on its way to your inbox.');
  e.target.reset();
}

function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2800);
}

document.addEventListener('DOMContentLoaded', () => { renderProducts(); updateCartBadge(); });

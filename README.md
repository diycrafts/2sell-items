# CraftEarth 🪨🌿

A clean, rustic e-commerce site for DIY / concrete crafts and home decor products.

## Files

```
craftearth/
├── index.html        ← Homepage
├── category.html     ← Shop / category page
├── css/
│   └── style.css     ← All styles
├── js/
│   └── main.js       ← Product data + interactions
└── README.md
```

---

## Deploy pe GitHub + Netlify (pas cu pas)

### 1. Urci pe GitHub

1. Mergi pe [github.com](https://github.com) → **New repository**
2. Numeste-l `craftearth` → **Create repository**
3. Pe calculator, deschide un terminal în folderul `craftearth/` si rulează:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/USERNAME/craftearth.git
git push -u origin main
```

> Înlocuiește `USERNAME` cu username-ul tău GitHub.

---

### 2. Conectezi la Netlify

1. Mergi pe [netlify.com](https://netlify.com) → **Sign up** (gratuit, cu GitHub)
2. Click **Add new site** → **Import an existing project**
3. Alege **GitHub** → selectează repo-ul `craftearth`
4. Setări:
   - **Build command:** (lasă gol — e site static)
   - **Publish directory:** `.` (punct)
5. Click **Deploy site** ✅

Netlify îți dă automat un link de tipul `https://craftearth-xyz.netlify.app`.

---

### 3. Domeniu propriu (opțional)

În Netlify → **Domain settings** → **Add custom domain** → introduci domeniul tău (ex: `craftearth.com`).

---

## Cum adaugi produse reale

Deschide `js/main.js` și adaugă produse în array-ul `products`:

```js
{
  id: 9,
  name: "Numele produsului",
  category: "Concrete & Cement",  // sau altă categorie
  price: 29.99,
  emoji: "🪴",                    // înlocuiește cu poza ta când e gata
  tag: "New"                       // optional: "Best Seller", "New", "Popular"
}
```

---

## Categorii disponibile

- `Concrete & Cement`
- `Outdoor & Yard`
- `Home Decor`
- `DIY Tools`
- `Kits & Bundles`

---

## Pasul următor

Când ai comenzi și vrei să scalezi → conectăm un cos de cumpărături real (Snipcart sau Shopify Buy Button) fără să refacem tot site-ul.

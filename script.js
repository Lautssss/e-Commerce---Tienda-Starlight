/* ============================================================
   REGISTRO PRINCIPAL: Producto
   Clave: codigo_producto (String, único, identifica el producto/modelo)
   ============================================================ */
const productos = [
  {codigo_producto:"SW-0001", nombre:"Blaster DC-15A", categoria:"Blaster", faccion:"Imperio", precio_creditos:350.00, stock:15, descripcion:"Rifle blaster estándar de los soldados Clon de la República.", lado:"light", imagen_url:"https://static.wikia.nocookie.net/starwars/images/b/be/DC15A-FFp51.png/revision/latest?cb=20260227014803"},
  {codigo_producto:"SW-0002", nombre:"Blaster E-11", categoria:"Blaster", faccion:"Imperio", precio_creditos:280.50, stock:20, descripcion:"El arma característica de los Stormtroopers.", lado:"dark", imagen_url:"https://static.wikia.nocookie.net/starwars/images/3/3a/E-11_blaster_rifle_FF.png/revision/latest?cb=20260227011246"},
  {codigo_producto:"SW-0003", nombre:"Blaster E-5", categoria:"Blaster", faccion:"Ejército Droide", precio_creditos:300.00, stock:8, descripcion:"Usado por los droides de combate de la Federación de Comercio.", lado:"dark", imagen_url:"https://static.wikia.nocookie.net/starwars/images/d/d3/E-5_blaster_rifle_-_SW_Card_Trader.png/revision/latest?cb=20251108044458"},
  {codigo_producto:"SW-0004", nombre:"Blaster ELG-3A", categoria:"Blaster", faccion:"República", precio_creditos:400.00, stock:10, descripcion:"El blaster personal de la senadora Padmé Amidala.", lado:"light", imagen_url:"https://static.wikia.nocookie.net/starwars/images/0/08/AmidalaBlaster-EpITVD.png/revision/latest/scale-to-width-down/1000?cb=20241222002439"},
  {codigo_producto:"SW-0005", nombre:"Casco Stormtrooper", categoria:"Casco", faccion:"Imperio", precio_creditos:450.00, stock:12, descripcion:"Casco blanco de Stormtrooper.", lado:"dark", imagen_url:"https://static.wikia.nocookie.net/starwars/images/0/0d/Storm-CHRON.jpg/revision/latest?cb=20111205022230"},
  {codigo_producto:"SW-0006", nombre:"Casco de Clon", categoria:"Casco", faccion:"República", precio_creditos:480.00, stock:9, descripcion:"Casco Fase 2 utilizado por los soldados Clon de la República.", lado:"light", imagen_url:"https://static.wikia.nocookie.net/starwars/images/7/79/CodyHelmet-TCWCEJtB.png/revision/latest?cb=20230701184848"},
  {codigo_producto:"SW-0007", nombre:"Casco Mandaloriano", categoria:"Casco", faccion:"Cazarrecompensas", precio_creditos:1000.00, stock:5, descripcion:"Forjado en beskar, protección de élite.", lado:"dark", imagen_url:"https://static.wikia.nocookie.net/starwars/images/1/10/FettHelmet-SW2Indy.png/revision/latest?cb=20230827023045"},
  {codigo_producto:"SW-0008", nombre:"Casco Soldado Rebelde", categoria:"Casco", faccion:"Rebelión", precio_creditos:400.00, stock:14, descripcion:"Casco de la Flota de soldados de Alderaan de la Alianza Rebelde.", lado:"light", imagen_url:"https://static.wikia.nocookie.net/starwars/images/b/bf/AlderaanianFleetTrooperHelmet-SWBC38.png/revision/latest?cb=20250627010849"},
  {codigo_producto:"SW-0009", nombre:"Sable Láser (Rojo)", categoria:"Sable Láser", faccion:"Sith", precio_creditos:1200.00, stock:6, descripcion:"Cristal kyber corrompido. Caída al lado oscuro asegurada.", lado:"dark", imagen_url:"https://static.wikia.nocookie.net/starwars/images/d/df/Dueling_lightsabers.svg/revision/latest?cb=20100526152749"},
  {codigo_producto:"SW-0010", nombre:"Sable Láser (Azul)", categoria:"Sable Láser", faccion:"Jedi", precio_creditos:1200.00, stock:7, descripcion:"Justicia, lealtad, protección.", lado:"light", imagen_url:"https://static.wikia.nocookie.net/starwars/images/d/df/Dueling_lightsabers.svg/revision/latest?cb=20100526152749"},
  {codigo_producto:"SW-0011", nombre:"Sable Láser (Verde)", categoria:"Sable Láser", faccion:"Jedi", precio_creditos:1200.00, stock:4, descripcion:"Crecimiento, paz y armonía.", lado:"light", imagen_url:"https://static.wikia.nocookie.net/starwars/images/d/df/Dueling_lightsabers.svg/revision/latest?cb=20100526152749"},
  {codigo_producto:"SW-0012", nombre:"Sable Láser (Púrpura)", categoria:"Sable Láser", faccion:"Jedi", precio_creditos:1500.00, stock:2, descripcion:"Equilibrio, solo para los más fuertes..", lado:"light", imagen_url:"https://static.wikia.nocookie.net/starwars/images/d/df/Dueling_lightsabers.svg/revision/latest?cb=20100526152749"},
  {codigo_producto:"SW-0013", nombre:"Detonador Térmico", categoria:"Explosivo", faccion:"Imperio", precio_creditos:150.00, stock:25, descripcion:"Explosivo estándar.", lado:"dark", imagen_url:"https://static.wikia.nocookie.net/starwars/images/4/4e/ThermalDetonator-SW100Objects.png/revision/latest?cb=20230420000454"},
  {codigo_producto:"SW-0014", nombre:"Detonador Térmico", categoria:"Explosivo", faccion:"Rebelión", precio_creditos:150.00, stock:25, descripcion:"Explosivo estándar.", lado:"light", imagen_url:"https://static.wikia.nocookie.net/starwars/images/4/4e/ThermalDetonator-SW100Objects.png/revision/latest?cb=20230420000454"},
  {codigo_producto:"SW-0015", nombre:"Nave X-Wing", categoria:"Nave", faccion:"Rebelión", precio_creditos:15000.00, stock:2, descripcion:"Caza estelar T-66 X-Wing, ágil y letal.", lado:"light", imagen_url:"https://static.wikia.nocookie.net/starwars/images/8/87/X-wing_SWB.png/revision/latest/scale-to-width-down/1000?cb=20160704070054"},
  {codigo_producto:"SW-0016", nombre:"Caza Jedi", categoria:"Nave", faccion:"Jedi", precio_creditos:18000.00, stock:1, descripcion:"Nave de combate ligera utilizada por los Jedi. No incluye unidad astromecánica.", lado:"light", imagen_url:"https://static.wikia.nocookie.net/starwars/images/7/79/Jedi_Starfighter_EpII.png/revision/latest?cb=20251115031642"},
  {codigo_producto:"SW-0017", nombre:"Tie Fighter", categoria:"Nave", faccion:"Imperio", precio_creditos:14000.00, stock:3, descripcion:"Caza imperial veloz, sin escudos deflectores.", lado:"dark", imagen_url:"https://static.wikia.nocookie.net/starwars/images/b/b9/Tie_fighters.jpg/revision/latest?cb=20120301034041"},
  {codigo_producto:"SW-0018", nombre:"Tie Bomber", categoria:"Nave", faccion:"Imperio", precio_creditos:16000.00, stock:2, descripcion:"Bombardero pesado de la flota imperial.", lado:"dark", imagen_url:"https://static.wikia.nocookie.net/starwars/images/1/17/TIE_Bomber_BF2.png/revision/latest/scale-to-width-down/1000?cb=20230720014331"},
];

let currentSide = "dark";
let activeCategory = "Todos";
let cart = {}; // { codigo_producto: cantidad }

const selectScreen = document.getElementById('select-screen');
const app = document.getElementById('app');
const grid = document.getElementById('product-grid');
const filtersEl = document.getElementById('filters');
const titleText = document.getElementById('title-side-text');
const subText = document.getElementById('page-sub-text');
const toggleDark = document.getElementById('toggle-dark');
const toggleLight = document.getElementById('toggle-light');
const cartBtn = document.getElementById('cart-btn');
const cartCount = document.getElementById('cart-count');
const cartOverlay = document.getElementById('cart-overlay');
const cartDrawer = document.getElementById('cart-drawer');
const closeCart = document.getElementById('close-cart');
const cartItemsEl = document.getElementById('cart-items');
const cartTotalEl = document.getElementById('cart-total-amount');

function formatCredits(n){
  return "₡ " + n.toLocaleString('es-AR', {minimumFractionDigits:2, maximumFractionDigits:2});
}

function selectSide(side){
  currentSide = side;
  activeCategory = "Todos";
  selectScreen.classList.add('hidden');
  app.classList.add('active');
  document.body.classList.remove('mode-dark','mode-light');
  document.body.classList.add(side === 'dark' ? 'mode-dark' : 'mode-light');
  updateSideUI();
  renderFilters();
  renderGrid();
}

function updateSideUI(){
  toggleDark.classList.toggle('active', currentSide==='dark');
  toggleDark.classList.toggle('dark-active', currentSide==='dark');
  toggleLight.classList.toggle('active', currentSide==='light');
  toggleLight.classList.toggle('light-active', currentSide==='light');

  if(currentSide==='dark'){
    titleText.textContent = "Lado Oscuro";
    titleText.className = "dark-text";
    subText.textContent = "Equipamiento del Imperio, los Sith y los cazarrecompensas más temidos de la galaxia.";
  } else {
    titleText.textContent = "Lado Luminoso";
    titleText.className = "light-text";
    subText.textContent = "Equipamiento de los Jedi, la Rebelión y la República para defender la paz.";
  }
}

function getSideProducts(){
  return productos.filter(p => p.lado === currentSide);
}

function renderFilters(){
  const cats = ["Todos", ...new Set(getSideProducts().map(p=>p.categoria))];
  filtersEl.innerHTML = "";
  cats.forEach(cat=>{
    const chip = document.createElement('button');
    chip.className = "filter-chip" + (cat===activeCategory ? " active" : "");
    chip.textContent = cat;
    chip.onclick = () => { activeCategory = cat; renderFilters(); renderGrid(); };
    filtersEl.appendChild(chip);
  });
}

function renderGrid(){
  let list = getSideProducts();
  if(activeCategory !== "Todos"){
    list = list.filter(p => p.categoria === activeCategory);
  }
  grid.innerHTML = "";
  list.forEach(p=>{
    const card = document.createElement('div');
    card.className = "card";
    card.dataset.code = p.codigo_producto;
    const sinStock = p.stock <= 0;
    const enCarrito = cart[p.codigo_producto] || 0;
    const disponible = p.stock - enCarrito;
    card.innerHTML = `
      <div class="card-image">
        ${p.imagen_url
          ? `<img src="${p.imagen_url}" alt="${p.nombre}" onerror="this.parentElement.innerHTML='<div class=&quot;img-fallback&quot;>Imagen no disponible</div>'">`
          : `<div class="img-fallback">Imagen no disponible</div>`}
      </div>
      <div class="card-cat">${p.categoria}</div>
      <div class="card-name">${p.nombre}</div>
      <div class="card-faction">${p.faccion}</div>
      <div class="card-code">${p.codigo_producto}</div>
      <div class="card-footer">
        <div>
          <div class="card-price">${formatCredits(p.precio_creditos)}</div>
          <div class="card-stock">Stock: ${p.stock}${enCarrito > 0 ? ` · ${enCarrito} en carrito` : ""}</div>
        </div>
      </div>
      <button class="add-btn" ${sinStock || disponible <= 0 ? "disabled" : ""} data-code="${p.codigo_producto}">
        ${sinStock ? "Sin stock" : disponible <= 0 ? "Stock máximo en carrito" : "Agregar al carrito"}
      </button>
    `;
    grid.appendChild(card);
  });

  grid.querySelectorAll('.add-btn').forEach(btn=>{
    btn.addEventListener('click', (e)=>{
      e.stopPropagation();
      addToCart(btn.dataset.code);
    });
  });

  grid.querySelectorAll('.card').forEach(card=>{
    card.addEventListener('click', ()=>{
      openDetail(card.dataset.code);
    });
  });
}

function addToCart(codigo){
  const p = productos.find(prod => prod.codigo_producto === codigo);
  if(!p) return;
  const enCarrito = cart[codigo] || 0;
  if(enCarrito >= p.stock){
    return; // no se puede superar el stock disponible
  }
  cart[codigo] = enCarrito + 1;
  updateCartUI();
  renderGrid();
}

function changeQty(codigo, delta){
  if(!cart[codigo]) return;
  const p = productos.find(prod => prod.codigo_producto === codigo);
  if(delta > 0 && p && cart[codigo] >= p.stock){
    return; // tope de stock
  }
  cart[codigo] += delta;
  if(cart[codigo] <= 0) delete cart[codigo];
  updateCartUI();
  renderGrid();
}

function removeFromCart(codigo){
  delete cart[codigo];
  updateCartUI();
  renderGrid();
}

function updateCartUI(){
  const entries = Object.entries(cart);
  const totalItems = entries.reduce((sum,[,qty])=>sum+qty,0);
  cartCount.textContent = totalItems;

  if(entries.length === 0){
    cartItemsEl.innerHTML = `<div class="empty-cart">Tu carrito está vacío.<br>Explorá la galaxia y sumá productos.</div>`;
    cartTotalEl.textContent = formatCredits(0);
    return;
  }

  let total = 0;
  cartItemsEl.innerHTML = "";
  entries.forEach(([codigo, qty])=>{
    const p = productos.find(prod => prod.codigo_producto === codigo);
    if(!p) return;
    const subtotal = p.precio_creditos * qty;
    total += subtotal;
    const topeStock = qty >= p.stock;
    const item = document.createElement('div');
    item.className = "cart-item";
    item.innerHTML = `
      <div>
        <div class="cart-item-name">${p.nombre}</div>
        <div class="cart-item-meta">${p.faccion} · ${p.codigo_producto}</div>
        <div class="cart-item-qty">
          <button class="qty-btn" data-action="minus" data-code="${codigo}">−</button>
          <span>${qty}</span>
          <button class="qty-btn" data-action="plus" data-code="${codigo}" ${topeStock ? "disabled" : ""}>+</button>
        </div>
        ${topeStock ? `<div class="card-stock" style="margin-top:0.3rem;">Stock máximo alcanzado</div>` : ""}
      </div>
      <div style="text-align:right;">
        <div class="cart-item-price">${formatCredits(subtotal)}</div>
        <button class="remove-btn" data-code="${codigo}">Quitar</button>
      </div>
    `;
    cartItemsEl.appendChild(item);
  });

  cartTotalEl.textContent = formatCredits(total);

  cartItemsEl.querySelectorAll('.qty-btn').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const delta = btn.dataset.action === 'plus' ? 1 : -1;
      changeQty(btn.dataset.code, delta);
    });
  });
  cartItemsEl.querySelectorAll('.remove-btn').forEach(btn=>{
    btn.addEventListener('click', ()=> removeFromCart(btn.dataset.code));
  });
}

/* Event listeners */
document.querySelectorAll('.side').forEach(side=>{
  side.addEventListener('click', ()=> selectSide(side.dataset.faction));
});
toggleDark.addEventListener('click', ()=> selectSide('dark'));
toggleLight.addEventListener('click', ()=> selectSide('light'));

cartBtn.addEventListener('click', ()=>{
  cartOverlay.classList.add('open');
  cartDrawer.classList.add('open');
});
function closeCartDrawer(){
  cartOverlay.classList.remove('open');
  cartDrawer.classList.remove('open');
}
closeCart.addEventListener('click', closeCartDrawer);
cartOverlay.addEventListener('click', closeCartDrawer);

/* ===== PRODUCT DETAIL MODAL ===== */
const detailOverlay = document.getElementById('detail-overlay');
const detailClose = document.getElementById('detail-close');
const detailImgTag = document.getElementById('detail-img-tag');
const detailCat = document.getElementById('detail-cat');
const detailName = document.getElementById('detail-name');
const detailFaction = document.getElementById('detail-faction');
const detailCode = document.getElementById('detail-code');
const detailDesc = document.getElementById('detail-desc');
const detailPrice = document.getElementById('detail-price');
const detailStock = document.getElementById('detail-stock');
const detailAddBtn = document.getElementById('detail-add-btn');

function openDetail(codigo){
  const p = productos.find(prod => prod.codigo_producto === codigo);
  if(!p) return;

  detailImgTag.src = p.imagen_url || "";
  detailImgTag.alt = p.nombre;
  detailCat.textContent = p.categoria;
  detailName.textContent = p.nombre;
  detailFaction.textContent = p.faccion;
  detailCode.textContent = p.codigo_producto;
  detailDesc.textContent = p.descripcion;
  detailPrice.textContent = formatCredits(p.precio_creditos);
  detailAddBtn.dataset.code = p.codigo_producto;

  refreshDetailStockUI(p);
  detailOverlay.classList.add('open');
}

function refreshDetailStockUI(p){
  const enCarrito = cart[p.codigo_producto] || 0;
  const disponible = p.stock - enCarrito;
  detailStock.textContent = `Stock: ${p.stock}${enCarrito > 0 ? ` · ${enCarrito} en carrito` : ""}`;
  detailAddBtn.disabled = disponible <= 0;
  detailAddBtn.textContent = p.stock <= 0 ? "Sin stock" : disponible <= 0 ? "Stock máximo en carrito" : "Agregar al carrito";
}

function closeDetail(){
  detailOverlay.classList.remove('open');
}

detailClose.addEventListener('click', closeDetail);
detailOverlay.addEventListener('click', (e)=>{
  if(e.target === detailOverlay) closeDetail();
});

detailAddBtn.addEventListener('click', ()=>{
  const codigo = detailAddBtn.dataset.code;
  addToCart(codigo);
  const p = productos.find(prod => prod.codigo_producto === codigo);
  if(p) refreshDetailStockUI(p);
});

const checkoutBtn = document.querySelector('.checkout-btn');
const checkoutOverlay = document.getElementById('checkout-overlay');
const closeCheckout = document.getElementById('close-checkout');
checkoutBtn.addEventListener('click', ()=>{
  checkoutOverlay.classList.add('open');
});
closeCheckout.addEventListener('click', ()=>{
  checkoutOverlay.classList.remove('open');
});
checkoutOverlay.addEventListener('click', (e)=>{
  if(e.target === checkoutOverlay) checkoutOverlay.classList.remove('open');
});

updateCartUI();

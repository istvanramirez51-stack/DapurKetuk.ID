// ═══ ANIMATED BG PARTICLES ═══
(function(){
  const bg=document.getElementById('animBg');
  const emojis=['🍕','🍔','🍜','🥗','🍣','🧋','🍰','🌮'];
  for(let i=0;i<14;i++){
    const p=document.createElement('div');
    p.className='bg-particle';
    const size=Math.random()*18+12;
    p.style.cssText=`
      width:${size}px;height:${size}px;
      left:${Math.random()*100}%;
      font-size:${size}px;
      border-radius:0;background:transparent;
      animation-duration:${14+Math.random()*16}s;
      animation-delay:-${Math.random()*20}s;
    `;
    p.textContent=emojis[Math.floor(Math.random()*emojis.length)];
    p.style.position='absolute';
    p.style.animation=`particleRise ${14+Math.random()*16}s linear ${-Math.random()*20}s infinite`;
    bg.appendChild(p);
  }
})();

// ═══ LOGIN LOGIC ═══
let lgPwdVis=false;
function lgTab(tab,el){
  document.querySelectorAll('.lg-tab').forEach(t=>t.classList.remove('act'));
  el.classList.add('act');
  const slider=document.getElementById('lgSlider');
  slider.style.transform=tab==='login'?'translateX(0)':'translateX(-100%)';
}
function lgTogglePwd(){
  lgPwdVis=!lgPwdVis;
  const inp=document.getElementById('lgPwd');
  inp.type=lgPwdVis?'text':'password';
  document.getElementById('lgEyeIco').innerHTML=lgPwdVis
    ?`<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/>`
    :`<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>`;
}
function lgLogin(){
  const email=document.getElementById('lgEmail').value.trim();
  const pwd=document.getElementById('lgPwd').value;
  if(!email||!pwd){showLgToast('⚠️ Isi semua kolom!');return;}
  const btn=document.getElementById('lgBtn');
  btn.classList.add('loading');
  setTimeout(()=>{
    btn.classList.remove('loading');
    showLgToast('✅ Selamat datang! di JaFood...');
    setTimeout(enterApp,900);
  },1800);
}
function lgSocial(p){showLgToast('🔄 Masuk dengan '+p+'...');setTimeout(enterApp,1300);}
function lgRegister(){showLgToast('🎉 Akun dibuat! Silakan masuk.');setTimeout(()=>lgTab('login',document.querySelectorAll('.lg-tab')[0]),1400);}
function enterApp(){
  document.getElementById('loginScreen').classList.add('hide');
  document.getElementById('appShell').classList.add('show');
  setTimeout(()=>document.getElementById('loginScreen').style.display='none',750);
}
let lgToastT;
function showLgToast(m){
  clearTimeout(lgToastT);
  const t=document.getElementById('lgToast');
  t.textContent=m;t.classList.add('show');
  lgToastT=setTimeout(()=>t.classList.remove('show'),2800);
}
document.getElementById('lgPwd').addEventListener('keydown',e=>{if(e.key==='Enter')lgLogin()});
document.getElementById('lgEmail').addEventListener('keydown',e=>{if(e.key==='Enter')lgLogin()});

// ═══ TOAST ═══
let toastT;
function showToast(m){
  clearTimeout(toastT);
  const t=document.getElementById('toast');
  t.textContent=m;t.classList.add('show');
  toastT=setTimeout(()=>t.classList.remove('show'),2600);
}

// ═══ PAGES ═══
let prevPage='beranda';
function goPage(id,navEl){
  prevPage=document.querySelector('.page.active')?.id.replace('page-','') || 'beranda';
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  const pg=document.getElementById('page-'+id);
  if(pg){pg.classList.add('active');window.scrollTo({top:0,behavior:'smooth'});}
  // sync nav
  document.querySelectorAll('.nl').forEach(n=>n.classList.remove('active'));
  if(navEl) navEl.classList.add('active');
  // sync sidebar nav
  document.querySelectorAll('.sb-ni').forEach(n=>n.classList.remove('act'));
  const sbEl=document.getElementById('sbnl-'+id);
  if(sbEl) sbEl.classList.add('act');
  initReveal();
}

// ═══ PROFILE DROPDOWN ═══
function toggleProf(e){
  e.stopPropagation();
  const dd=document.getElementById('profDd');
  const btn=document.getElementById('profBtn');
  const isOpen=dd.classList.contains('open');
  closeSidebar();
  dd.classList.toggle('open',!isOpen);
  btn.classList.toggle('open',!isOpen);
}
function closeProf(){
  document.getElementById('profDd').classList.remove('open');
  document.getElementById('profBtn').classList.remove('open');
}
function logout(){closeProf();enterApp.no=true;showToast('👋 Berhasil logout!');setTimeout(()=>{document.getElementById('appShell').classList.remove('show');document.getElementById('loginScreen').classList.remove('hide');document.getElementById('loginScreen').style.display='flex';},800);}
document.addEventListener('click',e=>{
  const dd=document.getElementById('profDd');
  if(dd.classList.contains('open')&&!e.target.closest('.prof-wrap')) closeProf();
});

// ═══ SIDEBAR ═══
function toggleSidebar(e){
  e.stopPropagation();
  closeProf();
  document.getElementById('sidebar').classList.toggle('open');
  document.getElementById('sdover').classList.toggle('open');
}
function closeSidebar(){
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('sdover').classList.remove('open');
}
function toggleSb(bodyId,hdId){
  const b=document.getElementById(bodyId);
  const h=document.getElementById(hdId);
  const open=b.classList.toggle('open');
  h.classList.toggle('open',open);
}
function sbCat(el,cat){
  document.querySelectorAll('.sb-item').forEach(i=>i.classList.remove('act'));
  el.classList.add('act');
  closeSidebar();
  showToast('🗂 Kategori: '+cat);
}

// ═══ THEME TOGGLE ═══
function setTheme(theme,el){
  document.querySelectorAll('.t-opt').forEach(o=>o.classList.remove('act'));
  el.classList.add('act');
  const themes={
    green:{g:'#5DD62C',g2:'#4bc124',g3:'#337418'},
    cyan:{g:'#3eede7',g2:'#1ad4ce',g3:'#0a8a85'},
    gold:{g:'#f59e0b',g2:'#d97706',g3:'#78350f'},
    rose:{g:'#f43f5e',g2:'#e11d48',g3:'#9f1239'},
  };
  const t=themes[theme];
  if(!t) return;
  document.documentElement.style.setProperty('--g',t.g);
  document.documentElement.style.setProperty('--g2',t.g2);
  document.documentElement.style.setProperty('--g3',t.g3);
  document.documentElement.style.setProperty('--g-dim',`rgba(${hexToRgb(t.g)},.1)`);
  document.documentElement.style.setProperty('--g-dim2',`rgba(${hexToRgb(t.g)},.18)`);
  document.documentElement.style.setProperty('--border',`rgba(${hexToRgb(t.g)},.22)`);
  document.documentElement.style.setProperty('--border2',`rgba(${hexToRgb(t.g)},.09)`);
  document.documentElement.style.setProperty('--glow',`0 0 20px rgba(${hexToRgb(t.g)},.5),0 0 40px rgba(${hexToRgb(t.g)},.15)`);
  document.documentElement.style.setProperty('--glow-sm',`0 0 10px rgba(${hexToRgb(t.g)},.38)`);
  showToast('🎨 Tema diubah ke '+theme+'!');
}
function hexToRgb(hex){
  const r=parseInt(hex.slice(1,3),16),g=parseInt(hex.slice(3,5),16),b=parseInt(hex.slice(5,7),16);
  return `${r},${g},${b}`;
}

// ═══ HERO SLIDER ═══
let heroIdx=0;let heroAuto;
function heroMove(d){heroGo(heroIdx+d);}
function heroGo(i){
  const track=document.getElementById('heroTrack');
  const dots=document.getElementById('heroDots').children;
  const n=3;heroIdx=(i+n)%n;
  track.style.transform=`translateX(-${heroIdx*100}%)`;
  Array.from(dots).forEach((d,idx)=>d.classList.toggle('act',idx===heroIdx));
  resetHeroAuto();
}
function resetHeroAuto(){
  clearInterval(heroAuto);
  heroAuto=setInterval(()=>heroMove(1),4500);
}
resetHeroAuto();

// ═══ FILTERS ═══
function filterGrid(el,cat){
  document.querySelectorAll('.stabs .stab').forEach(t=>t.classList.remove('act'));
  el.classList.add('act');
  document.querySelectorAll('#mainGrid .pcard').forEach(c=>{
    const show=cat==='all'||c.dataset.cat===cat;
    c.style.opacity=show?'1':'0.22';
    c.style.transform=show?'':'scale(.94)';
    c.style.transition='all .3s';
  });
}
function shopFilter(el,cat){
  document.querySelectorAll('.sf').forEach(f=>f.classList.remove('act'));
  el.classList.add('act');
  document.querySelectorAll('#shopGrid .pcard').forEach(c=>{
    const show=cat==='semua'||c.dataset.cat===cat;
    c.style.opacity=show?'1':'0.22';
    c.style.pointerEvents=show?'all':'none';
    c.style.transition='all .3s';
  });
}
function toggleCat(el){
  document.querySelectorAll('.cat-circle').forEach(c=>c.classList.remove('act'));
  el.classList.add('act');
}

// ═══ CART ═══
let cartCount=0,cartPrices=[];
function toggleCart(){
  document.getElementById('cartPanel').classList.toggle('open');
  document.getElementById('cartOver').classList.toggle('open');
}
function updateCartEmpty(){
  const items=document.getElementById('cartItems');
  const empty=document.getElementById('cartEmpty');
  const hasItems=items.querySelectorAll('.ci').length>0;
  empty.style.display=hasItems?'none':'flex';
}
function addCart(name,img,price,val){
  cartCount++;cartPrices.push(val);
  document.getElementById('cbadge').textContent=cartCount;
  const items=document.getElementById('cartItems');
  const ci=document.createElement('div');ci.className='ci';
  ci.innerHTML=`<div class="ci-img"><img src="${img}" style="width:100%;height:100%;object-fit:cover"/></div><div style="flex:1"><div class="ci-name">${name}</div><div class="ci-price">${price}</div><div class="ci-qty"><div class="qbtn" onclick="chQty(this,-1,${val})">−</div><span class="qval">1</span><div class="qbtn" onclick="chQty(this,1,${val})">+</div></div></div>`;
  items.appendChild(ci);
  updateCartTotal();
  updateCartEmpty();
  showToast('✅ '+name+' ditambahkan!');
}
function chQty(btn,d,price){
  const qv=btn.parentElement.querySelector('.qval');
  const ci=btn.closest('.ci');
  let q=parseInt(qv.textContent)+d;
  if(q<=0){ci.remove();cartCount--;const idx=cartPrices.indexOf(price);if(idx>-1)cartPrices.splice(idx,1);}
  else{qv.textContent=q;}
  document.getElementById('cbadge').textContent=Math.max(0,cartCount);
  updateCartTotal();
  updateCartEmpty();
}
function updateCartTotal(){
  const total=cartPrices.reduce((a,b)=>a+b,0);
  document.getElementById('cartTotal').textContent='Rp '+total.toLocaleString('id');
}

// ═══ FAV ═══
let favCount=0;
function toggleFav(el,e){
  e.stopPropagation();
  el.classList.toggle('liked');
  favCount+=(el.classList.contains('liked')?1:-1);
  showToast(el.classList.contains('liked')?'❤️ Ditambahkan ke favorit!':'💔 Dihapus dari favorit!');
}

// ═══ HSCROLL ═══
function hscroll(id,d){
  const el=document.getElementById(id);
  el.scrollBy({left:d*160,behavior:'smooth'});
}

// ═══ PRODUCT DETAIL ═══
let pdCurrentName='',pdCurrentPrice=0,pdCurrentImg='';
function openDetail(name,img,store,price,oldPrice,priceStr,desc,rating,reviews,cat){
  pdCurrentName=name;pdCurrentPrice=price;pdCurrentImg=img;
  document.getElementById('pdImg').src=img;
  document.getElementById('pdName').textContent=name;
  document.getElementById('pdStoreName').textContent=store;
  document.getElementById('pdStoreImg').src='https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=60&h=60&fit=crop';
  document.getElementById('pdDesc').textContent=desc;
  document.getElementById('pdNew').textContent=priceStr;
  document.getElementById('pdCat').textContent=cat.toUpperCase();
  document.getElementById('pdQty').textContent='1';
  document.getElementById('pdRatingTxt').textContent=rating+' ('+reviews+' ulasan)';
  const stars='★'.repeat(Math.floor(rating))+'☆'.repeat(5-Math.floor(rating));
  document.getElementById('pdStars').textContent=stars;
  if(oldPrice){
    document.getElementById('pdOld').textContent='Rp '+oldPrice.toLocaleString('id');
    const disc=Math.round((1-price/oldPrice)*100);
    document.getElementById('pdBadge').textContent='-'+disc+'%';
    document.getElementById('pdBadge').style.display='block';
  } else {
    document.getElementById('pdOld').textContent='';
    document.getElementById('pdBadge').style.display='none';
  }
  goPage('detail',null);
}
function pdQty(d){
  const el=document.getElementById('pdQty');
  let q=parseInt(el.textContent)+d;
  if(q<1)q=1;el.textContent=q;
}
function pdAddToCart(){
  const q=parseInt(document.getElementById('pdQty').textContent);
  addCart(pdCurrentName,pdCurrentImg,'Rp '+pdCurrentPrice.toLocaleString('id'),pdCurrentPrice);
  showToast('✅ '+q+'x '+pdCurrentName+' ditambahkan!');
}

// ═══ PAYMENT ═══
function selPay(el){
  const all=el.parentElement.querySelectorAll('[onclick="selPay(this)"]');
  all.forEach(e=>{e.style.borderColor='var(--border2)';e.querySelector('div:last-child').style.color='var(--dim)';});
  el.style.borderColor='var(--g)';
  el.querySelector('div:last-child').style.color='var(--g)';
}
let orderCounter=1;
function placeOrder(){
  const items=document.getElementById('cartItems');
  const ciList=items.querySelectorAll('.ci');
  if(ciList.length===0){showToast('🛒 Tambahkan item ke keranjang dulu!');return;}

  // Build order card HTML from cart items
  const orderNo='#NB-'+String(Date.now()).slice(-6);
  const total=cartPrices.reduce((a,b)=>a+b,0);
  let itemsHTML='';
  ciList.forEach(ci=>{
    const name=ci.querySelector('.ci-name').textContent;
    const price=ci.querySelector('.ci-price').textContent;
    const qty=ci.querySelector('.qval').textContent;
    const img=ci.querySelector('img').src;
    itemsHTML+=`<div style="padding:12px 15px;display:flex;gap:11px;align-items:center;border-bottom:1px solid var(--border2)">
      <div style="width:48px;height:48px;border-radius:8px;overflow:hidden;flex-shrink:0"><img src="${img}" style="width:100%;height:100%;object-fit:cover"/></div>
      <div style="flex:1"><div style="font-size:13px;font-weight:700">${name}</div><div style="font-size:11px;color:var(--dim);margin-top:2px">x${qty}</div></div>
      <div style="font-size:13px;font-weight:700;color:var(--g)">${price}</div>
    </div>`;
  });

  const card=document.createElement('div');
  card.className='order-card';
  card.innerHTML=`
    <div style="display:flex;align-items:center;gap:11px;padding:13px 15px;background:var(--dark3);border-bottom:1px solid var(--border2)">
      <div style="width:9px;height:9px;border-radius:50%;background:var(--orange);box-shadow:0 0 7px var(--orange);flex-shrink:0;animation:statusPulse 2s infinite"></div>
      <div style="font-family:Syne,sans-serif;font-size:10px;font-weight:800;letter-spacing:1px">${orderNo}</div>
      <div style="margin-left:auto;background:rgba(249,115,22,.15);color:var(--orange);font-size:10px;font-weight:700;padding:2px 8px;border-radius:18px">⏳ Sedang Diproses</div>
    </div>
    ${itemsHTML}
    <div style="padding:10px 15px;display:flex;justify-content:space-between;align-items:center">
      <div style="font-size:11px;color:var(--dim)">🕐 Estimasi 25–35 mnt · Total <b style="color:var(--g)">Rp ${total.toLocaleString('id')}</b></div>
      <button style="background:var(--g);color:var(--dark);padding:5px 13px;border-radius:18px;font-size:10px;font-weight:800;font-family:Syne,sans-serif;cursor:pointer" onclick="showToast('🗺️ Melacak pesanan...')">Lacak</button>
    </div>`;

  // Show order in pesanan page
  const orderList=document.getElementById('orderList');
  const emptyState=document.getElementById('orderEmptyState');
  emptyState.style.display='none';
  orderList.prepend(card);

  // Clear cart
  items.querySelectorAll('.ci').forEach(c=>c.remove());
  cartCount=0;cartPrices=[];
  document.getElementById('cbadge').textContent='0';
  updateCartTotal();
  updateCartEmpty();

  // Update driver badge
  document.getElementById('driverBadge').textContent='1';
  document.getElementById('driverBadge').className='badge orange';

  showToast('🎉 Pesanan berhasil! Sedang diproses...');
  setTimeout(()=>showToast('🚴 Driver sedang menuju lokasimu!'),2500);
  setTimeout(()=>{goPage('pesanan',null);},1000);
}

// ═══ TESTIMONI ═══
const testis=[
  {txt:'Makanannya enak banget! Pengiriman super cepat, masih hangat saat sampai.',name:'Sabrina K.',stars:'★★★★★',img:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop'},
  {txt:'Porsinya besar dan harganya sangat terjangkau. Burger favoritku!',name:'Dimas R.',stars:'★★★★☆',img:'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop'},
  {txt:'Sushi terbaik yang pernah saya pesan online. Sangat recommended!',name:'Ayu M.',stars:'★★★★★',img:'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop'},
];
let testiIdx=0;
function nextTesti(){testiIdx=(testiIdx+1)%testis.length;renderTesti();}
function prevTesti(){testiIdx=(testiIdx-1+testis.length)%testis.length;renderTesti();}
function renderTesti(){
  const t=testis[testiIdx];
  const b=document.getElementById('testiBox');
  if(b) b.innerHTML=`<div class="testi-card">${t.txt}<div class="testi-author"><div class="testi-av"><img src="${t.img}"/></div><div><div class="testi-name">${t.name}</div><div class="testi-stars">${t.stars}</div></div></div></div>`;
}

// ═══ TOGGLE SETTINGS ═══
function toggleSett(row){
  const toggle=row.querySelector('[data-on]');
  const dot=toggle.querySelector('div');
  const isOn=toggle.dataset.on==='true';
  toggle.dataset.on=(!isOn).toString();
  if(!isOn){
    toggle.style.background='var(--g3)';toggle.style.borderColor='var(--g)';dot.style.transform='translateX(16px)';
  } else {
    toggle.style.background='var(--dark3)';toggle.style.borderColor='var(--border2)';dot.style.transform='';
  }
  showToast((!isOn?'🔔 Notifikasi diaktifkan':'🔕 Notifikasi dimatikan'));
}

// ═══ SCROLL REVEAL ═══
function initReveal(){
  const obs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('vis')}),{threshold:.06,rootMargin:'0px 0px -20px 0px'});
  document.querySelectorAll('.rv:not(.vis)').forEach(el=>obs.observe(el));
}
initReveal();

// ═══ NAV RIPPLE ═══
document.querySelectorAll('.nl').forEach(link=>{
  link.addEventListener('click',function(e){
    const r=document.createElement('span');
    r.className='nl-ripple';
    const size=Math.max(this.offsetWidth,this.offsetHeight);
    const rect=this.getBoundingClientRect();
    r.style.cssText=`width:${size}px;height:${size}px;left:${e.clientX-rect.left-size/2}px;top:${e.clientY-rect.top-size/2}px`;
    this.appendChild(r);
    r.addEventListener('animationend',()=>r.remove());
  });
});

// ═══ INIT CART EMPTY STATE ═══
updateCartEmpty();

// ═══ STORE DATA ═══
const storeData = {
  chatime: {
    name: 'Chatime',
    img: 'src/Chatime.jpeg',
    banner: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=900&h=300&fit=crop',
    rating: 4.8, reviews: 1240,
    address: 'Jl. Sudirman No.12, Jakarta Pusat',
    hours: '09:00 – 22:00 WIB',
    phone: '+62 21-1234-5678',
    desc: 'Minuman teh premium asal Taiwan dengan ratusan varian rasa dan topping pilihan. Dibuat segar setiap saat dengan bahan-bahan berkualitas tinggi.',
    menu: [
      { name: 'Brown Sugar Milk Tea', price: 32000, img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop', badge: '🔥 Best Seller' },
      { name: 'Taro Milk Tea', price: 28000, img: 'https://images.unsplash.com/photo-1582892322149-fba84bd57d26?w=300&h=300&fit=crop', badge: '💜 Favorit' },
      { name: 'Matcha Latte', price: 35000, img: 'https://images.unsplash.com/photo-1536514498073-50e69d39c6cf?w=300&h=300&fit=crop', badge: '🌿 Baru' },
      { name: 'Classic Bubble Tea', price: 25000, img: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=300&h=300&fit=crop', badge: '' },
      { name: 'Honey Green Tea', price: 27000, img: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=300&h=300&fit=crop', badge: '' },
      { name: 'Strawberry Yakult', price: 30000, img: 'https://images.unsplash.com/photo-1497534446932-c925b458314e?w=300&h=300&fit=crop', badge: '🍓 New' },
    ]
  },
  miegacoan: {
    name: 'Mie Gacoan',
    img: 'src/miegacoan.jpeg',
    banner: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=900&h=300&fit=crop',
    rating: 4.7, reviews: 3210,
    address: 'Jl. Gatot Subroto No.88, Jakarta Selatan',
    hours: '11:00 – 23:00 WIB',
    phone: '+62 21-9876-5432',
    desc: 'Mie pedas legendaris dengan level kepedasan yang bisa dipilih sesuai selera. Cita rasa unik yang bikin ketagihan!',
    menu: [
      { name: 'Mie Hompimpa', price: 15000, img: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=300&h=300&fit=crop', badge: '🏆 Best Seller' },
      { name: 'Mie Setan 👿', price: 17000, img: 'https://images.unsplash.com/photo-1555126634-323283e090fa?w=300&h=300&fit=crop', badge: '🌶 Pedas' },
      { name: 'Mie Iblis 🔥', price: 19000, img: 'https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=300&h=300&fit=crop', badge: '🔥 Super Pedas' },
      { name: 'Mie Geje', price: 13000, img: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=300&h=300&fit=crop', badge: '' },
      { name: 'Es Teh Jumbo', price: 5000, img: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=300&h=300&fit=crop', badge: '' },
      { name: 'Pangsit Goreng', price: 10000, img: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=300&h=300&fit=crop', badge: '🥟 Populer' },
    ]
  },
  kfc: {
    name: 'KFC',
    img: 'src/kfc.jpeg',
    banner: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=900&h=300&fit=crop',
    rating: 4.6, reviews: 5890,
    address: 'Jl. Thamrin No.5, Jakarta Pusat',
    hours: '10:00 – 23:00 WIB',
    phone: '+62 1500-704',
    desc: 'Ayam goreng original dengan 11 bumbu rahasia yang renyah di luar, juicy di dalam. Pilihan keluarga sejak 1952.',
    menu: [
      { name: 'Original Chicken', price: 22000, img: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=300&h=300&fit=crop', badge: '🍗 Classic' },
      { name: 'Zinger Burger', price: 35000, img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&h=300&fit=crop', badge: '🔥 Best Seller' },
      { name: 'Family Box', price: 115000, img: 'https://images.unsplash.com/photo-1484723091739-30990518934d?w=300&h=300&fit=crop', badge: '👨‍👩‍👧 Promo' },
      { name: 'Twister Wrap', price: 32000, img: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=300&h=300&fit=crop', badge: '' },
      { name: 'Crispy Fries', price: 18000, img: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=300&h=300&fit=crop', badge: '🍟 Favorit' },
      { name: 'Pepsi Float', price: 15000, img: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=300&h=300&fit=crop', badge: '' },
    ]
  },
  hokben: {
    name: 'HokBen',
    img: 'src/hokben.jpeg',
    banner: 'https://images.unsplash.com/photo-1617196034183-421b4040ed20?w=900&h=300&fit=crop',
    rating: 4.5, reviews: 2340,
    address: 'Jl. Kemang Raya No.45, Jakarta Selatan',
    hours: '10:00 – 22:00 WIB',
    phone: '+62 21-7182-9023',
    desc: 'Masakan Jepang berkualitas tinggi dengan cita rasa autentik. Menggunakan bahan-bahan segar pilihan yang disiapkan setiap hari.',
    menu: [
      { name: 'Nasi Ayam Teriyaki', price: 38000, img: 'https://images.unsplash.com/photo-1617196034183-421b4040ed20?w=300&h=300&fit=crop', badge: '🏆 Best Seller' },
      { name: 'Ebi Furai', price: 42000, img: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=300&h=300&fit=crop', badge: '🍤 Favorit' },
      { name: 'Soba Dingin', price: 35000, img: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=300&h=300&fit=crop', badge: '' },
      { name: 'Bento Set Premium', price: 55000, img: 'https://images.unsplash.com/photo-1553621042-f6e147245754?w=300&h=300&fit=crop', badge: '🎁 Promo' },
      { name: 'Karaage Don', price: 45000, img: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=300&h=300&fit=crop', badge: '🆕 New' },
      { name: 'Miso Soup', price: 12000, img: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=300&h=300&fit=crop', badge: '' },
    ]
  },
  mcdonalds: {
    name: "McDonald's",
    img: 'src/mcdonalds.jpeg',
    banner: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=900&h=300&fit=crop',
    rating: 4.4, reviews: 9210,
    address: 'Jl. Sudirman No.99, Jakarta Selatan',
    hours: '24 Jam',
    phone: '+62 1500-920',
    desc: 'Restoran cepat saji terpopuler di dunia dengan menu ikonik yang dicintai jutaan orang. Tersedia 24 jam dengan layanan cepat.',
    menu: [
      { name: 'Big Mac', price: 55000, img: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=300&h=300&fit=crop', badge: '👑 Iconic' },
      { name: 'McChicken', price: 35000, img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&h=300&fit=crop', badge: '🔥 Best Seller' },
      { name: 'French Fries Large', price: 28000, img: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=300&h=300&fit=crop', badge: '🍟 Favorit' },
      { name: 'McFlurry Oreo', price: 25000, img: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300&h=300&fit=crop', badge: '🍦 Hits' },
      { name: 'Happy Meal', price: 55000, img: 'https://images.unsplash.com/photo-1484723091739-30990518934d?w=300&h=300&fit=crop', badge: '👧 Anak-anak' },
      { name: 'McCafé Latte', price: 32000, img: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=300&h=300&fit=crop', badge: '' },
    ]
  },
  starbuck: {
    name: 'Starbucks',
    img: 'src/starbuck.jpeg',
    banner: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=900&h=300&fit=crop',
    rating: 4.7, reviews: 4560,
    address: 'Jl. SCBD Lot 10, Jakarta Selatan',
    hours: '08:00 – 22:00 WIB',
    phone: '+62 21-5140-8800',
    desc: 'Kopi premium dunia dengan pengalaman café yang nyaman dan atmosfer yang cozy. Setiap cangkir dibuat dengan penuh perhatian oleh barista terlatih.',
    menu: [
      { name: 'Caramel Frappuccino', price: 72000, img: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=300&h=300&fit=crop', badge: '⭐ Best Seller' },
      { name: 'Americano', price: 45000, img: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=300&h=300&fit=crop', badge: '☕ Classic' },
      { name: 'Matcha Latte', price: 65000, img: 'https://images.unsplash.com/photo-1536514498073-50e69d39c6cf?w=300&h=300&fit=crop', badge: '🌿 Favorit' },
      { name: 'Chocolate Muffin', price: 38000, img: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300&h=300&fit=crop', badge: '' },
      { name: 'Cold Brew', price: 55000, img: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=300&h=300&fit=crop', badge: '🆕 Baru' },
      { name: 'Pink Drink', price: 68000, img: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=300&h=300&fit=crop', badge: '🌸 Viral' },
    ]
  }
};

// ═══ OPEN / CLOSE STORE MODAL ═══
function openStore(key, circleEl) {
  // update active circle
  document.querySelectorAll('.cat-circle').forEach(c => c.classList.remove('act'));
  if (circleEl) circleEl.classList.add('act');

  const s = storeData[key];
  if (!s) return;

  // Populate modal
  document.getElementById('stmBannerImg').src = s.banner;
  document.getElementById('stmLogoImg').src   = s.img;
  document.getElementById('stmName').textContent  = s.name;
  document.getElementById('stmRatingStar').textContent = '⭐ ' + s.rating;
  document.getElementById('stmReviews').textContent = s.reviews.toLocaleString('id');
  document.getElementById('stmHours').textContent   = s.hours;
  document.getElementById('stmAddress').textContent = s.address;
  document.getElementById('stmPhone').textContent   = s.phone;
  document.getElementById('stmDesc').textContent    = s.desc;

  // Build menu grid
  const grid = document.getElementById('stmMenuGrid');
  grid.innerHTML = '';
  s.menu.forEach(item => {
    const priceStr = 'Rp ' + item.price.toLocaleString('id');
    const badgeHtml = item.badge
      ? `<div class="stm-mcard-badge">${item.badge}</div>` : '';
    const card = document.createElement('div');
    card.className = 'stm-mcard';
    card.innerHTML = `
      <div class="stm-mcard-img">
        ${badgeHtml}
        <img src="${item.img}" alt="${item.name}"/>
      </div>
      <div class="stm-mcard-info">
        <div class="stm-mcard-name">${item.name}</div>
        <div class="stm-mcard-row">
          <div class="stm-mcard-price">${priceStr}</div>
          <div class="stm-mcard-add" onclick="event.stopPropagation();addCart('${item.name}','${item.img}','${priceStr}',${item.price});showToast('✅ ${item.name} ditambahkan!')">+</div>
        </div>
      </div>`;
    card.addEventListener('click', () => {
      closeStore();
      openDetail(item.name, item.img, s.name, item.price, 0, priceStr,
        item.badge ? item.badge + ' dari ' + s.name : 'Menu pilihan dari ' + s.name,
        s.rating, s.reviews, 'resto');
    });
    grid.appendChild(card);
  });

  // Scroll panel to top
  const panel = document.getElementById('stmPanel');
  panel.scrollTop = 0;

  // Open
  document.getElementById('stmOver').classList.add('open');
  panel.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeStore() {
  document.getElementById('stmOver').classList.remove('open');
  document.getElementById('stmPanel').classList.remove('open');
  document.body.style.overflow = '';
}

// Close on ESC key
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeStore();
});
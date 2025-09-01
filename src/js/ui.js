// src/js/ui.js
import { CATEGORIAS, MENU, MODS } from './data.js';
import { cart, addItem, sendOrder } from './cart.js';
import { printTicket } from './ticket.js';

const el = (t,c,h='') => { const e=document.createElement(t); if(c) e.className=c; e.innerHTML=h; return e; };

export function initCajera() {
  const $cats = document.querySelector('#cats');
  const $grid = document.querySelector('#grid');
  const $cart = document.querySelector('#cart');
  const $notas = document.querySelector('#notas');
  const $mesa = document.querySelector('#mesa');
  const $enviar = document.querySelector('#enviar');

  CATEGORIAS.forEach(c => {
    const b = el('button','pill',c.nombre);
    b.addEventListener('click', () => renderCat(c.id));
    $cats.appendChild(b);
  });

  function renderCat(catId) {
    $grid.innerHTML = '';
    (MENU[catId] || []).forEach(item => {
      const card = el('button','btn-item',
        `<strong>${item.nombre}</strong><div>$${item.precio.toFixed(2)}</div>`);
      card.addEventListener('click', () => pickMods(item, catId));
      $grid.appendChild(card);
    });
  }

  function pickMods(item, catId) {
    const mods = prompt(`Mods (ids separados por coma): ${MODS.map(m=>m.id).join(', ')}`)?.split(',').map(s=>s.trim()).filter(Boolean) || [];
    const extrasIds = (MENU.otros||[]).map(e=>e.id);
    const extras = extrasIds.length
      ? (prompt(`Extras (ids): ${extrasIds.join(', ')}`)?.split(',').map(s=>s.trim()).filter(Boolean) || [])
      : [];
    addItem({ cat: catId, id: item.id, mods, extras });
    renderCart();
  }

  function renderCart() {
    $cart.innerHTML = '';
    let total = 0;
    cart.items.forEach((it) => {
      total += it.precio;
      const li = el('div','line',
        `<div>${it.nombre}${it.mods?.length?` <small>(${it.mods.join('/')})</small>`:''}${it.extras?.length?` <small>+${it.extras.join('/')}</small>`:''}</div><strong>$${it.precio.toFixed(2)}</strong>`);
      $cart.appendChild(li);
    });
    const foot = el('div','total',`Total: <b>$${total.toFixed(2)}</b>`);
    $cart.appendChild(foot);
  }

  $notas.addEventListener('input', () => cart.notas = $notas.value);
  $mesa.addEventListener('input', () => cart.mesa = $mesa.value);

  $enviar.addEventListener('click', async () => {
    const r = await sendOrder();
    if (r.ok) {
      alert('Orden enviada');
      printTicket(r.order, {
        nombre: 'Sushi To Go',
        dir: 'Aguilar y Maya Pte. #114, Alameda, Celaya, GTO.',
        tel: '461 61 2 29 51',
        horario: 'Lun-Sáb 13:00 a 17:00',
        logo: './logo.png'
      });
    } else {
      alert(r.msg || 'Error');
    }
    renderCart();
    $notas.value = ''; $mesa.value = '';
  });

  renderCat('uramaki');
  renderCart();

  // Botón de ticket de prueba
  document.querySelector('#testTicket')?.addEventListener('click', ()=>{
    printTicket({
      id: Date.now().toString(36),
      ts: Date.now(),
      mesa: 'Para llevar',
      notas: 'Sin cebolla',
      items: [
        { nombre: 'California Camarón', precio: 100, mods:['spicy'], extras:['salsa de soya extra'] },
        { nombre: 'Kushiage de Queso (3p)', precio: 84 }
      ]
    });
  });
}

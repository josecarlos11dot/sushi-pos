// src/js/kitchen.js
import { getPendientes, servirOrden } from './api.js';

let lastCount = 0;
let tapTimer = null;
const el = (t,c,h='') => { const e=document.createElement(t); if(c) e.className=c; e.innerHTML=h; return e; };

function playDing(){ const a=new Audio('/ding.mp3'); a.play().catch(()=>{}); }

function cardOrden(o) {
  const c = el('div','k-card',`
    <div class="k-head">
      <strong>#${o.id.slice(-4).toUpperCase()}</strong>
      ${o.mesa?`<span>Mesa ${o.mesa}</span>`:''}
      <span class="muted">${new Date(o.ts).toLocaleTimeString()}</span>
    </div>
    <ul class="k-list">${o.items.map(it=>`<li>${it.nombre}${it.mods?.length?` <small>(${it.mods.join('/')})</small>`:''}${it.extras?.length?` <small>+${it.extras.join('/')}</small>`:''}</li>`).join('')}</ul>
    ${o.notas?`<div class="k-notas">📝 ${o.notas}</div>`:''}
    <button class="k-serve">Servir (doble-tap)</button>
  `);

  const btn = c.querySelector('.k-serve');
  let lastTap = 0;
  btn.addEventListener('click', async () => {
    const now = Date.now();
    if (now - lastTap < 350) {
      btn.disabled = true;
      const r = await servirOrden(o.id);
      if (r.ok) c.remove();
      else { btn.disabled = false; alert(r.msg || 'Error'); }
    } else {
      btn.classList.add('armed');
      clearTimeout(tapTimer);
      tapTimer = setTimeout(()=>btn.classList.remove('armed'), 600);
    }
    lastTap = now;
  });

  return c;
}

async function tick() {
  const { ok, orders } = await getPendientes();
  if (!ok) return;
  const wrap = document.querySelector('#k-wrap');
  wrap.innerHTML = '';
  orders.forEach(o => wrap.appendChild(cardOrden(o)));
  if (orders.length > lastCount) playDing();
  lastCount = orders.length;
}

export function initKitchen() {
  tick();
  setInterval(tick, 2500);
}

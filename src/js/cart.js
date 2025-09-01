// src/js/cart.js
import { MENU, MODS } from './data.js';
import { crearOrden } from './api.js';

export const cart = { mesa: '', items: [], notas: '' };

export function addItem({ cat, id, mods = [], extras = [] }) {
  const base = (MENU[cat] || []).find(x => x.id === id);
  if (!base) return;
  const precioMods = mods.reduce((acc, m) => acc + (MODS.find(x => x.id === m)?.precio || 0), 0);
  const precioExtras = extras.reduce((acc, e) => {
    const ex = (MENU.otros || []).find(x => x.id === e) || (MENU.extras || []).find(x => x.id === e);
    return acc + (ex?.precio || 0);
  }, 0);
  cart.items.push({
    cat, id, nombre: base.nombre,
    mods, extras,
    precio: base.precio + precioMods + precioExtras
  });
}

export function clearCart() {
  cart.items = [];
  cart.notas = '';
}

export async function sendOrder() {
  if (!cart.items.length) return { ok:false, msg:'Carrito vacío' };
  const resp = await crearOrden({
    mesa: cart.mesa || null,
    items: cart.items,
    notas: cart.notas
  });
  if (resp.ok) clearCart();
  return resp;
}

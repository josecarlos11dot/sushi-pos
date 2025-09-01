// src/js/api.js
const json = (data) => ({
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data)
});

export async function crearOrden(payload) {
  const r = await fetch('/api/orders-create', json(payload));
  return r.json();
}
export async function getPendientes() {
  const r = await fetch('/api/orders-pending');
  return r.json();
}
export async function servirOrden(id) {
  const r = await fetch('/api/orders-serve', json({ id }));
  return r.json();
}

// api/orders-pending.js
let ORDERS = global.ORDERS ?? (global.ORDERS = []);

export default function handler(req, res) {
  const pending = ORDERS.filter(o => o.estado === 'pendiente')
                        .sort((a,b) => a.ts - b.ts);
  res.json({ ok: true, orders: pending });
}

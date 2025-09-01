// api/orders-create.js
let ORDERS = global.ORDERS ?? (global.ORDERS = []);

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ ok: false, msg: 'Method not allowed' });
  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    const nueva = {
      id: Date.now().toString(36),
      mesa: body.mesa ?? null,
      items: body.items ?? [],
      notas: body.notas ?? '',
      estado: 'pendiente',
      ts: Date.now()
    };
    ORDERS.push(nueva);
    res.json({ ok: true, order: nueva });
  } catch (e) {
    res.status(400).json({ ok: false, msg: e.message });
  }
}

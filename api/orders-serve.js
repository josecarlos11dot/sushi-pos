// api/orders-serve.js
let ORDERS = global.ORDERS ?? (global.ORDERS = []);

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ ok:false, msg:'Method not allowed' });
  try {
    const { id } = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    const o = ORDERS.find(x => x.id === id);
    if (!o) return res.status(404).json({ ok:false, msg:'Order not found' });
    o.estado = 'servido';
    o.tsServ = Date.now();
    res.json({ ok:true, order:o });
  } catch (e) {
    res.status(400).json({ ok:false, msg:e.message });
  }
}

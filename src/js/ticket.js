// src/js/ticket.js
export function printTicket(order, negocio = {}) {
  const cfg = {
    nombre: negocio.nombre || "Sushi To Go",
    dir: negocio.dir || "Aguilar y Maya Pte. #114, Alameda, Celaya, GTO.",
    tel: negocio.tel || "461 61 2 29 51",
    horario: negocio.horario || "Lun-Sáb 13:00 a 17:00",
    logo: negocio.logo || "./logo.png"
  };

  const fecha = new Date(order.ts || Date.now());
  const total = order.items.reduce((acc, it) => acc + (it.precio || 0), 0);

  const w = window.open("", "_blank", "width=380,height=720");
  w.document.write(`
<!doctype html><html><head>
<meta charset="utf-8"/>
<title>Ticket ${order.id}</title>
<style>
  @page{ size: 72mm auto; margin: 6mm; }
  body{ font-family: ui-monospace,Consolas,monospace; }
  .c{ text-align:center; }
  .muted{ color:#666; font-size:12px; }
  img.logo{ height:48px; margin-bottom:6px; }
  hr{ border:0; border-top:1px dashed #999; margin:8px 0; }
  .line{ display:flex; justify-content:space-between; gap:8px; }
  .small{ font-size:12px; }
  ul{ list-style:none; padding:0; margin:0; }
  li{ margin:4px 0; }
</style>
</head><body>
  <div class="c">
    <img class="logo" src="${cfg.logo}" alt="${cfg.nombre}"/>
    <div><strong>${cfg.nombre}</strong></div>
    <div class="small">${cfg.dir}</div>
    <div class="small">Tel: ${cfg.tel}</div>
    <div class="muted">${cfg.horario}</div>
  </div>
  <hr/>
  <div class="small">Folio: ${String(order.id).toUpperCase()}</div>
  <div class="small">Fecha: ${fecha.toLocaleString()}</div>
  ${order.mesa ? `<div class="small">Mesa: ${order.mesa}</div>` : ""}
  <hr/>
  <ul>
    ${order.items.map(it => `
      <li>
        <div class="line"><span>${it.nombre}</span><span>$${it.precio.toFixed(2)}</span></div>
        ${it.mods?.length ? `<div class="small">(${it.mods.join(", ")})</div>` : ""}
        ${it.extras?.length ? `<div class="small">+ ${it.extras.join(", ")}</div>` : ""}
      </li>
    `).join("")}
  </ul>
  <hr/>
  <div class="line"><strong>Total</strong><strong>$${total.toFixed(2)}</strong></div>
  ${order.notas ? `<hr/><div class="small">Nota: ${order.notas}</div>` : ""}
  <hr/>
  <div class="c small">¡Gracias por su compra!</div>
<script>window.print(); setTimeout(()=>window.close(), 400);</script>
</body></html>`);
  w.document.close();
}

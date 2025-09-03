
# Sushi To Go — Demo de Maqueta (WhatsApp + POS)

Este repo contiene **dos páginas estáticas** que se comunican entre sí usando `BroadcastChannel` (no hay backend). Útil para demostrar el flujo al cliente antes de invertir en APIs.

## Estructura
- `index.html` — Portada con enlaces a las dos simulaciones.
- `whatsapp-sim.html` — Simulación visual de WhatsApp (burbujas, typing, chips).
- `pos-sim.html` — POS simulado que crea pedidos y envía estados al chat.
- `public/img/*` — Logo y material de referencia (menú y paquetes).

## Uso local
Abre `index.html` en tu navegador. Para que ambas pestañas se comuniquen, **abre las dos páginas** (Bot y POS).

> Nota: En algunos navegadores móviles la comunicación entre pestañas puede requerir abrir ambas desde la misma pestaña (con `target=_blank`) o desactivar bloqueo de popups.

## Deploy en Vercel
1. Crea un repositorio en GitHub y sube este contenido.
2. Entra a **Vercel** → `New Project` → Importa tu repo.
3. Framework: **Other** / **Static Site** (no requiere build).
4. Deploy. Obtendrás una URL tipo `https://tu-proyecto.vercel.app/`.
5. Abre `https://tu-proyecto.vercel.app/index.html` y desde ahí lanza ambas páginas.

## Personalización rápida
- Edita chips de atajo en `whatsapp-sim.html`.
- Cambia atajos de pedido en `pos-sim.html`.
- Reemplaza imágenes en `public/img/`.

---

Hecho para demostración: **sin cuentas, sin APIs, sin servidores**.

import express from "express";

const app = express();
app.use(express.json());

// 👉 el mismo token que pusiste en Meta
const VERIFY_TOKEN = "sushibot_token";

// ✅ Ruta de verificación
app.get("/webhook", (req, res) => {
  const mode = req.query["hub.mode"];
  const token = req.query["hub.verify_token"];
  const challenge = req.query["hub.challenge"];

  if (mode && token === VERIFY_TOKEN) {
    console.log("Webhook verificado correctamente ✔");
    return res.status(200).send(challenge);
  } else {
    return res.sendStatus(403);
  }
});

// ✅ Ruta para recibir mensajes
app.post("/webhook", (req, res) => {
  const body = req.body;

  if (body.object) {
    const entry = body.entry?.[0];
    const changes = entry?.changes?.[0];
    const message = changes?.value?.messages?.[0];

    if (message) {
      const from = message.from; // número de quien envía
      const text = message.text?.body; // texto enviado

      console.log("📩 Mensaje recibido:");
      console.log("De:", from);
      console.log("Texto:", text);
    }
  }

  res.sendStatus(200); // importante para que Meta no repita el evento
});

app.listen(3000, () => {
  console.log("SushiBot Webhook escuchando en http://localhost:3000/webhook");
});

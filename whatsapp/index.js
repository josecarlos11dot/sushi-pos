import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
app.use(bodyParser.json());

// ⚙️ Config
const TOKEN = "TU_TOKEN_DE_ACCESO"; // ⚠️ cámbialo por el de Meta
const VERIFY_TOKEN = "sushibot_token";

// 🌐 Verificación del webhook
app.get("/webhook", (req, res) => {
  const mode = req.query["hub.mode"];
  const token = req.query["hub.verify_token"];
  const challenge = req.query["hub.challenge"];

  if (mode && token === VERIFY_TOKEN) {
    console.log("Webhook verificado correctamente ✔");
    res.status(200).send(challenge);
  } else {
    res.sendStatus(403);
  }
});

// 📩 Manejo de mensajes entrantes
app.post("/webhook", async (req, res) => {
  const body = req.body;

  if (body.object) {
    const entry = body.entry?.[0];
    const changes = entry?.changes?.[0];
    const message = changes?.value?.messages?.[0];

    if (message) {
      const from = message.from; // número del usuario
      const text = message.text?.body;

      console.log("📩 Mensaje recibido:");
      console.log("De:", from);
      console.log("Texto:", text);

      // 📨 Responder automáticamente
      await axios.post(
        `https://graph.facebook.com/v19.0/${changes.value.metadata.phone_number_id}/messages`,
        {
          messaging_product: "whatsapp",
          to: from,
          text: { body: "¡Hola! 🍣 Gracias por escribir a SushiBot 🚀" }
        },
        {
          headers: {
            Authorization: `Bearer ${TOKEN}`,
            "Content-Type": "application/json"
          }
        }
      );
    }

    res.sendStatus(200); // importante para que Meta no repita el evento
  } else {
    res.sendStatus(404);
  }
});

// 🚀 Iniciar servidor
app.listen(3000, () => {
  console.log("SushiBot Webhook escuchando en http://localhost:3000/webhook");
});

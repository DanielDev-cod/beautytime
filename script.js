import { db } from "./firebase.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

document.addEventListener("DOMContentLoaded", () => {
  const botao = document.querySelector("#btnSalvar");

  // 💬 1️⃣ Testa se o botão foi encontrado no HTML
  console.log("✅ Botão encontrado:", botao);

  // Quando o botão for clicado:
  botao.addEventListener("click", async () => {

    // 💅 2️⃣ Testa se o clique está funcionando
    console.log("🩷 Botão foi clicado!");

    const nome = document.querySelector("#nome").value.trim();
    const servico = document.querySelector("#servico").value.trim();
    const data = document.querySelector("#data").value;
    const horario = document.querySelector("#horario").value;

    if (!nome || !servico || !data || !horario) {
      alert("Por favor, preencha todos os campos 💅");
      return;
    }

    try {
      await addDoc(collection(db, "agendamentos"), {
        nome,
        servico,
        data,
        horario,
        criado_em: new Date().toISOString()
      });

      alert("Agendamento realizado com sucesso 💖");
      document.querySelector("#formAgendamento").reset();
    } catch (erro) {
      console.error("Erro ao salvar:", erro);
      alert("Erro ao agendar. Veja o console para detalhes.");
    }
  });
});

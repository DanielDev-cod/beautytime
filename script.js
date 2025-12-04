const db = window.db;

import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

console.log("✅ script.js carregado!");

document.getElementById("btnSalvar").addEventListener("click", async () => {
  const nome = document.getElementById("nome").value;
  const servico = document.getElementById("servico").value;
  const data = document.getElementById("data").value;
  const horario = document.getElementById("horario").value;

  if (!nome || !servico || !data || !horario) {
    alert("Preencha todos os campos!");
    return;
  }

  try {
    await addDoc(collection(db, "agendamentos"), { nome, servico, data, horario });
    alert("Agendamento salvo! ✅💅");
  } catch (e) {
    alert("Erro ao salvar ❌");
    console.error(e);
  }
});



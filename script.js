/* =========================
   QUIZ AGRINHO 2026
   ========================= */

function responder(resposta) {
    const resultado = document.getElementById("resultado");

    if (resposta === "certo") {
        resultado.textContent = "✔ Resposta correta! Muito bem!";
        resultado.style.color = "green";
    } else {
        resultado.textContent = "✖ Resposta incorreta. Tente novamente!";
        resultado.style.color = "red";
    }
}

/* =========================
   BOTÃO VOLTAR AO TOPO
   ========================= */

const botaoTopo = document.getElementById("topo");

botaoTopo.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

/* Mostrar ou esconder botão conforme rolagem */
window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
        botaoTopo.style.display = "block";
    } else {
        botaoTopo.style.display = "none";
    }
});

/* Começa escondido */
botaoTopo.style.display = "none";

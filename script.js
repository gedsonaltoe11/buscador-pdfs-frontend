const API_URL = "https://buscador-pdfs-backend-1.onrender.com"; // Troque pela URL do Render

async function buscar() {
    const termo = document.getElementById("busca").value.trim();
    if (!termo) {
        alert("Digite algo para buscar!");
        return;
    }

    const resp = await fetch(`${API_URL}/buscar?query=${encodeURIComponent(termo)}`);
    const dados = await resp.json();

    const div = document.getElementById("resultados");
    div.innerHTML = "";

    if (dados.length === 0) {
        div.innerHTML = "<p>Nenhum resultado encontrado.</p>";
        return;
    }

    dados.forEach(item => {
        const el = document.createElement("div");
        el.className = "resultado";
        el.innerHTML = `<strong>${item.titulo}</strong><br>
                        Autor: ${item.autor}<br>
                        <a href="${item.link}" target="_blank">Abrir PDF</a>`;
        div.appendChild(el);
    });
}

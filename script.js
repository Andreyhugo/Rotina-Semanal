const semana = {
    "Segunda": [
        "Ler a Bíblia",
        "Estudar",
        "Ler livro",
        "Ir à igreja"
    ],
    "Terça": [
        "Ler a Bíblia",
        "Estudar",
        "Ler livro",
        "Ir à igreja ou correr"
    ],
    "Quarta": [
        "Ler a Bíblia",
        "Estudar",
        "Ler livro",
        "Ir à igreja",
        "Correr"
    ],
    "Quinta": [
        "Ler a Bíblia",
        "Estudar",
        "Ler livro",
        "Ir à psicopedagoga",
        "Correr"
    ],
    "Sexta": [
        "Ler a Bíblia",
        "Estudar",
        "Ler livro",
        "Ir à igreja",
        "Correr ou resenhar"
    ],
    "Sábado": [
        "Ler a Bíblia",
        "Estudar",
        "Ler livro",
        "Correr"
    ],
    "Domingo": [
        "Ir à igreja",
        "Ler a Bíblia",
        "Estudar",
        "Ler livro",
        "Correr"
    ]
};

const week = document.getElementById("week");

/* CRIA OS CARDS */
Object.keys(semana).forEach(dia => {
    const dayDiv = document.createElement("div");
    dayDiv.classList.add("day");

    let conteudo = `<h2>${dia}</h2>`;

    semana[dia].forEach(tarefa => {
        conteudo += `
            <div class="task">
                <label>
                    <input type="checkbox" onchange="atualizarProgresso(this)">
                    <span>${tarefa}</span>
                </label>
            </div>
        `;
    });

    conteudo += `
        <div class="progress-container">
            <div class="progress-bar"></div>
        </div>
        <div class="progress-text">0%</div>
    `;

    dayDiv.innerHTML = conteudo;
    week.appendChild(dayDiv);
});

/* ATUALIZA PROGRESSO */
function atualizarProgresso(checkbox) {
    const day = checkbox.closest(".day");
    const checkboxes = day.querySelectorAll("input[type='checkbox']");
    const marcados = day.querySelectorAll("input[type='checkbox']:checked").length;

    const percentual = Math.round((marcados / checkboxes.length) * 100);

    day.querySelector(".progress-bar").style.width = percentual + "%";
    day.querySelector(".progress-text").innerText = percentual + "%";
}

/* RESET SEMANAL */
const resetBtn = document.getElementById("resetBtn");

resetBtn.addEventListener("click", () => {
    const confirmar = confirm("Tem certeza que deseja resetar todo o progresso da semana?");
    if (!confirmar) return;

    document.querySelectorAll(".day").forEach(day => {
        day.querySelectorAll("input[type='checkbox']")
            .forEach(cb => cb.checked = false);

        day.querySelector(".progress-bar").style.width = "0%";
        day.querySelector(".progress-text").innerText = "0%";
    });
});


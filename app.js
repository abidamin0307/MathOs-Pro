/**
 * MathOS Pro Full Suite Engine
 */

const tools = {
    matric: [
        { name: "Quadratic Solver", icon: "fa-square-root-variable", desc: "Solve ax² + bx + c = 0", formula: "x = [-b ± √(b²-4ac)] / 2a" },
        { name: "Ratio Calc", icon: "fa-percent", desc: "Calculate ratios & proportions", formula: "a:b = c:d" },
        { name: "Circle Area", icon: "fa-circle", desc: "Find Area and Circumference", formula: "A = πr²" },
        { name: "Percentage", icon: "fa-arrow-up-right-dots", desc: "Calculate % change and value", formula: "(v2-v1)/v1 * 100" },
        { name: "Linear Equation", icon: "fa-grip-lines", desc: "Solve single variable algebra", formula: "ax + b = 0" },
        { name: "Basic Trig", icon: "fa-chart-line", desc: "Sin, Cos, Tan calculator", formula: "sin(θ)" }
    ],
    inter: [
        { name: "Derivative Calc", icon: "fa-wave-square", desc: "Find rate of change d/dx", formula: "f'(x)" },
        { name: "Integral Solver", icon: "fa-sum", desc: "Solve definite integrals", formula: "∫ f(x) dx" },
        { name: "Complex Math", icon: "fa-i-cursor", desc: "Imaginary number arithmetic", formula: "a + bi" },
        { name: "Logarithms", icon: "fa-exponent", desc: "Natural and Base-10 logs", formula: "log_b(x)" },
        { name: "Limits Solver", icon: "fa-arrows-to-line", desc: "Evaluate function limits", formula: "lim x→a" },
        { name: "Trig Identities", icon: "fa-vector-square", desc: "Simplify trigonometry", formula: "sin²x + cos²x = 1" }
    ],
    engg: [
        { name: "Matrix Multiplier", icon: "fa-table-cells", desc: "Multiply A x B matrices", formula: "[A][B]" },
        { name: "3x3 Determinant", icon: "fa-border-all", desc: "Find Matrix Determinant", formula: "|A|" },
        { name: "Inverse Matrix", icon: "fa-rotate-left", desc: "Find Matrix Inverse A⁻¹", formula: "A⁻¹" },
        { name: "Vector Dot", icon: "fa-arrows-up-down-left-right", desc: "Calculate Dot Product", formula: "A · B" },
        { name: "Cross Product", icon: "fa-arrows-spin", desc: "Calculate Cross Product", formula: "A × B" },
        { name: "Cramer's Rule", icon: "fa-list-check", desc: "Solve linear systems", formula: "det(Ax)/det(A)" }
    ]
};

const display = document.getElementById('main-display');
const preview = document.getElementById('calc-preview');

function loadGrid(category, element) {
    const grid = document.getElementById('tool-grid');
    const title = document.getElementById('section-title');
    document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
    if(element) element.classList.add('active');
    title.innerText = category.charAt(0).toUpperCase() + category.slice(1) + " Engineering Suite";
    grid.innerHTML = "";
    tools[category].forEach(tool => {
        const card = document.createElement('div');
        card.className = 'tool-card';
        card.onclick = () => openTool(tool);
        card.innerHTML = `<div class="tool-icon-wrapper"><i class="fas ${tool.icon}"></i></div><h3>${tool.name}</h3><p>${tool.desc}</p><span class="formula-preview">${tool.formula}</span>`;
        grid.appendChild(card);
    });
}

function openTool(tool) {
    document.getElementById('modal-title').innerText = tool.name;
    document.getElementById('tool-modal').style.display = "flex";
    display.focus();
}

function closeTool() {
    document.getElementById('tool-modal').style.display = "none";
    clearDisplay();
}

function press(val) {
    display.value += val;
    try {
        if(display.value) preview.innerText = "= " + math.format(math.evaluate(display.value), { precision: 10 });
    } catch(e) { preview.innerText = "..."; }
}

function solve() {
    try {
        const res = math.evaluate(display.value);
        const final = math.format(res, { precision: 10 });
        saveToHistory(display.value, final);
        display.value = final;
        preview.innerText = "";
    } catch(e) { alert("Check Math Syntax!"); }
}

function clearDisplay() { display.value = ""; preview.innerText = ""; }
function backspace() { display.value = display.value.slice(0, -1); }

function saveToHistory(exp, res) {
    let history = JSON.parse(localStorage.getItem('mathos_history')) || [];
    history.unshift({ exp, res, t: new Date().toLocaleTimeString() });
    localStorage.setItem('mathos_history', JSON.stringify(history.slice(0, 10)));
}

function toggleHistory() {
    const p = document.getElementById('history-panel');
    p.classList.toggle('active');
    const list = document.getElementById('history-list');
    let h = JSON.parse(localStorage.getItem('mathos_history')) || [];
    list.innerHTML = h.map(i => `<div class="history-item"><b>${i.exp}</b> = ${i.res}</div>`).join('');
}

function clearHistory() { localStorage.removeItem('mathos_history'); toggleHistory(); }
function copyResult() { navigator.clipboard.writeText(display.value); alert("Copied!"); }

window.onload = () => loadGrid('matric', document.querySelector('.nav-item.active'));

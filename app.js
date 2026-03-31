/**
 * MathOS Pro - Full Tool Suite Engine
 * Contains all Matric, Inter, and Engineering modules
 */

// 1. DATABASE OF ALL TOOLS
const tools = {
    matric: [
        { name: "Quadratic Solver", icon: "fa-square-root-variable", desc: "Solve ax² + bx + c = 0 with steps.", formula: "x = [-b ± √(b²-4ac)] / 2a" },
        { name: "Ratio Calculator", icon: "fa-percent", desc: "Calculate proportions and missing ratio values.", formula: "a:b = c:d" },
        { name: "Basic Trigonometry", icon: "fa-chart-line", desc: "Calculate Sin, Cos, and Tan for any angle.", formula: "SOH CAH TOA" },
        { name: "Circle Properties", icon: "fa-circle", desc: "Find Area, Circumference, and Diameter.", formula: "A = πr²" },
        { name: "Linear Equations", icon: "fa-grip-lines", desc: "Solve for x in linear algebraic expressions.", formula: "y = mx + b" },
        { name: "Percentage Tool", icon: "fa-arrow-up-right-dots", desc: "Calculate percentage increase or decrease.", formula: "% Change" }
    ],
    inter: [
        { name: "Derivative Calc", icon: "fa-wave-square", desc: "Find the derivative d/dx of functions.", formula: "f'(x)" },
        { name: "Integral Solver", icon: "fa-sum", desc: "Solve definite and indefinite integrals.", formula: "∫ f(x) dx" },
        { name: "Complex Numbers", icon: "fa-i-cursor", desc: "Arithmetic with imaginary numbers (i).", formula: "a + bi" },
        { name: "Logarithms", icon: "fa-exponent", desc: "Solve Natural (ln) and Base-10 logs.", formula: "log_b(x)" },
        { name: "Limits Solver", icon: "fa-arrows-to-line", desc: "Evaluate limits as x approaches a value.", formula: "lim x→a" },
        { name: "Trig Identities", icon: "fa-vector-square", desc: "Simplify complex trigonometric identities.", formula: "sin²x + cos²x = 1" }
    ],
    engg: [
        { name: "Matrix Multiplier", icon: "fa-table-cells", desc: "Multiply A x B matrices of any size.", formula: "[A][B] = [C]" },
        { name: "3x3 Determinant", icon: "fa-border-all", desc: "Calculate the determinant of a 3x3 matrix.", formula: "|A|" },
        { name: "Inverse Matrix", icon: "fa-rotate-left", desc: "Find the inverse A⁻¹ of a square matrix.", formula: "A⁻¹" },
        { name: "Vector Dot Product", icon: "fa-arrows-up-down-left-right", desc: "Calculate the dot product of two vectors.", formula: "A · B" },
        { name: "Vector Cross Product", icon: "fa-arrows-spin", desc: "Find the cross product (A x B).", formula: "A × B" },
        { name: "Cramer's Rule", icon: "fa-list-check", desc: "Solve systems of equations using matrices.", formula: "x = det(Ax)/det(A)" }
    ]
};

// 2. CORE GRID RENDERER
function loadGrid(category, element) {
    const grid = document.getElementById('tool-grid');
    const title = document.getElementById('section-title');
    
    // UI Update
    document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
    if(element) element.classList.add('active');

    title.innerText = category.charAt(0).toUpperCase() + category.slice(1) + " Suite";
    grid.innerHTML = "";

    // Generate Cards
    tools[category].forEach(tool => {
        const card = document.createElement('div');
        card.className = 'tool-card';
        card.onclick = () => openTool(tool);
        card.innerHTML = `
            <div class="tool-icon-wrapper"><i class="fas ${tool.icon}"></i></div>
            <h3>${tool.name}</h3>
            <p>${tool.desc}</p>
            <span class="formula-preview">${tool.formula}</span>
        `;
        grid.appendChild(card);
    });
}

// 3. CALCULATOR LOGIC
const display = document.getElementById('main-display');
const preview = document.getElementById('calc-preview');

function openTool(tool) {
    document.getElementById('modal-title').innerText = tool.name;
    document.getElementById('tool-modal').style.display = "flex";
    display.placeholder = "Enter expression...";
    display.focus();
}

function closeTool() {
    document.getElementById('tool-modal').style.display = "none";
    clearDisplay();
}

function press(val) {
    display.value += val;
    try {
        if(display.value) {
            const res = math.evaluate(display.value);
            preview.innerText = "= " + math.format(res, { precision: 10 });
        }
    } catch(e) { preview.innerText = "..."; }
}

function clearDisplay() {
    display.value = "";
    preview.innerText = "";
}

function backspace() {
    display.value = display.value.slice(0, -1);
}

function solve() {
    try {
        const res = math.evaluate(display.value);
        const final = math.format(res, { precision: 10 });
        saveToHistory(display.value, final);
        display.value = final;
        preview.innerText = "";
    } catch(e) {
        alert("Check your math syntax!");
    }
}

// 4. HISTORY & UTILS
function saveToHistory(exp, res) {
    let history = JSON.parse(localStorage.getItem('mathos_history')) || [];
    history.unshift({ exp, res, date: new Date().toLocaleTimeString() });
    localStorage.setItem('mathos_history', JSON.stringify(history.slice(0, 10)));
}

function toggleHistory() {
    const panel = document.getElementById('history-panel');
    panel.classList.toggle('active');
    const list = document.getElementById('history-list');
    let history = JSON.parse(localStorage.getItem('mathos_history')) || [];
    list.innerHTML = history.map(h => `<div class="history-item"><b>${h.exp}</b><br>= ${h.res}</div>`).join('');
}

function clearHistory() {
    localStorage.removeItem('mathos_history');
    toggleHistory();
}

function copyResult() {
    navigator.clipboard.writeText(display.value);
    alert("Result copied!");
}

// Initial Load
window.onload = () => loadGrid('matric', document.querySelector('.nav-item.active'));

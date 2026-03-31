/**
 * MathOS Pro - Ultra-Suite Engine
 * 42 Specialized Tools for Matric, Inter, and Engineering
 */

const tools = {
    matric: [
        { name: "Quadratic Solver", icon: "fa-square-root-variable", desc: "Solve ax² + bx + c = 0", formula: "x = [-b ± √(b²-4ac)] / 2a" },
        { name: "Ratio & Proportion", icon: "fa-percent", desc: "Find missing ratio values", formula: "a:b = c:d" },
        { name: "Circle Properties", icon: "fa-circle", desc: "Area and Circumference", formula: "A = πr²" },
        { name: "Linear Equations", icon: "fa-grip-lines", desc: "Solve for X in ax + b = 0", formula: "x = -b/a" },
        { name: "Percentage Calc", icon: "fa-arrow-up-right-dots", desc: "Calculate % change/value", formula: "(part/total)*100" },
        { name: "Pythagoras", icon: "fa-triangle-exclamation", desc: "Right-angle triangle sides", formula: "a² + b² = c²" },
        { name: "Area of Triangle", icon: "fa-draw-polygon", desc: "Using base and height", formula: "½(b × h)" },
        { name: "Volume of Sphere", icon: "fa-globe", desc: "Calculate spherical volume", formula: "4/3πr³" },
        { name: "Surface Area", icon: "fa-cube", desc: "Total area of a cube/box", formula: "6a²" },
        { name: "LCM & HCF", icon: "fa-list-ol", desc: "Lowest Common Multiples", formula: "Factor Analysis" },
        { name: "Mean/Average", icon: "fa-divide", desc: "Arithmetic mean of data", formula: "Σx / n" },
        { name: "Simple Interest", icon: "fa-hand-holding-dollar", desc: "Basic financial growth", formula: "P × R × T / 100" },
        { name: "Weight Converter", icon: "fa-weight-hanging", desc: "Metric to Imperial units", formula: "kg ↔ lbs" },
        { name: "Time Speed Dist", icon: "fa-gauge-high", desc: "Physics motion basics", formula: "d = s × t" }
    ],
    inter: [
        { name: "Derivative Calc", icon: "fa-wave-square", desc: "Rate of change d/dx", formula: "f'(x)" },
        { name: "Integral Solver", icon: "fa-sum", desc: "Definite/Indefinite integrals", formula: "∫ f(x) dx" },
        { name: "Complex Math", icon: "fa-i-cursor", desc: "Imaginary number arithmetic", formula: "a + bi" },
        { name: "Logarithms", icon: "fa-exponent", desc: "Natural and Base-10 logs", formula: "log_b(x)" },
        { name: "Limits Solver", icon: "fa-arrows-to-line", desc: "Function boundary values", formula: "lim x→a" },
        { name: "Trig Identities", icon: "fa-vector-square", desc: "Simplify trigonometric terms", formula: "sin²x + cos²x = 1" },
        { name: "Permutations", icon: "fa-shuffle", desc: "Ordered arrangements nPr", formula: "n! / (n-r)!" },
        { name: "Combinations", icon: "fa-layer-group", desc: "Unordered selections nCr", formula: "n! / r!(n-r)!" },
        { name: "Matrices 2x2", icon: "fa-table-cells-large", desc: "Basic matrix operations", formula: "[A] + [B]" },
        { name: "Binomial Expand", icon: "fa-arrow-up-z-a", desc: "Expand (a+b)ⁿ series", formula: "Pascal's Triangle" },
        { name: "Vector Mag", icon: "fa-location-arrow", desc: "Magnitude of 2D/3D vectors", formula: "√(x² + y²)" },
        { name: "Partial Fraction", icon: "fa-scissors", desc: "Decompose complex fractions", formula: "A/(x-a) + B/(x-b)" },
        { name: "Seq & Series", icon: "fa-ellipsis", desc: "Arithmetic/Geometric progression", formula: "a + (n-1)d" },
        { name: "Hyperbolic Funct", icon: "fa-italic", desc: "Sinh, Cosh, Tanh solvers", formula: "sinh(x)" }
    ],
    engg: [
        { name: "Matrix Multiplier", icon: "fa-table-cells", desc: "Multiply A x B matrices", formula: "[A][B]" },
        { name: "3x3 Determinant", icon: "fa-border-all", desc: "Find Matrix Determinant", formula: "|A|" },
        { name: "Inverse Matrix", icon: "fa-rotate-left", desc: "Matrix Inverse A⁻¹", formula: "adj(A)/det(A)" },
        { name: "Vector Dot", icon: "fa-arrows-up-down-left-right", desc: "Calculate Dot Product", formula: "A · B" },
        { name: "Cross Product", icon: "fa-arrows-spin", desc: "Calculate Cross Product", formula: "A × B" },
        { name: "Cramer's Rule", icon: "fa-list-check", desc: "Solve systems of equations", formula: "det(Ax)/det(A)" },
        { name: "Eigenvalues", icon: "fa-dna", desc: "Find characteristic roots", formula: "|A - λI| = 0" },
        { name: "Laplace Trans", icon: "fa-bezier-curve", desc: "Time to Frequency domain", formula: "L{f(t)}" },
        { name: "Fourier Series", icon: "fa-braille", desc: "Periodic signal analysis", formula: "Σ(an cos + bn sin)" },
        { name: "Stat Variance", icon: "fa-chart-area", desc: "Standard deviation/variance", formula: "σ² = Σ(x-μ)²/n" },
        { name: "Ohm's Law", icon: "fa-bolt", desc: "Voltage, Current, Resistance", formula: "V = I × R" },
        { name: "Fluid Pressure", icon: "fa-droplet", desc: "Hydrostatic pressure calc", formula: "P = ρgh" },
        { name: "Heat Transfer", icon: "fa-fire-flame-curved", desc: "Conductivity calculations", formula: "Q = mcΔT" },
        { name: "Boolean Logic", icon: "fa-toggle-on", desc: "AND, OR, NOT, XOR gates", formula: "A ∧ B" }
    ]
};

const display = document.getElementById('main-display');
const preview = document.getElementById('calc-preview');

function loadGrid(category, element) {
    const grid = document.getElementById('tool-grid');
    const title = document.getElementById('section-title');
    
    document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
    if(element) element.classList.add('active');

    title.innerText = category.charAt(0).toUpperCase() + category.slice(1) + " Suite";
    grid.innerHTML = "";

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

function openTool(tool) {
    document.getElementById('modal-title').innerText = tool.name;
    document.getElementById('tool-modal').style.display = "flex";
    display.placeholder = "Expression: " + tool.formula;
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

function solve() {
    try {
        const res = math.evaluate(display.value);
        const final = math.format(res, { precision: 10 });
        saveToHistory(display.value, final);
        display.value = final;
        preview.innerText = "";
    } catch(e) {
        alert("Syntax Error. Check your input!");
    }
}

function clearDisplay() { display.value = ""; preview.innerText = ""; }
function backspace() { display.value = display.value.slice(0, -1); }

function saveToHistory(exp, res) {
    let history = JSON.parse(localStorage.getItem('mathos_history')) || [];
    history.unshift({ exp, res, t: new Date().toLocaleTimeString() });
    localStorage.setItem('mathos_history', JSON.stringify(history.slice(0, 15)));
}

function toggleHistory() {
    const panel = document.getElementById('history-panel');
    panel.classList.toggle('active');
    const list = document.getElementById('history-list');
    let history = JSON.parse(localStorage.getItem('mathos_history')) || [];
    list.innerHTML = history.length ? history.map(h => `
        <div class="history-item">
            <small>${h.t}</small><br>
            <b>${h.exp}</b> = ${h.res}
        </div>`).join('') : '<p style="color:#666;text-align:center">No records yet</p>';
}

function clearHistory() {
    localStorage.removeItem('mathos_history');
    toggleHistory();
}

function copyResult() {
    if(!display.value) return;
    navigator.clipboard.writeText(display.value);
    const btn = document.querySelector('.copy-btn');
    btn.innerHTML = '<i class="fas fa-check"></i> Copied!';
    setTimeout(() => btn.innerHTML = '<i class="far fa-copy"></i> Copy Result', 2000);
}

// Ensure the grid loads Matric by default on startup
document.addEventListener('DOMContentLoaded', () => {
    loadGrid('matric', document.querySelector('.nav-item.active'));
});

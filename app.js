/**
 * MathOS Pro - High Performance Multi-Tool Engine
 * Balanced Bright Theme Version
 */

const tools = {
    matric: [
        { name: "Quadratic Solver", icon: "fa-square-root-variable", desc: "Solve equations like ax² + bx + c = 0", formula: "x = [-b ± √(b²-4ac)] / 2a" },
        { name: "Ratio & Proportion", icon: "fa-percent", desc: "Calculate missing ratio values easily", formula: "a:b = c:d" },
        { name: "Circle Calculator", icon: "fa-circle", desc: "Area, Circumference, and Diameter", formula: "A = πr²" },
        { name: "Percentage", icon: "fa-arrow-up-right-dots", desc: "Calculate value from percentage", formula: "(part/total)*100" },
        { name: "Pythagoras", icon: "fa-triangle-exclamation", desc: "Calculate hypotenuse of a triangle", formula: "a² + b² = c²" },
        { name: "Mean / Average", icon: "fa-divide", desc: "Calculate arithmetic mean of sets", formula: "Σx / n" },
        { name: "Triangle Area", icon: "fa-draw-polygon", desc: "Calculate area using base/height", formula: "0.5 * b * h" },
        { name: "Sphere Volume", icon: "fa-globe", desc: "Calculate volume of a sphere", formula: "4/3 * π * r³" },
        { name: "Simple Interest", icon: "fa-hand-holding-dollar", desc: "Calculate loan/saving interest", formula: "P*R*T / 100" },
        { name: "LCM & HCF", icon: "fa-list-ol", desc: "Lowest common multiple finder", formula: "Factor List" },
        { name: "Cylinder Area", icon: "fa-database", desc: "Surface area of a cylinder", formula: "2πrh + 2πr²" },
        { name: "Discount Calc", icon: "fa-tags", desc: "Find price after percentage discount", formula: "Price - %" },
        { name: "Unit Converter", icon: "fa-weight-hanging", desc: "Metric to imperial weight/length", formula: "Unit Switch" },
        { name: "Motion Physics", icon: "fa-gauge-high", desc: "Calculate speed, time, or distance", formula: "d = s * t" }
    ],
    inter: [
        { name: "Derivative Solver", icon: "fa-wave-square", desc: "Find rates of change d/dx", formula: "f'(x)" },
        { name: "Integral Solver", icon: "fa-sum", desc: "Calculate definite integrals", formula: "∫ f(x) dx" },
        { name: "Complex Math", icon: "fa-i-cursor", desc: "Arithmetic with imaginary numbers", formula: "a + bi" },
        { name: "Logarithms", icon: "fa-exponent", desc: "Natural (ln) and Base-10 logs", formula: "log_b(x)" },
        { name: "Limits Solver", icon: "fa-arrows-to-line", desc: "Analyze boundary behavior", formula: "lim x→a" },
        { name: "Permutations", icon: "fa-shuffle", desc: "Ordered arrangements nPr", formula: "n! / (n-r)!" },
        { name: "Combinations", icon: "fa-layer-group", desc: "Selection groups nCr", formula: "n! / r!(n-r)!" },
        { name: "Matrices 2x2", icon: "fa-table-cells-large", desc: "Basic matrix operations", formula: "[A] + [B]" },
        { name: "Sequence Solver", icon: "fa-ellipsis", desc: "Arithmetic and Geometric series", formula: "a + (n-1)d" },
        { name: "Trig Identities", icon: "fa-vector-square", desc: "Simplify trig expressions", formula: "sin²x + cos²x = 1" },
        { name: "Binomial Expansion", icon: "fa-arrow-up-z-a", desc: "Expand (a+b)ⁿ series", formula: "Pascals Logic" },
        { name: "Vector Magnitude", icon: "fa-location-arrow", desc: "Find magnitude of 3D vectors", formula: "√(x²+y²+z²)" },
        { name: "Hyperbolic Funct", icon: "fa-italic", desc: "Solve Sinh, Cosh, and Tanh", formula: "sinh(x)" },
        { name: "Partial Fraction", icon: "fa-scissors", desc: "Decompose complex fractions", formula: "A/(x-a) + B" }
    ],
    engg: [
        { name: "Matrix Multiplier", icon: "fa-table-cells", desc: "Multiply A x B matrices", formula: "[A] x [B]" },
        { name: "3x3 Determinant", icon: "fa-border-all", desc: "Find Determinant of 3x3", formula: "|A|" },
        { name: "Inverse Matrix", icon: "fa-rotate-left", desc: "Find Matrix Inverse A⁻¹", formula: "adj(A)/det(A)" },
        { name: "Vector Dot", icon: "fa-arrows-up-down-left-right", desc: "Calculate dot product A·B", formula: "A·B = |A||B|cosθ" },
        { name: "Cross Product", icon: "fa-arrows-spin", desc: "Calculate cross product AxB", formula: "A x B" },
        { name: "Cramer's Rule", icon: "fa-list-check", desc: "Solve linear systems", formula: "det(Ax)/det(A)" },
        { name: "Eigenvalues", icon: "fa-dna", desc: "Characteristic roots finder", formula: "|A-λI|=0" },
        { name: "Laplace Trans", icon: "fa-bezier-curve", desc: "Time to frequency conversion", formula: "L{f(t)}" },
        { name: "Fourier Series", icon: "fa-braille", desc: "Periodic signal analysis", formula: "Σ(an+bn)" },
        { name: "Variance Solver", icon: "fa-chart-area", desc: "Standard deviation/variance", formula: "σ² = Σ(x-μ)²/n" },
        { name: "Ohm's Law", icon: "fa-bolt", desc: "Voltage, current, resistance", formula: "V = I * R" },
        { name: "Fluid Pressure", icon: "fa-droplet", desc: "Hydrostatic pressure depth", formula: "P = ρgh" },
        { name: "Heat Transfer", icon: "fa-fire-flame-curved", desc: "Energy conductivity calc", formula: "Q = mcΔT" },
        { name: "Boolean Algebra", icon: "fa-toggle-on", desc: "Logic gates AND, OR, XOR", formula: "A ∧ B" }
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
    display.placeholder = "Example: " + tool.formula;
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
        const formatted = math.format(res, { precision: 10 });
        saveToHistory(display.value, formatted);
        display.value = formatted;
        preview.innerText = "";
    } catch(e) { alert("Check math syntax!"); }
}

function clearDisplay() { display.value = ""; preview.innerText = ""; }
function backspace() { display.value = display.value.slice(0, -1); }

function saveToHistory(exp, res) {
    let hist = JSON.parse(localStorage.getItem('mathos_history')) || [];
    hist.unshift({ exp, res, t: new Date().toLocaleTimeString() });
    localStorage.setItem('mathos_history', JSON.stringify(hist.slice(0, 15)));
}

function toggleHistory() {
    const panel = document.getElementById('history-panel');
    panel.classList.toggle('active');
    const list = document.getElementById('history-list');
    let hist = JSON.parse(localStorage.getItem('mathos_history')) || [];
    list.innerHTML = hist.length ? hist.map(h => `<div class="history-item"><b>${h.exp}</b> = ${h.res}</div>`).join('') : '<p>No history</p>';
}

function clearHistory() { localStorage.removeItem('mathos_history'); toggleHistory(); }

function copyResult() {
    if(!display.value) return;
    navigator.clipboard.writeText(display.value);
    alert("Result Copied!");
}

document.addEventListener('DOMContentLoaded', () => loadGrid('matric', document.querySelector('.nav-item.active')));

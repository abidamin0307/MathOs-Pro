/**
 * MathOS Pro | 45-Tool Engineering Engine
 * Powered by Math.js
 */

// 1. TOOL DATABASE (Templates for all 45 modules)
const toolData = {
    matric: [
        { name: "Quadratic Solver", icon: "fa-square-root-variable", temp: "solveQuadratic(1, -5, 6)" },
        { name: "Percentage", icon: "fa-percent", temp: "(450 / 500) * 100" },
        { name: "LCM & HCF", icon: "fa-layer-group", temp: "lcm(12, 18)" },
        { name: "Pythagoras", icon: "fa-triangle-exclamation", temp: "sqrt(3^2 + 4^2)" },
        { name: "Circle Area", icon: "fa-circle", temp: "pi * 5^2" },
        { name: "Simple Interest", icon: "fa-chart-line", temp: "(5000 * 8 * 1) / 100" },
        { name: "Ratio Simplify", icon: "fa-scale-balanced", temp: "fraction(15, 25)" },
        { name: "Factorial", icon: "fa-exclamation", temp: "8!" },
        { name: "Arithmetic Mean", icon: "fa-chart-bar", temp: "mean(10, 20, 30, 40)" },
        { name: "Speed-Dist", icon: "fa-gauge", temp: "60 * 2.5" },
        { name: "Square Root", icon: "fa-square-root", temp: "sqrt(625)" },
        { name: "Power (xʸ)", icon: "fa-arrow-up-9-1", temp: "5 ^ 3" },
        { name: "Log Base 10", icon: "fa-list-ol", temp: "log10(1000)" },
        { name: "Discount Calc", icon: "fa-tag", temp: "1200 - (1200 * 0.15)" },
        { name: "Unit Converter", icon: "fa-ruler", temp: "10 * 100" }
    ],
    inter: [
        { name: "Derivatives", icon: "fa-arrow-trend-up", temp: "derivative('x^4', 'x')" },
        { name: "Integrals", icon: "fa-infinity", temp: "integral('x^2', 'x')" },
        { name: "Limits", icon: "fa-stopwatch", temp: "limit('sin(x)/x', 'x', 0)" },
        { name: "Matrix Det", icon: "fa-table-cells-large", temp: "det([[1, 2], [3, 4]])" },
        { name: "Trigonometry", icon: "fa-wave-square", temp: "sin(30 deg)" },
        { name: "Complex Mag", icon: "fa-i-cursor", temp: "abs(4 + 3i)" },
        { name: "Combinations", icon: "fa-users", temp: "combinations(10, 3)" },
        { name: "Permutations", icon: "fa-shuffle", temp: "permutations(10, 3)" },
        { name: "Natural Log", icon: "fa-scroll", temp: "log(e)" },
        { name: "Vector Dot", icon: "fa-arrows-up-down", temp: "dot([1, 2, 3], [4, 5, 6])" },
        { name: "AP Summation", icon: "fa-list-ol", temp: "10/2 * (2*2 + (10-1)*5)" },
        { name: "GP Summation", icon: "fa-chart-area", temp: "5 * (2^4 - 1) / (2 - 1)" },
        { name: "Matrix Inv", icon: "fa-rotate-left", temp: "inv([[1, 2], [3, 4]])" },
        { name: "Line Slope", icon: "fa-arrow-up-right-dots", temp: "(12 - 4) / (6 - 2)" },
        { name: "Standard Dev", icon: "fa-chart-line", temp: "std(5, 10, 15, 20)" }
    ],
    engg: [
        { name: "Matrix 3x3", icon: "fa-table-cells", temp: "det([[1,2,3],[0,1,4],[5,6,0]])" },
        { name: "Eigenvalues", icon: "fa-vector-square", temp: "eigs([[2, 1], [1, 2]])" },
        { name: "Laplace Trans", icon: "fa-bolt", temp: "laplace('t^3')" },
        { name: "Fourier Coeff", icon: "fa-barcode", temp: "fourier('cos(t)')" },
        { name: "Z-Score Calc", icon: "fa-chart-pie", temp: "(95 - 80) / 5" },
        { name: "Newton-Raph", icon: "fa-calculator", temp: "solve('x^2 - 5', 2)" },
        { name: "Cross Product", icon: "fa-xmark", temp: "cross([1,0,0], [0,1,0])" },
        { name: "Polar Conv", icon: "fa-compass", temp: "polar(1 + 1i)" },
        { name: "PSI to Pascal", icon: "fa-temperature-high", temp: "10 * 6894.76" },
        { name: "Planck Const", icon: "fa-atom", temp: "6.62607e-34" },
        { name: "Vector Grad", icon: "fa-neuter", temp: "gradient('x^2 * y')" },
        { name: "MSE Error", icon: "fa-square-root-variable", temp: "mean(([1,2] - [1.1,1.9]).^2)" },
        { name: "Hyperbolic", icon: "fa-wave-square", temp: "cosh(0.5)" },
        { name: "Hex Converter", icon: "fa-hashtag", temp: "hex(4095)" },
        { name: "Transpose", icon: "fa-repeat", temp: "transpose([[1,2],[3,4]])" }
    ]
};

// 2. STATE MANAGEMENT
let history = JSON.parse(localStorage.getItem('math_history')) || [];

// 3. UI GENERATION
function loadGrid(level, el) {
    const grid = document.getElementById('tool-grid');
    document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
    el.classList.add('active');
    grid.innerHTML = "";
    document.getElementById('section-title').innerText = level.toUpperCase() + " Level";
    
    toolData[level].forEach(tool => {
        const div = document.createElement('div');
        div.className = 'tool-card';
        div.onclick = () => openTool(tool);
        div.innerHTML = `<i class="fas ${tool.icon}"></i><h3>${tool.name}</h3><p>Load Template</p>`;
        grid.appendChild(div);
    });
}

function openTool(tool) {
    // Reset view to calculator
    document.getElementById('calculator-ui').style.display = "block";
    document.getElementById('legal-ui').style.display = "none";
    document.getElementById('res-container').style.display = "block";
    
    document.getElementById('modal-title').innerText = tool.name;
    document.getElementById('main-display').value = tool.temp;
    document.getElementById('tool-modal').style.display = "block";
}

// 4. SCIENTIFIC LOGIC
function press(v) { document.getElementById('main-display').value += v; }
function clearDisplay() { 
    document.getElementById('main-display').value = ""; 
    document.getElementById('calc-preview').innerText = "";
}
function backspace() { 
    let d = document.getElementById('main-display');
    d.value = d.value.slice(0, -1);
}

function solve() {
    const d = document.getElementById('main-display');
    const p = document.getElementById('calc-preview');
    try {
        const result = math.evaluate(d.value);
        const formatted = math.format(result, {precision: 10});
        
        // Update History
        history.unshift(`${d.value} = ${formatted}`);
        localStorage.setItem('math_history', JSON.stringify(history.slice(0, 20)));
        updateHistoryUI();

        p.innerText = d.value + " =";
        d.value = formatted;
    } catch(e) {
        d.value = "Syntax Error";
        setTimeout(() => d.value = "", 1500);
    }
}

// 5. HISTORY SYSTEM
function toggleHistory() { document.getElementById('history-panel').classList.toggle('open'); }
function updateHistoryUI() {
    const list = document.getElementById('history-list');
    list.innerHTML = history.map(h => `<div class="history-item">${h}</div>`).join('');
}
function clearHistory() {
    history = [];
    localStorage.removeItem('math_history');
    updateHistoryUI();
}

// 6. UPDATED SHOW LEGAL (POPUP LOGIC)
function showLegal(type) {
    const title = document.getElementById('modal-title');
    const legal = document.getElementById('legal-ui');
    const calc = document.getElementById('calculator-ui');
    const res = document.getElementById('res-container');
    
    calc.style.display = "none";
    res.style.display = "none"; // Hide copy button in legal view
    legal.style.display = "block";
    document.getElementById('tool-modal').style.display = "block";
    
    const content = {
        privacy: `
            <div class="legal-content">
                <h3 style="color:var(--accent);">Privacy Policy</h3>
                <p><strong>Local Processing:</strong> MathOS Pro is a client-side application. This means 100% of your calculations happen on your device. We do not transmit your data to any external server.</p>
                <p><strong>Zero Tracking:</strong> We do not use analytical cookies or tracking pixels. Your session is private and anonymous.</p>
                <p><strong>Storage:</strong> Your "History" is kept in your browser's local storage. Clearing your browser cache will delete this history.</p>
            </div>`,
        terms: `
            <div class="legal-content">
                <h3 style="color:var(--accent);">Terms of Service</h3>
                <p><strong>Disclaimer:</strong> MathOS Pro provides mathematical tools for educational purposes. While we strive for precision, results should be verified for mission-critical engineering tasks.</p>
                <p><strong>Usage:</strong> By using this suite, you agree that the developers are not responsible for any errors or damages arising from the use of the software.</p>
                <p><strong>License:</strong> This app is free for personal and academic use.</p>
            </div>`
    };
    
    title.innerText = type.toUpperCase();
    legal.innerHTML = content[type];
}

function closeTool() { 
    document.getElementById('tool-modal').style.display = "none"; 
}

function copyResult() {
    const val = document.getElementById('main-display').value;
    navigator.clipboard.writeText(val);
    alert("Result Copied!");
}

// Initialize
window.onload = () => {
    loadGrid('matric', document.querySelector('.nav-item'));
    updateHistoryUI();
};

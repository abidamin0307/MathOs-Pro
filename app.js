// Database of 45 Tools with Scientific Templates
const toolData = {
    matric: [
        { name: "Quadratic", icon: "fa-square-root-variable", temp: "solveQuadratic(1, -5, 6)" },
        { name: "Percentage", icon: "fa-percent", temp: "(450 / 500) * 100" },
        { name: "LCM-HCF", icon: "fa-layer-group", temp: "lcm(12, 18)" },
        { name: "Pythagoras", icon: "fa-triangle-exclamation", temp: "sqrt(3^2 + 4^2)" },
        { name: "Circle", icon: "fa-circle", temp: "pi * 7^2" },
        { name: "Interest", icon: "fa-chart-line", temp: "(5000 * 8 * 1) / 100" },
        { name: "Ratio", icon: "fa-scale-balanced", temp: "fraction(15, 25)" },
        { name: "Factorial", icon: "fa-exclamation", temp: "8!" },
        { name: "Mean", icon: "fa-chart-bar", temp: "mean(10, 20, 30, 40)" },
        { name: "Distance", icon: "fa-gauge", temp: "60 * 2.5" },
        { name: "Root", icon: "fa-square-root", temp: "sqrt(625)" },
        { name: "Power", icon: "fa-arrow-up-9-1", temp: "5 ^ 3" },
        { name: "Log 10", icon: "fa-list-ol", temp: "log10(1000)" },
        { name: "Discount", icon: "fa-tag", temp: "1200 - (1200 * 0.15)" },
        { name: "Units", icon: "fa-ruler", temp: "10 * 100" }
    ],
    inter: [
        { name: "Derivs", icon: "fa-arrow-trend-up", temp: "derivative('x^4', 'x')" },
        { name: "Integrals", icon: "fa-infinity", temp: "integral('x^2', 'x')" },
        { name: "Limit", icon: "fa-stopwatch", temp: "limit('sin(x)/x', 'x', 0)" },
        { name: "Matrix Det", icon: "fa-table-cells-large", temp: "det([[1, 2], [3, 4]])" },
        { name: "Trig", icon: "fa-wave-square", temp: "sin(30 deg)" },
        { name: "Complex", icon: "fa-i-cursor", temp: "abs(4 + 3i)" },
        { name: "nCr", icon: "fa-users", temp: "combinations(10, 3)" },
        { name: "nPr", icon: "fa-shuffle", temp: "permutations(10, 3)" },
        { name: "Log Nat", icon: "fa-scroll", temp: "log(e)" },
        { name: "Dot Prod", icon: "fa-arrows-up-down", temp: "dot([1, 2, 3], [4, 5, 6])" },
        { name: "AP Sum", icon: "fa-list-ol", temp: "10/2 * (2*2 + (10-1)*5)" },
        { name: "GP Sum", icon: "fa-chart-area", temp: "5 * (2^4 - 1) / (2 - 1)" },
        { name: "Inverse", icon: "fa-rotate-left", temp: "inv([[1, 2], [3, 4]])" },
        { name: "Slope", icon: "fa-arrow-up-right-dots", temp: "(12 - 4) / (6 - 2)" },
        { name: "Std Dev", icon: "fa-chart-line", temp: "std(5, 10, 15, 20)" }
    ],
    engg: [
        { name: "Det 3x3", icon: "fa-table-cells", temp: "det([[1,2,3],[0,1,4],[5,6,0]])" },
        { name: "Eigen", icon: "fa-vector-square", temp: "eigs([[2, 1], [1, 2]])" },
        { name: "Laplace", icon: "fa-bolt", temp: "laplace('t^3')" },
        { name: "Fourier", icon: "fa-barcode", temp: "fourier('cos(t)')" },
        { name: "Z-Score", icon: "fa-chart-pie", temp: "(95 - 80) / 5" },
        { name: "Newton", icon: "fa-calculator", temp: "solve('x^2 - 5', 2)" },
        { name: "Cross", icon: "fa-xmark", temp: "cross([1,0,0], [0,1,0])" },
        { name: "Polar", icon: "fa-compass", temp: "polar(1 + 1i)" },
        { name: "Pressure", icon: "fa-temperature-high", temp: "10 * 6894.76" },
        { name: "Planck", icon: "fa-atom", temp: "6.62607e-34" },
        { name: "Gradient", icon: "fa-neuter", temp: "gradient('x^2 * y')" },
        { name: "MSE", icon: "fa-square-root-variable", temp: "mean(([1,2] - [1.1,1.9]).^2)" },
        { name: "Hyper", icon: "fa-wave-square", temp: "cosh(0.5)" },
        { name: "Hex Conv", icon: "fa-hashtag", temp: "hex(4095)" },
        { name: "Transpose", icon: "fa-repeat", temp: "transpose([[1,2],[3,4]])" }
    ]
};

// State Management
let history = JSON.parse(localStorage.getItem('math_history')) || [];

function loadGrid(level, el) {
    const grid = document.getElementById('tool-grid');
    document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
    el.classList.add('active');
    grid.innerHTML = "";
    document.getElementById('section-title').innerText = level.toUpperCase();
    
    toolData[level].forEach(tool => {
        const div = document.createElement('div');
        div.className = 'tool-card';
        div.onclick = () => openTool(tool);
        div.innerHTML = `<i class="fas ${tool.icon}"></i><h3>${tool.name}</h3><p>Open Template</p>`;
        grid.appendChild(div);
    });
}

function openTool(tool) {
    document.getElementById('modal-title').innerText = tool.name;
    document.getElementById('calculator-ui').style.display = "block";
    document.getElementById('legal-ui').style.display = "none";
    document.getElementById('main-display').value = tool.temp;
    document.getElementById('tool-modal').style.display = "block";
}

// Logic
function press(v) { document.getElementById('main-display').value += v; }
function clearDisplay() { document.getElementById('main-display').value = ""; }
function backspace() { 
    let d = document.getElementById('main-display');
    d.value = d.value.slice(0, -1);
}

function solve() {
    const d = document.getElementById('main-display');
    const p = document.getElementById('calc-preview');
    try {
        const res = math.evaluate(d.value);
        const formatted = math.format(res, {precision: 10});
        
        // Add to History
        history.unshift(`${d.value} = ${formatted}`);
        if(history.length > 20) history.pop();
        localStorage.setItem('math_history', JSON.stringify(history));
        updateHistoryUI();

        p.innerText = d.value + " =";
        d.value = formatted;
    } catch(e) { d.value = "Syntax Error"; }
}

function toggleHistory() { document.getElementById('history-panel').classList.toggle('open'); }

function updateHistoryUI() {
    const list = document.getElementById('history-list');
    list.innerHTML = history.map(item => `<div class="history-item" onclick="useHistory('${item}')">${item}</div>`).join('');
}

function useHistory(item) {
    const val = item.split(' = ')[1];
    document.getElementById('main-display').value = val;
    toggleHistory();
}

function clearHistory() {
    history = [];
    localStorage.removeItem('math_history');
    updateHistoryUI();
}

function showLegal(type) {
    const title = document.getElementById('modal-title');
    const legal = document.getElementById('legal-ui');
    const calc = document.getElementById('calculator-ui');
    calc.style.display = "none";
    legal.style.display = "block";
    document.getElementById('tool-modal').style.display = "block";
    
    const content = {
        about: "MathOS Pro: The 3-tier engineering calculator for students.",
        privacy: "Local processing. No data leaves your browser.",
        terms: "For education only. Verify results for critical safety work.",
        contact: "Email: support@mathospro.com"
    };
    title.innerText = type.toUpperCase();
    legal.innerHTML = `<p>${content[type]}</p>`;
}

function copyResult() {
    navigator.clipboard.writeText(document.getElementById('main-display').value);
    alert("Copied to clipboard!");
}

function closeTool() { document.getElementById('tool-modal').style.display = "none"; }
window.onload = () => {
    loadGrid('matric', document.querySelector('.nav-item'));
    updateHistoryUI();
};

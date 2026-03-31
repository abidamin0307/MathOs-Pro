const toolData = {
    matric: [
        { name: "Quadratic Solver", icon: "fa-square-root-variable", temp: "solveQuadratic(1, -5, 6)" },
        { name: "Percentage", icon: "fa-percent", temp: "(450 / 500) * 100" },
        { name: "LCM & HCF", icon: "fa-layer-group", temp: "lcm(12, 18)" },
        { name: "Pythagoras", icon: "fa-triangle-exclamation", temp: "sqrt(3^2 + 4^2)" },
        { name: "Circle Area", icon: "fa-circle", temp: "pi * 5^2" },
        { name: "Simple Interest", icon: "fa-chart-line", temp: "(1000 * 5 * 2) / 100" },
        { name: "Mean/Avg", icon: "fa-chart-bar", temp: "mean(10, 20, 30, 40)" },
        { name: "Factorial", icon: "fa-exclamation", temp: "5!" },
        { name: "Square Root", icon: "fa-square-root", temp: "sqrt(625)" },
        { name: "Unit: cm to m", icon: "fa-ruler", temp: "150 / 100" },
        { name: "Log Base 10", icon: "fa-list-ol", temp: "log10(100)" },
        { name: "Power", icon: "fa-bolt", temp: "2^10" },
        { name: "Ratio", icon: "fa-scale-balanced", temp: "fraction(15, 25)" },
        { name: "Cube Root", icon: "fa-cube", temp: "cbrt(27)" },
        { name: "Permutation", icon: "fa-shuffle", temp: "permutations(5, 2)" }
    ],
    inter: [
        { name: "Derivatives", icon: "fa-arrow-trend-up", temp: "derivative('x^2 + 2x', 'x')" },
        { name: "Integrals", icon: "fa-infinity", temp: "integral('x^2', 'x')" },
        { name: "Matrix Det", icon: "fa-table-cells-large", temp: "det([[1,2],[3,4]])" },
        { name: "Trigonometry", icon: "fa-wave-square", temp: "sin(45 deg)" },
        { name: "Complex Mag", icon: "fa-i-cursor", temp: "abs(3 + 4i)" },
        { name: "Combinations", icon: "fa-users", temp: "combinations(10, 3)" },
        { name: "Natural Log", icon: "fa-scroll", temp: "log(e)" },
        { name: "Dot Product", icon: "fa-arrows-up-down", temp: "dot([1, 2], [3, 4])" },
        { name: "Cross Product", icon: "fa-xmark", temp: "cross([1, 0, 0], [0, 1, 0])" },
        { name: "Matrix Inv", icon: "fa-rotate-left", temp: "inv([[1, 2], [3, 4]])" },
        { name: "Standard Dev", icon: "fa-chart-line", temp: "std(2, 4, 6, 8)" },
        { name: "Variance", icon: "fa-chart-pie", temp: "var(2, 4, 6, 8)" },
        { name: "Limit", icon: "fa-stopwatch", temp: "limit('sin(x)/x', 'x', 0)" },
        { name: "Vector Mag", icon: "fa-location-arrow", temp: "sqrt(3^2 + 4^2 + 12^2)" },
        { name: "Polar Conv", icon: "fa-compass", temp: "polar(1 + 1i)" }
    ],
    engg: [
        { name: "Matrix 3x3", icon: "fa-table-cells", temp: "det([[1,2,3],[0,1,4],[5,6,0]])" },
        { name: "Eigenvalues", icon: "fa-vector-square", temp: "eigs([[2, 1], [1, 2]])" },
        { name: "Laplace Trans", icon: "fa-bolt", temp: "laplace('t')" },
        { name: "Z-Score", icon: "fa-chart-area", temp: "(95 - 80) / 5" },
        { name: "Hex to Dec", icon: "fa-hashtag", temp: "0xFF" },
        { name: "Transpose", icon: "fa-repeat", temp: "transpose([[1,2],[3,4]])" },
        { name: "Binary Conv", icon: "fa-0", temp: "bin(255)" },
        { name: "Newton-Raph", icon: "fa-calculator", temp: "solve('x^2 - 5', 2)" },
        { name: "Planck Const", icon: "fa-atom", temp: "6.626e-34" },
        { name: "Boltzmann", icon: "fa-fire", temp: "1.38e-23" },
        { name: "Gas Const", icon: "fa-wind", temp: "8.314" },
        { name: "Force (N)", icon: "fa-hand-fist", temp: "10 * 9.8" },
        { name: "Resistance", icon: "fa-omega", temp: "12 / 0.5" },
        { name: "Energy (J)", icon: "fa-sun", temp: "0.5 * 2 * 10^2" },
        { name: "Pressure (Pa)", icon: "fa-down-left-and-up-right-to-center", temp: "100 / 0.05" }
    ]
};

let history = JSON.parse(localStorage.getItem('math_history')) || [];

function loadGrid(level, el) {
    const grid = document.getElementById('tool-grid');
    document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
    el.classList.add('active');
    grid.innerHTML = "";
    document.getElementById('section-title').innerText = level.toUpperCase() + " Tools";
    
    toolData[level].forEach(tool => {
        const div = document.createElement('div');
        div.className = 'tool-card';
        div.onclick = () => openTool(tool);
        div.innerHTML = `<i class="fas ${tool.icon}"></i><h3>${tool.name}</h3><p>Load Template</p>`;
        grid.appendChild(div);
    });
}

function openTool(tool) {
    document.getElementById('calculator-ui').style.display = "block";
    document.getElementById('legal-ui').style.display = "none";
    document.getElementById('res-container').style.display = "block";
    document.getElementById('modal-title').innerText = tool.name;
    document.getElementById('main-display').value = tool.temp;
    document.getElementById('tool-modal').style.display = "block";
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function solve() {
    const d = document.getElementById('main-display');
    try {
        const res = math.evaluate(d.value);
        const formatted = math.format(res, {precision: 10});
        history.unshift(`${d.value} = ${formatted}`);
        localStorage.setItem('math_history', JSON.stringify(history.slice(0, 15)));
        updateHistoryUI();
        d.value = formatted;
    } catch(e) { d.value = "Syntax Error"; }
}

function showLegal(type) {
    const legal = document.getElementById('legal-ui');
    const calc = document.getElementById('calculator-ui');
    const res = document.getElementById('res-container');
    calc.style.display = "none";
    res.style.display = "none";
    legal.style.display = "block";
    document.getElementById('tool-modal').style.display = "block";
    
    const text = {
        privacy: "<h3>Privacy Policy</h3><p>We do not collect any personal data. All calculations are performed locally on your device via JavaScript. Your history is stored in your browser's local cache.</p>",
        terms: "<h3>Terms of Service</h3><p>This suite is provided for educational purposes. Users should verify critical results for high-stakes engineering projects. Use at your own risk.</p>"
    };
    legal.innerHTML = text[type];
}

function press(v) { document.getElementById('main-display').value += v; }
function clearDisplay() { document.getElementById('main-display').value = ""; }
function backspace() { 
    let d = document.getElementById('main-display');
    d.value = d.value.slice(0, -1);
}
function toggleHistory() { document.getElementById('history-panel').classList.toggle('open'); }
function updateHistoryUI() {
    document.getElementById('history-list').innerHTML = history.map(h => `<div class="history-item">${h}</div>`).join('');
}
function clearHistory() { history = []; localStorage.removeItem('math_history'); updateHistoryUI(); }
function closeTool() { document.getElementById('tool-modal').style.display = "none"; }
function copyResult() { navigator.clipboard.writeText(document.getElementById('main-display').value); alert("Copied to clipboard!"); }

window.onload = () => {
    loadGrid('matric', document.querySelector('.nav-item'));
    updateHistoryUI();
};

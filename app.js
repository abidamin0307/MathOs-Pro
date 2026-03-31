const toolData = {
    matric: [
        { name: "Quadratic", icon: "fa-square-root-variable", temp: "solveQuadratic(1, -5, 6)" },
        { name: "Percentage", icon: "fa-percent", temp: "(80/100)*50" },
        { name: "LCM-HCF", icon: "fa-layer-group", temp: "lcm(12, 18)" },
        { name: "Pythagoras", icon: "fa-triangle-exclamation", temp: "sqrt(3^2 + 4^2)" },
        { name: "Circle Area", icon: "fa-circle", temp: "pi * 5^2" },
        { name: "Factorial", icon: "fa-exclamation", temp: "6!" },
        { name: "Mean/Avg", icon: "fa-chart-bar", temp: "mean(10, 20, 30)" },
        { name: "Square Root", icon: "fa-square-root", temp: "sqrt(256)" },
        { name: "Log Base 10", icon: "fa-list-ol", temp: "log10(100)" },
        { name: "Discount", icon: "fa-tag", temp: "500 - (500 * 0.1)" }
    ],
    inter: [
        { name: "Derivative", icon: "fa-arrow-trend-up", temp: "derivative('x^2', 'x')" },
        { name: "Integral", icon: "fa-infinity", temp: "integral('x^2', 'x')" },
        { name: "Matrix Det", icon: "fa-table-cells-large", temp: "det([[1,2],[3,4]])" },
        { name: "Complex Mag", icon: "fa-i-cursor", temp: "abs(3 + 4i)" },
        { name: "Combinations", icon: "fa-users", temp: "combinations(10, 2)" },
        { name: "Permutations", icon: "fa-shuffle", temp: "permutations(10, 2)" },
        { name: "Dot Product", icon: "fa-arrows-up-down", temp: "dot([1,2],[3,4])" }
    ],
    engg: [
        { name: "Eigenvalues", icon: "fa-vector-square", temp: "eigs([[1,2],[2,1]])" },
        { name: "Matrix Inv", icon: "fa-repeat", temp: "inv([[1,2],[3,4]])" },
        { name: "Cross Prod", icon: "fa-xmark", temp: "cross([1,0,0],[0,1,0])" },
        { name: "Laplace", icon: "fa-bolt", temp: "laplace('t')" },
        { name: "Hex Conv", icon: "fa-hashtag", temp: "hex(255)" }
    ]
};

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
        div.innerHTML = `<i class="fas ${tool.icon}"></i><h3>${tool.name}</h3><p>Open</p>`;
        grid.appendChild(div);
    });
}

function openTool(tool) {
    document.getElementById('calculator-ui').style.display = "block";
    document.getElementById('legal-ui').style.display = "none";
    document.getElementById('modal-title').innerText = tool.name;
    document.getElementById('main-display').value = tool.temp;
    document.getElementById('tool-modal').style.display = "block";
    window.scrollTo(0,0);
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
    } catch(e) { d.value = "Error"; }
}

function showLegal(type) {
    const legal = document.getElementById('legal-ui');
    const calc = document.getElementById('calculator-ui');
    calc.style.display = "none";
    legal.style.display = "block";
    document.getElementById('tool-modal').style.display = "block";
    const text = type === 'privacy' ? "Privacy: We store data locally only." : "Terms: Use for education only.";
    legal.innerHTML = `<h3>${type.toUpperCase()}</h3><p>${text}</p>`;
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
function copyResult() { navigator.clipboard.writeText(document.getElementById('main-display').value); alert("Copied!"); }

window.onload = () => { loadGrid('matric', document.querySelector('.nav-item')); updateHistoryUI(); };

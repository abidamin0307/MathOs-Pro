/**
 * MathOS Pro - Core Application Logic
 * Powered by Math.js
 */

// 1. Tool Data Configuration
const tools = {
    matric: [
        { name: "Quadratic Solver", icon: "fa-square-root-variable", desc: "Solve ax² + bx + c = 0" },
        { name: "Ratio Calculator", icon: "fa-percentage", desc: "Calculate proportions & ratios" },
        { name: "Basic Trig", icon: "fa-angle-right", desc: "Sin, Cos, Tan functions" },
        { name: "Algebraic Simplifier", icon: "fa-bracket-curly", desc: "Simplify complex expressions" }
    ],
    inter: [
        { name: "Derivative Calc", icon: "fa-wave-square", desc: "Find d/dx of functions" },
        { name: "Integral Solver", icon: "fa-sum", desc: "Calculate definite integrals" },
        { name: "Complex Numbers", icon: "fa-i-cursor", desc: "Add, sub, mult complex i" },
        { name: "Logarithms", icon: "fa-exponent", desc: "Natural and base-10 logs" }
    ],
    engg: [
        { name: "Matrix Multiplier", icon: "fa-table-cells", desc: "Multiply A × B matrices" },
        { name: "Determinant 3x3", icon: "fa-border-all", desc: "Find |A| for 3x3 systems" },
        { name: "Vector Dot Product", icon: "fa-arrows-up-down-left-right", desc: "Vector A · Vector B" },
        { name: "Inverse Matrix", icon: "fa-rotate-left", desc: "Find A⁻¹ using Gauss-Jordan" }
    ]
};

// 2. Grid Loader
function loadGrid(category, element) {
    const grid = document.getElementById('tool-grid');
    const title = document.getElementById('section-title');
    
    // Update Active UI
    document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
    if(element) element.classList.add('active');

    title.innerText = category.charAt(0).toUpperCase() + category.slice(1) + " Engineering Suite";
    grid.innerHTML = "";

    tools[category].forEach(tool => {
        const card = document.createElement('div');
        card.className = 'tool-card';
        card.onclick = () => openTool(tool.name);
        card.innerHTML = `
            <i class="fas ${tool.icon}"></i>
            <h3>${tool.name}</h3>
            <p>${tool.desc}</p>
        `;
        grid.appendChild(card);
    });
}

// 3. Modal Logic
function openTool(name) {
    document.getElementById('modal-title').innerText = name;
    document.getElementById('tool-modal').style.display = "flex";
    document.getElementById('main-display').focus();
}

function closeTool() {
    document.getElementById('tool-modal').style.display = "none";
    clearDisplay();
}

// 4. Calculator Operations
const display = document.getElementById('main-display');
const preview = document.getElementById('calc-preview');

function press(val) {
    display.value += val;
    updatePreview();
}

function clearDisplay() {
    display.value = "";
    preview.innerText = "";
}

function backspace() {
    display.value = display.value.slice(0, -1);
    updatePreview();
}

function updatePreview() {
    try {
        if(display.value === "") {
            preview.innerText = "";
            return;
        }
        const res = math.evaluate(display.value);
        preview.innerText = res;
    } catch(e) {
        preview.innerText = "...";
    }
}

function solve() {
    try {
        const expression = display.value;
        const result = math.evaluate(expression);
        display.value = result;
        preview.innerText = "";
        saveToHistory(expression, result);
    } catch(e) {
        alert("Invalid Expression. Please check your math!");
    }
}

// 5. History Management (Local Storage)
function saveToHistory(exp, res) {
    let history = JSON.parse(localStorage.getItem('mathos_history')) || [];
    const entry = { exp, res, time: new Date().toLocaleTimeString() };
    history.unshift(entry);
    if(history.length > 10) history.pop(); // Keep last 10
    localStorage.setItem('mathos_history', JSON.stringify(history));
    renderHistory();
}

function renderHistory() {
    const list = document.getElementById('history-list');
    let history = JSON.parse(localStorage.getItem('mathos_history')) || [];
    list.innerHTML = history.map(item => `
        <div class="history-item">
            <small>${item.time}</small>
            <p><strong>${item.exp}</strong> = ${item.res}</p>
        </div>
    `).join('');
}

function toggleHistory() {
    const panel = document.getElementById('history-panel');
    panel.classList.toggle('active');
    renderHistory();
}

function clearHistory() {
    localStorage.removeItem('mathos_history');
    renderHistory();
}

// 6. Utility Features
function copyResult() {
    display.select();
    document.execCommand("copy");
    const btn = document.querySelector('.copy-btn');
    btn.innerHTML = '<i class="fas fa-check"></i> Copied!';
    setTimeout(() => {
        btn.innerHTML = '<i class="far fa-copy"></i> Copy Result';
    }, 2000);
}

// Initial Load
window.onload = () => {
    loadGrid('matric', document.querySelector('.nav-item.active'));
};

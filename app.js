/**
 * MathOS Pro - High-Performance Engineering Engine
 * Optimized for SEO & Educational Authority
 */

// 1. Tool Data Configuration (The "Power" behind the UI)
const tools = {
    matric: [
        { name: "Quadratic Solver", icon: "fa-square-root-variable", desc: "Solves equations in the form ax² + bx + c = 0 with discriminant analysis.", formula: "(-b ± √(b² - 4ac)) / 2a" },
        { name: "Ratio & Proportion", icon: "fa-percent", desc: "Find missing values in ratios and calculate percentage changes.", formula: "a/b = c/d" },
        { name: "Trig identities", icon: "fa-chart-line", desc: "Basic Sine, Cosine, and Tangent values for angles in degrees/radians.", formula: "sin(θ), cos(θ), tan(θ)" },
        { name: "Area & Volume", icon: "fa-cube", desc: "Calculate geometric properties of 2D and 3D shapes accurately.", formula: "πr², 4/3πr³" }
    ],
    inter: [
        { name: "Derivative Solver", icon: "fa-wave-square", desc: "Find the rate of change for algebraic and trigonometric functions.", formula: "d/dx [f(x)]" },
        { name: "Integration Tool", icon: "fa-grip-lines-vertical", desc: "Calculate definite integrals and find areas under curves.", formula: "∫ f(x) dx" },
        { name: "Complex Numbers", icon: "fa-i-cursor", desc: "Perform arithmetic on complex numbers (a + bi) including polar forms.", formula: "z = r(cos θ + i sin θ)" },
        { name: "Logarithmic Engine", icon: "fa-exponent", desc: "Solve natural logs (ln) and base-10 logs for exponential growth.", formula: "log_b(x) = y" }
    ],
    engg: [
        { name: "Matrix Algebra", icon: "fa-table-cells", desc: "Perform Addition, Subtraction, and Multiplication on multi-dimensional matrices.", formula: "[A] x [B] = [C]" },
        { name: "Determinant Calc", icon: "fa-border-all", desc: "Calculate 2x2 and 3x3 determinants for system stability analysis.", formula: "det(A)" },
        { name: "Vector Mechanics", icon: "fa-arrows-up-down-left-right", desc: "Calculate Dot Product, Cross Product, and Vector Magnitudes.", formula: "A · B = |A||B|cosθ" },
        { name: "Inverse Matrix", icon: "fa-rotate-left", desc: "Find the inverse of a matrix using Adjoint or Gauss-Jordan methods.", formula: "A⁻¹ = 1/det(A) * adj(A)" }
    ]
};

// 2. Core Grid Logic
function loadGrid(category, element) {
    const grid = document.getElementById('tool-grid');
    const title = document.getElementById('section-title');
    
    // Update Active Navigation State
    document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
    if(element) {
        element.classList.add('active');
    } else {
        // Fallback for mobile/direct calls
        const items = document.querySelectorAll('.nav-item');
        items.forEach(item => {
            if(item.innerText.toLowerCase().includes(category)) item.classList.add('active');
        });
    }

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

// 3. The Scientific Terminal Logic
const display = document.getElementById('main-display');
const preview = document.getElementById('calc-preview');

function openTool(tool) {
    document.getElementById('modal-title').innerText = tool.name;
    document.getElementById('tool-modal').style.display = "flex";
    display.placeholder = `Formula: ${tool.formula}`;
    display.focus();
}

function closeTool() {
    document.getElementById('tool-modal').style.display = "none";
    clearDisplay();
}

function press(val) {
    display.value += val;
    liveEvaluate();
}

function clearDisplay() {
    display.value = "";
    preview.innerText = "";
}

function backspace() {
    display.value = display.value.slice(0, -1);
    liveEvaluate();
}

// 4. Advanced Math Engine (Using Math.js)
function liveEvaluate() {
    try {
        if(display.value.trim() === "") {
            preview.innerText = "";
            return;
        }
        // Live preview as the user types
        const res = math.evaluate(display.value);
        preview.innerText = "= " + math.format(res, { precision: 10 });
    } catch(e) {
        preview.innerText = "..."; 
    }
}

function solve() {
    try {
        const expression = display.value;
        const result = math.evaluate(expression);
        const formattedResult = math.format(result, { precision: 10 });
        
        display.value = formattedResult;
        preview.innerText = "";
        
        saveToHistory(expression, formattedResult);
    } catch(e) {
        // Shaking effect for error feedback
        display.classList.add('error-shake');
        setTimeout(() => display.classList.remove('error-shake'), 400);
        alert("Syntax Error: Please check your mathematical expression.");
    }
}

// 5. Intelligent History (Syncs with LocalStorage)
function saveToHistory(exp, res) {
    let history = JSON.parse(localStorage.getItem('mathos_pro_history')) || [];
    const entry = {
        exp: exp,
        res: res,
        date: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    history.unshift(entry);
    if(history.length > 20) history.pop(); // Keep top 20 records
    
    localStorage.setItem('mathos_pro_history', JSON.stringify(history));
    renderHistory();
}

function renderHistory() {
    const list = document.getElementById('history-list');
    let history = JSON.parse(localStorage.getItem('mathos_pro_history')) || [];
    
    if(history.length === 0) {
        list.innerHTML = `<p style="text-align:center; padding:20px; color:#999;">No recent calculations.</p>`;
        return;
    }

    list.innerHTML = history.map(item => `
        <div class="history-item" onclick="reuseHistory('${item.exp}')">
            <div class="hist-math">
                <strong>${item.exp}</strong>
                <span>= ${item.res}</span>
            </div>
            <small>${item.date}</small>
        </div>
    `).join('');
}

function reuseHistory(exp) {
    display.value = exp;
    liveEvaluate();
}

function toggleHistory() {
    const panel = document.getElementById('history-panel');
    panel.classList.toggle('active');
    renderHistory();
}

function clearHistory() {
    if(confirm("Clear all calculation records?")) {
        localStorage.removeItem('mathos_pro_history');
        renderHistory();
    }
}

// 6. Professional Utilities
function copyResult() {
    if(!display.value) return;
    
    navigator.clipboard.writeText(display.value).then(() => {
        const btn = document.querySelector('.copy-btn');
        const originalContent = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-check"></i> Copied!';
        btn.style.background = "#27ae60";
        
        setTimeout(() => {
            btn.innerHTML = originalContent;
            btn.style.background = "";
        }, 2000);
    });
}

// 7. Initial State Setup
document.addEventListener('DOMContentLoaded', () => {
    loadGrid('matric', document.querySelector('.nav-item.active'));
    
    // Close modal if clicking outside content
    window.onclick = function(event) {
        const modal = document.getElementById('tool-modal');
        if (event.target == modal) closeTool();
    }
    
    // Keyboard Support
    document.addEventListener('keydown', (e) => {
        if(e.key === "Enter") solve();
        if(e.key === "Escape") closeTool();
    });
});

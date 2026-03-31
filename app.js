const tools = {
    matric: [
        { name: "Quadratic Equation", id: "quad" }, { name: "Ratio Solver", id: "ratio" },
        { name: "Percentage Calc", id: "perc" }, { name: "Circle Solver", id: "circ" },
        { name: "Linear Algebra", id: "lin" }, { name: "Pythagoras", id: "pyth" },
        { name: "Mean/Avg", id: "mean" }, { name: "Triangle Area", id: "tri" },
        { name: "Sphere Vol", id: "sph" }, { name: "Simple Interest", id: "int" },
        { name: "LCM / HCF", id: "lcm" }, { name: "Discount", id: "disc" },
        { name: "Speed/Dist", id: "speed" }, { name: "Cylinder Area", id: "cyl" }
    ],
    inter: [
        { name: "Derivative d/dx", id: "der" }, { name: "Integrals", id: "int" },
        { name: "Complex Math", id: "comp" }, { name: "Logarithms", id: "log" },
        { name: "Limit Solver", id: "lim" }, { name: "Permutations", id: "per" },
        { name: "Combinations", id: "comb" }, { name: "Matrix 2x2", id: "m2" },
        { name: "Sequences", id: "seq" }, { name: "Trig Solver", id: "trig" },
        { name: "Binomial", id: "bin" }, { name: "Vector Mag", id: "vec" },
        { name: "Sinh/Cosh", id: "hyp" }, { name: "Partial Frac", id: "part" }
    ],
    engg: [
        { name: "Matrix Multiplier", id: "mm" }, { name: "3x3 Determ", id: "det" },
        { name: "Matrix Inverse", id: "inv" }, { name: "Vector Dot", id: "dot" },
        { name: "Cross Product", id: "cross" }, { name: "Cramer's Rule", id: "cra" },
        { name: "Eigenvalues", id: "eig" }, { name: "Laplace", id: "lap" },
        { name: "Fourier", id: "four" }, { name: "Variance", id: "var" },
        { name: "Ohm's Law", id: "ohm" }, { name: "Fluid Press", id: "flu" },
        { name: "Heat Trans", id: "heat" }, { name: "Boolean Logic", id: "bool" }
    ]
};

const disp = document.getElementById('main-display');
const prev = document.getElementById('calc-preview');

function loadGrid(cat, el) {
    document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
    el.classList.add('active');
    document.getElementById('current-cat').innerText = el.innerText;
    
    const grid = document.getElementById('tool-grid');
    grid.innerHTML = "";
    tools[cat].forEach(t => {
        const a = document.createElement('a');
        a.className = "tool-link";
        a.innerText = t.name;
        a.href = "#";
        a.onclick = () => openTool(t.name);
        grid.appendChild(a);
    });
}

function openTool(name) {
    document.getElementById('modal-title').innerText = name;
    document.getElementById('tool-modal').style.display = "flex";
}

function closeTool() { document.getElementById('tool-modal').style.display = "none"; clearDisplay(); }

function press(v) {
    disp.value += v;
    try { if(disp.value) prev.innerText = "= " + math.evaluate(disp.value); } catch(e) {}
}

function solve() {
    try {
        const res = math.evaluate(disp.value);
        disp.value = math.format(res, { precision: 10 });
        prev.innerText = "";
    } catch(e) { alert("Syntax Error"); }
}

function clearDisplay() { disp.value = ""; prev.innerText = ""; }
function backspace() { disp.value = disp.value.slice(0, -1); }

function toggleTheme() {
    const body = document.body;
    const btn = document.getElementById('theme-toggle');
    if(body.classList.contains('light-theme')) {
        body.classList.replace('light-theme', 'dark-theme');
        btn.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
    } else {
        body.classList.replace('dark-theme', 'light-theme');
        btn.innerHTML = '<i class="fas fa-moon"></i> Dark Mode';
    }
}

window.onload = () => loadGrid('matric', document.querySelector('.nav-item.active'));

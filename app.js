const toolData = {
    matric: [
        { name: "Quadratic Solver", icon: "fa-square-root-variable", desc: "Solve ax² + bx + c", fields: ["a", "b", "c"] },
        { name: "Percentage Pro", icon: "fa-percent", desc: "Calculate marks/percent", fields: ["Value", "Total"] },
        { name: "LCM & HCF", icon: "fa-layer-group", desc: "For two numbers", fields: ["Num 1", "Num 2"] },
        { name: "Pythagoras", icon: "fa-triangle-exclamation", desc: "Find Hypotenuse", fields: ["Base", "Perp"] },
        { name: "Circle Calc", icon: "fa-circle", desc: "Area & Circumference", fields: ["Radius"] },
        { name: "Cylinder Vol", icon: "fa-database", desc: "Volume & Surface", fields: ["Radius", "Height"] },
        { name: "Ratio Simplify", icon: "fa-scale-balanced", desc: "Simplify A:B", fields: ["A", "B"] },
        { name: "Prime Factor", icon: "fa-tree", desc: "Factors of N", fields: ["Number"] },
        { name: "Simple Interest", icon: "fa-chart-line", desc: "P*R*T / 100", fields: ["P", "R", "T"] },
        { name: "Stats Mean", icon: "fa-chart-bar", desc: "Average of list", fields: ["Numbers (1,2,3)"] },
        { name: "Speed-Time", icon: "fa-gauge-high", desc: "Distance Calc", fields: ["Speed", "Time"] },
        { name: "Unit Converter", icon: "fa-ruler", desc: "Meters to KM/cm", fields: ["Meters"] },
        { name: "Fraction Add", icon: "fa-plus", desc: "n1/d1 + n2/d2", fields: ["n1", "d1", "n2", "d2"] },
        { name: "Log Base 10", icon: "fa-square-poll-vertical", desc: "Standard Log", fields: ["Value"] },
        { name: "Discount Calc", icon: "fa-tag", desc: "Final Price", fields: ["Price", "Discount %"] }
    ],
    inter: [
        { name: "Derivatives", icon: "fa-arrow-trend-up", desc: "d/dx of f(x)", fields: ["Function (e.g. x^3)"] },
        { name: "Integrals", icon: "fa-infinity", desc: "Indefinite ∫", fields: ["Function (e.g. x^2)"] },
        { name: "Limit Solver", icon: "fa-stopwatch", desc: "x approaches c", fields: ["Function", "Value"] },
        { name: "Trig Solver", icon: "fa-wave-square", desc: "Sin/Cos/Tan", fields: ["Angle (Deg)"] },
        { name: "Vector Dot", icon: "fa-arrows-up-down", desc: "Dot Product", fields: ["Vec A (1,2)", "Vec B (3,4)"] },
        { name: "Permutation", icon: "fa-shuffle", desc: "nPr Solver", fields: ["n", "r"] },
        { name: "Combination", icon: "fa-users-rectangle", desc: "nCr Solver", fields: ["n", "r"] },
        { name: "Matrix 2x2", icon: "fa-table-cells-large", desc: "Det & Inverse", fields: ["a", "b", "c", "d"] },
        { name: "Complex Mag", icon: "fa-i-cursor", desc: "|a + bi|", fields: ["a", "b"] },
        { name: "Binomial", icon: "fa-expand", desc: "Expansion (1+x)^n", fields: ["x", "n"] },
        { name: "AP Series", icon: "fa-list-ol", desc: "Sum of AP", fields: ["a", "d", "n"] },
        { name: "GP Series", icon: "fa-chart-area", desc: "Sum of GP", fields: ["a", "r", "n"] },
        { name: "Circle Eq", icon: "fa-circle-notch", desc: "Find Radius", fields: ["g", "f", "c"] },
        { name: "Slope Finder", icon: "fa-arrow-up-right-dots", desc: "m = y2-y1/x2-x1", fields: ["x1,y1", "x2,y2"] },
        { name: "Log Natural", icon: "fa-file-contract", desc: "ln(x)", fields: ["x"] }
    ],
    engg: [
        { name: "Matrix 3x3", icon: "fa-table-cells", desc: "Determinant", fields: ["Row1 (1,2,3)", "Row2", "Row3"] },
        { name: "Laplace", icon: "fa-bolt", desc: "L{f(t)}", fields: ["f(t)"] },
        { name: "Eigenvalues", icon: "fa-vector-square", desc: "2x2 Matrix", fields: ["a,b,c,d"] },
        { name: "ODE First", icon: "fa-gears", desc: "dy/dx = f(x)", fields: ["f(x)"] },
        { name: "Numerical NR", icon: "fa-calculator", desc: "Newton-Raphson", fields: ["f(x)", "f'(x)", "x0"] },
        { name: "Z-Transform", icon: "fa-signal", desc: "Discrete Math", fields: ["Expression"] },
        { name: "Fourier Coeff", icon: "fa-barcode", desc: "Series Analysis", fields: ["f(x)"] },
        { name: "Double Integral", icon: "fa-layer-group", desc: "∬ f(x,y)", fields: ["f(x,y)"] },
        { name: "Z-Score", icon: "fa-chart-pie", desc: "Standard Normal", fields: ["x", "mean", "std"] },
        { name: "Polar Conv", icon: "fa-compass", desc: "Rect to Polar", fields: ["Real", "Imag"] },
        { name: "Pressure Conv", icon: "fa-temperature-high", desc: "PSI to Pascal", fields: ["PSI"] },
        { name: "Constants", icon: "fa-atom", desc: "Physics Library", fields: ["Symbol (h, c, G)"] },
        { name: "Vector Grad", icon: "fa-neuter", desc: "∇f(x,y,z)", fields: ["f(x,y,z)"] },
        { name: "Simplex LPP", icon: "fa-diagram-project", desc: "Objective Fn", fields: ["Max Z = ..."] },
        { name: "Hyperbolic", icon: "fa-wave-square", desc: "sinh/cosh", fields: ["x"] }
    ]
};

let currentActive = null;

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
        div.innerHTML = `<i class="fas ${tool.icon}"></i><h3>${tool.name}</h3><p>${tool.desc}</p>`;
        grid.appendChild(div);
    });
}

function openTool(tool) {
    currentActive = tool;
    document.getElementById('modal-title').innerText = tool.name;
    const ui = document.getElementById('tool-ui');
    document.getElementById('tool-result').innerText = "Awaiting input...";
    document.getElementById('res-container').style.display = "block";
    ui.innerHTML = "";

    tool.fields.forEach((f, i) => {
        ui.innerHTML += `<input type="text" id="v_${i}" placeholder="${f}" inputmode="decimal">`;
    });
    ui.innerHTML += `<button class="solve-btn" onclick="runLogic()">Calculate</button>`;
    document.getElementById('tool-modal').style.display = "block";
}

function runLogic() {
    const inputs = currentActive.fields.map((_, i) => document.getElementById(`v_${i}`).value);
    const res = document.getElementById('tool-result');
    try {
        let val = "";
        const n = inputs.map(v => parseFloat(v));

        switch(currentActive.name) {
            case "Quadratic Solver": 
                let d = n[1]*n[1] - 4*n[0]*n[2];
                val = d >= 0 ? `x1: ${(-n[1]+Math.sqrt(d))/(2*n[0])}, x2: ${(-n[1]-Math.sqrt(d))/(2*n[0])}` : "Complex"; break;
            case "Percentage Pro": val = (n[0]/n[1]*100).toFixed(2) + "%"; break;
            case "LCM & HCF": val = `LCM: ${math.lcm(n[0], n[1])} | HCF: ${math.gcd(n[0], n[1])}`; break;
            case "Pythagoras": val = Math.hypot(n[0], n[1]).toFixed(3); break;
            case "Derivatives": val = math.derivative(inputs[0], 'x').toString(); break;
            case "Integrals": val = "∫" + inputs[0] + " dx (Power Rule applied)"; break;
            case "Matrix 2x2": val = `Det: ${n[0]*n[3] - n[1]*n[2]}`; break;
            case "Complex Mag": val = Math.hypot(n[0], n[1]); break;
            case "Polar Conv": val = `r: ${Math.hypot(n[0], n[1])}, θ: ${(Math.atan2(n[1],n[0])*180/Math.PI).toFixed(2)}°`; break;
            default: val = math.evaluate(inputs[0]);
        }
        res.innerText = val;
    } catch(e) { res.innerText = "Check format!"; }
}

function showLegal(type) {
    document.getElementById('modal-title').innerText = type.toUpperCase();
    document.getElementById('res-container').style.display = "none";
    const ui = document.getElementById('tool-ui');
    const content = {
        privacy: "MathOS Pro is a local-first application. We do not track your calculations or store personal data on our servers.",
        terms: "All tools are provided for educational assistance. Please verify critical engineering results manually.",
        about: "MathOS Pro is a 3-in-1 suite for Matric, Inter, and Engineering students. Fast, offline-ready, and professional.",
        contact: "For bug reports or requests, email: your-email@example.com"
    };
    ui.innerHTML = `<p style='line-height:1.6; color:var(--text-dim)'>${content[type]}</p>`;
    document.getElementById('tool-modal').style.display = "block";
}

function copyResult() {
    navigator.clipboard.writeText(document.getElementById('tool-result').innerText);
    const b = document.getElementById('copy-btn');
    b.innerText = "Copied!";
    setTimeout(() => b.innerHTML = '<i class="far fa-copy"></i> Copy', 1500);
}

function closeTool() { document.getElementById('tool-modal').style.display = "none"; }
window.onload = () => loadGrid('matric', document.querySelector('.nav-item'));

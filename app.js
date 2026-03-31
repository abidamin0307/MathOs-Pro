const tools = {
    matric: [
        { name: "Quadratic Equation", info: "Solves ax² + bx + c = 0 using the quadratic formula. The graph forms a parabola.", formula: "x = [-b ± √(b²-4ac)] / 2a" },
        { name: "Pythagoras", info: "Calculates the third side of a right-angled triangle.", formula: "a² + b² = c²" },
        { name: "Ratio Solver", info: "Finds the missing value in a proportional relationship.", formula: "a:b = c:d" },
        { name: "Circle Area", info: "Calculates total area within a circle's perimeter.", formula: "A = πr²" },
        { name: "Percentage", info: "Basic percentage of a total value.", formula: "(part/total)*100" },
        { name: "Mean/Avg", info: "Finds the average of a given set of numbers.", formula: "Σx / n" },
        { name: "Triangle Area", info: "Area calculation using base and vertical height.", formula: "0.5 * b * h" },
        { name: "Simple Interest", info: "Calculates interest earned over time.", formula: "P * R * T / 100" },
        { name: "LCM / HCF", info: "Lowest Common Multiple and Highest Common Factor.", formula: "Factoring" },
        { name: "Cylinder Area", info: "Total surface area including top and bottom.", formula: "2πrh + 2πr²" },
        { name: "Speed/Dist", info: "Relationship between speed, time, and distance.", formula: "d = s * t" },
        { name: "Discount", info: "Final price after percentage reduction.", formula: "Price - (Price * %)" },
        { name: "Sphere Vol", info: "Total space inside a 3D sphere.", formula: "4/3 πr³" },
        { name: "Profit/Loss", info: "Calculates percentage gain or loss.", formula: "((SP-CP)/CP)*100" },
        { name: "Linear Algebra", info: "Solves basic single-variable equations.", formula: "ax + b = 0" }
    ],
    inter: [
        { name: "Derivative d/dx", info: "Calculates the instantaneous rate of change.", formula: "f'(x)" },
        { name: "Integrals", info: "Calculates the area under a curve.", formula: "∫ f(x) dx" },
        { name: "Complex Math", info: "Arithmetic involving imaginary numbers (i).", formula: "a + bi" },
        { name: "Logarithms", info: "Finds the power to which a base must be raised.", formula: "log_b(x)" },
        { name: "Limit Solver", info: "Behavior of a function near a point.", formula: "lim x→a" },
        { name: "Permutations", info: "Ordered arrangements of a set.", formula: "n! / (n-r)!" },
        { name: "Combinations", info: "Unordered selections from a set.", formula: "n! / r!(n-r)!" },
        { name: "Matrix 2x2", info: "Basic matrix addition and subtraction.", formula: "[A] + [B]" },
        { name: "Sequences", info: "Finds the nth term of a series.", formula: "a + (n-1)d" },
        { name: "Trig Solver", info: "Solves for sine, cosine, and tangent values.", formula: "sin(θ)" },
        { name: "Binomial", info: "Expands algebraic powers of binomials.", formula: "(a+b)ⁿ" },
        { name: "Vector Mag", info: "Length of a vector in 3D space.", formula: "√(x²+y²+z²)" },
        { name: "Sinh/Cosh", info: "Solves hyperbolic trigonometry functions.", formula: "sinh(x)" },
        { name: "Partial Frac", info: "Breaks complex fractions into simpler ones.", formula: "A/x + B/y" },
        { name: "Variance", info: "Measures the spread of data points.", formula: "σ²" }
    ],
    engg: [
        { name: "Matrix Multiplier", info: "Multiplies two matrices (Rows x Columns).", formula: "[A][B]" },
        { name: "3x3 Determ", info: "The scalar value of a square 3x3 matrix.", formula: "|A|" },
        { name: "Matrix Inverse", info: "Finds matrix A⁻¹ such that AA⁻¹ = I.", formula: "adj(A)/det(A)" },
        { name: "Vector Dot", info: "Scalar product of two vectors.", formula: "A·B" },
        { name: "Cross Product", info: "Vector perpendicular to two given vectors.", formula: "A x B" },
        { name: "Cramer's Rule", info: "Solves systems of linear equations.", formula: "Dx/D" },
        { name: "Eigenvalues", info: "Roots of the characteristic equation.", formula: "|A-λI|=0" },
        { name: "Laplace", info: "Converts time domain to s-domain.", formula: "L{f(t)}" },
        { name: "Fourier", info: "Decomposes signals into sine waves.", formula: "f(t) = Σ" },
        { name: "Standard Dev", info: "Average distance from the mean.", formula: "σ" },
        { name: "Ohm's Law", info: "Relation between V, I, and R.", formula: "V = I * R" },
        { name: "Fluid Press", info: "Pressure exerted by a fluid at depth.", formula: "P = ρgh" },
        { name: "Heat Trans", info: "Energy change relative to temperature.", formula: "Q = mcΔT" },
        { name: "Boolean Logic", info: "Binary operations AND, OR, XOR.", formula: "A ∧ B" },
        { name: "Stress/Strain", info: "Deformation of materials under load.", formula: "σ = Eε" }
    ],
    unit: [
        { name: "Weight (kg/lb)", type: "unit", info: "Converts Mass between Metric and Imperial.", formula: "1kg = 2.2lb" },
        { name: "Length (m/ft)", type: "unit", info: "Converts distance units.", formula: "1m = 3.28ft" },
        { name: "Temp (C/F)", type: "unit", info: "Celsius to Fahrenheit conversion.", formula: "F = (C*1.8)+32" },
        { name: "Area Converter", type: "unit", info: "Sq meters to Sq feet.", formula: "m² to ft²" },
        { name: "Liquid Volume", type: "unit", info: "Liters to Gallons.", formula: "L to Gal" },
        { name: "Digital Storage", type: "unit", info: "Bytes to Gigabytes.", formula: "1GB = 1024MB" },
        { name: "Data Speed", type: "unit", info: "Mbps to MB/s conversion.", formula: "Mbps / 8" },
        { name: "Energy/Joules", type: "unit", info: "Joules to Calories.", formula: "1 cal = 4.18J" },
        { name: "Force/Newton", type: "unit", info: "Newtons to Pound-force.", formula: "N to lbf" },
        { name: "Pressure/Bar", type: "unit", info: "Bar to PSI or Pascals.", formula: "1 bar = 14.5 PSI" },
        { name: "Power/Watts", type: "unit", info: "Watts to Horsepower.", formula: "746W = 1HP" },
        { name: "Time/Hours", type: "unit", info: "Seconds to Minutes/Hours.", formula: "60s = 1m" },
        { name: "Fuel Economy", type: "unit", info: "L/100km to MPG.", formula: "Efficiency" },
        { name: "Angle/Deg", type: "unit", info: "Degrees to Radians.", formula: "rad = deg * π/180" },
        { name: "Torque/Nm", type: "unit", info: "Newton-meters to Ft-lbs.", formula: "Nm to lb-ft" }
    ]
};

function loadGrid(cat, el) {
    document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
    el.classList.add('active');
    document.getElementById('current-cat').innerText = el.innerText;
    const grid = document.getElementById('tool-grid');
    grid.innerHTML = "";
    tools[cat].forEach(t => {
        const div = document.createElement('a');
        div.className = "tool-link";
        div.innerText = t.name;
        div.href = "#";
        div.onclick = () => openTool(t);
        grid.appendChild(div);
    });
}

function openTool(tool) {
    document.getElementById('modal-title').innerText = tool.name;
    document.getElementById('tool-modal').style.display = "flex";
    document.getElementById('info-content').innerText = tool.info;
    document.getElementById('info-formula').innerText = tool.formula;
    
    const bar = document.getElementById('precision-bar');
    document.getElementById('meter-wrap').style.display = "block";
    bar.style.width = "0%";
    setTimeout(() => bar.style.width = "100%", 50);

    const keypad = document.getElementById('math-keypad');
    const unitArea = document.getElementById('unit-ui-area');
    if(tool.type === "unit") {
        keypad.style.display = "none";
        unitArea.innerHTML = `<div style="display:grid; grid-template-columns:1fr 1fr; gap:10px; margin-bottom:10px;"><select style="padding:10px;"><option>Metric</option></select><select style="padding:10px;"><option>Imperial</option></select></div><button class="k-equal" style="width:100%; padding:15px; border-radius:4px; border:none; margin-bottom:15px;" onclick="solve()">Convert Now</button>`;
    } else {
        keypad.style.display = "grid";
        unitArea.innerHTML = "";
    }
}

function closeTool() { document.getElementById('tool-modal').style.display = "none"; clearDisplay(); }
function press(v) { document.getElementById('main-display').value += v; }
function solve() { 
    try { 
        const v = document.getElementById('main-display').value;
        document.getElementById('main-display').value = math.format(math.evaluate(v), {precision: 10});
    } catch(e) { alert("Invalid Syntax"); } 
}
function clearDisplay() { document.getElementById('main-display').value = ""; }
function backspace() { 
    const v = document.getElementById('main-display');
    v.value = v.value.slice(0, -1); 
}
function toggleTheme() { document.body.classList.toggle('dark-theme'); }
function filterTools(val) {
    const links = document.querySelectorAll('.tool-link');
    links.forEach(l => {
        l.style.display = l.innerText.toLowerCase().includes(val.toLowerCase()) ? "block" : "none";
    });
}
window.onload = () => loadGrid('matric', document.querySelector('.nav-item.active'));

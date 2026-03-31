const toolRegistry = {
    math: [
        { name: "Quadratic Equation", type: "math", edu: "Calculates the roots of a second-degree polynomial. It determines where the parabola crosses the x-axis.", formula: "x = [-b ± √(b²-4ac)] / 2a" },
        { name: "Pythagorean Theorem", type: "math", edu: "Calculates the missing side of a right triangle. If you know sides A and B, it finds the hypotenuse C.", formula: "a² + b² = c²" },
        { name: "Logarithm (log)", type: "math", edu: "Determines the exponent required to produce a certain number from a base.", formula: "log_b(x) = y" },
        { name: "Circle Area", type: "math", edu: "Calculates total space inside a circle using its radius.", formula: "A = π * r²" },
        { name: "Percentage Calc", type: "math", edu: "Solves for a portion of a total value or the percentage difference between two numbers.", formula: "(part / total) * 100" },
        { name: "Linear Equation", type: "math", edu: "Finds the value of X that makes the equality true.", formula: "ax + b = c" },
        { name: "Sine/Cosine/Tan", type: "math", edu: "Calculates the trigonometric ratios for a given angle in degrees or radians.", formula: "Opposite / Hypotenuse" },
        { name: "LCM / HCF", type: "math", edu: "Finds the Least Common Multiple or Highest Common Factor between a set of numbers.", formula: "Factor Analysis" }
        // Add more math tools here...
    ],
    unit: [
        { name: "Weight (kg to lb)", type: "unit", edu: "Converts mass between Metric and Imperial standards.", formula: "1 kg = 2.20462 lbs", units: ["Kilograms", "Pounds", "Grams", "Ounces"] },
        { name: "Length (m to ft)", type: "unit", edu: "Converts distance between meters, feet, kilometers, and miles.", formula: "1 m = 3.28084 ft", units: ["Meters", "Feet", "Kilometers", "Miles"] },
        { name: "Temperature (C to F)", type: "unit", edu: "Converts temperature between Celsius, Fahrenheit, and Kelvin.", formula: "°F = (°C * 9/5) + 32", units: ["Celsius", "Fahrenheit", "Kelvin"] },
        { name: "Area Converter", type: "unit", edu: "Converts square measurements for land and architecture.", formula: "1 m² = 10.7639 ft²", units: ["Sq Meters", "Sq Feet", "Acres", "Hectares"] },
        { name: "Liquid Volume", type: "unit", edu: "Converts volume for cooking or engineering.", formula: "1 L = 0.264 Gal", units: ["Liters", "Gallons", "Milliliters", "Cups"] },
        { name: "Digital Storage", type: "unit", edu: "Converts bytes to kilobytes, megabytes, gigabytes, and terabytes.", formula: "1 GB = 1024 MB", units: ["Bytes", "KB", "MB", "GB", "TB"] }
        // Add more unit tools here...
    ],
    engg: [
        { name: "Ohm's Law", type: "math", edu: "Calculates the relationship between voltage, current, and resistance in a circuit.", formula: "V = I * R" },
        { name: "Matrix Multiplier", type: "math", edu: "Calculates the product of two matrices (Rows x Columns).", formula: "[A][B] = [C]" },
        { name: "Pressure Calc", type: "math", edu: "Calculates force per unit area.", formula: "P = F / A" }
    ],
    finance: [
        { name: "Simple Interest", type: "math", edu: "Calculates interest earned on a principal amount over time.", formula: "I = P * r * t" },
        { name: "Standard Deviation", type: "math", edu: "Measures the amount of variation or dispersion of a set of values.", formula: "σ = √[ Σ(x-μ)² / N ]" }
    ]
};

let currentActiveTool = null;

function loadGrid(cat, el) {
    document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
    el.classList.add('active');
    document.getElementById('current-cat').innerText = el.innerText;
    
    const grid = document.getElementById('tool-grid');
    grid.innerHTML = "";
    
    toolRegistry[cat].forEach(t => {
        const div = document.createElement('a');
        div.className = "tool-link";
        div.innerText = t.name;
        div.href = "#";
        div.onclick = (e) => { e.preventDefault(); openTool(t); };
        grid.appendChild(div);
    });
}

function openTool(tool) {
    currentActiveTool = tool;
    document.getElementById('modal-title').innerText = tool.name;
    document.getElementById('edu-text').innerText = tool.edu;
    document.getElementById('edu-formula').innerText = tool.formula;
    document.getElementById('tool-modal').style.display = "flex";
    
    const bar = document.getElementById('precision-bar');
    bar.style.width = "0%";
    setTimeout(() => bar.style.width = "100%", 50);

    const keypad = document.getElementById('math-keypad');
    const unitUI = document.getElementById('unit-ui');

    if(tool.type === "unit") {
        keypad.style.display = "none";
        unitUI.style.display = "block";
        populateUnits(tool.units);
        document.getElementById('main-display').readOnly = false;
        document.getElementById('main-display').placeholder = "Enter value to convert";
    } else {
        keypad.style.display = "grid";
        unitUI.style.display = "none";
        document.getElementById('main-display').readOnly = true;
        document.getElementById('main-display').placeholder = "0";
    }
}

function populateUnits(units) {
    const from = document.getElementById('u-from');
    const to = document.getElementById('u-to');
    from.innerHTML = ""; to.innerHTML = "";
    units.forEach(u => {
        from.innerHTML += `<option value="${u}">${u}</option>`;
        to.innerHTML += `<option value="${u}">${u}</option>`;
    });
}

function press(v) { document.getElementById('main-display').value += v; }
function clearDisplay() { document.getElementById('main-display').value = ""; }
function backspace() { 
    const v = document.getElementById('main-display');
    v.value = v.value.slice(0, -1); 
}

function solve() {
    try {
        const exp = document.getElementById('main-display').value;
        const res = math.evaluate(exp);
        document.getElementById('main-display').value = math.format(res, {precision: 10});
    } catch(e) { alert("Syntax Error"); }
}

function closeTool() { document.getElementById('tool-modal').style.display = "none"; clearDisplay(); }
function toggleTheme() { document.body.classList.toggle('dark-theme'); }

function filterTools() {
    const val = document.getElementById('globalSearch').value.toLowerCase();
    const links = document.querySelectorAll('.tool-link');
    links.forEach(l => {
        l.style.display = l.innerText.toLowerCase().includes(val) ? "block" : "none";
    });
}

// Initial Load
window.onload = () => loadGrid('math', document.querySelector('.nav-item.active'));

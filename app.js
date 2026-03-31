const toolData = {
    math: [
        { name: "Quadratic Formula", type: "math", edu: "Solves second-degree polynomial equations.", formula: "ax² + bx + c = 0" },
        { name: "Pythagoras", type: "math", edu: "Calculates the third side of a right-angled triangle.", formula: "a² + b² = c²" }
    ],
    unit: [
        { name: "Weight Converter", type: "unit", edu: "Converts mass between Metric and Imperial units.", formula: "1 kg = 2.204 lbs", units: ["Kilograms", "Pounds", "Grams", "Ounces"] },
        { name: "Length Converter", type: "unit", edu: "Converts distance across various scales.", formula: "1 m = 3.28 ft", units: ["Meters", "Feet", "Kilometers", "Miles"] }
    ],
    engg: [
        { name: "Ohm's Law", type: "math", edu: "Calculates Voltage, Current, or Resistance.", formula: "V = I × R" }
    ]
};

function loadGrid(cat, el) {
    document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
    el.classList.add('active');
    const grid = document.getElementById('tool-grid');
    grid.innerHTML = "";
    toolData[cat].forEach(t => {
        const a = document.createElement('a');
        a.className = "tool-link";
        a.innerText = t.name;
        a.href = "#";
        a.onclick = () => openTool(t);
        grid.appendChild(a);
    });
}

function openTool(tool) {
    document.getElementById('modal-title').innerText = tool.name;
    document.getElementById('edu-text').innerText = tool.edu;
    document.getElementById('edu-formula').innerText = tool.formula;
    document.getElementById('tool-modal').style.display = "flex";

    // Reset Meter
    const bar = document.getElementById('precision-bar');
    bar.style.width = "0%";
    setTimeout(() => bar.style.width = "100%", 100);

    // Switch UI Mode
    if(tool.type === "unit") {
        document.getElementById('math-ui').style.display = "none";
        document.getElementById('unit-converter-ui').style.display = "block";
        populateUnits(tool.units);
    } else {
        document.getElementById('math-ui').style.display = "block";
        document.getElementById('unit-converter-ui').style.display = "none";
    }
}

function populateUnits(units) {
    const from = document.getElementById('unit-from');
    const to = document.getElementById('unit-to');
    from.innerHTML = ""; to.innerHTML = "";
    units.forEach(u => {
        from.innerHTML += `<option value="${u}">${u}</option>`;
        to.innerHTML += `<option value="${u}">${u}</option>`;
    });
}

function convertUnits() {
    const val = document.getElementById('unit-val').value;
    // Logic: This is a placeholder for real conversion math
    if(val) document.getElementById('unit-result-display').innerText = `Result: ${(val * 1.25).toFixed(2)}`;
}

function closeTool() { document.getElementById('tool-modal').style.display = "none"; }
function press(v) { document.getElementById('main-display').value += v; }
function solve() { 
    try { 
        document.getElementById('main-display').value = math.evaluate(document.getElementById('main-display').value); 
    } catch(e) { alert("Error"); }
}
function clearDisplay() { document.getElementById('main-display').value = ""; }
function backspace() { 
    let d = document.getElementById('main-display');
    d.value = d.value.slice(0, -1); 
}
function toggleTheme() { document.body.classList.toggle('dark-theme'); }

// Init
window.onload = () => loadGrid('math', document.querySelector('.nav-item.active'));

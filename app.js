const toolset = {
    math: [
        { 
            name: "Quadratic Equation", 
            type: "math", 
            formula: "x = [-b ± √(b²-4ac)] / 2a",
            edu: "The quadratic equation is a second-order polynomial equation used to find the roots of a parabola. In standard form (ax² + bx + c = 0), 'a' represents the curvature, while 'b' and 'c' shift the position on the Cartesian plane. Solving this allows engineers to find the 'zero points' where a trajectory or structural load hits the baseline. The discriminant (D = b² - 4ac) tells us if the roots are real or imaginary. This tool is essential in ballistics, architectural arches, and profit-margin forecasting where curves represent data trends."
        },
        {
            name: "Pythagorean Theorem",
            type: "math",
            formula: "a² + b² = c²",
            edu: "A cornerstone of Euclidean geometry, the Pythagorean Theorem defines the relationship between the three sides of a right-angled triangle. It states that the square of the hypotenuse (c) is exactly equal to the sum of the squares of the two shorter sides (a and b). This is not just for classroom geometry; it is the fundamental logic behind GPS trilateration, roof truss engineering, and computer graphics rendering. By calculating distance in 2D space, we can map accurate paths and structural integrity in real-world environments."
        }
    ],
    unit: [
        {
            name: "Weight Converter",
            type: "unit",
            formula: "1 kg = 2.20462 lbs",
            units: ["Kilograms", "Pounds", "Grams", "Ounces"],
            edu: "Mass and Weight conversion is critical in international shipping, medicine, and aviation. While mass (kilograms) remains constant, weight changes based on gravity, though in standard Earth calculations, we use them interchangeably. The conversion between the Metric system (grams/kilograms) and the Imperial system (ounces/pounds) requires high-precision decimal multipliers to prevent errors in fields like pharmaceutical dosing or aerospace engineering, where a minor miscalculation can lead to structural or biological failure."
        },
        {
            name: "Length / Distance",
            type: "unit",
            formula: "1 m = 3.28084 ft",
            units: ["Meters", "Feet", "Kilometers", "Miles", "Inches"],
            edu: "Distance conversion facilitates global standards in manufacturing and travel. The metric system, based on powers of ten, is used by most of the scientific community, while the imperial system remains prevalent in the US and UK construction industries. Converting meters to feet or kilometers to miles is essential for civil engineering projects, international logistics, and astronomical mapping. Accuracy here is paramount, especially when shifting between architectural blueprints designed in different regional standards."
        }
    ],
    engg: [
        {
            name: "Ohm's Law (V=IR)",
            type: "math",
            formula: "V = I × R",
            edu: "Ohm's Law is the most fundamental principle in electrical engineering. it describes the relationship between Voltage (pressure), Current (flow), and Resistance (restriction) in an ideal conductor. By understanding that voltage is directly proportional to current, engineers can design circuits that don't overheat or fail under load. This tool helps in calculating the required resistor values for LED circuits, the power draw of household appliances, and the safety limits of industrial power grids. It is the mathematical bridge between physics and technology."
        }
    ]
};

function loadGrid(cat, btn) {
    document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('current-cat-name').innerText = btn.innerText;
    
    const grid = document.getElementById('tool-grid');
    grid.innerHTML = "";
    toolset[cat].forEach(t => {
        const div = document.createElement('div');
        div.className = "tool-card";
        div.innerText = t.name;
        div.onclick = () => openTool(t);
        grid.appendChild(div);
    });
}

function openTool(tool) {
    document.getElementById('modal-title').innerText = tool.name;
    document.getElementById('edu-text').innerText = tool.edu;
    document.getElementById('edu-formula').innerText = tool.formula;
    document.getElementById('tool-modal').style.display = "flex";

    // METER ANIMATION
    const bar = document.getElementById('meter-bar');
    const valText = document.getElementById('meter-val');
    let progress = 0;
    bar.style.width = "0%";
    const interval = setInterval(() => {
        progress += 5;
        bar.style.width = progress + "%";
        valText.innerText = progress + "%";
        if (progress >= 100) clearInterval(interval);
    }, 30);

    // SWITCH UI
    if (tool.type === "unit") {
        document.getElementById('math-keypad').style.display = "none";
        document.getElementById('unit-interface').style.display = "block";
        document.getElementById('main-display').readOnly = false;
        document.getElementById('main-display').placeholder = "Enter value...";
        populateUnits(tool.units);
    } else {
        document.getElementById('math-keypad').style.display = "grid";
        document.getElementById('unit-interface').style.display = "none";
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

// UNIT CONVERSION LOGIC
function runUnitConversion() {
    const val = parseFloat(document.getElementById('main-display').value);
    if (isNaN(val)) return;
    // Placeholder for real logic (In production, use math.unit(val, from).to(to))
    const result = val * 1.5; 
    document.getElementById('main-display').value = result.toFixed(4);
}

function solveMath() {
    try {
        const res = math.evaluate(document.getElementById('main-display').value);
        document.getElementById('main-display').value = math.format(res, {precision: 10});
    } catch(e) { alert("Invalid Equation"); }
}

function press(v) { document.getElementById('main-display').value += v; }
function clearDisplay() { document.getElementById('main-display').value = ""; }
function backspace() { 
    let d = document.getElementById('main-display');
    d.value = d.value.slice(0, -1); 
}
function closeTool() { document.getElementById('tool-modal').style.display = "none"; clearDisplay(); }
function toggleTheme() { document.body.classList.toggle('dark-theme'); }

window.onload = () => loadGrid('math', document.querySelector('.cat-btn.active'));

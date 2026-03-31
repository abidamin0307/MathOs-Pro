const toolRegistry = {
    math: [
        { name: "Quadratic Equation", type: "math", formula: "x = [-b ± √(b²-4ac)] / 2a", edu: "The Quadratic Equation is a 2nd-degree polynomial used to find roots where a parabola intersects the x-axis. It is essential in ballistics, architectural design, and economic forecasting to determine equilibrium points." },
        { name: "Pythagorean Theorem", type: "math", formula: "a² + b² = c²", edu: "This theorem defines the relationship between the three sides of a right triangle. It is the core logic behind GPS trilateration, roof construction, and computer graphics mapping." },
        { name: "Circle Area", type: "math", formula: "A = π * r²", edu: "Calculates the internal space of a circle. Used in plumbing, agriculture for irrigation coverage, and mechanical engineering for gear and piston surface calculations." },
        { name: "Percentage Calculator", type: "math", formula: "(part/total)*100", edu: "Used in finance, statistics, and daily life to calculate tax, discounts, and growth rates. Essential for normalizing data sets across different scales." },
        { name: "Simple Interest", type: "math", formula: "I = P * r * t", edu: "Calculates the cost of borrowing or lending money on a flat rate. Critical for short-term loans and basic savings accounts." },
        { name: "Compound Interest", type: "math", formula: "A = P(1 + r/n)^nt", edu: "The most powerful concept in finance, calculating 'interest on interest.' Vital for long-term retirement planning and debt management." },
        { name: "Logarithms", type: "math", formula: "log10(x) = y", edu: "Used to solve exponential growth problems. Essential in chemistry (pH scale), seismology (Richter scale), and audio engineering (decibels)." },
        { name: "Mean / Average", type: "math", formula: "Σx / n", edu: "Identifies the central tendency of a data set. Used in everything from class grades to identifying economic trends." },
        { name: "Standard Deviation", type: "math", formula: "σ = √[Σ(x-μ)²/N]", edu: "Measures data dispersion. High deviation indicates volatile data; low deviation indicates consistency. Critical in quality control and risk assessment." },
        { name: "Matrix Multiplication", type: "math", formula: "[A][B] = [C]", edu: "Multi-variable logic used in 3D gaming, AI neural networks, and structural stress analysis in civil engineering." },
        { name: "Triangle Area", type: "math", formula: "0.5 * b * h", edu: "Fundamental for surveying and architecture. Used to calculate load-bearing areas and land plot sizing." },
        { name: "Volume (Sphere)", type: "math", formula: "4/3 * π * r³", edu: "Calculates 3D capacity. Essential for fuel tank design, planetary mass calculation, and medical tumor sizing." },
        { name: "Linear Equation", type: "math", formula: "y = mx + b", edu: "Models constant rate of change. Essential for business sales forecasting and constant velocity physics." },
        { name: "Surface Area (Cube)", type: "math", formula: "6 * s²", edu: "Determines material needs for packaging, painting, and thermal heat dissipation in electronics." },
        { name: "LCM / HCF", type: "math", formula: "Factor Logic", edu: "Essential in number theory, scheduling algorithms, and simplifying complex algebraic fractions." },
        { name: "Ratio Solver", type: "math", formula: "a/b = c/x", edu: "Used in recipe scaling, architectural model building, and drug dosage calculations in medicine." },
        { name: "Probability", type: "math", formula: "P(A) = n(E)/n(S)", edu: "The science of chance. Powers insurance risk models, casino odds, and scientific validation of experiment results." },
        { name: "Prime Factors", type: "math", formula: "Number DNA", edu: "The basis of modern cryptography and digital security (RSA encryption). Protects banking and private data." },
        { name: "Cosine Rule", type: "math", formula: "c² = a²+b²-2abCosC", edu: "Solves non-right triangles. Critical in aviation for wind correction and robotics for joint angle calculation." },
        { name: "Sequence Sum", type: "math", formula: "Arithmetic Series", edu: "Calculates total displacement or total payments over time. Used in loop-time analysis in computer science." }
    ],
    unit: [
        { name: "Weight (kg/lb)", type: "unit", units: ["Kilograms", "Pounds", "Grams", "Ounces"], edu: "Converts mass between Metric and Imperial systems. Crucial for aviation safety and pharmaceutical precision." },
        { name: "Length (m/ft)", type: "unit", units: ["Meters", "Feet", "Miles", "Kilometers"], edu: "Bridges international construction standards and travel distances. Essential for global manufacturing." },
        { name: "Temperature (C/F)", type: "unit", units: ["Celsius", "Fahrenheit", "Kelvin"], edu: "Converts scales of thermal energy. Key for international weather, cooking, and scientific research." },
        { name: "Digital (GB/MB)", type: "unit", units: ["Bytes", "KB", "MB", "GB", "TB"], edu: "Measures data capacity in base-2. Essential for cloud storage planning and hardware purchases." },
        { name: "Area (m2/ft2)", type: "unit", units: ["Sq Meters", "Sq Feet", "Acres", "Hectares"], edu: "The language of real estate and agriculture. Ensures correct material ordering for flooring and land value." },
        { name: "Liquid Volume", type: "unit", units: ["Liters", "Gallons", "Milliliters", "Cups"], edu: "Vital for recipe scaling, fuel logistics, and chemical mixture balancing in laboratories." },
        { name: "Pressure (PSI/Bar)", type: "unit", units: ["PSI", "Bar", "Pascal", "ATM"], edu: "Critical for scuba safety, tire pressure, and high-pressure industrial pipe engineering." },
        { name: "Speed (kmh/mph)", type: "unit", units: ["KM/H", "MPH", "Knots", "M/S"], edu: "Converts velocity for travelers and maritime navigators. Essential for understanding physics of motion." },
        { name: "Power (W/HP)", type: "unit", units: ["Watts", "Horsepower", "BTU", "kW"], edu: "Bridges mechanical and electrical power ratings. Essential for motor selection and appliance efficiency." },
        { name: "Fuel Economy", type: "unit", units: ["L/100km", "MPG"], edu: "Compares vehicle efficiency across borders. Essential for environmental impact tracking and travel planning." },
        { name: "Time Converter", type: "unit", units: ["Seconds", "Minutes", "Hours", "Days", "Weeks"], edu: "Simplifies project management and physics time-dilation calculations." },
        { name: "Torque (Nm/lb-ft)", type: "unit", units: ["Newton-Meter", "Pound-Foot"], edu: "Crucial for automotive engine tuning and structural bolt tensioning in construction." },
        { name: "Energy (J/Cal)", type: "unit", units: ["Joules", "Calories", "Kilowatt-hour"], edu: "Translates between dietary energy, electrical usage, and thermodynamic heat." },
        { name: "Force (N/lbf)", type: "unit", units: ["Newtons", "Pound-force"], edu: "Fundamental for structural physics and calculating the impact of gravity on structures." },
        { name: "Data Rate", type: "unit", units: ["Mbps", "Gbps", "KB/s"], edu: "Measures internet speed and data transfer efficiency. Key for network engineering." },
        { name: "Frequency", type: "unit", units: ["Hertz", "kHz", "MHz", "GHz"], edu: "Measures cycles per second. Key for radio waves, CPU speeds, and audio tuning." },
        { name: "Angle (Deg/Rad)", type: "unit", units: ["Degrees", "Radians", "Gradians"], edu: "Crucial for calculus and mechanical engineering involving rotational movement." },
        { name: "Density (kg/m3)", type: "unit", units: ["kg/m³", "lb/ft³"], edu: "Determines if objects float and helps in material science to identify substance purity." },
        { name: "Illuminance", type: "unit", units: ["Lux", "Foot-candle"], edu: "Used in architectural lighting design and photography to ensure correct exposure." },
        { name: "Radioactivity", type: "unit", units: ["Becquerel", "Curie"], edu: "Bridges scientific units for nuclear physics and medical radiology safety." }
    ],
    engg: [
        { name: "Ohm's Law", type: "math", formula: "V = I * R", edu: "The core of electronics. Calculates voltage, current, and resistance. Powers everything from phones to power grids." },
        { name: "Fluid Pressure", type: "math", formula: "P = ρ * g * h", edu: "Used to design dams, submarine hulls, and plumbing systems for high-rise buildings." },
        { name: "Heat Transfer", type: "math", formula: "Q = mcΔT", edu: "Calculates energy needed to change temperature. Vital for HVAC design and engine cooling systems." },
        { name: "Beam Deflection", type: "math", formula: "Stress/Strain", edu: "Determines how much a bridge or floor will bend under weight. Critical for civil safety." },
        { name: "Kinetic Energy", type: "math", formula: "0.5 * m * v²", edu: "Calculates impact force. Used in car safety crash tests and ballistics." },
        { name: "Capacitance", type: "math", formula: "C = Q / V", edu: "Used in circuit design to filter noise and store energy for camera flashes and EV batteries." },
        { name: "Torque Calc", type: "math", formula: "τ = r * F * sinθ", edu: "Calculates rotational force. Essential for engine mechanics and robotics arm design." },
        { name: "Resistor Color", type: "math", formula: "Color Code", edu: "Decodes the resistance value of components based on visual bands. Daily tool for PCB assembly." },
        { name: "Bernoulli's", type: "math", formula: "P + ½ρv² + ρgh", edu: "Explains lift in airplane wings and flow in water pipes. Foundation of aerodynamics." },
        { name: "Elastic Modulus", type: "math", formula: "σ / ε", edu: "Measures material stiffness. Helps engineers choose between steel, aluminum, or carbon fiber." },
        { name: "Power Factor", type: "math", formula: "kW / kVA", edu: "Measures electrical efficiency in AC circuits. Crucial for industrial energy management." },
        { name: "Gear Ratio", type: "math", formula: "T2 / T1", edu: "Determines torque vs speed in transmissions for bikes, cars, and industrial robots." },
        { name: "Mach Number", type: "math", formula: "v / a", edu: "Calculates speed relative to sound. Essential for supersonic aerospace engineering." },
        { name: "Reynolds Num", type: "math", formula: "ρvD / μ", edu: "Predicts if fluid flow is smooth or turbulent. Key for oil pipelines and wing design." },
        { name: "Spring Force", type: "math", formula: "F = -kx", edu: "Calculates tension and compression. Used in vehicle suspension and mechanical watches." },
        { name: "Voltage Divider", type: "math", formula: "Vout = Vin(R2/R1+R2)", edu: "Used to create specific voltages in electronic circuits for sensors and microchips." },
        { name: "Work Done", type: "math", formula: "W = F * d", edu: "Measures energy transfer. Essential for mechanical efficiency and lift calculations." },
        { name: "Antenna Length", type: "math", formula: "λ = c / f", edu: "Calculates the physical size of radio and Wi-Fi antennas for perfect signal resonance." },
        { name: "Hydraulic Lift", type: "math", formula: "F1/A1 = F2/A2", edu: "Explains how small force lifts heavy cars. Basis of heavy machinery and braking systems." },
        { name: "Inductance", type: "math", formula: "V = L(di/dt)", edu: "Calculates energy storage in magnetic fields. Key for wireless charging and transformers." }
    ]
};

let currentTool = null;

function loadGrid(cat, btn) {
    document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('current-cat-name').innerText = btn.innerText;
    const grid = document.getElementById('tool-grid');
    grid.innerHTML = "";
    toolRegistry[cat].forEach(t => {
        const d = document.createElement('div');
        d.className = "tool-card";
        d.innerText = t.name;
        d.onclick = () => openTool(t);
        grid.appendChild(d);
    });
}

function openTool(t) {
    currentTool = t;
    document.getElementById('modal-title').innerText = t.name;
    document.getElementById('edu-text').innerText = t.edu;
    document.getElementById('edu-formula').innerText = t.formula || "Conceptual Model";
    document.getElementById('tool-modal').style.display = "flex";
    
    // Meter Animation
    const bar = document.getElementById('meter-bar');
    bar.style.width = "0%";
    setTimeout(() => { bar.style.width = "100%"; }, 100);

    const k = document.getElementById('math-keypad');
    const u = document.getElementById('unit-interface');
    
    if(t.type === "unit") {
        k.style.display = "none"; u.style.display = "block";
        populateUnits(t.units);
    } else {
        k.style.display = "grid"; u.style.display = "none";
    }
}

function populateUnits(list) {
    const f = document.getElementById('u-from'), t = document.getElementById('u-to');
    f.innerHTML = ""; t.innerHTML = "";
    list.forEach(i => {
        f.innerHTML += `<option value="${i}">${i}</option>`;
        t.innerHTML += `<option value="${i}">${i}</option>`;
    });
}

function solveMath() {
    try {
        const val = document.getElementById('main-display').value;
        const res = math.evaluate(val);
        document.getElementById('result-preview').innerText = "Result: " + math.format(res, {precision: 10});
    } catch(e) { document.getElementById('result-preview').innerText = "Invalid Input"; }
}

function runConversion() {
    const v = parseFloat(document.getElementById('main-display').value);
    if(isNaN(v)) return;
    document.getElementById('result-preview').innerText = "Calculated Value: " + (v * 1.085).toFixed(4);
}

function press(v) { document.getElementById('main-display').value += v; }
function clearDisplay() { document.getElementById('main-display').value = ""; document.getElementById('result-preview').innerText = ""; }
function backspace() { 
    let d = document.getElementById('main-display');
    d.value = d.value.slice(0, -1); 
}
function closeTool() { document.getElementById('tool-modal').style.display = "none"; clearDisplay(); }
function toggleTheme() { document.body.classList.toggle('dark-theme'); }

function filterTools() {
    const v = document.getElementById('toolSearch').value.toLowerCase();
    document.querySelectorAll('.tool-card').forEach(c => {
        c.style.display = c.innerText.toLowerCase().includes(v) ? "block" : "none";
    });
}

window.onload = () => loadGrid('math', document.querySelector('.cat-btn.active'));

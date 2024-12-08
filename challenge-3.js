// Function to calculate PAYE (Progressive tax).
function calculatePAYE(grossSalary) {
    if (grossSalary <= 24000) return grossSalary * 0.1;
    if (grossSalary <= 32333) return 2400 + (grossSalary - 24000) * 0.25;
    if (grossSalary <= 500000) return 2400 + (32333 - 24000) * 0.25 + (grossSalary - 32333) * 0.30;
    return 2400 + (32333 - 24000) * 0.25 + (500000 - 32333) * 0.30 + (grossSalary - 500000) * 0.35;
}

// Function to calculate NHIF deductions.
function calculateNHIF(grossSalary) {
    if (grossSalary <= 5999) return 150;
    if (grossSalary <= 7999) return 300;
    if (grossSalary <= 11999) return 400;
    if (grossSalary <= 14999) return 500;
    return grossSalary <= 99999 ? 1200 : 1700; // Simplified the remaining ranges.
}

// Function to calculate NSSF deductions (Tier 1).
function calculateNSSF(basicSalary) {
    return Math.min(basicSalary, 6000) * 0.06;
}

// Main function to calculate net salary.
function calculateNetSalary() {
    let basicSalary = parseFloat(prompt("Enter basic salary:"));
    let benefits = parseFloat(prompt("Enter benefits:"));
    
    if (isNaN(basicSalary) || isNaN(benefits)) return alert("Invalid input.");

    let grossSalary = basicSalary + benefits;
    let payee = calculatePAYE(grossSalary);
    let nhif = calculateNHIF(grossSalary);
    let nssf = calculateNSSF(basicSalary);
    let netSalary = grossSalary - payee - nhif - nssf;

    alert(`
        Basic Salary: ${basicSalary.toFixed(2)}
        Benefits: ${benefits.toFixed(2)}
        Gross Salary: ${grossSalary.toFixed(2)}
        PAYE: ${payee.toFixed(2)}
        NHIF: ${nhif.toFixed(2)}
        NSSF: ${nssf.toFixed(2)}
        Net Salary: ${netSalary.toFixed(2)}
    `);
}

calculateNetSalary();


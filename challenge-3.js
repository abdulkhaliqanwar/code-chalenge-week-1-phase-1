// Function to calculate Gross Salary
const grossSalary = (basicSalary, benefits) => {
    console.log(`Gross Salary: KSh ${basicSalary + benefits}`);
    return basicSalary + benefits;
}

// Function to calculate NHIF Deduction
const nhifDeductions = (grossSalary, NHIF_RATE) => {
    const nhifDeduction = grossSalary * NHIF_RATE;
    console.log(`NHIF Deduction: KSh ${nhifDeduction}`);
    return nhifDeduction;
}

// Function to calculate NSSF Deduction
const nssfDeductions = (grossSalary, NSSF_RATE) => {
    const nssfDeduction = grossSalary * NSSF_RATE;
    console.log(`NSSF Deduction: KSh ${nssfDeduction}`);
    return nssfDeduction;
}

// Function to calculate Taxable Income
const taxableIncome = (grossSalary, nhifDeduction, nssfDeduction) => {
    const taxableIncome = grossSalary - nhifDeduction - nssfDeduction;
    console.log(`Taxable Income: KSh ${taxableIncome}`);
    return taxableIncome;
}

// Function to calculate Net Salary
const netSalary = (grossSalary, NHIFDeduction, NSSFDeduction, tax) => {
    const netSalary = grossSalary - NHIFDeduction - NSSFDeduction - tax;
    console.log(`Net Salary: KSh ${netSalary}`);
    return netSalary;
}

// Function calls
const gross = grossSalary(basicSalary, benefits);
const nhifDeduction = nhifDeductions(gross, NHIF_RATE);
const nssfDeduction = nssfDeductions(gross, NSSF_RATE);
const taxable = taxableIncome(gross, nhifDeduction, nssfDeduction);
const net = netSalary(gross, nhifDeduction, nssfDeduction, tax);

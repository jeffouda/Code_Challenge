//Net Salary Calculator
function calculateNetSalary(basicSalary, benefits) {
  const grossSalary = basicSalary + benefits;

  // PAYE (progressive)
  let tax = 0;
  if (grossSalary <= 24000) {
    tax = grossSalary * 0.1;
  } else if (grossSalary <= 32333) {
    tax = 24000 * 0.1 + (grossSalary - 24000) * 0.25;
  } else if (grossSalary <= 500000) {
    tax = 24000 * 0.1 + 8333 * 0.25 + (grossSalary - 32333) * 0.3;
  } else if (grossSalary <= 800000) {
    tax =
      24000 * 0.1 + 8333 * 0.25 + 467667 * 0.3 + (grossSalary - 500000) * 0.325;
  } else {
    tax =
      24000 * 0.1 +
      8333 * 0.25 +
      467667 * 0.3 +
      300000 * 0.325 +
      (grossSalary - 800000) * 0.35;
  }

  // Apply personal relief
  tax = tax - 2400;
  if (tax < 0) tax = 0;

  // SHIF
  const shif = grossSalary * 0.0275;

  // NSSF (Feb 2025 onwards)
  let nssfTier1 = Math.min(grossSalary, 8000) * 0.06;
  let nssfTier2 = 0;
  if (grossSalary > 8000) {
    nssfTier2 = Math.min(grossSalary - 8000, 72000 - 8000) * 0.06;
  }
  const nssf = nssfTier1 + nssfTier2;

  //  Housing Levy
  const housingLevy = grossSalary * 0.015;

  // Net Salary
  const netSalary = grossSalary - (tax + shif + nssf + housingLevy);

  return {
    grossSalary,
    paye: Math.round(tax),
    shif: Math.round(shif),
    nssf: Math.round(nssf),
    housingLevy: Math.round(housingLevy),
    netSalary: Math.round(netSalary),
  };
}

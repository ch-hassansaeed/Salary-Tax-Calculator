export enum Occupation {
  Programmer = 0,
  Teacher = 1,
  Cashier = 2,
}

export enum City {
  Stockholm = 0,
  Gothenburg = 1,
}
export interface Calculator {
  experienceYears: number;
  occupation: Occupation;
  city: City;
  incomeYear: string;
  netSalary: number;
}

export function basicSalaryByOccupation(occupation: Occupation) {
  let basicSalary = 0;
  if (occupation == Occupation.Programmer) {
    basicSalary = 30000;
  } else if (occupation == Occupation.Teacher) {
    basicSalary = 27000;
  } else if (occupation == Occupation.Cashier) {
    basicSalary = 25000;
  }
  return basicSalary;
}
export function calcSalaryByExperienceYears(
  grossSalary: number,
  experienceYears: number,
) {
  if (experienceYears >= 0 && experienceYears <= 3) {
    grossSalary = grossSalary + 0;
  } else if (experienceYears >= 4 && experienceYears <= 7) {
    grossSalary = grossSalary + grossSalary * 0.2;
  } else if (experienceYears >= 8 && experienceYears <= 10) {
    grossSalary = grossSalary + grossSalary * 0.4;
  } else if (experienceYears >= 11) {
    grossSalary = grossSalary + grossSalary * 0.6;
  }

  return grossSalary;
}
export function calculateBasicTaxSlab1(
  grossSalary: number,
  city: City,
  incomeYear: string,
) {
  let basicTax = 0;
  const salary = grossSalary >= 36000 ? 36000 : grossSalary; //first slab has no tax
  if (city == City.Stockholm) {
    if (incomeYear === "2019") {
      basicTax = salary * 0.3;
    } else if (incomeYear === "2020") {
      basicTax = salary * 0.29;
    }
  }

  if (city == City.Gothenburg) {
    if (incomeYear === "2019") {
      basicTax = salary * 0.25;
    } else if (incomeYear === "2020") {
      basicTax = salary * 0.22;
    }
  }

  return basicTax;
}

export function calculateExtraHighSlab2(grossSalary: number) {
  let highTax = 0;
  if (grossSalary > 36000) {
    //calculate for 2nd slab
    highTax = (grossSalary - 36000) * 0.5;
  }
  return highTax;
}

export function calculateExtraHighSlab3(grossSalary: number) {
  let extraHighTax = 0;
  if (grossSalary > 45000) {
    //calculate for erd slab
    extraHighTax = (grossSalary - 45000) * 0.7;
  }
  return extraHighTax;
}

import {
  basicSalaryByOccupation,
  calcSalaryByExperienceYears,
  calculateBasicTaxSlab1,
  calculateExtraHighSlab2,
  calculateExtraHighSlab3,
  City,
  Occupation,
} from "../Calculator";

describe("basicSalaryByOccupation: Verify that basic salary getting by occupation", () => {
  test.only("verify for input as Programmer.", () => {
    const verifyResult = basicSalaryByOccupation(Occupation.Programmer);
    expect(verifyResult).toEqual(30000);
  });
  test.only("verify for input as Teacher.", () => {
    const verifyResult = basicSalaryByOccupation(Occupation.Teacher);
    expect(verifyResult).toEqual(27000);
  });
  test.only("verify for input as Cashier.", () => {
    const verifyResult = basicSalaryByOccupation(Occupation.Cashier);
    expect(verifyResult).toEqual(25000);
  });
});

describe("calcSalaryByExperienceYears: Verify that calculated salary getting valid by ExperienceYears", () => {
  test.only("verify for input as 0-3 years of experience wrt 30000 basic salary.", () => {
    const verifyResult = calcSalaryByExperienceYears(30000, 3);
    expect(verifyResult).toEqual(30000);
  });
  test.only("verify for input as 4-7 years of experience wrt 30000 basic salary.", () => {
    const verifyResult = calcSalaryByExperienceYears(30000, 5);
    expect(verifyResult).toEqual(36000);
  });
  test.only("verify for input as 8-10 years of experience wrt 30000 basic salary.", () => {
    const verifyResult = calcSalaryByExperienceYears(30000, 9);
    expect(verifyResult).toEqual(42000);
  });
  test.only("verify for input as >=11 years of experience wrt 30000 basic salary.", () => {
    const verifyResult = calcSalaryByExperienceYears(30000, 11);
    expect(verifyResult).toEqual(48000);
  });
});

describe("calculateBasicTaxSlab1: Verify that calculated tax getting valid by Gross Salary", () => {
  test.only("verify for Basic Tax Free Slab1 wrt 48000 Gross salary,Stockholm,2020.", () => {
    const verifyResult = calculateBasicTaxSlab1(48000, City.Stockholm, "2020");
    expect(verifyResult).toEqual(10440);
  });
  test.only("verify for Basic Tax Free Slab1 wrt 48000 Gross salary,Stockholm,2019.", () => {
    const verifyResult = calculateBasicTaxSlab1(48000, City.Stockholm, "2019");
    expect(verifyResult).toEqual(10800);
  });
  test.only("verify for Basic Tax Free Slab1 wrt 48000 Gross salary,Gothenburg,2020.", () => {
    const verifyResult = calculateBasicTaxSlab1(48000, City.Gothenburg, "2020");
    expect(verifyResult).toEqual(7920);
  });
  test.only("verify for Basic Tax Free Slab1 wrt 48000 Gross salary,Gothenburg,2019.", () => {
    const verifyResult = calculateBasicTaxSlab1(48000, City.Gothenburg, "2019");
    expect(verifyResult).toEqual(9000);
  });
  test.only("verify for Basic Tax Free Slab1 wrt 48000 Gross salary,Gothenburg,Invalid Year.", () => {
    const verifyResult = calculateBasicTaxSlab1(48000, City.Gothenburg, "2099");
    expect(verifyResult).toEqual(0); //invalid year return 0
  });
});

describe("calculateExtraHighSlab2: Verify that calculated tax getting valid by Gross Salary", () => {
  test.only("verify for Basic Tax Free Slab2(GrossSalary>36000) wrt 48000 Gross salary", () => {
    const verifyResult = calculateExtraHighSlab2(48000);
    expect(verifyResult).toEqual(6000);
  });
});

describe("calculateExtraHighSlab3: Verify that calculated tax getting valid by Gross Salary", () => {
  test.only("verify for Basic Tax Free Slab3(GrossSalary>45000) wrt 48000 Gross salary", () => {
    const verifyResult = calculateExtraHighSlab3(48000);
    expect(verifyResult).toEqual(2100);
  });
});

import validateBirthdate from './validateBirthdate';

describe('validateBirthdate()', () => {
  it('should return false if the date is empty', () => {
    expect(validateBirthdate()).toBe(false);
  });
  it('should return true if the date is less than 90 years', () => {
    let birthDate = new Date();
    birthDate = birthDate.setFullYear(birthDate.getFullYear() - 45);

    expect(validateBirthdate(birthDate)).toBe(true);
  });
  it('should return true if the date is older than 18 years', () => {
    let birthDate = new Date();
    birthDate = birthDate.setFullYear(birthDate.getFullYear() - 30);

    expect(validateBirthdate(birthDate)).toBe(true);
  });
  it('should return false if the date is older than 90 years', () => {
    let birthDate = new Date();
    birthDate = birthDate.setFullYear(birthDate.getFullYear() - 91);

    expect(validateBirthdate(birthDate)).toBe(false);
  });
  it('should return false if the date is less than 18 years', () => {
    let birthDate = new Date();
    birthDate = birthDate.setFullYear(birthDate.getFullYear() - 15);

    expect(validateBirthdate(birthDate)).toBe(false);
  });
});

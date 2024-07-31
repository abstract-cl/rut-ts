import { expect } from './libs.tests/chai.commons';
import validatePeruvianDNI from '../lib/validate-peruvian-dni';

describe('validatePeruvianDNI', () => {
  it('should return true for a valid numeric DNI', () => {
    expect(validatePeruvianDNI('71390300-6')).to.be.true;
  });

  it('should return true for a valid alphanumeric DNI', () => {
    expect(validatePeruvianDNI('713903006')).to.be.true;
  });

  it('should return false for an invalid DNI', () => {
    expect(validatePeruvianDNI('12345678-0')).to.be.false;
  });

  it('should return false for a DNI with incorrect length', () => {
    expect(validatePeruvianDNI('1234567')).to.be.false;
  });

  it('should return false for an empty string', () => {
    expect(validatePeruvianDNI('')).to.be.false;
  });

  it('should return false for undefined input', () => {
    expect(validatePeruvianDNI(undefined)).to.be.false;
  });

  it('should return false for null input', () => {
    expect(validatePeruvianDNI(null)).to.be.false;
  });

  it('should handle DNIs with dots and dashes', () => {
    expect(validatePeruvianDNI('71.390.300-6')).to.be.true;
  });

  it('should return false for DNIs with invalid characters', () => {
    expect(validatePeruvianDNI('12345678X')).to.be.false;
  });
});

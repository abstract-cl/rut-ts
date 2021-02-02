import { expect } from './libs.tests/chai.commons';
import validateRut from '../lib/validate-rut';

describe('validateRut', () => {
  it('should return TRUE if rut is valid', () => {
    const rut = '18019150K';
    const result = validateRut(rut);
    expect(result).to.be.true;
  });

  it('should return TRUE if rut is valid with format', () => {
    const rut = '18.019.150.K';
    const result = validateRut(rut);
    expect(result).to.be.true;
  });

  it('should return TRUE if correct rut ends in zero', () => {
    const rut = '53061850';
    const result = validateRut(rut);
    expect(result).to.be.true;
  });

  it('should return FALSE if rut is invalid', () => {
    const rut = '180191501';
    const result = validateRut(rut);
    expect(result).to.be.false;
  });

  it('should return FALSE if rut is invalid with format', () => {
    const rut = '18.019.150-1';
    const result = validateRut(rut);
    expect(result).to.be.false;
  });

  it('should return FALSE if rut is 00000000', () => {
    const rut = '00000000';
    const result = validateRut(rut);
    expect(result).to.be.false;
  });

  it('should return FALSE if rut is 00.000.000-0', () => {
    const rut = '00.000.000-0';
    const result = validateRut(rut);
    expect(result).to.be.false;
  });

  it('should return FALSE if rut is all string', () => {
    const rut = 'ñjsdlkfjñsa';
    const result = validateRut(rut);
    expect(result).to.be.false;
  });

  it('should return FALSE if rut is undefined', () => {
    const rut = undefined;
    const result = validateRut(rut);
    expect(result).to.be.false;
  });

  it('should return FALSE if rut is empty', () => {
    const rut = '';
    const result = validateRut(rut);
    expect(result).to.be.false;
  });
});

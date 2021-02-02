import { expect } from './libs.tests/chai.commons';
import formatRut from '../lib/format-rut';

describe('formatRut', () => {
  it('should format the rut without . and -', () => {
    const rut = '180190392';
    const result = formatRut(rut);
    expect(result).to.equal('18.019.039-2');
  });

  it('should format the rut without .', () => {
    const rut = '18019039-2';
    const result = formatRut(rut);
    expect(result).to.equal('18.019.039-2');
  });

  it('should format the rut without -', () => {
    const rut = '18.019.0392';
    const result = formatRut(rut);
    expect(result).to.equal('18.019.039-2');
  });

  it('should not format the rut', () => {
    const rut = '18.019.039-2';
    const result = formatRut(rut);
    expect(result).to.equal('18.019.039-2');
  });

  it('should return same rut because it have less than 7 characters', () => {
    const rut = '18.019.0';
    const result = formatRut(rut);
    expect(result).to.equal('18.019.0');
  });

  it('should return undefined when recive a undefined rut', () => {
    const rut = undefined;
    const result = formatRut(rut);
    expect(result).to.equal(undefined);
  });

  it('should return undefined when recive a null rut', () => {
    const rut = null;
    const result = formatRut(rut);
    expect(result).to.equal(undefined);
  });
});

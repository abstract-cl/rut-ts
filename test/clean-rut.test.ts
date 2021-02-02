import { expect } from './libs.tests/chai.commons';
import cleanRut from '../lib/clean-rut';

describe('cleanRut', () => {
  it('should remove . and - from rut', () => {
    const rut = '18.019.150-K';
    const result = cleanRut(rut);
    expect(result).to.equal('18019150K');
  });

  it('should remove . from rut', () => {
    const rut = '18.019.150K';
    const result = cleanRut(rut);
    expect(result).to.equal('18019150K');
  });

  it('should remove - from rut', () => {
    const rut = '18019150-K';
    const result = cleanRut(rut);
    expect(result).to.equal('18019150K');
  });

  it('should transform lower case k to upper case K', () => {
    const rut = '18019150k';
    const result = cleanRut(rut);
    expect(result).to.equal('18019150K');
  });

  it('should return undefined in case rut is undefined', () => {
    const rut = undefined;
    const result = cleanRut(rut);
    expect(result).to.equal(undefined);
  });

  it('should return undefined in case rut is null', () => {
    const rut = null;
    const result = cleanRut(rut);
    expect(result).to.equal(undefined);
  });
});

import cleanRut from './clean-rut';

const validateRut = (rut: string | undefined | null): boolean => {
  if (!rut) return false;
  const trimedRut = rut.trim();

  const cleanedRut = cleanRut(trimedRut);
  if (!cleanedRut) return false;
  const rutElements = cleanedRut.split('');
  const dv = rutElements.pop();
  if (!dv) return false;

  let multiplier = 2;
  let polynomialSum = 0;
  rutElements.reverse().forEach((element) => {
    polynomialSum += parseInt(element, 10) * multiplier;
    multiplier += 1;
    if (multiplier === 8) multiplier = 2;
  });

  const rutModule = 11 - (polynomialSum % 11);
  if (rutModule === 10 && dv === 'K') return true;
  if (polynomialSum !== 0 && rutModule === 11 && parseInt(dv, 10) === 0)
    return true;
  if (rutModule === parseInt(dv, 10)) return true;
  return false;
};

export default validateRut;

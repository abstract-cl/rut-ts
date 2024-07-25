/* eslint-disable no-plusplus */
import cleanRut from './clean-rut';

const MULTIPLES: number[] = [3, 2, 7, 6, 5, 4, 3, 2];
const CONTROL_DIGITS = {
  numbers: [6, 7, 8, 9, 0, 1, 1, 2, 3, 4, 5],
  letters: ['K', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'],
};

/**
 * Validates a Peruvian DNI (Documento Nacional de Identidad)
 * @param data The DNI to validate
 * @returns boolean indicating whether the DNI is valid
 */
const validatePeruvianDNI = (data: string | undefined | null): boolean => {
  const dni = cleanRut(data);
  if (!dni || dni.length < 9) return false;

  const [numDni, controlDigit] = [dni.slice(0, -1), dni.slice(-1)];

  let sum = 0;
  for (let i = 0; i < 8; i++) {
    sum += parseInt(numDni[i], 10) * MULTIPLES[i];
  }

  const key = 11 - (sum % 11);
  const index = key === 11 ? 0 : key;

  if (/^\d+$/.test(dni)) {
    return CONTROL_DIGITS.numbers[index] === parseInt(controlDigit, 10);
  }
  return CONTROL_DIGITS.letters[index] === controlDigit;
};

export default validatePeruvianDNI;

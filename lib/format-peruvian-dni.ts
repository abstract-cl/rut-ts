import cleanRut from './clean-rut';

const formatPeruvianDni = (
  dni: string | null | undefined,
): string | undefined => {
  if (!dni) return undefined;
  const cleanedRut = cleanRut(dni);
  if (!cleanedRut || cleanedRut.length < 8) return dni;
  const dniElements = cleanedRut.split('');
  const rutLength = dniElements.length;
  dniElements.splice(rutLength - 1, 0, '-');
  return dniElements.join('');
};

export default formatPeruvianDni;

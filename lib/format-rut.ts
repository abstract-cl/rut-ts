import cleanRut from './clean-rut';

const formatRut = (rut: string | null | undefined): string | undefined => {
  if (!rut) return undefined;
  const cleanedRut = cleanRut(rut);
  if (!cleanedRut || cleanedRut.length < 7) return rut;
  const rutElements = cleanedRut.split('');
  const rutLength = rutElements.length;
  rutElements.splice(rutLength - 1, 0, '-');
  rutElements.splice(rutElements.length - 5, 0, '.');
  rutElements.splice(rutElements.length - 9, 0, '.');
  return rutElements.join('');
};

export default formatRut;

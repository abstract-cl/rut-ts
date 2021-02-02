const cleanRut = (rut: string | undefined | null): string | undefined => {
  if (!rut) return undefined;
  const trimedRut = rut.trim();
  const cleanedRut = trimedRut.replace(/\.|-/g, '').toUpperCase();
  return cleanedRut;
};

export default cleanRut;

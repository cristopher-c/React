export interface user {
  id: number;
  name: string;
  location: string;
  role: string;
}

export const getUserAction = async(id:number) => {
  await new Promise<user>((res) => setTimeout(res, 2000));
  return({
    id: id,
    name: 'Cristopher Castro',
    location: 'Bogotá, Colombia',
    role: 'Administrador'
  });
}

export interface Vaga {
  id?: string;
  posicao: string;
  content: string;
  departamento?: string;
  createdAt: Date | any;
  updatedAt?: Date | any;
  emailDepartamento?: string;
  imageUrl: string; // Make sure this is required if you're using it
}
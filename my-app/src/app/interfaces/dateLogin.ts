export interface DataCreate {
  name: string;
  email: string;
  company: string;
}

export interface DataAvance extends DataCreate {
  cnpj: number;
  password: string,
}

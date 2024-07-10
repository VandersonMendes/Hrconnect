export interface DateCreate {
  name: string;
  email: string;
  company: string;
}

export interface DateAvance extends DateCreate {
  cnpj: number;
  password: string,
}

export interface DateCreate {
  name: string;
  email: string;
  company: string;
}

export interface DateAvance extends DateCreate {
  cpnj: number;
  password: string
}

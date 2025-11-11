export type user = {
  id: number;
  nome:string;
  sector:string;
  senha:string;
  email:string;
  telefone:string;
}
export type lups = {
  id: number;
  nome: string;
  descricao: string;
  passos:[{ordem:number; texto:string; foto:string;}];
}
export type Category = {
  id: number;
  categoria: string;
}
export type Status={
  feito:string;
  emCurso:string;
  afazer:string;
}
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
export type codigoParada ={
  codigo: string;
  nome: string;
}
export type CategoriaCodigoParada = {
  codigo:number;
  nome:string;
  categoria:string;
}
export type CodigoParadaComposto ={
  codigo: codigoParada[];
  categoria:string;
}
export type Categoria = {
  id: number;
  nome: string;
}
export type Status={
  feito:string;
  emCurso:string;
  afazer:string;
}
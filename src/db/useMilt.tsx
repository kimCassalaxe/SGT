import { Milt, MiltPassos, MiltBd } from '../type';
import { getDb } from "./connection";

export function useMilt() {
  async function getAllMilt(){
  try {
    const db = await getDb();
     // Buscar Todos os Milts no banco
    const miltList:MiltBd[]|null= await db.getAllAsync(
      "SELECT * FROM milt"
    );
    // Buscar Todos os passos de cada Milt no banco
    const miltPassosList:MiltPassos[]|null = await db.getAllAsync(`SELECT * FROM mult_passos`);
    // Verificar retorno
   
    if(miltList == null || miltPassosList == null){
      console.log("Nenhuma Milt encontrado.");
      return null; // Nenhuma Milt encontrado.
    }
 
    const MiltsListCompost:Milt[] =[];
    miltList.forEach((milt) =>{
    const passos:MiltPassos[] =[];
      miltPassosList.forEach((passo:MiltPassos)=>{
        if(milt.id == passo.id_milt){
          passos.push({
            id:passo.id,
            id_milt:passo.id_milt,
            numero:passo.numero,
            texto:passo.texto
          });  
        }
      });
      MiltsListCompost.push({
        id:milt.id,
        nome:milt.nome,
        descricao:milt.descricao,
        passos:passos,
        frequencia:milt.frequencia,
      });
    });
    return {list:MiltsListCompost};
  } catch (error) {
    console.error("Erro ao buscar dos milts:", error);
    return null;
  }
  }
  return {getAllMilt}
}
 

/*
   // Apagar tabelas (uma por vez)
  await db.execAsync(`DROP TABLE IF EXISTS mult_passos;`);
  await db.execAsync(`DROP TABLE IF EXISTS milt;`);

  await db.execAsync(`
  CREATE TABLE IF NOT EXISTS milt (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome VARCHAR(150) NOT NULL,
    descricao TEXT,
    frequencia VARCHAR(50)
);`);
 await db.execAsync(`
CREATE TABLE mult_passos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    id_milt INT NOT NULL,
    numero INT NOT NULL,
    texto TEXT NOT NULL,
    FOREIGN KEY (id_milt) REFERENCES milt(id) ON DELETE CASCADE
);`);
await db.execAsync(`
INSERT INTO milt (nome, descricao, frequencia) VALUES
('Verificação de Sistema', 'Rotina diária para garantir que o sistema esteja funcionando corretamente.', 'Diária'),
('Inspeção de Motor', 'Análise visual e funcional do motor para identificar falhas.', 'Semanal'),
('Calibração de Sensores', 'Ajuste preciso de sensores para garantir medidas confiáveis.', 'Mensal'),
('Teste de Segurança', 'Avaliação completa dos protocolos de segurança da máquina.', 'Semestral'),
('Limpeza Geral', 'Processo de limpeza profunda dos componentes internos e externos.', 'Diária');`);
await db.execAsync(`
INSERT INTO mult_passos (id_milt, numero, texto) VALUES
(1, 1, 'Ligar a máquina e aguardar inicialização completa.'),
(1, 2, 'Verificar alertas no painel central.'),
(1, 3, 'Executar teste rápido de resposta.'),
(1, 4, 'Registrar status no sistema de manutenção.'),
(2, 1, 'Abrir compartimento do motor.'),
(2, 2, 'Verificar nível do óleo.'),
(2, 3, 'Analisar ruídos durante operação.'),
(2, 4, 'Testar temperatura após 5 minutos de funcionamento.'),
(3, 1, 'Desativar sistema antes da calibração.'),
(3, 2, 'Ajustar sensor principal de pressão.'),
(3, 3, 'Validar leitura com instrumento externo.'),
(3, 4, 'Salvar configurações no sistema.'),
(4, 1, 'Inspecionar travas e dispositivos de segurança.'),
(4, 2, 'Verificar sensores de emergência.'),
(4, 3, 'Testar desligamento automático.'),
(4, 4, 'Emitir relatório de conformidade.'),
(5, 1, 'Desligar equipamento e aguardar resfriamento.'),
(5, 2, 'Remover sujeira superficial com ar comprimido.'),
(5, 3, 'Aplicar solvente nas áreas críticas.'),
(5, 4, 'Reinstalar tampas e proteger componentes.');
`);
*/
  
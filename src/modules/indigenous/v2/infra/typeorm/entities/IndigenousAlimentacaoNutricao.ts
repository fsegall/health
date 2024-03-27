import { Column, Entity, PrimaryColumn } from 'typeorm';
import { uuid } from 'uuidv4';

@Entity('alimentacao_nutricao_indigena')
export class IndigenousAlimentacaoNutricao {
  @PrimaryColumn()
  id: string;

  @Column()
  entrevista_indigena_id: string;

  @Column()
  possui_moradores_menores_de_16: string;

  @Column()
  preocupação_nao_conseguir_comida: string;

  @Column()
  nao_comeu_comida_cultura?: string;

  @Column()
  nao_comeu_comida_saudavel?: string;

  @Column()
  faltou_comida?: string;

  @Column()
  dia_todo_sem_comer?: string;

  @Column()
  comeu_menos_para_deixar_comida_crianca?: string;

  @Column()
  crianca_comeu_menos?: string;

  @Column()
  criança_dia_todo_sem_comer?: string;

  @Column()
  constrangimento_pedir_ajuda_alimentos: string;

  @Column()
  morador_faz_horta: string;

  @Column()
  motivo_morador_nao_faz_horta?: string;

  @Column()
  alimentos_da_horta?: string;

  @Column()
  frutiferas_nas_proximidades: string;

  @Column()
  coleta_castanhas_cocos_frutas: string;

  @Column()
  funcao_cultivo_horta?: string;

  @Column()
  origem_semente_plantio?: string;

  @Column()
  adiciona_veneno_na_plantacao?: string;

  @Column()
  dificuldade_com_horta?: string;

  @Column()
  lista_dificuldades_com_horta?: string;

  @Column()
  animais_de_criacao_alimentacao_ou_venda: string;

  @Column()
  lista_animais_de_criacao_alimentacao_ou_venda?: string;

  @Column()
  realizam_caca: string;

  @Column()
  realizam_pesca: string;

  @Column()
  possui_cultivo_plantas_medicinais: string;

  @Column()
  alimentos_consumidos_dia_anterior: string;

  constructor() {
    if (!this.id) this.id = uuid();
  }
}

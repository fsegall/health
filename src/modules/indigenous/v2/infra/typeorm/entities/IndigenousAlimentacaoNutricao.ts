import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('alimentacao_nutricao_indigena_v2')
export class IndigenousAlimentacaoNutricao {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  entrevista_indigena_id: string;

  @Column()
  possui_moradores_menores_de_16: string;

  @Column()
  preocupação_nao_conseguir_comida: string;

  @Column()
  comeu_sempre_comida_da_cultura?: string;

  @Column()
  comeram_sempre_comida_saudavel?: string;

  @Column()
  teve_comida_todos_os_dias?: string;

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

  @Column('text', { array: true })
  motivo_morador_nao_faz_horta?: string[];

  @Column('text', { array: true })
  alimentos_da_horta?: string[];

  @Column()
  alimentos_da_horta_outros: string;

  @Column()
  frutiferas_nas_proximidades_quais: string;

  @Column('text', { array: true })
  coleta_castanhas_cocos_frutas: string[];

  @Column('text', { array: true })
  funcao_cultivo_horta?: string[];

  @Column('text', { array: true })
  origem_semente_plantio?: string[];

  @Column()
  adiciona_veneno_na_plantacao?: string;

  @Column()
  dificuldade_com_horta?: string;

  @Column('text', { array: true })
  lista_dificuldades_com_horta?: string[];

  @Column()
  animais_de_criacao_alimentacao_ou_venda: string;

  @Column('text', { array: true })
  lista_animais_de_criacao_alimentacao_ou_venda?: string[];

  @Column()
  realizam_caca: string;

  @Column()
  realizam_pesca: string;

  @Column()
  possui_cultivo_plantas_medicinais: string;

  @Column('text', { array: true })
  alimentos_consumidos_dia_anterior: string[];
}

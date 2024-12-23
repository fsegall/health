import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';

import Person from '@modules/persons/infra/typeorm/entities/Person';

@Entity('households')
class Household {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  person_id: string;

  @OneToOne(() => Person)
  @JoinColumn({ name: 'person_id' })
  household: Person;

  @Column()
  local_do_domicilio: string;

  @Column()
  povos_tradicionais: string;

  @Column()
  qual_povo_tradicional: string;

  @Column()
  pessoa_de_referencia: string;

  @Column({ nullable: true })
  idade_pessoa_de_referencia: number;

  @Column()
  sexo_pessoa_de_referencia: string;

  @Column()
  raca_cor: string;

  @Column()
  ler_escrever: string;

  @Column()
  escolaridade: string;

  @Column()
  situacao_de_trabalho: string;

  @Column()
  ocupacao_profissional: string;

  @Column()
  local_de_trabalho: string;

  @Column()
  diagnostico_covid_positivo: string;

  @Column()
  sequelas_covid: string;

  @Column()
  morte_ultimos_12_meses: string;

  @Column({ type: 'text', array: true })
  causa_morte_ultimos_12_meses: string;

  @Column({ type: 'text', array: true })
  situacao_de_emprego_e_renda: string;

  @Column()
  contribuicao_morte_ultimos_12_meses: string;

  @Column()
  tipo_de_residencia: string;

  @Column({ nullable: true })
  numero_de_comodos: number;

  @Column()
  material_de_construcao: string;

  @Column()
  agua_potavel: string;

  @Column()
  agua_animais: string;

  @Column()
  agua_producao_alimentos: string;

  @Column()
  esgoto: string;

  @Column({ nullable: true })
  numero_de_pessoas: number;

  @Column()
  uma_pessoa_domicilio: boolean;

  @Column({ nullable: true })
  cinco_anos_ou_mais: number;

  @Column({ nullable: true })
  entre_6_e_18: number;

  @Column({ nullable: true })
  entre_19_e_59: number;

  @Column({ nullable: true })
  sessenta_anos_ou_mais: number;

  @Column()
  pessoas_convidadas: string;

  @Column()
  nao_sabe_renda: boolean;

  @Column({ nullable: true })
  renda_familiar: number;

  @Column()
  faixa_de_renda: string;

  @Column()
  menores_6_anos: string;

  @Column()
  frequentam_creche: string;

  @Column()
  cadastro_unico: string;

  @Column()
  bolsa_familia: string;

  @Column()
  bpc: string;

  @Column()
  pensao: string;

  @Column()
  auxilio_reclusao: string;

  @Column()
  cesta_de_alimentos: string;

  @Column()
  restaurantes_populares: string;

  @Column()
  auxilio_emergencial: string;

  @Column()
  auxilio_vezes: string;

  @Column()
  ajuda_instituicao_caridade: string;

  @Column()
  tipo_de_ajuda: string;

  @Column()
  vergonha: string;

  @Column()
  produz_alimento: string;

  @Column()
  alimento_para_venda: string;

  @Column()
  divisao_alimento: string;

  @Column()
  nao_vendeu: string;

  @Column()
  preocupacao_alimentos: string;

  @Column()
  alimentos_acabaram: string;

  @Column()
  alimentos_saudaveis: string;

  @Column()
  alimentos_poucos_tipos: string;

  @Column()
  refeicoes_adulto: string;

  @Column()
  adulto_comeu_menos: string;

  @Column()
  adulto_fome: string;

  @Column()
  adulto_uma_refeicao: string;

  @Column()
  como_adquiriu_comida: string;

  @Column()
  alteracao_preco_comida: string;

  @Column()
  perfil_de_compra: string;

  @Column()
  mercado: string;

  @Column()
  gastos_alimentacao: string;

  @Column()
  feijao: boolean;

  @Column()
  arroz: boolean;

  @Column()
  carnes: boolean;

  @Column()
  verduras_legumes: boolean;

  @Column()
  frutas_frescas: boolean;

  @Column()
  leite: boolean;

  @Column()
  hamburguer_embutidos: boolean;

  @Column()
  bebidas_adocadas: boolean;

  @Column()
  macarrao_instantaneo_salgadinhos_de_pacote_biscoitos_salgados: boolean;

  @Column()
  biscoito_recheado_doces_guloseimas: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Household;

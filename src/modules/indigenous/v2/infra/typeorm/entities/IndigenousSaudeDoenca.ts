import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

import { IndigenousInterview } from './IndigenousInterview';

@Entity('saude_doenca_indigena_v2')
export class IndigeanousSaudeDoenca {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  entrevista_indigena_id: string;

  @OneToOne(() => IndigenousInterview, (interview) => interview.entrevista_indigena_saude_doenca)
  @JoinColumn({ name: 'entrevista_indigena_id' })
  entrevista_indigena: IndigenousInterview;

  @Column()
  condicao_de_saude: string;

  @Column('text', { array: true })
  morador_com_desabilidade: string[];

  @Column()
  local_permite_viver_com_saude: string;

  @Column('text', { array: true })
  morador_exposto_veneno_lavoura: string[];

  @Column({ nullable: true })
  doencas_contato_veneno_lavoura?: string;

  @Column('text', { array: true })
  motivo_doencas_contato_veneno_lavoura?: string[];

  @Column('text', { array: true })
  acidentes: string[];

  @Column('text', { array: true })
  ocorrencia_de_ameacas: string[];

  @Column('text', { array: true })
  ocorrencia_violencia_fisica: string[];

  @Column('text', { array: true })
  locais_impedido_de_entrar: string[];

  @Column('text', { array: true })
  lista_diagnosticos: string[];

  @Column({ nullable: true })
  lista_diagnosticos_cronico_remedio?: string;

  @Column('text', { array: true })
  lista_diagnosticos_outros: string[];

  @Column({ nullable: true })
  lista_diagnosticos_outros_remedio?: string;

  @Column()
  moradora_entre_13_e_45_anos: string;

  @Column('text', { array: true, nullable: true })
  mulheres_e_gestacao?: string[];

  @Column()
  crianca_ate_6_meses: string;

  @Column({ nullable: true })
  crianca_ate_6_meses_leito_do_peito?: string;

  @Column('text', { array: true, nullable: true })
  crianca_ate_6_meses_outros_alimentos?: string[];

  @Column()
  crianca_entre_6_meses_e_2_anos: string;

  @Column({ nullable: true })
  crianca_entre_6_meses_e_2_anos_leite_do_peito?: string;

  @Column()
  aldeia_possui_posto_de_saude: string;

  @Column('text', { array: true, nullable: true })
  cuidadores_para_aldeia_sem_posto_de_saude?: string[];

  @Column()
  acesso_a_equipe_de_saude: string;

  @Column('text', { array: true, nullable: true })
  profissionais_acesso_a_equipe_de_saude?: string[];

  @Column()
  morador_internado: string;

  @Column()
  possui_morador_menor_ou_igual_a_5_anos: string;

  @Column()
  morador_problemas_bebidas_alcoolicas: string;

  @Column()
  fuma_cigarro: string;

  @Column()
  morador_problemas_uso_drogas: string;

  @Column({ nullable: true })
  possui_morador_menor_ou_igual_a_5_anos_desnutricao?: string;

  @Column({ nullable: true })
  possui_morador_crianca_diarreia?: string;

  @Column({ nullable: true })
  possui_morador_crianca_pneumonia?: string;

  @Column('text', { array: true })
  lista_diagnosticos_doencas_infecciosas: string[];

  @Column()
  lista_diagnosticos_doencas_infecciosas_remedio?: string;
}

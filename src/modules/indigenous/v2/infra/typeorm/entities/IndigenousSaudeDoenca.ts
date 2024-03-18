import { Column, Entity, PrimaryColumn } from 'typeorm';
import { uuid } from 'uuidv4';

@Entity('saude_doenca_indigena')
export class IndigeanousSaudeDoenca {
  @PrimaryColumn()
  id: string;

  @Column()
  entrevista_indigena_id: string;

  @Column()
  condicao_de_saude: string;

  @Column()
  morador_com_desabilidade: string;

  @Column()
  local_permite_viver_com_saude: string;

  @Column()
  morador_exposto_veneno_lavoura: string;

  @Column()
  doencas_contato_veneno_lavoura: string;

  @Column()
  motivo_doencas_contato_veneno_lavoura?: string;

  @Column()
  acidentes: string;

  @Column()
  ocorrencia_de_ameacas: string;

  @Column()
  ocorrencia_violencia_fisica: string;

  @Column()
  local_ocorrencia_violencia_fisica?: string;

  @Column()
  locais_impedido_de_entrar: string;

  @Column()
  lista_diagnosticos: string;

  @Column()
  lista_diagnosticos_cronico_remedio?: string;

  @Column()
  lista_diagnosticos_outros: string;

  @Column()
  lista_tratamentos: string;

  @Column()
  lista_diagnosticos_outros_remedio: string;

  @Column()
  moradora_entre_13_e_45_anos: string;

  @Column()
  mulheres_e_gestacao: string;

  @Column()
  crianca_ate_6_meses: string;

  @Column()
  crianca_ate_6_meses_leito_do_peito: string;

  @Column()
  crianca_ate_6_meses_outros_alimentos?: string;

  @Column()
  crianca_entre_6_meses_e_2_anos: string;

  @Column()
  crianca_entre_6_meses_e_2_anos_leite_do_peito?: string;

  @Column()
  aldeia_possui_posto_de_saude: string;

  @Column()
  cuidadores_para_aldeia_sem_posto_de_saude: string;

  @Column()
  acesso_a_equipe_de_saude: string;

  @Column()
  profissionais_acesso_a_equipe_de_saude?: string;

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

  constructor() {
    if (!this.id) this.id = uuid();
  }
}

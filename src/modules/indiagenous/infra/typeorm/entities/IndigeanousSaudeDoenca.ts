import { Column, Entity, PrimaryColumn } from 'typeorm';
import { uuid } from 'uuidv4';

@Entity('saude_doenca_indigena')
export class IndigeanousSaudeDoenca {
  @PrimaryColumn()
  id: string;

  @Column()
  tomou_vacina_covid: string;

  @Column()
  motivo_nao_tomar_vacina_covid?: string;

  @Column()
  condicao_de_saude?: string;

  @Column()
  tekoha_mudou_condicao_de_saude?: string;

  @Column()
  morador_exposto_veneno_lavoura: string;

  @Column()
  doencas_contato_veneno_lavoura?: string;

  @Column()
  motivo_doencas_contato_veneno_lavoura?: string;

  @Column()
  acidentes: string;

  @Column()
  acidentes_ocorridos?: string;

  @Column()
  ocorrencia_de_ameacas: string;

  @Column()
  ocorrencia_violencia_fisica: string;

  @Column()
  local_ocorrencia_violencia_fisica?: string;

  @Column()
  lista_tratamentos?: string;

  @Column()
  tratamento_com_paje_ou_similar: string;

  @Column()
  tratamento_igreja: string;

  @Column()
  medicacao_uso_continuo: string;

  @Column()
  doenca_medicacao_uso_continuo?: string;

  @Column()
  primeiro_recurso_ao_notar_doenca: string;

  @Column()
  morador_internado: string;

  @Column()
  morador_problemas_bebidas_alcoolicas: string;

  @Column()
  morador_problemas_uso_drogas: string;

  @Column()
  familiar_morte_covid?: string;

  @Column()
  familiar_morte_covid_contribuia_renda_familiar?: string;

  @Column()
  familiares_morte_outras_causas?: string;

  @Column()
  motivo_familiares_morte_outras_causas?: string;

  @Column()
  familiares_morte_outras_causas_contribuia_renda_familiar?: string;

  constructor() {
    if (!this.id) this.id = uuid();
  }
}

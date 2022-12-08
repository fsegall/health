import { Column, Entity, PrimaryColumn } from 'typeorm';
import { uuid } from 'uuidv4';

@Entity('alimentacao_nutricao_indigena')
export class IndigeanousAlimentacaoNutricao {
  @PrimaryColumn()
  id: string;

  @Column()
  entrevista_indigena_id: string;

  @Column()
  morar_retomada_mudou_alimentacao?: string;

  @Column()
  luta_por_terra: string;

  @Column()
  sem_alimentacao_por_conflito_com_terras?: string;

  @Column()
  motivo_sem_alimentacao_por_conflito_com_terras?: string;

  @Column()
  origem_comida: string;

  @Column()
  possui_moradores_menores_de_16: string;

  @Column()
  consumiram_sempre_alimentos_da_cultura: string;

  @Column()
  acao_quando_falta_comida?: string;

  @Column()
  morador_faz_horta: string;

  @Column()
  motivo_morador_nao_faz_horta?: string;

  @Column()
  alimentos_da_horta?: string;

  @Column()
  frutiferas_nas_proximidades?: string;

  @Column()
  producao_de_comida_ano_todo?: string;

  @Column()
  origem_semente_plantio?: string;

  @Column()
  adiciona_veneno_na_plantacao?: string;

  @Column()
  dificuldade_com_horta?: string;

  @Column()
  lista_dificuldades_com_horta?: string;

  @Column()
  finalidade_horta?: string;

  @Column()
  animais_de_criacao_alimentacao_ou_venda: string;

  @Column()
  lista_animais_de_criacao_alimentacao_ou_venda?: string;

  @Column()
  domicilio_possui_agua_para_animais?: string;

  @Column()
  domicilio_possui_agua_para_producao_alimentos: string;

  @Column()
  precisou_comprar_alimentos_3m: string;

  @Column()
  lugar_precisou_comprar_alimentos_3m: string;

  @Column()
  possui_cultivo_plantas_medicinais?: string;

  @Column()
  faz_remedios_com_plantas: string;

  @Column()
  moradia_possui_fogao: string;

  @Column()
  material_utilizado_para_fazer_fogo: string;

  @Column()
  alimentos_consumidos_dia_anterior: string;

  @Column()
  primeiros_a_se_alimentar?: string;

  @Column()
  ultimos_a_se_alimentar?: string;

  @Column()
  alimentacao_saudavel_diariamente_30d: string;

  @Column()
  comida_disponivel_todos_os_dias_30d: string;

  @Column()
  dia_sem_alimentos_30d: string;

  @Column()
  preocupacao_em_conseguir_comida_30d?: string;

  @Column()
  alimentacao_do_gosto_30d?: string;

  @Column()
  comeu_menos_para_alimentar_os_jovens_30d?: string;

  @Column()
  jovens_comeram_menos_do_necessario_30d?: string;

  @Column()
  jovens_passaram_algum_dia_sem_alimentos_30d?: string;

  constructor() {
    if (!this.id) this.id = uuid();
  }
}

import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export default class CreatePersons1621210070706 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'persons',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'interviewer_id',
            type: 'uuid',
            isNullable: true,
          },
          {
            name: 'nome',
            type: 'varchar',
          },
          {
            name: 'idade',
            type: 'integer',
          },
          {
            name: 'sexo',
            type: 'varchar',
          },
          {
            name: 'raca_cor',
            type: 'varchar',
          },
          {
            name: 'ler_escrever',
            type: 'varchar',
          },
          {
            name: 'escolaridade',
            type: 'varchar',
          },
          {
            name: 'situacao_de_trabalho',
            type: 'varchar',
          },
          {
            name: 'ocupacao',
            type: 'varchar',
          },
          {
            name: 'local_de_trabalho',
            type: 'varchar',
          },
          {
            name: 'diagnostico_covid',
            type: 'varchar',
          },
          {
            name: 'vacina',
            type: 'varchar',
          },

          {
            name: 'nao_tomou_vacina',
            type: 'varchar',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );

    await queryRunner.createForeignKey(
      'persons',
      new TableForeignKey({
        name: 'Interviewer',
        columnNames: ['interviewer_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'users',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('persons', 'Interviewer');
    await queryRunner.dropTable('persons');
  }

}

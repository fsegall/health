import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class LifeQualityViolence1701898223218 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'qualidade_vida_violencia',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'interview_id',
            type: 'uuid',
          },
          {
            name: 'violencia_psicologica',
            type: 'varchar',
          },
          {
            name: 'violencia_psicologica_onde_ocorreu',
            type: 'varchar',
          },
          {
            name: 'violencia_fisica',
            type: 'varchar',
          },
          {
            name: 'violencia_fisica_onde_ocorreu',
            type: 'varchar',
          },
          {
            name: 'violencia_sexual',
            type: 'varchar',
          },
          {
            name: 'violencia_sexual_onde_ocorreu',
            type: 'varchar',
          },
        ],
        foreignKeys: [
          {
            name: 'FKInterviewToInterviewQualityLifeViolence',
            columnNames: ['interview_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'interviews',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('qualidade_vida_violencia');
  }
}

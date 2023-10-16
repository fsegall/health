import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class CreateDiscriminationEntity1697495100878
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'discriminations',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'person_id',
            type: 'uuid',
          },
          {
            name: 'razao_discriminacao',
            type: 'varchar',
          },
          {
            name: 'seguido_ou_observado',
            type: 'varchar',
          },
          {
            name: 'ameacado_ou_assediado',
            type: 'varchar',
          },
          {
            name: 'xingamentos',
            type: 'varchar',
          },
          {
            name: 'agir_como_se_fossem_melhor_que_voce',
            type: 'varchar',
          },
          {
            name: 'honestidade',
            type: 'varchar',
          },
          {
            name: 'medo',
            type: 'varchar',
          },
          {
            name: 'inteligencia',
            type: 'varchar',
          },
          {
            name: 'atendimento',
            type: 'varchar',
          },
          {
            name: 'respeito',
            type: 'varchar',
          },
          {
            name: 'gentileza',
            type: 'varchar',
          },
        ],
        foreignKeys: [
          {
            name: 'FKDiscriminationPerson',
            columnNames: ['person_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'persons',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
        ],
      }),
    );

    await queryRunner.addColumn(
      'interviews',
      new TableColumn({
        name: 'discrimination_id',
        type: 'uuid',
        isNullable: true,
      }),
    );

    await queryRunner.createForeignKey(
      'interviews',
      new TableForeignKey({
        name: 'FKInterviewsDiscrimination',
        columnNames: ['discrimination_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'discriminations',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('intervies', 'FKInterviewsDiscrimination');
    await queryRunner.dropColumn('interviews', 'discrimination_id');
    await queryRunner.dropTable('discriminations');
  }
}

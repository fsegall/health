import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class UpdateInterviewTable1711746918987 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumns('interviews', [
      new TableColumn({
        name: 'violence_id',
        type: 'uuid',
        isNullable: true,
      }),
      new TableColumn({
        name: 'mental_health_id',
        type: 'uuid',
        isNullable: true,
      }),
    ]);
    await queryRunner.createForeignKey(
      'interviews',
      new TableForeignKey({
        name: 'FKInterviewsViolence',
        columnNames: ['violence_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'violences',
      }),
    );
    await queryRunner.createForeignKey(
      'interviews',
      new TableForeignKey({
        name: 'FKInterviewsMentalHealth',
        columnNames: ['mental_health_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'mental_healths',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('interviews', 'violence_id');
    await queryRunner.dropColumn('interviews', 'mental_health_id');
  }
}

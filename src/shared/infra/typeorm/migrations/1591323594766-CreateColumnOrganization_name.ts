import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export default class CreateColumnOrganizationName1591323594766
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'users',
      new TableColumn({
        name: 'organization_name',
        type: 'varchar',
        isNullable: true,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('users', 'organization_name');
  }
}

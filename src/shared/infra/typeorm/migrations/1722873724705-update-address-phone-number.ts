import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class updateAddressPhoneNumber1722873724705
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumn(
      'addresses',
      'telephone_number',
      new TableColumn({
        name: 'telephone_number',
        type: 'varchar',
        isNullable: true,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumn(
      'addresses',
      'telephone_number',
      new TableColumn({
        name: 'telephone_number',
        type: 'varchar',
        isNullable: false,
      }),
    );
  }
}

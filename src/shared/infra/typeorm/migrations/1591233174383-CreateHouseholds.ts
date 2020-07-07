import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export default class CreateHouseholds1591233174383
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'households',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'person_id',
            type: 'uuid',
            isNullable: true,
          },
          {
            name: 'relationship_to_main_person',
            type: 'varchar',
          },
          {
            name: 'location_of_residence',
            type: 'varchar',
          },
          {
            name: 'type_of_residence',
            type: 'varchar',
          },
          {
            name: 'drinking_water',
            type: 'varchar',
          },
          {
            name: 'number_of_rooms',
            type: 'integer',
          },
          {
            name: 'number_of_people_household',
            type: 'integer',
          },
          {
            name: 'family_income',
            type: 'integer',
          },
          {
            name: 'household_main_person',
            type: 'boolean',
          },
          {
            name: 'bathroom_inside_house',
            type: 'boolean',
          },
          {
            name: 'garbage_service',
            type: 'boolean',
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
      'households',
      new TableForeignKey({
        name: 'Resident',
        columnNames: ['person_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'persons',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('households');
    await queryRunner.dropForeignKey('households', 'Resident');
  }
}

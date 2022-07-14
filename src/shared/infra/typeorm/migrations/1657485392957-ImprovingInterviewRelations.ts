import Interview from "@modules/interviews/infra/typeorm/entities/Interview";
import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export class ImprovingInterviewRelations1657485392957 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      const currentData = await queryRunner.manager.getRepository(Interview).find()

      await queryRunner.changeColumn("interviews", "address_id", new TableColumn({
        name: 'address_id',
        type: 'uuid',
        isNullable: true,
      }))

      await queryRunner.createForeignKey(
        'interviews',
        new TableForeignKey({
          name: 'address_id',
          columnNames: ['address_id'],
          referencedColumnNames: ['id'],
          referencedTableName: 'addresses',
          onDelete: 'SET NULL',
          onUpdate: 'CASCADE',
        }),
      );

      await queryRunner.changeColumn("interviews", "household_id", new TableColumn({
        name: 'household_id',
        type: 'uuid',
        isNullable: true,
      }))

      await queryRunner.createForeignKey(
        'interviews',
        new TableForeignKey({
          name: 'household_id',
          columnNames: ['household_id'],
          referencedColumnNames: ['id'],
          referencedTableName: 'households',
          onDelete: 'SET NULL',
          onUpdate: 'CASCADE',
        }),
      );

      await Promise.all(
        currentData?.map(async oldData => {
          await queryRunner.manager.getRepository(Interview).save({
            ...oldData
          })
        })
      )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}

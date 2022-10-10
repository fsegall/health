import Interview from "@modules/interviews/infra/typeorm/entities/Interview";
import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export class UpdateInterviewRelations1656715314063 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      const currentData = await queryRunner.manager.getRepository(Interview).find()

      await queryRunner.changeColumn("interviews", "interviewer_id", new TableColumn({
        name: 'interviewer_id',
        type: 'uuid',
        isNullable: true,
      }))
      await queryRunner.changeColumn("interviews", "person_id", new TableColumn({
        name: 'person_id',
        type: 'uuid',
        isNullable: true,
      }))

      await queryRunner.createForeignKey(
        'interviews',
        new TableForeignKey({
          name: 'PersonId',
          columnNames: ['person_id'],
          referencedColumnNames: ['id'],
          referencedTableName: 'persons',
          onDelete: 'SET NULL',
          onUpdate: 'CASCADE',
        }),
      );
      await queryRunner.createForeignKey(
        'interviews',
        new TableForeignKey({
          name: 'InterviewerId',
          columnNames: ['interviewer_id'],
          referencedColumnNames: ['id'],
          referencedTableName: 'users',
          onDelete: 'SET NULL',
          onUpdate: 'CASCADE',
        }),
      );

      await Promise.all(
        currentData?.map(async oldData => {
          await queryRunner.manager.getRepository(Interview).update(oldData.id, {
            person_id: oldData?.person_id,
            interviewer_id: oldData?.interviewer_id
          })
        })
      )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}

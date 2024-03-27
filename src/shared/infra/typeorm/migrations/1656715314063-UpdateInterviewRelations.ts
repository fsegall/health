import Interview from "@modules/interviews/infra/typeorm/entities/Interview";
import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export class UpdateInterviewRelations1656715314063 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

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
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }
    
}

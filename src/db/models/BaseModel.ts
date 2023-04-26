import {
    Model, Table, Column, CreatedAt, DeletedAt, UpdatedAt
} from 'sequelize-typescript';

@Table
export class BaseModel<TModelAttributes extends {} = any, TCreationAttributes extends {} = TModelAttributes>
            extends Model<TModelAttributes, TCreationAttributes> {
    // timestamps!
    @CreatedAt
    @Column
    public readonly createdAt!: Date;

    @UpdatedAt
    @Column
    public readonly updatedAt!: Date;

    @DeletedAt
    @Column
    public readonly deletedAt!: Date;
}
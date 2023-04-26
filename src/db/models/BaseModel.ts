import {
    Model, Table, Column, CreatedAt, DeletedAt, UpdatedAt, PrimaryKey, AutoIncrement, DataType
} from 'sequelize-typescript';

@Table
export class BaseModel<TModelAttributes extends {} = any, TCreationAttributes extends {} = TModelAttributes>
    extends Model<TModelAttributes, TCreationAttributes> {

    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    id!: number;

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
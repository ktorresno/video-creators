import { DataTypes, Model, Optional } from 'sequelize';
import { CreatorType } from '../../api/interfaces/user.interface';
import sequelizeConnection from '../config';

interface UserAttributes {
  id: number;
  name?: string;
  password: string;
  email: string;
  creatorType?: CreatorType;
  photoUrl?: string;
  cookie?: string;

  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}
export interface UserInput extends Optional<UserAttributes, 'id'> {}
export interface UserOuput extends Required<UserAttributes> {}


class User extends Model<UserAttributes, UserInput> implements UserAttributes {
    public id!: number;
    public name!: string;
    public email!: string;
    public password!: string;
    public creatorType!: CreatorType;
    public photoUrl!: string;
    public cookie!: string;

    // timestamps!
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    public readonly deletedAt!: Date;
  }

  User.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    photoUrl: {
        type: DataTypes.STRING
    },
    creatorType: {
        type: DataTypes.INTEGER,
        defaultValue: CreatorType.STUDENT
    }
  }, {
    timestamps: true,
    sequelize: sequelizeConnection,
    paranoid: true // soft delete at the 'deletedAt' attribute, when invoking the destroy method.
  })

  export default User;
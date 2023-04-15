import { DataTypes, Model, Optional } from 'sequelize';
import sequelizeConnection from '../config';

interface VideoAttributes {
  id: number;
  title: string;
  url: string;
  published: boolean;
  description?: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}
export interface VideoInput extends Optional<VideoAttributes, 'id'> {}
export interface VideoOuput extends Required<VideoAttributes> {}


class Video extends Model<VideoAttributes, VideoInput> implements VideoAttributes {
    public id!: number;
    public title!: string;
    public url!: string;
    public published!: boolean;
    public description!: string;

    // timestamps!
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    public readonly deletedAt!: Date;
  }

  Video.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    description: {
      type: DataTypes.TEXT
    },
    published: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    }
  }, {
    timestamps: true,
    sequelize: sequelizeConnection,
    paranoid: true // soft delete at the 'deletedAt' attribute, when invoking the destroy method.
  })

  export default Video;
import { DataTypes, Model } from "sequelize";
import sequelize from "../config/config.js";

export class Logger extends Model {
  id!: number;
  level!: string;
  message!: string;
  timestamp!: Date;
}

Logger.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    level: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    message: {
      type: DataTypes.TEXT,
      allowNull: false,
    },

    timestamp: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    tableName: "logs",
    timestamps: false,
  },
);

module.exports = (sequelize, DataTypes) => {
  const Ilustrations = sequelize.define("Ilustrations", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
    site: DataTypes.STRING,
    description: DataTypes.STRING,
    collection: DataTypes.STRING,
  },
  {
    timestamps: false,
    tableName: 'Ilustrations',
  });

  return Ilustrations;
};

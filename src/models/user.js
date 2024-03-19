
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      name: DataTypes.STRING,
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      phone: DataTypes.STRING,
      password: DataTypes.STRING,
      status: DataTypes.STRING,
      role: DataTypes.STRING,
    },
    {
      tableName: 'users',
    }
  );

  User.associate = function (models) {

  };

  return User;
};

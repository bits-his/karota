
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {

      name: DataTypes.STRING,
      username: DataTypes.STRING,
      account_type: DataTypes.STRING,
      email: DataTypes.STRING,
      phone_no: DataTypes.STRING,
      password: DataTypes.STRING,
      status: DataTypes.STRING,
      role: DataTypes.STRING,
    },
    {}
  );

  User.associate = function (models) {
    // associations go here
  };

  return User;
};

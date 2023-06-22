const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    login: {type: DataTypes.STRING},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"}
})

const Application = sequelize.define('application', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
    email: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.TEXT, allowNull: false},
})

const Internship = sequelize.define('internship', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, unique: true, allowNull: false},
    description: {type: DataTypes.TEXT, allowNull: false},
})

const Job = sequelize.define('job', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, unique: true, allowNull: false},
    description: {type: DataTypes.TEXT, allowNull: false},
    Requirement: {type: DataTypes.TEXT, allowNull: false},
    responsibility: {type: DataTypes.TEXT, allowNull: false},
    offer: {type: DataTypes.TEXT, allowNull: false}
})

const UserInternship = sequelize.define('user_internship', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

Internship.hasMany(UserInternship, { onDelete: 'RESTRICT' })
UserInternship.belongsTo(Internship, { onDelete: 'RESTRICT' })

User.hasMany(UserInternship, { onDelete: 'RESTRICT' })
UserInternship.belongsTo(User, { onDelete: 'RESTRICT' })

module.exports = {
    Internship, User, Job, Application, UserInternship
}
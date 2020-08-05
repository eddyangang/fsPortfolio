module.exports = function (sequelize, DataTypes) {
    var Projects = sequelize.define("Projects", {
        name: {
            type: DataTypes.STRING,
            // AllowNull is a flag that restricts a todo from being entered if it doesn't
            // have a text value
            allowNull: false
        },
        summary: {
            type: DataTypes.STRING,
            allowNull: false
        },
        image: DataTypes.STRING,
        date: DataTypes.DATE
    });
    return Projects;
};

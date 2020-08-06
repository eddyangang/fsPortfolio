module.exports = function (sequelize, DataTypes) {
    var Projects = sequelize.define("Projects", {
        title: {
            type: DataTypes.STRING,
            // AllowNull is a flag that restricts a todo from being entered if it doesn't
            // have a text value
            allowNull: false
        },
        summary: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        image_path: DataTypes.STRING,
        image_icon: DataTypes.STRING,
        github_url: DataTypes.STRING,
        deployed_url: DataTypes.STRING,
        date: DataTypes.DATE
    });
    return Projects;
};
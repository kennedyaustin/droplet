module.exports = function(sequelize, DataTypes) {

    // Add code here to create a Post model
    // This model needs a title, a body, and a category
    // Don't forget to 'return' the post after defining
    const Comments= sequelize.define('comments', {
      comment_id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false
      },
      user_id: {
        type: DataTypes.UUID,
      },
      post_id: {
        type:  DataTypes.INTEGER
      },
      comment_content: {
        type:  DataTypes.TEXT
      },
      date_time: {
        type:  DataTypes.TIME
      }

    }, {
  
      freezeTableName: true
  
    })

    Comments.associate = function(models) {
      Comments.belongsTo(models.posts, {
        foreignKey: {
          allowNull: false
        }
      })
    };

    return Comments
};
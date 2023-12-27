// // // models/index.ts
import Post from "../Post/model.scheme.js";
import PostComment from "../PostComment/model.scheme.js";

// // Define the association
Post.hasMany(PostComment, { foreignKey: 'post_id' });

// // Use the force: true option to drop and recreate the tables
!(async () => {
    await Post.sync({ alter: true });
    await PostComment.sync({ alter: true });
})();
// Post.belongsTo(User, { 
//     foreignKey: {
//         name: 'userId', 
//         allowNull: false
//     }
// });
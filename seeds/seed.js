const sequelize = require('../config/connection');
const { User, Post, Comment } = require('../models');

const userData = require('./user_data.json');
const postData = require('./postdata.json');
const commentData = require('./comment_data.json');

const path = require('path');
const seedPath = path.join(process.cwd(), 'seeds', 'seed.js');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Post.bulkCreate(postData)
  await Comment.bulkCreate(commentData)

  console.log("Seeding done!");

  process.exit(0);
};

seedDatabase();
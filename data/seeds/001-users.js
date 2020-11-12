const bcrypt = require('bcryptjs'); 

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { 
          username: "whitley",
          email: "whitley@gmail.com",
          password: bcrypt.hashSync("abc123", 6),
          
        },
        {
          username: "kimberly",
          email: "danny@gmail.com",
          password: bcrypt.hashSync("abc123", 6),
        },
        {
          username: "dwayne",
          email: "dwayne@gmail.com",
          password: bcrypt.hashSync("abc123", 6),
        }
      ]);
    });
};

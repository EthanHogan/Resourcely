const mysql = require('mysql');
// change your database.example.config.js file to match import path below
const password = require('./database.config.js');


const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : password,
  database : 'resourcely'
});
 
connection.connect();

connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  if(results[0].solution === 2) {
    console.log('Database connection successful!');
  }
});
async function getAll(userID) {
  let allCategories = await getCategories(userID);
  let allResources = await getAllResources(allCategories);
  return allResources;
}

// gets all categories for a given userID
function getCategories(userID) {
  return new Promise ((resolve, reject) => {
    connection.query('SELECT name FROM Categories WHERE user_fk = ?', [userID], function(err, result) {
      if (err) {
        reject(err)
      } else {
        resolve(result)
      }
    })
  })
}

// gets all resources for each category in an array of categories
function getAllResources(categories) {
  return new Promise ((resolve, reject) => {
    let promises = categories.map((category) => {
      return getResources(category.name)
      .then((resources) => {
        let obj = {
          name: category.name,
          resources: [...resources],
        }
        console.log('hello')
        return obj;
      })
    })

    Promise.all(promises).then((results) => {
      console.log(results);
      resolve(results);
    }) 

  })


  
}

// gets all resources for a single category
function getResources(categoryName) {
  return new Promise ((resolve, reject) => {
    connection.query('SELECT title, description, link FROM Resources WHERE category_fk = (SELECT id FROM Categories WHERE name = ?)', [categoryName],
    function(err, result) {
      if (err) {
        reject(err);
      } else {
        resolve(result)
      }
    })
  })
}

function addCategory(categoryName, userID) {
  return new Promise ((resolve, reject) => {
    connection.query('INSERT INTO Categories (name, user_fk) VALUES (?, ?)', [categoryName, userID],
    function(err, result) {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

function addResource(title, description, link, categoryName) {
  return new Promise ((resolve, reject) => {
    connection.query('INSERT INTO Resources (title, description, link, category_fk) VALUES (?, ?, ?, (SELECT id FROM Categories WHERE name = ?))', [title, description, link, categoryName],
    function(err, result) {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    })
  })
}

module.exports = { addCategory, addResource, getCategories, getResources, getAllResources, getAll }
 
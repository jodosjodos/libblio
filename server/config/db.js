import mysql from "mysql"

export const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'libblio'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database: ', err);
  } else {
    console.log('Connected to MySQL database');
  }
});

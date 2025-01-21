import express from 'express';
import bcrypt from 'bcryptjs';
import pkg from 'pg';
const { Pool } = pkg;


const pool = new Pool({
    host: 'localhost',       // Your database host
    user: 'postgres',   // Your PostgreSQL username
    password: 'Basil123@', // Your PostgreSQL password
    database: 'diary_farm', // Your PostgreSQL database name
    port: 5432,              // Default PostgreSQL port
});
db.connect();
const app = express();
app.use(express.json());
const port = 3000;


//admin login

// Seed database with users
async function seedUsers() {
    const users = [
      { username: 'admin1', password: 'password1' },
      { username: 'admin2', password: 'password2' },
      { username: 'admin3', password: 'password3' },
    ];
  
    for (const user of users) {
      const hashedPassword = await bcrypt.hash(user.password, 10);
      await pool.query(
        'INSERT INTO admins (username, password) VALUES ($1, $2) ON CONFLICT (username) DO NOTHING',
        [user.username, hashedPassword]
      );
    }
  }
  
  // Seed users if the table is empty
  async function initializeDatabase() {
    const result = await pool.query('SELECT COUNT(*) FROM admins');
    const count = parseInt(result.rows[0].count, 10);
  
    if (count === 0) {
      await seedUsers();
    }
  }
  
  initializeDatabase();
  
  // Login endpoint
  app.post('/api/admin-login', async (req, res) => {
    const { username, password } = req.body;
  
    const userResult = await pool.query('SELECT * FROM admins WHERE username = $1', [username]);
  
    if (userResult.rows.length === 0) {
      return res.status(401).json({ message: 'Your username or password is incorrect' });
    }
  
    const user = userResult.rows[0];
    const isPasswordValid = await bcrypt.compare(password, user.password);
  
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Your username or password is incorrect' });
    }
  
    const token = jwt.sign({ username: user.username }, 'your_jwt_secret', { expiresIn: '1h' });
  
    res.json({ token });
  });

  async function seedUsers() {
    const users = [
      { username: 'user1', password: 'password1' },
      { username: 'user2', password: 'password2' },
      { username: 'user3', password: 'password3' },
      { username: 'user4', password: 'password4' },
    ];
  
    for (const user of users) {
      const hashedPassword = await bcrypt.hash(user.password, 10);
      await pool.query(
        'INSERT INTO vcm (username, password_hash) VALUES ($1, $2) ON CONFLICT (username) DO NOTHING',
        [user.username, hashedPassword]
      );
    }
  }
  
  /////////////////// staff login
  
  // Seed users if the table is empty
  async function initializeDatabase() {
    const result = await pool.query('SELECT COUNT(*) FROM vcm');
    const count = parseInt(result.rows[0].count, 10);
  
    if (count === 0) {
      await seedUsers();
    }
  }
  
  initializeDatabase();
  
  // Login route
  app.post("/api/vcm-login", async (req, res) => {
    const { username, password } = req.body;
    try {
      const user = await pool.query(`SELECT * FROM vcm WHERE username = $1`, [
        username,
      ]);
      if (user.rows.length === 0) {
        return res.status(401).json({ message: "Invalid username or password" });
      }
  
      const validPassword = await bcrypt.compare(
        password,
        user.rows[0].password_hash
      );
      if (!validPassword) {
        return res.status(401).json({ message: "Invalid username or password" });
      }
  
      res.json({ message: "Login successful" });
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ message: "Server error" });
    }
  });
  
  
  
  // Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });

db.end();
  
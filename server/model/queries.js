
const pool = require('./db');

const createUser = async (userid, email, hashedPassword, confirmationToken) => {
  try {
    // Check if the user already exists
    let existingUser;
    if (userid) {
      existingUser = await pool.query('SELECT * FROM users WHERE google_id = $1', [userid]);
    } else {
      existingUser = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    }

      //if (existingUser.rows.length === 0) {
      if (existingUser.rows.length > 0) {
        throw new Error('User already exists');
      }
      // If not, create a new user
      let newUser;
      if (userid) {
        newUser = await pool.query('INSERT INTO users(google_id) VALUES($1) RETURNING *', [userid]);
      } else if (email && hashedPassword) {
        // super important to set email_confirmed to false. The user must confirm their email before they can log in
        newUser = await pool.query('INSERT INTO users(email, password, confirmation_token, email_confirmed) VALUES($1, $2, $3, $4) RETURNING *', [email, hashedPassword, confirmationToken, false]);
        console.log('New user created:', newUser.rows[0]);
      }
      if(!Array.isArray(newUser.rows) || newUser.rows.length === 0) {
        console.error('Error: newUser.rows is not an array or is empty');
        throw new Error('Error creating user');
      }
      return newUser.rows[0];
  
      
  } catch (error) {
    console.error('Error in createUser:', error);
    return {error: error.message};
  }
};

const getUserByEmail = async (email) => {

  try {
    const existingUser = await pool.query('SELECT *, is_admin FROM users WHERE email = $1', [email]);
    return existingUser.rows[0];
  } catch (error) {
    console.error('Error in getUserByEmail:', error);
    throw error;
  }
};

const getUserById = async (id) => {
  try {
    const existingUser = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
    return existingUser.rows[0];
  } catch (error) {
    console.error('Error in getUserById:', error);
    throw error;
  }
};

const getUserByConfirmationToken = async (token) => {
    try {
      const existingUser = await pool.query('SELECT * FROM users WHERE confirmation_token = $1', [token]);
      return existingUser.rows[0];
    } catch (error) {
      console.error('Error in getUserByConfirmationToken:', error);
      throw error;
    }
  };

// confirm email in db
const confirmUserEmail = async (id) => {
  try {
    const result = await pool.query('UPDATE users SET email_confirmed = true WHERE id = $1', [id]);
    return result.rowCount;
  } catch (error) {
    console.error('Error in confirmUserEmail:', error);
    throw error;
  }
};

const updateUserPassword = async (id, hashedPassword) => {
  
  try {
    await pool.query('UPDATE users SET password = $1 WHERE id = $2', [hashedPassword, id]);
  } catch(error) {
    console.error('Error in resetPassword:', error);
    throw error;
  }
}

  module.exports = {
    createUser,
    getUserByEmail,
    getUserById,
    getUserByConfirmationToken,
    confirmUserEmail,
    updateUserPassword
  };
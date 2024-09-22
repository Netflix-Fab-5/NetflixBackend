import admin from '../firebase.mjs';

// Function for signup route
export const signup = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if a user with the same email already exists
    const existingUser = await admin.auth().getUserByEmail(email);
    
    if (existingUser) {
      return res.status(400).send({ error: 'Email already in use' });
    }
  } catch (error) {
    // If the user is not already in db then create a new user
    if (error.code === 'auth/user-not-found') {
      try {
        const userRecord = await admin.auth().createUser({
          email,
          password,
        });

        return res.status(201).send({ uid: userRecord.uid, email: userRecord.email });
      } catch (createUserError) {
        console.error('Error creating new user:', createUserError);
        return res.status(400).send({ error: createUserError.message });
      }
    }

    // For any other error return a 400 error
    console.error('Error checking for existing user:', error);
    return res.status(400).send({ error: error.message });
  }
};
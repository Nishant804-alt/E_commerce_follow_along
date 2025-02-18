Milestone 6: Backend Signup Endpoint and Password Encryption 🚀
In Milestone 6, we implemented the backend endpoint to handle user signup and securely store user data, including encrypting passwords.

✅ Signup Endpoint Implementation
Created a new route and controller function to handle POST requests to the signup endpoint.
Received user data from the frontend signup form.
✅ Password Encryption
Used bcrypt to hash the user's password before storing it in the database.
Ensured that passwords are never stored in plain text.
✅ User Data Storage
Stored the complete user data (name, email, hashed password, etc.) in the MongoDB database.
Implemented error handling for duplicate entries and other potential issues.
✅ README Update
Documented Milestone 6 progress in this README file.
This milestone focused on securely handling user registration on the backend, including the crucial step of password encryption. This is essential for protecting user data and maintaining security best practices.

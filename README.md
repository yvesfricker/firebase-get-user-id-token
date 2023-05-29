# firebase-get-user-id-token

A very simple script to get the ID token using email and password sign-in. Useful for quickly testing serverside API endpoints in Postman.

1. Make a .env and enter your firebase project configuration variables

2. Transpile login.ts using

```bash
   tsc login.ts
```

3. Run node login.js

```bash
   node login.js <user_email> <user_password>
```

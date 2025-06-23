// import express from 'express';
// import { loginUser, registerUser } from './auth.controller';

// const router = express.Router();

// router.post('/login', loginUser); // ✅ Login route
// router.post('/register', registerUser); // ✅ Register route

// export const AuthRoutes = router;

/////////

// import express from 'express';
// import { loginUser, registerUser } from './auth.controller';

// const router = express.Router();

// router.post('/login', loginUser);
// router.post('/register', registerUser);

// export const AuthRoutes = router;

//////////

// routes/auth.route.ts

import express from 'express';
import { loginUser, registerUser } from './auth.controller';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);

export const AuthRoutes = router;

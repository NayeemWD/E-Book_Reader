// // import admin from 'firebase-admin';

// // import { getApps, cert } from 'firebase-admin/app';
// // import { getAuth } from 'firebase-admin/auth';

// // const serviceAccount = JSON.parse(
// //   process.env.FIREBASE_SERVICE_ACCOUNT_KEY as string
// // );

// // if (!getApps().length) {
// //   admin.initializeApp({
// //     credential: cert(serviceAccount),
// //   });
// // }

// // export const firebaseAuth = getAuth();

// import * as admin from 'firebase-admin';
// import * as fs from 'fs';
// import * as path from 'path';

// const serviceAccountPath = path.join(
//   __dirname,
//   '../../../e-book-reader-firebase-service-account.json'
// );
// const serviceAccount = JSON.parse(fs.readFileSync(serviceAccountPath, 'utf-8'));

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
// });

// export default admin;

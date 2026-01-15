export const environment = {
    production: false,
    firebase: {
        apiKey: process.env['FIREBASE_API_KEY'] || 'DEV_KEY_ONLY_WORKS_LOCALLY',
        authDomain: "dev-project.firebaseapp.com",
        projectId: "dev-project-id",
        storageBucket: "dev-project.appspot.com",
        messagingSenderId: "123456789",
        appId: "1:123456789:web:abc123def456"
    }
};
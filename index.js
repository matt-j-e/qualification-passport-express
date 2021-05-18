const app = require('./src/app');

// The next line means the app will work on Heroku if deployed
// Heroku assignd a random port number each time an app is run
// process.env is the location of the environment variables
const APP_PORT = process.env.PORT || 4010; // Port number doesn't have to be 4000

app.listen(APP_PORT, () => console.log(`app is running on http://localhost:${APP_PORT}`));
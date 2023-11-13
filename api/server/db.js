const mongoose = require('mongoose');

const connectionstring = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@${DB_CLUSTER}.1cyxcfz.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('Database Connected')).catch((err) => console.log(err));
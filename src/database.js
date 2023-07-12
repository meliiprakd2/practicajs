const { connect } = require("mongoose");
const { config } = require("dotenv");
const mongoose = require("mongoose");
config();

const MONGODB_URI = "mongodb+srv://meliiprakd2:prakd2@cluster0.ywfuhld.mongodb.net/";

(async() => {
    mongoose.set('strictQuery', false);
    try {
        const db = await connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Db connectect to", db.connection.name);
    } catch (error) {
        console.error(error);
    }
})();
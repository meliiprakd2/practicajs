const { connect } = require("mongoose");
const { config } = require("dotenv");
config();

const MONGODB_URI = "mongodb+srv://meliiprakd2:prakd2@cluster0.ywfuhld.mongodb.net/";

(async() => {
    try {
        const db = await connect(MONGODB_URI);
        console.log("Db connectect to", db.connection.name);
    } catch (error) {
        console.error(error);
    }
})();
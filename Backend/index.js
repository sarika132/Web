const express =require ("express");
const {connection} = require("./Database/db.js");

require('dotenv').config();
const{Users} = require("./model/userSchema.js");
const{router} = require("./routes/userRoute.js");
const cors = require("cors");
const app = express();

const PORT = 4000;
app.use(cors());
app.use(express.json());
app.use(router);
connection();

// app.get("/",(req, res) => {
//     res.send(`Server is running on port ${PORT}`);
// });

app.listen(PORT, () => {
    console.log(`Server running port ${PORT}`);
});

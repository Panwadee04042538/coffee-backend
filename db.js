import { createConnection } from "mysql2";

const db = createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "coffee_shop",
});

db.connect((err) => {
    if(err){
        console.error("connected fail",err.message)
        process.exit(1);
    }
    console.log("connected successful");
});

export default db;
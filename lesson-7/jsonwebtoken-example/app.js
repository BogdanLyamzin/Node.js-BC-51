import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const {JWT_SECRET} = process.env;

const payload = {
    id: "64bfe82b487ae91a4e9c3eb8"
};

const token = jwt.sign(payload, JWT_SECRET, {expiresIn: "23h"});
// console.log(token);
const decodeToken = jwt.decode(token);
// console.log(decodeToken)

try {
    const {id} = jwt.verify(token, JWT_SECRET);
    // console.log(id);
    const invalidToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YmZlODJiNDg3YWU5MWE0ZTljM2ViOCIsImlhdCI6MTY5MDI5OTUxNywiZXhwIjoxNjkwMzgyMzE3fQ.nGhQQ1JO67I7Ws3DStMhMvCl3TRHnfXVAN9vYbzPINe";
    jwt.verify(invalidToken, JWT_SECRET);
}
catch(error) {
    console.log(error.message);
}
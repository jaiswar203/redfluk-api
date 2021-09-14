import jwt, { decode } from "jsonwebtoken";

const AdminAuth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];

    let decodedata = jwt.verify(token, "admin");

    req.userId = decodedata?.id;

    next()
  } catch (error) {
      console.log(error)
  }
};


export default AdminAuth
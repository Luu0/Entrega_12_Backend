import { getAll,FindById,UpdateUser } from "../Services/Daos/User/users.services.js";

export const getAllUsers = async (req, res) => {
  try {
    const users = await getAll();
    res.json({
        data: users,
        message: "Users list"
    })
  }
  catch (error) {
    console.log(error);
    res.json({
        error,
        message: "error"
    });
  }
};


export const getUserByIdController = async (req, res) => {
  try {
    const { uid } = req.params;
    const user = await FindById(uid);

    if (!user) return res.json({ message: "User not found" });

    res.json({
      user,
      message: "User found",
    });
  } catch (error) {

    res.status(500).json({
      error: error.message,  
      message: "Error",
    });
  }
};
import { Router } from "express";

import {
  getUser,
  getUserByQuery,
  createUser,
  deleteUser,
  updateUser,
} from "./../controllers/userController";

const userRouter = Router();
// api/user/
userRouter.get("/getuser", getUser);
userRouter.get("/:userId/getUser", getUser);
userRouter.get("/getuserbyquery", getUserByQuery);

userRouter.post("/adduser", createUser);
userRouter.delete("/:userId/delete", deleteUser);
userRouter.put("/:userId/update", updateUser);

export default userRouter;

import { Request, Response } from "express";

export const getUser = (req: Request, res: Response) => {
  const userID = req.params.userId;

  return res.status(200).json({
    message: "User fetched successfully",
    userID: userID,
  });
};

export const getUserByQuery = (req: Request, res: Response) => {
  const userID = req.query.id;
  return res.status(200).json({
    message: "User fetched successfully by query",
    userID: userID,
  });
};

export const createUser = (req: Request, res: Response) => {
  const { username } = req.body;
  return res.status(200).json({
    message: "User created successfully added",
    data: {
      username: username,
    },
  });
};

export const updateUser = (req: Request, res: Response) => {
  const { username } = req.body;
  const { userId } = req.params;

  return res.status(200).json({
    message: "User updated successfully",
    data: {
      userID: userId,
      username: username,
    },
  });
};

export const deleteUser = (req: Request, res: Response) => {
  const { userId } = req.params;

  return res.status(200).json({
    message: "User deleted successfully",
    data: {
      userID: userId,
    },
  });
};

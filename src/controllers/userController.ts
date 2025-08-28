import { ObjectId } from "mongodb";
import { client } from "./../configs/mongo";
import { Request, Response } from "express";

const db = client.db("sampleUser");
const userCollection = db.collection("User Details");

export const getUser = async (req: Request, res: Response) => {
  const userID = req.body.userId;
  console.log("UserID:", userID);
  const result = await userCollection.find({}).toArray();

  return res.status(200).json({
    message: "User fetched successfully",
    data: result,
  });
};

export const getUserByQuery = (req: Request, res: Response) => {
  const userID = req.query.id;

  return res.status(200).json({
    message: "User fetched successfully by query",
    userID: userID,
  });
};

export const createUser = async (req: Request, res: Response) => {
  const { name, email, age, hobbies } = req.body;
  const result = await userCollection.insertOne({
    name: name,
    email: email,
    age: age,
    hobbies: hobbies,
  });
  return res.status(200).json({
    message: "User created successfully added",
    data: result,
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

export const deleteUser = async (req: Request, res: Response) => {
  const { userId } = req.params;
  const result = await userCollection.deleteOne({ _id: new ObjectId(userId) });
  return res.status(200).json({
    message: "User deleted successfully",
    data: result,
  });
};

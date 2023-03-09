import { connectToDatabase } from "../../../utils/mongodb"

export default async (req, res) => {
  const { db } = await connectToDatabase();

//   Add email to database
    const email = await db
    .collection("email")
    .insertOne({
        email: req.body.email,
    });

    res.status(200).json({ email });
};
// api/new-meetup
import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method == "POST") {
    const { title, image, description, address } = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://ecommerce-user:ecommerce-user123@cluster0.fdsog8f.mongodb.net/meetupDatabase"
    );
    const db = client.db();
    const meetupsCollection = db.collection("meetups");
    const result = await meetupsCollection.insertOne({
      title,
      image,
      description,
      address,
    });
    console.log(result);
    client.close();
    res.status(200).json({ message: "Success" });
  }
}

export default handler;

const express = require("express");
const app = express();
const db = require("./firebase");
const port = 8000;
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.get("/drinks/get", async (req, res) => {
  const snapshot = await db.collection("drinks").get();

  const drinks = [];

  snapshot.forEach((doc) => {
    drinks.push({ ...doc.data(), id: doc.id });
  });
  res.send(JSON.stringify(drinks, undefined, 4));
});
/*
app.post("/books/add", async (req, res) => {
  const { title, author } = req.body;

  const resp = await db.collection("books").add({
    title,
    author,
  });

  console.log("Added document with ID: ", resp.id);
  res.sendStatus(200);
});

app.delete("/books/delete", async (req, res) => {
  const { id } = req.body;

  const resp = await db
    .collection("books")
    .doc(id)
    .delete()
    .then(() => {
      console.log(`Book ${id} deleted successfully.`);
    })
    .catch((error) => {
      console.error("Error deleting document: ", error);
    });
});
*/

app.listen(port, () => {
  console.log(`Server listening on port ${port}...`);
});

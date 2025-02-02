const port = process.env.PORT || 5001;

// http://localhost:5001/form should return a form with input elements for username, email, and submit button

// http://localhost:5001/submit should return all the data the user entered

const express = require("express");
const app = express();

//from examples github - needed middleware for form to function
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/form", (req, res) => {
  res.status(200);
  res.set({ "Content-Type": "text/html" });
  res.write('<form action="/submit" method="post">');
  res.write('<label for="name">Name: </label>');
  res.write('<input type="text" name="name" id="name"><br />');
  res.write('<label for="email">Email: </label>');
  res.write('<input type="email" name="email" id="email"><br />');
  res.write('<label for="comments">Comments: </label>');
  res.write('<input type="text" name="comments" id="comments"><br />');
  res.write('<label for="newsletter">Newsletter: </label>');
  res.write('<input type="text" name="newsletter" id="newsletter"><br />');
  res.write('<input type="submit">');
  res.write("</form></body></html>");
  res.send();
});

app.post("/submit", (req, res) => {
  console.log(req.body);
  res.status(200);
  res.set({ "Content-Type": "text/html" });
  res.write(`<p>Name: ${req.body.name}<p>`);
  res.write(`<p>Email: ${req.body.email}<p>`);
  res.write(`<p>Comments: ${req.body.comments}<p>`);
  res.write(`<p>Newsletter: ${req.body.newsletter}<p>`);
  res.send();
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

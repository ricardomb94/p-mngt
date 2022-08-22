const express = require("express");
require("dotenv").config();
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const app = express();

const port = process.env.PORT || 5000;

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    // rootValue: require("./graphql/resolvers"),
    graphiql: process.env.NODE_ENV === "development",
  })
);

app.listen(port, () => {
  console.log(`Server started on ${port}`);
});

const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());

mongoose.set("useFindAndModify", false);

mongoose.connect(process.env.MONGOOSE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once("open", () => {
  console.log("Connected to database");
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: {
      defaultQuery: "",
    },
  })
);

app.listen(process.env.PORT, () =>
  console.log(`listening on port: ${process.env.PORT}`)
);

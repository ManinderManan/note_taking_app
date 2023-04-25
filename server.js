// Creating the dependencies
const express = require('express');

const app = express();

//Creating PORT 
const PORT = process.env.PORT || 3001;

//creating a rout for all of the files inside of the 'public' folder 
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"));

//routes to the file routes
const apiRoutes = require("./routes/apiRoutes");
app.use(apiRoutes);
const htmlRoutes = require("./routes/htmlRoutes");
app.use(htmlRoutes);

//starting the server
app.listen(PORT, () => {
    console.log(`Server started at localhost${PORT}`);
});
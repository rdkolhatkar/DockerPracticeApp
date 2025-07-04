const express = require('express'); // Here we are calling the express object function from node modules
const app = express();
app.get("/application/test/data", (req, res) => { // Creating an GET API endpoint with Request (req) & Response (res)
    res.json([ // Creating Dummy response body
        {
            id: 1,
            name: "Anil Awasthi",
            age: 23
        },
        {
            id: 2,
            name: "Suresh Singh",
            age: 22
        },
        {
            id: 3,
            name: "Chetan Chaudhari",
            age: 25
        },
        {
            id: 4,
            name: "Rashmi Roy",
            age: 24
        },
        {
            id: 5,
            name: "Disha Datta",
            age: 21
        },
        {
            id: 6,
            name: "Gauri Goswami",
            age: 20
        }
    ])
});
app.listen(9091, () => { // Starting the application on port 9091 with app.listen() Method
    console.log("Application is running on port 9091");
});
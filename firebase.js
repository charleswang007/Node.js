//Loading Firebase Package
var firebase = require("firebase-admin");

/**
* Update your Firebase Project
* Credentials and Firebase Database
* URL
*/
firebase.initializeApp({
  serviceAccount: "C:\Users\charleswang\Downloads\node-realtime-db-firebase-adminsdk-2qffe-f7197dc2a7.json",
  databaseURL: "https://node-realtime-db-default-rtdb.firebaseio.com/"
});  //by adding your credentials, you get authorized to read and write from the database

console.log("=== initialized ===");

/**
* Loading Firebase Database and refering 
* to user_data Object from the Database
*/
var db = firebase.database();
var ref = db.ref("/user_data");  //Set the current directory you are working in

console.log("=== variable set ===");

/**
* Setting Data Object Value
*/
ref.set([
{
    id:20,
    name:"Jane Doe",
    email:"jane@doe.com",
    website:"https://jane.foo.bar"
},
{
    id:21,
    name:"John doe",
    email:"john@doe.com",
    website:"https://foo.bar"
}
]);

console.log("=== finished setting data ===");

/**
* Pushing New Value
* in the Database Object
*/
ref.push({
    id:22,
    name:"Puppy Wang",
    email:"puppy@doe.com",
    website:"https://puppy.foo.bar"
});

console.log("=== finished pushing data ===");

/**
* Reading Value from
* Firebase Data Object
*/
ref.once("value", function(snapshot) {
  var data = snapshot.val();   //Data is in JSON format.
  console.log(data);
});

console.log("=== finished reading data ===");
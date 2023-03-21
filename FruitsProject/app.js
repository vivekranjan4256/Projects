const mongoose=require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB",{useNewUrlParser: true});

const fruitSchema=new mongoose.Schema ({
    name: {
        type: String,
        required:[true,"Name required!"]
    },
    rating: {
        type: Number,
        min: 1,
        max:10
    },
    review: String
});

const Fruit=mongoose.model("Fruit",fruitSchema);

const fruit=new Fruit({
    rating:4,
    review:"Pretty solid as a fruit."
});


// // Fruit.insertMany([kiwi,orange,banana],function(err){
// //     if(err){
// //         console.log(err);
// //     }
// //     else{
// //         console.log("Successfully saved all the fruits to fruitsDB");
// //     }
// // })

// const personSchema=new mongoose.Schema({
//     name: String,
//     age: Number,
//      favouriteFruit: fruitSchema
// });

// const Person=mongoose.model("Person",personSchema);

// const person=new Person({
//     name: "John",
//     age: 37,
//     favouriteFruit: Kiwi
// });

Fruit.find(function(err, fruits){
    if(err){
        console.log(err);
    }
    else{
        mongoose.connection.close();
        fruits.forEach(function(fruit){
            console.log(fruit.name);
        });
    }
})

//person.save();

//fruit.save();

//Fruit.deleteOne({name: "Guava"},function(err){
    //     if(err){
    //         console.log(err);
    //     }
    //     else{
    //         console.log("Successfully Updated database");
    //     }
    // });


// Fruit.updateOne({name: "Peach"}, {name: "Guava"},function(err){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("Successfully Updated database");
//     }
// });

const findDocuments=function(db,callback){
    const collection=db.collection('fruits');
    collection.find({}).toArray(function(err,fruits){
        assert.equal(err,null);
        console.log('Found the following documents');
        console.log(fruits);
        callback(fruits);
    });
}
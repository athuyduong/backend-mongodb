
const database = 'bookstore';
const collection = 'books';

// Create a new database.
use(database);

// Create a new collection.
db.createCollection(collection);

db.books.insert([
    {_id:"1", title: "Đắc Nhân Tâm", author: "Dale Carnegie", year: 1936},
    {_id:"2", title: "Nhà giả kim", author: "Paulo Coelho", year: 1988},
    {_id:"3", title: "Tuổi trẻ đáng giá bao nhiêu", author: "Rosie Nguyễn", year: 2017},
    {_id:"4", title: "Sapiens: Lược sử loài người", author: "Yuval Noah Harari", year: 2011},
    {_id:"5", title: "Lược sử tương lai", author: "Yuval Noah Harari", year: 2017},
    {_id:"6", title: "Nhà thờ Đức Bà Paris", author: "Victor Hugo", year: 1831},
    {_id:"7", title: "Tội ác và trừng phạt", author: "Fyodor Dostoyevsky", year: 1866},
    {_id:"8", title: "Bắt trẻ đồng xanh", author: "J.D. Salinger", year: 1951},
    {_id:"9", title: "Hoàng tử bé", author: "Antoine de Saint-Exupéry", year: 1943},
    {_id:"10", title: "Dám bị ghét", author: "Kishimi Ichiro & Koga Fumitake", year: 2014},
    {_id:"11", title: "Atomic Habits", author: "James Clear", year: 2018}
])
db.books.find()
const books = [
    {_id:"12", title: "Giết con chim nhại", author: "Harper Lee", year: 1960},
    {_id:"13", title: "Tám Bài Học Về Thiên Nhiên", author: "Gary Snyder", year: 1996},
    {_id:"14", title: "Con Đường Chẳng Mấy Ai Đi", author: "Scott Peck", year: 1983},
    {_id:"15", title: "When the Body Says No ", author: "Gabor Maté", year: 2004}
];
db.books.insertMany(books);
db.books.find()

//Get all books published after 2000
db.books.find({year:{$gt: 2000}})

//Get all books by a specific author
db.books.find({ author: "Harper Lee" })

//Take out books whose titles begin with a certain letter
db.books.find({ title: { $regex: "^T", $options: "i" } })

//Update the publication year of a specific book
db.books.updateOne({ _id: "12" }, { $set: { year: 1961 } })
db.books.find()

//Update the author for a specific book
db.books.updateOne({ _id: "1" }, { $set: { author: "Dale" } })
db.books.find()

//Delete a book from the "books" table based on title
db.books.deleteOne({ title: "Đắc Nhân Tâm" })
db.books.find()
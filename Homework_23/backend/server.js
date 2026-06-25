const dns = require('dns');
dns.setServers(['8.8.8.8', '8.8.4.4']);

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const Todo = require('./mongo/todo.model');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

const MONGO_URI = process.env.MONGO_URI || 'mongodb+srv://karenthomas49_db_user:cj4SQ81axK2YKX1v@cluster0.jf52frv.mongodb.net/?appName=Cluster0';

mongoose.connect(MONGO_URI);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Помилка підключення до бази даних:'));
db.once('open', function() {
    console.log("Ми підключилися до бази даних!");
});

app.get('/todos', async (req, res) => {
    try {
        const todos = await Todo.find();
        res.json(todos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.post('/todos', async (req, res) => {
    try {
        const newTodo = new Todo({ text: req.body.text });
        const savedTodo = await newTodo.save();
        res.status(201).json(savedTodo);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

app.put('/todos/:id', async (req, res) => {
    try {
        const updatedTodo = await Todo.findByIdAndUpdate(
            req.params.id,
            { checked: req.body.checked, text: req.body.text },
            { returnDocument: 'after' }
        );
        res.json(updatedTodo);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

app.delete('/todos/:id', async (req, res) => {
    try {
        await Todo.findByIdAndDelete(req.params.id);
        res.json({ message: 'Видалено успішно' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Сервер працює на порту ${PORT}`);
});
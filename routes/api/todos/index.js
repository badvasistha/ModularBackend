const express = require('express');
const router = express.Router();
const todosController = require('./../../../controllers/todosController.js')

// const connection = require ('./../../../config/connection.js')


router.route('/')
.get(todosController.findAll);

router.route('/:id')
.delete(todosController.deleteByID)
.get(todosController.findByID);

// router.get('/', (req, res)=> {
//     connection.query('SELECT * FROM todos', (err, todos)=>{
//         if (err) throw err;
//         res.json(todos); 
//     }); 
// });

// router.get('/:id', (req, res)=> {
//     const query = 'SELECT * from todos WHERE id = ?';
//     connection.query(query, req.params.id, (err, todos)=>{
//         res.json(todos);
//     });
// });

// router.delete('/:id', (req, res)  => {
//     let query = 'DELETE FROM todos WHERE id = ?';
//     connection.query(query, req.params.id, (err, todos) => {
//       if(err) throw err;
//       connection.query('SELECT * FROM todos', (err, todos) => {
//         if(err) throw err;
//         res.json(todos);
//       });
//     })
//   });

module.exports = router;
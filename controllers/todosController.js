const connection = require('./../config/connection.js')
module.exports = {
    findAll: (req, res)=>{
        connection.query('SELECT * FROM todos', (err, todos)=>{
            if (err) throw err;
            res.json(todos); 
        }); 
    }, 
    deleteByID: (req, res) => {
        let query = 'DELETE FROM todos WHERE id = ?;';
        connection.query(query, req.params.id, (err, todos) => {
        if(err) throw err;
        connection.query('SELECT * FROM todos', (err, todos) => {
        if(err) throw err;
        res.json(todos);
      });
    });
    },
    findByID: (req, res)=>{
        const query = 'SELECT * from todos WHERE id = ?';
        connection.query(query, req.params.id, (err, todos)=>{
        res.json(todos);
    });
    }
};
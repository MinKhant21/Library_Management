
import db from './db';
export function getbooks(req,res) {
  
    const qString = `SELECT * from user ORDER BY created_at DESC;`
    db.query(qString, (error,data,fields) => {
        if (error) {
            console.log(error)
        }
        if (data) {
            const books = {
                'message': 'successfully',
                'status': 200,
                'data' : data
            }
            res.json(books);
        }
    })
}

export function store(req, res) {
    const { title, description, categories } = req.body
    const query = `INSERT INTO books (title,description,categories) VALUES ('${title}','${description}','${categories}')`
    db.query(query, (req) => {
        
    })
}



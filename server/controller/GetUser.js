import c from './db';

export const GetUser = (req, res) => {
    
    const qString = `SELECT * from user ORDER BY created_at DESC;`
    c.query(qString, (error, data, fields) => {
        if (error) {
            return console.log(error)
        }
        if (data) {
            const reponseData = {
                'message': 'successfully',
                'status': 200,
                'data' : data
            }
            res.json(reponseData);
        }
    })
}

import c from './db';

export const Home = (req, res) => {
    let token = Math.floor(100000 + Math.random() * 900000);
    
    const { name, phone, company_name, designation } = req.body
    // console.log(token)
    const qString = `insert into user (name,phone,company_name,designation,token) values ("${name}","${phone}","${company_name}","${designation}","${token}") `
    c.query(qString, (error, data, fields) => {
        if (error) {
            return console.log(error)
        }
        if (data) {
            console.log(data)
            const reponseData = {
                'message': 'successfully',
                'status': 200,
                'token' : token
            }
            res.json(reponseData);
            // res.send(JSON.stringify(reponseData));
        }
    })
}

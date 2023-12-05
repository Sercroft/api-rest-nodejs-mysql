import { pool } from '../db.js';

export const getUsers = async (req, res) => {
    try{
        const [rows] = await pool.query('SELECT * FROM users');
        res.json(rows);
    }catch(error){
        return res.status(500).json({
            message: 'getUsers: Something goes wrong!'
        });
    }
}


export const getUser = async (req, res) => {
    try{
        console.log(req.params);
        const [rows] = await pool.query('SELECT * FROM users WHERE id = ?', [req.params.id]);

        if(rows.length <= 0) return res.status(404).json({
            message: 'Users not found!'
        });

        res.json(rows[0]);

    }catch(error){
        return res.status(500).json({
            message: 'getUser: Something goes wrong!'
        });
    }
}

export const createUser = async (req, res) => {
    try{
        const { id, fullname, type_identification, num_identification, gender, address, phone } = req.body;

        if(id != null || id != undefined){
            const [rows] = await pool.query('INSERT INTO users (id, fullname, type_identification, num_identification, gender, address, phone) VALUES (?, ?, ?, ?, ?, ?, ?)', [id, fullname, type_identification, num_identification, gender, address, phone]);
            
            res.send({
                id: rows.insertId,
                fullname,
                type_identification,
                num_identification,
                gender,
                address,
                phone
            });
        }

    }catch(error){
        return res.status(500).json({
            message: 'createUser: Something goes wrong!'
        });
    }
}

export const updateUser = async (req, res) => {
    const {id} = req.params;
    const {fullname, type_identification, num_identification, gender, address, phone} = req.body;
    try{
        const [result] = await pool.query('UPDATE users SET fullname = IFNULL(?, fullname), type_identification = IFNULL(?, type_identification), num_identification = IFNULL(?, num_identification), gender = IFNULL(?, gender), address = IFNULL(?, address), phone = IFNULL(?, phone) WHERE id = ?', [fullname, type_identification, num_identification, gender, address, phone, id]);
        
        if(result.affectedRows == 0) return res.status(404).json({
            message: 'User not found!'
        })

        console.log(result);

        const [rows] = await pool.query('SELECT * FROM users WHERE id = ?', [id]);
        res.json(rows[0]);

    }catch(error){
        return res.status(500).json({
            message: 'updateUser: Something goes wrong!'
        });
    }
}

export const deleteUser = async (req, res) => {
    try{
        const [result] = await pool.query('DELETE FROM users WHERE id = ?', [req.params.id]);
        console.log(result);
    
        if(result.affectedRows <= 0) return res.status(404).json({
            message: 'User not found!'
        });
        res.sendStatus(204);

    }catch(error){
        return res.status(500).json({
            message: 'deleteUser: Something goes wrong!'
        });
    }
}
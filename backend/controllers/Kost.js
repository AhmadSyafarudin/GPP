import Kost from './../models/kostModel.js';

 
export const getKost = async (req, res) => {
    try {
        const kost = await Kost.findAll();
        res.json(kost);
    } catch (error) {
        res.json({ message: error.message });
    }  
}

export const getKostByUser = async (req, res) => {
    try {
        const kost = await Kost.findAll({
            where: {
                user_id: req.params.id
            }
        });
        res.json(kost);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const getKostById = async (req, res) => {
    try {
        const kost = await Kost.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(kost[0]);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const createKost = async (req, res) => {
    try {
        await Kost.create(req.body);
        res.json({
            "message": "Kost Created"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const updateKost = async (req, res) => {
    try {
        await Kost.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Kost Updated"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const deleteKost = async (req, res) => {
    try {
        await Kost.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Kost Deleted"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
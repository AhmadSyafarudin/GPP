import Kost from './../models/kostModel.js';
import path from "path";
import fs from "fs";
 
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
    if(req.body.foto_depan === "") return res.status(400).json({msg: "Foto Luar Belum di Upload"});
    if(req.body.foto_dalam === "") return res.status(400).json({msg: "Foto Dalam Belum di Upload"});
    
    const name = req.body.nama;
    const lokasi = req.body.lokasi;
    const panjang = req.body.panjang;
    const lebar = req.body.lebar;
    const alamat = req.body.alamat;
    const harga = req.body.harga;
    const fasilitas = req.body.fasilitas;
    const userId = req.body.user_id;
    const file = req.files.foto_depan;
    const fileSize = file.data.length;
    const ext = path.extname(file.name);
    const fileName = file.md5 + ext;
    const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
    const file2 = req.files.foto_dalam;
    const fileSize2 = file2.data.length;
    const ext2 = path.extname(file2.name);
    const fileName2 = file2.md5 + ext2;
    const url2 = `${req.protocol}://${req.get("host")}/images/${fileName2}`;
    const allowedType = ['.png','.jpg','.jpeg'];
 
    if(!allowedType.includes(ext.toLowerCase())) return res.status(422).json({msg: "Invalid Images"});
    if(fileSize > 5000000) return res.status(422).json({msg: "Image must be less than 5 MB"});
    if(fileSize2 > 5000000) return res.status(422).json({msg: "Image must be less than 5 MB"});
 
    file2.mv(`./public/images/${fileName2}`, async(err)=>{
        if(err) return res.status(500).json({msg: err.message});
    });

    file.mv(`./public/images/${fileName}`, async(err)=>{
        if(err) return res.status(500).json({msg: err.message});
        try {
            await Kost.create({
                nama: name, 
                foto_depan: fileName, 
                foto_dalam: fileName2,
                url1: url,
                url2: url2,
                user_id: userId,
                alamat: alamat,
                lokasi: lokasi,
                panjang: panjang,
                lebar: lebar,
                harga: harga,
                fasilitas: fasilitas
            });
            res.status(201).json({msg: "Data Kost Berhasil Ditambahkan"});
        } catch (error) {
            console.log(error.message);
        }
    })
    // try {
    //     await Kost.create(req.body);
    //     res.json({
    //         "message": "Kost Created"
    //     });
    // } catch (error) {
    //     res.json({ message: error.message });
    // }  
}
 
export const updateKost = async (req, res) => {
    const kost = await Kost.findOne({
        where:{
            id : req.params.id
        }
    });
    if(!kost) return res.status(404).json({msg: "No Data Found"});
     
    let fileName = "";
    if(req.body.foto_depan === ""){
        fileName = kost.foto_depan;
    }else{
        const file = req.files.foto_depan;
        const fileSize = file.data.length;
        const ext = path.extname(file.name);
        fileName = file.md5 + ext;
        const allowedType = ['.png','.jpg','.jpeg'];
 
        if(!allowedType.includes(ext.toLowerCase())) return res.status(422).json({msg: "Invalid Images"});
        if(fileSize > 5000000) return res.status(422).json({msg: "Image must be less than 5 MB"});
 
        const filepath = `./public/images/${kost.foto_depan}`;
        fs.unlinkSync(filepath);
 
        file.mv(`./public/images/${fileName}`, (err)=>{
            if(err) return res.status(500).json({msg: err.message});
        });
    }

    let fileName2 = "";
    if(req.body.foto_dalam === ""){
        fileName2 = kost.foto_dalam;
    }else{
        const file = req.files.foto_dalam;
        const fileSize = file.data.length;
        const ext = path.extname(file.name);
        fileName2 = file.md5 + ext;
        const allowedType = ['.png','.jpg','.jpeg'];
 
        if(!allowedType.includes(ext.toLowerCase())) return res.status(422).json({msg: "Invalid Images"});
        if(fileSize > 5000000) return res.status(422).json({msg: "Image must be less than 5 MB"});
 
        const filepath = `./public/images/${kost.foto_dalam}`;
        fs.unlinkSync(filepath);
 
        file.mv(`./public/images/${fileName2}`, (err)=>{
            if(err) return res.status(500).json({msg: err.message});
        });
    }

    const name = req.body.nama;
    const lokasi = req.body.lokasi;
    const panjang = req.body.panjang;
    const lebar = req.body.lebar;
    const alamat = req.body.alamat;
    const harga = req.body.harga;
    const fasilitas = req.body.fasilitas;
    const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
    const url2 = `${req.protocol}://${req.get("host")}/images/${fileName2}`;

    try {
        await Kost.update({
            nama: name, 
            foto_depan: fileName, 
            foto_dalam: fileName2,
            url1: url,
            url2: url2,
            alamat: alamat,
            lokasi: lokasi,
            panjang: panjang,
            lebar: lebar,
            harga: harga,
            fasilitas: fasilitas
        },{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Kost Updated Successfuly"});
    } catch (error) {
        console.log(error.message);
    }
    // try {
    //     await Kost.update(req.body, {
    //         where: {
    //             id: req.params.id
    //         }
    //     });
    //     res.json({
    //         "message": "Kost Updated"
    //     });
    // } catch (error) {
    //     res.json({ message: error.message });
    // }  
}
 
export const deleteKost = async (req, res) => {
    const kost = await Kost.findOne({
        where:{
            id : req.params.id
        }
    });
    if(!kost) return res.status(404).json({msg: "No Data Found"});
 
    try {
        const filepath = `./public/images/${kost.foto_depan}`;
        const filepath2 = `./public/images/${kost.foto_dalam}`;

        fs.unlinkSync(filepath);
        fs.unlinkSync(filepath2);

        await Kost.destroy({
            where:{
                id : req.params.id
            }
        });
        res.status(200).json({msg: "Kost Deleted Successfuly"});
    } catch (error) {
        console.log(error.message);
    }
    // try {
    //     await Kost.destroy({
    //         where: {
    //             id: req.params.id
    //         }
    //     });
    //     res.json({
    //         "message": "Kost Deleted"
    //     });
    // } catch (error) {
    //     res.json({ message: error.message });
    // }  
}
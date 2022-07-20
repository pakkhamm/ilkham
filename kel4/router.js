const express = require("express");
const db = require("../config/mysql");
const path = require("path");
const router = express.Router();

router.get("/",(req,res,next)=>{
    res.status(200).sendFile(path.join(__dirname,"../","view","index.html"));
});
router.post("/",(req,res,next)=>{
    const moisture = req.body.moisture;
    const sql = "REPLACE INTO sptakad(moisture) VALUES ?";
    const value = [[moisture]];
    db.query(sql,[value],(err,result)=>{
        if(err) throw err;
        res.status(200).json({
            message : "berhasil menambah data"
        })
    })
})

module.exports = router;
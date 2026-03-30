import express from "express";
import db from "../db.js";

const router = express.Router();

// ดึงข้อมูลลูกค้าด้วยเบอร์โทรศัพท์
router.get("/api/customers/:phone", (req, res) => {
    const { phone } = req.params;
    const sql = `SELECT * FROM customer WHERE phone = ?`;

    db.query(sql, [phone], (err, results) => {
        if (err) {
            console.error("GET Error:", err.message);
            return res.status(500).json({ error: err.message });
        }

        // กรณีเจอข้อมูล (ผลลัพธ์ใน Array มีมากกว่า 0)
        if (results.length > 0) {
            res.json({
                status: "success",
                data: results[0] // ส่งข้อมูลลูกค้าคนแรกที่เจอไป
            });
        } 
        // กรณีไม่เจอข้อมูล
        else {
            res.status(404).json({
                status: "not_found",
                message: "ไม่พบข้อมูล กรุณาตรวจสอบเบอร์"
            });
        }
    });
});

export default router;
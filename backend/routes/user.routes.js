import { Router } from "express";
import { prisma } from "../src/db.js";

const router = Router();

router.get("/users", async (req, res) => {
    const users = await prisma.user.findMany();
    res.json(users);
});

router.get("/user/:id", async (req, res) => {
    const userid = await prisma.user.findUnique({
        where: { id: parseInt(req.params.id) },
        include: { publicaciones: true, pujas: true, comprasFichas: true }
    });

    if (!userid) {
        return res.status(404).json({ error: "User not found" })
    }

    return res.json(userid);
});


router.post("/usersPost", async (req, res) => {
    const newuser = await prisma.user.create({
        data: req.body,
    })
    res.json(newuser);
});

router.delete("/user/:id", async (req, res) => {
    const userDelete = await prisma.user.delete({
        where: { 
            id: parseInt(req.params.id) 
        },
        include: { 
            publicaciones: true, 
            pujas: true, 
            comprasFichas: true 
        }
    });

    if (!userDelete) {
        return res.status(404).json({ error: "User not found" })
    }

    return res.json(userDelete);
});


router.put("/user/:id", async (req, res) => {
    const userUpdate = await prisma.user.update({
        where: {
            id: parseInt(req.params.id)
        },
        include: {
            publicaciones: true,
            pujas: true,
            comprasFichas: true
        },
        data: req.body
    });

    if (!userUpdate) {
        return res.status(404).json({ error: "User not found" })
    }

    return res.json(userUpdate);
});


export default router;


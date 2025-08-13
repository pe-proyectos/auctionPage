import { prisma } from "../../src/db.js";

export const usersGet = async (req, res) => {
    const users = await prisma.user.findMany({
        include: { publicaciones: true, pujas: true }
    });
    res.json(users);
};

export const userGet = async (req, res) => {
    const user = await prisma.user.findUnique({
        where: { id: parseInt(req.params.id) },
        include: { publicaciones: true, pujas: true }
    });

    if (!user) {
        return res.status(404).json({ error: "Usuario no encontrado" });
    }

    res.json(user);
};

export const userPost = async (req, res) => {
    const { email, name, lastname, password } = req.body;

    if (!email || !name || !lastname || !password) {
        return res.status(400).json({ error: "Campos obligatorios faltantes" });
    }

    const newUser = await prisma.user.create({ data: req.body });
    res.status(201).json(newUser);
};

export const userUpdate = async (req, res) => {
    const updatedUser = await prisma.user.update({
        where: { id: parseInt(req.params.id) },
        data: req.body
    });
    res.json(updatedUser);
};

export const userDelete = async (req, res) => {
    const deletedUser = await prisma.user.delete({
        where: { id: parseInt(req.params.id) }
    });
    res.json(deletedUser);
};

export const recargarFichas = async (req, res) => {
    const userId = parseInt(req.params.id);
    const { cantidad } = req.body;

    if (!cantidad || cantidad <= 0) {
        return res.status(400).json({ error: "Cantidad inválida" });
    }

    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user) {
        return res.status(404).json({ error: "Usuario no encontrado" });
    }

    const updatedUser = await prisma.user.update({
        where: { id: userId },
        data: { fichas: user.fichas + cantidad }
    });

    return res.json({ mensaje: "Fichas recargadas", saldo: updatedUser.fichas });
};

export const consultarSaldo = async (req, res) => {
    const user = await prisma.user.findUnique({
        where: { id: parseInt(req.params.id) },
        select: { fichas: true }
    });

    if (!user) {
        return res.status(404).json({ error: "Usuario no encontrado" });
    }

    return res.json({ saldo: user.fichas });
};
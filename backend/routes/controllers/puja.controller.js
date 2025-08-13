import { prisma } from "../../src/db.js";

export const pujasGet = async (req, res) => {
    const pujas = await prisma.puja.findMany({
        include: { usuario: true, publicacion: true }
    });
    res.json(pujas);
};

export const pujaGet = async (req, res) => {
    const id = parseInt(req.params.id);
    const puja = await prisma.puja.findUnique({
        where: { id },
        include: { usuario: true, publicacion: true }
    });

    if (!puja) {
        return res.status(404).json({ error: "Puja no encontrada" });
    }

    res.json(puja);
};

export const pujaPost = async (req, res) => {
    const { usuarioId, publicacionId, fichasUsadas } = req.body;

    if (!usuarioId || !publicacionId || !fichasUsadas) {
        return res.status(400).json({ error: "Faltan campos obligatorios" });
    }

    const usuario = await prisma.user.findUnique({ where: { id: usuarioId } });
    if (!usuario) {
        return res.status(404).json({ error: "Usuario no encontrado" });
    }

    if (usuario.fichas < fichasUsadas) {
        return res.status(400).json({ error: "Saldo insuficiente" });
    }

    const publicacion = await prisma.publicacion.findUnique({ where: { id: publicacionId } });
    if (!publicacion) {
        return res.status(404).json({ error: "Publicación no encontrada" });
    }

    await prisma.user.update({
        where: { id: usuarioId },
        data: { fichas: usuario.fichas - fichasUsadas }
    });

    const newPuja = await prisma.puja.create({
        data: { usuarioId, publicacionId, fichasUsadas }
    });

    res.status(201).json(newPuja);
};

export const pujasByUser = async (req, res) => {
    const usuarioId = parseInt(req.params.usuarioId);
    const pujas = await prisma.puja.findMany({
        where: { usuarioId },
        include: { publicacion: true }
    });
    res.json(pujas);
};

export const pujasByPublicacion = async (req, res) => {
    const publicacionId = parseInt(req.params.publicacionId);
    const pujas = await prisma.puja.findMany({
        where: { publicacionId },
        include: { usuario: true }
    });
    res.json(pujas);
};

export const pujaDelete = async (req, res) => {
    const id = parseInt(req.params.id);
    const puja = await prisma.puja.findUnique({
        where: { id },
        include: { usuario: true }
    });

    if (!puja) {
        return res.status(404).json({ error: "Puja no encontrada" });
    }

    await prisma.user.update({
        where: { id: puja.usuarioId },
        data: { fichas: puja.usuario.fichas + puja.fichasUsadas }
    });

    await prisma.puja.delete({ where: { id } });

    res.json({ mensaje: "Puja eliminada y fichas devueltas" });
};
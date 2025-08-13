import { prisma } from "../../src/db.js";

export const publicacionesGet = async (req, res) => {
    const publicaciones = await prisma.publicacion.findMany({
        include: { usuario: true, categoria: true }
    });
    res.json(publicaciones);
};

export const publicacionGet = async (req, res) => {
    const publicacion = await prisma.publicacion.findUnique({
        where: { id: parseInt(req.params.id) },
        include: { usuario: true, categoria: true }
    });
    res.json(publicacion);
};

export const publicacionPost = async (req, res) => {
    const nuevaPublicacion = await prisma.publicacion.create({
        data: req.body
    });
    res.json(nuevaPublicacion);
};

export const publicacionUpdate = async (req, res) => {
    const updatedPublicacion = await prisma.publicacion.update({
        where: { id: parseInt(req.params.id) },
        data: req.body,
        include: { usuario: true, categoria: true }
    });
    res.json(updatedPublicacion);
};

export const publicacionDelete = async (req, res) => {
    const deletedPublicacion = await prisma.publicacion.delete({
        where: { id: parseInt(req.params.id) },
        include: { usuario: true, categoria: true }
    });
    res.json(deletedPublicacion);
};

export const publicacionesPorCategoria = async (req, res) => {
    const categoriaId = parseInt(req.params.categoriaId);
    const publicaciones = await prisma.publicacion.findMany({
        where: { categoriaId },
        include: { usuario: true, categoria: true }
    });
    res.json(publicaciones);
};

export const publicacionesPorUsuario = async (req, res) => {
    const usuarioId = parseInt(req.params.usuarioId);
    const publicaciones = await prisma.publicacion.findMany({
        where: { usuarioId },
        include: { categoria: true }
    });
    res.json(publicaciones);
};

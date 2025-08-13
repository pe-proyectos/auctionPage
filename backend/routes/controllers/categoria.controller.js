import { prisma } from "../../src/db.js";

export const categoriasGet = async (req, res) => {
    const categorias = await prisma.categoria.findMany({
        include: { publicaciones: true }
    });
    res.json(categorias);
};

export const categoriaGet = async (req, res) => {
    const categoria = await prisma.categoria.findUnique({
        where: { id: parseInt(req.params.id) },
        include: { publicaciones: true }
    });
    res.json(categoria);
};

export const categoriaPost = async (req, res) => {
    const nuevaCategoria = await prisma.categoria.create({
        data: req.body
    });
    res.json(nuevaCategoria);
};

export const categoriaUpdate = async (req, res) => {
    const categoriaActualizada = await prisma.categoria.update({
        where: { id: parseInt(req.params.id) },
        data: req.body,
        include: { publicaciones: true }
    });
    res.json(categoriaActualizada);
};

export const categoriaDelete = async (req, res) => {
    const categoriaEliminada = await prisma.categoria.delete({
        where: { id: parseInt(req.params.id) },
        include: { publicaciones: true }
    });
    res.json(categoriaEliminada);
};

export const publicacionesPorCategoria = async (req, res) => {
    const categoriaId = parseInt(req.params.id);
    const categoria = await prisma.categoria.findUnique({
        where: { id: categoriaId },
        include: {
            publicaciones: {
                include: {
                    usuario: true,
                    categoria: true
                }
            }
        }
    });
    res.json(categoria.publicaciones);
};

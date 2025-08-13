import { Router } from "express";
import {
    publicacionesGet,
    publicacionGet,
    publicacionPost,
    publicacionUpdate,
    publicacionDelete,
    publicacionesPorUsuario,
    publicacionesPorCategoria
} from "../routes/controllers/publicacion.controller.js";

const router = Router();

router.get("/publicaciones", publicacionesGet);
router.get("/publicaciones/:id", publicacionGet);
router.post("/publicaciones", publicacionPost);
router.put("/publicaciones/:id", publicacionUpdate);
router.delete("/publicaciones/:id", publicacionDelete);

router.get("/publicaciones/categoria/:categoriaId", publicacionesPorCategoria);
router.get("/publicaciones/usuario/:usuarioId", publicacionesPorUsuario);

export default router;

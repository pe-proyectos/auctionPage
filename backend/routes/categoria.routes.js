import { Router } from "express";
import {
    categoriasGet,
    categoriaGet,
    categoriaPost,
    categoriaUpdate,
    categoriaDelete,
    publicacionesPorCategoria
} from "../routes/controllers/categoria.controller.js";

const router = Router();

router.get("/categorias", categoriasGet);
router.get("/categoria/:id", categoriaGet);
router.post("/categoriaPost", categoriaPost);
router.put("/categoria/:id", categoriaUpdate);
router.delete("/categoria/:id", categoriaDelete);

router.get("/categoria/:id/publicaciones", publicacionesPorCategoria);

export default router;

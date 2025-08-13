import { Router } from "express";
import {
    pujasGet,
    pujaGet,
    pujaPost,
    pujasByUser,
    pujasByPublicacion,
    pujaDelete
} from "./controllers/puja.controller.js";

const router = Router();

router.get("/pujas", pujasGet);
router.get("/pujas/:id", pujaGet);
router.get("/pujas/usuario/:usuarioId", pujasByUser);
router.get("/pujas/publicacion/:publicacionId", pujasByPublicacion);
router.post("/pujas", pujaPost);
router.delete("/pujas/:id", pujaDelete);

export default router;

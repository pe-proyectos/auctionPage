import { Router } from "express";
import { 
    usersGet, 
    userGet, 
    userPost,
    userUpdate, 
    userDelete,   
    recargarFichas,
    consultarSaldo
} from "../routes/controllers/user.controller.js";

const router = Router();

router.get("/users", usersGet);
router.get("/users/:id", userGet);
router.post("/users", userPost);
router.put("/users/:id", userUpdate);
router.delete("/users/:id", userDelete);
router.post("/users/:id/recargar", recargarFichas);
router.get("/users/:id/saldo", consultarSaldo);

export default router;

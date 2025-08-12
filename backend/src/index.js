import express from "express";

import userRoutes from '../routes/user.routes.js'
import categoriaRoutes from '../routes/categoria.routes.js'
import publicacionRoutes from '../routes/publicacion.routes.js'
import pujaRoutes from '../routes/puja.routes.js'

const app = express();

app.use(express.json());
app.use("/api", userRoutes);
app.use("/api", publicacionRoutes);
app.use("/api", pujaRoutes);
app.use("/api", categoriaRoutes);


app.listen(4000)
console.log('server port on port', 3000)

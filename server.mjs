import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

const PORT = 3000;

const __filename =
    fileURLToPath(import.meta.url);

const __dirname =
    path.dirname(__filename);


/*
    Permitir JSON.
*/

app.use(
    express.json()
);


/*
    Servir todos los archivos
    del proyecto.
*/

app.use(
    express.static(__dirname)
);


/*
    Página principal.
*/

app.get(
    "/",
    (req, res) => {

        res.sendFile(
            path.join(
                __dirname,
                "index.html"
            )
        );

    }
);


/*
    Estado del sistema.
*/

app.get(
    "/api/status",
    (req, res) => {

        res.json({

            status: "online",

            project: "MUÉVETE AI",

            version: "4.0",

            knowledgeBase:
                "local",

            chatbot:
                "keyword + matrix",

            message:
                "MUÉVETE AI está funcionando correctamente."

        });

    }
);


/*
    Iniciar servidor.
*/

app.listen(
    PORT,
    () => {

        console.log(

            `MUÉVETE AI funcionando en http://localhost:${PORT}`

        );

    }
);
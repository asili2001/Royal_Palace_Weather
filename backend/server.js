import dotEnv from 'dotenv';

// I've set the cors to general access to all domains just to make it easier to test
//But in other circumstances i would use a specific domain to allow access to only that domain.
import cors from 'cors';
dotEnv.config('./')

import express from 'express';
const app = express();

import routes from './routes/index.js';

app.use(cors());

app.use((err, req, res, next) => {
    switch (err.name) {
        case "SyntaxError":
            res.status(400).json({error: "Invalid JSON"})
            break;
        default:
            res.status(500).json({error: "Internal Error"})
            console.error(err)
            break;
    }
})
app.use('/', routes);

app.listen(process.env.SERVER_PORT, ()=>{
    console.log(`Started at PORT : ${process.env.SERVER_PORT}`);
})

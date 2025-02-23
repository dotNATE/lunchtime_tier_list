import 'dotenv/config';

import express, { type Express, type Request, type Response } from 'express';
import cors from 'cors';

const main = async () => {
    const app: Express = express();
    const port = process.env.PORT_NUM || 3000;

    app.use(cors());
    app.use(express.json());
    
    app.get('/', (req: Request, res: Response)=>{
        res.status(200);
        res.send("Success");
    });

    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
};

main().catch(err => {
    console.error(err);
});

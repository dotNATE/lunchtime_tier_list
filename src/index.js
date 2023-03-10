import 'dotenv/config';

import express from 'express';
import cors from 'cors';

const main = async () => {
    const app = express();

    app.use(cors());
    app.use(express.json());
    
    app.get('/', (req, res)=>{
        res.status(200);
        res.send("Success");
    });

    app.listen(process.env.PORT_NUM, () => {
        console.log(`Server running on port ${process.env.PORT_NUM}`);
    });
};

main().catch(err => {
    console.error(err);
});

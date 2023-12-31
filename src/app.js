import express from 'express';
import UsersRoutes from './routes/users.routes.js';
import IndexRoutes from './routes/index.routes.js';
import cors from 'cors';

const app = express();

app.use(express.json());

app.use(cors({ origin: '*'}));
app.use('/api', UsersRoutes);
app.use(IndexRoutes);

app.use((req, res, next) => {
    res.status(404).json({
        message: 'Endpoint not found!'
    });
});

export default app;
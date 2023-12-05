import express from 'express';
import UsersRoutes from './routes/users.routes.js';
import IndexRoutes from './routes/index.routes.js';

const app = express();

app.use(express.json());

app.use('/api', UsersRoutes);
app.use(IndexRoutes);

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    res.status(404).json({
        message: 'Endpoint not found!'
    });
});

export default app;
import { Router } from 'express';

const routes = new Router();

routes.get('/teste', (req, res) => res.json({ message: 'ok' }));

export default routes;

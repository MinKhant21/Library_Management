import { Home } from "./controller/Home";
import db from './controller/db'
import express from 'express'
import * as BookController from "./controller/BookController";
const router = express.Router();
router.get('/api/books', BookController.getbooks);
router.post('/api/books', BookController.store);
router.post('/api/user-web-from',Home)

export default router
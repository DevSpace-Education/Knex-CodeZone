import {Router} from 'express';

import PostsController from './controllers/PostsController';
const posts = new PostsController()

const routes = Router(); 

routes.get('/posts', posts.index)
routes.post('/posts', posts.create)

export default routes;
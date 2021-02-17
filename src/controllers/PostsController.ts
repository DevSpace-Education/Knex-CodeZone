import {Request, Response} from 'express';

import db from '../database/connection';

export default class PostsController{
  async index(request: Request, response: Response) {
    const posts = await db('posts')
      .whereExists(function () {
        this.select('*')
        .from('posts')
      })

      return response.json(posts)
  }

  async create(request: Request, response: Response) {
    const {title, description} = request.body;

    const trx = await db.transaction()

    try {
      await trx('posts').insert({
        title,
        description
      });

      await trx.commit();

      return response.status(201).send()
    } catch (err) {
      await trx.rollback()

      return response.status(400).json({
        error: 'Unexpected error while creating new class'
      })
    }
  }

}
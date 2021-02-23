import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { token } from '../../services/passport'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Cars, { schema } from './model'

const router = new Router()
const { name, model, year, description } = schema.tree

/**
 * @api {post} /cars Create cars
 * @apiName CreateCars
 * @apiGroup Cars
 * @apiPermission user
 * @apiParam {String} access_token user access token.
 * @apiParam {String} name Cars's name.
 * @apiParam {String} model Cars's model.
 * @apiParam {String} year Cars's year.
 * @apiParam {String} description Cars's description.
 * @apiSuccess {Object} cars Cars's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Cars not found.
 * @apiError 401 user access only.
 */
router.post('/',
  token({ required: true }),
  body({ name, model, year, description }),
  create)

/**
 * @api {get} /cars Retrieve cars
 * @apiName RetrieveCars
 * @apiGroup Cars
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of cars.
 * @apiSuccess {Object[]} rows List of cars.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /cars/:id Retrieve cars
 * @apiName RetrieveCars
 * @apiGroup Cars
 * @apiSuccess {Object} cars Cars's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Cars not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /cars/:id Update cars
 * @apiName UpdateCars
 * @apiGroup Cars
 * @apiPermission user
 * @apiParam {String} access_token user access token.
 * @apiParam {String} name Cars's name.
 * @apiParam {String} model Cars's model.
 * @apiParam {String} year Cars's year.
 * @apiParam {String} description Cars's description.
 * @apiSuccess {Object} cars Cars's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Cars not found.
 * @apiError 401 user access only.
 */
router.put('/:id',
  token({ required: true }),
  body({ name, model, year, description }),
  update)

/**
 * @api {delete} /cars/:id Delete cars
 * @apiName DeleteCars
 * @apiGroup Cars
 * @apiPermission user
 * @apiParam {String} access_token user access token.
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Cars not found.
 * @apiError 401 user access only.
 */
router.delete('/:id',
  token({ required: true }),
  destroy)

export default router

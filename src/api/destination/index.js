import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { token } from '../../services/passport'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Destination, { schema } from './model'

const router = new Router()
const { destination, destination_cor, arrival, arrival_cor, car, date, status } = schema.tree

/**
 * @api {post} /destinations Create destination
 * @apiName CreateDestination
 * @apiGroup Destination
 * @apiPermission user
 * @apiParam {String} access_token user access token.
 * @apiParam {String} destination Destination's destination.
 * @apiParam {String} destination_cor Destination's coordinates destination.
 * @apiParam {String} arrival Destination's arrival.
 * @apiParam {String} arrival_cor Destination's coordinates arrival.
 * @apiParam {ObjectId} car Destination's carId.
 * @apiParam {String} date Destination's date.
 * @apiParam {Boolean} status Destination's status.
 * @apiSuccess {Object} destination Destination's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Destination not found.
 * @apiError 401 user access only.
 */
router.post('/',
  token({ required: true }),
  body({ destination, destination_cor, arrival, arrival_cor, car, date, status }),
  create)

/**
 * @api {get} /destinations Retrieve destinations
 * @apiName RetrieveDestinations
 * @apiGroup Destination
 * @apiPermission user
 * @apiParam {String} access_token user access token.
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of destinations.
 * @apiSuccess {Object[]} rows List of destinations.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 401 user access only.
 */
router.get('/',
  token({ required: true }),
  query(),
  index)

/**
 * @api {get} /destinations/:id Retrieve destination
 * @apiName RetrieveDestination
 * @apiGroup Destination
 * @apiPermission user
 * @apiParam {String} access_token user access token.
 * @apiSuccess {Object} destination Destination's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Destination not found.
 * @apiError 401 user access only.
 */
router.get('/:id',
  token({ required: true }),
  show)

/**
 * @api {put} /destinations/:id Update destination
 * @apiName UpdateDestination
 * @apiGroup Destination
 * @apiPermission user
 * @apiParam {String} access_token user access token.
 * @apiParam {String} destination Destination's destination.
 * @apiParam {String} destination_cor Destination's coordinates destination.
 * @apiParam {String} arrival Destination's arrival.
 * @apiParam {String} arrival_cor Destination's coordinates arrival.
 * @apiParam {ObjectId} car Destination's carId.
 * @apiParam {String} date Destination's date.
 * @apiParam {Boolean} status Destination's status.
 * @apiSuccess {Object} destination Destination's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Destination not found.
 * @apiError 401 user access only.
 */
router.put('/:id',
  token({ required: true }),
  body({ destination, destination_cor, arrival, arrival_cor, car, date, status }),
  update)

/**
 * @api {delete} /destinations/:id Delete destination
 * @apiName DeleteDestination
 * @apiGroup Destination
 * @apiPermission user
 * @apiParam {String} access_token user access token.
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Destination not found.
 * @apiError 401 user access only.
 */
router.delete('/:id',
  token({ required: true }),
  destroy)

export default router

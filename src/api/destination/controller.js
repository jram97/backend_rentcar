import { success, notFound, authorOrAdmin } from '../../services/response/'
import { Destination } from '.'

export const create = ({ user, bodymen: { body } }, res, next) =>
  Destination.create({ ...body, user })
    .then((destination) => destination.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  Destination.count(query)
    .then(count => Destination.find(query, select, cursor)
      .populate('user')
      .then((destinations) => ({
        count,
        rows: destinations.map((destination) => destination.view())
      }))
    )
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Destination.findById(params.id)
    .populate('user')
    .then(notFound(res))
    .then((destination) => destination ? destination.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ user, bodymen: { body }, params }, res, next) =>
  Destination.findById(params.id)
    .populate('user')
    .then(notFound(res))
    .then(authorOrAdmin(res, user, 'user'))
    .then((destination) => destination ? Object.assign(destination, body).save() : null)
    .then((destination) => destination ? destination.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ user, params }, res, next) =>
  Destination.findById(params.id)
    .then(notFound(res))
    .then(authorOrAdmin(res, user, 'user'))
    .then((destination) => destination ? destination.remove() : null)
    .then(success(res, 204))
    .catch(next)

import { IQuery } from '../generated/resolvers'
import { Types } from './types'

export interface QueryRoot {}

export const Query: IQuery.Resolver<Types> = {
  masters: async (root, args, ctx) => ctx.db.query.masters(),
}

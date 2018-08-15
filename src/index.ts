import { GraphQLServer } from 'graphql-yoga'
import { IResolvers } from './generated/resolvers'
import { Types } from './resolvers/types'
import { Query } from './resolvers/Query'
import { SpecialMaster } from './resolvers/SpecialMaster'
import { Cat } from './resolvers/Cat'
import { Prisma } from './generated/prisma'

const resolvers: IResolvers<Types> = {
  Query: Query,
  SpecialMaster: SpecialMaster,
  Cat: Cat,
}

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: {
    db: new Prisma({ debug: true }),
  },
} as any)
server.start(() => console.log('Server is running on localhost:4000'))

import { ApolloServer } from 'apollo-server'
import config from './config'
import { typeDefs, resolvers } from './graphql/schema/schema'
import {
  ApolloServerPluginCacheControl,
  ApolloServerPluginLandingPageLocalDefault
} from 'apollo-server-core'

const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  cache: 'bounded',
  introspection: true,
  plugins: [
    ApolloServerPluginCacheControl({
      // Cache everything for 1 second by default.
      defaultMaxAge: 1,
      // Don't send the `cache-control` response header.
      calculateHttpHeaders: false
    }),
    ApolloServerPluginLandingPageLocalDefault({ embed: true })
  ]
})

void server.listen(config.port).then(({ url }) => {
  console.log(`Server ready at ${url}`)
})

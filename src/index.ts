import { ApolloServer } from 'apollo-server'
import { typeDefs, resolvers } from './graphql/schema/schema'

const server = new ApolloServer({
  typeDefs,
  resolvers
})

void server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`)
})

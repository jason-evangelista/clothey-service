import dotenv from 'dotenv'
dotenv.config()
import 'module-alias/register'

import { ApolloServer } from 'apollo-server-express'
import {
  ApolloServerPluginDrainHttpServer,
  ApolloServerPluginLandingPageLocalDefault
} from 'apollo-server-core'

import express from 'express'
import http from 'http'
import query from '@query/query'
import resolver from '@resolver/resolver'
import verifyToken from '@middleware/verify.token'

const port = process.env.PORT || 4000

const initApolloServer = async () => {
  const app = express()
  const httpServer = http.createServer(app)
  const apolloServer = new ApolloServer({
    typeDefs: query,
    resolvers: resolver,
    csrfPrevention: true,
    cache: 'bounded',
    plugins: [
      ApolloServerPluginDrainHttpServer({ httpServer }),
      ApolloServerPluginLandingPageLocalDefault({ embed: true })
    ],
    context: ({ req }) => {
      const token = req.headers.authorization || ''
      verifyToken(token)
    }
  })
  await apolloServer.start()
  apolloServer.applyMiddleware({ app, path: '/hideout' })
  await new Promise<void>((resolve) =>
    httpServer.listen({ port }, resolve)
  )
  console.info(`🚀 Server starts at http://localhost:${port}/hideout`)
}

initApolloServer()

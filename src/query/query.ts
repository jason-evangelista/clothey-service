import { gql } from 'apollo-server-express'
import { DocumentNode } from 'graphql'
import userQueryType from './type/user.query.type'

const queryDef: DocumentNode = gql`
  type Query {
    users: [User]
  }
`

const query: DocumentNode = gql`
  ${userQueryType}
  ${queryDef}
`

export default query

import { gql } from 'apollo-server-express'
import { DocumentNode } from 'graphql'

const userQueryType: DocumentNode = gql`
  type User {
    email: String
    name: String
    age: Int
  }
`

export default userQueryType

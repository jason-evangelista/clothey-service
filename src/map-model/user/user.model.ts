import { DocumentNode } from 'graphql'
import { gql } from 'apollo-server-express'

type UserType = {
  name: string
  age: number
}

const UserModel: DocumentNode = gql`
  type User {
    name: String
    age: Int
  }
`

export { UserType, UserModel }

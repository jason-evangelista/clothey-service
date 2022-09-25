import User from '@schemaType/user'

type ResolverType = {
  Query: {
    users: () => User[]
  }
}

export default ResolverType

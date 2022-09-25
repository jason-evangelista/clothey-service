import ResolverType from './type/resolver.type'

const userResolver: Pick<ResolverType['Query'], 'users'> = {
  users: () => {
    return [
      {
        email: 'yeezyvans@gmail.com',
        name: 'Jason Evangelista',
        age: 21
      }
    ]
  }
}

export default userResolver

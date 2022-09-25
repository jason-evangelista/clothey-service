import ResolverType from './type/resolver.type'
import userResolver from './user.resolver'

const resolver: ResolverType = { Query: { ...userResolver } }

export default resolver

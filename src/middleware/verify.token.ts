/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { AuthenticationError } from 'apollo-server-express'
import jwt from 'jsonwebtoken'

const verifyToken = (token: string) => {
  if (!token)
    throw new AuthenticationError('Authorization token required')
  if (jwt.verify(token, process.env.JWT_RAW_SECRET!)) {
    return true
  } else {
    throw new AuthenticationError('Authorization token failed')
  }
}

export default verifyToken

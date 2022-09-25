/* eslint-disable @typescript-eslint/no-non-null-assertion */
import dotenv from 'dotenv'
dotenv.config()

import jwt from 'jsonwebtoken'

const token = jwt.sign(
  process.env.JWT_PAYLOAD_SECRET!,
  process.env.JWT_RAW_SECRET!
)

console.info(token)

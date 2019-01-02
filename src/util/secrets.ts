import logger from './logger'
import dotenv from 'dotenv'
import fs from 'fs'

if (fs.existsSync('.env')) {
    logger.debug('Using projct.env file to supply config environment variables')
    dotenv.config({ path: '.env' })
} else {
    logger.debug('Error while reading environment file')
}
export const ENVIRONMENT = process.env.NODE_ENV
const prod = ENVIRONMENT === 'production' // Anything else is treated as 'dev'

export const SESSION_SECRET = process.env['SESSION_SECRET']
// export const MONGODB_URI = prod ? process.env['MONGODB_URI'] : process.env['MONGODB_URI_LOCAL']
export const MONGODB_URI = process.env['MONGODB_URI']

if (!MONGODB_URI) {
    logger.error('No mongo connection string. Set MONGODB_URI environment variable.')
    process.exit(1)
}

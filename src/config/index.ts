import { config } from 'dotenv'
config()

export default {
  port: process.env.PORT ?? 4000,
  urlFenix: process.env.URL_FENIX ?? 'http://localhost:3000'
}

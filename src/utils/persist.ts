// save env variables to a file

import fs from "fs"
import path from "path"

const persistEnv = (env: { [key: string]: string }) => {
  const envPath = path.join(process.cwd(), "./data/data.txt")
  const envFile = fs.createWriteStream(envPath)

  Object.entries(env).forEach(([key, value]) => {
    console.log(`Setting ${key} to: ${value}`)
    envFile.write(`${key}=${value}\n`)
  })

  envFile.end()
}

// read env variables from a file
const readEnv = () => {
  const envPath = path.join(process.cwd(), "./data/data.txt")
  const envFile = fs.readFileSync(envPath, "utf8")

  const env = envFile
    .split("\n")
    .filter((line) => line)
    .reduce((acc: { [key: string]: string }, curr) => {
      const [key, value] = curr.split("=")
      acc[key] = value
      return acc
    }, {})

  return env
}

const envFile = readEnv()
// set app default env variables
const app1 = process.env.HEROKU_TOOL_APP_1 || envFile.HEROKU_TOOL_APP_1
const app2 = process.env.HEROKU_TOOL_APP_2 || envFile.HEROKU_TOOL_APP_2
const app3 = process.env.HEROKU_TOOL_APP_3 || envFile.HEROKU_TOOL_APP_3

const setEnv = () => {
  if (app1) {
    persistEnv({ HEROKU_TOOL_APP_1: app1 })
  }
  if (app2) {
    persistEnv({ HEROKU_TOOL_APP_2: app2 })
  }
  if (app3) {
    persistEnv({ HEROKU_TOOL_APP_3: app3 })
  }
}

//TODO: - refactor
setEnv()

console.log("envFile", envFile)

export { setEnv, persistEnv }

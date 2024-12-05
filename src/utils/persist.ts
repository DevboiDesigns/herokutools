// save env variables to a file
import fs from "fs"
import path from "path"

/**
 * * Persist environment variables to a file
 * @param env
 */
const saveEnvVariablesToFile = (env: { [key: string]: string }) => {
  const envPath = path.join(process.cwd(), "./data/data.txt")
  const envFile = readEnv()
  const newEnv = { ...envFile, ...env }
  const writeStream = fs.createWriteStream(envPath, {
    flags: "w",
  })
  Object.entries(newEnv).map(([key, value]) => {
    console.log(`Setting ${key} to: ${value}`)
    writeStream.write(`${key}=${value}\n`)
  })
  writeStream.end()
}

/**
 * * Read environment variables from a file
 * @returns
 */
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

/**
 * * Set environment variables
 */
const setEnv = (defaulName?: string) => {
  const envFile = readEnv()
  // set app default env variables
  const app1 = process.env.HEROKU_TOOL_APP_1 || envFile.HEROKU_TOOL_APP_1
  const app2 = process.env.HEROKU_TOOL_APP_2 || envFile.HEROKU_TOOL_APP_2
  const app3 = process.env.HEROKU_TOOL_APP_3 || envFile.HEROKU_TOOL_APP_3
  if (app1 || defaulName) {
    saveEnvVariablesToFile({ HEROKU_TOOL_APP_1: app1 })
  }
  if (app2) {
    saveEnvVariablesToFile({ HEROKU_TOOL_APP_2: app2 })
  }
  if (app3) {
    saveEnvVariablesToFile({ HEROKU_TOOL_APP_3: app3 })
  }
  // console.log("envFile", envFile)
}

/**
 * * Get Default App Name (HEROKU_TOOL_APP_1)
 * @returns {string}
 */
const getDefaultAppName = (): string | undefined => {
  const envFile = readEnv()
  return envFile.HEROKU_TOOL_APP_1 || process.env.HEROKU_TOOL_APP_1
}

// handler
const handleEnv = (appName?: string) => {
  let app1 = process.env.HEROKU_TOOL_APP_1
  // if (!app1) {
  // app1 = readEnv().HEROKU_TOOL_APP_1
  // }
  if (appName) {
    app1 = appName
  } else {
    app1 = readEnv().HEROKU_TOOL_APP_1
  }
  let app2 = process.env.HEROKU_TOOL_APP_2
  let app3 = process.env.HEROKU_TOOL_APP_3

  if (app1) {
    process.env.HEROKU_TOOL_APP_1 = app1
    saveEnvVariablesToFile({ HEROKU_TOOL_APP_1: app1 })
  }
  if (app2) {
    process.env.HEROKU_TOOL_APP_2 = app2
    saveEnvVariablesToFile({ HEROKU_TOOL_APP_2: app2 })
  }
  if (app3) {
    process.env.HEROKU_TOOL_APP_3 = app3
    saveEnvVariablesToFile({ HEROKU_TOOL_APP_3: app3 })
  }
}

export default handleEnv

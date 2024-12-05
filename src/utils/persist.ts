// save env variables to a file
import fs from "fs"
import path from "path"

/**
 * * Persist environment variables to a file
 * @param env
 */
const saveEnvVariablesToFile = (env: { [key: string]: string }) => {
  // Path to the file
  const envPath = path.join(process.cwd(), "./data/data.txt")
  // Write stream to file (append)
  const envFile = fs.createWriteStream(envPath, {
    flags: "a",
  })
  Object.entries(env).map(([key, value]) => {
    console.log(`Setting ${key} to: ${value}`)
    envFile.write(`${key}=${value}\n`)
  })
  envFile.end()
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

//TODO: - refactor
// setEnv()

// handler
const handleEnv = (appName?: string) => {
  // first check in process.env has new env variables for HEROKU_TOOL_APP_1 - HEROKU_TOOL_APP_2 - HEROKU_TOOL_APP_3

  let app1 = process.env.HEROKU_TOOL_APP_1
  if (!app1) {
    app1 = readEnv().HEROKU_TOOL_APP_1
  }
  if (appName) {
    app1 = appName
  }
  let app2 = process.env.HEROKU_TOOL_APP_2
  let app3 = process.env.HEROKU_TOOL_APP_3

  // if it does, save them to the file
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

  // if not, check if there are any saved env variables in the file
  // app1 = readEnv().HEROKU_TOOL_APP_1
  // console.log(readEnv())
  // console.log(`READ env file: ${app1}`)
  // app2 = readEnv().HEROKU_TOOL_APP_2
  // app3 = readEnv().HEROKU_TOOL_APP_3

  // // if there are, set them to process.env
  // if (app1) {
  //   process.env.HEROKU_TOOL_APP_1 = app1

  //   console.log(
  //     `Setting process.env.HEROKU_TOOL_APP_1 to: ${process.env.HEROKU_TOOL_APP_1}`
  //   )
  // }
  // if (app2) {
  //   process.env.HEROKU_TOOL_APP_2 = app2
  // }
  // if (app3) {
  //   process.env.HEROKU_TOOL_APP_3 = app3
  // }
}

export default handleEnv

// export {
//   setEnv,
//   saveEnvVariablesToFile as persistEnv,
//   readEnv,
//   getDefaultAppName,
// }

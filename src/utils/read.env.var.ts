/**
 *
 * * Read the environment variables from the options object
 *
 * @param options
 * @returns {Object} env
 *
 */
const readEnvVariablePrams = (
  options: any
): {
  [key: string]: string
} => {
  const str = options.toString() as string // 'VAR1="value1", VAR2="value2", VAR3="value3"'
  const env = str.split(",").reduce((acc: { [key: string]: string }, curr) => {
    const [key, value] = curr.split("=")
    acc[key.trim()] = value.trim().replace(/['"]/g, "")
    return acc
  }, {})

  return env
}

export default readEnvVariablePrams

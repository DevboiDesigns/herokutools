const readEnvVariablePrams = (options: any) => {
  const str = options.env as string // 'VAR1="value1", VAR2="value2", VAR3="value3"'

  const env = str.split(",").reduce((acc: { [key: string]: string }, curr) => {
    const [key, value] = curr.split("=")
    acc[key.trim()] = value.trim().replace(/['"]/g, "")
    return acc
  }, {})

  console.log(env)
}

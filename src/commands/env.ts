// // set environment variables for heroku cli

// import { Command, flags } from '@oclif/command'
// import { exec } from 'child_process'

// export default class Env extends Command {
//   static description = 'set environment variables for heroku cli'

//   static examples = [
//     `$ heroku-cli env:set VAR1=value VAR2=value
//     `,
//   ]

//   static flags = {
//     help: flags.help({ char: 'h' }),
//   }

//   static args = [
//     {
//       name: 'key',
//       required: true,
//       description: 'environment variable key',
//     },
//     {
//       name: 'value',
//       required: true,
//       description: 'environment variable value',
//     },
//   ]

//   async run() {
//     const { args } = this.parse(Env)

//     exec(`heroku config:set ${args.key}=${args.value}`, (error, stdout, stderr) => {
//       if (error) {
//         this.error(`exec error: ${error}`)
//         return
//       }
//       if (stderr) {
//         this.error(`stderr: ${stderr}`)
//         return
//       }
//       this.log(`stdout: ${stdout}`)
//     })
//   }
// }

// // Example Usage
// // $ heroku-cli env:set VAR1=value VAR2=value
// // stdout: Setting VAR1 and restarting ⬢ app-name... done, v1

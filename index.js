import link from 'terminal-link'
import ora from 'ora'
import chalk from 'chalk'

const dark = {
  tuxCallOut: chalk.hex('#0DE0CF'),
  tuxAction: chalk.hex('#87E3F8'),
  tuxPrimary: chalk.hex('#f7f7f7'),
  tuxSecondary: chalk.hex('#7278ac'),
  tuxTertiary: chalk.hex('#bbbed8'),
  tuxSuccess: chalk.hex('#4cf679'),
  tuxError: chalk.hex('#dc6467'),
  tuxMulti1: chalk.hex('#9013F3'),
  tuxMulti2: chalk.hex('#1775FF'),
  tuxMulti3: chalk.hex('#F6934C'),
  tuxEmphatic: chalk.hex('#FFFFFF')
}

const light = {
  tuxCallOut: chalk.hex('#0DE0CF'),
  tuxAction: chalk.hex('#87E3F8'),
  tuxPrimary: chalk.hex('#f7f7f7'),
  tuxSecondary: chalk.hex('#7278ac'),
  tuxTertiary: chalk.hex('#bbbed8'),
  tuxSuccess: chalk.hex('#4cf679'),
  tuxError: chalk.hex('#dc6467'),
  tuxMulti1: chalk.hex('#9013F3'),
  tuxMulti2: chalk.hex('#1775FF'),
  tuxMulti3: chalk.hex('#F6934C'),
  tuxEmphatic: chalk.hex('#000000')
}

const modes = { dark, light }
let mode = 'dark'

class Template extends Array {
  constructor (msg) {
    super(1)
    this[0] = msg
    this.raw = this
  }
}

chalk.tuxUrl = (input) => {
  const [text, url] = input.split(' ')
  return link(chalk.tuxMulti2(text), url)
}
chalk.tuxTerm = (input) => {
  return `${chalk.tuxSuccess('$')} ${chalk.tuxCallOut(input)}`
}

Object.assign(chalk, modes[mode])

export function theme (name = mode) {
  if (name === mode) return chalk
  if (name in modes) {
    mode = name
    Object.assign(chalk, modes[name])
    return chalk
  }
  throw Error(`${name} mode not recognized`)
}

export const spinner = ora({ spinner: 'dots2', color: 'tuxSecondary', interval: 110, stream: process.stdin })

export function render (message) {
  const rendered = chalk(new Template(message))
  return rendered
}

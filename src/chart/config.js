const animationDuration = 350
const shouldResize = true

// Nodes
const nodeWidth = 240
const nodeHeight = 120
const nodeSpacing = 12
const nodePaddingX = 16
const nodePaddingY = 16
const avatarWidth = 40
const nodeBorderRadius = 4
const margin = {
  top: 20,
  right: 20,
  bottom: 20,
  left: 20
}

// Lines
const lineType = 'angle'
const lineDepthY = 120 /* Height of the line for child nodes */

// Colors
const backgroundColor = '#fff'
const borderColor = '#e6e8e9'
const nameColor = '#c966b5'
const titleColor = '#617080'
const descriptionColor = '#4054d9'
const reportsColor = '#c7ccf5'

// style
const style = {
  cursor: 'move',
  height: '100%',
  width: '100%'
}

const className = undefined

const config = {
  margin,
  animationDuration,
  nodeWidth,
  nodeHeight,
  nodeSpacing,
  nodePaddingX,
  nodePaddingY,
  nodeBorderRadius,
  avatarWidth,
  lineType,
  lineDepthY,
  backgroundColor,
  borderColor,
  nameColor,
  titleColor,
  descriptionColor,
  reportsColor,
  style,
  className,
  shouldResize
}

module.exports = config

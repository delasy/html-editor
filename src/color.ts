export default {
  black: '#000000',
  blackAlpha: (opacity = 1): string => {
    if (opacity === 1) {
      throw new Error('Using alpha channels for opacity 1 is invalid')
    }

    return `rgba(0, 0, 0, ${opacity})`
  },
  ghostWhite: '#F2F2F7',
  ghostWhiteAlpha: (opacity = 1): string => {
    if (opacity === 1) {
      throw new Error('Using alpha channels for opacity 1 is invalid')
    }

    return `rgba(242, 242, 247, ${opacity})`
  },
  primary: '#43A047',
  primaryAlpha: (opacity = 1): string => {
    if (opacity === 1) {
      throw new Error('Using alpha channels for opacity 1 is invalid')
    }

    return `rgba(67, 160, 71, ${opacity})`
  },
  transparent: 'transparent',
  white: '#FFFFFF',
  whiteAlpha: (opacity = 1): string => {
    if (opacity === 1) {
      throw new Error('Using alpha channels for opacity 1 is invalid')
    }

    return `rgba(255, 255, 255, ${opacity})`
  }
}

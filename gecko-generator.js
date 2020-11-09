const fs = require('fs')
const gecko = require('./gecko-v2')

const props = [
  'alignContent',
  'alignItems',
  'alignSelf',
  'all',
  'animation',
  'animationDelay',
  'animationDirection',
  'animationDuration',
  'animationFillMode',
  'animationIterationCount',
  'animationName',
  'animationPlayState',
  'animationTimingFunction',
  'backfaceVisibility',
  'background',
  'backgroundAttachment',
  'backgroundClip',
  'backgroundColor',
  'backgroundImage',
  'backgroundOrigin',
  'backgroundPosition',
  'backgroundPositionX',
  'backgroundPositionY',
  'backgroundRepeat',
  'backgroundSize',
  'blockSize',
  'border',
  'borderBlockEnd',
  'borderBlockEndColor',
  'borderBlockEndStyle',
  'borderBlockEndWidth',
  'borderBlockStart',
  'borderBlockStartColor',
  'borderBlockStartStyle',
  'borderBlockStartWidth',
  'borderBottom',
  'borderBottomColor',
  'borderBottomLeftRadius',
  'borderBottomRightRadius',
  'borderBottomStyle',
  'borderBottomWidth',
  'borderCollapse',
  'borderColor',
  'borderImage',
  'borderImageOutset',
  'borderImageRepeat',
  'borderImageSlice',
  'borderImageSource',
  'borderImageWidth',
  'borderInlineEnd',
  'borderInlineEndColor',
  'borderInlineEndStyle',
  'borderInlineEndWidth',
  'borderInlineStart',
  'borderInlineStartColor',
  'borderInlineStartStyle',
  'borderInlineStartWidth',
  'borderLeft',
  'borderLeftColor',
  'borderLeftStyle',
  'borderLeftWidth',
  'borderRadius',
  'borderRight',
  'borderRightColor',
  'borderRightStyle',
  'borderRightWidth',
  'borderSpacing',
  'borderStyle',
  'borderTop',
  'borderTopColor',
  'borderTopLeftRadius',
  'borderTopRightRadius',
  'borderTopStyle',
  'borderTopWidth',
  'borderWidth',
  'bottom',
  'boxShadow',
  'boxSizing',
  'breakAfter',
  'breakBefore',
  'breakInside',
  'captionSide',
  'caretColor',
  'clear',
  'clip',
  'clipPath',
  'clipRule',
  'color',
  'colorInterpolation',
  'colorInterpolationFilters',
  'columnCount',
  'columnFill',
  'columnGap',
  'columnRule',
  'columnRuleColor',
  'columnRuleStyle',
  'columnRuleWidth',
  'columnSpan',
  'columnWidth',
  'columns',
  'content',
  'counterIncrement',
  'counterReset',
  'cursor',
  'direction',
  'display',
  'dominantBaseline',
  'emptyCells',
  'fill',
  'fillOpacity',
  'fillRule',
  'filter',
  'flex',
  'flexBasis',
  'flexDirection',
  'flexFlow',
  'flexGrow',
  'flexShrink',
  'flexWrap',
  'float',
  'floodColor',
  'floodOpacity',
  'font',
  'fontFamily',
  'fontFeatureSettings',
  'fontKerning',
  'fontSize',
  'fontSizeAdjust',
  'fontStretch',
  'fontStyle',
  'fontSynthesis',
  'fontVariant',
  'fontVariantCaps',
  'fontVariantEastAsian',
  'fontVariantLigatures',
  'fontVariantNumeric',
  'fontVariantPosition',
  'fontWeight',
  'gap',
  'grid',
  'gridArea',
  'gridAutoColumns',
  'gridAutoFlow',
  'gridAutoRows',
  'gridColumn',
  'gridColumnEnd',
  'gridColumnGap',
  'gridColumnStart',
  'gridGap',
  'gridRow',
  'gridRowEnd',
  'gridRowGap',
  'gridRowStart',
  'gridTemplate',
  'gridTemplateAreas',
  'gridTemplateColumns',
  'gridTemplateRows',
  'height',
  'hyphens',
  'imageOrientation',
  'imageRendering',
  'inlineSize',
  'justifyContent',
  'justifyItems',
  'justifySelf',
  'left',
  'letterSpacing',
  'lightingColor',
  'lineBreak',
  'lineHeight',
  'listStyle',
  'listStyleImage',
  'listStylePosition',
  'listStyleType',
  'margin',
  'marginBlockEnd',
  'marginBlockStart',
  'marginBottom',
  'marginInlineEnd',
  'marginInlineStart',
  'marginLeft',
  'marginRight',
  'marginTop',
  'marker',
  'markerEnd',
  'markerMid',
  'markerStart',
  'maxBlockSize',
  'maxHeight',
  'maxInlineSize',
  'maxWidth',
  'minBlockSize',
  'minHeight',
  'minInlineSize',
  'minWidth',
  'objectFit',
  'objectPosition',
  'opacity',
  'order',
  'orphans',
  'outline',
  'outlineColor',
  'outlineOffset',
  'outlineStyle',
  'outlineWidth',
  'overflow',
  'overflowAnchor',
  'overflowWrap',
  'overflowX',
  'overflowY',
  'overscrollBehavior',
  'overscrollBehaviorBlock',
  'overscrollBehaviorInline',
  'overscrollBehaviorX',
  'overscrollBehaviorY',
  'padding',
  'paddingBlockEnd',
  'paddingBlockStart',
  'paddingBottom',
  'paddingInlineEnd',
  'paddingInlineStart',
  'paddingLeft',
  'paddingRight',
  'paddingTop',
  'paintOrder',
  'perspective',
  'perspectiveOrigin',
  'placeContent',
  'placeItems',
  'placeSelf',
  'pointerEvents',
  'position',
  'quotes',
  'resize',
  'right',
  'rotate',
  'rowGap',
  'rubyAlign',
  'rubyPosition',
  'scale',
  'scrollBehavior',
  'shapeRendering',
  'stopColor',
  'stopOpacity',
  'stroke',
  'strokeDasharray',
  'strokeDashoffset',
  'strokeLinecap',
  'strokeLinejoin',
  'strokeMiterlimit',
  'strokeOpacity',
  'strokeWidth',
  'tabSize',
  'tableLayout',
  'textAlign',
  'textAlignLast',
  'textAnchor',
  'textCombineUpright',
  'textDecoration',
  'textDecorationColor',
  'textDecorationLine',
  'textDecorationStyle',
  'textEmphasis',
  'textEmphasisColor',
  'textEmphasisPosition',
  'textEmphasisStyle',
  'textIndent',
  'textJustify',
  'textOrientation',
  'textOverflow',
  'textRendering',
  'textShadow',
  'textTransform',
  'textUnderlinePosition',
  'top',
  'touchAction',
  'transform',
  'transformBox',
  'transformOrigin',
  'transformStyle',
  'transition',
  'transitionDelay',
  'transitionDuration',
  'transitionProperty',
  'transitionTimingFunction',
  'translate',
  'unicodeBidi',
  'userSelect',
  'verticalAlign',
  'visibility',
  'whiteSpace',
  'widows',
  'width',
  'willChange',
  'wordBreak',
  'wordSpacing',
  'wordWrap',
  'writingMode',
  'zIndex'
]

const camelize = (str) => {
  return str.replace(/-./g, (x) => {
    return x.toUpperCase()[1]
  })
}

const kebabize = (str) => {
  return str.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase()
}

let data = '{\n'

const customJoin = (arr, separator) => {
  const uniquearr = arr.filter((value, idx, self) => {
    return self.indexOf(value) === idx
  })

  const forbiddenItems = [
    'fontLanguageOverride',
    'fontVariantAlternates',
    'textDecorationThickness'
  ]

  const newarr = []

  for (const item of uniquearr) {
    if (
      !item.includes('-webkit') &&
      !item.includes('-moz') &&
      !forbiddenItems.includes(item)
    ) {
      newarr.push(
        item.replace(/\\/g, '\\\\')
          .replace(/'/g, '\\\'')
          .replace(/\n/g, '\\n')
          .replace(/\t/g, '\\t')
          .replace(/\u201C/g, '\\u201C')
          .replace(/\u201D/g, '\\u201D')
          .replace(/\u2018/g, '\\u2018')
          .replace(/\u2019/g, '\\u2019')
      )
    }
  }

  return newarr.join(separator)
}

const smartIndent = (arr, currIndent, indent) => {
  const maxLineLen = 120
  const collapsedVariant = '[\'' + customJoin(arr, '\', \'') + '\']'

  if (currIndent + collapsedVariant.length < maxLineLen) {
    return collapsedVariant
  }

  const separator = `',\n${' '.repeat(indent + 2)}'`
  return `[\n${' '.repeat(indent + 2)}'` +
    customJoin(arr, separator) +
    `'\n${' '.repeat(indent)}]`
}

for (const key of props.sort()) {
  const kebabKey = kebabize(key)
  const item = gecko[kebabKey]
  const [initialValue, ...restOfInitialValue] = item.initial_values
  const realInitialValue = initialValue === undefined ? '' : initialValue
  const otherValues = [...restOfInitialValue, ...item.other_values]

  data += `  ${key}: {\n`
  data += `    inherited: ${item.inherited},\n`
  data += `    initialValue: '${realInitialValue}',\n`
  data += `    name: '${kebabKey}',\n`
  data += `    otherValues: ${smartIndent(otherValues, 18, 4)},\n`

  switch (item.type) {
    case 0: {
      data += '    type: \'longhand\'\n'
      break
    }
    case 1:
    case 2: {
      const subProperties = item.subproperties.map((subProperty) => {
        return camelize(subProperty)
      })

      data += `    subProperties: ${smartIndent(subProperties, 20, 4)},\n`
      data += '    type: \'shorthand\'\n'

      break
    }
  }

  data += '  },\n'
}

data += '}\n'

fs.writeFileSync('./gecko-config.js', data, 'utf8')

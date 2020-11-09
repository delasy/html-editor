import Element from './element'
import Worker from './worker'
import { ToolToken } from './index'

export interface Config {
  elements: ConfigElement[]
}

export type ConfigElement =
  | ConfigElementButton
  | ConfigElementDiv

interface ConfigElementBase {
  children?: ConfigElement[]
  onMouseMove?: () => any
  style?: ConfigElementBaseStyle & {
    ':active'?: ConfigElementBaseStyle
    ':focus'?: ConfigElementBaseStyle
    ':hover'?: ConfigElementBaseStyle
    ':visited'?: ConfigElementBaseStyle
  }
}

export type ConfigElementBaseStyle = {
  [K in keyof ElementStyle]?: string
}

export interface ConfigElementButton extends ConfigElementBase {
  type: 'button'
}

export interface ConfigElementDiv extends ConfigElementBase {
  type: 'div'
}

export type ElementStyle = {
  [K in keyof ElementStyleConfig]: string
}

export interface ElementStyleConfig {
  readonly alignContent: ElementStyleConfigItemLonghand
  readonly alignItems: ElementStyleConfigItemLonghand
  readonly alignSelf: ElementStyleConfigItemLonghand
  readonly all: ElementStyleConfigItemLonghand
  readonly animation: ElementStyleConfigItemShorthand
  readonly animationDelay: ElementStyleConfigItemLonghand
  readonly animationDirection: ElementStyleConfigItemLonghand
  readonly animationDuration: ElementStyleConfigItemLonghand
  readonly animationFillMode: ElementStyleConfigItemLonghand
  readonly animationIterationCount: ElementStyleConfigItemLonghand
  readonly animationName: ElementStyleConfigItemLonghand
  readonly animationPlayState: ElementStyleConfigItemLonghand
  readonly animationTimingFunction: ElementStyleConfigItemLonghand
  readonly backfaceVisibility: ElementStyleConfigItemLonghand
  readonly background: ElementStyleConfigItemShorthand
  readonly backgroundAttachment: ElementStyleConfigItemLonghand
  readonly backgroundClip: ElementStyleConfigItemLonghand
  readonly backgroundColor: ElementStyleConfigItemLonghand
  readonly backgroundImage: ElementStyleConfigItemLonghand
  readonly backgroundOrigin: ElementStyleConfigItemLonghand
  readonly backgroundPosition: ElementStyleConfigItemShorthand
  readonly backgroundPositionX: ElementStyleConfigItemLonghand
  readonly backgroundPositionY: ElementStyleConfigItemLonghand
  readonly backgroundRepeat: ElementStyleConfigItemLonghand
  readonly backgroundSize: ElementStyleConfigItemLonghand
  readonly blockSize: ElementStyleConfigItemLonghand
  readonly border: ElementStyleConfigItemShorthand
  readonly borderBlockEnd: ElementStyleConfigItemShorthand
  readonly borderBlockEndColor: ElementStyleConfigItemLonghand
  readonly borderBlockEndStyle: ElementStyleConfigItemLonghand
  readonly borderBlockEndWidth: ElementStyleConfigItemLonghand
  readonly borderBlockStart: ElementStyleConfigItemShorthand
  readonly borderBlockStartColor: ElementStyleConfigItemLonghand
  readonly borderBlockStartStyle: ElementStyleConfigItemLonghand
  readonly borderBlockStartWidth: ElementStyleConfigItemLonghand
  readonly borderBottom: ElementStyleConfigItemShorthand
  readonly borderBottomColor: ElementStyleConfigItemLonghand
  readonly borderBottomLeftRadius: ElementStyleConfigItemLonghand
  readonly borderBottomRightRadius: ElementStyleConfigItemLonghand
  readonly borderBottomStyle: ElementStyleConfigItemLonghand
  readonly borderBottomWidth: ElementStyleConfigItemLonghand
  readonly borderCollapse: ElementStyleConfigItemLonghand
  readonly borderColor: ElementStyleConfigItemShorthand
  readonly borderImage: ElementStyleConfigItemShorthand
  readonly borderImageOutset: ElementStyleConfigItemLonghand
  readonly borderImageRepeat: ElementStyleConfigItemLonghand
  readonly borderImageSlice: ElementStyleConfigItemLonghand
  readonly borderImageSource: ElementStyleConfigItemLonghand
  readonly borderImageWidth: ElementStyleConfigItemLonghand
  readonly borderInlineEnd: ElementStyleConfigItemShorthand
  readonly borderInlineEndColor: ElementStyleConfigItemLonghand
  readonly borderInlineEndStyle: ElementStyleConfigItemLonghand
  readonly borderInlineEndWidth: ElementStyleConfigItemLonghand
  readonly borderInlineStart: ElementStyleConfigItemShorthand
  readonly borderInlineStartColor: ElementStyleConfigItemLonghand
  readonly borderInlineStartStyle: ElementStyleConfigItemLonghand
  readonly borderInlineStartWidth: ElementStyleConfigItemLonghand
  readonly borderLeft: ElementStyleConfigItemShorthand
  readonly borderLeftColor: ElementStyleConfigItemLonghand
  readonly borderLeftStyle: ElementStyleConfigItemLonghand
  readonly borderLeftWidth: ElementStyleConfigItemLonghand
  readonly borderRadius: ElementStyleConfigItemShorthand
  readonly borderRight: ElementStyleConfigItemShorthand
  readonly borderRightColor: ElementStyleConfigItemLonghand
  readonly borderRightStyle: ElementStyleConfigItemLonghand
  readonly borderRightWidth: ElementStyleConfigItemLonghand
  readonly borderSpacing: ElementStyleConfigItemLonghand
  readonly borderStyle: ElementStyleConfigItemShorthand
  readonly borderTop: ElementStyleConfigItemShorthand
  readonly borderTopColor: ElementStyleConfigItemLonghand
  readonly borderTopLeftRadius: ElementStyleConfigItemLonghand
  readonly borderTopRightRadius: ElementStyleConfigItemLonghand
  readonly borderTopStyle: ElementStyleConfigItemLonghand
  readonly borderTopWidth: ElementStyleConfigItemLonghand
  readonly borderWidth: ElementStyleConfigItemShorthand
  readonly bottom: ElementStyleConfigItemLonghand
  readonly boxShadow: ElementStyleConfigItemLonghand
  readonly boxSizing: ElementStyleConfigItemLonghand
  readonly breakAfter: ElementStyleConfigItemLonghand
  readonly breakBefore: ElementStyleConfigItemLonghand
  readonly breakInside: ElementStyleConfigItemLonghand
  readonly captionSide: ElementStyleConfigItemLonghand
  readonly caretColor: ElementStyleConfigItemLonghand
  readonly clear: ElementStyleConfigItemLonghand
  readonly clip: ElementStyleConfigItemLonghand
  readonly clipPath: ElementStyleConfigItemLonghand
  readonly clipRule: ElementStyleConfigItemLonghand
  readonly color: ElementStyleConfigItemLonghand
  readonly colorInterpolation: ElementStyleConfigItemLonghand
  readonly colorInterpolationFilters: ElementStyleConfigItemLonghand
  readonly columnCount: ElementStyleConfigItemLonghand
  readonly columnFill: ElementStyleConfigItemLonghand
  readonly columnGap: ElementStyleConfigItemLonghand
  readonly columnRule: ElementStyleConfigItemShorthand
  readonly columnRuleColor: ElementStyleConfigItemLonghand
  readonly columnRuleStyle: ElementStyleConfigItemLonghand
  readonly columnRuleWidth: ElementStyleConfigItemLonghand
  readonly columnSpan: ElementStyleConfigItemLonghand
  readonly columnWidth: ElementStyleConfigItemLonghand
  readonly columns: ElementStyleConfigItemShorthand
  readonly content: ElementStyleConfigItemLonghand
  readonly counterIncrement: ElementStyleConfigItemLonghand
  readonly counterReset: ElementStyleConfigItemLonghand
  readonly cursor: ElementStyleConfigItemLonghand
  readonly direction: ElementStyleConfigItemLonghand
  readonly display: ElementStyleConfigItemLonghand
  readonly dominantBaseline: ElementStyleConfigItemLonghand
  readonly emptyCells: ElementStyleConfigItemLonghand
  readonly fill: ElementStyleConfigItemLonghand
  readonly fillOpacity: ElementStyleConfigItemLonghand
  readonly fillRule: ElementStyleConfigItemLonghand
  readonly filter: ElementStyleConfigItemLonghand
  readonly flex: ElementStyleConfigItemShorthand
  readonly flexBasis: ElementStyleConfigItemLonghand
  readonly flexDirection: ElementStyleConfigItemLonghand
  readonly flexFlow: ElementStyleConfigItemShorthand
  readonly flexGrow: ElementStyleConfigItemLonghand
  readonly flexShrink: ElementStyleConfigItemLonghand
  readonly flexWrap: ElementStyleConfigItemLonghand
  readonly float: ElementStyleConfigItemLonghand
  readonly floodColor: ElementStyleConfigItemLonghand
  readonly floodOpacity: ElementStyleConfigItemLonghand
  readonly font: ElementStyleConfigItemShorthand
  readonly fontFamily: ElementStyleConfigItemLonghand
  readonly fontFeatureSettings: ElementStyleConfigItemLonghand
  readonly fontKerning: ElementStyleConfigItemLonghand
  readonly fontSize: ElementStyleConfigItemLonghand
  readonly fontSizeAdjust: ElementStyleConfigItemLonghand
  readonly fontStretch: ElementStyleConfigItemLonghand
  readonly fontStyle: ElementStyleConfigItemLonghand
  readonly fontSynthesis: ElementStyleConfigItemLonghand
  readonly fontVariant: ElementStyleConfigItemShorthand
  readonly fontVariantCaps: ElementStyleConfigItemLonghand
  readonly fontVariantEastAsian: ElementStyleConfigItemLonghand
  readonly fontVariantLigatures: ElementStyleConfigItemLonghand
  readonly fontVariantNumeric: ElementStyleConfigItemLonghand
  readonly fontVariantPosition: ElementStyleConfigItemLonghand
  readonly fontWeight: ElementStyleConfigItemLonghand
  readonly gap: ElementStyleConfigItemShorthand
  readonly grid: ElementStyleConfigItemShorthand
  readonly gridArea: ElementStyleConfigItemShorthand
  readonly gridAutoColumns: ElementStyleConfigItemLonghand
  readonly gridAutoFlow: ElementStyleConfigItemLonghand
  readonly gridAutoRows: ElementStyleConfigItemLonghand
  readonly gridColumn: ElementStyleConfigItemShorthand
  readonly gridColumnEnd: ElementStyleConfigItemLonghand
  readonly gridColumnGap: ElementStyleConfigItemShorthand
  readonly gridColumnStart: ElementStyleConfigItemLonghand
  readonly gridGap: ElementStyleConfigItemShorthand
  readonly gridRow: ElementStyleConfigItemShorthand
  readonly gridRowEnd: ElementStyleConfigItemLonghand
  readonly gridRowGap: ElementStyleConfigItemShorthand
  readonly gridRowStart: ElementStyleConfigItemLonghand
  readonly gridTemplate: ElementStyleConfigItemShorthand
  readonly gridTemplateAreas: ElementStyleConfigItemLonghand
  readonly gridTemplateColumns: ElementStyleConfigItemLonghand
  readonly gridTemplateRows: ElementStyleConfigItemLonghand
  readonly height: ElementStyleConfigItemLonghand
  readonly hyphens: ElementStyleConfigItemLonghand
  readonly imageOrientation: ElementStyleConfigItemLonghand
  readonly imageRendering: ElementStyleConfigItemLonghand
  readonly inlineSize: ElementStyleConfigItemLonghand
  readonly justifyContent: ElementStyleConfigItemLonghand
  readonly justifyItems: ElementStyleConfigItemLonghand
  readonly justifySelf: ElementStyleConfigItemLonghand
  readonly left: ElementStyleConfigItemLonghand
  readonly letterSpacing: ElementStyleConfigItemLonghand
  readonly lightingColor: ElementStyleConfigItemLonghand
  readonly lineBreak: ElementStyleConfigItemLonghand
  readonly lineHeight: ElementStyleConfigItemLonghand
  readonly listStyle: ElementStyleConfigItemShorthand
  readonly listStyleImage: ElementStyleConfigItemLonghand
  readonly listStylePosition: ElementStyleConfigItemLonghand
  readonly listStyleType: ElementStyleConfigItemLonghand
  readonly margin: ElementStyleConfigItemShorthand
  readonly marginBlockEnd: ElementStyleConfigItemLonghand
  readonly marginBlockStart: ElementStyleConfigItemLonghand
  readonly marginBottom: ElementStyleConfigItemLonghand
  readonly marginInlineEnd: ElementStyleConfigItemLonghand
  readonly marginInlineStart: ElementStyleConfigItemLonghand
  readonly marginLeft: ElementStyleConfigItemLonghand
  readonly marginRight: ElementStyleConfigItemLonghand
  readonly marginTop: ElementStyleConfigItemLonghand
  readonly marker: ElementStyleConfigItemShorthand
  readonly markerEnd: ElementStyleConfigItemLonghand
  readonly markerMid: ElementStyleConfigItemLonghand
  readonly markerStart: ElementStyleConfigItemLonghand
  readonly maxBlockSize: ElementStyleConfigItemLonghand
  readonly maxHeight: ElementStyleConfigItemLonghand
  readonly maxInlineSize: ElementStyleConfigItemLonghand
  readonly maxWidth: ElementStyleConfigItemLonghand
  readonly minBlockSize: ElementStyleConfigItemLonghand
  readonly minHeight: ElementStyleConfigItemLonghand
  readonly minInlineSize: ElementStyleConfigItemLonghand
  readonly minWidth: ElementStyleConfigItemLonghand
  readonly objectFit: ElementStyleConfigItemLonghand
  readonly objectPosition: ElementStyleConfigItemLonghand
  readonly opacity: ElementStyleConfigItemLonghand
  readonly order: ElementStyleConfigItemLonghand
  readonly orphans: ElementStyleConfigItemLonghand
  readonly outline: ElementStyleConfigItemShorthand
  readonly outlineColor: ElementStyleConfigItemLonghand
  readonly outlineOffset: ElementStyleConfigItemLonghand
  readonly outlineStyle: ElementStyleConfigItemLonghand
  readonly outlineWidth: ElementStyleConfigItemLonghand
  readonly overflow: ElementStyleConfigItemShorthand
  readonly overflowAnchor: ElementStyleConfigItemLonghand
  readonly overflowWrap: ElementStyleConfigItemLonghand
  readonly overflowX: ElementStyleConfigItemLonghand
  readonly overflowY: ElementStyleConfigItemLonghand
  readonly overscrollBehavior: ElementStyleConfigItemShorthand
  readonly overscrollBehaviorBlock: ElementStyleConfigItemLonghand
  readonly overscrollBehaviorInline: ElementStyleConfigItemLonghand
  readonly overscrollBehaviorX: ElementStyleConfigItemLonghand
  readonly overscrollBehaviorY: ElementStyleConfigItemLonghand
  readonly padding: ElementStyleConfigItemShorthand
  readonly paddingBlockEnd: ElementStyleConfigItemLonghand
  readonly paddingBlockStart: ElementStyleConfigItemLonghand
  readonly paddingBottom: ElementStyleConfigItemLonghand
  readonly paddingInlineEnd: ElementStyleConfigItemLonghand
  readonly paddingInlineStart: ElementStyleConfigItemLonghand
  readonly paddingLeft: ElementStyleConfigItemLonghand
  readonly paddingRight: ElementStyleConfigItemLonghand
  readonly paddingTop: ElementStyleConfigItemLonghand
  readonly paintOrder: ElementStyleConfigItemLonghand
  readonly perspective: ElementStyleConfigItemLonghand
  readonly perspectiveOrigin: ElementStyleConfigItemLonghand
  readonly placeContent: ElementStyleConfigItemShorthand
  readonly placeItems: ElementStyleConfigItemShorthand
  readonly placeSelf: ElementStyleConfigItemShorthand
  readonly pointerEvents: ElementStyleConfigItemLonghand
  readonly position: ElementStyleConfigItemLonghand
  readonly quotes: ElementStyleConfigItemLonghand
  readonly resize: ElementStyleConfigItemLonghand
  readonly right: ElementStyleConfigItemLonghand
  readonly rotate: ElementStyleConfigItemLonghand
  readonly rowGap: ElementStyleConfigItemLonghand
  readonly rubyAlign: ElementStyleConfigItemLonghand
  readonly rubyPosition: ElementStyleConfigItemLonghand
  readonly scale: ElementStyleConfigItemLonghand
  readonly scrollBehavior: ElementStyleConfigItemLonghand
  readonly shapeRendering: ElementStyleConfigItemLonghand
  readonly stopColor: ElementStyleConfigItemLonghand
  readonly stopOpacity: ElementStyleConfigItemLonghand
  readonly stroke: ElementStyleConfigItemLonghand
  readonly strokeDasharray: ElementStyleConfigItemLonghand
  readonly strokeDashoffset: ElementStyleConfigItemLonghand
  readonly strokeLinecap: ElementStyleConfigItemLonghand
  readonly strokeLinejoin: ElementStyleConfigItemLonghand
  readonly strokeMiterlimit: ElementStyleConfigItemLonghand
  readonly strokeOpacity: ElementStyleConfigItemLonghand
  readonly strokeWidth: ElementStyleConfigItemLonghand
  readonly tabSize: ElementStyleConfigItemLonghand
  readonly tableLayout: ElementStyleConfigItemLonghand
  readonly textAlign: ElementStyleConfigItemLonghand
  readonly textAlignLast: ElementStyleConfigItemLonghand
  readonly textAnchor: ElementStyleConfigItemLonghand
  readonly textCombineUpright: ElementStyleConfigItemLonghand
  readonly textDecoration: ElementStyleConfigItemShorthand
  readonly textDecorationColor: ElementStyleConfigItemLonghand
  readonly textDecorationLine: ElementStyleConfigItemLonghand
  readonly textDecorationStyle: ElementStyleConfigItemLonghand
  readonly textEmphasis: ElementStyleConfigItemShorthand
  readonly textEmphasisColor: ElementStyleConfigItemLonghand
  readonly textEmphasisPosition: ElementStyleConfigItemLonghand
  readonly textEmphasisStyle: ElementStyleConfigItemLonghand
  readonly textIndent: ElementStyleConfigItemLonghand
  readonly textJustify: ElementStyleConfigItemLonghand
  readonly textOrientation: ElementStyleConfigItemLonghand
  readonly textOverflow: ElementStyleConfigItemLonghand
  readonly textRendering: ElementStyleConfigItemLonghand
  readonly textShadow: ElementStyleConfigItemLonghand
  readonly textTransform: ElementStyleConfigItemLonghand
  readonly textUnderlinePosition: ElementStyleConfigItemLonghand
  readonly top: ElementStyleConfigItemLonghand
  readonly touchAction: ElementStyleConfigItemLonghand
  readonly transform: ElementStyleConfigItemLonghand
  readonly transformBox: ElementStyleConfigItemLonghand
  readonly transformOrigin: ElementStyleConfigItemLonghand
  readonly transformStyle: ElementStyleConfigItemLonghand
  readonly transition: ElementStyleConfigItemShorthand
  readonly transitionDelay: ElementStyleConfigItemLonghand
  readonly transitionDuration: ElementStyleConfigItemLonghand
  readonly transitionProperty: ElementStyleConfigItemLonghand
  readonly transitionTimingFunction: ElementStyleConfigItemLonghand
  readonly translate: ElementStyleConfigItemLonghand
  readonly unicodeBidi: ElementStyleConfigItemLonghand
  readonly userSelect: ElementStyleConfigItemLonghand
  readonly verticalAlign: ElementStyleConfigItemLonghand
  readonly visibility: ElementStyleConfigItemLonghand
  readonly whiteSpace: ElementStyleConfigItemLonghand
  readonly widows: ElementStyleConfigItemLonghand
  readonly width: ElementStyleConfigItemLonghand
  readonly willChange: ElementStyleConfigItemLonghand
  readonly wordBreak: ElementStyleConfigItemLonghand
  readonly wordSpacing: ElementStyleConfigItemLonghand
  readonly wordWrap: ElementStyleConfigItemShorthand
  readonly writingMode: ElementStyleConfigItemLonghand
  readonly zIndex: ElementStyleConfigItemLonghand
}

export interface ElementStyleConfigItemBase {
  readonly inherited: boolean
  readonly initialValue: string
  readonly name: string
  readonly otherValues: string[]
}

export type ElementStyleConfigItemLonghand = ElementStyleConfigItemBase & {
  readonly type: 'longhand'
}

export type ElementStyleConfigItemShorthand = ElementStyleConfigItemBase & {
  readonly subProperties: Array<keyof ElementStyle>
  readonly type: 'shorthand'
}

export type Queue =
  | QueueMouseMove
  | QueueRender

export interface QueueMouseMove {
  readonly element: Element
  readonly type: 'mousemove'
}

export interface QueueRender {
  readonly type: 'render'
}

export interface Rect {
  readonly height: number
  readonly width: number
  readonly x: number
  readonly y: number
}

export interface Store {
  readonly canvas: HTMLCanvasElement
  container?: HTMLElement
  readonly ctx: CanvasRenderingContext2D
  height: number
  queue: Queue[]
  readonly scale: number
  sleeping: boolean
  width: number
  workers: Worker[]
}

export interface Tool {
  readonly cursor: string
  readonly hoverDisabled: boolean
  readonly svg?: string
  readonly token: ToolToken
  readonly visible: boolean
}

export type VisibleTool = Tool & {
  readonly svg: string
  readonly visible: true
}

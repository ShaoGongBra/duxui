import { ImageProps } from '@tarojs/components/types/Image'
import { ReactNode } from 'react'

interface ImageProps extends ImageProps {
  /** 图片地址 */
  src: string
  /** 点击图片时是否预览 */
  preview?: boolean
  /** 单图预览时的多图片 */
  images?: string[]
  /** 圆角类型 */
  radiusType?: 'square' | 'round-min'
  /** 点击图片时的回调函数 */
  onClick?: (e: any) => void
}

interface ImageGroupProps {
  /** 子元素 */
  children?: ReactNode
}

export const Image: React.FC<ImageProps> & {
  Group: React.FC<ImageGroupProps>
}

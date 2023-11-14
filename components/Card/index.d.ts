import { ReactNode } from 'react';

interface CardProps {
  /** 是否显示阴影，默认为 true */
  shadow?: boolean;
  /** 圆角大小，默认为 5px */
  radius?: number;
  /** 是否显示垂直方向上的内边距 默认显示 */
  verticalPadding?: boolean
  /** 是否显示组件之间的边距，默认为 false */
  margin?: boolean;
  /** 是否禁用底部边距，默认为 false */
  disableMarginBottom?: boolean;
  /** 是否禁用顶部边距，默认为 false */
  disableMarginTop?: boolean;
  /** 是否横向排列 */
  row?: boolean
  /** 是否换行 */
  wrap?: boolean
  /** flex 容器在主轴方向上的对齐方式 */
  justify?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly'
  /** flex 容器在交叉轴方向上的对齐方式 */
  items?: 'start' | 'end' | 'center' | 'baseline' | 'stretch'
  children?: ReactNode; // 子元素
  className?: string; // 自定义 class
  style?: React.CSSProperties; // 自定义样式
}

interface TitleProps {
  numberOfLines?: number; // 标题最大行数，默认为 1
  line?: boolean; // 是否显示标题下方的线，默认为 true
  children?: ReactNode; // 子元素
}

export const Card: React.FC<CardProps> & {
  Title: React.FC<TitleProps>;
};

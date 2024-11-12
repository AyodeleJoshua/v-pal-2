import { ReactNode } from 'react';

export interface TextProps {
  children: ReactNode;
  weight?: 'bold' | 'normal';
  size?: 'small' | 'medium' | 'big';
}

export interface TitleProps {
  level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  className?: string;
  children: ReactNode;
}

import type { HTMLAttributes, ReactNode } from 'react'
import styles from './Container.module.scss'

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export const Container = ({ children, className = '', ...props }: ContainerProps) => (
  <div className={`${styles.container} ${className}`} {...props}>
    {children}
  </div>
)

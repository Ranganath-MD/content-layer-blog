import React from 'react'
import { useMDXComponent } from "next-contentlayer/hooks"
export const MDXComp = ({ code }: any) => {
  const Component = useMDXComponent(code)
  return (
    <Component />
  )
}

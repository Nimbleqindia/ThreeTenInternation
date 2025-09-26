import * as React from "react"

const TooltipProvider = ({ children, ...props }) => {
  return <div {...props}>{children}</div>
}

const Tooltip = ({ children }) => {
  return <>{children}</>
}

export { Tooltip, TooltipProvider }
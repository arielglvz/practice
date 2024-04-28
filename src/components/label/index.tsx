import React from "react"

interface labelProps {
  label: string
  CSSprops?: React.CSSProperties
}

const Label: React.FC<labelProps> = ({ label = "Label Here", CSSprops }) => {
  return <p style={{ ...CSSprops }}>{label}</p>
}

export default Label

import React from "react"

interface NavIconProps {
  icon?: any
  label: string
  position?: string
}

const NavIcon: React.FC<NavIconProps> = ({ icon, label = "label here" }) => {
  return (
    <div className="navicon">
      {icon}
      <p>{label}</p>
    </div>
  )
}

export default NavIcon

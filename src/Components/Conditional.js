import React, { useState } from 'react'

const Conditional = () => {
  // const [isAuthenticated,setIsAuthenticated] = useState(true);
  const isAuthenticated = true;
  // const user = "Admin";
  return (
    <div>
      {isAuthenticated && <>
        
      </>}
    </div>
  )
}

export default Conditional

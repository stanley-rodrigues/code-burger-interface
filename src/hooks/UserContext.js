import PropTypes from 'prop-types'
import React, { createContext, useContext } from 'react'
const UserContext = createContext({})

export const UserProvider = ({ children }) => {
  const user = { name: 'stanley', age: 18 }
  const outroUSer = { name: 'joao', age: 181 }
  return (
    <UserContext.Provider value={{ user, outroUSer }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => {
  const context = useContext(UserContext)
  if (context) {
    throw new Error('useUser must be used whith UserContext ')
  }
}

UserProvider.propTypes = {
  children: PropTypes.node
}

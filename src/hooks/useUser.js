import UserContext from 'context/UserContext'
import { useContext, useEffect } from 'react'
import getUser from 'services/getUser'

const useUser = () => {
  const { user, setUser } = useContext(UserContext)

  useEffect(() => {
    getUser().then((user) => {
      setUser(user)
    })
  }, [setUser])
  console.log(user)

  return { user, setUser }
}

export default useUser

import { useEffect, useState } from 'react'
import getHistory from 'services/getHistory'

const useHistory = () => {
  const [history, setHistory] = useState([])

  useEffect(() => {
    getHistory().then((history) => {
      setHistory(history)
    })
  }, [setHistory])

  return { history }
}

export default useHistory

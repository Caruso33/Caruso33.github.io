import { useEffect } from "react"

const useRefEffect = ({ effect, ref = {} }) => {
  useEffect(() => {
    effect && effect(ref.current)
  }, [effect, ref])
}

export default useRefEffect

import useExample from "./useExample"

const UseExample = () => {
  const { mutate, data, isError, isIdle, isSuccess, isPending, isPaused } = useExample({
    onSuccess: (data) => {
      console.log(data)
    },
    onError: (error) => {
      console.error(error)
    }
  });
  
  return (
    <div>UseExample</div>
  )
}

export default UseExample
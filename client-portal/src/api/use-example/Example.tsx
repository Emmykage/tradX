import { Button } from "antd";
import useExample from "./useExample";

const UseExample = () => {
  const { mutate, data, isError, isIdle, isSuccess, isPending, isPaused } =
    useExample({
      onSuccess: (data) => {
        console.log(data);
      },
      onError: (error) => {
        console.error(error);
      },
    });

  const buttonHandler = () => {
    // Calling the mutation with passing the data to fetcher here
    mutate({ id: "1" });
  };

  return (
    <div>
      <Button onClick={buttonHandler}>Handle the data</Button>
      UseExample
    </div>
  );
};

export default UseExample;

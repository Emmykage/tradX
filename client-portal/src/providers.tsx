import { Provider as ReduxProvider } from "react-redux";
import store from "./store";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const Providers = ({ children }: { children: JSX.Element }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ReduxProvider store={store}>{children}</ReduxProvider>
    </QueryClientProvider>
  );
};

export default Providers;

import { Provider } from "react-redux";
import Body from "./components/Body";
import appStore from "./utils/appStore";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ContextProvider } from "./utils/context/context";
const App = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={appStore}>
        <ContextProvider>
          <div>
            <Body />
          </div>
        </ContextProvider>
      </Provider>
    </QueryClientProvider>
  );
};

export default App;

import { Provider } from "react-redux";
import Body from "./components/Body";
import appStore from "./utils/appStore";
import { QueryClient, QueryClientProvider, } from "@tanstack/react-query";
const App = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={appStore}>
        <div>
          <Body />
        </div>
      </Provider>
    </QueryClientProvider>
  );
};

export default App;

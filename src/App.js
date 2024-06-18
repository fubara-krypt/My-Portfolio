import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import '../src/fonts/satoshi/Fonts/WEB/css/satoshi.css';
import '../src/fonts/tangosans/tangosans.css';
import Home from "./components/sections/home";

function App() {
  return (
    <ChakraProvider>
      <Home />
    </ChakraProvider>
  );
}

export default App;

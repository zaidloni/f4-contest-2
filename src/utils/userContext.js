import { createContext } from "react";

const userContext = createContext({
  g: "",
  setG: () => {},
});
export default userContext;

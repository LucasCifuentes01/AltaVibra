import { PropsWithChildren, createContext } from "react";

import { BreakPoints } from "@/models/breakpoints";

export interface IServerSideContextProps {
  userAgent: string;
  breakpoints: BreakPoints;
}

const ServerSideContext = createContext<IServerSideContextProps | null>(null);

const ServerSideContextProvider = ({
  children,
  ...props
}: IServerSideContextProps & PropsWithChildren) => {
  return (
    <ServerSideContext.Provider value={props}>
      {children}
    </ServerSideContext.Provider>
  );
};

export default {
  Context: ServerSideContext,
  Consumer: ServerSideContext.Consumer,
  Provider: ServerSideContextProvider,
};

import { FC } from "react";
// import { ErrorBoundary } from "react-error-boundary";
// import { Fallback } from "shared/ui/fallback";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { api } from "@/shared/api/api";

interface IProviders {
  readonly children: JSX.Element;
}

export const Providers: FC<IProviders> = ({ children }) => {
  return (
    // <ErrorBoundary FallbackComponent={Fallback}>
    <ApiProvider api={api}>{children}</ApiProvider>
    // </ErrorBoundary>
  );
};

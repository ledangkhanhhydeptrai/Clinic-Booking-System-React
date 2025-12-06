import { QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { queryClient } from "../queries/queryClient";
interface ProviderProps {
  children: React.ReactNode;
}
const QueryProvider: React.FC<ProviderProps> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
};

export default QueryProvider;

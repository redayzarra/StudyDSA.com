"use client";

import { QueryClient, QueryClientProvider as ReactQueryProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const QueryClientProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ReactQueryProvider client={queryClient}>
      {children}
    </ReactQueryProvider>
  )
};

export default QueryClientProvider;

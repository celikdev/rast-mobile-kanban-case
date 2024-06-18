"use client";

import { QueryClient, QueryClientProvider as QCP } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export const QueryClientProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <QCP client={queryClient}>{children}</QCP>;
};

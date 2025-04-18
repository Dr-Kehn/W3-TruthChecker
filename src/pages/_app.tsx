import "./globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import type { AppProps } from "next/app";
//@ts-ignore
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { ToastContainer, toast } from 'react-toastify';

import { config } from "../wagmi";

const client = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={client}>
        <RainbowKitProvider>
          {/* <ConnectWallet /> */}
          <ToastContainer />
          <Component {...pageProps} />
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default MyApp;

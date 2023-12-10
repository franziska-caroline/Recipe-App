import { SWRConfig } from "swr";
import GlobalStyle from "../styles";
import fetcher from "@/lib/fetcher";
import Layout from "@/components/Layout";

export default function App({ Component, pageProps }) {
  return (
    <>
      <SWRConfig value={{ fetcher }}>
        <Layout>
          <GlobalStyle />
          <Component {...pageProps} />
        </Layout>
      </SWRConfig>
    </>
  );
}

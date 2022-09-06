import '../styles/globals.css'
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import type { AppProps } from 'next/app'
import Head from "next/head"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="content">
      <Head>
        <title>プリコネラジオファン</title>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>
      <Component {...pageProps} />
      <footer className="bg-secondary bg-opacity-25 text-center pt-3 pb-3">
        <a href="https://twitter.com/@JADENgygo" className="me-3 link link-dark">
          <i className="bi bi-twitter"></i>
        </a>
        <a href="https://priconne-portfolio.vercel.app" className="link link-dark">
          プリコネツール
        </a>
      </footer>
    </div>
  )
}

export default MyApp

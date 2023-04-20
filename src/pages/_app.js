import '@/styles/globals.css'
import { MDXProvider } from '@mdx-js/react'

const components = {
  h1: (props) => <h1 {...props} className="text-2xl font-bold" />
}

export default function App({ Component, pageProps }) {
  return (
    <MDXProvider components={components}>
      <Component {...pageProps} />
    </MDXProvider>
  )
}

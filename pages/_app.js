import { Server, Response } from "miragejs"

if (typeof window !== 'undefined' && window.Cypress) {
  new Server({
    environment: "test",
    routes() {
      let methods = ["get", "put", "patch", "post", "delete"]
      methods.forEach((method) => {
        // @ts-ignore
        this[method]("/*", async (_, request) => {
          // @ts-ignore
          let [status, headers, body] = await window.handleFromCypress(request)
          return new Response(status, headers, body)
        })
      })
    },
  })
}

function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default App;

import { Server, Model } from 'miragejs';

export function makeServer({ environment = 'development' }) {
  let server = new Server({
    environment,

    models: {
      wine: Model
    },

    seeds(server) {
      server.create("wine", { name: "Pomares", year: 2018, id: 'pomares-2018' })
      server.create("wine", { name: "Grainha", year: 2017, id: 'grainha-2017' })
    },

    routes() {
      this.passthrough();
      this.namespace = ""

      this.get("/wines", (schema) => {
        return schema.wines.all()
      })
    },
  })

  return server
}

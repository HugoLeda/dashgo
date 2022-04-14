import { createServer, Factory, Model } from 'miragejs'

type User = {
  name: string;
  email: string;
  created_at: string
}

export function makeServer() {
  const server = createServer({
    models: {
      users: Model.extend<Partial<User>>({})
    },

    factories: {
      user: Factory.extend({
        name(i: number) {
          return `User ${i + 1}` 
        },
        email(i: number) {
          return `${i}@gmail.com`
        },
        created_at() {
          return '12-04-2022'
        }
      })
    },

    seeds(server) {
      server.createList('user', 25)
    },

    routes() {
      this.namespace = 'mirage';
      this.timing = 750;

      this.get('/users');
      this.post('/users');

      this.passthrough()
    }
  })

  return server
}
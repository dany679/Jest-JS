// src/mocks/handlers.js
import { rest } from 'msw'

export const handlers = [
  rest.get('https://randomuser.me/api/', (req, res, ctx) => {
    return res(
      // Respond with a 200 status code
      ctx.status(200),
      ctx.json({
          results: [
              {
                  name: {
                      first: "Silva",
                      last: "Danie "
                  },
                  picture: {
                      large: "https://randomuser.me/api/portraits/men/59.jpg"
                  },
                  login: {
                      username: "ThePhonyGOAT"
                  }
              }
          ]
      
      })
    )
  }),
]
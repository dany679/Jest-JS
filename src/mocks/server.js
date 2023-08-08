// src/mocks/server.js
import { setupServer } from 'msw/node'
import { handlers } from './handlers'

// This configures a request mocking server with the given request handlers.
export const server = setupServer(...handlers)
beforeAll(() => server.listen(

    console.log('server listening')
))

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers(
    console.log('server listening')

))

// Clean up after the tests are finished.
afterAll(() => server.close())
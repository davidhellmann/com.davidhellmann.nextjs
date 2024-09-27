import { registerApolloClient } from '@apollo/experimental-nextjs-app-support/rsc'
import { ApolloClient, InMemoryCache } from '@apollo/client'

export const { getClient } = registerApolloClient(() => {
    return new ApolloClient({
        uri: process.env.GQL_API_URL,
        cache: new InMemoryCache(),
    })
})

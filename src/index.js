import React from 'react'
import { render } from 'react-dom'
import { QueryClient, QueryClientProvider } from 'react-query'

import App from './App'

const queryClient = new QueryClient()

render(
	<QueryClientProvider client={queryClient}>
		<App />
	</QueryClientProvider>,
	document.getElementById('root')
)

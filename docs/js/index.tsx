import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Content from './content'

const root = document.getElementById('root')
if (root) {
	createRoot(root).render(
		<StrictMode>
			<Content />
		</StrictMode>,
	)
}

// Use an empty export to please Babel's single file emit.
// https://github.com/Microsoft/TypeScript/issues/15230
export {}

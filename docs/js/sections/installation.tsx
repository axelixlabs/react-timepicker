import Link from '../components/link'
import Text from '../components/text'
import Code, { SYNTAX } from '../components/code'
import ForkNotice from '../components/fork-notice'
import { ORIGINAL_REPO, PACKAGE_NAME } from '../constants'

export default function Intro() {
	return (
		<section className="installation docs-section" id="docs">
			<h2>Installation and Usage</h2>

			<ForkNotice />

			<Text>
				Install <Code inline>{PACKAGE_NAME}</Code> via npm. This fork requires{' '}
				<Link href="https://react.dev/">React 19</Link> or newer.
			</Text>
			<Code>npm install --save {PACKAGE_NAME}</Code>

			<Text>
				The package keeps the same API as the original{' '}
				<Link href={ORIGINAL_REPO}>react-timekeeper</Link>. If you need support
				for older React versions, use the original project instead.
			</Text>

			<Text>
				Usage is simple: just import the library javascript and use it in the
				render function. No external css imports are required since all styles are
				inlined using{' '}
				<Link href="https://github.com/emotion-js/emotion">emotion</Link>.
			</Text>

			<Code type={SYNTAX.js}>
				{`import React from 'react';
import TimeKeeper from '${PACKAGE_NAME}';

function MyComponent {
	return (
		<div>
			<TimeKeeper />;
		</div>	
	)
}`}
			</Code>
		</section>
	)
}

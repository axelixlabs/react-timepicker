import Link from './link'
import { FORK_REPO, ORIGINAL_REPO } from '../constants'

export default function ForkNotice() {
	return (
		<p className="fork-notice">
			This is a fork of the original{' '}
			<Link href={ORIGINAL_REPO}>react-timekeeper</Link> project. The goal of this
			fork is to provide an API-compatible drop-in for newer versions of React.
			Source: <Link href={FORK_REPO}>axelixlabs/react-timepicker</Link>.
		</p>
	)
}

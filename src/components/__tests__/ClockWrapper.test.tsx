import { RenderResult, waitFor } from '@testing-library/react'
import { renderTK, mockAnimations, clickOnPoint } from './helpers/dom'
import {
	HOUR_12_INNER,
	HOUR_24_OUTER,
	HOUR_3_OUTER,
	HOUR_3_INNER,
	Coords,
} from './helpers/coords'
import { getClockHandLength, MODE } from '../../helpers/constants'
import { Globals } from '@react-spring/core'

jest.mock('lodash.debounce', () => ({
	__esModule: true,
	default: (fn: any) => fn,
}))

Globals.assign({
	skipAnimation: true,
})

async function testHandLength(coords: Coords, expectedHandLength: number) {
	const { wrapper } = renderTK({
		time: { hour: 5, minute: 20 },
		hour24Mode: true,
	})
	clickOnPoint(wrapper, coords)

	await waitFor(() => {
		expect(getRenderedClockHandLength(wrapper)).toEqual(expectedHandLength)
	})
}

function getRenderedClockHandLength(wrapper: RenderResult) {
	const { getByTestId } = wrapper
	const ch = getByTestId('clock-hand')
	return parseInt(ch.getAttribute('y2') as string, 10)
}

describe('ClockWrapper', () => {
	beforeEach(() => {
		mockAnimations()
	})

	describe('handles correct clock hand length during 24h mode', () => {
		it('handles inner 3', async () => {
			const expectedLength = getClockHandLength(MODE.HOURS_24, true)
			await testHandLength(HOUR_3_INNER, expectedLength)
		})

		it('handles outer 3', async () => {
			const expectedLength = getClockHandLength(MODE.HOURS_24, false)
			await testHandLength(HOUR_3_OUTER, expectedLength)
		})

		it('handles inner 24', async () => {
			const expectedLength = getClockHandLength(MODE.HOURS_24, true)
			await testHandLength(HOUR_12_INNER, expectedLength)
		})

		it('handles outer 24', async () => {
			const expectedLength = getClockHandLength(MODE.HOURS_24, false)
			await testHandLength(HOUR_24_OUTER, expectedLength)
		})
	})
})

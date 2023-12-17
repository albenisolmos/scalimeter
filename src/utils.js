import { units } from './consts.js'

export function calcScaledDist(realDist, scaledFactor, realFactor, realDistUnit, scaledDistUnit) {
    let dist = realDist * scaledFactor / realFactor
	dist = convertUnit(dist, realDistUnit, scaledDistUnit)
	return dist
}

export function calcRealDist(realDist, scaledFactor, realFactor, realDistUnit, scaledDistUnit) {
    let dist = realDist * realFactor / scaledFactor
	dist = convertUnit(dist, realDistUnit, scaledDistUnit)
	return dist
}

export function convertUnit(value, unit, unitTarget) {
	const entries = Object.entries(units)
	const unitValue = entries[unit][1]
	const unitTargetValue = entries[unitTarget][1]
	const steps = unitValue - (unitTargetValue)
	const factor = (10 ** Math.abs(steps))

	if (steps < 0) {
		return value * factor
	}

	return value / factor
}

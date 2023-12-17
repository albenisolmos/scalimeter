import { writable, get } from 'svelte/store';
import { calcScaledDist, calcRealDist } from './utils.js'
import { units } from './consts.js'

let isFreezeRealDist = false;
let isFreezeScaledDist = false;

function createNumberStore(initialValue) {
    const store = writable(initialValue)
    const old_set = store.set

    store.set = (value) => {
		// FIX: stores should only set numbers
		if (typeof(value) != 'number') {
			console.error('Store received something other than number, this is a bug')
		}
        old_set(Number(value))
    }

    return store
}

export const scaledFactor = createNumberStore(1)
export const realFactor = createNumberStore(100)
export const realDist = createNumberStore()
export const scaledDist = createNumberStore()
export const scaledDistUnit = writable(units.CM)
export const realDistUnit = writable(units.M)

function updateScaledDist() {
    if (isFreezeRealDist) {
        isFreezeRealDist = false
        return
    }

    const dist = calcScaledDist(
		get(realDist), get(scaledFactor), get(realFactor),
		get(realDistUnit), get(scaledDistUnit)
	)
	
    isFreezeScaledDist = true
    scaledDist.set(dist)
}

function updateRealDist() {
    if (isFreezeScaledDist) {
        isFreezeScaledDist = false
        return
    }

    const dist = calcRealDist(
		get(realDist), get(scaledFactor), get(realFactor),
		get(realDistUnit), get(scaledDistUnit)
	)

    isFreezeRealDist = true
    realDist.set(dist)
}

realDistUnit.subscribe(updateScaledDist)
scaledDistUnit.subscribe(updateScaledDist)
realFactor.subscribe(updateScaledDist)
scaledFactor.subscribe(updateScaledDist)
realDist.subscribe(updateScaledDist)
scaledDist.subscribe(updateRealDist)

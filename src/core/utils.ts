const humanReadablePrice = () => (value: number) =>`$${parseFloat(String(value)).toFixed(2)}`

export {
	humanReadablePrice
}


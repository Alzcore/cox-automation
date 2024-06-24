const lamborghiniModels = [
	'Aventador',
	'Centenario',
	'Countach',
	'Diablo',
	'Gallardo',
	'Huracan',
	'Jalpa',
	'LM002',
	'Murcielago',
	'Sian',
	'Urus'
] as const

export type LamborghiniModels = (typeof lamborghiniModels)[number]

export const Makes = ['Lamborghini', 'Tesla']

export interface MakesAndModels {
	lamborghini: Record<LamborghiniModels, string>
}

export const makesAndModels: MakesAndModels = {
	lamborghini: {
		Aventador: 'Aventador',
		Centenario: 'Centenario',
		Countach: 'Countach',
		Diablo: 'Diablo',
		Gallardo: 'Gallardo',
		Huracan: 'Huracan',
		Jalpa: 'Jalpa',
		LM002: 'LM002',
		Murcielago: 'Murcielago',
		Sian: 'Sian',
		Urus: 'Urus'
	}
}

export function createModelMakeMap(): Map<string, string> {
	const modelMakeMap = new Map<string, string>()

	const makes = Object.keys(makesAndModels)
	for (const make of makes) {
		const makeModels = makesAndModels[make]
		for (const model of Object.keys(makeModels)) {
			console.log(model, make)
			modelMakeMap.set(model, make.charAt(0).toUpperCase() + make.slice(1))
		}
	}

	return modelMakeMap
}

export const modelMakeMap = createModelMakeMap()

export type Constants = {
	makesAndModels: MakesAndModels
}

export const constants: Constants = {
	makesAndModels: makesAndModels
}

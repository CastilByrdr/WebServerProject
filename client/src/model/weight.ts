import weight from '@/data/weight.json';

export interface Weight {
	weight: number;
	date: number;
}

export function getWeight(): Weight[] {
    return weight.items;
}

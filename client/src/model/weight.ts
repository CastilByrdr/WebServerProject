/* B"H
*/

import { api } from "../viewModel/session"


export interface Weight {
	weight: number;
	date: number;
}

export async function getWeight(){
    const data = await api<Weight[]>("weight");
        return data ? data.data : [];
}

/* B"H
*/
const fs = require('fs/promises');
const COLLECTION_NAME = 'Weight';

async function collection(){
    const db = await connect();
    return db.collection(COLLECTION_NAME);
}

const fileName = __dirname + '/../data/weight.json';

/** @type { Promise< { items: Weight[] } > } */
const dataP = fs
        .access(fileName, fs.constants.F_OK)
        .then(() => fs.readFile(fileName, 'utf8'))
        .then(content => JSON.parse(content))


async function save() {
    const data = await dataP;
    return fs.writeFile(fileName, JSON.stringify(data, null, 2));
}

/**
 * @typedef {import('../../client/src/model/weight').Weight} Weight
 * */

/**
 * @returns {Promise<Weight[]>}
 * */
async function getAll() {
    const coll = await collection();

    return /** @type {any} */ (await coll.find().toArray());
}

/**
 * @param {string} id
 * @returns {Promise<Weight>}
 * */
async function get(id) {
    const coll = await collection();
    
    return /** @type {any} */ (coll.findOne({ _id: new ObjectId(id) }));

}

/**
 * @param {string} q
 * @returns {Promise<Weight[]>}
 * */
async function search(q) {
    const coll = await collection();

    const filter = {
        $or: [
            { brand: { $regex: q, $options: 'i' } },
            { title: { $regex: q, $options: 'i' } },
            { description: { $regex: q, $options: 'i' } }
        ]
    };

    const cursor = coll.find(filter);
    return /** @type {any} */ (cursor.toArray());
}

/**
 * @param {Weight} weight
 * @returns {Promise<Weight>}
 * */
async function add(weight) {
    const data = await dataP;
    weight.id = data.items.length + 1;
    data.items.push(weight);
    console.log("2: About to save");
    
    await save()        
    console.log("3: Saved")

    console.log("4: About to return user");
    return weight;
}

/**
 * @param {Weight} weight
 * @returns {Promise<Weight>}
 * */
async function update(weight) {
    const data = await dataP;
    const index = data.items.findIndex(item => item.id == weight.id);
    if (index >= 0) {
        data.items[index] = {
            ...data.items[index],
            ...weight
        };
        await save()
        return weight;
    }
    return null;
}

/**
 * @param {number} id
 * @returns {Promise<Weight | null>}
 * */
async function remove(id) {
    const data = await dataP;
    const index = data.items.findIndex(item => item.id == id);
    if (index >= 0) {
        const deleted = data.items.splice(index, 1);
        await save()
        return deleted[0];
    }
    return null;
}

module.exports = {
    getAll, get, search, add, update, remove
}
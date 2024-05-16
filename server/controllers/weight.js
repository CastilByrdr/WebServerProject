/* B"H
*/
const model = require('../models/weight')
const express = require('express');
const app = express.Router();

/** 
 * @typedef {import('../../client/src/model/weight').Weight} Weight
 * @typedef {import('../../client/src/model/transportTypes').DataEnvelope<Weight> } WeightDataEnvelope
 * @typedef {import('../../client/src/model/transportTypes').DataListEnvelope<Weight> } WeightDataListEnvelope
 * */

app
    .get('/', (req, res, next) => {
        model.getAll()
        .then(all => {
            /** @type { WeightDataListEnvelope } */
            const response = {
                data: all,
                totalCount: all.length,
                isSuccess: true,
            }
            res.send(response);
        }).catch(next);
        
    })
    .get('/search', (req, res, next) => {

        const search = req.query.q;
        if(typeof search !== 'string' ) throw new Error('search is required');
        model.search(search)
        .then(result => {
            /** @type { WeightDataListEnvelope } */
            const response = {
                data: result,
                totalCount: result.length,
                isSuccess: true,
            }
            res.send(response);
        }).catch(next);
    })
    .get('/:id', (req, res, next) => {
        const id = req.params.id;
        model.get(id)
        .then(result => {
            /** @type { WeightDataEnvelope } */
            const response = {
                data: result,
                isSuccess: true,
            }
            res.send(response);
        }).catch(next);
    })
    .post('/', (req, res, next) => {
        const weight = req.body;

        model.add(weight)
        .then(result => {
            /** @type { WeightDataEnvelope } */
            const response = {
                data: result,
                isSuccess: true,
            }
            res.send(response);
        }).catch(next);
    })
    .patch('/:id', (req, res, next) => {
        const weight = req.body;
        weight.id = req.params.id;
        model.update(weight)
        .then(result => {
            /** @type { WeightDataEnvelope } */
            const response = {
                data: result,
                isSuccess: true,
            }

            res.send(response);
        }).catch(next);
    })
    .delete('/:id', (req, res, next) => {
        const id = req.params.id;
        model.remove(+id)
        .then(result => {
            /** @type { WeightDataEnvelope } */
            const response = {
                data: result,
                isSuccess: true,
            }
            res.send(response);
        }).catch(next);
    })




module.exports = app
const { Router } = require('express');
const { filter } = require('underscore');
const router = new Router();
const _ = require('underscore');
const { read, write } = require('./../files/fs')

const bays = require('../sample.json');


router.get('/', (req, res) => {
    res.json(bays);
});



router.post('/', (req, res) => {
    const id = bays.length + 1;
    const { w, x, y, detectedClass } = req.body;
    const newBays = { ...req.body, id };
    if (id && w && x && y && detectedClass) {
        bays.push(newBays);
        res.json(bays);
    } else {
        res.status(500).json({error: 'There was an error.'});
    }
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    res.json(bays.filter(item=>{
        return item.id === id
    })[0])
});

router.delete('/:id', (req, res) => {
    const {id} = req.params;
    if (id) {
        _.each(bays, (movie, i) => {
            if (movie.id == id) {
                bays.splice(i, 1);
            }
        });
        res.json(bays);
    }
});

module.exports = router;
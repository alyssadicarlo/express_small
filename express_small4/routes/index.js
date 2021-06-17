const express = require('express');
const router = express.Router();

router.get('/', (request, response) => {
    response.render('template', {
        locals: {
            title: 'Hello from the root!',
        },
        partials: {
            partial: 'partial-index',
        }
    });
});

module.exports = router;
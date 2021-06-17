const express = require('express');
const router = express.Router();

router.get('/:name?', (request, response) => {
    let name = request.params.name;
    response.render('template', {
        locals: {
            title: `Hello, ${name}`,
        },
        partials: {
            partial: "partial-greet"
        }
    });
});

module.exports = router;
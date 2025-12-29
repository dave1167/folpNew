// TEMPORARY TEST ROUTE - REMOVE THIS FILE AFTER TESTING
// This file registers a simple Express GET route for testing purposes.
// Delete this file once you've verified the route is working.

module.exports = {
    handler: function (app) {
        // Main test route
        app.get('/settings/template_list_all', function (req, res) {
            res.status(200).send('<h1>Test route: template_list_all OK</h1>');
        });

        // Alias routes mapped to the same response
        app.get('/settings/templates', function (req, res) {
            res.status(200).send('<h1>Test route: template_list_all OK</h1>');
        });

        app.get('/settings/templates_all', function (req, res) {
            res.status(200).send('<h1>Test route: template_list_all OK</h1>');
        });
    }
};

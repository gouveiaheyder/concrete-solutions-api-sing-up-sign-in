module.exports = app => {
    let userController = app.controllers.UserController;

    app.routerExpress
        /**
         * @api {get} /user/:id Request User information
         * @apiName GetUser
         * @apiGroup User
         *
         * @apiParam {Number} id Users unique ID.
         *
         * @apiSuccess {String} firstname Firstname of the User.
         * @apiSuccess {String} lastname  Lastname of the User.
         */
        .post('/sign-in', userController.login)

        /**
         * @api {get} /user/:id Request User information
         * @apiName GetUser
         * @apiGroup User
         *
         * @apiParam {Number} id Users unique ID.
         *
         * @apiSuccess {String} firstname Firstname of the User.
         * @apiSuccess {String} lastname  Lastname of the User.
         */

        .post('/user', userController.createUser)

        /**
         * @api {get} /user/:id Request User information
         * @apiName GetUser
         * @apiGroup User
         *
         * @apiParam {Number} id Users unique ID.
         *
         * @apiSuccess {String} firstname Firstname of the User.
         * @apiSuccess {String} lastname  Lastname of the User.
         */
        .get('/user', userController.findUser)
        /**
         * @api {get} /user/:id Request User information
         * @apiName GetUser
         * @apiGroup User
         *
         * @apiParam {Number} id Users unique ID.
         *
         * @apiSuccess {String} firstname Firstname of the User.
         * @apiSuccess {String} lastname  Lastname of the User.
         */
        .get('/user/:_id', userController.findUserId);
};
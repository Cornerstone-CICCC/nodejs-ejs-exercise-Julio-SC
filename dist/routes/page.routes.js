"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pageRouter = (0, express_1.Router)();
// Home page
pageRouter.get('/', (req, res) => {
    res.status(200).render('home');
});
// About page
pageRouter.get('/about-us', (req, res) => {
    res.status(200).render('about');
});
// Contact page
pageRouter.get('/contact-us', (req, res) => {
    res.status(200).render('contact');
});
exports.default = pageRouter;

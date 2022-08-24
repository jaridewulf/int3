'use strict';

/**
 * main-use router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::main-use.main-use');

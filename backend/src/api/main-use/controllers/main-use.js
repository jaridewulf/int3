'use strict';

/**
 * main-use controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::main-use.main-use');

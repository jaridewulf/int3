'use strict';

/**
 * main-use service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::main-use.main-use');

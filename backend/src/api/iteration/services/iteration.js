'use strict';

/**
 * iteration service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::iteration.iteration');

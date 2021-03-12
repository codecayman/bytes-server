'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {

  async create(ctx) {
    let subscriber = await strapi.services.subscriber.findOne({ email: ctx.request.body.email });

    if (subscriber) {
      ctx.throw(400, 'Subscriber with this email already exists');
    } else {
      subscriber = await strapi.services.subscriber.create(ctx.request.body);
      ctx.send(subscriber);
    }
  }
};

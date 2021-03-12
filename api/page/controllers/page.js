'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

function mapPage(page) {
  return {
    name: page.name,
    key: page.key,
    path: page.path,
    texts: page.texts.reduce((texts, text) => {
      texts[text.key] = text.value;
      return texts;
    }, {}),
    media: page.media.reduce((media, mediaItem) => {
      media[mediaItem.key] = mediaItem.value.map((item) => {
        return {
          name: item.mime,
          mime: item.mime,
          url: item.url,
        };
      });
      return media;
    }, {})
  };
}

module.exports = {

  // GET /pages/:name
  async findByKey(ctx) {
    const page = await strapi.services.page.findOne({ key: ctx.params.key });

    if (!page) {
      ctx.throw(404);
    } else {
      ctx.send(mapPage(page));
    }
  },

  // GET /pages/:name
  async find(ctx) {
    const pages = await strapi.services.page.find();

    if (!pages) {
      ctx.throw(404);
    } else {
      ctx.send(pages.map(mapPage));
    }
  },
};

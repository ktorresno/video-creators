'use strict';

/** @type {import('sequelize-cli')} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.bulkInsert('Videos', [{
      title: 'Test video title 1',
      description: 'Test video title 1 description',
      url: 'https://www.tiktok.com/@misodope/video/718826992223',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Test video title 2',
      description: 'Test video title 2 description',
      url: 'https://www.tiktok.com/@lalalee/video/45826993434',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Test video title 3',
      description: 'Test video title 3 description',
      url: 'https://www.tiktok.com/@thujie/video/34718826877',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Test video title 4',
      description: 'Test video title 4 description',
      url: 'https://www.tiktok.com/@4thujie/video/831860900',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Commands to revert seed here.
     */
    await queryInterface.bulkDelete('Videos', null, {});
  }
};

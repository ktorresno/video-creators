'use strict';

/** @type {import('sequelize-cli').Migration} 
import sequelizeConnection from '../config';*/
module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.bulkInsert('Users', [{
         name: 'July Doe',
         password: '12345',
         email: 'test.admin@gmail.com',
         creatorType: 2,
         photoUrl: 'https://www.pinterest.com/pin/1122170432127908789/',
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
        name: 'Sartf Tall',
        password: '12345',
        email: 'saratall@gmail.com',
        creatorType: 1,
        photoUrl: 'https://www.pinterest.com/pin/258253359865685038/',
        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});   
  }
};

module.exposts = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Ilustrations',
    [{
      name: 'unsettling',
      site: 'https://formfunction.imgix.net/nft-images/p8Z4kZJrbiYAwpxIWUz56.png?q=100&auto=format&ixlib=react-9.3.0&w=2257',
      description: `Canvas: 795x795 pixels
      Colors: #121216, #e8e6e1, #667eea, #faf089
      Type: Ordered Dithering`,
      collection: 'darkshit',
    },
    {
      name: 'mask on',
      site: 'https://formfunction.xyz/@tevo/E8U2rHsBjNByroGBKFL9g35aFjSSHEaHEWLUfjU8ue5v?width=795&height=795',
      description: `Canvas: 795x795 pixels
      Colors: #121216, #e8e6e1, #667eea, #faf089
      Type: Ordered Dithering`,
      collection: 'darkshit',
    },    
    {
      name: 'restlessness',
      site: 'https://formfunction.xyz/@tevo/CmizdnJLrESmPu1FXi5nPoRo3T8g7aFwxLEfn7nDwtyr?width=795&height=795',
      description: `Canvas: 795x795 pixels
      Colors: #121216, #e8e6e1
      Type: Ordered Dithering`,
      collection: 'darkshit',
    },
    {
      name: 'piety',
      site: 'https://formfunction.xyz/@rektadult/HVjmntjp78fYfD1S9B12YaXodTqmtTe63QpaSy9qB99h?width=1590&height=4470',
      description: `Canvas: 1590x4470 pixels
      Colors: #121216, #e8e6e1, #b794f4, #faf089, #9f7aea, #81e6d9, #553c9a
      Type: Ordered Dithering`,
      collection: 'darkshit',
    },
    {
      name: 'council supper',
      site: 'https://formfunction.xyz/@soupsovereign/4CRce9B2g7msWXyvodR5CfXnjKrPGHLEAfcBEHo1UuxK?width=1590&height=1590',
      description: `Canvas: 1590x1590 pixels
      Colors: #121216, #e8e6e1, #9f7aea, #90cdf4, #c6f6d5, #fbb6ce, #44337a, #fefcbf
      Type: Ordered Dithering`,
      collection: 'darkshit',
    },
    {
      name: 'devour me',
      site: 'https://formfunction.xyz/@tevo/6dGJXG2VnSD52A81CEuyXCm9gUkTs5xNz8QNYFpV6e5n?width=1590&height=2310',
      description: `Canvas: 1590x2310 pixels
      Colors: #121216, #e8e6e1, #805ad5, #a3bffa, #c6f6d5, #f56565, #4c884c
      Type: Ordered Dithering`,
      collection: 'darkshit',
    },
    ], { timestamp: false });
  },
  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Ilustrations', null, {});
  },
};

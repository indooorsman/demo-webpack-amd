define(['jquery'], function($) {
  console.log('c.js loaded');
  $('button').on('click', () => {
    require.ensure([], require => {
      require('./a.js');
    });
  })
});
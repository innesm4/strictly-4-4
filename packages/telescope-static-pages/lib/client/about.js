Meteor.startup(function () {
  Router.map(function() {
    this.route('about', {
      path: '/about',
      template: 'aboutPage'
    });
  });
});

primaryNav.push({
  template: 'aboutLink',
  order: 100
});

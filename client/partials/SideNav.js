Template.SideNav.helpers({
  admin: function() {
    var url = location.href;
    if (url.indexOf('admin') != -1) {
      return true
    } else {
      return false
    }
  }
});

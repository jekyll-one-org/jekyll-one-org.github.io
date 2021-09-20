

$(document).ready(function() {
  var dependencies_met_page_finished = setInterval (function () {
    if (j1.getState() === 'finished') {
      // DON'T EDIT BELOW THIS LINE
      // -----------------------------------------------------------------------
      var site_id = hyvor-site-id;
      (function() {
        var HYVOR_TALK_WEBSITE = site_id;
        var HYVOR_TALK_CONFIG = {
            url: false,
            id: false
        };
      })();
    }
    clearInterval(dependencies_met_page_finished);
  }, 25);
});



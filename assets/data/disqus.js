

$(document).ready(function() {
  var dependencies_met_page_finished = setInterval (function () {
    if (j1.getState() === 'finished') {
      var disqus_shortname = '<your-site-short-name>';
      // -----------------------------------------------------------------
      // RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE
      // SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
      // LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT:
      // https://disqus.com/admin/universalcode/#configuration-variables
      // -----------------------------------------------------------------
      //
      // var disqus_config = function () {
      // this.page.url = PAGE_URL;  // Replace PAGE_URL with your page's canonical URL variable
      // Replace PAGE_IDENTIFIER with your page's unique
      // identifier variable
      // this.page.identifier = PAGE_IDENTIFIER;
      // };
      //
      // DON'T EDIT BELOW THIS LINE
      // -----------------------------------------------------------------
      (function() {
          var d = document,
              s = d.createElement('script');
          s.src = '//' + disqus_shortname + '.disqus.com/embed.js';
          s.setAttribute('data-timestamp', +new Date());
          (d.head || d.body).appendChild(s);
      })();
      clearInterval(dependencies_met_page_finished);
    }
  }, 25);
});



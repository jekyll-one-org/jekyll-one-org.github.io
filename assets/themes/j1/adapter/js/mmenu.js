

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/mmenu.js
 # JS Adapter for J1 MobileMenu (MMenu Light)
 #
 # Product/Info:
 # https://jekyll.one
 #
 # Copyright (C) 2020 Juergen Adams
 #
 # J1 Template is licensed under the MIT License.
 # For details, see https://jekyll.one
 # -----------------------------------------------------------------------------
 # NOTE: For AJAX (XHR) loads see
 #  https://stackoverflow.com/questions/3709597/wait-until-all-jquery-ajax-requests-are-done
 # -----------------------------------------------------------------------------
 # NOTE: For getStyleValue helper see
 #  https://stackoverflow.com/questions/16965515/how-to-get-a-style-attribute-from-a-css-class-by-javascript-jquery
 # -----------------------------------------------------------------------------
 # Adapter generated: 2020-09-28 19:58:45 +0200
 # -----------------------------------------------------------------------------
*/
// -----------------------------------------------------------------------------
// ESLint shimming
// -----------------------------------------------------------------------------
/* eslint indent: "off"                                                       */
// -----------------------------------------------------------------------------
'use strict';
j1.adapter['mmenu'] = (function (j1, window) {
  // ---------------------------------------------------------------------------
  // globals
  // ---------------------------------------------------------------------------
  var environment   = 'development';
  var dclFinished   = false;
  var moduleOptions = {};
  var themerOptions = {};
  var cookie_names  = j1.getCookieNames();
  var user_state;
  var user_session;
  var user_data;
  var _this;
  var logger;
  var logText;
  // ---------------------------------------------------------------------------
  // helper functions
  // ---------------------------------------------------------------------------
  // ---------------------------------------------------------------------------
  // main object
  // ---------------------------------------------------------------------------
  return {
    // -------------------------------------------------------------------------
    // module initializer
    // -------------------------------------------------------------------------
    init: function (options) {
      // -----------------------------------------------------------------------
      // globals
      // -----------------------------------------------------------------------
      _this         = j1.adapter.mmenu;
      logger        = log4javascript.getLogger('j1.adapter.mmenu');
      // initialize state flag
      _this.setState('started');
      logger.info('state: ' + _this.getState());
      logger.info('module is being initialized');
      // -----------------------------------------------------------------------
      // defaults
      // -----------------------------------------------------------------------
      var settings  = $.extend({
        module_name: 'j1.adapter.mmenu',
        generated:   '2020-09-28 19:58:45 +0200'
      }, options);
      // -----------------------------------------------------------------------
      // options loader
      // -----------------------------------------------------------------------
      /* eslint-disable */
      var navMenuOptions = $.extend({}, {"enabled":true, "mmenu_plugin":{"node":"null", "mediaQuery":"all", "max_width":100000}, "mmenu_navigator":{"selected":"Selected", "slidingSubmenus":true, "title":"Navigation", "theme":"dark"}, "mmenu_drawer":{"position":"right"}, "menus":[{"menu":{"enabled":true, "xhr_container_id":"navigator_nav_mmenu", "xhr_data_path":"/assets/data/mmenu/index.html", "drawer":{"position":"right"}, "content":{"id":"menu_mmenu", "type":"navigation", "title":"Navigation", "theme":"dark", "button":"#mmenu-button", "button_activated":"always"}}}, {"menu":{"enabled":true, "xhr_container_id":"navigator_sidebar_mmenu", "xhr_data_path":"/assets/data/mmenu_sidebar/index.html", "drawer":{"position":"left"}, "content":{"id":"sidebar_mmenu", "type":"drawer", "title":"Site Info", "theme":"dark", "button":"#navbar-brand", "button_activated":"always", "boxes":[{"box":{"enabled":true, "type":"user_info", "title":"User", "links":[{"title":"Provider", "value":"??provider", "href":"??provider-site-url", "target":"_blank", "icon":"domain"}, {"title":"User", "icon":"account", "value":"??user-name", "href":"??provider_member_url", "target":"none"}, {"title":"Permissions", "icon":"account-check", "value":"??provider-permissions", "href":"??provider_member_url", "target":"none"}, {"title":"Membership", "icon":"account-settings", "value":"??provider-membership", "href":"??provider_member_url", "target":"none"}, {"title":"Cookies", "icon":"cookie", "value":"??cookie-state", "href":"??provider_privacy_url", "target":"none"}]}}, {"box":{"enabled":true, "type":"theme_info", "title":"Theme", "links":[{"title":"Name", "icon":"face", "value":"??theme-name", "href":"/pages/public/previewer/theme/", "target":"none"}, {"title":"Author", "icon":"grease-pencil", "value":"??theme-author", "href":"??theme-author-url", "target":"_blank"}, {"title":"Version", "icon":"numeric", "value":"??theme-version", "href":"/pages/public/previewer/theme/", "target":"none"}]}}, {"box":{"enabled":true, "type":"site_info", "title":"Site", "links":[{"title":"About", "icon":"home-outline", "href":"/pages/public/about/site/", "target":"none"}, {"title":"Impress", "icon":"alert-outline", "href":"/pages/public/legal/en/impress/", "target":"none"}, {"title":"Privacy", "icon":"heart", "href":"/pages/public/legal/en/privacy/", "target":"none"}, {"title":"License", "icon":"checkbox-multiple-marked-circle-outline", "href":"/pages/public/legal/en/license_agreement/", "target":"none"}]}}]}}}, {"menu":{"enabled":true, "xhr_container_id":"navigator_toc_mmenu", "xhr_data_path":"/assets/data/mmenu_toc/index.html", "drawer":{"position":"right"}, "content":{"id":"toc_mmenu", "type":"drawer", "title":"Table of Contents", "theme":"dark", "button":"#ssm_toc", "button_activated":"js-toc-content"}}}]});
      /* eslint-enable */
      var xhr_data_path;
      var menu_id;
      themerOptions = $.extend({}, {"enabled":true, "saveToCookie":true, "debug":false, "preview_page":"/pages/public/previewer/theme/", "menu_icon_family":"MDI", "menu_icon_color":"#9E9E9E", "menu_icon_size":"mdi-sm", "cssThemeLink":"bootstrapTheme", "defaultCssFile":"https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css", "bootswatchApiUrl":"https://bootswatch.com/api", "bootswatchApiVersion":4, "loadFromBootswatch":true, "localThemes":"/assets/data/themes.json", "excludeBootswatch":"Default, default, Lux, Sketchy", "includeBootswatch":"", "skipIncludeBootswatch":""});
      // save config settings into the mmenu object for global access
      //
      _this['navMenuOptions'] = navMenuOptions;
      // Load (individual) frontmatter options (currently NOT used)
      //
      if (options != null) { var frontmatterOptions = $.extend({}, options); }
      _this.setState('started');
      logger.info('state: ' + _this.getState());
      logger.info('module is being initialized');
      _this.mmenuLoader(navMenuOptions);
    }, // END init
    // -------------------------------------------------------------------------
    // MMenu Loader
    // -------------------------------------------------------------------------
    mmenuLoader: function (mmOptions) {
      var menu_id;
      var xhr_data_path;
      _this.setState('loading');
      logger.info('status: ' + _this.getState());
      logger.info('load HTML data for navs and drawers');
      // -----------------------------------------------------------------------
      // Load HTML data (AJAX)
      // -----------------------------------------------------------------------
      // jadams, 202-06-24: Promise (chain) if $.when seems NOT to work correctly.
      // It semms a chain using .then will be a better solution to make it sure
      // that the last Deferred set the state to 'data_loaded'.
      // Found the final state randomly set to 'null' what prevent the module
      // to run mmenuInitializer.
      // Workaround: Set 'data_loaded' to be returned by all Deferred in
      // the chain.
      // See: https://stackoverflow.com/questions/5436327/jquery-deferreds-and-promises-then-vs-done
      //
      j1.xhrData ({
        xhr_container_id: 'navigator_nav_mmenu',
        xhr_data_path:    '/assets/data/mmenu/index.html'},
        'j1.adapter.mmenu',
        'null');
      j1.xhrData ({
        xhr_container_id: 'navigator_sidebar_mmenu',
        xhr_data_path:    '/assets/data/mmenu_sidebar/index.html'},
        'j1.adapter.mmenu',
        'null');
      j1.xhrData ({
        xhr_container_id: 'navigator_toc_mmenu',
        xhr_data_path:    '/assets/data/mmenu_toc/index.html'},
        'j1.adapter.mmenu',
        'data_loaded');
       // ENDFOR menus
        // ---------------------------------------------------------------------
        // Initialize MMenu Navs and Drawers
        // ---------------------------------------------------------------------
        var dependencies_met_all_menu_loaded = setInterval (function () {
          if (j1.xhrDataState['#navigator_nav_mmenu'] == 'success' && j1.xhrDataState['#navigator_sidebar_mmenu'] == 'success' && j1.xhrDataState['#navigator_toc_mmenu'] == 'success') {
            logger.info('load HTML data (AJAX): finished');
            _this.setState('processing');
            logger.info('status: ' + _this.getState());
            logger.info('initialize navs and drawers');
            _this.mmenuInitializer(mmOptions);
            _this.setState('finished');
            logger.info('state: ' + _this.getState());
            logger.info('module initialized successfully');
            logger.info('met dependencies for: xhrData');
            clearInterval(dependencies_met_all_menu_loaded);
          }
        }, 25); // END dependencies_met_all_menu_loaded
    }, // END dataLoader
    // -------------------------------------------------------------------------
    // MMenu Initializer
    // -------------------------------------------------------------------------
    mmenuInitializer: function (mmOptions) {
      var menu_id;
      var xhr_data_path;
      menu_id           = 'navigator_nav_mmenu';
      xhr_data_path     = '/assets/data/mmenu/index.html';
      // Create an mmenu instance if id exists: navigator_nav_mmenu
      if ($('#navigator_nav_mmenu').length) {
        logger.info('mmenu is being initialized on id: navigator_nav_mmenu');
        // Create an mmenu instance of type NAVIGATION
        logger.info('found content type: NAVIGATION');
        // ---------------------------------------------------------------------
        // menu initializer (NAVIGATION)
        // ---------------------------------------------------------------------
        logger.info('initialize mmenu on id: #navigator_nav_mmenu');
        var dependencies_met_navigator_nav_mmenu_loaded = setInterval (function () {
          if (navigator_nav_mmenu) {
            const menu_selector = document.querySelector('#navigator_nav_mmenu');
            const mmenu_navigator_nav_mmenu = new MmenuLight (
              menu_selector,
              '(max-width: ' + mmOptions.mmenu_plugin.max_width +'px)', {
              // plugin options
              node:             mmOptions.mmenu_plugin.node,
              mediaQuery:       mmOptions.mmenu_plugin.mediaQuery
            });
            const drawer_navigator_nav_mmenu = mmenu_navigator_nav_mmenu.offcanvas ({
              // drawer options
              position: mmOptions.mmenu_drawer.position
            });
            const navigator_navigator_nav_mmenu = mmenu_navigator_nav_mmenu.navigation ({
              // navigator options
              selected:         mmOptions.mmenu_navigator.selected,
              slidingSubmenus:  mmOptions.mmenu_navigator.slidingSubmenus,
              title:            mmOptions.mmenu_navigator.title,
              theme:            mmOptions.mmenu_navigator.theme
            });
            // Toggle Bars (Hamburger) for the NavBar to open|close
            // the mmenu drawer
            $('#mmenu-button').each(function(e) {
              var $this = $(this);
              $this.on('click', function(e){
                const button_navigator_nav_mmenu = this;
                // TODO: Animated toggle button
                //
                // $('').toggleClass('fadeIn');
                // $('').toggleClass('rotateIn')
                // $('.mdi', this).toggleClass('mdi-menu');
                // $('.mdi', this).toggleClass('mdi-close');
                e.preventDefault();
                // (toggler_navigator_nav_mmenu.t = !toggler_navigator_nav_mmenu.t)
                //   ? drawer_navigator_nav_mmenu.open()
                //   : drawer_navigator_nav_mmenu.close();
                drawer_navigator_nav_mmenu.open();
              });
            });
            // remotely loaded (BootSwatch) themes (from API)
            $('#remote_themes_mmenu').bootstrapThemeSwitcher({localFeed: ''});
            // locally loaded themes (from json file)
            $('#local_themes_mmenu').bootstrapThemeSwitcher({localFeed: themerOptions.localThemes});
            logger.info('met dependencies for: navigator_nav_mmenu loaded');
            clearInterval(dependencies_met_navigator_nav_mmenu_loaded);
            $('#menu_mmenu').show();
            logger.info('initializing mmenu finished on id: #navigator_nav_mmenu');
          }; // END mmenu_loaded
        }, 25); // END dependencies_met_mmenu_loaded
         // ENDIF content_type: NAVIGATION
         // ENDIF content_type: DRAWER
        } // END menus|drawers
       // ENDIF menu enabled
      menu_id           = 'navigator_sidebar_mmenu';
      xhr_data_path     = '/assets/data/mmenu_sidebar/index.html';
      // Create an mmenu instance if id exists: navigator_sidebar_mmenu
      if ($('#navigator_sidebar_mmenu').length) {
        logger.info('mmenu is being initialized on id: navigator_sidebar_mmenu');
         // ENDIF content_type: NAVIGATION
          // Create an mmenu instance of type HTML
          logger.info('found content type: DRAWER');
          // -------------------------------------------------------------------
          // menu initializer (DRAWER)
          // -------------------------------------------------------------------
          logger.info('initialize mmenu on id: #navigator_sidebar_mmenu');
          var dependencies_met_navigator_sidebar_mmenu_loaded = setInterval (function () {
            if (navigator_sidebar_mmenu && $('#navbar-brand').length) {
              const menu_selector = document.querySelector('#navigator_sidebar_mmenu');
              const mmenu_navigator_sidebar_mmenu = new MmenuLight (
                menu_selector,
                '(max-width: ' + mmOptions.mmenu_plugin.max_width +'px)', {
                // plugin options
                node:             mmOptions.mmenu_plugin.node,
                mediaQuery:       mmOptions.mmenu_plugin.mediaQuery
              });
              const drawer_navigator_sidebar_mmenu = mmenu_navigator_sidebar_mmenu.offcanvas ({
                // drawer options
                position: 'left'
              });
              // button for the MMenu tocbar to open|close the toc drawer
              $('#navbar-brand').each(function(e) {
                var $this = $(this);
                $this.on('click', function(e) {
                  var button_navigator_sidebar_mmenu = this;
                  var hasClass;
                  // check if the button should be activated
                  // e.g for TOC only if clas js-toc-content is found
                  //
                  if ('always' != 'always') {
                    hasClass = $('main').hasClass('always');
                  } else {
                    hasClass = true;
                  }
                  if (hasClass) {
                    // Toggle button animation
                    //$('').toggleClass('')
                    e.preventDefault();
                    // (toggler_navigator_sidebar_mmenu.t = !toggler_navigator_sidebar_mmenu.t)
                    //   ? drawer_navigator_sidebar_mmenu.open()
                    //   : drawer_navigator_sidebar_mmenu.close();
                    drawer_navigator_sidebar_mmenu.open();
                  } // END if hasclass
                });
              });
              logger.info('met dependencies for: navigator_sidebar_mmenu loaded');
              clearInterval(dependencies_met_navigator_sidebar_mmenu_loaded);
              $('#sidebar_mmenu').show();
          }; // END if menu_loaded
        }, 25); // END dependencies_met_mmenu_loaded
        logger.info('initializing mmenu finished on id: #navigator_sidebar_mmenu');
         // ENDIF content_type: DRAWER
        } // END menus|drawers
       // ENDIF menu enabled
      menu_id           = 'navigator_toc_mmenu';
      xhr_data_path     = '/assets/data/mmenu_toc/index.html';
      // Create an mmenu instance if id exists: navigator_toc_mmenu
      if ($('#navigator_toc_mmenu').length) {
        logger.info('mmenu is being initialized on id: navigator_toc_mmenu');
         // ENDIF content_type: NAVIGATION
          // Create an mmenu instance of type HTML
          logger.info('found content type: DRAWER');
          // -------------------------------------------------------------------
          // menu initializer (DRAWER)
          // -------------------------------------------------------------------
          logger.info('initialize mmenu on id: #navigator_toc_mmenu');
          var dependencies_met_navigator_toc_mmenu_loaded = setInterval (function () {
            if (navigator_toc_mmenu && $('#ssm_toc').length) {
              const menu_selector = document.querySelector('#navigator_toc_mmenu');
              const mmenu_navigator_toc_mmenu = new MmenuLight (
                menu_selector,
                '(max-width: ' + mmOptions.mmenu_plugin.max_width +'px)', {
                // plugin options
                node:             mmOptions.mmenu_plugin.node,
                mediaQuery:       mmOptions.mmenu_plugin.mediaQuery
              });
              const drawer_navigator_toc_mmenu = mmenu_navigator_toc_mmenu.offcanvas ({
                // drawer options
                position: 'right'
              });
              // button for the MMenu tocbar to open|close the toc drawer
              $('#ssm_toc').each(function(e) {
                var $this = $(this);
                $this.on('click', function(e) {
                  var button_navigator_toc_mmenu = this;
                  var hasClass;
                  // check if the button should be activated
                  // e.g for TOC only if clas js-toc-content is found
                  //
                  if ('js-toc-content' != 'always') {
                    hasClass = $('main').hasClass('js-toc-content');
                  } else {
                    hasClass = true;
                  }
                  if (hasClass) {
                    // Toggle button animation
                    //$('').toggleClass('')
                    e.preventDefault();
                    // (toggler_navigator_toc_mmenu.t = !toggler_navigator_toc_mmenu.t)
                    //   ? drawer_navigator_toc_mmenu.open()
                    //   : drawer_navigator_toc_mmenu.close();
                    drawer_navigator_toc_mmenu.open();
                  } // END if hasclass
                });
              });
              logger.info('met dependencies for: navigator_toc_mmenu loaded');
              clearInterval(dependencies_met_navigator_toc_mmenu_loaded);
              $('#toc_mmenu').show();
          }; // END if menu_loaded
        }, 25); // END dependencies_met_mmenu_loaded
        logger.info('initializing mmenu finished on id: #navigator_toc_mmenu');
         // ENDIF content_type: DRAWER
        } // END menus|drawers
       // ENDIF menu enabled
       // ENDFOR menus
    }, // END mmenuInitializer
    // -------------------------------------------------------------------------
    // messageHandler
    // Manage messages (paylods) send from other J1 modules
    // -------------------------------------------------------------------------
    messageHandler: function (sender, message) {
      // var json_message = JSON.stringify(message, undefined, 2);              // multiline
      var json_message = JSON.stringify(message);
      logText = 'received message from ' + sender + ': ' + json_message;
      logger.debug(logText);
      // -----------------------------------------------------------------------
      //  Process commands|actions
      // -----------------------------------------------------------------------
      if (message.type === 'command' && message.action === 'module_initialized') {
        //
        // Place handling of command|action here
        //
        logger.info(message.text);
      }
      if (message.type === 'command' && message.action === 'status') {
        logger.info('messageHandler: received - ' + message.action);
      }
      //
      // Place handling of other command|action here
      //
      return true;
    }, // END messageHandler
    // -------------------------------------------------------------------------
    // setState()
    // Sets the current (processing) state of the module
    // -------------------------------------------------------------------------
    setState: function (stat) {
      _this.state = stat;
    }, // END setState
    // -------------------------------------------------------------------------
    // getState()
    // Returns the current (processing) state of the module
    // -------------------------------------------------------------------------
    getState: function () {
      return _this.state;
    } // END getState
  }; // END return
})(j1, window);




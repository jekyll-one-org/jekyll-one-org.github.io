

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/masonry.js
 # J1 Adapter for the comments module
 #
 # Product/Info:
 # https://jekyll.one
 #
 # Copyright (C) 2023 Juergen Adams
 #
 # J1 Theme is licensed under the MIT License.
 # For details, see: https://github.com/jekyll-one-org/j1-template/blob/main/LICENSE.md
 # -----------------------------------------------------------------------------
 #  Adapter generated: 2023-07-14 14:24:29 +0200
 # -----------------------------------------------------------------------------
*/
// -----------------------------------------------------------------------------
// ESLint shimming
// -----------------------------------------------------------------------------
/* eslint indent: "off"                                                       */
// -----------------------------------------------------------------------------
'use strict';
j1.adapter.masonry = (function (j1, window) {
var environment     = 'development';
var cookie_names    = j1.getCookieNames();
var user_state      = j1.readCookie(cookie_names.user_state);
var viewport_width  = $(window).width();
var state           = 'not_started';
var masonryDefaults;
var masonrySettings;
var masonryOptions;
var themes_allowed;
var theme_enabled;
var theme;
var _this;
var logger;
var logText;
  // ---------------------------------------------------------------------------
  // Main object
  // ---------------------------------------------------------------------------
  return {
    // -------------------------------------------------------------------------
    // init()
    // adapter initializer
    // -------------------------------------------------------------------------
    init: function (options) {
      var xhrLoadState      = 'pending';                                        // (initial) load state for the HTML portion of the slider
      var load_dependencies = {};
      var dependency;
      // -----------------------------------------------------------------------
      // Default module settings
      // -----------------------------------------------------------------------
      var settings = $.extend({
        module_name: 'j1.adapter.masonry',
        generated:   '2023-07-14 14:24:29 +0200'
      }, options);
      // -----------------------------------------------------------------------
      // Global variable settings
      // -----------------------------------------------------------------------
      _this  = j1.adapter.masonry;
      theme  = user_state.theme_name;
      logger = log4javascript.getLogger('j1.adapter.masonry');
      // Load  module DEFAULTS|CONFIG
      masonryDefaults = $.extend({}, {"enabled":false, "initTimeout":500, "hideDisabled":true, "responsive":{"xs":12, "sm":12, "md":6, "lg":4, "xl":3}, "filters":{"enabled":false, "grayscale":1, "contrast":1, "brightness":1}, "xhr_data_path":"/assets/data/masonry", "initLayout":true, "originTop":true, "originLeft":true, "percentPosition":true, "horizontalOrder":true, "stagger":0.03, "transitionDuration":0.8, "gutter":0, "itemSelector":false, "resize":true, "containerStyle":null, "columnWidth":80});
      masonrySettings = $.extend({}, {"enabled":true, "grids":[{"grid":null, "enabled":true, "id":"post_series_example", "type":"post", "group":"Life", "gutters":true, "image_styles":"img-fluid img-object--cover", "image_height":"300px", "translate_links":false, "link_new_window":true, "options":{"originTop":true, "originLeft":true, "initLayout":true, "percentPosition":true}}, {"grid":null, "enabled":true, "id":"collection_portfolio", "type":"collection", "collection":"portfolio", "image_styles":"img-fluid img-object--cover", "image_height":"300px", "image_width":"300px", "translate_titles":false, "lightbox":false, "gutters":true, "preview":{"enabled":true}, "options":{"originTop":true, "originLeft":true, "initLayout":true, "percentPosition":true}}, {"grid":null, "enabled":true, "id":"collection_biography", "type":"collection", "collection":"biography", "image_styles":"img-fluid img-object--cover", "image_height":"470px", "image_width":"400px", "translate_titles":false, "preview":true, "gutters":true, "options":{"originTop":true, "originLeft":true, "initLayout":true, "percentPosition":true}}, {"grid":null, "enabled":true, "id":"collection_fantasy", "type":"collection", "collection":"fantasy", "image_styles":"img-fluid img-object--cover", "image_height":"470px", "image_width":"400px", "translate_titles":false, "preview":true, "gutters":true, "options":{"originTop":true, "originLeft":true, "initLayout":true, "percentPosition":true}}, {"grid":null, "enabled":true, "id":"collection_romance", "type":"collection", "translate_titles":true, "collection":"romance", "image_styles":"img-fluid img-object--cover", "image_height":"470px", "image_width":"400px", "preview":true, "gutters":true, "options":{"originTop":true, "originLeft":true, "initLayout":true, "percentPosition":true}}, {"grid":null, "enabled":true, "id":"card_example", "type":"card", "image_base_path":"/assets/images/modules/gallery/mega_cities", "image_styles":"img-fluid", "image_height":"300px", "lightbox":true, "gutters":true, "caption":{"enabled":true, "position":"bottom"}, "options":{"originTop":true, "originLeft":true, "initLayout":true, "percentPosition":true}, "images":[{"image":null, "file":"denys-nevozhai-1_b.jpg", "caption":"Man posing at the rooftop of Jin Mao Tower Shanghai - China"}, {"image":null, "file":"thomas-tucker_b.jpg", "caption":"Sunset over Taipei City - Taiwan"}, {"image":null, "file":"emmad-mazhari_b.jpg", "caption":"Chicago - United States"}, {"image":null, "file":"johan-mouchet_b.jpg", "caption":"The Queen Bee at the Eureka Tower - Melbourne Southbank Australia"}, {"image":null, "file":"federico-rizzarelli_b.jpg", "caption":"Shanghai - China"}, {"image":null, "file":"gints-gailis_b.jpg", "caption":"Shangri-La Hotel Jakarta - Indonesia"}]}, {"grid":null, "enabled":true, "id":"image_grid_base_example", "type":"image", "image_base_path":"/assets/images/modules/gallery/mega_cities", "image_styles":"img-fluid", "lightbox":false, "gutters":false, "caption":{"enabled":false, "position":"bottom"}, "options":{"originTop":true, "originLeft":true, "initLayout":true, "percentPosition":true}, "images":[{"image":null, "file":"denys-nevozhai-1_b.jpg", "caption":"Man posing at the rooftop of Jin Mao Tower Shanghai - China"}, {"image":null, "file":"thomas-tucker_b.jpg", "caption":"Sunset over Taipei City - Taiwan"}, {"image":null, "file":"emmad-mazhari_b.jpg", "caption":"Chicago - United States"}, {"image":null, "file":"johan-mouchet_b.jpg", "caption":"The Queen Bee at the Eureka Tower - Melbourne Southbank Australia"}, {"image":null, "file":"federico-rizzarelli_b.jpg", "caption":"Shanghai - China"}, {"image":null, "file":"gints-gailis_b.jpg", "caption":"Shangri-La Hotel Jakarta - Indonesia"}]}, {"grid":null, "enabled":true, "id":"image_grid_full_example", "type":"image", "image_base_path":"/assets/images/modules/gallery/mega_cities", "image_styles":"img-fluid", "lightbox":true, "gutters":true, "caption":{"enabled":true, "position":"bottom"}, "options":{"originTop":true, "originLeft":true, "initLayout":true, "percentPosition":true}, "images":[{"image":null, "file":"denys-nevozhai-1_b.jpg", "caption":"Man posing at the rooftop of Jin Mao Tower Shanghai - China"}, {"image":null, "file":"thomas-tucker_b.jpg", "caption":"Sunset over Taipei City - Taiwan"}, {"image":null, "file":"emmad-mazhari_b.jpg", "caption":"Chicago - United States"}, {"image":null, "file":"johan-mouchet_b.jpg", "caption":"The Queen Bee at the Eureka Tower - Melbourne Southbank Australia"}, {"image":null, "file":"federico-rizzarelli_b.jpg", "caption":"Shanghai - China"}, {"image":null, "file":"gints-gailis_b.jpg", "caption":"Shangri-La Hotel Jakarta - Indonesia"}]}, {"grid":null, "enabled":true, "id":"image_grid_full_example_filters", "type":"image", "image_base_path":"/assets/images/modules/gallery/mega_cities", "image_styles":"img-fluid", "lightbox":true, "gutters":true, "caption":{"enabled":true, "position":"bottom"}, "filters":{"enabled":true, "grayscale":0.8, "contrast":0.8, "brightness":0.7, "sepia":1}, "options":{"originTop":true, "originLeft":true, "initLayout":true, "percentPosition":true}, "images":[{"image":null, "file":"denys-nevozhai-1_b.jpg", "caption":"Man posing at the rooftop of Jin Mao Tower Shanghai - China"}, {"image":null, "file":"thomas-tucker_b.jpg", "caption":"Sunset over Taipei City - Taiwan"}, {"image":null, "file":"emmad-mazhari_b.jpg", "caption":"Chicago - United States"}, {"image":null, "file":"johan-mouchet_b.jpg", "caption":"The Queen Bee at the Eureka Tower - Melbourne Southbank Australia"}, {"image":null, "file":"federico-rizzarelli_b.jpg", "caption":"Shanghai - China"}, {"image":null, "file":"gints-gailis_b.jpg", "caption":"Shangri-La Hotel Jakarta - Indonesia"}]}]});
      masonryOptions =  $.extend(true, {}, masonryDefaults, masonrySettings);
      // load HTML portion for all grids
      console.debug('loading HTML portion for all Masonry grids configured');
      _this.loadGridHTML(masonryOptions, masonryOptions.grids);
      // -----------------------------------------------------------------------
      // initializer
      // -----------------------------------------------------------------------
      var dependencies_met_page_ready = setInterval (function (options) {
        var pageState     = $('#no_flicker').css("display");
        var pageVisible   = (pageState == 'block') ? true: false;
        var atticFinished = (j1.adapter.attic.getState() == 'finished') ? true: false;
//      if ( j1.getState() === 'finished' && pageVisible && atticFinished) {
        if ( j1.getState() === 'finished' && pageVisible) {
          _this.setState('started');
          logger.debug('\n' + 'state: ' + _this.getState());
          logger.info('\n' + 'module is being initialized');
              logger.info('\n' + 'found masonry grid on id: ' + 'post_series_example');
              // create dynamic loader variable|s
              dependency = 'dependencies_met_html_loaded_post_series_example';
              load_dependencies[dependency] = '';
              // initialize the grid if HTML portion successfully loaded
              load_dependencies['dependencies_met_html_loaded_post_series_example'] = setInterval (function (options) {
                // check if HTML portion of the slider is loaded successfully (loadSliderHTML)
                xhrLoadState = j1.xhrDOMState['#post_series_example_parent'];
                if ( xhrLoadState === 'success' ) {
                  setTimeout (function() {
                    var $grid_post_series_example = $('#post_series_example');
                    logger.info('\n' + 'initialize grid on id: ' + 'post_series_example');
                    // grid event handler
                    logger.info('\n' + 'install event handlers for grid on id: ' + 'post_series_example');
                    $grid_post_series_example.on('layoutComplete', function() {
                      // initializing (grid layout) completed
                      logger.debug('\n' + 'initializing layout completed for grid on id: ' + 'post_series_example');
                      // correct position for artice modals (previwes)
                      logger.debug('\n' + 'adjust positions of all modals on id: ');
                      var preview_modals = $("#post_series_example > .article-modal");
                      $.each($(preview_modals), function(index, modal) {
                          $(modal).attr('style', 'left: 0%');
                      });
                    });
                    // setup the grid
                    logger.info('\n' + 'grid is being setup on id: ' + 'post_series_example');
                    $grid_post_series_example.masonry({
                      percentPosition:        true,
                      horizontalOrder:        true,
                      originLeft:             true,
                      originTop:              true,
                      initLayout:             true,
                      transitionDuration:     "0.8s",
                      stagger:                "0.03s",
                      resize:                 true,
                      gutter:                 0,
//                    containerStyle:         "",
//                    columnWidth:             80,
                    });
                  }, masonryOptions.initTimeout);
                }
                clearInterval(load_dependencies['dependencies_met_html_loaded_post_series_example']);
              }, 10); // END dependencies_met_html_loaded
             // ENDIF grid enabled
              logger.info('\n' + 'found masonry grid on id: ' + 'collection_portfolio');
              // create dynamic loader variable|s
              dependency = 'dependencies_met_html_loaded_collection_portfolio';
              load_dependencies[dependency] = '';
              // initialize the grid if HTML portion successfully loaded
              load_dependencies['dependencies_met_html_loaded_collection_portfolio'] = setInterval (function (options) {
                // check if HTML portion of the slider is loaded successfully (loadSliderHTML)
                xhrLoadState = j1.xhrDOMState['#collection_portfolio_parent'];
                if ( xhrLoadState === 'success' ) {
                  setTimeout (function() {
                    var $grid_collection_portfolio = $('#collection_portfolio');
                    logger.info('\n' + 'initialize grid on id: ' + 'collection_portfolio');
                    // grid event handler
                    logger.info('\n' + 'install event handlers for grid on id: ' + 'collection_portfolio');
                    $grid_collection_portfolio.on('layoutComplete', function() {
                      // initializing (grid layout) completed
                      logger.debug('\n' + 'initializing layout completed for grid on id: ' + 'collection_portfolio');
                      // correct position for artice modals (previwes)
                      logger.debug('\n' + 'adjust positions of all modals on id: ');
                      var preview_modals = $("#collection_portfolio > .article-modal");
                      $.each($(preview_modals), function(index, modal) {
                          $(modal).attr('style', 'left: 0%');
                      });
                    });
                    // setup the grid
                    logger.info('\n' + 'grid is being setup on id: ' + 'collection_portfolio');
                    $grid_collection_portfolio.masonry({
                      percentPosition:        true,
                      horizontalOrder:        true,
                      originLeft:             true,
                      originTop:              true,
                      initLayout:             true,
                      transitionDuration:     "0.8s",
                      stagger:                "0.03s",
                      resize:                 true,
                      gutter:                 0,
//                    containerStyle:         "",
//                    columnWidth:             80,
                    });
                  }, masonryOptions.initTimeout);
                }
                clearInterval(load_dependencies['dependencies_met_html_loaded_collection_portfolio']);
              }, 10); // END dependencies_met_html_loaded
             // ENDIF grid enabled
              logger.info('\n' + 'found masonry grid on id: ' + 'collection_biography');
              // create dynamic loader variable|s
              dependency = 'dependencies_met_html_loaded_collection_biography';
              load_dependencies[dependency] = '';
              // initialize the grid if HTML portion successfully loaded
              load_dependencies['dependencies_met_html_loaded_collection_biography'] = setInterval (function (options) {
                // check if HTML portion of the slider is loaded successfully (loadSliderHTML)
                xhrLoadState = j1.xhrDOMState['#collection_biography_parent'];
                if ( xhrLoadState === 'success' ) {
                  setTimeout (function() {
                    var $grid_collection_biography = $('#collection_biography');
                    logger.info('\n' + 'initialize grid on id: ' + 'collection_biography');
                    // grid event handler
                    logger.info('\n' + 'install event handlers for grid on id: ' + 'collection_biography');
                    $grid_collection_biography.on('layoutComplete', function() {
                      // initializing (grid layout) completed
                      logger.debug('\n' + 'initializing layout completed for grid on id: ' + 'collection_biography');
                      // correct position for artice modals (previwes)
                      logger.debug('\n' + 'adjust positions of all modals on id: ');
                      var preview_modals = $("#collection_biography > .article-modal");
                      $.each($(preview_modals), function(index, modal) {
                          $(modal).attr('style', 'left: 0%');
                      });
                    });
                    // setup the grid
                    logger.info('\n' + 'grid is being setup on id: ' + 'collection_biography');
                    $grid_collection_biography.masonry({
                      percentPosition:        true,
                      horizontalOrder:        true,
                      originLeft:             true,
                      originTop:              true,
                      initLayout:             true,
                      transitionDuration:     "0.8s",
                      stagger:                "0.03s",
                      resize:                 true,
                      gutter:                 0,
//                    containerStyle:         "",
//                    columnWidth:             80,
                    });
                  }, masonryOptions.initTimeout);
                }
                clearInterval(load_dependencies['dependencies_met_html_loaded_collection_biography']);
              }, 10); // END dependencies_met_html_loaded
             // ENDIF grid enabled
              logger.info('\n' + 'found masonry grid on id: ' + 'collection_fantasy');
              // create dynamic loader variable|s
              dependency = 'dependencies_met_html_loaded_collection_fantasy';
              load_dependencies[dependency] = '';
              // initialize the grid if HTML portion successfully loaded
              load_dependencies['dependencies_met_html_loaded_collection_fantasy'] = setInterval (function (options) {
                // check if HTML portion of the slider is loaded successfully (loadSliderHTML)
                xhrLoadState = j1.xhrDOMState['#collection_fantasy_parent'];
                if ( xhrLoadState === 'success' ) {
                  setTimeout (function() {
                    var $grid_collection_fantasy = $('#collection_fantasy');
                    logger.info('\n' + 'initialize grid on id: ' + 'collection_fantasy');
                    // grid event handler
                    logger.info('\n' + 'install event handlers for grid on id: ' + 'collection_fantasy');
                    $grid_collection_fantasy.on('layoutComplete', function() {
                      // initializing (grid layout) completed
                      logger.debug('\n' + 'initializing layout completed for grid on id: ' + 'collection_fantasy');
                      // correct position for artice modals (previwes)
                      logger.debug('\n' + 'adjust positions of all modals on id: ');
                      var preview_modals = $("#collection_fantasy > .article-modal");
                      $.each($(preview_modals), function(index, modal) {
                          $(modal).attr('style', 'left: 0%');
                      });
                    });
                    // setup the grid
                    logger.info('\n' + 'grid is being setup on id: ' + 'collection_fantasy');
                    $grid_collection_fantasy.masonry({
                      percentPosition:        true,
                      horizontalOrder:        true,
                      originLeft:             true,
                      originTop:              true,
                      initLayout:             true,
                      transitionDuration:     "0.8s",
                      stagger:                "0.03s",
                      resize:                 true,
                      gutter:                 0,
//                    containerStyle:         "",
//                    columnWidth:             80,
                    });
                  }, masonryOptions.initTimeout);
                }
                clearInterval(load_dependencies['dependencies_met_html_loaded_collection_fantasy']);
              }, 10); // END dependencies_met_html_loaded
             // ENDIF grid enabled
              logger.info('\n' + 'found masonry grid on id: ' + 'collection_romance');
              // create dynamic loader variable|s
              dependency = 'dependencies_met_html_loaded_collection_romance';
              load_dependencies[dependency] = '';
              // initialize the grid if HTML portion successfully loaded
              load_dependencies['dependencies_met_html_loaded_collection_romance'] = setInterval (function (options) {
                // check if HTML portion of the slider is loaded successfully (loadSliderHTML)
                xhrLoadState = j1.xhrDOMState['#collection_romance_parent'];
                if ( xhrLoadState === 'success' ) {
                  setTimeout (function() {
                    var $grid_collection_romance = $('#collection_romance');
                    logger.info('\n' + 'initialize grid on id: ' + 'collection_romance');
                    // grid event handler
                    logger.info('\n' + 'install event handlers for grid on id: ' + 'collection_romance');
                    $grid_collection_romance.on('layoutComplete', function() {
                      // initializing (grid layout) completed
                      logger.debug('\n' + 'initializing layout completed for grid on id: ' + 'collection_romance');
                      // correct position for artice modals (previwes)
                      logger.debug('\n' + 'adjust positions of all modals on id: ');
                      var preview_modals = $("#collection_romance > .article-modal");
                      $.each($(preview_modals), function(index, modal) {
                          $(modal).attr('style', 'left: 0%');
                      });
                    });
                    // setup the grid
                    logger.info('\n' + 'grid is being setup on id: ' + 'collection_romance');
                    $grid_collection_romance.masonry({
                      percentPosition:        true,
                      horizontalOrder:        true,
                      originLeft:             true,
                      originTop:              true,
                      initLayout:             true,
                      transitionDuration:     "0.8s",
                      stagger:                "0.03s",
                      resize:                 true,
                      gutter:                 0,
//                    containerStyle:         "",
//                    columnWidth:             80,
                    });
                  }, masonryOptions.initTimeout);
                }
                clearInterval(load_dependencies['dependencies_met_html_loaded_collection_romance']);
              }, 10); // END dependencies_met_html_loaded
             // ENDIF grid enabled
              logger.info('\n' + 'found masonry grid on id: ' + 'card_example');
              // create dynamic loader variable|s
              dependency = 'dependencies_met_html_loaded_card_example';
              load_dependencies[dependency] = '';
              // initialize the grid if HTML portion successfully loaded
              load_dependencies['dependencies_met_html_loaded_card_example'] = setInterval (function (options) {
                // check if HTML portion of the slider is loaded successfully (loadSliderHTML)
                xhrLoadState = j1.xhrDOMState['#card_example_parent'];
                if ( xhrLoadState === 'success' ) {
                  setTimeout (function() {
                    var $grid_card_example = $('#card_example');
                    logger.info('\n' + 'initialize grid on id: ' + 'card_example');
                    // grid event handler
                    logger.info('\n' + 'install event handlers for grid on id: ' + 'card_example');
                    $grid_card_example.on('layoutComplete', function() {
                      // initializing (grid layout) completed
                      logger.debug('\n' + 'initializing layout completed for grid on id: ' + 'card_example');
                      // correct position for artice modals (previwes)
                      logger.debug('\n' + 'adjust positions of all modals on id: ');
                      var preview_modals = $("#card_example > .article-modal");
                      $.each($(preview_modals), function(index, modal) {
                          $(modal).attr('style', 'left: 0%');
                      });
                    });
                    // setup the grid
                    logger.info('\n' + 'grid is being setup on id: ' + 'card_example');
                    $grid_card_example.masonry({
                      percentPosition:        true,
                      horizontalOrder:        true,
                      originLeft:             true,
                      originTop:              true,
                      initLayout:             true,
                      transitionDuration:     "0.8s",
                      stagger:                "0.03s",
                      resize:                 true,
                      gutter:                 0,
//                    containerStyle:         "",
//                    columnWidth:             80,
                    });
                  }, masonryOptions.initTimeout);
                }
                clearInterval(load_dependencies['dependencies_met_html_loaded_card_example']);
              }, 10); // END dependencies_met_html_loaded
             // ENDIF grid enabled
              logger.info('\n' + 'found masonry grid on id: ' + 'image_grid_base_example');
              // create dynamic loader variable|s
              dependency = 'dependencies_met_html_loaded_image_grid_base_example';
              load_dependencies[dependency] = '';
              // initialize the grid if HTML portion successfully loaded
              load_dependencies['dependencies_met_html_loaded_image_grid_base_example'] = setInterval (function (options) {
                // check if HTML portion of the slider is loaded successfully (loadSliderHTML)
                xhrLoadState = j1.xhrDOMState['#image_grid_base_example_parent'];
                if ( xhrLoadState === 'success' ) {
                  setTimeout (function() {
                    var $grid_image_grid_base_example = $('#image_grid_base_example');
                    logger.info('\n' + 'initialize grid on id: ' + 'image_grid_base_example');
                    // grid event handler
                    logger.info('\n' + 'install event handlers for grid on id: ' + 'image_grid_base_example');
                    $grid_image_grid_base_example.on('layoutComplete', function() {
                      // initializing (grid layout) completed
                      logger.debug('\n' + 'initializing layout completed for grid on id: ' + 'image_grid_base_example');
                      // correct position for artice modals (previwes)
                      logger.debug('\n' + 'adjust positions of all modals on id: ');
                      var preview_modals = $("#image_grid_base_example > .article-modal");
                      $.each($(preview_modals), function(index, modal) {
                          $(modal).attr('style', 'left: 0%');
                      });
                    });
                    // setup the grid
                    logger.info('\n' + 'grid is being setup on id: ' + 'image_grid_base_example');
                    $grid_image_grid_base_example.masonry({
                      percentPosition:        true,
                      horizontalOrder:        true,
                      originLeft:             true,
                      originTop:              true,
                      initLayout:             true,
                      transitionDuration:     "0.8s",
                      stagger:                "0.03s",
                      resize:                 true,
                      gutter:                 0,
//                    containerStyle:         "",
//                    columnWidth:             80,
                    });
                  }, masonryOptions.initTimeout);
                }
                clearInterval(load_dependencies['dependencies_met_html_loaded_image_grid_base_example']);
              }, 10); // END dependencies_met_html_loaded
             // ENDIF grid enabled
              logger.info('\n' + 'found masonry grid on id: ' + 'image_grid_full_example');
              // create dynamic loader variable|s
              dependency = 'dependencies_met_html_loaded_image_grid_full_example';
              load_dependencies[dependency] = '';
              // initialize the grid if HTML portion successfully loaded
              load_dependencies['dependencies_met_html_loaded_image_grid_full_example'] = setInterval (function (options) {
                // check if HTML portion of the slider is loaded successfully (loadSliderHTML)
                xhrLoadState = j1.xhrDOMState['#image_grid_full_example_parent'];
                if ( xhrLoadState === 'success' ) {
                  setTimeout (function() {
                    var $grid_image_grid_full_example = $('#image_grid_full_example');
                    logger.info('\n' + 'initialize grid on id: ' + 'image_grid_full_example');
                    // grid event handler
                    logger.info('\n' + 'install event handlers for grid on id: ' + 'image_grid_full_example');
                    $grid_image_grid_full_example.on('layoutComplete', function() {
                      // initializing (grid layout) completed
                      logger.debug('\n' + 'initializing layout completed for grid on id: ' + 'image_grid_full_example');
                      // correct position for artice modals (previwes)
                      logger.debug('\n' + 'adjust positions of all modals on id: ');
                      var preview_modals = $("#image_grid_full_example > .article-modal");
                      $.each($(preview_modals), function(index, modal) {
                          $(modal).attr('style', 'left: 0%');
                      });
                    });
                    // setup the grid
                    logger.info('\n' + 'grid is being setup on id: ' + 'image_grid_full_example');
                    $grid_image_grid_full_example.masonry({
                      percentPosition:        true,
                      horizontalOrder:        true,
                      originLeft:             true,
                      originTop:              true,
                      initLayout:             true,
                      transitionDuration:     "0.8s",
                      stagger:                "0.03s",
                      resize:                 true,
                      gutter:                 0,
//                    containerStyle:         "",
//                    columnWidth:             80,
                    });
                  }, masonryOptions.initTimeout);
                }
                clearInterval(load_dependencies['dependencies_met_html_loaded_image_grid_full_example']);
              }, 10); // END dependencies_met_html_loaded
             // ENDIF grid enabled
              logger.info('\n' + 'found masonry grid on id: ' + 'image_grid_full_example_filters');
              // create dynamic loader variable|s
              dependency = 'dependencies_met_html_loaded_image_grid_full_example_filters';
              load_dependencies[dependency] = '';
              // initialize the grid if HTML portion successfully loaded
              load_dependencies['dependencies_met_html_loaded_image_grid_full_example_filters'] = setInterval (function (options) {
                // check if HTML portion of the slider is loaded successfully (loadSliderHTML)
                xhrLoadState = j1.xhrDOMState['#image_grid_full_example_filters_parent'];
                if ( xhrLoadState === 'success' ) {
                  setTimeout (function() {
                    var $grid_image_grid_full_example_filters = $('#image_grid_full_example_filters');
                    logger.info('\n' + 'initialize grid on id: ' + 'image_grid_full_example_filters');
                    // grid event handler
                    logger.info('\n' + 'install event handlers for grid on id: ' + 'image_grid_full_example_filters');
                    $grid_image_grid_full_example_filters.on('layoutComplete', function() {
                      // initializing (grid layout) completed
                      logger.debug('\n' + 'initializing layout completed for grid on id: ' + 'image_grid_full_example_filters');
                      // correct position for artice modals (previwes)
                      logger.debug('\n' + 'adjust positions of all modals on id: ');
                      var preview_modals = $("#image_grid_full_example_filters > .article-modal");
                      $.each($(preview_modals), function(index, modal) {
                          $(modal).attr('style', 'left: 0%');
                      });
                    });
                    // setup the grid
                    logger.info('\n' + 'grid is being setup on id: ' + 'image_grid_full_example_filters');
                    $grid_image_grid_full_example_filters.masonry({
                      percentPosition:        true,
                      horizontalOrder:        true,
                      originLeft:             true,
                      originTop:              true,
                      initLayout:             true,
                      transitionDuration:     "0.8s",
                      stagger:                "0.03s",
                      resize:                 true,
                      gutter:                 0,
//                    containerStyle:         "",
//                    columnWidth:             80,
                    });
                  }, masonryOptions.initTimeout);
                }
                clearInterval(load_dependencies['dependencies_met_html_loaded_image_grid_full_example_filters']);
              }, 10); // END dependencies_met_html_loaded
             // ENDIF grid enabled
           // ENDFOR (all) grids
          logger.info('\n' + 'initializing module finished');
          clearInterval(dependencies_met_page_ready);
        }
      }, 10);
    }, // END init
    // -------------------------------------------------------------------------
    // loadGridHTML()
    // loads the HTML portion via AJAX (j1.loadHTML) for all grids configured.
    // NOTE: Make sure the placeholder DIV is available in the content
    // page e.g. using the asciidoc extension masonry::
    // -------------------------------------------------------------------------
    loadGridHTML: function (options, grid) {
      var numGrids      = Object.keys(grid).length;
      var active_grids  = numGrids;
      var xhr_data_path = options.xhr_data_path + '/index.html';
      var xhr_container_id;
      console.debug('number of grids found: ' + numGrids);
      _this.setState('load_data');
      Object.keys(grid).forEach(function(key) {
        if (grid[key].enabled) {
          xhr_container_id = grid[key].id + '_parent';
          console.debug('load HTML portion on grid id: ' + grid[key].id);
          j1.loadHTML({
            xhr_container_id: xhr_container_id,
            xhr_data_path:    xhr_data_path,
            xhr_data_element: grid[key].id
          });
        } else {
          console.debug('grid found disabled on id: ' + grid[key].id);
          active_grids--;
        }
      });
      console.debug('grids loaded in page enabled|all: ' + active_grids + '|' + numGrids);
      _this.setState('data_loaded');
    }, // END loadSliderHTML
    // -------------------------------------------------------------------------
    // messageHandler()
    // manage messages send from other J1 modules
    // -------------------------------------------------------------------------
    messageHandler: function (sender, message) {
      var json_message = JSON.stringify(message, undefined, 2);
      logText = '\n' + 'received message from ' + sender + ': ' + json_message;
      logger.debug(logText);
      // -----------------------------------------------------------------------
      //  Process commands|actions
      // -----------------------------------------------------------------------
      if (message.type === 'command' && message.action === 'module_initialized') {
        //
        // Place handling of command|action here
        //
        logger.info('\n' + message.text);
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




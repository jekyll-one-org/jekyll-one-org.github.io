

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/masonry.js
 # J1 Adapter for the comments module
 #
 # Product/Info:
 # https://jekyll.one
 #
 # Copyright (C) 2023, 2024 Juergen Adams
 #
 # J1 Template is licensed under the MIT License.
 # For details, see: https://github.com/jekyll-one-org/j1-template/blob/main/LICENSE.md
 # -----------------------------------------------------------------------------
 #  Adapter generated: 2023-11-11 21:02:44 +0100
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
        generated:   '2023-11-11 21:02:44 +0100'
      }, options);
      // -----------------------------------------------------------------------
      // Global variable settings
      // -----------------------------------------------------------------------
      _this  = j1.adapter.masonry;
      theme  = user_state.theme_name;
      logger = log4javascript.getLogger('j1.adapter.masonry');
      // Load  module DEFAULTS|CONFIG
      masonryDefaults = $.extend({}, {"enabled":false, "gutters":3, "xhr_data_path":"/assets/data/masonry", "videojs":{"enabled":false, "theme":"uno", "options":{"autoplay":false, "controls":true, "fluid":true, "muted":false, "preload":false, "playbackRates":[0.25, 0.5, 1, 1.5, 2], "controlBar":{"remainingTimeDisplay":true, "pictureInPictureToggle":true, "skipButtons":{"forward":5, "backward":5}}}}, "lightbox":{"enabled":false, "type":"lb"}, "lightGallery":{"plugins":"lgFullscreen, lgThumbnail", "options":{"download":false, "alignThumbnails":"left"}}, "initTimeout":1200, "hideDisabled":true, "responsive":{"xs":12, "sm":12, "md":6, "lg":4, "xl":4}, "filters":{"enabled":false, "grayscale":1, "contrast":1, "brightness":1}, "initLayout":true, "originTop":true, "originLeft":true, "percentPosition":true, "horizontalOrder":true, "stagger":0.03, "transitionDuration":0.8, "gutter":0, "itemSelector":false, "resize":true, "containerStyle":null, "columnWidth":80});
      masonrySettings = $.extend({}, {"enabled":true, "grids":[{"grid":null, "enabled":true, "id":"post_series_example", "type":"post", "group":"Featured", "gutters":3, "image_styles":"img-fluid img-object--cover", "image_height":"300px", "translate_links":false, "link_new_window":true, "responsive":{"xs":12, "sm":12, "md":6, "lg":4, "xl":4}, "lightbox":{"enabled":false}, "options":{"originTop":true, "originLeft":true, "initLayout":true, "percentPosition":true}, "filters":{"enabled":true, "grayscale":1, "contrast":0.8, "brightness":0.4}}, {"grid":null, "enabled":true, "id":"collection_portfolio", "type":"collection", "collection":"portfolio", "gutters":3, "image_styles":"img-fluid img-object--cover", "image_height":"300px", "image_width":"300px", "translate_titles":false, "responsive":{"xs":12, "sm":12, "md":6, "lg":4, "xl":4}, "lightbox":{"enabled":false}, "preview":{"enabled":true}, "options":{"originTop":true, "originLeft":true, "initLayout":true, "percentPosition":true}}, {"grid":null, "enabled":true, "id":"collection_biography", "type":"collection", "collection":"biography", "gutters":3, "image_styles":"img-fluid img-object--cover", "image_height":"470px", "image_width":"400px", "translate_titles":false, "preview":true, "responsive":{"xs":12, "sm":12, "md":6, "lg":4, "xl":4}, "lightbox":{"enabled":false}, "options":{"originTop":true, "originLeft":true, "initLayout":true, "percentPosition":true}}, {"grid":null, "enabled":true, "id":"collection_fantasy", "type":"collection", "collection":"fantasy", "gutters":3, "image_styles":"img-fluid img-object--cover", "image_height":"470px", "image_width":"400px", "translate_titles":false, "preview":true, "responsive":{"xs":12, "sm":12, "md":6, "lg":4, "xl":4}, "lightbox":{"enabled":false}, "options":{"originTop":true, "originLeft":true, "initLayout":true, "percentPosition":true}}, {"grid":null, "enabled":true, "id":"collection_romance", "type":"collection", "translate_titles":true, "collection":"romance", "gutters":3, "image_styles":"img-fluid img-object--cover", "image_height":"470px", "image_width":"400px", "preview":true, "responsive":{"xs":12, "sm":12, "md":6, "lg":4, "xl":4}, "lightbox":{"enabled":false}, "options":{"originTop":true, "originLeft":true, "initLayout":true, "percentPosition":true}}, {"grid":null, "enabled":true, "id":"image_fixed_height_lb", "type":"image", "gutters":3, "image_base_path":"/assets/images/modules/gallery/mega_cities", "image_styles":"img-fluid", "image_height":"300px", "responsive":{"xs":12, "sm":12, "md":6, "lg":4, "xl":4}, "lightbox":{"enabled":true, "type":"lb"}, "caption":{"enabled":true, "position":"bottom"}, "options":{"originTop":true, "originLeft":true, "initLayout":true, "percentPosition":true}, "images":[{"image":null, "file":"denys-nevozhai-1_b.jpg", "caption":"Man posing at the rooftop of Jin Mao Tower Shanghai - China"}, {"image":null, "file":"thomas-tucker_b.jpg", "caption":"Sunset over Taipei City - Taiwan"}, {"image":null, "file":"emmad-mazhari_b.jpg", "caption":"Chicago - United States"}, {"image":null, "file":"johan-mouchet_b.jpg", "caption":"The Queen Bee at the Eureka Tower - Melbourne Southbank Australia"}, {"image":null, "file":"federico-rizzarelli_b.jpg", "caption":"Shanghai - China"}, {"image":null, "file":"gints-gailis_b.jpg", "caption":"Shangri-La Hotel Jakarta - Indonesia"}]}, {"grid":null, "enabled":true, "id":"image_variable_height_lb", "type":"image", "gutters":3, "image_base_path":"/assets/images/modules/gallery/mega_cities", "image_styles":"img-fluid", "responsive":{"xs":12, "sm":12, "md":6, "lg":4, "xl":4}, "lightbox":{"enabled":true, "type":"lb"}, "caption":{"enabled":true, "position":"bottom"}, "options":{"originTop":true, "originLeft":true, "initLayout":true, "percentPosition":true}, "images":[{"image":null, "file":"denys-nevozhai-1_b.jpg", "caption":"Man posing at the rooftop of Jin Mao Tower Shanghai - China"}, {"image":null, "file":"thomas-tucker_b.jpg", "caption":"Sunset over Taipei City - Taiwan"}, {"image":null, "file":"emmad-mazhari_b.jpg", "caption":"Chicago - United States"}, {"image":null, "file":"johan-mouchet_b.jpg", "caption":"The Queen Bee at the Eureka Tower - Melbourne Southbank Australia"}, {"image":null, "file":"federico-rizzarelli_b.jpg", "caption":"Shanghai - China"}, {"image":null, "file":"gints-gailis_b.jpg", "caption":"Shangri-La Hotel Jakarta - Indonesia"}]}, {"grid":null, "enabled":true, "id":"image_variable_height_lg", "type":"image", "gutters":3, "image_base_path":"/assets/images/modules/gallery/mega_cities", "image_styles":"img-fluid", "image_height":"300px", "responsive":{"xs":12, "sm":12, "md":6, "lg":4, "xl":4}, "videojs":{"enabled":false}, "lightbox":{"enabled":true, "type":"lg"}, "lightGallery":{"plugins":"lgFullscreen, lgRotate, lgThumbnail", "options":{"download":false, "alignThumbnails":"left"}}, "caption":{"enabled":true, "position":"bottom"}, "options":{"originTop":true, "originLeft":true, "initLayout":true, "percentPosition":true}, "images":[{"image":null, "file":"denys-nevozhai-1_b.jpg", "caption":"Man posing at the rooftop of Jin Mao Tower Shanghai - China"}, {"image":null, "file":"thomas-tucker_b.jpg", "caption":"Sunset over Taipei City - Taiwan"}, {"image":null, "file":"emmad-mazhari_b.jpg", "caption":"Chicago - United States"}, {"image":null, "file":"johan-mouchet_b.jpg", "caption":"The Queen Bee at the Eureka Tower - Melbourne Southbank Australia"}, {"image":null, "file":"federico-rizzarelli_b.jpg", "caption":"Shanghai - China"}, {"image":null, "file":"gints-gailis_b.jpg", "caption":"Shangri-La Hotel Jakarta - Indonesia"}]}, {"grid":null, "enabled":true, "id":"mixed_video_example", "type":"video", "gutters":2, "responsive":{"xs":12, "sm":12, "md":6, "lg":6, "xl":6}, "videojs":{"enabled":true, "theme":"uno", "player":{"enabled":true, "videojsPlayer":{"enabled":true, "options":{"muted":false, "preload":false, "autoplayFirstVideo":true}, "controls":true, "controlBar":{"remainingTimeDisplay":true, "pictureInPictureToggle":false}}, "vimeoPlayer":{"enabled":true, "options":{"autoPlay":true, "byline":0, "portrait":0, "color":"CCCCCC"}}, "wistiaPlayer":{"enabled":true, "options":{"autoPlay":true, "fullscreenButton":true, "muted":false, "qualityControl":false}}, "youTubePlayer":{"enabled":true, "options":{"autoPlay":true, "modestbranding":1, "showinfo":0, "controls":0}}}}, "lightbox":{"enabled":true, "type":"lg"}, "lightGallery":{"plugins":"lgThumbnail, lgVideo", "options":{"download":false, "alignThumbnails":"left", "autoplayFirstVideo":true}}, "caption":{"enabled":true, "position":"bottom"}, "options":{"originTop":true, "originLeft":true, "initLayout":true, "percentPosition":true}, "html5":{"video_base_path":"/assets/videos/gallery/html5", "poster_base_path":"/assets/videos/gallery/html5"}, "videos":[{"video":null, "name":"Planet Earth II", "type":"youtube", "size":"1280-720", "source":"https://youtu.be/IUN664s7N-c", "pinterest_prefix":"Pin video", "tweet_prefix":"Try video", "description":"<h4>\n  Visual Soundscapes - Mountains | Planet Earth II | BBC America\n</h4> <p>\n  On the heels of Planet Earth II’s record-breaking\n  Emmy nominations, BBC America presents stunning visual\n  soundscapes from the series' amazing habitats.\n</p>\n", "poster":{"style":"img-responsive", "source":"https://img.youtube.com/vi/IUN664s7N-c/maxresdefault.jpg"}, "caption":{"position":"bottom", "text":"YouTube &middot; Visual Soundscapes - Mountains | BBC America"}}, {"video":null, "name":"Nature Video by Charlie Kaye", "type":"vimeo", "size":"1280-720", "source":"https://vimeo.com/112836958", "pinterest_prefix":"Pin video", "tweet_prefix":"Try video", "description":"<h4>\n  Nature\n</h4> <p>\n  Video by <a target='_blank' href='https://vimeo.com/charliekaye'>Charlie Kaye.</a>\n</p>\n", "poster":{"style":"img-responsive", "source":"https://www.lightgalleryjs.com/images/demo/vimeo-video-poster.jpg"}, "caption":{"position":"bottom", "text":"Vimeo &middot; Nature Video by Charlie Kaye"}}, {"video":null, "name":"Thank You", "type":"wistia", "size":"1280-720", "source":"https://private-sharing.wistia.com/medias/mwhrulrucj", "pinterest_prefix":"Pin video", "tweet_prefix":"Try video", "description":"<h4>Thank You!</h4> <p>\n  Sample Wistia video\n</p>\n", "poster":{"style":"img-responsive", "source":"https://www.lightgalleryjs.com/images/demo/wistia-video-poster.jpeg"}, "caption":{"position":"bottom", "text":"Wistia &middot; Thank You"}}, {"video":null, "name":"Peck Pocketed", "type":"html5", "size":"1280-720", "source":"video1.mp4", "pinterest_prefix":"Pin video", "tweet_prefix":"Try video", "description":"<h4>\n  Peck Pocketed by Kevin Herron | Disney Favorite\n</h4>\n", "poster":{"style":"img-responsive", "source":"video1-poster.jpg"}, "caption":{"position":"bottom", "text":"MP4 Video &middot; Student Academy Award winning cartoon clip"}}]}]});
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
        if ( j1.getState() === 'finished' && pageVisible && atticFinished) {
          _this.setState('started');
          logger.debug('\n' + 'state: ' + _this.getState());
          logger.info('\n' + 'module is being initialized');
              logger.info('\n' + 'found masonry grid on id: ' + 'post_series_example');
              // create dynamic loader variable to setup the grid on id post_series_example
              dependency = 'dependencies_met_html_loaded_post_series_example';
              load_dependencies[dependency] = '';
              // initialize the grid if HTML portion successfully loaded
              load_dependencies['dependencies_met_html_loaded_post_series_example'] = setInterval (function (options) {
                // check if HTML portion of the grid is loaded successfully
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
                    //
                    logger.info('\n' + 'grid is being setup on id: ' + 'post_series_example');
                    var $grid_post_series_example = $grid_post_series_example.masonry({
                      percentPosition:        true,
                      horizontalOrder:        true,
                      originLeft:             true,
                      originTop:              true,
                      initLayout:             true,
                      transitionDuration:     "0.8s",
                      stagger:                "0.03s",
                      resize:                 true,
                      gutter:                 0
                    });
                    // run code after all images are loaded with the grid
                    //
                    $grid_post_series_example.imagesLoaded(function() {
                      console.debug("masonry: images loaded on post_series_example");
                    }); // END grid|imagesLoaded
                  }, masonryOptions.initTimeout);
                }
                clearInterval(load_dependencies['dependencies_met_html_loaded_post_series_example']);
              }, 10); // END dependencies_met_html_loaded
             // ENDIF grid enabled
              logger.info('\n' + 'found masonry grid on id: ' + 'collection_portfolio');
              // create dynamic loader variable to setup the grid on id collection_portfolio
              dependency = 'dependencies_met_html_loaded_collection_portfolio';
              load_dependencies[dependency] = '';
              // initialize the grid if HTML portion successfully loaded
              load_dependencies['dependencies_met_html_loaded_collection_portfolio'] = setInterval (function (options) {
                // check if HTML portion of the grid is loaded successfully
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
                    //
                    logger.info('\n' + 'grid is being setup on id: ' + 'collection_portfolio');
                    var $grid_collection_portfolio = $grid_collection_portfolio.masonry({
                      percentPosition:        true,
                      horizontalOrder:        true,
                      originLeft:             true,
                      originTop:              true,
                      initLayout:             true,
                      transitionDuration:     "0.8s",
                      stagger:                "0.03s",
                      resize:                 true,
                      gutter:                 0
                    });
                    // run code after all images are loaded with the grid
                    //
                    $grid_collection_portfolio.imagesLoaded(function() {
                      console.debug("masonry: images loaded on collection_portfolio");
                    }); // END grid|imagesLoaded
                  }, masonryOptions.initTimeout);
                }
                clearInterval(load_dependencies['dependencies_met_html_loaded_collection_portfolio']);
              }, 10); // END dependencies_met_html_loaded
             // ENDIF grid enabled
              logger.info('\n' + 'found masonry grid on id: ' + 'collection_biography');
              // create dynamic loader variable to setup the grid on id collection_biography
              dependency = 'dependencies_met_html_loaded_collection_biography';
              load_dependencies[dependency] = '';
              // initialize the grid if HTML portion successfully loaded
              load_dependencies['dependencies_met_html_loaded_collection_biography'] = setInterval (function (options) {
                // check if HTML portion of the grid is loaded successfully
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
                    //
                    logger.info('\n' + 'grid is being setup on id: ' + 'collection_biography');
                    var $grid_collection_biography = $grid_collection_biography.masonry({
                      percentPosition:        true,
                      horizontalOrder:        true,
                      originLeft:             true,
                      originTop:              true,
                      initLayout:             true,
                      transitionDuration:     "0.8s",
                      stagger:                "0.03s",
                      resize:                 true,
                      gutter:                 0
                    });
                    // run code after all images are loaded with the grid
                    //
                    $grid_collection_biography.imagesLoaded(function() {
                      console.debug("masonry: images loaded on collection_biography");
                    }); // END grid|imagesLoaded
                  }, masonryOptions.initTimeout);
                }
                clearInterval(load_dependencies['dependencies_met_html_loaded_collection_biography']);
              }, 10); // END dependencies_met_html_loaded
             // ENDIF grid enabled
              logger.info('\n' + 'found masonry grid on id: ' + 'collection_fantasy');
              // create dynamic loader variable to setup the grid on id collection_fantasy
              dependency = 'dependencies_met_html_loaded_collection_fantasy';
              load_dependencies[dependency] = '';
              // initialize the grid if HTML portion successfully loaded
              load_dependencies['dependencies_met_html_loaded_collection_fantasy'] = setInterval (function (options) {
                // check if HTML portion of the grid is loaded successfully
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
                    //
                    logger.info('\n' + 'grid is being setup on id: ' + 'collection_fantasy');
                    var $grid_collection_fantasy = $grid_collection_fantasy.masonry({
                      percentPosition:        true,
                      horizontalOrder:        true,
                      originLeft:             true,
                      originTop:              true,
                      initLayout:             true,
                      transitionDuration:     "0.8s",
                      stagger:                "0.03s",
                      resize:                 true,
                      gutter:                 0
                    });
                    // run code after all images are loaded with the grid
                    //
                    $grid_collection_fantasy.imagesLoaded(function() {
                      console.debug("masonry: images loaded on collection_fantasy");
                    }); // END grid|imagesLoaded
                  }, masonryOptions.initTimeout);
                }
                clearInterval(load_dependencies['dependencies_met_html_loaded_collection_fantasy']);
              }, 10); // END dependencies_met_html_loaded
             // ENDIF grid enabled
              logger.info('\n' + 'found masonry grid on id: ' + 'collection_romance');
              // create dynamic loader variable to setup the grid on id collection_romance
              dependency = 'dependencies_met_html_loaded_collection_romance';
              load_dependencies[dependency] = '';
              // initialize the grid if HTML portion successfully loaded
              load_dependencies['dependencies_met_html_loaded_collection_romance'] = setInterval (function (options) {
                // check if HTML portion of the grid is loaded successfully
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
                    //
                    logger.info('\n' + 'grid is being setup on id: ' + 'collection_romance');
                    var $grid_collection_romance = $grid_collection_romance.masonry({
                      percentPosition:        true,
                      horizontalOrder:        true,
                      originLeft:             true,
                      originTop:              true,
                      initLayout:             true,
                      transitionDuration:     "0.8s",
                      stagger:                "0.03s",
                      resize:                 true,
                      gutter:                 0
                    });
                    // run code after all images are loaded with the grid
                    //
                    $grid_collection_romance.imagesLoaded(function() {
                      console.debug("masonry: images loaded on collection_romance");
                    }); // END grid|imagesLoaded
                  }, masonryOptions.initTimeout);
                }
                clearInterval(load_dependencies['dependencies_met_html_loaded_collection_romance']);
              }, 10); // END dependencies_met_html_loaded
             // ENDIF grid enabled
              logger.info('\n' + 'found masonry grid on id: ' + 'image_fixed_height_lb');
              // create dynamic loader variable to setup the grid on id image_fixed_height_lb
              dependency = 'dependencies_met_html_loaded_image_fixed_height_lb';
              load_dependencies[dependency] = '';
              // initialize the grid if HTML portion successfully loaded
              load_dependencies['dependencies_met_html_loaded_image_fixed_height_lb'] = setInterval (function (options) {
                // check if HTML portion of the grid is loaded successfully
                xhrLoadState = j1.xhrDOMState['#image_fixed_height_lb_parent'];
                if ( xhrLoadState === 'success' ) {
                  setTimeout (function() {
                    var $grid_image_fixed_height_lb = $('#image_fixed_height_lb');
                    logger.info('\n' + 'initialize grid on id: ' + 'image_fixed_height_lb');
                    // grid event handler
                    logger.info('\n' + 'install event handlers for grid on id: ' + 'image_fixed_height_lb');
                    $grid_image_fixed_height_lb.on('layoutComplete', function() {
                      // initializing (grid layout) completed
                      logger.debug('\n' + 'initializing layout completed for grid on id: ' + 'image_fixed_height_lb');
                      // correct position for artice modals (previwes)
                      logger.debug('\n' + 'adjust positions of all modals on id: ');
                      var preview_modals = $("#image_fixed_height_lb > .article-modal");
                      $.each($(preview_modals), function(index, modal) {
                          $(modal).attr('style', 'left: 0%');
                      });
                    });
                    // setup the grid
                    //
                    logger.info('\n' + 'grid is being setup on id: ' + 'image_fixed_height_lb');
                    var $grid_image_fixed_height_lb = $grid_image_fixed_height_lb.masonry({
                      percentPosition:        true,
                      horizontalOrder:        true,
                      originLeft:             true,
                      originTop:              true,
                      initLayout:             true,
                      transitionDuration:     "0.8s",
                      stagger:                "0.03s",
                      resize:                 true,
                      gutter:                 0
                    });
                    // run code after all images are loaded with the grid
                    //
                    $grid_image_fixed_height_lb.imagesLoaded(function() {
                      console.debug("masonry: images loaded on image_fixed_height_lb");
                    }); // END grid|imagesLoaded
                  }, masonryOptions.initTimeout);
                }
                clearInterval(load_dependencies['dependencies_met_html_loaded_image_fixed_height_lb']);
              }, 10); // END dependencies_met_html_loaded
             // ENDIF grid enabled
              logger.info('\n' + 'found masonry grid on id: ' + 'image_variable_height_lb');
              // create dynamic loader variable to setup the grid on id image_variable_height_lb
              dependency = 'dependencies_met_html_loaded_image_variable_height_lb';
              load_dependencies[dependency] = '';
              // initialize the grid if HTML portion successfully loaded
              load_dependencies['dependencies_met_html_loaded_image_variable_height_lb'] = setInterval (function (options) {
                // check if HTML portion of the grid is loaded successfully
                xhrLoadState = j1.xhrDOMState['#image_variable_height_lb_parent'];
                if ( xhrLoadState === 'success' ) {
                  setTimeout (function() {
                    var $grid_image_variable_height_lb = $('#image_variable_height_lb');
                    logger.info('\n' + 'initialize grid on id: ' + 'image_variable_height_lb');
                    // grid event handler
                    logger.info('\n' + 'install event handlers for grid on id: ' + 'image_variable_height_lb');
                    $grid_image_variable_height_lb.on('layoutComplete', function() {
                      // initializing (grid layout) completed
                      logger.debug('\n' + 'initializing layout completed for grid on id: ' + 'image_variable_height_lb');
                      // correct position for artice modals (previwes)
                      logger.debug('\n' + 'adjust positions of all modals on id: ');
                      var preview_modals = $("#image_variable_height_lb > .article-modal");
                      $.each($(preview_modals), function(index, modal) {
                          $(modal).attr('style', 'left: 0%');
                      });
                    });
                    // setup the grid
                    //
                    logger.info('\n' + 'grid is being setup on id: ' + 'image_variable_height_lb');
                    var $grid_image_variable_height_lb = $grid_image_variable_height_lb.masonry({
                      percentPosition:        true,
                      horizontalOrder:        true,
                      originLeft:             true,
                      originTop:              true,
                      initLayout:             true,
                      transitionDuration:     "0.8s",
                      stagger:                "0.03s",
                      resize:                 true,
                      gutter:                 0
                    });
                    // run code after all images are loaded with the grid
                    //
                    $grid_image_variable_height_lb.imagesLoaded(function() {
                      console.debug("masonry: images loaded on image_variable_height_lb");
                    }); // END grid|imagesLoaded
                  }, masonryOptions.initTimeout);
                }
                clearInterval(load_dependencies['dependencies_met_html_loaded_image_variable_height_lb']);
              }, 10); // END dependencies_met_html_loaded
             // ENDIF grid enabled
              logger.info('\n' + 'found masonry grid on id: ' + 'image_variable_height_lg');
              // create dynamic loader variable to setup the grid on id image_variable_height_lg
              dependency = 'dependencies_met_html_loaded_image_variable_height_lg';
              load_dependencies[dependency] = '';
              // initialize the grid if HTML portion successfully loaded
              load_dependencies['dependencies_met_html_loaded_image_variable_height_lg'] = setInterval (function (options) {
                // check if HTML portion of the grid is loaded successfully
                xhrLoadState = j1.xhrDOMState['#image_variable_height_lg_parent'];
                if ( xhrLoadState === 'success' ) {
                  setTimeout (function() {
                    var $grid_image_variable_height_lg = $('#image_variable_height_lg');
                    logger.info('\n' + 'initialize grid on id: ' + 'image_variable_height_lg');
                    // grid event handler
                    logger.info('\n' + 'install event handlers for grid on id: ' + 'image_variable_height_lg');
                    $grid_image_variable_height_lg.on('layoutComplete', function() {
                      // initializing (grid layout) completed
                      logger.debug('\n' + 'initializing layout completed for grid on id: ' + 'image_variable_height_lg');
                      // correct position for artice modals (previwes)
                      logger.debug('\n' + 'adjust positions of all modals on id: ');
                      var preview_modals = $("#image_variable_height_lg > .article-modal");
                      $.each($(preview_modals), function(index, modal) {
                          $(modal).attr('style', 'left: 0%');
                      });
                    });
                    // setup the grid
                    //
                    logger.info('\n' + 'grid is being setup on id: ' + 'image_variable_height_lg');
                    var $grid_image_variable_height_lg = $grid_image_variable_height_lg.masonry({
                      percentPosition:        true,
                      horizontalOrder:        true,
                      originLeft:             true,
                      originTop:              true,
                      initLayout:             true,
                      transitionDuration:     "0.8s",
                      stagger:                "0.03s",
                      resize:                 true,
                      gutter:                 0
                    });
                    // run code after all images are loaded with the grid
                    //
                    $grid_image_variable_height_lg.imagesLoaded(function() {
                      console.debug("masonry: images loaded on image_variable_height_lg");
                      console.log("masonry: gallery detected on id: image_variable_height_lg");
                      // setup the lightbox
                      //
                      var lg      = document.getElementById("image_variable_height_lg");
                      var gallery = lightGallery(lg, {
                        "plugins":  [lgFullscreen, lgRotate, lgThumbnail],
                        "selector": '.lg-item',
                        "download": false,
                        "alignThumbnails": "left",
                      }); // END lightGallery
                    }); // END grid|imagesLoaded
                  }, masonryOptions.initTimeout);
                }
                clearInterval(load_dependencies['dependencies_met_html_loaded_image_variable_height_lg']);
              }, 10); // END dependencies_met_html_loaded
             // ENDIF grid enabled
              logger.info('\n' + 'found masonry grid on id: ' + 'mixed_video_example');
              // create dynamic loader variable to setup the grid on id mixed_video_example
              dependency = 'dependencies_met_html_loaded_mixed_video_example';
              load_dependencies[dependency] = '';
              // initialize the grid if HTML portion successfully loaded
              load_dependencies['dependencies_met_html_loaded_mixed_video_example'] = setInterval (function (options) {
                // check if HTML portion of the grid is loaded successfully
                xhrLoadState = j1.xhrDOMState['#mixed_video_example_parent'];
                if ( xhrLoadState === 'success' ) {
                  setTimeout (function() {
                    var $grid_mixed_video_example = $('#mixed_video_example');
                    logger.info('\n' + 'initialize grid on id: ' + 'mixed_video_example');
                    // grid event handler
                    logger.info('\n' + 'install event handlers for grid on id: ' + 'mixed_video_example');
                    $grid_mixed_video_example.on('layoutComplete', function() {
                      // initializing (grid layout) completed
                      logger.debug('\n' + 'initializing layout completed for grid on id: ' + 'mixed_video_example');
                      // correct position for artice modals (previwes)
                      logger.debug('\n' + 'adjust positions of all modals on id: ');
                      var preview_modals = $("#mixed_video_example > .article-modal");
                      $.each($(preview_modals), function(index, modal) {
                          $(modal).attr('style', 'left: 0%');
                      });
                    });
                    // setup the grid
                    //
                    logger.info('\n' + 'grid is being setup on id: ' + 'mixed_video_example');
                    var $grid_mixed_video_example = $grid_mixed_video_example.masonry({
                      percentPosition:        true,
                      horizontalOrder:        true,
                      originLeft:             true,
                      originTop:              true,
                      initLayout:             true,
                      transitionDuration:     "0.8s",
                      stagger:                "0.03s",
                      resize:                 true,
                      gutter:                 0
                    });
                    // run code after all images are loaded with the grid
                    //
                    $grid_mixed_video_example.imagesLoaded(function() {
                      console.debug("masonry: images loaded on mixed_video_example");
                      console.log("masonry: gallery detected on id: mixed_video_example");
                      // setup the lightbox
                      //
                      var lg      = document.getElementById("mixed_video_example");
                      var gallery = lightGallery(lg, {
                        "plugins":  [lgThumbnail, lgVideo],
                        "selector": '.lg-item',
                        "download": false,
                        "alignThumbnails": "left",
                        "autoplayFirstVideo": true,
                        // vimeo player options
                        //
                        vimeoPlayerParams: {
                          "autoPlay": true,
                          "byline": 0,
                          "portrait": 0,
                          "color": "CCCCCC"
                        },
                        // wistia player options
                        //
                        wistiaPlayerParams: {
                          "autoPlay": true,
                          "fullscreenButton": true,
                          "muted": false,
                          "qualityControl": false
                        },
                        // youtube player options
                        //
                        youTubePlayerParams: {
                          "autoPlay": true,
                          "modestbranding": 1,
                          "showinfo": 0,
                          "controls": 0
                        },
                        // videojs player options
                        //
                        videojs:        true,
                        videojsTheme:   "vjs-theme-uno",
                        videojsOptions: {
                          "controls": true,
                          "controlBar": {
                            "remainingTimeDisplay": true,
                            "pictureInPictureToggle": false
                          } // END controlBar
                        } // END videojsOptions
                      }); // END lightGallery
                    }); // END grid|imagesLoaded
                  }, masonryOptions.initTimeout);
                }
                clearInterval(load_dependencies['dependencies_met_html_loaded_mixed_video_example']);
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




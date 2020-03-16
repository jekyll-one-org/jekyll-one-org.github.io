
/*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/gallery_customizer.js
 # J1 Adapter for Gallery Customizer
 #
 # Product/Info:
 # https://jekyll.one
 #
 # Copyright (C) 2019 Juergen Adams
 #
 # J1 Template is licensed under the MIT License.
 # For details, see https://jekyll.one
 # -----------------------------------------------------------------------------
 # Adapter generated: 2020-03-16 20:24:48 +0100
 # -----------------------------------------------------------------------------
*/
'use strict';
j1.adapter['gallery_customizer'] = (function (j1, window) {
  var environment       = 'production';
  var galleryOptions    = {};
  var customizerOptions = {};
  var _this;
  var logger;
  var logText;
  // ---------------------------------------------------------------------------
  // Helper functions
  // ---------------------------------------------------------------------------
  function executeFunctionByName(functionName, context /*, args */) {
    // See: https://stackoverflow.com/questions/359788/how-to-execute-a-javascript-function-when-i-have-its-name-as-a-string
    //
    var args = Array.prototype.slice.call(arguments, 2);
    var namespaces = functionName.split(".");
    var func = namespaces.pop();
    for(var i = 0; i < namespaces.length; i++) {
      context = context[namespaces[i]];
    }
    return context[func].apply(context, args);
  }
  // ---------------------------------------------------------------------------
  // Main object
  // ---------------------------------------------------------------------------
  return {
    // -------------------------------------------------------------------------
    // initializer
    // -------------------------------------------------------------------------
    init: function (options) {
      // initialize state flag
      j1.adapter.gallery_customizer.state = 'pending';
      // -----------------------------------------------------------------------
      // Default module settings
      // -----------------------------------------------------------------------
      var settings = $.extend({
        module_name: 'j1.adapter.gallery_customizer',
        generated:   '2020-03-16 20:24:48 +0100'
      }, options);
      galleryOptions    = $.extend({}, {"enabled":true, "xhr_data_path":"/assets/data/galleries.json", "instance_type":"multiple", "rowHeight":170, "galleries":[{"gallery":{"enabled":true, "type":"image", "id":"jg_live_demo", "show_delay":300, "css_classes":"mb-3", "images_path":"/assets/images/gallery/justified_gallery", "thumb_path":"/assets/images/gallery/justified_gallery", "images":["24096687789_c37d45712f_b.jpg", "23753792354_bd75d8dabc_b.jpg", "16961685188_f130144d60_b.jpg", "24014174029_2cfa940264_b.jpg", "13824674674_ca1e482394_b.jpg", "13824322785_104dc0968c_b.jpg", "8842312290_f310d491f4_b.jpg", "8811828736_88392f614a_b.jpg", "8400794773_932654a20e_b.jpg", "8157236803_78aa1698b6_b.jpg", "7948632554_01f6ae6b6f_b.jpg", "7822678460_ee98ff1f69_b.jpg", "7002395006_29fdc85f7a_b.jpg", "7062575651_b23918b11a_b.jpg", "6841267340_855273fd7e_b.jpg", "6791628438_affaa19e10_b.jpg", "6916180091_9c9559e463_b.jpg", "6880502467_d4b3c4b2a8_b.jpg", "6876412479_6268c6e2aa_b.jpg", "6840627709_92ed52fb41_b.jpg"], "captions_gallery":["Peace of mind", "Abu Dhabi", "Never stop climbing", "Terme", "Deep sea", "Above the World", "The Spring", "Cat firmness", "Into the Sea", "Bologna's T-Day", "Just in a dream Place", "Erice", "Freedom", "Maybe spring", "Love", "These are the colors I love", "The Hope", "Florence streets. Florence people.", "I Love You", "The painter in Florence"], "captions_lightbox":"", "gallery_options":{"rowHeight":120, "margins":1}, "lightbox_options":{"lightbox":"lg", "mode":"lg-fade", "cssEasing":"cubic-bezier(0.25, 0, 0.25, 1)"}}}, {"gallery":{"enabled":true, "type":"image", "id":"jg_customizer", "show_delay":250, "css_classes":"mb-3", "images_path":"/assets/images/gallery/mega_cities", "thumb_path":"/assets/images/gallery/mega_cities", "images":["banter-snaps_b.jpg", "denys-nevozhai-1_b.jpg", "gints-gailis_b.jpg", "steven-diaz_b.jpg", "denys-nevozhai-2_b.jpg", "johan-mouchet_b.jpg", "emmad-mazhari_b.jpg", "federico-rizzarelli_b.jpg", "andreas-brucker_b.jpg", "thomas-tucker_b.jpg", "luca-bravo_b.jpg", "ethan-brooke_b.jpg", "oskars-sylwan_b.jpg"], "captions_gallery":["Osaka - Japan", "Man posing at the rooftop of Jin Mao Tower Shanghai - China", "Shangri-La Hotel Jakarta - Indonesia", "Tokyo seen from World Trade Center Observation Deck - Japan", "Young couple over Shenzhen - China", "The Queen Bee at the Eureka Tower - Melbourne Southbank Australia", "Chicago - United States", "Shanghai - China", "Cityscape of Bangkok Downtown - Thailand", "Sunset over Taipei City - Taiwan", "Brooklyn Bridge New York - United States", "Lotte World Tower Seoul - South Korea", "New York City", "United States"], "captions_lightbox":"", "gallery_options":{"rowHeight":150, "margins":1}, "lightbox_options":{"lightbox":"lg", "mode":"lg-fade", "cssEasing":"cubic-bezier(0.25, 0, 0.25, 1)"}}}, {"gallery":{"enabled":true, "type":"image", "id":"jg_old_times", "show_delay":300, "title":"Grand Pa around the 1930th", "css_classes":"mb-5", "images_path":"/assets/images/old_times", "thumb_path":"/assets/images/old_times", "images":["image_01.jpg", "image_02.jpg", "image_03.jpg", "image_04.jpg"], "captions_gallery":["Grand Pa's 80th Birthday", "Grand Pa's 80th Birthday", "Grand Pa's annual journey", "Grand Pa's annual journey"], "captions_lightbox":["<p>Grand Pa's 80th Birthday</p><p>Collegues from the Painters Union</p>", "<p>Grand Pa's 80th Birthday</p><p>Family and Friends at the restaurant</p>", "<p>Grand Pa's annual journey</p><p>Down the Rhine</p>", "<p>Grand Pa's annual journey<p><p>Having some Wine</p>"], "gallery_options":{"rowHeight":200, "margins":5}, "lightbox_options":{"lightbox":"lg", "mode":"lg-fade", "cssEasing":"cubic-bezier(0.25, 0, 0.25, 1)"}}}]});
      customizerOptions = $.extend({}, {"enabled":true, "title":"Mega Cities", "xhr_container_id":"customizer", "xhr_data_path":"/assets/data/gallery_customizer/index.html", "gallery_settings":{"rowHeight":150, "maxRowHeight":-1, "justifyLastRow":false, "hideLastRow":false, "margins":1, "border":0, "randomize":false, "sort":false, "refreshTime":200, "refreshSensitivity":0, "justifyThreshold":0.9, "captions":true}});
      _this   = j1.adapter.gallery_customizer;
      logger  = log4javascript.getLogger('j1.adapter.gallery_customizer');
      _this.setState('started');
      logger.info('state: ' + _this.getState());
      logger.info('module is being initialized');
      // ---------------------------------------------------------------------
      // data loader
      // ---------------------------------------------------------------------
      $.when (
        j1.xhrData (
          'j1.adapter.gallery_customizer', {
          xhr_container_id: customizerOptions.xhr_container_id, 
          xhr_data_path:    customizerOptions.xhr_data_path },
          'data_loaded'))
      .then (function (success) {
        if (success) {
          logger.info('loading customizer started on id: #' + customizerOptions.xhr_container_id);
          // -------------------------------------------------------------------
          // initializer
          // -------------------------------------------------------------------
          var dependencies_met_data_loaded = setInterval(function() {
            if (_this.getState() == 'data_loaded') {
              var environment     = 'production';
              var galleryId       = '#jg_customizer';
              var $formId         = $('#jg-customizer-form');
              var $instance       = $('#jg_customizer');
              var kbdDelay        = 750;
              var imageHeightMin  = 40;
              logger.info('loading customizer finished on id: #' + customizerOptions.xhr_container_id);
              // -------------------------------------------------------------------
              // load gallery data
              j1.adapter.jf_gallery.initialize(galleryOptions);
              logger.info('initialize customizer ui|forms');
              if ($formId.length) {
                var timerid;
                $("input[name='rowHeight']").on('input', function (e) {
                  var value = $(this).val();
                  if (value < imageHeightMin) { return false; }
                  if($(this).data('lastval') != value){
                      $(this).data('lastval', value);
                      clearTimeout(timerid);
                      //change action
                      timerid = setTimeout(function() {
                        $instance.justifiedGallery({rowHeight: value});
                        if (environment === 'development') {
                          logText = 'Gallery on ID ' +galleryId+ ' changed rowHeight to: ' +value;
                          logger.info(logText);
                        }
                      }, kbdDelay);
                  };
                  e.stopPropagation();
                });
                $('input[name="rowHeightMax"]').on('input', function (e) {
                  var value = $(this).val();
                  if($(this).data('lastval') != value){
                      $(this).data('lastval', value);
                      clearTimeout(timerid);
                      //change action
                      timerid = setTimeout(function() {
                        $instance.justifiedGallery({maxRowHeight: value});
                        if(environment === 'development') {
                          logText = 'Gallery on ID ' +galleryId+ ' changed maxRowHeight to: ' +value;
                          logger.info(logText);
                        }
                      }, kbdDelay);
                  };
                  e.stopPropagation();
                });
                $('input[name="margins"]').on('input', function (e) {
                  var value = $(this).val();
                  if($(this).data('lastval') != value){
                      $(this).data('lastval', value);
                      clearTimeout(timerid);
                      //change action
                      timerid = setTimeout(function() {
                        $instance.justifiedGallery({margins: value});
                        if(environment === 'development') {
                          logText = 'Gallery on ID ' +galleryId+ ' changed margins to: ' +value;
                          logger.info(logText);
                        }
                      }, kbdDelay);
                  };
                  e.stopPropagation();
                });
                $('input[name="border"]').on('input', function (e) {
                  var value = $(this).val();
                  if($(this).data('lastval') != value){
                      $(this).data('lastval', value);
                      clearTimeout(timerid);
                      //change action
                      timerid = setTimeout(function() {
                        $instance.justifiedGallery({border: value});
                        if(environment === 'development') {
                          logText = 'Gallery on ID ' +galleryId+ ' changed padding to: ' +value;
                          logger.info(logText);
                        }
                      }, kbdDelay);
                  };
                  e.stopPropagation();
                });
                $('input:checkbox[name="captions"]').on('click', function (e) {                  
                  var value = $(this).is(':checked');
                  $instance.justifiedGallery({captions: value});
                  if(environment === 'development') {
                    logText = 'Gallery on ID ' +galleryId+ ' changed captions to: ' +value;
                    logger.info(logText);
                  }
                  e.stopPropagation();
                });
                $('input:checkbox[name="random"]').on('click', function (e) {
                  var value = $(this).is(":checked");
                  $instance.justifiedGallery({randomize: value});
                  if(environment === 'development') {
                    logText = 'Gallery on ID ' +galleryId+ ' changed randomize to: ' +value;
                    logger.info(logText);
                  }
                  e.stopPropagation();
                });
                $('input:checkbox[name="justify_last_row"]').on('click', function (e) {
                  var value = $(this).is(':checked');
                  if (value == true) {
                    value = 'justify';
                    $instance.justifiedGallery({lastRow: value});
                  } else {
                    value = 'nojustify';
                    $instance.justifiedGallery({lastRow: value});
                  }
                  if(environment === 'development') {
                    logText = 'Gallery on ID ' +galleryId+ ' changed lastRow to: ' +value;
                    logger.info(logText);
                  }
                  e.stopPropagation();
                });
                $('input:checkbox[name="hide_last_row"]').on('click', function (e) {                  
                  var value = $(this).is(":checked");
                  if (value == true) {
                    value = 'hide';
                    $instance.justifiedGallery({lastRow: value});
                  } else {
                    value = 'nojustify';
                    $instance.justifiedGallery({lastRow: value});
                  }
                  if(environment === 'development') {
                    logText = 'Gallery on ID ' +galleryId+ ' changed lastRow to: ' +value;
                    logger.info(logText);
                  }
                  e.stopPropagation();
                });
                $('#jg-customizer-form button[name="reset-defaults"]').on('click', function (e) {                  
                  $('#rowHeight').val(customizerOptions.gallery_settings.rowHeight);
                  $('#rowHeightMax').val(customizerOptions.gallery_settings.maxRowHeight);
                  $('#margins').val(customizerOptions.gallery_settings.margins);
                  $('#border').val(customizerOptions.gallery_settings.border);
                  $('input:checkbox[name="captions"]').val("on").filter('[value="on"]').prop('checked', customizerOptions.gallery_settings.captions);
                  $('input:checkbox[name="random"]').val("off").filter('[value="off"]').prop('checked', customizerOptions.gallery_settings.randomize);                  
                  $('input:checkbox[name="justify_last_row"]').val("on").filter('[value="on"]').prop('checked', customizerOptions.gallery_settings.justifyLastRow);
                  $('input:checkbox[name="hide_last_row"]').val("off").filter('[value="off"]').prop('checked', customizerOptions.gallery_settings.hideLastRow);
                  $instance.justifiedGallery({
                    rowHeight:          customizerOptions.gallery_settings.rowHeight,
                    maxRowHeight:       customizerOptions.gallery_settings.maxRowHeight,
                    lastRow:            customizerOptions.gallery_settings.lastRow,
                    margins:            customizerOptions.gallery_settings.margins,
                    border:             customizerOptions.gallery_settings.border,
                    randomize:          customizerOptions.gallery_settings.randomize,
                    sort:               customizerOptions.gallery_settings.sort,
                    refreshTime:        customizerOptions.gallery_settings.refreshTime,
                    refreshSensitivity: customizerOptions.gallery_settings.refreshSensitivity,
                    justifyThreshold:   customizerOptions.gallery_settings.justifyThreshold,
                    captions:           customizerOptions.gallery_settings.captions
                  });
                  if(environment === 'development') {
                    logText = 'Gallery on ID ' +galleryId+ ' reset to default values';
                    logger.info(logText);
                  }
                  e.stopPropagation();
                });
              } // END form events
              // See: https://jsfiddle.net/prathviraj080/vbbbw46a/1/
              $('button.drawer-toggler').click(function(){
                $('button.drawer-toggler span.mdi').toggleClass('mdi-menu mdi-close');
              });
              $('button.drawer-toggler').click(function(){
                $('button.drawer-toggler').toggleClass('fadeIn rotateIn');
              });
              _this.setState('finished');
              logger.info('state: ' + _this.getState());
              logger.info('initializing module finished');
              clearInterval(dependencies_met_data_loaded);
              return true;
            }
          }, 25);
        } // END if success
      })
      .catch(function(error) {
        logger.error('loading html data failed at: j1.xhrData');
        return false;
      }); // End thenable
    }, // END init
    // -------------------------------------------------------------------------
    // messageHandler: MessageHandler for J1 CookieConsent module
    // Manage messages send from other J1 modules
    // -------------------------------------------------------------------------
    messageHandler: function (sender, message) {
      var json_message = JSON.stringify(message, undefined, 2);
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
      //
      // Place handling of other command|action here
      //
      return true;
    }, // END messageHandler
    // -------------------------------------------------------------------------
    // setState
    // Set the current (processing) state of the module
    // -------------------------------------------------------------------------
    setState: function (stat) {
      j1.adapter.gallery_customizer.state = stat;
    }, // END setState
    // -------------------------------------------------------------------------
    // getState
    // Returns the current (processing) state of the module
    // -------------------------------------------------------------------------
    getState: function () {
      return j1.adapter.gallery_customizer.state;
    } // END state
  }; // END return
})(j1, window);


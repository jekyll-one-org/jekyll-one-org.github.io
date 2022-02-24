

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/rtextResizer.js
 # Liquid template to adapt rtextResizer functions
 #
 # Product/Info:
 # https://jekyll.one
 #
 # Copyright (C) 2022 Juergen Adams
 #
 # J1 Template is licensed under the MIT License.
 # For details, see https://jekyll.one
 # -----------------------------------------------------------------------------
 # Adapter generated: 2022-02-24 13:32:56 +0000
 # -----------------------------------------------------------------------------
*/
// -----------------------------------------------------------------------------
// ESLint shimming
// -----------------------------------------------------------------------------
/* eslint indent: "off"                                                       */
// -----------------------------------------------------------------------------
'use strict';
j1.adapter.rtextResizer = (function (j1, window) {
  var environment       = 'development';
  var galleryOptions    = {};
  var customizerOptions = {};
  var _this;
  var logger;
  var logText;
  // ---------------------------------------------------------------------------
  // Main object
  // ---------------------------------------------------------------------------
  return {
    // -------------------------------------------------------------------------
    // initializer
    // -------------------------------------------------------------------------
    init: function (options) {
      // -----------------------------------------------------------------------
      // Default module settings
      // -----------------------------------------------------------------------
      var settings = $.extend({
        module_name: 'j1.adapter.rtextResizer',
        generated:   '2022-02-24 13:32:56 +0000'
      }, options);
      // -----------------------------------------------------------------------
      // Global variable settings
      // -----------------------------------------------------------------------
      _this   = j1.adapter.rtextResizer;
      logger  = log4javascript.getLogger('j1.adapter.rtextResizer');
      // initialize state flag
      _this.setState('started');
      logger.info('\n' + 'state: ' + _this.getState());
      logger.info('\n' + 'module is being initialized');
      /* eslint-disable */
      galleryOptions    = $.extend({}, {"enabled":true, "xhr_data_path":"/assets/data/galleries.json", "instance_type":"multiple", "rowHeight":170, "galleries":[{"gallery":{"enabled":true, "type":"image", "id":"jg_example", "title":"Example of LightGallery Lightbox", "show_delay":250, "css_classes":"mb-3", "images_path":"/assets/images/modules/gallery/mega_cities", "thumb_path":"/assets/images/modules/gallery/mega_cities", "images":["banter-snaps_b.jpg", "denys-nevozhai-1_b.jpg"], "captions_gallery":["Osaka - Japan", "Man posing at the rooftop of Jin Mao Tower Shanghai - China"], "captions_lightbox":[], "gallery_options":{"rowHeight":250, "margins":1}, "lightbox_options":{"lightbox":"lg", "mode":"lg-fade", "cssEasing":"cubic-bezier(0.25, 0, 0.25, 1)"}}}, {"gallery":{"enabled":true, "type":"image", "id":"jg_old_times", "show_delay":200, "title":"GrandPa around the 1930th", "css_classes":"mb-3", "images_path":"/assets/images/modules/gallery/old_times", "thumb_path":"/assets/images/modules/gallery/old_times", "images":["image_01.jpg", "image_02.jpg", "image_03.jpg", "image_04.jpg"], "captions_gallery":["GrandPa's 80th Birthday", "GrandPa's 80th Birthday", "GrandPa's annual journey", "GrandPa's annual journey"], "captions_lightbox":[], "gallery_options":{"rowHeight":200, "margins":5}, "lightbox_options":{"lightbox":"lg", "mode":"lg-fade", "cssEasing":"cubic-bezier(0.25, 0, 0.25, 1)"}}}, {"gallery":{"enabled":true, "type":"image", "id":"jg_customizer", "show_delay":250, "css_classes":"mb-3", "images_path":"/assets/images/modules/gallery/mega_cities", "thumb_path":"/assets/images/modules/gallery/mega_cities", "images":["banter-snaps_b.jpg", "denys-nevozhai-1_b.jpg", "gints-gailis_b.jpg", "steven-diaz_b.jpg", "denys-nevozhai-2_b.jpg", "johan-mouchet_b.jpg", "emmad-mazhari_b.jpg", "federico-rizzarelli_b.jpg", "andreas-brucker_b.jpg", "thomas-tucker_b.jpg", "luca-bravo_b.jpg", "ethan-brooke_b.jpg", "oskars-sylwan_b.jpg"], "captions_gallery":["Osaka - Japan", "Man posing at the rooftop of Jin Mao Tower Shanghai - China", "Shangri-La Hotel Jakarta - Indonesia", "Tokyo seen from World Trade Center Observation Deck - Japan", "Young couple over Shenzhen - China", "The Queen Bee at the Eureka Tower - Melbourne Southbank Australia", "Chicago - United States", "Shanghai - China", "Cityscape of Bangkok Downtown - Thailand", "Sunset over Taipei City - Taiwan", "Brooklyn Bridge New York - United States", "Lotte World Tower Seoul - South Korea", "New York City", "United States"], "captions_lightbox":[], "gallery_options":{"rowHeight":150, "margins":1}, "lightbox_options":{"lightbox":"lg", "mode":"lg-fade", "cssEasing":"cubic-bezier(0.25, 0, 0.25, 1)"}}}, {"gallery":{"enabled":true, "type":"video-html5", "id":"jg_video_html5", "show_delay":300, "title":false, "css_classes":"", "video_path":"https://github.com/jekyll-one-org/jekyll-one-lfs/raw/master/videos", "image_path":"/assets/videos/gallery", "thumb_path":"/assets/videos/gallery", "videos":["video1.mp4", "video2.mp4"], "captions_gallery":["PeckPocketed", "Rollin`Wild"], "captions_lightbox":["<p>CGI Animated Short HD: Student Academy Award Winning <b>PeckPocketed</b> by Kevin Herron</p>", "<p>Rollin`Wild - Short Funny Animated Clips - Film Academy BW</p>"], "poster":["video1-poster.jpg", "video2-poster.jpg"], "gallery_options":{"rowHeight":200, "margins":5}, "lightbox_options":{"lightbox":"lg", "videojs":true, "videojsOptions":{}}}}, {"gallery":{"enabled":true, "type":"video-online", "id":"jg_video_online_youtube", "show_delay":300, "title":false, "css_classes":"", "image_path":"/assets/videos/gallery", "thumb_path":"/assets/videos/gallery", "videos":["https://www.youtube.com/watch?v=X5Cfi7U4eL4", "https://www.youtube.com/watch?v=Nck6BZga7TQ", "https://www.youtube.com/watch?v=F2SXmzk8ve4", "https://www.youtube.com/watch?v=ln3wAdRAim4"], "captions_gallery":["Carpool Karaoke - Lady Gaga", "Carpool Karaoke - Adele", "Carpool Karaoke - Gwen Stefani", "Carpool Karaoke - First Lady Michelle Obama"], "captions_lightbox":["<p>Lady Gaga joins James for a drive through Los Angeles singing her classics and tracks from her new album</p>", "<p>James Corden is about the holidays in London and gets Adele off for a ride through the city. On the way they sing some of their biggest hits and Adele raps Nicki Minaj's <b>monster</b></p>", "<p>Gwen Stefani, Julia Roberts, George Clooney and James Corden singing Holla back girl, there's nothing left to see</p>", "<p>James Corden's White House tour takes an unthinkable turn when First Lady Michelle Obama joins him for a drive around the grounds singing Stevie Wonder and Beyonce</p>"], "poster":["video_gaga-poster.jpg", "video_adele-poster.jpg", "video_gwen-poster.jpg", "video_michelle-poster.jpg"], "gallery_options":{"rowHeight":200, "margins":5}, "lightbox_options":{"lightbox":"lg", "videojs":true, "videojsOptions":{}}}}, {"gallery":{"enabled":true, "type":"video-online", "id":"jg_video_online_vimeo", "show_delay":300, "title":false, "thumb_items":2, "thumb_spacing":5, "thumb_bordered":true, "thumb_animate":true, "css_classes":"", "image_path":"/assets/videos/gallery", "thumb_path":"/assets/videos/gallery", "videos":["https://vimeo.com/175582480", "https://vimeo.com/179528528"], "captions_gallery":["Vogue -  Adriana Lima", "Young Fashion - Kick It Old School"], "captions_lightbox":["<p>Adriana Lima on Vimeo</p>", "<p>Kick It Old School on Vimeo</p>"], "poster":["adriana-lima-poster.jpg", "kick-it-old-school-poster.jpg"], "gallery_options":{"rowHeight":200, "margins":5}, "lightbox_options":{"lightbox":"lg"}}}, {"gallery":{"enabled":true, "type":"video-html5", "id":"jg_video_intro", "show_delay":300, "title":false, "css_classes":"", "video_path":"/assets/videos/tutorials", "image_path":"/assets/videos/tutorials", "thumb_path":"/assets/videos/tutorials", "videos":["web-erzeugen.1.mp4", "web-erzeugen.2.mp4"], "captions_gallery":["Ein Starter Web erzeugen", "Noch ein Starter Web erzeugen"], "captions_lightbox":["<p>Ein Starter Web erzeugen</p>", "<p>Noch ein Starter Web erzeugen</p>"], "poster":["web-erzeugen-poster.jpg", "web-erzeugen-poster.jpg"], "gallery_options":{"rowHeight":200, "margins":5}, "lightbox_options":{"lightbox":"lg", "videojs":true, "videojsOptions":{}}}}, {"gallery":{"enabled":true, "type":"video-online", "id":"jg_tiktok", "show_delay":300, "title":false, "css_classes":"", "image_path":"/assets/videos/tiktok", "thumb_path":"/assets/videos/tiktok", "videos":["https://www.tiktok.com/@octaviaegon/video/6983746143356292357/", "https://www.tiktok.com/@waluschka.w59/video/6984680288114756870/", "https://www.tiktok.com/@octaviaegon/video/6983746143356292357/"], "captions_gallery":["Egon - Einhorn", "Valentina - Mahlzeit!", "Egon - Einhorn"], "captions_lightbox":["<p>Egon - Einhorn</p>", "<p>Valentina - Mahlzeit!</p>", "<p>Egon - Einhorn</p>"], "poster":["einhorn.jpg", "waluschka.jpg", "einhorn.jpg"], "gallery_options":{"rowHeight":400, "margins":5}, "lightbox_options":{"lightbox":"lg"}}}]});
      customizerOptions = $.extend({}, {"enabled":true, "title":"Mega Cities", "xhr_container_id":"customizer", "xhr_data_element":"galleryCustomizer", "xhr_data_path":"/assets/data/gallery_customizer/index.html", "max_gallery_width":1024, "gallery_settings":{"rowHeight":150, "margins":1, "border":0, "captions":true, "randomize":false, "justifyLastRow":false, "hideLastRow":false}});
      /* eslint-enable */
      // -----------------------------------------------------------------------
      // data loader
      // -----------------------------------------------------------------------
      j1.loadHTML ({
        xhr_container_id:   'rtext_resizer_container',
        xhr_data_path:      '/assets/data/rtext_resizer/index.html',
        xhr_data_element:   'rtext_resizer_modal' },
        'j1.adapter.rtextResizer',
        'null'
      );
      // -----------------------------------------------------------------------
      // initializer
      // -----------------------------------------------------------------------
      var dependencies_met_data_loaded = setInterval(function() {
        var logger = log4javascript.getLogger('j1.adapter.rtextResizer');
        if (j1.xhrDOMState['#rtext_resizer_container'] == 'success') {
          var $modalContainer = $('#rtext_resizer_modal');
          logger.info('\n' + 'loading rtext resizer modal finished on id: #' + 'rtext_resizer');
          logger.info('\n' + 'initialize resizer ui');
          if ($modalContainer.length) {
            var environment     = 'development';
            var logger          = log4javascript.getLogger('j1.template.rtext-resizer');
            var $el             = $("main[class*='r-text']");
            var base_classes    = $("main[class*='r-text']").attr('class').replace(/r-text-[0-9]*/g, '');
            var r_text_default  = ' r-text-300';
            var r_text_larger   = ' r-text-400';
            var r_text_largest  = ' r-text-500';
            var cl;
            var value;
            $('input:checkbox[name="textsize-300"]').on('click', function (e) {
              value = $(this).is(':checked');
              $('input:checkbox[name="textsize-400"]').prop('checked', false);
              $('input:checkbox[name="textsize-500"]').prop('checked', false);
              if (value == true) {
                cl = r_text_default;
              }
              $el.attr('class', base_classes + cl);
              if(environment === 'development') {
                logText = 'Changed textsize to: ' +cl;
                logger.info(logText);
              }
              e.stopPropagation();
            });
            $('input:checkbox[name="textsize-400"]').on('click', function (e) {
              value = $(this).is(':checked');
              $('input:checkbox[name="textsize-300"]').prop('checked', false);
              $('input:checkbox[name="textsize-500"]').prop('checked', false);
              if (value == true) {
                cl = r_text_larger;
              }
              $el.attr('class', base_classes + cl);
              if(environment === 'development') {
                logText = 'Changed textsize to: ' +cl;
                logger.info(logText);
              }
              e.stopPropagation();
            });
            $('input:checkbox[name="textsize-500"]').on('click', function (e) {
              value = $(this).is(':checked');
              $('input:checkbox[name="textsize-300"]').prop('checked', false);
              $('input:checkbox[name="textsize-400"]').prop('checked', false);
              if (value == true) {
                cl = r_text_largest;
              }
              $el.attr('class', base_classes + cl);
              if(environment === 'development') {
                logText = 'Changed textsize to: ' +cl;
                logger.info(logText);
              }
              e.stopPropagation();
            });
          } // END form events
          _this.setState('finished');
          logger.info('\n' + 'state: ' + _this.getState());
          logger.info('\n' + 'initializing module finished');
          logger.info('\n' + 'met dependencies for: loadHTML');
          clearInterval(dependencies_met_data_loaded);
        } // END dependencies_met_data_loaded
      }, 25);
    }, // END init
    // -------------------------------------------------------------------------
    // messageHandler: MessageHandler for J1 CookieConsent module
    // Manage messages send from other J1 modules
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




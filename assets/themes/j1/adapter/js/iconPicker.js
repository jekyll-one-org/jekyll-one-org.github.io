

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/iconPicker.js
 # J1 Adapter for the iconPicker module
 #
 # Product/Info:
 # https://jekyll.one
 #
 # Copyright (C) 2023 Juergen Adams
 #
 # J1 Theme is licensed under the MIT License.
 # For details, see: https://github.com/jekyll-one-org/j1-template/blob/main/LICENSE.md
 # -----------------------------------------------------------------------------
 # NOTE:
 # -----------------------------------------------------------------------------
 #  Adapter generated: 2023-09-21 15:09:10 +0200
 # -----------------------------------------------------------------------------
*/
// -----------------------------------------------------------------------------
// ESLint shimming
// -----------------------------------------------------------------------------
/* eslint indent: "off"                                                       */
// -----------------------------------------------------------------------------
'use strict';
j1.adapter.iconPicker = (function (j1, window) {
var environment           = 'development';
var state                 = 'not_started';
var iconPickerDefaults;
var iconPickerSettings;
var iconPickerOptions;
var frontmatterOptions;
var icon_picker;
var icon_picker_button_id;
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
      // -----------------------------------------------------------------------
      // Default module settings
      // -----------------------------------------------------------------------
      var settings = $.extend({
        module_name: 'j1.adapter.iconPicker',
        generated:   '2023-09-21 15:09:10 +0200'
      }, options);
      // -----------------------------------------------------------------------
      // Global variable settings
      // -----------------------------------------------------------------------
      // create settings object from frontmatter
      frontmatterOptions = options != null ? $.extend({}, options) : {};
      // create settings object from module options
      iconPickerDefaults = $.extend({}, {"enabled":false, "picker_button_id":"icon_picker", "iconLibraries":["mdi-icons-base.min.json", "mdi-icons-light.min.json", "font-awesome.min.json"], "iconLibrariesCss":["https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/7.2.96/css/materialdesignicons.min.css", "https://cdn.jsdelivr.net/npm/@mdi/light-font@0.2.63/css/materialdesignicons-light.min.css", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"]});
      iconPickerSettings = $.extend({}, {"enabled":true, "allowEmpty":false, "pickers":[{"picker":null, "enabled":false, "id":"base", "picker_button_id":"icon_picker_base", "iconLibraries":["mdi-icons-light.min.json"], "iconLibrariesCss":["/assets/themes/j1/core/css/icon-fonts/mdil.min.css"]}, {"picker":null, "enabled":false, "id":"mdi", "picker_button_id":"icon_picker_base", "iconLibraries":["mdi-icons-base.min.json"], "iconLibrariesCss":["/assets/themes/j1/core/css/icon-fonts/mdib.min.css"]}]});
      iconPickerOptions  = $.extend(true, {}, iconPickerDefaults, iconPickerSettings, frontmatterOptions);
      _this  = j1.adapter.iconPicker;
      logger = log4javascript.getLogger('j1.adapter.iconPicker');
      // -----------------------------------------------------------------------
      // initializer
      // -----------------------------------------------------------------------
      var dependencies_met_page_ready = setInterval (function (options) {
        var pageState     = $('#no_flicker').css("display");
        var pageVisible   = (pageState == 'block') ? true : false;
        if (j1.getState() === 'finished' && pageVisible) {
          icon_picker_button_id = '#' + iconPickerDefaults.picker_button_id;
          _this.setState('started');
          logger.debug('\n' + 'state: ' + _this.getState());
          logger.info('\n' + 'module is being initialized on id: ' + icon_picker_button_id);
          icon_picker = new UniversalIconPicker(icon_picker_button_id, {
            allowEmpty:       iconPickerOptions.allowEmpty,
            iconLibraries:    iconPickerOptions.iconLibraries,
            iconLibrariesCss: iconPickerOptions.iconLibrariesCss,
            onSelect: function(jsonIconData) {
              // copy selected icon to clipboard (iconClass)
              var copyFrom = document.createElement('textarea');
              copyFrom.value = jsonIconData.iconClass;
              document.body.appendChild(copyFrom);
              copyFrom.select();
              document.execCommand('copy');
              // Remove data element from body
              setTimeout(function () {
                document.body.removeChild(copyFrom);
              }, 500);
            }
          });
          // save config settings into the toccer object for later access
          //
          _this['icon_picker']    = icon_picker;
          _this['moduleOptions']  = iconPickerOptions;
          _this.setState('finished');
          logger.debug('\n' + 'state: ' + _this.getState());
          logger.info('\n' + 'initializing module finished');
          clearInterval(dependencies_met_page_ready);
        }
      }, 10);
    }, // END init
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





/*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/translator.js
 # JS Adapter for J1 Translate
 #
 #  Product/Info:
 #  http://jekyll.one
 #
 #  Copyright (C) 2021 Juergen Adams
 #
 #  J1 Template is licensed under MIT License.
 #  See: https://github.com/jekyll-one/J1 Template/blob/master/LICENSE
 # -----------------------------------------------------------------------------
 #  Adapter generated: 2021-10-25 23:55:25 +0000
 # -----------------------------------------------------------------------------
*/
// -----------------------------------------------------------------------------
// ESLint shimming
// -----------------------------------------------------------------------------
/* eslint indent: "off"                                                       */
/* eslint quotes: "off"                                                       */
// -----------------------------------------------------------------------------
// https://github.com/EdwardBalaj/Simple-DeepL-API-Integration
// https://github.com/marghoobsuleman/ms-Dropdown
// https://www.marghoobsuleman.com/image-dropdown/help
// https://www.marghoobsuleman.com/image-dropdown/advanced-help
'use strict';
j1.adapter['translator'] = (function (j1, window) {
  var environment       = 'development';
  var tracking_enabled  = ('false' === 'true') ? true: false;    // Analytics/GA enabled?
  var moduleOptions     = {};
  var user_translate    = {};
  var _this;
  var $modal;
  var cookie_names;
  var user_consent;
  var logger;
  var url;
  var baseUrl;
  var hostname;
  var domain;
  var cookie_domain;
  var secure;
  var logText;
  var cookie_written;
  var modal_language;
  var navigator_language;
  var translation_language;
  var ddSourceLanguage;
  var head;
  var script;
  var languageList;
  // ---------------------------------------------------------------------------
  // helper functions
  // ---------------------------------------------------------------------------
  function setCookie(options /*cName, cValue, expDays*/) {
    var defaults = {
        name: '',
        path: '/',
        expires: 0,
        domain: 'localhost'
    };
    var settings = $.extend(defaults, options);
    var date = new Date();
    date.setTime(date.getTime() + (settings.expires * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    // document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
    // document.cookie = settings.name + "=" + settings.data  + "; " + expires + "; path=/";
    document.cookie = settings.name + "=" + settings.data  + "; path=/";
  };
  // ---------------------------------------------------------------------------
  // Main object
  // ---------------------------------------------------------------------------
  return {
    // -------------------------------------------------------------------------
    // Initializer
    // -------------------------------------------------------------------------
    init: function (options) {
      // -----------------------------------------------------------------------
      // globals
      // -----------------------------------------------------------------------
      _this                 = j1.adapter.translator;
      logger                = log4javascript.getLogger('j1.adapter.translator');
      url                   = new liteURL(window.location.href);
      baseUrl               = url.origin;
      hostname              = url.hostname;
      domain                = hostname.substring(hostname.lastIndexOf('.', hostname.lastIndexOf('.') - 1) + 1);
      secure                = (url.protocol.includes('https')) ? true : false;
      modal_language        = "en";
      navigator_language    = navigator.language || navigator.userLanguage;     // userLanguage for MS IE compatibility
      translation_language  = navigator_language.split('-')[0];
      cookie_names          = j1.getCookieNames();
      head                  = document.getElementsByTagName('head')[0];
      script                = document.createElement('script');
      script.id             = 'google-translate';
      script.src            = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      user_translate = {
        'translatorName':           'google',
        'translationEnabled':       false,
        'analysis':                 true,
        'personalization':          true,
        'translateAllPages':        true,
        'useLanguageFromBrowser':   true,
        'translationLanguage':      translation_language,
      };
      if (j1.existsCookie(cookie_names.user_translate)) {
        user_translate = j1.readCookie(cookie_names.user_translate);
      } else {
        logger.debug('\n' + 'write to cookie : ' + cookie_names.user_translate);
        cookie_written = j1.writeCookie({
          name:     cookie_names.user_translate,
          data:     user_translate,
          samesite: 'Strict',
          expires:  365
        });
      }
      // set domain used by cookies
      if(domain !== 'localhost') {
        cookie_domain = '.' + hostname;
      } else {
        cookie_domain = hostname;
      }
      // initialize state flag
      _this.state = 'pending';
      // _this.settings.languageList = '/assets/data/ms_select.json';
      // -----------------------------------------------------------------------
      // Default module settings
      // -----------------------------------------------------------------------
      var settings = $.extend({
        module_name: 'j1.adapter.translator',
        generated:   '2021-10-25 23:55:25 +0000'
      }, options);
      // Load  module DEFAULTS|CONFIG
      /* eslint-disable */
      moduleOptions = $.extend({}, {"enabled":true, "translationEnabled":false, "translatorName":"google", "languages":["all"], "translationLanguage":"auto", "translateAllPages":true, "hideTranslatorIcon":false, "hideSuggestionBox":true, "hidePoweredBy":true, "hideTopFrame":true, "reloadPageOnChange":true, "postSelectionCallback":"j1.adapter.translator.cb", "contentURL":"/assets/data/translator", "dialogLanguage":"auto", "dialogLanguages":["en", "de"], "cookieName":"j1.user.translate", "cookieConsentName":"j1.user.consent", "xhrDataElement":"google-data", "dialogContainerID":"translator-dialog", "modal_settings":{"title":{"en":"Google Translate", "de":"Google Übersetzer"}, "body_text":{"en":"This website uses the free service <em>Google Translate</em> to translate the content into 100+ languages in a matter of seconds. The <b>language</b> for translation is taken <b>automatically</b> from the language settings of your <b>browser</b>. If you do <b>not</b> want translation anymore, <b>disable</b> the service in section <b>My Settings</b>. <br><br> Your current language setting for translation is: <!-- source language --> <div id=\"google-translator-source-language\" class=\"mb-3\">\n  <select id=\"translate-source-language\" name=\"translate-source-language\" is=\"ms-dropdown\">\n    <option value=\"BG\" data-image-css=\"flag-icon flag-icon-bg rectangle size-md\"> Bulgarian</option>\n    <option value=\"CS\" data-image-css=\"flag-icon flag-icon-cz rectangle size-md\"> Czech</option>\n    <option value=\"DA\" data-image-css=\"flag-icon flag-icon-dk rectangle size-md\"> Danish</option>\n    <option selected value=\"DE\" data-image-css=\"flag-icon flag-icon-de rectangle size-md\"> German</option>\n    <option value=\"EL\" data-image-css=\"flag-icon flag-icon-gr rectangle size-md\"> Greek</option>\n    <option value=\"ES\" data-image-css=\"flag-icon flag-icon-es rectangle size-md\"> Spanish</option>\n    <option value=\"EN\" data-image-css=\"flag-icon flag-icon-gb rectangle size-md\"> English</option>\n    <option value=\"EN-US\" data-image-css=\"flag-icon flag-icon-us rectangle size-md\"> English (American)</option>\n    <option value=\"EN-GB\" data-image-css=\"flag-icon flag-icon-gb rectangle size-md\"> English (British)</option>\n    <option value=\"ET\" data-image-css=\"flag-icon flag-icon-ee rectangle size-md\"> Estonian</option>\n    <option value=\"FI\" data-image-css=\"flag-icon flag-icon-fi rectangle size-md\"> Finnish</option>\n    <option value=\"FR\" data-image-css=\"flag-icon flag-icon-fr rectangle size-md\"> French</option>\n    <option value=\"HU\" data-image-css=\"flag-icon flag-icon-hu rectangle size-md\"> Hungarian</option>\n    <option value=\"IT\" data-image-css=\"flag-icon flag-icon-it rectangle size-md\"> Italian</option>\n    <option value=\"JA\" data-image-css=\"flag-icon flag-icon-jp rectangle size-md\"> Japanese</option>\n    <option value=\"LV\" data-image-css=\"flag-icon flag-icon-lv rectangle size-md\"> Latvian</option>\n    <option value=\"LT\" data-image-css=\"flag-icon flag-icon-lt rectangle size-md\"> Lithuanian</option>\n    <option value=\"NL\" data-image-css=\"flag-icon flag-icon-nl rectangle size-md\"> Dutch</option>\n    <option value=\"PL\" data-image-css=\"flag-icon flag-icon-pl rectangle size-md\"> Polish</option>\n    <option value=\"PT\" data-image-css=\"flag-icon flag-icon-pt rectangle size-md\"> Portuguese</option>\n    <option value=\"PT-PT\" data-image-css=\"flag-icon flag-icon-pt rectangle size-md\"> Portuguese (Portugal)</option>\n    <option value=\"PT-BR\" data-image-css=\"flag-icon flag-icon-br rectangle size-md\"> Portuguese (Brazilian)</option>\n    <option value=\"RO\" data-image-css=\"flag-icon flag-icon-ro rectangle size-md\"> Romanian</option>\n    <option value=\"RU\" data-image-css=\"flag-icon flag-icon-ru rectangle size-md\"> Russian</option>\n    <option value=\"SK\" data-image-css=\"flag-icon flag-icon-sk rectangle size-md\"> Slovak</option>\n    <option value=\"SL\" data-image-css=\"flag-icon flag-icon-sl rectangle size-md\"> Slovenian</option>\n    <option value=\"SV\" data-image-css=\"flag-icon flag-icon-sk rectangle size-md\"> Swedish</option>\n    <option value=\"ZH\" data-image-css=\"flag-icon flag-icon-cn rectangle size-md\"> Chinese</option>                                          </select>\n</div> <!-- test element to create msDropdowns dynamically from JSON --> <div id=\"dropdowsJSON\" class=\"mb-3\" style=\"display:none\"></div> <br>\n", "de":"Diese Website nutzt den kostenlosen Dienst <em>Google Translate</em>, um die Inhalte in Sekundenschnelle in über 100+ Sprachen zu übersetzen. Die <b>Sprache</b> für die Übersetzung wird <b>automatisch</b> aus den Spracheinstellungen Ihres <b>Browsers</b> übernommen. Wenn Sie <b>keine</b> Übersetzung mehr wünschen, <b>deaktivieren</b> Sie den Dienst im Abschnitt <b>Meine Einstellungen</b>. <br><br> Ihre aktuelle Spracheinstellung für die Übersetzung ist: <br><br> <span id=\"translator-current-language\"> <i class=\"flag-icon flag-icon-de rectangle size-md \"></i> German <span> <br>\n"}, "privacy_notice":{"en":"The free service from <em>Google Translate</em> uses cookies to provide its services, personalize advertising and run traffic analysis To use the service, your consent on using cookies is required. Find more information about at the Google <a href=\"https://policies.google.com/\" target=\"_blank\" rel=\"noopener\">Privacy Policy</a> <br><br> <code>Analysis</code> For translations, your consent on <b>Analysis</b> with your <b>Privacy Settings</b> is required. <br><br> <code>Personalization</code> For translations, your consent on <b>Personalization</b> with your <b>Privacy Settings</b> is required.\n", "de":"Der kostenlose Dienst von <em>Google Translate</em> verwendet Cookies um seine Dienste bereitzustellen, Werbung zu personalisieren und Verkehrsanalysen durchzuführen: <br><br> <code>Analysen</code> Für die Nutzung von Übersetzungen ist Ihre Zustimmung zu <b>Analysen</b> in den Einstellungen <code>Ihre Privatsphäre</code> erforderlich. <br><br> <code>Personalisierung</code> Für die Nutzung von Übersetzungen ist Ihre Zustimmung zur <b>Personalisierung</b> in den Einstellungen <code>Ihre Privatsphäre</code> erforderlich.\n"}}});
      /* eslint-enable */
      if (typeof settings !== 'undefined') {
        moduleOptions = j1.mergeData(moduleOptions, settings);
      }
      // -----------------------------------------------------------------------
      // initializer
      // -----------------------------------------------------------------------
      var dependencies_met_page_ready = setInterval (function (options) {
        user_consent = j1.readCookie(cookie_names.user_consent);
        if ( j1.getState() === 'finished' ) {
          _this.setState('started');
          logger.info('\n' + 'state: ' + _this.getState());
          logger.info('\n' + 'module is being initialized');
          if ($('google_translate_element')) {
            $('google_translate_element').hide();
          }
          // show|hide translate button if enabled
          if (moduleOptions.hideTranslatorIcon) {
            if (!user_consent.analysis || !user_consent.personalization) {
              // disable google translate button if visible
              if ($('#quickLinksTranslateButton').css('display') === 'block')  {
                $('#quickLinksTranslateButton').css('display', 'none');
              }
            }
            if (user_consent.analysis && user_consent.personalization) {
              // enable google translate button if not visible
              if ($('#quickLinksTranslateButton').css('display') === 'none')  {
                $('#quickLinksTranslateButton').css('display', 'block');
              }
            }
          }
          // update user_translate cookie
          user_translate.analysis         = user_consent.analysis;
          user_translate.personalization  = user_consent.personalization;
          cookie_written = j1.writeCookie({
            name:     cookie_names.user_translate,
            data:     user_translate,
            samesite: 'Strict',
            secure:   secure
          });
          j1.translator = new Translator({
            contentURL:             moduleOptions.contentURL,                   // dialog content (modals) for all supported languages
            cookieName:             moduleOptions.cookieName,                   // the name of the User State Cookie (primary data)
            cookieConsentName:      moduleOptions.cookieConsentName,            // the name of the Cookie Consent Cookie (secondary data)
            dialogContainerID:      moduleOptions.dialogContainerID,            // dest container, the dialog modal is loaded (dynamically)
            dialogLanguage:         moduleOptions.dialogLanguage,               // language for the dialog (modal)
            translationLanguage:    translation_language,                       // language for translation
            translationEnabled:     moduleOptions.translationEnabled,           // run translation enabled|disabled
            translatorName:         moduleOptions.translatorName,               // translator for translation
            translationLanguage:    moduleOptions.translationLanguage,          // language for translation
            xhrDataElement:         moduleOptions.xhrDataElement,               // container for all language-specific dialogs (modals)
            postSelectionCallback:  function () {j1.adapter.translator.cb()}
          });
          if (user_consent.analysis && user_consent.personalization && user_translate.translationEnabled) {
            if (moduleOptions.translatorName === 'google') {
              head.appendChild(script);
              $('google_translate_element').hide();
            }
          } else {
            if (moduleOptions.translatorName === 'google') {
              j1.removeCookie({name: 'googtrans'});
              // j1.removeCookie({name: 'CONSENT'});
              // j1.removeCookie({name: 'NID'});
              // j1.removeCookie({name: 'OTZ'});
           }
          }
          _this.setState('finished');
          logger.info('\n' + 'state: ' + _this.getState());
          logger.debug('\n' + 'module initialized successfully');
          clearInterval(dependencies_met_page_ready);
        }
      });
    }, // END init
    // -------------------------------------------------------------------------
    // messageHandler: MessageHandler for J1 google_translate module
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
    }, // END getState
    // -------------------------------------------------------------------------
    // cb()
    // Called by the translator CORE module after the user has
    // made his selection (callback)
    // -------------------------------------------------------------------------
    cb: function () {
      var cookie_names   = j1.getCookieNames();
      var user_state     = j1.readCookie(cookie_names.user_state);
      var user_consent   = j1.readCookie(cookie_names.user_consent);
      var user_translate = j1.readCookie(cookie_names.user_translate);
      var head;
      var script;
      var srcLang;
      var destLang;
      var transCode;
      var cookie_written;
      logger.info('\n' + 'entered post selection callback from google_translate');
      logger.debug('\n' + 'current values from cookie consent: ' + JSON.stringify(user_consent));
      logger.debug('\n' + 'current values from user state: ' + JSON.stringify(user_state));
      // update cookie consent settings
      user_consent.analysis = user_translate.analysis;
      user_consent.personalization = user_translate.personalization;
      cookie_written = j1.writeCookie({
        name:     cookie_names.user_consent,
        data:     user_consent,
        samesite: 'Strict',
        secure:   secure,
        expires:  0
      });
      if (user_consent.analysis && user_consent.personalization)  {
        // detect changes on the last element on your page, cause then
        // you know all elements above is translated.
        // $('#j1_footer').bind('DOMSubtreeModified', function() {
        //       var val = $(this);
        //       var strlang = "" + val[0].innerText + "";
        //       console.log(strlang); // print your selected language in console
        // });
        // $('#google_translate_element').bind('DOMSubtreeModified', function() {
        //     var val = $(this);
        //     var strlang = "" + val[0].innerText + "";
        //     console.log(strlang); // print your selected language in console
        // });
        // remove class dropcap
//      $('.dropcap').children('span').removeClass('j1-dropcap');
        // remove span dropcap !!!
//      $('.dropcap').children('span').remove();
        // $('.dropcap').children('span').removeClass('j1-dropcap');
        // $('.paragraph.dropcap').parent().find('p').removeClass('j1-dropcap');
        head       = document.getElementsByTagName('head')[0];
        script     = document.createElement('script');
        script.id  = 'google-translate';
        script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
        if (user_translate.translationEnabled && moduleOptions.translatorName === 'google') {
          head.appendChild(script);
          if ($('google_translate_element')) {
            $('google_translate_element').hide();
          }
          srcLang   = "en";
          destLang  = translation_language;
          transCode = '/' + srcLang + '/' + destLang;
          // set language
          setCookie({
            name: 'googtrans',
            data: transCode
          });
          // enable google transalate button if not visible
          if ($('#quickLinksTranslateButton').css('display') === 'none')  {
            $('#quickLinksTranslateButton').css('display', 'block');
          }
        } else {
          user_translate.translationEnabled = false;
          cookie_written = j1.writeCookie({
            name:     cookie_names.user_translate,
            data:     user_translate,
            samesite: 'Strict',
            secure:   secure
          });
          var el = document.getElementById(script.id);
          if (el) { el.remove(); }
          el = document.getElementById('google_translate_element');
          if (el) { el.remove(); }
          j1.removeCookie({name: 'googtrans'});
          // j1.removeCookie({name: '1P_JAR'});
          // j1.removeCookie({name: 'CONSENT'});
          // j1.removeCookie({name: 'NID'});
        }
      }
      if (!user_translate.analysis || !user_translate.personalization) {
        head       = document.getElementsByTagName('head')[0];
        script     = document.createElement('script');
        script.id  = 'google-translate';
        // script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
        var el = document.getElementById(script.id);
        // update cookie consent settings
        user_consent.analysis = user_translate.analysis;
        user_consent.personalization = user_translate.personalization;
        cookie_written = j1.writeCookie({
          name:     cookie_names.user_consent,
          data:     user_consent,
          samesite: 'Strict',
          secure:   secure,
          expires:  0
        });
        user_translate.translationEnabled = false;
        cookie_written = j1.writeCookie({
          name:     cookie_names.user_translate,
          data:     user_consent,
          samesite: 'Strict',
          secure:   secure,
          expires:  0
        });
        if (el) { el.remove(); }
        el = document.getElementById('google_translate_element');
        if (el) { el.remove(); }
        j1.removeCookie({name: 'googtrans'});
      }
      if (moduleOptions.reloadPageOnChange) {
        // reload current page (skip cache)
        location.reload(true);
      }
      // disable google translate button if visible
      if ($('#quickLinksTranslateButton').css('display') === 'block')  {
        $('#quickLinksTranslateButton').css('display', 'none');
      }
    } // END cbCookie
  }; // END return
})(j1, window);



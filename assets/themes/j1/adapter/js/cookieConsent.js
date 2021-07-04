
/*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/cookieConsent.js
 # JS Adapter for J1 CookieConsent
 #
 #  Product/Info:
 #  https://shaack.com
 #  http://jekyll.one
 #
 #  Copyright (C) 2020 Stefan Haack
 #  Copyright (C) 2021 Juergen Adams
 #
 #  bootstrap-cookie-banner is licensed under MIT License.
 #  See: https://github.com/shaack/bootstrap-cookie-banner/blob/master/LICENSE
 #  J1 Template is licensed under MIT License.
 #  See: https://github.com/jekyll-one/J1 Template/blob/master/LICENSE
 # -----------------------------------------------------------------------------
 #  Adapter generated: 2021-07-04 10:08:37 +0000
 # -----------------------------------------------------------------------------
*/
// -----------------------------------------------------------------------------
// ESLint shimming
// -----------------------------------------------------------------------------
/* eslint indent: "off"                                                       */
/* eslint quotes: "off"                                                       */
// -----------------------------------------------------------------------------
'use strict';
j1.adapter['cookieConsent'] = (function (j1, window) {
  var environment       = 'production';
  var tracking_enabled  = ('true' === 'true') ? true: false;
  var tracking_id       = 'G-8ZGNE0WE42';
  var tracking_id_valid = (tracking_id.includes('tracking-id')) ? false : true;
  var moduleOptions     = {};
  var _this;
  var $modal;
  var user_cookie;
  var logger;
  var logText;
  // NOTE: RegEx for tracking_id: ^(G|UA|YT|MO)-[a-zA-Z0-9-]+$
  // See: https://stackoverflow.com/questions/20411767/how-to-validate-google-analytics-tracking-id-using-a-javascript-function/20412153
  // ---------------------------------------------------------------------------
  // Helper functions
  // ---------------------------------------------------------------------------
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
      _this   = j1.adapter.cookieConsent;
      logger  = log4javascript.getLogger('j1.adapter.cookieConsent');
      // initialize state flag
      _this.state = 'pending';
      // -----------------------------------------------------------------------
      // Default module settings
      // -----------------------------------------------------------------------
      var settings = $.extend({
        module_name: 'j1.adapter.cookieConsent',
        generated:   '2021-07-04 10:08:37 +0000'
      }, options);
      // Load  module DEFAULTS|CONFIG
      /* eslint-disable */
      moduleOptions = $.extend({}, {"enabled":true, "autoShowDialog":true, "language":"en", "languages":["en", "de"], "contentURL":"/assets/data/cookieconsent", "cookieName":"j1.user.consent", "cookieStorageDays":365, "reloadPageOnChange":false, "xhr_data_element":"consent-data", "whitelisted":["/pages/public/legal/en/privacy"], "consent_modal_title":{"de":"Ihre Privatsphäre", "en":"Your Privacy"}, "body_text":{"en":"This website is using cookies and similar technologies that are required for operation. You are free to decide to give, refuse or withdraw your consent at any time by clicking the <code>My Settings</code> button. Subsequent changes are possible at any time by clicking on the <code>cookie icon</code> in the menu bar. <br><br> Extended cookies are only used with your consent. Additional cookies are used to analyze the usage of this website. Analysis of the use of this website help gives you a better user experience of the website to offer. More information about what data is collected and how they may be passed on to partners can be found in the <code>Privacy Policy</code>. <br><br> Visiting this website, you consent to the use of by clicking the <code>I agree</code> button.\n", "de":"Diese Website nutzt Cookies und ähnliche Technologien, die zum Betrieb erforderlich sind. Es steht Ihnen frei, Ihre Zustimmung jederzeit zu geben, zu verweigern oder zurückzuziehen, indem Sie auf die Schaltfläche <code>Meine Einstellungen</code> klicken. Nachträgliche Änderungen sind jederzeit möglich, indem Sie auf das <code>Cookie-Icon</code> in der Menüleiste klicken. <br><br> Erweiterte Cookies werden nur mit Ihrer Zustimmung verwendet. Zusätzliche Cookies werden eingesetzt, um Analysen der Nutzung dieser Website durchzuführen. Analysen der Nutzung dieser Website helfen dabei, Ihnen ein besseres Nutzungserlebnis der Website zu bieten. Weitere Informationen welche Daten gesammelt und wie sie ggf. an Partner weitergegeben werden finden Sie in der <code>Datenschutzerklärung</code>. <br><br> Für den Besuch dieser Webseite stimmen Sie der Verwendung zu, indem Sie auf die Schaltfläche <code>Einverstanden</code> klicken.\n"}, "privacy_notice":{"en":"The operators of this website take the protection of your personal data seriously. We treat your data confidential and comply with the General Data Protection Regulation (GDPR) of the European Union to protect your privacy. A small set of data is stored in persistent cookies, e.g. what data you agree to be stored in cookies. Persistent cookies have a lifespan of 365 days (a year). We and our partners make use of persistent cookies. Those additional cookies are only used with your consent. <br><br> <code>Necessary</code> data is stored to run base services of this site. This website is based on static content, and no database is used behind it. All information (data) needed to control this site is stored in so-called session cookies. Session cookies are automatically removed by your browser if you close all windows. <br><br> <code>Analysis</code> of the use of this website helps us to optimize your user experience of the website. For analysis, Google Analytics (GA) is used. This website does <b>not</b> transfer any personal data to GA. Implicit personal information, like IP addresses, is anonymized to protect your privacy. <br><br> <code>Personalization</code> is used e.g. to collect user feedback or running advertising campaigns to provide you a website free of charge. Partners like Disqus or Google enables us to provide you excellent personalized services and enables us to finance the costs for running this site.\n", "de":"Die Betreiber dieser Website nehmen den Schutz Ihrer persönlichen Daten ernst. Wir behandeln Ihre Daten vertraulich und halten uns zum Schutz Ihrer Privatsphäre an die Datenschutz-Grundverordnung (DSGVO) der Europäischen Union. In persistenten Cookies wird ein kleiner Datensatz gespeichert, z.B. mit welchen Daten Sie einverstanden sind, in Cookies gespeichert zu werden. Dauerhafte Cookies haben eine Lebensdauer von 365 Tagen (ein Jahr). Wir und unsere Partner verwenden dauerhafte Cookies. Diese zusätzlichen Cookies werden nur mit Ihrer Zustimmung verwendet. <br><br> <code>Notwendige</code> Daten werden gespeichert, um Basisdienste dieser Site zu betreiben. Diese Website basiert auf statischen Inhalten und es wird keine Datenbank dahinter verwendet. Alle Informationen (Daten), die zur Steuerung dieser Seite benötigt werden, werden in sogenannten Session-Cookies gespeichert. Sitzungscookies werden von Ihrem Browser automatisch entfernt, wenn Sie alle Fenster schließen. <br><br> <code>Analysen</code> der Nutzung dieser Website hilft uns, Ihr Nutzungserlebnis der Website zu optimieren. Zur Analyse wird Google Analytics (GA) verwendet. Diese Website übermittelt keine personenbezogenen Daten an GA. Implizite personenbezogene Daten wie IP-Adressen werden zum Schutz Ihrer Privatsphäre anonymisiert. <br><br> <code>Personalisierung</code> wird z.B. um Benutzerfeedback zu sammeln oder Werbekampagnen durchzuführen, um Ihnen eine Website kostenlos zur Verfügung zu stellen. Partner wie Disqus oder Google ermöglichen es uns, Ihnen exzellente personalisierte Dienste anzubieten und die Kosten für den Betrieb dieser Website zu finanzieren.\n"}, "show_cookie_icon":true});
      /* eslint-enable */
      if (typeof settings !== 'undefined') {
        moduleOptions = j1.mergeData(moduleOptions, settings);
      }
      // -----------------------------------------------------------------------
      // initializer
      // -----------------------------------------------------------------------
      _this.setState('started');
      logger.info('state: ' + _this.getState());
      logger.info('module is being initialized');
      j1.cookieConsent = new BootstrapCookieConsent({
        contentURL:             moduleOptions.contentURL,
        cookieName:             moduleOptions.cookieName,
        language:               moduleOptions.language,
        whitelisted:            moduleOptions.whitelisted,
        reloadPageOnChange:     moduleOptions.reloadCurrentPage,
        xhr_data_element:       moduleOptions.xhr_data_element + '-' + moduleOptions.language,
        postSelectionCallback:  function () {
            j1.adapter.cookieConsent.cbCookie()
        }
      });
      var dependencies_met_page_ready = setInterval (function (options) {
        if ( j1.cookieConsent && j1.getState() === 'finished' ) {
          _this.setState('finished');
          logger.info('state: ' + _this.getState());
          logger.debug('module initialized successfully');
          clearInterval(dependencies_met_page_ready);
        }
      });
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
    // cbCookie()
    // Called by CookieConsent module after the user has
    // made his selection (callback)
    // -------------------------------------------------------------------------
    cbCookie: function () {
      var gaCookies     = j1.findCookie('_ga');
      var user_state    = j1.readCookie('j1.user.state');
      var user_consent  = j1.readCookie('j1.user.consent');
      var json          = JSON.stringify(user_consent);
      logger.info('Entered post selection callback from CookieConsent');
      logger.info('Current values from CookieConsent: ' + json);
      // NOTE: Warning needs to be moved to another module
      // because page is reloaded after selection
      //
      if (tracking_enabled && !tracking_id_valid) {
        logger.warn('tracking enabled, but invalid tracking id found: ' + tracking_id);
      }
      // for debugging
      // gaCookies.forEach(item => console.log('cookieConsent: ' + item));
      // Manage Google Analytics OptIn/Out
      // See: https://github.com/luciomartinez/gtag-opt-in/wiki
      if (tracking_enabled && tracking_id_valid) {
        GTagOptIn.register(tracking_id);
        if (user_consent.analyses)  {
          logger.info('Enable: GA');
          GTagOptIn.optIn();
        } else {
          logger.warn('Disable: GA');
          GTagOptIn.optOut();
          var gaCookies = j1.findCookie('_ga');
          gaCookies.forEach(function (item) {
            logger.warn('Delete GA cookie: ' + item);
            j1.removeCookie({
              name: item,
              path: '/'
            });
          });
        }
      }
      // enable cookie button if not visible
      if ($('#quickLinksCookieButton').css('display') === 'none')  {
        $('#quickLinksCookieButton').css('display', 'block');
      }
      if (!user_consent.analyses || !user_consent.personalization)  {
        // expire consent|state cookies to session
        j1.writeCookie({
          name:     'j1.user.state',
          data:     user_state,
          samesite: 'Strict'
        });
        j1.writeCookie({
          name:     'j1.user.consent',
          data:     user_consent,
          samesite: 'Strict'
        });
      }
      // reload page after selection
      location.reload();
    } // END cbCookie
  }; // END return
})(j1, window);



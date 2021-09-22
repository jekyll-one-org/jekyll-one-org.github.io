
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
 #  Adapter generated: 2021-09-22 10:30:38 +0000
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
  var tracking_enabled  = ('false' === 'true') ? true: false;
  var tracking_id       = '<your-tracking-id>';
  var tracking_id_valid = (tracking_id.includes('tracking-id')) ? false : true;
  var comment_provider  = 'hyvor';
  var moduleOptions     = {};
  var _this;
  var $modal;
  var user_cookie;
  var logger;
  var url;
  var baseUrl;
  var hostname;
  var domain;
  var cookie_domain;
  var secure;
  var logText;
  var cookie_written;
  var language;
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
      _this         = j1.adapter.cookieConsent;
      logger        = log4javascript.getLogger('j1.adapter.cookieConsent');
      url           = new liteURL(window.location.href);
      baseUrl       = url.origin;
      hostname      = url.hostname;
      domain        = hostname.substring(hostname.lastIndexOf('.', hostname.lastIndexOf('.') - 1) + 1);
      secure        = (url.protocol.includes('https')) ? true : false;
      language      = "en";
      // set domain used by cookies
      if(domain !== 'localhost') {
        cookie_domain = '.' + hostname;
      } else {
        cookie_domain = hostname;
      }
      // initialize state flag
      _this.state = 'pending';
      // -----------------------------------------------------------------------
      // Default module settings
      // -----------------------------------------------------------------------
      var settings = $.extend({
        module_name: 'j1.adapter.cookieConsent',
        generated:   '2021-09-22 10:30:38 +0000'
      }, options);
      // Load  module DEFAULTS|CONFIG
      /* eslint-disable */
      moduleOptions = $.extend({}, {"enabled":true, "autoShowDialog":true, "languages":["en", "de"], "contentURL":"/assets/data/cookieconsent", "cookieName":"j1.user.consent", "cookieStorageDays":365, "postSelectionCallback":"j1.adapter.cookieConsent.cbCookie", "reloadPageOnChange":true, "sameSite":"Strict", "xhr_data_element":"consent-data", "whitelisted":["/pages/public/legal/en/privacy"], "consent_modal_title":{"de":"Ihre Privatsphäre", "en":"Your Privacy"}, "body_text":{"en":"This website is using cookies and similar technologies that are required for operation. You are free to decide to give, refuse or withdraw your consent at any time by clicking the <code>My Settings</code> button. Subsequent changes are possible at any time by clicking on the <code>cookie icon</code> in the menu bar. <br><br> Extended cookies are only used with your consent. Additional cookies are used to analyze the usage of this website. Analysis of the use of this website help gives you a better user experience of the website to offer. More information about what data is collected and how they may be passed on to partners can be found in the <code>Privacy Policy</code>. <br><br> Visiting this website, you consent to the use of by clicking the <code>I agree</code> button.\n", "de":"Diese Website nutzt Cookies und ähnliche Technologien, die zum Betrieb erforderlich sind. Es steht Ihnen frei, Ihre Zustimmung jederzeit zu geben, zu verweigern oder zurückzuziehen, indem Sie auf die Schaltfläche <code>Meine Einstellungen</code> klicken. Nachträgliche Änderungen sind jederzeit möglich, indem Sie auf das <code>Cookie-Icon</code> in der Menüleiste klicken. <br><br> Erweiterte Cookies werden nur mit Ihrer Zustimmung verwendet. Zusätzliche Cookies werden eingesetzt, um Analysen der Nutzung dieser Website durchzuführen. Analysen der Nutzung dieser Website helfen dabei, Ihnen ein besseres Nutzungserlebnis der Website zu bieten. Weitere Informationen welche Daten gesammelt und wie sie ggf. an Partner weitergegeben werden finden Sie in der <code>Datenschutzerklärung</code>. <br><br> Für den Besuch dieser Webseite stimmen Sie der Verwendung zu, indem Sie auf die Schaltfläche <code>Einverstanden</code> klicken.\n"}, "privacy_notice":{"en":"The operators of this website take the protection of your personal data seriously. We treat your data confidential and comply with the General Data Protection Regulation (GDPR) of the European Union to protect your privacy. A small set of data is stored in persistent cookies, e.g. what data you agree to be stored in cookies. Persistent cookies have a lifespan of 365 days (a year). We and our partners make use of persistent cookies. Those additional cookies are only used with your consent. <br><br> <code>Necessary</code> data is stored to run base services of this site. This website is based on static content, and no database is used behind it. All information (data) needed to control this site is stored in so-called session cookies. Session cookies are automatically removed by your browser if you close all windows. <br><br> <code>Analysis</code> of the use of this website helps us to optimize your user experience of the website. For analysis, Google Analytics (GA) is used. This website does <b>not</b> transfer any personal data to GA. Implicit personal information, like IP addresses, is anonymized to protect your privacy. <br><br> <code>Personalization</code> is used e.g. to provide personal themes, collect visitors feedback or running advertising campaigns to provide you a website free of charge. Partners like Bootswatch, Disqus or Google enables us to provide you excellent personalized services and enables us to finance the costs for running this site.\n", "de":"Die Betreiber dieser Website nehmen den Schutz Ihrer persönlichen Daten ernst. Wir behandeln Ihre Daten vertraulich und halten uns zum Schutz Ihrer Privatsphäre an die Datenschutz-Grundverordnung (DSGVO) der Europäischen Union. In persistenten Cookies wird ein kleiner Datensatz gespeichert, z.B. mit welchen Daten Sie einverstanden sind, in Cookies gespeichert zu werden. Dauerhafte Cookies haben eine Lebensdauer von 365 Tagen (ein Jahr). Wir und unsere Partner verwenden dauerhafte Cookies. Diese zusätzlichen Cookies werden nur mit Ihrer Zustimmung verwendet. <br><br> <code>Notwendige</code> Daten werden gespeichert, um Basisdienste dieser Site zu betreiben. Diese Website basiert auf statischen Inhalten und es wird keine Datenbank dahinter verwendet. Alle Informationen (Daten), die zur Steuerung dieser Seite benötigt werden, werden in sogenannten Session-Cookies gespeichert. Sitzungscookies werden von Ihrem Browser automatisch entfernt, wenn Sie alle Fenster schließen. <br><br> <code>Analysen</code> der Nutzung dieser Website hilft uns, Ihr Nutzungserlebnis der Website zu optimieren. Zur Analyse wird Google Analytics (GA) verwendet. Diese Website übermittelt keine personenbezogenen Daten an GA. Implizite personenbezogene Daten wie IP-Adressen werden zum Schutz Ihrer Privatsphäre anonymisiert. <br><br> <code>Personalisierung</code> wird eingesetzt um Ihnen z.B. personalierte Ansichten der Webseite (Themen) anzubieten, Benutzerfeedback zu sammeln oder Werbekampagnen durchzuführen, um Ihnen diese Website kostenlos zur Verfügung zu stellen. Partner wie Bootswatch, Disqus oder Google ermöglichen es uns, Ihnen exzellente personalisierte Dienste anzubieten sowie die Kosten für den Betrieb dieser Website zu finanzieren.\n"}, "show_cookie_icon":true});
      /* eslint-enable */
      if (typeof settings !== 'undefined') {
        moduleOptions = j1.mergeData(moduleOptions, settings);
      }
      // -----------------------------------------------------------------------
      // initializer
      // -----------------------------------------------------------------------
      var dependencies_met_page_ready = setInterval (function (options) {
        if ( j1.getState() === 'finished' ) {
          _this.setState('started');
          logger.info('\n' + 'state: ' + _this.getState());
          logger.info('\n' + 'module is being initialized');
          j1.cookieConsent = new BootstrapCookieConsent({
            contentURL:             moduleOptions.contentURL,
            cookieName:             moduleOptions.cookieName,
            language:               language,
            whitelisted:            moduleOptions.whitelisted,
            reloadPageOnChange:     moduleOptions.reloadPageOnChange,
            xhr_data_element:       moduleOptions.xhr_data_element + '-' + language,
            sameSite:               moduleOptions.sameSite,
            secure:                 secure,
            postSelectionCallback:  function () {j1.adapter.cookieConsent.cbCookie()}
          });
          _this.setState('finished');
          logger.info('\n' + 'state: ' + _this.getState());
          logger.debug('\n' + 'module initialized successfully');
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
    // cbCookie()
    // Called by CookieConsent module after the user has
    // made his selection (callback)
    // -------------------------------------------------------------------------
    cbCookie: function () {
      var gaCookies           = j1.findCookie('_ga');
      var j1Cookies           = j1.findCookie('j1');
      var cookie_names        = j1.getCookieNames();
      var user_state          = j1.readCookie(cookie_names.user_state);
      var user_consent        = j1.readCookie(cookie_names.user_consent);
      var json                = JSON.stringify(user_consent);
      var user_agent          = platform.ua;
      logger.info('\n' + 'entered post selection callback from CookieConsent');
      logger.info('\n' + 'current values from CookieConsent: ' + json);
      // enable cookie button if not visible
      if ($('#quickLinksCookieButton').css('display') === 'none')  {
        $('#quickLinksCookieButton').css('display', 'block');
      }
      // jadams, 2021-07-11: moved to j1 adapter (displayPage)
      // NOTE: Warning needs to be moved to another module
      // because page is reloaded after selection
      //
      // if (tracking_enabled && !tracking_id_valid) {
      //   logger.error('\n' + 'tracking enabled, but invalid tracking id found: ' + tracking_id);
      // } else {
      //   logger.warn('\n' + 'tracking enabled, tracking id found: ' + tracking_id);
      // }
      logger.debug('\n' + 'j1 cookies found:' + j1Cookies.length);
      j1Cookies.forEach(item => console.log('j1.core.switcher: ' + item));
      logger.debug('\n' + 'ga cookies found:' + gaCookies.length);
      gaCookies.forEach(item => console.log('j1.core.switcher: ' + item));
      if (user_agent.includes('iPad'))  {
        logger.warn('\n' + 'product detected : ' + platform.product);
        logger.warn('\n' + 'skip deleting (unwanted) cookies for this platform');
      }
      // Manage Google Analytics OptIn/Out
      // See: https://github.com/luciomartinez/gtag-opt-in/wiki
      if (tracking_enabled && tracking_id_valid) {
        GTagOptIn.register(tracking_id);
        if (user_consent.analyses)  {
          logger.info('\n' + 'enable: GA');
          GTagOptIn.optIn();
        } else {
          logger.warn('\n' + 'disable: GA');
          GTagOptIn.optOut();
          if (!user_agent.includes('iPad')) {
            gaCookies.forEach(function (item) {
              logger.warn('\n' + 'delete GA cookie: ' + item);
              j1.removeCookie({ name: item, domain: cookie_domain });
            });
          }
        }
        // Managing providers for personalization OptIn/Out (Comments|Ads)
        //
        if (!user_consent.analyses || !user_consent.personalization) {
          // expire consent|state cookies to session
          j1.expireCookie({ name: cookie_names.user_state });
          j1.expireCookie({ name: cookie_names.user_consent });
        }
        if (moduleOptions.reloadPageOnChange) {
          // reload current page (skip cache)
          location.reload(true);
        }
      } else {
        // jadams, 2021-08-10: remove cookies on invalid GA config or left
        // cookies from previous session if they exists
        gaCookies.forEach(function (item) {
          logger.warn('\n' + 'delete GA cookie: ' + item);
          j1.removeCookie({ name: item, domain: cookie_domain });
        });
        // Managing providers for personalization OptIn/Out (Comments|Ads)
        //
        if (!user_consent.analyses || !user_consent.personalization) {
          // expire consent|state cookies to session
          j1.expireCookie({ name: cookie_names.user_state });
          j1.expireCookie({ name: cookie_names.user_consent });
        }
        if (moduleOptions.reloadPageOnChange) {
          // reload current page (skip cache)
          location.reload(true);
        }
      } // END if tracking_enabled
    } // END cbCookie
  }; // END return
})(j1, window);



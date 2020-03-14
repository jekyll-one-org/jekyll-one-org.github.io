
/*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/webhooks.js
 # J1 Adapter for J1 WebHooks
 #
 # Product/Info:
 # https://jekyll.one
 #
 # Copyright (C) 2019 Juergen Adams
 #
 # J1 Template is licensed under the MIT License.
 # For details, see https://jekyll.one
 # -----------------------------------------------------------------------------
 # Adapter generated: 2020-03-14 15:10:06 +0100
 # -----------------------------------------------------------------------------
*/
'use strict';
j1.adapter['webhooks'] = (function (j1, window) {
  var environment               = 'production';
  var moduleOptions             = {};
  var message                   = {};
  var cookie_names              = j1.getCookieNames();
  var cookie_user_session_name  = cookie_names.user_session;
  var ep_util_serv_git_pull;
  var ep_util_serv_npm_rebuilt;
  var logger;
  var logText;
  var _this;
  var json_data;
  var success;
  // ---------------------------------------------------------------------------
  // Main object
  // ---------------------------------------------------------------------------
  return {
    // -------------------------------------------------------------------------
    // Initializer
    // TODO: Support for Git and NPM endpoints needs to be extended for
    // the middleware
    // -------------------------------------------------------------------------
    init: function () {
      // Load  module DEFAULTS|CONFIG
      moduleOptions = $.extend({}, {"enabled":false, "xhr_container_id":"web_hook_modals", "xhr_data_path":"/assets/data/webhook/index.html", "mode":"silent", "commit_detection":{"modal_commit_detected":{"enabled":true, "autohide":false, "autohidden":5000}, "modal_pull_response":{"enabled":false, "autohide":false, "autohidden":5000}}, "git_client":{"enabled":true, "pull":{"execute":true, "response_success":"The pull request to your local working copy finished successfully.", "response_failed":"The pull request to your local working copy has failed. Reason: "}}, "npm_client":{"enabled":true, "built":{"execute":false, "response_success":"The built request to your local site finished successfully.", "response_failed":"The built request to your local fite has failed. Reason: "}}, "secret":"12ada70c0d34914d194f1a790c9b23bd", "payload_url":"https://smee.io/bzTe8lpQq1KeSJF", "private_data":"_data/private.yml", "ssl":false, "origin":"localhost", "host_name":"0.0.0.0", "port":44444, "verbose":false, "oauth_client":{"enabled":true, "provider":"github", "provider_url":"https://github.com", "token_path":"/login/oauth/access_token", "authorize_path":"/login/oauth/authorize"}, "logger_client":{"enabled":true, "payload_url_app":"http://localhost:5000/log2disk?request=write", "payload_url_web":"http://localhost:44444/log2disk?request=write", "log_folder":"log", "log_file_name":"messages", "log_file_ext":"log", "create_on_start":true, "reset_on_start":true, "rolling_files":false, "file_mode":"append"}, "comment":{"name":"j1-template@jekyll-one-org", "user":"j1juergen", "repo":"jekyll-one-org/j1-template", "server_url":"https://github.com/jekyll-one-org/j1-template/settings/hooks"}});
      // Set global variables
      _this                     = j1.adapter.webhooks;
      logger                    = log4javascript.getLogger('j1.adapter.webhooks.init');
      ep_util_serv_git_pull     = 'http://localhost:' + moduleOptions.port + '/git?request=pull';
      ep_util_serv_npm_rebuilt  = 'http://localhost:' + moduleOptions.port + '/npm?request=rebuilt';
      if (j1.checkUserAgent('IE') || j1.checkUserAgent('Edge')) {
        moduleOptions.enabled = false;
        logger.warn('MS browsers does not support server side events (SSE)');
        logger.warn('webhooks disabled');
      }
      // for middleware, currently no ENDPOINTS available for Git and NPM
      if (j1.appDetected()) {
      	logger.warn('webhooks currently disabled for mode: app');
        moduleOptions.enabled = false; 
      }
      if (moduleOptions.enabled) {
        logger.info('webhooks enabled, run initialization');
        _this.setState('started');
        logger.info('state: ' + _this.getState());
        logger.info('module is being initialized');
        // Load webhook modals
        logger.info('loading html data for modals');
        $.when (j1.xhrData('j1.adapter.webhooks', moduleOptions , 'data_loaded'))
        .then (function (success) {
          if (success) {
            // Run initializers if webhook modals are LOADED
            var dependencies_met_modals_loaded = setInterval(function() {
              if (j1.adapter.webhooks.getState() == 'data_loaded') {
                logger.info('loading data completed');
                // Run initializers
                j1.core.webhooks.init(moduleOptions);
                j1.adapter.webhooks.eventHandler(moduleOptions);
                _this.setState('finished');
                logger.info('state: ' + _this.getState());
                // clear interval checking
                clearInterval(dependencies_met_modals_loaded);
              }
            }, 25); // END 'dataLoaded'
          } else {
            _this.setState('finished');
            logger.info('state: ' + _this.getState());
            logger.error('loading modal html data failed');
          }
          return true;
        })
        .catch(function(error) {
          logger.error('loading html data for modals failed at: j1.xhrData');
          return false;
        });
      } else {
        _this.setState('finished');
        logger.info('state: ' + _this.getState());
        logger.info('webhooks disabled, initialization skipped');
        return false;
      } // END if moduleOptions enabled
    }, // END init
    // -------------------------------------------------------------------------
    // EventHandler for J1 Webhooks (UI)
    // Manage button click events for all BS Modals
    // See: https://www.nickang.com/add-event-listener-for-loop-problem-in-javascript/
    // -------------------------------------------------------------------------
    eventHandler: function (options) {
      var message = {};
      var topPosition;
      var logText;
      var json_message;
      logger  = log4javascript.getLogger('j1.adapter.webhooks.eventHandler');
      logText = 'register events';
      logger.info(logText);
      var modalButtons = document.querySelectorAll('a.btn');
      if (modalButtons == 0) {
        logger.warn('no modal buttons found to register');
      }
      // Register button click events for WebHook modals
      // -----------------------------------------------------------------------
      modalButtons.forEach(function(button, index) {
        button.addEventListener('click', function(e) {
          // acceptGitPullButton
          // -------------------------------------------------------------------
          if (this.id === 'acceptGitPullButton') {
            e.preventDefault();
            logger.info('user clicked acceptGitPullButton');
            $.when (j1.xhrApi(ep_util_serv_git_pull))
            .then (function (response) {
              // json_message = JSON.stringify(response, undefined, 2);
              json_message = JSON.stringify(response);
              logText = 'response received: ' + json_message;
              logger.info(logText);
              if (response.status === 'success') {
                $('#gitPullSuccess').find('.pull-message').html(response.response);
                $('#gitPullSuccess').modal('show');
              }
            });
          }
          // declineGitPullButton
          // -------------------------------------------------------------------
          if (this.id === 'declineGitPullButton') {
            e.preventDefault();
            logger.info('user clicked declineGitPullButton');
          }
          // requestFailedOkButton
          // -------------------------------------------------------------------
          if (this.id === 'requestFailedOkButton') {
            e.preventDefault();
            logger.info('user clicked requestFailedOkButton');
          }
        });
      });
      // Register pre/post events for modal 'webhookCommitDetected'
      // -----------------------------------------------------------------------
      $(document).on('shown.bs.modal','#webhookCommitDetected', function (e) {
        e.preventDefault();
        // store y-scroll position on shown
        topPosition = $(window).scrollTop();
        logger.info('display webhookCommitDetected');
        // autohide modal if configured
        if (options.commit_detection.modal_commit_detected.autohide) {
          var timeout = setInterval(function() {
            $('#webhookCommitDetected').modal('hide');
            logger.info('hide modal on timeout');
            // clear interval checking
            clearInterval(timeout);
          }, options.commit_detection.modal_commit_detected.autohidden);
        }
      }); // END shown modal 'webhookCommitDetected'
      $(document).on('hidden.bs.modal','#webhookCommitDetected', function (e) {
        e.preventDefault();
        // restore y-scroll position on hidden
        $(window).scrollTop(topPosition);
        // jadams, 2019-10-06: message NOT send to other open windows|pages
        // disabled for now
        //
        // message.type    = 'command';
        // message.action  = 'close_modals';
        // message.text    = 'close open modals';
        // j1.sendMessage('j1.core.webhooks', 'j1.adapter.webhooks', message);
        logger.info('closed webhookCommitDetected');
      }); // END hide modal 'webhookCommitDetected'
      // Register pre/post events for modal 'gitPullSuccess'
      // close all open Modals
      // see: https://stackoverflow.com/questions/17978043/how-to-close-all-active-bootstrap-modals-on-session-timeout
      // -----------------------------------------------------------------------
      $(document).on('shown.bs.modal','#gitPullSuccess', function (e) {
        e.preventDefault();
        // store y-scroll position on shown
        $(window).scrollTop(topPosition);
        logger.info('display gitPullSuccess');
        // Autohide modal if configured
        if (options.commit_detection.modal_pull_response.autohide) {
          var timeout = setInterval(function() {
            // close all open Modals
            $('.modal').modal('hide');
            logger.info('hide modal on timeout');
            // clear interval checking
            clearInterval(timeout);
          }, options.commit_detection.modal_pull_response.autohidden);
        }
      }); // END shown modal 'gitPullSuccess'
      $(document).on('hidden.bs.modal','#gitPullSuccess', function (e) {
        e.preventDefault();
        // restore y-scroll position on hidden
        $(window).scrollTop(topPosition);
        logger.info('post processing on gitPullSuccess');
      }); // END hidden modal 'gitPullSuccess'
      // Register pre/post events for modal 'npmScriptSuccess'
      // -----------------------------------------------------------------------
      $(document).on('shown.bs.modal','#npmScriptSuccess', function (e) {
        e.preventDefault();
        // store y-scroll position on shown
        $(window).scrollTop(topPosition);
        logger.info('display npmScriptSuccess');
        // Autohide modal if configured
        if (options.commit_detection.modal_pull_response.autohide) {
          var timeout = setInterval(function() {
            // close all open Modals
            $('.modal').modal('hide');
            logger.info('hide modal on timeout');
            // clear interval checking
            clearInterval(timeout);
          }, options.commit_detection.modal_pull_response.autohidden);
        }
      }); // END shown modal 'npmScriptSuccess'
      $(document).on('hidden.bs.modal','#npmScriptSuccess', function (e) {
        e.preventDefault();
        // restore y-scroll position on hidden
        $(window).scrollTop(topPosition);
        logger.info('post processing on npmScriptSuccess');
      }); // END hidden modal 'npmScriptSuccess'
      logText = 'register events finished';
      logger.info(logText);
    }, // END eventHandler
    // -------------------------------------------------------------------------
    // messageHandler
    // Manage messages send from other J1 modules
    // -------------------------------------------------------------------------
    messageHandler: function (sender, message) {
      // var json_message = JSON.stringify(message, undefined, 2);
      var json_message = JSON.stringify(message);
      logText = 'received message from ' + sender + ': ' + json_message;
      logger.info(logText);
      // -----------------------------------------------------------------------
      //  Process commands|actions
      // -----------------------------------------------------------------------
      // -----------------------------------------------------------------------
      //  Command message (action), type 'module_initialized'
      if (message.type === 'command' && message.action === 'module_initialized') {
        //
        // Place handling of command|action here
        //
        logger.info(message.text);
      }
      // -----------------------------------------------------------------------
      //  Command message (action), type (Git) 'pull'
      if (message.type === 'command' && message.action === 'close_modals') {
        logText = 'processing message from ' + sender + ', type: ' + message.type + ', action: ' + message.action;
        logger.info(logText);
        // close all open Modals
        // see: https://stackoverflow.com/questions/17978043/how-to-close-all-active-bootstrap-modals-on-session-timeout
        $('.modal').modal('hide');
      }
      // -----------------------------------------------------------------------
      //  Command message (action), type (Git) 'pull'
      if (message.type === 'command' && message.action === 'pull') {
        logText = 'processing message from ' + sender + ', type: ' + message.type + ', action: ' + message.action;
        logger.info(logText);
        $.when (j1.xhrApi(ep_util_serv_git_pull))
        .then (function(response) {
          // json_message = JSON.stringify(response, undefined, 2);
          json_message  = JSON.stringify(response);
          logText       = 'response from xhrApi received: ' + json_message;
          if (response.status === 'success') {            
            logger.info(logText);
          } else if (response.status === 'failed') {
            logger.warn(logText);
          } else {
            logger.error('unknown response from xhrApi');
          }
        });
      } // ENDIF message action 'pull'
      // -----------------------------------------------------------------------
      //  Process command message (action), type (NPM) 'built'
      if (message.type === 'command' && message.action === 'built') {
        logText = 'processing message from ' + sender + ', type: ' + message.type + ', action: ' + message.action;
        logger.info(logText);
        $.when (j1.xhrApi(ep_util_serv_npm_rebuilt))
        .then (function(response) {
          // json_message = JSON.stringify(response, undefined, 2);
          json_message = JSON.stringify(response);
          logText = 'response from xhrApi received: ' + json_message;
          logger.info(logText);
          if (response.status === 'success') {
            $('#npmScriptSuccess').find('.pull-message').html(response.response);
            $('#npmScriptSuccess').modal('show');
          }
          if (response.status === 'failed') {
            $('#requestFailed').find('.pull-message').html(response.response + response.error);
            $('#requestFailed').modal('show');
          }
        });
      } // END message action 'pull'
      //
      // Place handling of other command|action here
      //
      return true;
    }, // END messageHandler
    // -------------------------------------------------------------------------
    //  Set the current (processing) state of the module
    // -------------------------------------------------------------------------
    setState: function (stat) {
      j1.adapter.webhooks.state = stat;
    }, // END setState
    // -------------------------------------------------------------------------
    //  Returns the current (processing) state of the module
    // -------------------------------------------------------------------------
    getState: function () {
      return j1.adapter.webhooks.state;
    } // END state
  }; // END return
})(j1, window);


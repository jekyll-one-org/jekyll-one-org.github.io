

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/nbinteract.js
 # J1 Adapter for nbinteract
 #
 # Product/Info:
 # https://jekyll.one
 #
 # Copyright (C) 2022 Juergen Adams
 #
 # J1 Template is licensed under the MIT License.
 # For details, see https://jekyll.one
 # -----------------------------------------------------------------------------
 #  Adapter generated: 2022-04-17 22:42:16 +0000
 # -----------------------------------------------------------------------------
*/
// -----------------------------------------------------------------------------
// ESLint shimming
// -----------------------------------------------------------------------------
/* eslint indent: "off"                                                       */
// -----------------------------------------------------------------------------
'use strict';
j1.adapter.nbinteract = (function (j1, window) {
  var environment     = 'development';
  var moduleOptions   = {};
  var moduleSettings  = {};
  var message         = {};
  var spinnerOpts     = {                                                       // (default) options for a spinner
    lines:      13,                                                             // number of lines to draw
    length:     38,                                                             // length of each line
    width:      17,                                                             // line thickness
    radius:     45,                                                             // radius of the inner circle
    scale:      2,                                                              // scales overall size of the spinner
    corners:    1,                                                              // corner roundness (0..1)
    speed:      0.5,                                                            // rounds per second
    rotate:     0,                                                              // rotation offset
    animation: 'spinner-line-fade-more',                                        // CSS animation name for the lines: spinner-line-fade-quick | spinner-line-shrink | spinner-line-fade-more
    direction:  1,                                                              // 1: clockwise, -1: counterclockwise
    color:      '#424242',                                                      // CSS color or array of colors: orange (EF6C00) | blue (1565C0) | gray (424242)
    fadeColor:  'transparent',                                                  // CSS color or array of colors
    top:        '80%',                                                          // top position relative to parent
    left:       '50%',                                                          // left position relative to parent
    shadow:     '0 0 1px transparent',                                          // box-shadow for the lines
    zIndex:     2000000000,                                                     // z-index (defaults to 2e9)
    className:  'spinner',                                                      // CSS class assined to the spinner
    position:   'fixed',                                                        // element positioning:  absolute|fixed
  };
  var nbiContentModalInfoID       = 'nbiModalInfoBody'                          // ID of the content (messages) for the INFO modal
  var nbiContentModalSuccessID    = 'nbiModalSuccessBody'                       // ID of the content (messages) for the SUCCESS modal
  var nbiContentModalErrorID      = 'nbiModalErrorBody'                         // ID of the content (messages) for the SUCCESS modal
  var nbiModalInfoID              = '#' + 'nbiModalTopInfo';                    // ID of the SUCCESS modal
  var nbiModalSuccessID           = '#' + 'nbiModalTRSuccess';                  // ID of the SUCCESS modal
  var nbiModalErrorID             = '#' + 'nbiModalTLDanger';                   // ID of the ERROR modal
  var nbinteract_prepared         = false;                                      // switch to indicate if ???
  var nbiModalSuccessMessagesID   = 'nbiModalSuccessMessages'                   // UL contalner SUCCESS messahes
  var nbiModalErrorMessagesID     = 'nbiModalErrorMessages'                     // UL contalner ERROR messahes
  var nbiModalAutoClose;                                                        // switch to auto-close nbi message modals
  var nbiModalAutoCloseDelay;                                                   // delay auto-close nbi message modals
  var nbiInitTimeout;                                                           //
  var notebooks;                                                                // ALL notebokks enabled
  var notebook;                                                                 // current notebook (processed)
  var target;                                                                   // target container for the (activity) spinner
  var spinner;                                                                  // the (activity) spinner
  var nbiModal;
  var _this;
  var interact;
  var logger;
  var coreLogger;
  var logText;
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
      // Default module settings
      // -----------------------------------------------------------------------
      var settings = $.extend ({
        module_name: 'j1.adapter.nbinteract',
        generated:   '2022-04-17 22:42:16 +0000'
      }, options);
      moduleOptions = $.extend({}, {"spec":"jekyll-one/nbinteract-notebooks/main", "baseUrl":"https://mybinder.org", "provider":"gh", "button_styles":"btn btn-primary btn-raised hidden", "show_nbi_messages":true, "indicate_nbi_activity":false, "nbi_messages_auto_close":true, "nbi_init_timeout":60000, "nbi_messages_auto_close_delay":3500, "notebooks":[{"notebook":{"enabled":true, "id":"j1_recipes_layout", "xhr_data":"j1_recipes_layout.html", "xhr_data_path":"/pages/public/jupyter/notebooks/html"}}, {"notebook":{"enabled":false, "id":"j1_odes_in_python", "xhr_data":"j1_odes-in-python.html", "xhr_data_path":"/pages/public/jupyter/notebooks/html"}}, {"notebook":{"enabled":true, "id":"j1_ode_selected", "xhr_data":"j1_ode_selected.html", "xhr_data_path":"/pages/public/jupyter/notebooks/html"}}, {"notebook":{"enabled":true, "id":"j1_climate_change_forecast", "xhr_data":"j1_climate_change_forecast.html", "xhr_data_path":"/pages/public/jupyter/notebooks/html"}}, {"notebook":{"enabled":false, "id":"climate_test", "xhr_data":"climate-test.html", "xhr_data_path":"/pages/public/jupyter/notebooks/html"}}, {"notebook":{"enabled":false, "id":"j1_pandas_intro", "xhr_data":"j1_pandas_creating_reading_and_writing.html", "xhr_data_path":"/pages/public/jupyter/notebooks/html"}}, {"notebook":{"enabled":false, "id":"j1_interactive", "xhr_data":"j1_interactive.html", "xhr_data_path":"/pages/public/jupyter/notebooks/html"}}, {"notebook":{"enabled":true, "id":"nbi_docs_tutorial_interact", "xhr_data":"nbi_docs_tutorial_interact.html", "xhr_data_path":"/pages/public/jupyter/notebooks/html"}}, {"notebook":{"enabled":true, "id":"nbi_docs_tutorial_monty_hall", "xhr_data":"nbi_docs_tutorial_monty_hall.html", "xhr_data_path":"/pages/public/jupyter/notebooks/html"}}, {"notebook":{"enabled":true, "id":"nbi_docs_recipes_graphing", "xhr_data":"nbi_docs_recipes_graphing.html", "xhr_data_path":"/pages/public/jupyter/notebooks/html"}}, {"notebook":{"enabled":true, "id":"nbi_docs_recipes_layout", "xhr_data":"nbi_docs_recipes_layout.html", "xhr_data_path":"/pages/public/jupyter/notebooks/html"}}, {"notebook":{"enabled":true, "id":"nbi_docs_recipes_interactive_questions", "xhr_data":"nbi_docs_recipes_interactive_questions.html", "xhr_data_path":"/pages/public/jupyter/notebooks/html"}}, {"notebook":{"enabled":true, "id":"nbi_docs_empirical_distributions", "xhr_data":"nbi_docs_examples_empirical_distributions.html", "xhr_data_path":"/pages/public/jupyter/notebooks/html"}}, {"notebook":{"enabled":true, "id":"nbi_docs_examples_sampling_from_a_population", "xhr_data":"nbi_docs_examples_sampling_from_a_population.html", "xhr_data_path":"/pages/public/jupyter/notebooks/html"}}, {"notebook":{"enabled":true, "id":"nbi_docs_examples_variability_of_the_sample_mean", "xhr_data":"nbi_docs_examples_variability_of_the_sample_mean.html", "xhr_data_path":"/pages/public/jupyter/notebooks/html"}}, {"notebook":{"enabled":true, "id":"nbi_docs_examples_correlation", "xhr_data":"nbi_docs_examples_correlation.html", "xhr_data_path":"/pages/public/jupyter/notebooks/html"}}, {"notebook":{"enabled":true, "id":"nbi_docs_examples_linear_regression", "xhr_data":"nbi_docs_examples_linear_regression.html", "xhr_data_path":"/pages/public/jupyter/notebooks/html"}}, {"notebook":{"enabled":true, "id":"nbi_docs_examples_probability_distribution_plots", "xhr_data":"nbi_docs_examples_probability_distribution_plots.html", "xhr_data_path":"/pages/public/jupyter/notebooks/html"}}, {"notebook":{"enabled":true, "id":"nbi_docs_central_limit_theorem", "xhr_data":"nbi_docs_examples_central_limit_theorem.html", "xhr_data_path":"/pages/public/jupyter/notebooks/html"}}]});
      // -----------------------------------------------------------------------
      // Global variable settings
      // -----------------------------------------------------------------------
      _this                   = j1.adapter.nbinteract;
      logger                  = log4javascript.getLogger('j1.adapter.nbinteract');
      nbiModalAutoClose       = moduleOptions.nbi_messages_auto_close;
      nbiModalAutoCloseDelay  = moduleOptions.nbi_messages_auto_close_delay;
      nbiInitTimeout          = moduleOptions.nbi_init_timeout;
      // -----------------------------------------------------------------------
      // load HTML data for all modals used by nbInteract
      // -----------------------------------------------------------------------
      _this.loadNbiModals();
      // -----------------------------------------------------------------------
      // loadNbiNoteBooks()
      // load the HTML portion for all notebooks configured (enabled)
      // -----------------------------------------------------------------------
      _this.loadNbiNoteBooks(moduleOptions);
      // -----------------------------------------------------------------------
      // register callbacks (actions) for all modals used
      // -----------------------------------------------------------------------
      if (moduleOptions.show_nbi_messages) {
        _this.registerNbiModalsCB();
      }
      // -----------------------------------------------------------------------
      // run a spinner to indicate activity of 'nbInteract' if enabled
      // -----------------------------------------------------------------------
      $(document).ready(function() {
        if (moduleOptions.indicate_nbi_activity) {
          target  = document.getElementById('content');
          spinner = new Spinner(spinnerOpts).spin(target);
        }
      });
      // -----------------------------------------------------------------------
      // interactNbiNotebooks()
      // connect to the configured BinderHub instance to create a
      // Jupyter kernel if required
      // -----------------------------------------------------------------------
      _this.interactNbiNotebooks(moduleOptions);
    }, // END init
    // -------------------------------------------------------------------------
    // loadNbiNoteBooks()
    // load the HTML portion for all notebooks configured (enabled)
    // -------------------------------------------------------------------------
    loadNbiNoteBooks: function (settings) {
      var notebooks = settings.notebooks;
      notebooks.forEach (function (elm) {
        if (elm.notebook.enabled) {
          notebook = elm.notebook;
          var notebook_id = notebook.id;
          var $selector = $('#' + notebook_id);
          // load the HTML portion for the notebook
          //
          if ($selector.length) {
            _this.loadNotebookHTML ({
              xhr_container_id:   notebook.id,
              xhr_data:           notebook.xhr_data,
              xhr_data_path:      notebook.xhr_data_path,
              buttonStyles:       settings.button_styles,
            });
          }
        }
      });
    },
    // -------------------------------------------------------------------------
    // interactNbiNotebooks()
    // connect to the configured BinderHub instance to create a
    // Jupyter kernel if required. A BinderHub instance in created
    // on a per notebook basis but trigeered only done once,
    // controlled by nbinteract_prepared.
    // -------------------------------------------------------------------------
    interactNbiNotebooks: function (options) {
      var notebook = options;
      // initialize state flag
      _this.setState('started');
      logger.debug('\n' + 'state: ' + _this.getState());
      var log_text = '\n' + 'nbinteract is being initialized';
      logger.info(log_text);
      if ($('#j1_recipes_layout').length) {
        var dependencies_met_nb_loaded = setInterval(function() {
          if ($('#j1_recipes_layout').attr('data-nb-notebook') == 'loaded') {
            if(!nbinteract_prepared) {
              logText = '\n' + 'jupyter kernel is being generated ...';
              logger.info(logText);
              // create nbInteract (core) instance
              //
              coreLogger = log4javascript.getLogger('nbinteract.core');
              interact = new NbInteract({
                spec:     options.spec,
                baseUrl:  options.baseUrl,
                provider: options.provider,
                logger:   coreLogger,
                j1API:    j1,
              });
              // generate a jupyter kernel via BinderHub
              interact.prepare();
              nbinteract_prepared = true;
              // issue an error if the NBI (init) button never removed by
              // nbInteract-core (util or manager)
              // TODO:  The 'timeout' condition should be replaced
              //        state-based triggered from nbInteract-core.
              //
              window.setTimeout(function() {
                var nbiButtonState = _this.getNbiButtonState();
                if (nbiButtonState) {
                  // button NOT removed
                  logger.error('NBI initialialization failed: j1_recipes_layout');
                  // hide the info modal
                  $(nbiModalSuccessID).modal('hide');
                  // show the error modal
                  $(nbiModalSuccessID).on('hidden.bs.modal', function () {
                    if ($(nbiModalErrorID).is(':hidden')) {
                      var messageErrorUL = document.getElementById(nbiModalErrorMessagesID);
                      _this.appendModalMessage(messageErrorUL, 'NBI initialialization failed for notebook: j1_recipes_layout')
                      $(nbiModalErrorID).modal('show');
                      // auto-close the error modal
                      if (nbiModalAutoClose) {
                        window.setTimeout(function() {
                          $(nbiModalErrorID).modal('hide');
                        }, nbiModalAutoCloseDelay);
                      }
                    }
                  });
                } else {
                  // button removed
                  logger.info('NBI initialized successfully.');
                }
              }, nbiInitTimeout);
            }
            clearInterval(dependencies_met_nb_loaded);
          } // END dependencies_met_nb_loaded
        }, 25);
        return;
      }
      // END notebook_id: j1_recipes_layout
      if ($('#j1_ode_selected').length) {
        var dependencies_met_nb_loaded = setInterval(function() {
          if ($('#j1_ode_selected').attr('data-nb-notebook') == 'loaded') {
            if(!nbinteract_prepared) {
              logText = '\n' + 'jupyter kernel is being generated ...';
              logger.info(logText);
              // create nbInteract (core) instance
              //
              coreLogger = log4javascript.getLogger('nbinteract.core');
              interact = new NbInteract({
                spec:     options.spec,
                baseUrl:  options.baseUrl,
                provider: options.provider,
                logger:   coreLogger,
                j1API:    j1,
              });
              // generate a jupyter kernel via BinderHub
              interact.prepare();
              nbinteract_prepared = true;
              // issue an error if the NBI (init) button never removed by
              // nbInteract-core (util or manager)
              // TODO:  The 'timeout' condition should be replaced
              //        state-based triggered from nbInteract-core.
              //
              window.setTimeout(function() {
                var nbiButtonState = _this.getNbiButtonState();
                if (nbiButtonState) {
                  // button NOT removed
                  logger.error('NBI initialialization failed: j1_ode_selected');
                  // hide the info modal
                  $(nbiModalSuccessID).modal('hide');
                  // show the error modal
                  $(nbiModalSuccessID).on('hidden.bs.modal', function () {
                    if ($(nbiModalErrorID).is(':hidden')) {
                      var messageErrorUL = document.getElementById(nbiModalErrorMessagesID);
                      _this.appendModalMessage(messageErrorUL, 'NBI initialialization failed for notebook: j1_ode_selected')
                      $(nbiModalErrorID).modal('show');
                      // auto-close the error modal
                      if (nbiModalAutoClose) {
                        window.setTimeout(function() {
                          $(nbiModalErrorID).modal('hide');
                        }, nbiModalAutoCloseDelay);
                      }
                    }
                  });
                } else {
                  // button removed
                  logger.info('NBI initialized successfully.');
                }
              }, nbiInitTimeout);
            }
            clearInterval(dependencies_met_nb_loaded);
          } // END dependencies_met_nb_loaded
        }, 25);
        return;
      }
      // END notebook_id: j1_ode_selected
      if ($('#j1_climate_change_forecast').length) {
        var dependencies_met_nb_loaded = setInterval(function() {
          if ($('#j1_climate_change_forecast').attr('data-nb-notebook') == 'loaded') {
            if(!nbinteract_prepared) {
              logText = '\n' + 'jupyter kernel is being generated ...';
              logger.info(logText);
              // create nbInteract (core) instance
              //
              coreLogger = log4javascript.getLogger('nbinteract.core');
              interact = new NbInteract({
                spec:     options.spec,
                baseUrl:  options.baseUrl,
                provider: options.provider,
                logger:   coreLogger,
                j1API:    j1,
              });
              // generate a jupyter kernel via BinderHub
              interact.prepare();
              nbinteract_prepared = true;
              // issue an error if the NBI (init) button never removed by
              // nbInteract-core (util or manager)
              // TODO:  The 'timeout' condition should be replaced
              //        state-based triggered from nbInteract-core.
              //
              window.setTimeout(function() {
                var nbiButtonState = _this.getNbiButtonState();
                if (nbiButtonState) {
                  // button NOT removed
                  logger.error('NBI initialialization failed: j1_climate_change_forecast');
                  // hide the info modal
                  $(nbiModalSuccessID).modal('hide');
                  // show the error modal
                  $(nbiModalSuccessID).on('hidden.bs.modal', function () {
                    if ($(nbiModalErrorID).is(':hidden')) {
                      var messageErrorUL = document.getElementById(nbiModalErrorMessagesID);
                      _this.appendModalMessage(messageErrorUL, 'NBI initialialization failed for notebook: j1_climate_change_forecast')
                      $(nbiModalErrorID).modal('show');
                      // auto-close the error modal
                      if (nbiModalAutoClose) {
                        window.setTimeout(function() {
                          $(nbiModalErrorID).modal('hide');
                        }, nbiModalAutoCloseDelay);
                      }
                    }
                  });
                } else {
                  // button removed
                  logger.info('NBI initialized successfully.');
                }
              }, nbiInitTimeout);
            }
            clearInterval(dependencies_met_nb_loaded);
          } // END dependencies_met_nb_loaded
        }, 25);
        return;
      }
      // END notebook_id: j1_climate_change_forecast
      if ($('#nbi_docs_tutorial_interact').length) {
        var dependencies_met_nb_loaded = setInterval(function() {
          if ($('#nbi_docs_tutorial_interact').attr('data-nb-notebook') == 'loaded') {
            if(!nbinteract_prepared) {
              logText = '\n' + 'jupyter kernel is being generated ...';
              logger.info(logText);
              // create nbInteract (core) instance
              //
              coreLogger = log4javascript.getLogger('nbinteract.core');
              interact = new NbInteract({
                spec:     options.spec,
                baseUrl:  options.baseUrl,
                provider: options.provider,
                logger:   coreLogger,
                j1API:    j1,
              });
              // generate a jupyter kernel via BinderHub
              interact.prepare();
              nbinteract_prepared = true;
              // issue an error if the NBI (init) button never removed by
              // nbInteract-core (util or manager)
              // TODO:  The 'timeout' condition should be replaced
              //        state-based triggered from nbInteract-core.
              //
              window.setTimeout(function() {
                var nbiButtonState = _this.getNbiButtonState();
                if (nbiButtonState) {
                  // button NOT removed
                  logger.error('NBI initialialization failed: nbi_docs_tutorial_interact');
                  // hide the info modal
                  $(nbiModalSuccessID).modal('hide');
                  // show the error modal
                  $(nbiModalSuccessID).on('hidden.bs.modal', function () {
                    if ($(nbiModalErrorID).is(':hidden')) {
                      var messageErrorUL = document.getElementById(nbiModalErrorMessagesID);
                      _this.appendModalMessage(messageErrorUL, 'NBI initialialization failed for notebook: nbi_docs_tutorial_interact')
                      $(nbiModalErrorID).modal('show');
                      // auto-close the error modal
                      if (nbiModalAutoClose) {
                        window.setTimeout(function() {
                          $(nbiModalErrorID).modal('hide');
                        }, nbiModalAutoCloseDelay);
                      }
                    }
                  });
                } else {
                  // button removed
                  logger.info('NBI initialized successfully.');
                }
              }, nbiInitTimeout);
            }
            clearInterval(dependencies_met_nb_loaded);
          } // END dependencies_met_nb_loaded
        }, 25);
        return;
      }
      // END notebook_id: nbi_docs_tutorial_interact
      if ($('#nbi_docs_tutorial_monty_hall').length) {
        var dependencies_met_nb_loaded = setInterval(function() {
          if ($('#nbi_docs_tutorial_monty_hall').attr('data-nb-notebook') == 'loaded') {
            if(!nbinteract_prepared) {
              logText = '\n' + 'jupyter kernel is being generated ...';
              logger.info(logText);
              // create nbInteract (core) instance
              //
              coreLogger = log4javascript.getLogger('nbinteract.core');
              interact = new NbInteract({
                spec:     options.spec,
                baseUrl:  options.baseUrl,
                provider: options.provider,
                logger:   coreLogger,
                j1API:    j1,
              });
              // generate a jupyter kernel via BinderHub
              interact.prepare();
              nbinteract_prepared = true;
              // issue an error if the NBI (init) button never removed by
              // nbInteract-core (util or manager)
              // TODO:  The 'timeout' condition should be replaced
              //        state-based triggered from nbInteract-core.
              //
              window.setTimeout(function() {
                var nbiButtonState = _this.getNbiButtonState();
                if (nbiButtonState) {
                  // button NOT removed
                  logger.error('NBI initialialization failed: nbi_docs_tutorial_monty_hall');
                  // hide the info modal
                  $(nbiModalSuccessID).modal('hide');
                  // show the error modal
                  $(nbiModalSuccessID).on('hidden.bs.modal', function () {
                    if ($(nbiModalErrorID).is(':hidden')) {
                      var messageErrorUL = document.getElementById(nbiModalErrorMessagesID);
                      _this.appendModalMessage(messageErrorUL, 'NBI initialialization failed for notebook: nbi_docs_tutorial_monty_hall')
                      $(nbiModalErrorID).modal('show');
                      // auto-close the error modal
                      if (nbiModalAutoClose) {
                        window.setTimeout(function() {
                          $(nbiModalErrorID).modal('hide');
                        }, nbiModalAutoCloseDelay);
                      }
                    }
                  });
                } else {
                  // button removed
                  logger.info('NBI initialized successfully.');
                }
              }, nbiInitTimeout);
            }
            clearInterval(dependencies_met_nb_loaded);
          } // END dependencies_met_nb_loaded
        }, 25);
        return;
      }
      // END notebook_id: nbi_docs_tutorial_monty_hall
      if ($('#nbi_docs_recipes_graphing').length) {
        var dependencies_met_nb_loaded = setInterval(function() {
          if ($('#nbi_docs_recipes_graphing').attr('data-nb-notebook') == 'loaded') {
            if(!nbinteract_prepared) {
              logText = '\n' + 'jupyter kernel is being generated ...';
              logger.info(logText);
              // create nbInteract (core) instance
              //
              coreLogger = log4javascript.getLogger('nbinteract.core');
              interact = new NbInteract({
                spec:     options.spec,
                baseUrl:  options.baseUrl,
                provider: options.provider,
                logger:   coreLogger,
                j1API:    j1,
              });
              // generate a jupyter kernel via BinderHub
              interact.prepare();
              nbinteract_prepared = true;
              // issue an error if the NBI (init) button never removed by
              // nbInteract-core (util or manager)
              // TODO:  The 'timeout' condition should be replaced
              //        state-based triggered from nbInteract-core.
              //
              window.setTimeout(function() {
                var nbiButtonState = _this.getNbiButtonState();
                if (nbiButtonState) {
                  // button NOT removed
                  logger.error('NBI initialialization failed: nbi_docs_recipes_graphing');
                  // hide the info modal
                  $(nbiModalSuccessID).modal('hide');
                  // show the error modal
                  $(nbiModalSuccessID).on('hidden.bs.modal', function () {
                    if ($(nbiModalErrorID).is(':hidden')) {
                      var messageErrorUL = document.getElementById(nbiModalErrorMessagesID);
                      _this.appendModalMessage(messageErrorUL, 'NBI initialialization failed for notebook: nbi_docs_recipes_graphing')
                      $(nbiModalErrorID).modal('show');
                      // auto-close the error modal
                      if (nbiModalAutoClose) {
                        window.setTimeout(function() {
                          $(nbiModalErrorID).modal('hide');
                        }, nbiModalAutoCloseDelay);
                      }
                    }
                  });
                } else {
                  // button removed
                  logger.info('NBI initialized successfully.');
                }
              }, nbiInitTimeout);
            }
            clearInterval(dependencies_met_nb_loaded);
          } // END dependencies_met_nb_loaded
        }, 25);
        return;
      }
      // END notebook_id: nbi_docs_recipes_graphing
      if ($('#nbi_docs_recipes_layout').length) {
        var dependencies_met_nb_loaded = setInterval(function() {
          if ($('#nbi_docs_recipes_layout').attr('data-nb-notebook') == 'loaded') {
            if(!nbinteract_prepared) {
              logText = '\n' + 'jupyter kernel is being generated ...';
              logger.info(logText);
              // create nbInteract (core) instance
              //
              coreLogger = log4javascript.getLogger('nbinteract.core');
              interact = new NbInteract({
                spec:     options.spec,
                baseUrl:  options.baseUrl,
                provider: options.provider,
                logger:   coreLogger,
                j1API:    j1,
              });
              // generate a jupyter kernel via BinderHub
              interact.prepare();
              nbinteract_prepared = true;
              // issue an error if the NBI (init) button never removed by
              // nbInteract-core (util or manager)
              // TODO:  The 'timeout' condition should be replaced
              //        state-based triggered from nbInteract-core.
              //
              window.setTimeout(function() {
                var nbiButtonState = _this.getNbiButtonState();
                if (nbiButtonState) {
                  // button NOT removed
                  logger.error('NBI initialialization failed: nbi_docs_recipes_layout');
                  // hide the info modal
                  $(nbiModalSuccessID).modal('hide');
                  // show the error modal
                  $(nbiModalSuccessID).on('hidden.bs.modal', function () {
                    if ($(nbiModalErrorID).is(':hidden')) {
                      var messageErrorUL = document.getElementById(nbiModalErrorMessagesID);
                      _this.appendModalMessage(messageErrorUL, 'NBI initialialization failed for notebook: nbi_docs_recipes_layout')
                      $(nbiModalErrorID).modal('show');
                      // auto-close the error modal
                      if (nbiModalAutoClose) {
                        window.setTimeout(function() {
                          $(nbiModalErrorID).modal('hide');
                        }, nbiModalAutoCloseDelay);
                      }
                    }
                  });
                } else {
                  // button removed
                  logger.info('NBI initialized successfully.');
                }
              }, nbiInitTimeout);
            }
            clearInterval(dependencies_met_nb_loaded);
          } // END dependencies_met_nb_loaded
        }, 25);
        return;
      }
      // END notebook_id: nbi_docs_recipes_layout
      if ($('#nbi_docs_recipes_interactive_questions').length) {
        var dependencies_met_nb_loaded = setInterval(function() {
          if ($('#nbi_docs_recipes_interactive_questions').attr('data-nb-notebook') == 'loaded') {
            if(!nbinteract_prepared) {
              logText = '\n' + 'jupyter kernel is being generated ...';
              logger.info(logText);
              // create nbInteract (core) instance
              //
              coreLogger = log4javascript.getLogger('nbinteract.core');
              interact = new NbInteract({
                spec:     options.spec,
                baseUrl:  options.baseUrl,
                provider: options.provider,
                logger:   coreLogger,
                j1API:    j1,
              });
              // generate a jupyter kernel via BinderHub
              interact.prepare();
              nbinteract_prepared = true;
              // issue an error if the NBI (init) button never removed by
              // nbInteract-core (util or manager)
              // TODO:  The 'timeout' condition should be replaced
              //        state-based triggered from nbInteract-core.
              //
              window.setTimeout(function() {
                var nbiButtonState = _this.getNbiButtonState();
                if (nbiButtonState) {
                  // button NOT removed
                  logger.error('NBI initialialization failed: nbi_docs_recipes_interactive_questions');
                  // hide the info modal
                  $(nbiModalSuccessID).modal('hide');
                  // show the error modal
                  $(nbiModalSuccessID).on('hidden.bs.modal', function () {
                    if ($(nbiModalErrorID).is(':hidden')) {
                      var messageErrorUL = document.getElementById(nbiModalErrorMessagesID);
                      _this.appendModalMessage(messageErrorUL, 'NBI initialialization failed for notebook: nbi_docs_recipes_interactive_questions')
                      $(nbiModalErrorID).modal('show');
                      // auto-close the error modal
                      if (nbiModalAutoClose) {
                        window.setTimeout(function() {
                          $(nbiModalErrorID).modal('hide');
                        }, nbiModalAutoCloseDelay);
                      }
                    }
                  });
                } else {
                  // button removed
                  logger.info('NBI initialized successfully.');
                }
              }, nbiInitTimeout);
            }
            clearInterval(dependencies_met_nb_loaded);
          } // END dependencies_met_nb_loaded
        }, 25);
        return;
      }
      // END notebook_id: nbi_docs_recipes_interactive_questions
      if ($('#nbi_docs_empirical_distributions').length) {
        var dependencies_met_nb_loaded = setInterval(function() {
          if ($('#nbi_docs_empirical_distributions').attr('data-nb-notebook') == 'loaded') {
            if(!nbinteract_prepared) {
              logText = '\n' + 'jupyter kernel is being generated ...';
              logger.info(logText);
              // create nbInteract (core) instance
              //
              coreLogger = log4javascript.getLogger('nbinteract.core');
              interact = new NbInteract({
                spec:     options.spec,
                baseUrl:  options.baseUrl,
                provider: options.provider,
                logger:   coreLogger,
                j1API:    j1,
              });
              // generate a jupyter kernel via BinderHub
              interact.prepare();
              nbinteract_prepared = true;
              // issue an error if the NBI (init) button never removed by
              // nbInteract-core (util or manager)
              // TODO:  The 'timeout' condition should be replaced
              //        state-based triggered from nbInteract-core.
              //
              window.setTimeout(function() {
                var nbiButtonState = _this.getNbiButtonState();
                if (nbiButtonState) {
                  // button NOT removed
                  logger.error('NBI initialialization failed: nbi_docs_empirical_distributions');
                  // hide the info modal
                  $(nbiModalSuccessID).modal('hide');
                  // show the error modal
                  $(nbiModalSuccessID).on('hidden.bs.modal', function () {
                    if ($(nbiModalErrorID).is(':hidden')) {
                      var messageErrorUL = document.getElementById(nbiModalErrorMessagesID);
                      _this.appendModalMessage(messageErrorUL, 'NBI initialialization failed for notebook: nbi_docs_empirical_distributions')
                      $(nbiModalErrorID).modal('show');
                      // auto-close the error modal
                      if (nbiModalAutoClose) {
                        window.setTimeout(function() {
                          $(nbiModalErrorID).modal('hide');
                        }, nbiModalAutoCloseDelay);
                      }
                    }
                  });
                } else {
                  // button removed
                  logger.info('NBI initialized successfully.');
                }
              }, nbiInitTimeout);
            }
            clearInterval(dependencies_met_nb_loaded);
          } // END dependencies_met_nb_loaded
        }, 25);
        return;
      }
      // END notebook_id: nbi_docs_empirical_distributions
      if ($('#nbi_docs_examples_sampling_from_a_population').length) {
        var dependencies_met_nb_loaded = setInterval(function() {
          if ($('#nbi_docs_examples_sampling_from_a_population').attr('data-nb-notebook') == 'loaded') {
            if(!nbinteract_prepared) {
              logText = '\n' + 'jupyter kernel is being generated ...';
              logger.info(logText);
              // create nbInteract (core) instance
              //
              coreLogger = log4javascript.getLogger('nbinteract.core');
              interact = new NbInteract({
                spec:     options.spec,
                baseUrl:  options.baseUrl,
                provider: options.provider,
                logger:   coreLogger,
                j1API:    j1,
              });
              // generate a jupyter kernel via BinderHub
              interact.prepare();
              nbinteract_prepared = true;
              // issue an error if the NBI (init) button never removed by
              // nbInteract-core (util or manager)
              // TODO:  The 'timeout' condition should be replaced
              //        state-based triggered from nbInteract-core.
              //
              window.setTimeout(function() {
                var nbiButtonState = _this.getNbiButtonState();
                if (nbiButtonState) {
                  // button NOT removed
                  logger.error('NBI initialialization failed: nbi_docs_examples_sampling_from_a_population');
                  // hide the info modal
                  $(nbiModalSuccessID).modal('hide');
                  // show the error modal
                  $(nbiModalSuccessID).on('hidden.bs.modal', function () {
                    if ($(nbiModalErrorID).is(':hidden')) {
                      var messageErrorUL = document.getElementById(nbiModalErrorMessagesID);
                      _this.appendModalMessage(messageErrorUL, 'NBI initialialization failed for notebook: nbi_docs_examples_sampling_from_a_population')
                      $(nbiModalErrorID).modal('show');
                      // auto-close the error modal
                      if (nbiModalAutoClose) {
                        window.setTimeout(function() {
                          $(nbiModalErrorID).modal('hide');
                        }, nbiModalAutoCloseDelay);
                      }
                    }
                  });
                } else {
                  // button removed
                  logger.info('NBI initialized successfully.');
                }
              }, nbiInitTimeout);
            }
            clearInterval(dependencies_met_nb_loaded);
          } // END dependencies_met_nb_loaded
        }, 25);
        return;
      }
      // END notebook_id: nbi_docs_examples_sampling_from_a_population
      if ($('#nbi_docs_examples_variability_of_the_sample_mean').length) {
        var dependencies_met_nb_loaded = setInterval(function() {
          if ($('#nbi_docs_examples_variability_of_the_sample_mean').attr('data-nb-notebook') == 'loaded') {
            if(!nbinteract_prepared) {
              logText = '\n' + 'jupyter kernel is being generated ...';
              logger.info(logText);
              // create nbInteract (core) instance
              //
              coreLogger = log4javascript.getLogger('nbinteract.core');
              interact = new NbInteract({
                spec:     options.spec,
                baseUrl:  options.baseUrl,
                provider: options.provider,
                logger:   coreLogger,
                j1API:    j1,
              });
              // generate a jupyter kernel via BinderHub
              interact.prepare();
              nbinteract_prepared = true;
              // issue an error if the NBI (init) button never removed by
              // nbInteract-core (util or manager)
              // TODO:  The 'timeout' condition should be replaced
              //        state-based triggered from nbInteract-core.
              //
              window.setTimeout(function() {
                var nbiButtonState = _this.getNbiButtonState();
                if (nbiButtonState) {
                  // button NOT removed
                  logger.error('NBI initialialization failed: nbi_docs_examples_variability_of_the_sample_mean');
                  // hide the info modal
                  $(nbiModalSuccessID).modal('hide');
                  // show the error modal
                  $(nbiModalSuccessID).on('hidden.bs.modal', function () {
                    if ($(nbiModalErrorID).is(':hidden')) {
                      var messageErrorUL = document.getElementById(nbiModalErrorMessagesID);
                      _this.appendModalMessage(messageErrorUL, 'NBI initialialization failed for notebook: nbi_docs_examples_variability_of_the_sample_mean')
                      $(nbiModalErrorID).modal('show');
                      // auto-close the error modal
                      if (nbiModalAutoClose) {
                        window.setTimeout(function() {
                          $(nbiModalErrorID).modal('hide');
                        }, nbiModalAutoCloseDelay);
                      }
                    }
                  });
                } else {
                  // button removed
                  logger.info('NBI initialized successfully.');
                }
              }, nbiInitTimeout);
            }
            clearInterval(dependencies_met_nb_loaded);
          } // END dependencies_met_nb_loaded
        }, 25);
        return;
      }
      // END notebook_id: nbi_docs_examples_variability_of_the_sample_mean
      if ($('#nbi_docs_examples_correlation').length) {
        var dependencies_met_nb_loaded = setInterval(function() {
          if ($('#nbi_docs_examples_correlation').attr('data-nb-notebook') == 'loaded') {
            if(!nbinteract_prepared) {
              logText = '\n' + 'jupyter kernel is being generated ...';
              logger.info(logText);
              // create nbInteract (core) instance
              //
              coreLogger = log4javascript.getLogger('nbinteract.core');
              interact = new NbInteract({
                spec:     options.spec,
                baseUrl:  options.baseUrl,
                provider: options.provider,
                logger:   coreLogger,
                j1API:    j1,
              });
              // generate a jupyter kernel via BinderHub
              interact.prepare();
              nbinteract_prepared = true;
              // issue an error if the NBI (init) button never removed by
              // nbInteract-core (util or manager)
              // TODO:  The 'timeout' condition should be replaced
              //        state-based triggered from nbInteract-core.
              //
              window.setTimeout(function() {
                var nbiButtonState = _this.getNbiButtonState();
                if (nbiButtonState) {
                  // button NOT removed
                  logger.error('NBI initialialization failed: nbi_docs_examples_correlation');
                  // hide the info modal
                  $(nbiModalSuccessID).modal('hide');
                  // show the error modal
                  $(nbiModalSuccessID).on('hidden.bs.modal', function () {
                    if ($(nbiModalErrorID).is(':hidden')) {
                      var messageErrorUL = document.getElementById(nbiModalErrorMessagesID);
                      _this.appendModalMessage(messageErrorUL, 'NBI initialialization failed for notebook: nbi_docs_examples_correlation')
                      $(nbiModalErrorID).modal('show');
                      // auto-close the error modal
                      if (nbiModalAutoClose) {
                        window.setTimeout(function() {
                          $(nbiModalErrorID).modal('hide');
                        }, nbiModalAutoCloseDelay);
                      }
                    }
                  });
                } else {
                  // button removed
                  logger.info('NBI initialized successfully.');
                }
              }, nbiInitTimeout);
            }
            clearInterval(dependencies_met_nb_loaded);
          } // END dependencies_met_nb_loaded
        }, 25);
        return;
      }
      // END notebook_id: nbi_docs_examples_correlation
      if ($('#nbi_docs_examples_linear_regression').length) {
        var dependencies_met_nb_loaded = setInterval(function() {
          if ($('#nbi_docs_examples_linear_regression').attr('data-nb-notebook') == 'loaded') {
            if(!nbinteract_prepared) {
              logText = '\n' + 'jupyter kernel is being generated ...';
              logger.info(logText);
              // create nbInteract (core) instance
              //
              coreLogger = log4javascript.getLogger('nbinteract.core');
              interact = new NbInteract({
                spec:     options.spec,
                baseUrl:  options.baseUrl,
                provider: options.provider,
                logger:   coreLogger,
                j1API:    j1,
              });
              // generate a jupyter kernel via BinderHub
              interact.prepare();
              nbinteract_prepared = true;
              // issue an error if the NBI (init) button never removed by
              // nbInteract-core (util or manager)
              // TODO:  The 'timeout' condition should be replaced
              //        state-based triggered from nbInteract-core.
              //
              window.setTimeout(function() {
                var nbiButtonState = _this.getNbiButtonState();
                if (nbiButtonState) {
                  // button NOT removed
                  logger.error('NBI initialialization failed: nbi_docs_examples_linear_regression');
                  // hide the info modal
                  $(nbiModalSuccessID).modal('hide');
                  // show the error modal
                  $(nbiModalSuccessID).on('hidden.bs.modal', function () {
                    if ($(nbiModalErrorID).is(':hidden')) {
                      var messageErrorUL = document.getElementById(nbiModalErrorMessagesID);
                      _this.appendModalMessage(messageErrorUL, 'NBI initialialization failed for notebook: nbi_docs_examples_linear_regression')
                      $(nbiModalErrorID).modal('show');
                      // auto-close the error modal
                      if (nbiModalAutoClose) {
                        window.setTimeout(function() {
                          $(nbiModalErrorID).modal('hide');
                        }, nbiModalAutoCloseDelay);
                      }
                    }
                  });
                } else {
                  // button removed
                  logger.info('NBI initialized successfully.');
                }
              }, nbiInitTimeout);
            }
            clearInterval(dependencies_met_nb_loaded);
          } // END dependencies_met_nb_loaded
        }, 25);
        return;
      }
      // END notebook_id: nbi_docs_examples_linear_regression
      if ($('#nbi_docs_examples_probability_distribution_plots').length) {
        var dependencies_met_nb_loaded = setInterval(function() {
          if ($('#nbi_docs_examples_probability_distribution_plots').attr('data-nb-notebook') == 'loaded') {
            if(!nbinteract_prepared) {
              logText = '\n' + 'jupyter kernel is being generated ...';
              logger.info(logText);
              // create nbInteract (core) instance
              //
              coreLogger = log4javascript.getLogger('nbinteract.core');
              interact = new NbInteract({
                spec:     options.spec,
                baseUrl:  options.baseUrl,
                provider: options.provider,
                logger:   coreLogger,
                j1API:    j1,
              });
              // generate a jupyter kernel via BinderHub
              interact.prepare();
              nbinteract_prepared = true;
              // issue an error if the NBI (init) button never removed by
              // nbInteract-core (util or manager)
              // TODO:  The 'timeout' condition should be replaced
              //        state-based triggered from nbInteract-core.
              //
              window.setTimeout(function() {
                var nbiButtonState = _this.getNbiButtonState();
                if (nbiButtonState) {
                  // button NOT removed
                  logger.error('NBI initialialization failed: nbi_docs_examples_probability_distribution_plots');
                  // hide the info modal
                  $(nbiModalSuccessID).modal('hide');
                  // show the error modal
                  $(nbiModalSuccessID).on('hidden.bs.modal', function () {
                    if ($(nbiModalErrorID).is(':hidden')) {
                      var messageErrorUL = document.getElementById(nbiModalErrorMessagesID);
                      _this.appendModalMessage(messageErrorUL, 'NBI initialialization failed for notebook: nbi_docs_examples_probability_distribution_plots')
                      $(nbiModalErrorID).modal('show');
                      // auto-close the error modal
                      if (nbiModalAutoClose) {
                        window.setTimeout(function() {
                          $(nbiModalErrorID).modal('hide');
                        }, nbiModalAutoCloseDelay);
                      }
                    }
                  });
                } else {
                  // button removed
                  logger.info('NBI initialized successfully.');
                }
              }, nbiInitTimeout);
            }
            clearInterval(dependencies_met_nb_loaded);
          } // END dependencies_met_nb_loaded
        }, 25);
        return;
      }
      // END notebook_id: nbi_docs_examples_probability_distribution_plots
      if ($('#nbi_docs_central_limit_theorem').length) {
        var dependencies_met_nb_loaded = setInterval(function() {
          if ($('#nbi_docs_central_limit_theorem').attr('data-nb-notebook') == 'loaded') {
            if(!nbinteract_prepared) {
              logText = '\n' + 'jupyter kernel is being generated ...';
              logger.info(logText);
              // create nbInteract (core) instance
              //
              coreLogger = log4javascript.getLogger('nbinteract.core');
              interact = new NbInteract({
                spec:     options.spec,
                baseUrl:  options.baseUrl,
                provider: options.provider,
                logger:   coreLogger,
                j1API:    j1,
              });
              // generate a jupyter kernel via BinderHub
              interact.prepare();
              nbinteract_prepared = true;
              // issue an error if the NBI (init) button never removed by
              // nbInteract-core (util or manager)
              // TODO:  The 'timeout' condition should be replaced
              //        state-based triggered from nbInteract-core.
              //
              window.setTimeout(function() {
                var nbiButtonState = _this.getNbiButtonState();
                if (nbiButtonState) {
                  // button NOT removed
                  logger.error('NBI initialialization failed: nbi_docs_central_limit_theorem');
                  // hide the info modal
                  $(nbiModalSuccessID).modal('hide');
                  // show the error modal
                  $(nbiModalSuccessID).on('hidden.bs.modal', function () {
                    if ($(nbiModalErrorID).is(':hidden')) {
                      var messageErrorUL = document.getElementById(nbiModalErrorMessagesID);
                      _this.appendModalMessage(messageErrorUL, 'NBI initialialization failed for notebook: nbi_docs_central_limit_theorem')
                      $(nbiModalErrorID).modal('show');
                      // auto-close the error modal
                      if (nbiModalAutoClose) {
                        window.setTimeout(function() {
                          $(nbiModalErrorID).modal('hide');
                        }, nbiModalAutoCloseDelay);
                      }
                    }
                  });
                } else {
                  // button removed
                  logger.info('NBI initialized successfully.');
                }
              }, nbiInitTimeout);
            }
            clearInterval(dependencies_met_nb_loaded);
          } // END dependencies_met_nb_loaded
        }, 25);
        return;
      }
      // END notebook_id: nbi_docs_central_limit_theorem
    },
    // -------------------------------------------------------------------------
    // loadNotebookHTML()
    // Load HTML data asychronously using XHR|jQuery on an element
    // (e.g. <div>) specified by xhr_container_id, xhr_data_path
    // -------------------------------------------------------------------------
    loadNotebookHTML: function (options) {
      var html_data_path    = options.xhr_data_path + '/' + options.xhr_data;
      var id                = options.xhr_container_id;
      var $selector         = $('#' + id);
      var logText;
      var cb_load_closure = function(id) {
        return function (responseTxt, statusTxt, xhr) {
          var logger = log4javascript.getLogger('j1.adapter.loadHTML');
          if (statusTxt === 'success') {
            j1.setXhrDataState(id, statusTxt);
            j1.setXhrDomState(id, 'pending');
            // set data attribute to indicate HTML data loaded
            //
            $selector.attr('data-nb-notebook', 'loaded');
            // run HTML cleanups
            //
            $selector.find('button').replaceWith( function() {
              return '<button class="' + options.buttonStyles + ' js-nbinteract-widget"> Loading widgets ...</button>';
            });
            // disable (Google) translation for all input_area HTML elements
            // see: https://www.codingexercises.com/replace-all-instances-of-css-class-in-vanilla-js
            //
            var input_area = document.getElementsByClassName('input_area');
            [...input_area].forEach(x => x.className += " notranslate");
            // cleanup headlines in notebook HTML and add an id used by toccer
            //
            $selector.find('h1').replaceWith( function() {
              // return '<' + options.setHeadings + ' id="' + $(this)[0].id + '">' + $(this).text().slice(0,-1) + '</' + options.heading + '>';
              return '<h1 id="' + $(this)[0].id + '">' + $(this).text().slice(0,-1) + '</h1>';
            });
            $selector.find('h2').replaceWith( function() {
              return '<h2 id="' + $(this)[0].id + '">' + $(this).text().slice(0,-1) + '</h2>';
            });
            $selector.find('h3').replaceWith( function() {
              return '<h3 id="' + $(this)[0].id + '">' + $(this).text().slice(0,-1) + '</h3>';
            });
            $selector.find('h4').replaceWith( function() {
              return '<h4 id="' + $(this)[0].id + '">' + $(this).text().slice(0,-1) + '</h4>';
            });
            $selector.find('h5').replaceWith( function() {
              return '<h5 id="' + $(this)[0].id + '">' + $(this).text().slice(0,-1) + '</h5>';
            });
            logText = '\n' + 'data loaded successfully on id: ' + id;
            logger.info(logText);
          }
          if (statusTxt === 'error') {
            // jadams, 2020-07-21: to be checked why id could be UNDEFINED
            if (typeof(id) != "undefined") {
              var state = 'failed';
              logger.info('\n' + 'set state for ' + mod + ' to: ' + state);
              // jadams, 2020-07-21: intermediate state should DISABLED
              // executeFunctionByName(mod + '.setState', window, state);
              j1.setXhrDataState(id, statusTxt);
              j1.setXhrDomState(id, 'pending');
              logText = '\n' + 'loading data failed on id: ' +id+ ', error ' + xhr.status + ': ' + xhr.statusText;
              logger.error(logText);
              state = false;
            }
          }
        };
      };
      // failsafe - prevent XHR load errors
      //
      if (options.xhr_data !== '') {
        logger.info('\n' + 'HTML data file found: ' + options.xhr_data);
      } else  {
        logger.warning('\n' + 'no HTML data file found, loading data aborted');
        return;
      }
      if ($selector.length) {
        $selector.load( html_data_path, cb_load_closure(id));
      }
      return;
    },
    // -------------------------------------------------------------------------
    // registerNbiModalsCB()
    // regsiter callbacks for modals used
    // -------------------------------------------------------------------------
    registerNbiModalsCB: function () {
      // auto-scroll to the END of the SUCCESS messages
      // see: https://stackoverflow.com/questions/7303948/how-to-auto-scroll-to-end-of-div-when-data-is-added
      //
      window.setInterval(function() {
        var contentModalSuccess = document.getElementById(nbiContentModalSuccessID);
        contentModalSuccess.scrollTop = contentModalSuccess.scrollHeight;
      }, 500);
      // remove all INFO messages on modal CLOSED
      //
      $('#nbiModalTopInfo').on('hidden.bs.modal', function () {
        var ul = document.getElementById(nbiModalInfoMessagesID);
        var listLength = ul.children.length;
        if (listLength) {
          logger.debug('modal closed nbiModalTopInfo: remove all messages');
          _this.removeModalMessages(nbiModalInfoMessagesID);
        }
      });
      // remove all SUCCESS messages on modal CLOSED
      //
      $('#nbiModalTRSuccess').on('hidden.bs.modal', function () {
        var ul = document.getElementById(nbiModalSuccessMessagesID);
        var listLength = ul.children.length;
        if (listLength) {
          logger.debug('modal closed nbiModalTRSuccess: remove all messages');
          _this.removeModalMessages(nbiModalSuccessMessagesID);
        }
      });
      // remove all ERROR messages on modal CLOSED
      //
      $('#nbiModalTLDanger').on('hidden.bs.modal', function () {
        var ul = document.getElementById(nbiModalErrorMessagesID);
        var listLength = ul.children.length;
        if (listLength) {
          logger.debug('modal closed nbiModalTLDanger: remove all messages');
          _this.removeModalMessages(nbiModalErrorMessagesID);
        }
        if (moduleOptions.indicate_nbi_activity) {
          spinner.stop();
        }
      });
    },
    // -------------------------------------------------------------------------
    // loadNbiModals()
    // Load HTML data for all modals used
    // -------------------------------------------------------------------------
    loadNbiModals: function () {
      const nbiModalTopInfo = `
        <div id="nbiModalTopInfo"
          class="modal fade top"
          tabindex="-1"
          role="dialog"
          aria-labelledby="myModalLabel" aria-hidden="true"
          data-keyboard="false"
          data-backdrop="static">
          <div class="modal-dialog modal-frame modal-top modal-notify modal-info" role="document">
            <!-- Icon -->
            <div class="text-center">
              <i class="mdi mdi-10x mdi-progress-clock mdi-spin md-green mb-1"></i>
            </div>
            <!-- Content -->
            <div class="modal-content">
              <!-- Body -->
              <div id="nbiModalInfoBody" class="modal-body">
                <div>
                  <ul id="nbiModalInfoMessages"></ul>
                </div>
                <!-- Footer -->
                <div class="modal-footer justify-content-center">
                  <a type="button" class="btn btn-primary" data-bs-dismiss="modal">OK, thanks</a>
                </div>
              </div>
            </div>
            <!-- END Content -->
          </div>
        </div>
      `
      const nbiModalTRSuccess = `
        <div id="nbiModalTRSuccess"
          class="modal fade right"
          tabindex="-1"
          role="dialog"
          aria-labelledby="myModalLabel" aria-hidden="true"
          data-bs-keyboard="false"
          data-bs-backdrop="static">
          <div class="modal-dialog modal-dialog-scrollable modal-side-2x modal-top-right modal-notify modal-success" role="document">
            <!-- Content -->
            <div class="modal-content">
              <!-- Header -->
              <div class="modal-header">
                <p class="lead">Info - NbInteract</p>
                <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                  <i class="mdi mdi-close mdi-dark mdi-48px"></i>
                </button>
              </div>
              <!-- Icon -->
              <div class="text-center">
                <i class="mdi mdi-10x mdi-loading mdi-spin md-green mb-1"></i>
              </div>
              <!-- Body -->
              <div id="nbiModalSuccessBody" class="modal-body">
                <div>
                  <p> Initializing your Binder. This may take a while ...</p>
                  <ul id="nbiModalSuccessMessages"></ul>
                </div>
              </div>
              <!-- Footer -->
              <div class="modal-footer justify-content-center">
                <a type="button" class="btn btn-primary" data-bs-dismiss="modal">OK, thanks</a>
              </div>
            </div>
            <!-- END Content -->
          </div>
        </div>
      `
      const nbiModalTLDanger = `
        <div id="nbiModalTLDanger"
          class="modal fade left"
          tabindex="-1"
          role="dialog"
          aria-labelledby="myModalLabel" aria-hidden="true"
          data-bs-keyboard="false"
          data-bs-backdrop="static">
          <div class="modal-dialog modal-side-2x modal-top-left modal-notify modal-danger" role="document">
            <!-- Content -->
            <div id="nbiModalErrorBody" class="modal-content">
              <!--Header-->
              <div class="modal-header">
                <p class="lead">Error - NbInteract</p>
                <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                  <i class="mdi mdi-close mdi-dark mdi-48px"></i>
                </button>
              </div>
              <!-- Icon -->
              <div class="text-center">
                <i class="mdi mdi-10x mdi-alert md-red mb-1"></i>
              </div>
              <!-- Body -->
              <div id="nbiModalErrorBody" class="modal-body">
                <p> Initializing NbInteract failed:</p>
                <div>
                  <ul id="nbiModalErrorMessages"></ul>
                </div>
              </div>
              <!-- Footer -->
              <div class="modal-footer justify-content-center">
                <a type="button" class="btn btn-primary" data-bs-dismiss="modal">OK, thanks</a>
              </div>
            </div>
            <!-- END Content -->
          </div>
        </div>
      `
      nbiModal                = document.createElement('div');
      nbiModal.id             = 'nbi-modal-info';
      nbiModal.className      = 'nbi-modal';
      nbiModal.innerHTML      = nbiModalTopInfo;
      document.body.appendChild(nbiModal);
      nbiModal                = document.createElement('div');
      nbiModal.id             = 'nbi-modal-success';
      nbiModal.className      = 'nbi-modal';
      nbiModal.innerHTML      = nbiModalTRSuccess;
      document.body.appendChild(nbiModal);
      nbiModal                = document.createElement('div');
      nbiModal.id             = 'nbi-modal-danger';
      nbiModal.className      = 'nbi-modal';
      nbiModal.innerHTML      = nbiModalTLDanger;
      document.body.appendChild(nbiModal);
    },
    // -------------------------------------------------------------------------
    // messageHandler()
    // Manage messages send from other J1 modules
    // -------------------------------------------------------------------------
    messageHandler: function (sender, message) {
      var json_message      = JSON.stringify(message, undefined, 2);
      var messageSuccessUL  = document.getElementById(nbiModalSuccessMessagesID);
      var messageErrorUL    = document.getElementById(nbiModalErrorMessagesID);
      var message;
      logText = '\n' + 'received message from ' + sender + ': ' + json_message;
      logger.debug(logText);
      // -----------------------------------------------------------------------
      //  Process commands|actions
      // -----------------------------------------------------------------------
      // -----------------------------------------------------------------------
      //  command|nbi_init_finished
      //
      if (message.type === 'command' && message.action === 'nbi_init_finished') {
        _this.setState('finished');
        logger.debug('\n' + 'state: ' + _this.getState());
        logger.info('\n' + 'initializing module finished');
        if (moduleOptions.show_nbi_messages) {
          if (nbiModalAutoClose) {
            window.setTimeout(function() {
               $(nbiModalSuccessID).modal('hide');
            }, nbiModalAutoCloseDelay);
          }
        }
        if (moduleOptions.indicate_nbi_activity) {
          spinner.stop();
        }
      } // END message command/nbi_init_finished
      // -----------------------------------------------------------------------
      //  command|info
      //
      if (message.type === 'command' && message.action === 'info') {
//      var reMessageTS         = new RegExp('/(?:[1-9]\d{3}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1\d|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)|(?:[1-9]\d(?:0[48]|[2468][048]|[13579][26])|(?:[2468][048]|[13579][26])00)-02-29)T(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d(?:\.\d{1,9})?(?:Z|[+-][01]\d:[0-5]\d)/');
        var messageTS;
        // remove timestamp|loglevel from message if exists
        //
        messageTS = message.text.split('] ')[1];
        if (messageTS) {
          message.text = messageTS;
        }
        _this.appendModalMessage(messageSuccessUL, message.text)
        logger.debug('\n' + message.text);
        // show the info modal
        //
        if (moduleOptions.show_nbi_messages) {
          if ($(nbiModalSuccessID).is(':hidden')) {
            $(nbiModalSuccessID).modal('show');
          }
        }
      } // END message command/info
      // -----------------------------------------------------------------------
      //  command|error
      //
      if (message.type === 'command' && message.action === 'error') {
        var messageTS;
        // remove timestamp|loglevel from message if exists
        //
        messageTS = message.text.split('] ')[1];
        if (messageTS) {
          message.text = messageTS;
        }
        _this.appendModalMessage(messageErrorUL, message.text)
        logger.error('\n' + message.text);
        // stop the (progress) spinner (currently NOT used)
        //
        // if (moduleOptions.indicate_nbi_activity) {
        //   spinner.stop();
        // }
        if (moduleOptions.show_nbi_messages) {
          // hide the info modal if shown
          //
          $(nbiModalSuccessID).on('shown.bs.modal', function () {
            $(nbiModalSuccessID).modal('hide');
          });
          // hide the info modal uncondionally (need ???)
          //
          $(nbiModalSuccessID).modal('hide');
          // show the error modal
          //
          $(nbiModalSuccessID).on('hidden.bs.modal', function () {
            if ($(nbiModalErrorID).is(':hidden')) {
              $(nbiModalErrorID).modal('show');
              // auto-close the error modal
              //
              if (nbiModalAutoClose) {
                window.setTimeout(function() {
                  $(nbiModalErrorID).modal('hide');
                }, nbiModalAutoCloseDelay);
              }
            }
          });
        }
      } // END message command/error
      return true;
    }, // END messageHandler
    // -------------------------------------------------------------------------
    // getNbiButtonsState()
    // Gets the current (processing) state of NBI widget buttons
    // -------------------------------------------------------------------------
    getNbiButtonState: function () {
      var state;
      var cellButtons = document.querySelectorAll('.js-nbinteract-widget')
      if (cellButtons.length) {
        state = true;
      } else {
        state = false;
      }
      // cellButtons.forEach (function (elm) {
      //   state = elm.innerHTML;
      //   if (state == 'Initializing widgets ...') {
      //     state = 'init';
      //    } else {
      //      state = 'bla';
      //    }
      // });
      return state;
     }, // END getNbiButtonsState
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
    appendModalMessage: function (elmID, msg) {
      var li = document.createElement('li');
        li.setAttribute('class','item');
        elmID.appendChild(li);
        li.innerHTML = li.innerHTML + msg;
    },  // END appendModalMessage
    removeModalMessages: function (elmID) {
      var ul = document.getElementById(elmID);
      var listLength = ul.children.length;
      if (listLength) {
        for (var i = 0; i < listLength; i++) {
          ul.removeChild(ul.children[0]);
        }
      }
    }  // END removeModalMessages
  }; // END return
})(j1, window);




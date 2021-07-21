

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/logger.js
 # JS Adapter for for J1 Logger (log4javascript)
 #
 # Product/Info:
 # https://jekyll.one
 #
 # Copyright (C) 2021 Juergen Adams
 #
 # J1 Template is licensed under the MIT License.
 # For details, see https://jekyll.one
 # -----------------------------------------------------------------------------
 # Adapter generated: 2021-07-21 18:57:26 +0000
 # -----------------------------------------------------------------------------
*/
'use strict';j1.adapter.logger=function(e){var t,a,o,l,n,s,r,d,i,p,u='production',c=e.generateId(11),g=e.getCookieNames(),m=!1,v={},f={},h={},_=function(e){var t=[];try{0()}catch(u){var a=/^(.+?) ?\(?((?:file|https?|chrome-extension):.*?):(\d+)(?::(\d+))?\)?\s*$/gi,o=u.stack.replace(/^.*?\n/,'').replace(/(?:\n@:0)?\s+$/m,'').replace(/^\(/gm,'{anon}(').split('\n').pop(),l=o.replace(a,'$2:$3'),n=o.split(':'),s=n[n.length-3],r=s.split('/');''==(s=r[r.length-1])&&(s='(index)');var d=n[n.length-2];t.push({name:'file',value:s}),t.push({name:'line',value:d}),t.push({name:'path',value:l}),t.push({name:'id',value:c})}for(var i=1,p=e.customFields.length;i<p;i++){e.customFields[i].name;t[i].value&&(e.customFields[i].value=t[i].value)}return t[0].value},j=function(){};return{init:function(){e.adapter.logger.state='started',v=$.extend({},{appenders:[{name:"Console Appender",appender:{name:"consoleAppender",enabled:!0}},{name:"Ajax Appender",appender:{name:"ajaxAppender",enabled:!1}},{name:"Popup Appender",appender:{name:"popupAppender",enabled:!1}}],loggers:[{name:"Parent Logger",logger:{type:"parent",name:"j1",appender:["consoleAppender","ajaxAppender"],level:{production:"warn",development:"debug"}}}],tz_offset:"GMT+01:00"}),f=$.extend({},{enabled:!1,private_data:"_data/private.yml",ssl:!1,origin:"localhost",host_name:"0.0.0.0",port:40020,verbose:!1,logger_client:{log_folder:"log",log_file_name:"messages",log_file_ext:"log",create_on_start:!0,reset_on_start:!0,rolling_files:!1,file_mode:"append"},oauth_client:{enabled:!1,provider:"github",provider_url:"https://github.com",token_path:"/login/oauth/access_token",authorize_path:"/login/oauth/authorize"},git_client:{enabled:!1,secret:"12ada70c0d34914d194f1a790c9b23bd",payload_url:"https://smee.io/bzTe8lpQq1KeSJF",pull:{execute:!1,response_success:"The pull request to your local working copy finished successfully.",response_failed:"The pull request to your local working copy has failed. Reason: "}},npm_client:{enabled:!1,built:{execute:!1,response_success:"The built request to your local site finished successfully.",response_failed:"The built request to your local fite has failed. Reason: "}},commit_detection:{modal_commit_detected:{enabled:!0,autohide:!1,autohidden:5e3},modal_pull_response:{enabled:!0,autohide:!1,autohidden:5e3}}}),h=v.appenders[1].appender,o=e.adapter.logger,l=log4javascript.getLogger('j1.adapter.logger');var i=setInterval(function(){if('na'!==(t=e.readCookie(g.user_session)).mode)return clearInterval(i),l.info("\nmet dependencies for: mode detected"),a='app'===t.mode,p=a?h.payload_url_app:h.payload_url_web,p='http://localhost:'+f.port+'/log2disk?request=write',(s=new log4javascript.BrowserConsoleAppender).setThreshold(log4javascript.Level.DEBUG),(n=new log4javascript.AjaxAppender(p)).setThreshold(log4javascript.Level.DEBUG),n.setWaitForResponse(!0),n.setSendAllOnUnload(!0),n.addHeader('X-Page-ID',c),n.addHeader('X-TZ-Offset',v.tz_offset),m&&n.setRequestSuccessCallback(j),d=new log4javascript.PatternLayout('[%d{HH:mm:ss.SSS}] [%f{4}] [%-5p] [%-60c] [%f{1}:%f{2}] %m%n[%f{3}]'),r=new log4javascript.HttpPostDataLayout,new log4javascript.XmlLayout,new log4javascript.JsonLayout,new log4javascript.NullLayout,new log4javascript.SimpleLayout,d.setCustomField('file',_),d.setCustomField('line',_),d.setCustomField('path',_),d.setCustomField('id',_),r.setCustomField('id',c),s.setLayout(d),n.setLayout(r),'production'==u&&log4javascript.getLogger('j1').setLevel(log4javascript.Level.WARN),'development'==u||'devel'==u||'dev'==u||'test'==u?log4javascript.getLogger('j1').setLevel(log4javascript.Level.DEBUG):log4javascript.getLogger('j1').setLevel(log4javascript.Level.WARN),log4javascript.getRootLogger().addAppender(s),h.enabled?(log4javascript.getRootLogger().addAppender(n),l.info("\najax appender/util server detected as: enabled")):l.info("\najax appender/util server detected as: disabled"),o.setState('finished'),l.info("\nstate: "+o.getState()),l.info("\nmodule initialized successfully"),!0},25)},messageHandler:function(e,t){var a=JSON.stringify(t,undefined,2);return i="\nreceived message from "+e+': '+a,l.debug(i),'command'===t.type&&'module_initialized'===t.action&&l.info('\n'+t.text),!0},setState:function(t){e.adapter.logger.state=t},getState:function(){return e.adapter.logger.state}}}(j1,window);



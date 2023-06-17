

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/logger.js
 # JS Adapter for for J1 Logger (log4javascript)
 #
 # Product/Info:
 # https://jekyll.one
 #
 # Copyright (C) 2023 Juergen Adams
 #
 # J1 Theme is licensed under the MIT License.
 # For details, see: https://github.com/jekyll-one-org/j1-template/blob/main/LICENSE.md
 # -----------------------------------------------------------------------------
 # Adapter generated: 2023-06-17 06:07:38 +0200
 # -----------------------------------------------------------------------------
*/
'use strict';j1.adapter.logger=function(e){var t,a,n,o,l,s,r,p,d,i,u,g,c,m='production',f=e.generateId(11),v=e.getCookieNames(),_=!1,h={},j={},y=function(e){var t=[];try{0()}catch(u){var a=/^(.+?) ?\(?((?:file|https?|chrome-extension):.*?):(\d+)(?::(\d+))?\)?\s*$/gi,n=u.stack.replace(/^.*?\n/,'').replace(/(?:\n@:0)?\s+$/m,'').replace(/^\(/gm,'{anon}(').split('\n').pop(),o=n.replace(a,'$2:$3'),l=n.split(':'),s=l[l.length-3],r=s.split('/');''==(s=r[r.length-1])&&(s='(index)');var p=l[l.length-2];t.push({name:'file',value:s}),t.push({name:'line',value:p}),t.push({name:'path',value:o}),t.push({name:'id',value:f})}for(var d=1,i=e.customFields.length;d<i;d++){e.customFields[d].name;t[d].value&&(e.customFields[d].value=t[d].value)}return t[0].value},b=function(){};return{init:function(g){e.adapter.logger.state='started';$.extend({module_name:'j1.adapter.logger',generated:'2023-06-17 06:07:38 +0200'},g);s=e.adapter.logger,r=log4javascript.getLogger('j1.adapter.logger'),t=$.extend({},{enabled:!0,tz_offset:"GMT+01:00",appenders:[{name:"Console Appender",appender:{name:"consoleAppender",enabled:!1,type:"BrowserConsoleAppender",layout:"PatternLayout",custom_fields:["file","line","path"],pattern_string:"[%d{HH:mm:ss.SSS}] [%-5p] [%-40c] [%f{1}:%f{2}] [%m]%n                       [%f{3}]"}},{name:"Ajax Appender",appender:{name:"ajaxAppender",enabled:!1,type:"BrowserAjaxAppender",layout:"JsonLayout",custom_fields:["file","line","path"],log_folder:"log",log_file_name:"messages",log_file_ext:"log",create_on_start:!0,reset_on_start:!0,rolling_files:!1,mode:"append"}},{name:"Popup Appender",appender:{name:"popupAppender",enabled:!1,type:"PopUpAppender",width:600,height:400,lazyInit:!1,initiallyMinimized:!1,layout:"PatternLayout",custom_fields:[],pattern_string:"[%d{HH:mm:ss}] [ %-5p] - [%m{1}]%n"}}],loggers:[{name:"Parent Logger",logger:{type:"parent",name:"j1",appender:["consoleAppender","ajaxAppender"],level:{production:"warn",development:"debug"}}}]}),a=$.extend({},{tz_offset:"GMT+01:00",appenders:[{name:"Console Appender",appender:{name:"consoleAppender",enabled:!0}},{name:"Ajax Appender",appender:{name:"ajaxAppender",enabled:!1}},{name:"Popup Appender",appender:{name:"popupAppender",enabled:!1}}]}),n=$.extend(!0,{},t,a),j=n.appenders[1].appender,h=$.extend({},{enabled:!1,private_data:"_data/private.yml",ssl:!1,origin:"localhost",host_name:"0.0.0.0",port:40020,verbose:!1,logger_client:{log_folder:"log",log_file_name:"messages",log_file_ext:"log",create_on_start:!0,reset_on_start:!0,rolling_files:!1,file_mode:"append"},oauth_client:{enabled:!1,provider:"github",provider_url:"https://github.com",token_path:"/login/oauth/access_token",authorize_path:"/login/oauth/authorize"},git_client:{enabled:!1,secret:"12ada70c0d34914d194f1a790c9b23bd",payload_url:"https://smee.io/bzTe8lpQq1KeSJF",pull:{execute:!1,response_success:"The pull request to your local working copy finished successfully.",response_failed:"The pull request to your local working copy has failed. Reason: "}},npm_client:{enabled:!1,built:{execute:!1,response_success:"The built request to your local site finished successfully.",response_failed:"The built request to your local fite has failed. Reason: "}},commit_detection:{modal_commit_detected:{enabled:!0,autohide:!1,autohidden:5e3},modal_pull_response:{enabled:!0,autohide:!1,autohidden:5e3}}});var A=setInterval(function(){if('na'!==(o=e.readCookie(v.user_session)).mode)return clearInterval(A),r.debug("\nmet dependencies for: mode detected"),l='app'===o.mode,c=l?j.payload_url_app:j.payload_url_web,c='http://localhost:'+h.port+'/log2disk?request=write',(d=new log4javascript.BrowserConsoleAppender).setThreshold(log4javascript.Level.DEBUG),(p=new log4javascript.AjaxAppender(c)).setThreshold(log4javascript.Level.DEBUG),p.setWaitForResponse(!0),p.setSendAllOnUnload(!0),p.addHeader('X-Page-ID',f),p.addHeader('X-TZ-Offset',n.tz_offset),_&&p.setRequestSuccessCallback(b),u=new log4javascript.PatternLayout('[%d{HH:mm:ss.SSS}] [%f{4}] [%-5p] [%-60c] [%f{1}:%f{2}] %m%n[%f{3}]'),i=new log4javascript.HttpPostDataLayout,new log4javascript.XmlLayout,new log4javascript.JsonLayout,new log4javascript.NullLayout,new log4javascript.SimpleLayout,u.setCustomField('file',y),u.setCustomField('line',y),u.setCustomField('path',y),u.setCustomField('id',y),i.setCustomField('id',f),d.setLayout(u),p.setLayout(i),'production'==m&&log4javascript.getLogger('j1').setLevel(log4javascript.Level.WARN),'development'==m||'devel'==m||'dev'==m||'test'==m?log4javascript.getLogger('j1').setLevel(log4javascript.Level.DEBUG):log4javascript.getLogger('j1').setLevel(log4javascript.Level.WARN),log4javascript.getRootLogger().addAppender(d),j.enabled?(log4javascript.getRootLogger().addAppender(p),r.info("\najax appender/util server detected as: enabled")):r.info("\najax appender/util server detected as: disabled"),s.setState('finished'),r.debug("\nstate: "+s.getState()),r.info("\nmodule initialized successfully"),!0},10)},messageHandler:function(e,t){var a=JSON.stringify(t,undefined,2);return g="\nreceived message from "+e+': '+a,r.debug(g),'command'===t.type&&'module_initialized'===t.action&&r.info('\n'+t.text),!0},setState:function(t){e.adapter.logger.state=t},getState:function(){return e.adapter.logger.state}}}(j1,window);





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
 # Adapter generated: 2021-02-19 23:38:28 +0000
 # -----------------------------------------------------------------------------
*/
'use strict';j1.adapter.logger=function(e){var t,a,o,n,l,r,s,p,d,i,g='production',u=e.generateId(12),c=e.getCookieNames(),m=!1,v={},f={},j=function(e){var t=[];try{0()}catch(g){var a=/^(.+?) ?\(?((?:file|https?|chrome-extension):.*?):(\d+)(?::(\d+))?\)?\s*$/gi,o=g.stack.replace(/^.*?\n/,'').replace(/(?:\n@:0)?\s+$/m,'').replace(/^\(/gm,'{anon}(').split('\n').pop(),n=o.replace(a,'$2:$3'),l=o.split(':'),r=l[l.length-3],s=r.split('/');''==(r=s[s.length-1])&&(r='(index)');var p=l[l.length-2];t.push({name:'file',value:r}),t.push({name:'line',value:p}),t.push({name:'path',value:n}),t.push({name:'id',value:u})}for(var d=1,i=e.customFields.length;d<i;d++){e.customFields[d].name;t[d].value&&(e.customFields[d].value=t[d].value)}return t[0].value},y=function(){};return{init:function(){e.adapter.logger.state='started',v=$.extend({},{appenders:[{name:"Console Appender",appender:{name:"consoleAppender",enabled:!0,type:"BrowserConsoleAppender",layout:"PatternLayout",custom_fields:["file","line","path"],pattern_string:"[%d{HH:mm:ss.SSS}] [%f{4}] [%-5p] [%-40c] [%f{1}:%f{2}] %m%n[%f{3}]"}},{name:"Ajax Appender",appender:{name:"ajaxAppender",enabled:!1,type:"BrowserAjaxAppender",layout:"JsonLayout",custom_fields:["file","line","path"],payload_url_app:"http://localhost:5000/log2disk?request=write",payload_url_web:"http://localhost:44444/log2disk?request=write",log_folder:"log",log_file_name:"messages",log_file_ext:"log",create_on_start:!0,reset_on_start:!0,rolling_files:!1,file_mode:"append"}},{name:"Popup Appender",appender:{name:"popupAppender",enabled:!1,type:"PopUpAppender",width:600,height:400,lazyInit:!1,initiallyMinimized:!1,layout:"PatternLayout",custom_fields:[],pattern_string:"[%d{HH:mm:ss}] [ %-5p] - [%m{1}]%n"}}],loggers:[{name:"Parent Logger",logger:{type:"parent",name:"j1",appender:["consoleAppender","ajaxAppender"],level:{production:"warn",development:"debug"}}}]}),f=v.appenders[1].appender,o=e.adapter.logger,n=log4javascript.getLogger('j1.adapter.logger'),log4javascript.getLogger('j1.adapter.log2disk');var d=setInterval(function(){if('na'!==(t=e.readCookie(c.user_session)).mode)return clearInterval(d),n.info('met dependencies for: mode detected'),a='app'===t.mode,i=a?f.payload_url_app:f.payload_url_web,(r=new log4javascript.BrowserConsoleAppender).setThreshold(log4javascript.Level.DEBUG),(l=new log4javascript.AjaxAppender(i)).setThreshold(log4javascript.Level.DEBUG),l.setWaitForResponse(!0),l.setSendAllOnUnload(!0),l.addHeader('X-Page-ID',u),m&&l.setRequestSuccessCallback(y),p=new log4javascript.PatternLayout('[%d{HH:mm:ss.SSS}] [%f{4}] [%-5p] [%-40c] [%f{1}:%f{2}] %m%n[%f{3}]'),s=new log4javascript.HttpPostDataLayout,new log4javascript.XmlLayout,new log4javascript.JsonLayout,new log4javascript.NullLayout,new log4javascript.SimpleLayout,p.setCustomField('file',j),p.setCustomField('line',j),p.setCustomField('path',j),p.setCustomField('id',j),s.setCustomField('id',u),r.setLayout(p),l.setLayout(s),'production'==g&&log4javascript.getLogger('j1').setLevel(log4javascript.Level.WARN),'development'==g||'devel'==g||'dev'==g||'test'==g?log4javascript.getLogger('j1').setLevel(log4javascript.Level.DEBUG):log4javascript.getLogger('j1').setLevel(log4javascript.Level.WARN),log4javascript.getRootLogger().addAppender(r),f.enabled?(log4javascript.getRootLogger().addAppender(l),n.info('ajax appender detected as: enabled')):n.info('ajax appender detected as: disabled'),o.setState('finished'),n.info('state: '+o.getState()),n.info('module initialized successfully'),!0},25)},messageHandler:function(e,t){var a=JSON.stringify(t,undefined,2);return d='received message from '+e+': '+a,n.debug(d),'command'===t.type&&'module_initialized'===t.action&&n.info(t.text),!0},setState:function(t){e.adapter.logger.state=t},getState:function(){return e.adapter.logger.state}}}(j1,window);



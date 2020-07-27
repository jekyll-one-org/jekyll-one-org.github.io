

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/logger.js
 # JS Adapter for for J1 Logger (log4javascript)
 #
 # Product/Info:
 # https://jekyll.one
 #
 # Copyright (C) 2020 Juergen Adams
 #
 # J1 Template is licensed under the MIT License.
 # For details, see https://jekyll.one
 # -----------------------------------------------------------------------------
 # Adapter generated: 2020-07-27 20:04:15 +0200
 # -----------------------------------------------------------------------------
*/
'use strict';j1.adapter.logger=function(e){var t,a,o,n,l,r,s,p,i,d,p,g,u,c,m,v,f='production',j=e.generateId(12),y=e.getCookieNames(),h=!1,L={},_={},A=function(e){var t=[];try{0()}catch(e){var a=/^(.+?) ?\(?((?:file|https?|chrome-extension):.*?):(\d+)(?::(\d+))?\)?\s*$/gi,o=e.stack.replace(/^.*?\n/,'').replace(/(?:\n@:0)?\s+$/m,'').replace(/^\(/gm,'{anon}(').split('\n'),n=o.pop(),l=n.replace(a,'$2:$3'),r=n.split(':'),s=r[r.length-3],p=s.split('/');s=p[p.length-1],''==s&&(s='(index)');var i=r[r.length-2];t.push({name:'file',value:s}),t.push({name:'line',value:i}),t.push({name:'path',value:l}),t.push({name:'id',value:j})}for(var d=1,g=e.customFields.length;d<g;d++){e.customFields[d].name;t[d].value&&(e.customFields[d].value=t[d].value)}return t[0].value},w=function(){};return{init:function(){e.adapter.logger.state='started',L=$.extend({},{appenders:[{name:"Console Appender",appender:{name:"consoleAppender",enabled:!0,type:"BrowserConsoleAppender",layout:"PatternLayout",custom_fields:["file","line","path"],pattern_string:"[%d{HH:mm:ss.SSS}] [%f{4}] [%-5p] [%-40c] [%f{1}:%f{2}] %m%n[%f{3}]"}},{name:"Ajax Appender",appender:{name:"ajaxAppender",enabled:!1,type:"BrowserAjaxAppender",layout:"JsonLayout",custom_fields:["file","line","path"],payload_url_app:"http://localhost:5000/log2disk?request=write",payload_url_web:"http://localhost:44444/log2disk?request=write",log_folder:"log",log_file_name:"messages",log_file_ext:"log",create_on_start:!0,reset_on_start:!0,rolling_files:!1,file_mode:"append"}},{name:"Popup Appender",appender:{name:"popupAppender",enabled:!1,type:"PopUpAppender",width:600,height:400,lazyInit:!1,initiallyMinimized:!1,layout:"PatternLayout",custom_fields:[],pattern_string:"[%d{HH:mm:ss}] [ %-5p] - [%m{1}]%n"}}],loggers:[{name:"Parent Logger",logger:{type:"parent",name:"j1",appender:["consoleAppender","ajaxAppender"],level:{production:"warn",development:"debug"}}}]}),_=L.appenders[1].appender,o=e.adapter.logger,n=log4javascript.getLogger('j1.adapter.logger'),l=log4javascript.getLogger('j1.adapter.log2disk');var m=setInterval(function(){if(t=e.readCookie(y.user_session),'na'!==t.mode)return clearInterval(m),a='app'===t.mode,v=a?_.payload_url_app:_.payload_url_web,s=new log4javascript.BrowserConsoleAppender,s.setThreshold(log4javascript.Level.DEBUG),r=new log4javascript.AjaxAppender(v),r.setThreshold(log4javascript.Level.DEBUG),r.setWaitForResponse(!0),r.setSendAllOnUnload(!0),r.addHeader('X-Page-ID',j),h&&r.setRequestSuccessCallback(w),c=new log4javascript.PatternLayout('[%d{HH:mm:ss.SSS}] [%f{4}] [%-5p] [%-40c] [%f{1}:%f{2}] %m%n[%f{3}]'),i=new log4javascript.HttpPostDataLayout,d=new log4javascript.XmlLayout,p=new log4javascript.JsonLayout,g=new log4javascript.NullLayout,u=new log4javascript.SimpleLayout,c.setCustomField('file',A),c.setCustomField('line',A),c.setCustomField('path',A),c.setCustomField('id',A),i.setCustomField('id',j),s.setLayout(c),r.setLayout(i),'production'==f&&log4javascript.getLogger('j1').setLevel(log4javascript.Level.WARN),'development'==f||'devel'==f||'dev'==f||'test'==f?log4javascript.getLogger('j1').setLevel(log4javascript.Level.DEBUG):log4javascript.getLogger('j1').setLevel(log4javascript.Level.WARN),log4javascript.getRootLogger().addAppender(s),_.enabled?(log4javascript.getRootLogger().addAppender(r),n.info('ajax appender detected as: enabled')):n.info('ajax appender detected as: disabled'),o.setState('finished'),n.info('state: '+o.getState()),n.info('module initialized successfully'),!0},25)},messageHandler:function(e,t){var a=JSON.stringify(t,undefined,2);return m='received message from '+e+': '+a,n.debug(m),'command'===t.type&&'module_initialized'===t.action&&n.info(t.text),!0},setState:function(t){e.adapter.logger.state=t},getState:function(){return e.adapter.logger.state}}}(j1,window);





  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/comments.js
 # J1 Adapter for the comments module
 #
 # Product/Info:
 # https://jekyll.one
 #
 # Copyright (C) 2023 Juergen Adams
 #
 # J1 Theme is licensed under the MIT License.
 # For details, see: https://github.com/jekyll-one-org/j1-template/blob/main/LICENSE.md
 # -----------------------------------------------------------------------------
 #  Adapter generated: 2023-07-05 19:08:53 +0200
 # -----------------------------------------------------------------------------
*/
'use strict';j1.adapter.comments=function(e){(new Date).toISOString();var t,n,a,i,o,r,m,d,s,c,l=e.getCookieNames(),v='hyvor',u=(document.createElement('script'),document.createElement('script')),f=document.createElement('script');return{init:function(c){if(r=null!=c?$.extend({},c):{},a=$.extend({},{enabled:!1,provider:"disqus",site_id:"your-site-id",comments_headline:{en:"Leave a comment",bg:"\u041e\u0441\u0442\u0430\u0432\u0438\u0442\u0435 \u043a\u043e\u043c\u0435\u043d\u0442\u0430\u0440",de:"Kommentieren",dk:"Efterlad en kommentar",nl:"Laat een reactie achter",fr:"Laissez un commentaire",gr:"\u0391\u03c6\u03ae\u03c3\u03c4\u03b5 \u03ad\u03bd\u03b1 \u03c3\u03c7\u03cc\u03bb\u03b9\u03bf",hr:"Ostavite komentar",es:"Deja un comentario",it:"Lascia un commento",pt:"Deixe um coment\xe1rio",se:"L\xe4mna en kommentar",si:"Zanecha\u0165 koment\xe1r",fi:"J\xe4t\xe4 kommentti",no:"Legg igjen en kommentar",hu:"Sz\xf3lj hozz\xe1",cz:"Zanechat koment\xe1\u0159",tr:"Yorum yap",ee:"J\xe4ta kommentaar",lv:"Atst\u0101jiet savu koment\u0101ru",lt:"Palikite komentar\u0105",pl:"Zostaw komentarz",ro:"Lasa un comentariu",ru:"\u041e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439"}}),i=$.extend({},{enabled:!1,provider:"hyvor",site_id:"your-site-id"}),'undefined'!=typeof(o=$.extend(!0,{},a,i,r)).comments&&(o.enabled='true'===o.comments),o.enabled){$.extend({module_name:'j1.adapter.comments',generated:'2023-07-05 19:08:53 +0200'},c);d=e.adapter.comments,s=log4javascript.getLogger('j1.adapter.comments'),t="number"==typeof o.site_id?o.site_id.toString():o.site_id,n=!t.includes('your');var p=setInterval(function(){if('finished'==e.getState()){if(!n)return s.debug("\ninvalid site id detected for Hyvor Talk: "+t),s.info("\nskip initialization for provider: "+v),clearInterval(p),!1;if(d.setState('started'),s.debug("\nstate: "+d.getState()),s.info("\nmodule is being initialized for provider: "+v),(m=e.readCookie(l.user_consent)).personalization){$('#main-content').append('<h2 id="leave-a-comment" class="mt-4">Leave a comment</h2>'),s.info("\nuser consent on comments: "+m.personalization),s.info("\nenable comments provider hyvor on siteID: "+t),u.id='hyvor-embed',u.src='//talk.hyvor.com/web-api/embed.js',u.async=!0,document.head.appendChild(u),f.id='hyvor-callback',f.text='\n',f.text+='var HYVOR_TALK_WEBSITE = "'+t+'"\n',f.text+="var HYVOR_TALK_CONFIG = {\n",f.text+="\t\t  url: false,\n",f.text+="      id: false\n",f.text+="\t  };\n",document.head.appendChild(f),$('#main-content').append('<div id="hyvor-talk-view"></div>');var a=setInterval(function(){$('#hyvor-talk-view').children().length&&($('#hyvor-talk-iframe').prop('title','Hyvor comments iframe'),clearInterval(a))},10)}else s.info("\nuser consent on comments: "+m.personalization),s.debug("\ndisable Hyvor Talk on site id: "+t),$('#leave-a-comment').remove(),$('#hyvor-embed').remove(),$('#hyvor-callback').remove(),$('#hyvor-talk-view').remove();clearInterval(p)}},10)}else p=setInterval(function(){'finished'==e.getState()&&((s=log4javascript.getLogger('j1.adapter.comments')).info("\ncomment services: disabled"),clearInterval(p))},10)},messageHandler:function(e,t){var n=JSON.stringify(t,undefined,2);return c="\nreceived message from "+e+': '+n,s.debug(c),'command'===t.type&&'module_initialized'===t.action&&s.info('\n'+t.text),!0},setState:function(e){d.state=e},getState:function(){return d.state}}}(j1,window);



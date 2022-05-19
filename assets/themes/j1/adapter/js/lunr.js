

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/lunr.js
 # J1 Adapter for J1 Lunr
 #
 # Product/Info:
 # https://jekyll.one
 #
 # Copyright (C) 2022 Juergen Adams
 #
 # J1 Template is licensed under the MIT License.
 # For details, see: https://github.com/jekyll-one-org/j1-template/blob/main/LICENSE.md
 # -----------------------------------------------------------------------------
 #  Adapter generated: 2022-05-19 16:07:24 +0000
 # -----------------------------------------------------------------------------
*/
'use strict';j1.adapter.lunr=function(e){var t,n,s,a={};return{init:function(s){$.extend({module_name:'j1.adapter.lunr',generated:'2022-05-19 16:07:24 +0000'},s);t=e.adapter.lunr,n=log4javascript.getLogger('j1.adapter.lunr'),a=$.extend({},{enabled:!0,placement:"navbar",target:"_blank",rebuild:!0,full_index:!1,stopwords:"/assets/themes/j1/modules/lunr/stopwords/en.txt",stopwords_locale:"en",strip_index_html:!1,min_length:3,date_format:"mmm dd, yyyy",module_dir:"/assets/themes/j1/modules/lunr/js",index_dir:"/assets/data",index_name:"lunr-index.json",index_file:"/assets/data/lunr-index.json",search_input:"#search-query",results:"#search-results",template:"#search-results-template",titleMsg:"",emptyMsg:""});var i=setInterval(function(){'finished'==e.getState()&&(t.setState('started'),n.debug("\nstate: "+t.getState()),n.info("\nmodule is being initialized"),$(a.search_input).lunrSearch({index_file:a.index_file,results:a.results,template:a.template,titleMsg:a.titleMsg,emptyMsg:a.emptyMsg}),t.setState('finished'),n.debug("\nstate: "+t.getState()),n.info("\ninitializing module finished"),clearInterval(i))},25);t.eventHandler()},eventHandler:function(){$('#clear-topsearch').on('click',function(){$(this).addClass('d-none').prevAll(':input').val(''),$('#search-results').hide(),$('#search-results').html('')})},messageHandler:function(e,t){var a=JSON.stringify(t,undefined,2);return s="\nreceived message from "+e+': '+a,n.debug(s),'command'===t.type&&'module_initialized'===t.action&&n.info('\n'+t.text),!0},setState:function(e){t.state=e},getState:function(){return t.state}}}(j1,window);



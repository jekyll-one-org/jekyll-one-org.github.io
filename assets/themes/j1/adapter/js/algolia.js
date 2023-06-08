

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/algolia.js
 # J1 Adapter for Algolia
 #
 # Product/Info:
 # https://jekyll.one
 #
 # Copyright (C) 2023 Juergen Adams
 #
 # J1 Theme is licensed under the MIT License.
 # For details, see: https://github.com/jekyll-one-org/j1-template/blob/main/LICENSE.md
 # -----------------------------------------------------------------------------
 #  Adapter generated: 2023-06-08 20:23:45 +0200
 # -----------------------------------------------------------------------------
*/
'use strict';j1.adapter.algolia=function(e){var a,t,i,n={};return{init:function(i){var s=$.extend({module_name:'j1.adapter.algolia',generated:'2023-06-08 20:23:45 +0200'},i);a=e.adapter.algolia,t=log4javascript.getLogger('j1.adapter.algolia'),a.state='pending',a.setState('started'),t.debug("\nstate: "+a.getState()),t.info("\nmodule is being initialized"),n=$.extend({},{enabled:!1,application_id:"your_application_id",search_only_api_key:"your_searchonly_api_key",index_name:"your_index_name",extensions_to_index:["adoc"],files_to_exclude:[]}),void 0!==s&&(n=$.extend({},n,s));var d=instantsearch({appId:n.application_id,apiKey:n.search_only_api_key,indexName:n.index_name,routing:!0}),r=function(e){if(new RegExp('^/pages|^/posts|^/collections').test(e.url)){var a='';e.date&&(a=moment.unix(e.date).format('MMM D, YYYY'));var t=e.url;const n=e._highlightResult.title.value;e._highlightResult.headings&&e._highlightResult.headings.map(e=>`<span class="post-breadcrumb">${e.value}</span>`).join(' > ');var i=e._highlightResult.html.value;return`\n            <li class="search-result-item">\n              <div class="card card-flat">\n                <div class="card-body">\n                  <span class="post-meta">${a}</span>\n                  <h2 class="card-title">${n}</h2>\n                  <h6 class="card-subtitle mb-2 text-muted">${e.tagline}</h6>\n                  <div class="card-text">${i}</div>\n                  <div class="card-footer">\n                    <a class="card-link" href="${t}" target="_blank">Read more ..</a>\n                  </div>\n                </div>\n              </div>\n            </li>\n          `}};return 1==n.enabled&&(d.addWidget(instantsearch.widgets.currentRefinedValues({container:'#current-refined-values',clearAll:!1})),d.addWidget(instantsearch.widgets.clearAll({container:'#clear-all',templates:{link:'Reset TAGS'},clearsQuery:!1,autoHideContainer:!1})),d.addWidget(instantsearch.widgets.pagination({container:'#pagination',maxPages:20,scrollTo:!1})),d.addWidget(instantsearch.widgets.searchBox({container:'#search-searchbar',placeholder:'Search this site ..',autofocus:!0,reset:!0,loadingIndicator:!1,poweredBy:!0})),d.addWidget(instantsearch.widgets.hits({container:'#search-hits',templates:{empty:'No results',item:r}})),d.addWidget(instantsearch.widgets.refinementList({container:'#refinement-list',attributeName:'tags',collapsible:!0,operator:'and',limit:5,sortBy:['isRefined','count:desc','name:asc'],templates:{header:'Tags'},showMore:!0}))),1==n.enabled?(d.start(),$('#searcher').addClass('row'),a.setState('finished'),t.debug("\nstate: "+a.getState()),t.info("\nmodule initialized successfully")):($('#algolia-site-search').append('<p class="ml-5 mt-5 mb-5 "> <strong>Algolia Search DISABLED</strong> </p>'),a.setState('finished'),t.debug("\nstate: "+a.getState()),t.warn("\nmodule disabled")),!0},messageHandler:function(e,a){var n=JSON.stringify(a,undefined,2);return i="\nreceived message from "+e+': '+n,t.debug(i),'command'===a.type&&'module_initialized'===a.action&&t.info('\n'+a.text),!0},setState:function(e){a.state=e},getState:function(){return a.state}}}(j1,window);



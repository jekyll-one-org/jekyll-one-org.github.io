

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/algolia.js
 # J1 Adapter for Algolia
 #
 # Product/Info:
 # https://jekyll.one
 #
 # Copyright (C) 2020 Juergen Adams
 #
 # J1 Template is licensed under the MIT License.
 # For details, see https://jekyll.one
 # -----------------------------------------------------------------------------
 #  Adapter generated: 2020-10-05 19:44:49 +0200
 # -----------------------------------------------------------------------------
*/
'use strict';j1.adapter.algolia=function(e){var t,a,i,n={};return{init:function(i){t=e.adapter.algolia,a=log4javascript.getLogger('j1.adapter.algolia'),t.state='pending';var s=$.extend({module_name:'j1.adapter.algolia',generated:'2020-10-05 19:44:49 +0200'},i);t.setState('started'),a.info('state: '+t.getState()),a.info('module is being initialized'),n=$.extend({},{enabled:!1,application_id:"your_application_id",search_only_api_key:"your_searchonly_api_key",index_name:"your_index_name",extensions_to_index:["adoc"],files_to_exclude:[]}),void 0!==s&&(n=e.mergeData(n,s));var r=instantsearch({appId:n.application_id,apiKey:n.search_only_api_key,indexName:n.index_name,routing:!0}),d=function(e){if(new RegExp('^/pages|^/posts|^/collections').test(e.url)){var t='';e.date&&(t=moment.unix(e.date).format('MMM D, YYYY'));var a=e.url;const n=e._highlightResult.title.value;e._highlightResult.headings&&e._highlightResult.headings.map(e=>`<span class="post-breadcrumb">${e.value}</span>`).join(' > ');var i=e._highlightResult.html.value;return`\n            <li class="search-result-item">\n              <div class="card card-flat">\n                <div class="card-body">\n                  <span class="post-meta">${t}</span>\n                  <h2 class="card-title">${n}</h2>\n                  <h6 class="card-subtitle mb-2 text-muted">${e.tagline}</h6>\n                  <div class="card-text">${i}</div>\n                  <div class="card-footer">\n                    <a class="card-link" href="${a}" target="_blank">Read more ..</a>\n                  </div>\n                </div>\n              </div>\n            </li>\n          `}};return 1==n.enabled&&(r.addWidget(instantsearch.widgets.currentRefinedValues({container:'#current-refined-values',clearAll:!1})),r.addWidget(instantsearch.widgets.clearAll({container:'#clear-all',templates:{link:'Reset TAGS'},clearsQuery:!1,autoHideContainer:!1})),r.addWidget(instantsearch.widgets.pagination({container:'#pagination',maxPages:20,scrollTo:!1})),r.addWidget(instantsearch.widgets.searchBox({container:'#search-searchbar',placeholder:'Search this site ..',autofocus:!0,reset:!0,loadingIndicator:!1,poweredBy:!0})),r.addWidget(instantsearch.widgets.hits({container:'#search-hits',templates:{empty:'No results',item:d}})),r.addWidget(instantsearch.widgets.refinementList({container:'#refinement-list',attributeName:'tags',collapsible:!0,operator:'and',limit:5,sortBy:['isRefined','count:desc','name:asc'],templates:{header:'Tags'},showMore:!0}))),1==n.enabled?(r.start(),$('#searcher').addClass('row'),t.setState('finished'),a.info('state: '+t.getState()),a.info('module initialized successfully')):($('#algolia-site-search').append('<p class="ml-5 mt-5 mb-5 "> <strong>Algolia Search DISABLED</strong> </p>'),t.setState('finished'),a.info('state: '+t.getState()),a.warn('module disabled')),!0},messageHandler:function(e,t){var n=JSON.stringify(t,undefined,2);return i='received message from '+e+': '+n,a.debug(i),'command'===t.type&&'module_initialized'===t.action&&a.info(t.text),!0},setState:function(e){t.state=e},getState:function(){return t.state}}}(j1,window);



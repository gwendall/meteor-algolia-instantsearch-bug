import React from 'react';
import instantsearch from 'instantsearch.js';
import { mount } from 'react-mounter';

const App = React.createClass({
  componentDidMount() {
    // Example: Product Hunt public keys :)
    const Search = instantsearch({
      appId: '0H4SMABBSG',
      apiKey: 'ddad357a3c9a243f14883afcf84ecb49',
      indexName: 'Post_production'
    });
    Search.addWidget(
      instantsearch.widgets.searchBox({
        container: '#search-box',
        placeholder: 'Recherche sur Product Hunt :)'
      })
    );
    Search.addWidget(
      instantsearch.widgets.hits({
        container: '#hits-container',
        hitsPerPage: 10
      })
    );
    Search.start();
  },
  render() {
    return (<div>
      <div id='search-box' />
      <div id='hits-container' />
    </div>);
  }
})
mount(App);

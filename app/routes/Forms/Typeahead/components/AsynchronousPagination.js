import React from 'react';
import { AsyncTypeahead } from 'react-bootstrap-typeahead';

import { GithubMenuItem } from './GithubMenuItem';
import { makeAndHandleRequest } from './utils';

const PER_PAGE = 20;

export class AsyncPagination extends React.Component {
    state = {
        isLoading: false,
        options: [],
        query: '',
    };
  
    _cache = {};
  
    render() {
        return (
            <AsyncTypeahead
                {...this.state}
                labelKey="login"
                maxResults={PER_PAGE - 1}
                minLength={2}
                onInputChange={this._handleInputChange}
                onPaginate={this._handlePagination}
                onSearch={this._handleSearch}
                paginate
                placeholder="Search for a Github user..."
                renderMenuItemChildren={(option) => (
                    <GithubMenuItem key={option.id} user={option} />
                )}
                useCache={false}
            />
        );
    }
  
    _handleInputChange = (query) => {
        this.setState({query});
    }
  
    _handlePagination = (e, shownResults) => {
        const {query} = this.state;
        const cachedQuery = this._cache[query];

        // Don't make another request if:
        // - the cached results exceed the shown results
        // - we've already fetched all possible results
        if (
            cachedQuery.options.length > shownResults ||
            cachedQuery.options.length === cachedQuery.total_count
        ) {
            return;
        }

        this.setState({isLoading: true});

        const page = cachedQuery.page + 1;

        makeAndHandleRequest(query, page)
            .then((resp) => {
                const options = cachedQuery.options.concat(resp.options);
                this._cache[query] = {...cachedQuery, options, page};
                this.setState({
                    isLoading: false,
                    options,
                });
            });
    }
  
    _handleSearch = (query) => {
        if (this._cache[query]) {
            this.setState({options: this._cache[query].options});
            return;
        }
  
        this.setState({isLoading: true});
        makeAndHandleRequest(query)
            .then((resp) => {
                this._cache[query] = {...resp, page: 1};
                this.setState({
                    isLoading: false,
                    options: resp.options,
                });
            });
    }
}

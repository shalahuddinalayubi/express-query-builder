const Filter = require('./filter.js');
const QueryRequest = require('./query-request');

function Query () {
    var _Subject = { }

    var _Request = { }

    /**
     * List of requested filter names.
     * 
     * @var Array
     */
    var _requestedFilters = []

    this.build = function (Subject, Request) {
        _Subject = Subject;
        _Request = new QueryRequest(Request);
        _requestedFilters = Array();

        return this;
    }

    /**
     * Define filter for requested client.
     * 
     * @param Array filters 
     * @returns this
     */
    this.allowedFillter = function (filters) {
        if (!Array.isArray(filters)) {
            throw new Error('Filters must an array');
        }

        for (const key in _Request.getFilter()) {
            if (filters.includes(key)) {
                _requestedFilters.push(new Filter(key, _Request));
            }
        }

        _buildQueryFilter();

        return this;
    }

    /**
     * Build query filter.
     * 
     * @return void
     */
    var _buildQueryFilter = function () {
        _requestedFilters.forEach(function (filter) {
            filter.build(_Subject);
        });
    }

    this.getQuery = function () {
        return _Subject;
    }

    this.getRequest = function () {
        return _Request;
    }

    this.getQueryBuilder = function () {
        return _Subject;
    }
}

module.exports = new Query();

const Filter = require('./filter.js');
const Sort = require('./sort.js');
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

    /**
     * The requested sort query.
     * 
     * @var Array
     */
    var _requestedSorts = []

    this.build = function (Subject, Request) {
        _Subject = Subject;
        _Request = new QueryRequest(Request);
        _requestedFilters = Array();
        _requestedSorts = Array();

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

    /**
     * Build sort query based on requested.
     * 
     * @param {*} sorts 
     * @returns this
     */
    this.allowedSort = function (sorts) {
        if (!Array.isArray(sorts)) {
            throw new Error('Sorts must be an array');
        }

        // First get all sort query requested
        // compare each with the sorts if match add.
        _Request.getSort()
                .forEach(function (sort) {
                    if (sorts.includes(sort.replace('-', ''))) {
                        var order = sort.includes('-') ? 'DESC' : 'ASC';
                        _requestedSorts.push(new Sort(sort.replace('-', ''), order, _Request));
                    }
                });

        _buildQuerySort();

        return this;
    }

    /**
     * Build the requested sort query.
     * 
     * @returns void
     */
    var _buildQuerySort = function () {
        _requestedSorts.forEach(function (sort) {
            sort.build(_Subject);
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

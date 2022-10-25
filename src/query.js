const AllowedFilter = require('./allowed-filter.js');
const QueryRequest = require('./query-request');

function Query () {
    var _Subject = { }

    var _Request = { }

    var _allowedFilters = []

    this.build = function (Subject, Request) {
        _Subject = Subject;
        _Request = new QueryRequest(Request);
        _allowedFilters = Array();

        return this;
    }

    this.allowedFillter = function (filters) {
        if (Array.isArray(filters)) {
            filters.forEach(function (filter) {
                _allowedFilters.push(new AllowedFilter(filter, _Request));
            });
        };

        _buildQuery();

        return this;
    }

    var _buildQuery = function () {
        _allowedFilters.forEach(function (filter) {
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

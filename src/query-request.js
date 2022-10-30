function QueryRequest (Request) {
    var _Request = Request

    this.isRequestedFilterMultipleValues = function (name, separator = ',') {
        return this.getQueryFilterRequestedValue(name).includes(separator);
    }

    this.splitFilterValues = function (name, separator = ',') {
        return this.getQueryFilterRequestedValue(name).split(separator);
    }

    this.getQueryFilterRequestedValue = function (name) {
        return _Request.query.filter[name];
    }

    this.isQueryFilterRequested = function (name) {
        return _Request.query.filter[name] ? true : false;
    }

    this.hasQueryFilter = function () {
        return _Request.query.filter ? true : false;
    }

    /**
     * Get sort value.
     * 
     * @returns Array
     */
    this.getSort = function () {
        return this.hasQuerySort()
                ? _Request.query.sort.split(',')
                : [];
    }

    /**
     * Determine the request has sort query.
     * 
     * @returns Boolean
     */
    this.hasQuerySort = function () {
        return _Request.query.sort ? true : false;
    }
}

module.exports = QueryRequest;

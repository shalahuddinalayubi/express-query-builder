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
     * Determine the request has sort query.
     * 
     * @returns Boolean
     */
    this.hasQuerySort = function () {
        return _Request.query.sort ? true : false;
    }

    /**
     * Get query sort requested value.
     * 
     * @returns Array|String
     */
    this.getQuerySortRequested = function (sort = null) {
        return this.hasQuerySort
                ? _Request.query.sort.split(',')
                : [];
    }

    /**
     * Check if the given parameter is requested for sort query.
     * 
     * @param String sort 
     * @returns 
     */
    this.isQuerySortRequested = function (sort) {
        var sorts = this.getQuerySortRequested()
                        .map(function (value) {
                            return value.replace('-', '');
                        });
        
        return sorts.includes(sort);
    }
}

module.exports = QueryRequest;

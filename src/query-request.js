function QueryRequest (Request) {
    var _Request = Request

    /**
     * Get query filter.
     * 
     * @returns Object
     */
    this.getFilter = function () {
        return this.hasQueryFilter
                    ? _Request.query.filter
                    : {};
    }

    /**
     * Check the current request has query filter.
     * 
     * @returns Boolean
     */
    this.hasQueryFilter = function () {
        return _Request.query.filter ? true : false;
    }
}

module.exports = QueryRequest;

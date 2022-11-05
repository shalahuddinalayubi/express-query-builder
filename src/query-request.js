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

    /**
     * Get page query.
     * 
     * @returns Object
     */
    this.getPage = function () {
        return this.hasPage()
                ? _Request.query.page
                : {};
    }

    /**
     * Determine the request has query page.
     * 
     * @returns Boolean
     */
    this.hasPage = function () {
        return _Request.query.page ? true : false;
    }
}

module.exports = QueryRequest;

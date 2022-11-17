function QueryRequest (Request) {

    var req = Object.create(Request);

    /**
     * Get query filter.
     * 
     * @returns Object
     */
    req.getFilter = function () {
        return this.hasQueryFilter
                    ? this.query.filter
                    : {};
    }

    /**
     * Check the current request has query filter.
     * 
     * @returns Boolean
     */
    req.hasQueryFilter = function () {
        return this.query.filter ? true : false;
    }

    /**
     * Get sort value.
     * 
     * @returns Array
     */
    req.getSort = function () {
        return this.hasQuerySort()
                ? this.query.sort.split(',')
                : [];
    }

    /**
     * Determine the request has sort query.
     * 
     * @returns Boolean
     */
    req.hasQuerySort = function () {
        return this.query.sort ? true : false;
    }

    /**
     * Get page query.
     * 
     * @returns Object
     */
    req.getPage = function () {
        return this.hasPage()
                ? this.query.page
                : {};
    }

    /**
     * Determine the request has query page.
     * 
     * @returns Boolean
     */
    req.hasPage = function () {
        return this.query.page ? true : false;
    }

    return req;
}

module.exports = QueryRequest;

function Filter (name, Request, separator = ',') {
    /**
     * Name of the filter.
     * 
     * @var String
     */
    var _name = name

    /**
     * Request object.
     * 
     * @var Object
     */
    var _Request = Request

    /**
     * Separator for multiple values.
     * 
     * @var String
     */
    var _separator = separator

    /**
     * Get filter name.
     * 
     * @returns String
     */
    this.getName = function () {
        return _name;
    }

    /**
     * Check for multiple value filter.
     * 
     * @returns Boolean
     */
    this.isMultipleValues = function () {
        return _Request.getFilter()[_name].includes(_separator);
    }

    /**
     * Build query builder.
     * 
     * @param { } query
     * @return void 
     */
    this.build = function (query) {
        if (this.isMultipleValues()) {
            _Request.getFilter()[_name]
                    .split(_separator)
                    .forEach(function (value) {
                        query.orWhere(_name, value);
                    })
        } else {
            query.orWhere(_name, _Request.getFilter()[_name]);
        }
    }
}

module.exports = Filter;

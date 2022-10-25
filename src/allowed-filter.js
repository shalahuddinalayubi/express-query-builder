function AllowedFilter (name, Request) {
    var _name = name

    var _Request = Request

    this.getName = function () {
        return _name;
    }

    this.build = function (query) {
        if (_Request.hasQueryFilter() && _Request.isQueryFilterRequested(name)) {
            if (_Request.isRequestedFilterMultipleValues(_name)) {

                _Request.splitFilterValues(_name).forEach(function (value) {
                        query.orWhere(_name, value);
                    });

                return;
            }

            query.orWhere(_name, _Request.getQueryFilterRequestedValue(_name));
        }
    }
}

module.exports = AllowedFilter;

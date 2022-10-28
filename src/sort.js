function Sort (name, order, Request) {

    /**
     * The column name of sort.
     * 
     * @var String
     */
    var _name = name

    /**
     * Order sort.
     * 
     * @var String 'ASC|DESC'
     */
    var _order = order

    /**
     * Request object.
     * 
     * @var Request
     */
    var _Request = Request

    /**
     * Get the column name sort.
     * 
     * @returns String
     */
    this.getName = function () {
        return _name;
    }

    /**
     * Build query.
     * 
     * @param {*} query
     * @returns void 
     */
    this.build = function (query) {
        query.orderBy(_name, _order);
    }
}

module.exports = Sort;

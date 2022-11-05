function OffsetPaginator(items, total, size, currentPage) {
    
    /**
     * All of items that is paginate.
     * 
     * @var Array
     */
    var _items = items;

    /**
     * Total of rows before paginating.
     * 
     * @var int
     */
    var _total = total;

    /**
     * Total of the items show per page.
     * 
     * @var int
     */
    var _size = size;

    /**
     * The current page viwed.
     * 
     * @var int
     */
    var _currentPage = currentPage;

    /**
     * Get all items that is paginated.
     * 
     * @returns Array
     */
    this.getItems = function () {
        return _items;
    }

    /**
     * Get the number of rows before paginating.
     * 
     * @returns int
     */
    this.getTotal = function () {
        return _total;
    }

    /**
     * Get the number of items per page.
     * 
     * @returns int
     */
    this.getSize = function () {
        return _size;
    }

    /**
     * Get the current page viwed.
     * 
     * @returns int
     */
    this.getCurrentPage = function () {
        return _currentPage;
    }
}

module.exports = OffsetPaginator;

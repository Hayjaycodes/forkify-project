class SearchView {
  _parentEl = document.querySelector('.search');
  getQuery() {
    const query = this._parentEl.querySelector('.search__field').value;
    this._clearInput(); // Clear the input field after getting the value
    return query; // Return the value of the input field
  }

  _clearInput() {
    this._parentEl.querySelector('.search__field').value = '';
    // Clear the input field after search
  }

  addHandlerSearch(handler) {
    this._parentEl.addEventListener('submit', function (e) {
      e.preventDefault(); // Prevent page reload
      handler(); // Call the handler function to execute the search
    });
  }
}

export default new SearchView();

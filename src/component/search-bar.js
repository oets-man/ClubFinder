class SearchBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div id="search-container" class="search-container">
        <input
          placeholder="Search football club"
          id="searchElement"
          type="search"
        />
        <button id="searchButtonElement" type="submit">Search</button>
      </div>`;

    this.querySelector("#searchButtonElement").addEventListener(
      "click",
      this._clickEvent
    );
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.querySelector("#searchElement").value;
  }
}

customElements.define("search-bar", SearchBar);

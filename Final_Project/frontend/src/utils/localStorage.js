const LocalStorageService = (function () {
  var _service;
  function _getService() {
    if (!_service) {
      _service = this;
      return _service;
    }
    return _service;
  }
  function _setToken(token) {
    localStorage.setItem("j-t", token);
  }
  function _getAccessToken() {
    return localStorage.getItem("j-t");
  }

  function _clearToken(tokenKey) {
    localStorage.removeItem(tokenKey);
  }

  return {
    getService: _getService,
    setToken: _setToken,
    getAccessToken: _getAccessToken,
    clearToken: _clearToken,
  };
})();

export default LocalStorageService;

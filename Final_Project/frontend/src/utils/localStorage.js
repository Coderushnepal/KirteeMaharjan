const LocalStorageService = (function () {
  var _service;
  function _getService() {
    if (!_service) {
      _service = this;
      return _service;
    }
    return _service;
  }
  function _setToken(tokenObj) {
    localStorage.setItem("j-t", tokenObj.access_token);
  }
  function _getAccessToken() {
    return localStorage.getItem("j-t");
  }

  function _clearToken() {
    localStorage.removeItem("j-t");
  }

  return {
    getService: _getService,
    setToken: _setToken,
    getAccessToken: _getAccessToken,
    clearToken: _clearToken,
  };
})();

export default LocalStorageService;

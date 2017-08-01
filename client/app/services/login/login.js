
class loginService {
  constructor($http, $q) {
    //INIT DEPENDENCIES
    this.$http = $http;
    this.$q = $q;
  }

  getData() {
    const defer = this.$q.defer();
    this.$http.get('https://angular-1-5-cli.firebaseio.com/data.json')
      .then((response) => {
      const data = response.data;
    defer.resolve(data);
  })
  .catch((response) => {
      defer.reject(response.statusText);
  });
    return defer.promise;
  }
}
loginService.$inject = ["$q", "$http"];
export default loginService;

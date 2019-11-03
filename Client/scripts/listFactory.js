angular
    .module('listTable')
    .factory('listFactory',  ($http) => {
        
        function getList() {
            return $http.get('http://localhost:3000/');
        }
        function addList(data ) {
            return $http.post('http://localhost:3000/', data)
        }
        function deleteList(item) {
            return $http.delete(`http://localhost:3000/${item._id}`)
        }

        return {
            getList,
            addList,
            deleteList
        };
    })
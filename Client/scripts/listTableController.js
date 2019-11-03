angular
    .module('listTable')
    .controller('listTableController', function ($scope, listFactory) {
        $scope.list;
        $scope.newListing = {}
        $scope.addItem =(newListing)=>{
         $scope.list.push(newListing)
         listFactory.addList(newListing).then((req, res)=>{
         }).catch(error=>{
            console.log(error)
         }) 
         $scope.newListing = {};
        }
         listFactory.getList().then((res)=>{
            $scope.list= res.data;
         }).catch(error=>{
            console.log(error)
         })
         $scope.deleteItem = (item)=>{
            let index = $scope.list.indexOf(item);
            $scope.list.splice(index, 1)
            listFactory.deleteList(item).then((req, res)=>{
            }).catch(error=>{
               console.log(error)
            }) 
         }

    })
(function() {
  angular
  .module('firstMod', [])
  .controller('usersField', dataFunction
    )
  .controller('flow', storeFunction
    );

  function dataFunction(Like) {
    var vm = this;
    vm.tab = 1;
    vm.addLike = function (data) {
      //haven't json like arr for user Lisa
      data['likes'] = data['likes'] || [];
      if (!data.metka) {
        data.likes.unshift(Like.datas);
        data.metka = true;
      }
      else {
        for (var i = 0; i < data.likes.length; i++) {
          if(data.likes[i]._id == 1) {
            data.likes.splice(data.likes[i], 1);
            data.metka = false;
            break;
          }
        }
      };
    };
    vm.addComment = function (data) {
      var date = new Date();
      data.comments.unshift({
        _id: 1,
        avatar: 'img/admin.png',
        username: 'admin',
        created: date,
        text: vm.myValue
      });
      vm.myValue = '';
    };
    vm.deleteComments = function (index, data) {
      data.comments.splice(index, 1);
    };
    vm.deleteLikes = function (index, data) {
      if(data.likes[index]._id == 1) {
        data.metka = false
      }
      data.likes.splice(index, 1);
    };
    vm.selectTab = function (select) {
      vm.tab = select;
    };
    vm.isSelected = function (isSelect) {
      return  vm.tab === isSelect;
    };
  };

  function storeFunction(Connection) {
    var that = this;
    that.dataStore = [];
    Connection.success(function(data) {
      that.dataStore = data;
    });
  };
})();


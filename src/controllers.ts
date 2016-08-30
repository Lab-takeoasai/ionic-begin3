class DashCtrl {
  public static $inject = ["$scope"];
  constructor($scope) { }
}

class ChatsCtrl {
  public chats;
  constructor(private Chats) {
    "ngInject";
    this.chats = Chats.all();
  }
  public remove(chat) {
    this.Chats.remove(chat);
  }
}

class ChatDetailCtrl {
  public chat;
  constructor($stateParams, Chats) {
    "ngInject";
    this.chat = Chats.get($stateParams.chatId);
  }
}

class AccountCtrl {
  public settings = {
    enableFriends: true
  };
  constructor() { }
}

angular.module('starter.controllers', [])
  .controller('DashCtrl', DashCtrl)
  .controller('ChatsCtrl', ChatsCtrl)
  .controller('ChatDetailCtrl', ChatDetailCtrl)
  .controller('AccountCtrl', AccountCtrl);

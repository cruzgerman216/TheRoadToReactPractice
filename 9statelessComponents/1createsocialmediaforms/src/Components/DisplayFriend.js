import React from "react";

const DisplayFriend = ({ friends, handleaddfriend, yourfriendslist }) => {
  var test =
    yourfriendslist.length == 0 ? (
      <p>You haven't added any friends</p>
    ) : (
      yourfriendslist.map(friend => {
        console.log(friend[0]);
        return (
          <div key={friend[0].id}>
            <p>{friend[0].fullname}</p>
            <img src={friend[0].pic} />
          </div>
        );
      })
    );
  return (
    <div>
      <h3>Your Friends: {yourfriendslist.length}</h3>
      {test}
      <h3>Add People To Get More Friends!</h3>
      {friends.map(friend => {
        return (
          <div key={friend.id}>
            <p>{friend.fullname}</p>
            <img src={friend.pic} />
            <button
              onClick={() => {
                handleaddfriend(friend.id);
              }}
            >
              Add Friend
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default DisplayFriend;

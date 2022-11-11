import { useFriends } from "../../contexts/friendsContext";
import { Friend } from "../Friend";

import { Container } from "./styles";

export function FriendList() {
  const friends = useFriends();
  return (
    <Container>
      {!friends.filter &&
        friends.values.map((friend) => (
          <Friend
            avatar={friend.avatar}
            id={friend._id}
            username={friend.username}
            key={friend._id}
          />
        ))}

      {friends.filter &&
        friends.valuesFilted.map((friend) => (
          <Friend
            avatar={friend.avatar}
            id={friend._id}
            username={friend.username}
            key={friend._id}
          />
        ))}
    </Container>
  );
}

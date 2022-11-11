import { useState } from "react";
import { FriendList } from "../friendList";
import { ListNav } from "../ListNav";
import { Profile } from "../Profile";
import { RequestList } from "../RequestList";
import { Search } from "../Search";
import { Container } from "./styles";

export function LeftSide() {
  const [selectedList, setSelectedList] = useState(false);

  return (
    <Container position={selectedList.toString()}>
      <div className="top-side">
        <Profile />
        <Search />
      </div>
      <ListNav list={selectedList} setList={setSelectedList} />
      <div className="list">
        <div className="slider">
          <FriendList />
          <RequestList />
        </div>
      </div>
    </Container>
  );
}

import { Container } from "./styles";
import searchImg from "../../assets/search.png";
import { useFriends } from "../../contexts/friendsContext";
import { useMemo, useState } from "react";

export function Search() {
  const [filter, setFilter] = useState("");
  const friends = useFriends();
  useMemo(() => {
    friends.setFilter(filter);
  }, [filter]);

  return (
    <Container>
      <form action="">
        <input
          defaultValue={filter}
          onChange={(e) => {
            setFilter(e.target.value.toLowerCase());
          }}
          type="text"
          placeholder="Search"
        />
        <img src={searchImg} alt="" />
      </form>
    </Container>
  );
}

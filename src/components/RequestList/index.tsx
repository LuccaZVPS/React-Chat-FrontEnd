import { useMemo, useState } from "react";
import RequestsContext, { useRequests } from "../../contexts/requestContext";
import { requestInfo } from "../../requests/userRequests";
import { Request } from "../Request";

import { Container } from "./styles";

export function RequestList() {
  const requestLst = useRequests();

  return (
    <Container>
      {requestLst &&
        requestLst.list.map((req) => (
          <Request
            key={req._id}
            username={req.username}
            avatar={req.avatar}
            id={req._id}
          />
        ))}
    </Container>
  );
}

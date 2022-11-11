const api = process.env.REACT_APP_API_URL as string;

export const changeAvatar = async (avatar: string, token: string) => {
  try {
    const request = await fetch(`${api}/user/avatar`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",

        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ avatar }),
    });

    if (request.status === 200) {
      return true;
    }
    throw new Error();
  } catch {
    throw new Error();
  }
};
export const sendRequest = async (email: string, token: string) => {
  try {
    const request = await fetch(`${api}/user/request`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",

        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ email }),
    });

    if (request.status === 200) {
      const jsonRequest = (await request.json()) as unknown as sendRequest;
      return jsonRequest;
    }
    if (request.status === 409) {
      throw "Request already sent";
    }
    if (request.status === 404) {
      throw "User not found";
    }
    throw "Error while saving your request";
  } catch (e) {
    throw e;
  }
};
export const getRequests = async (token: string) => {
  try {
    const request = await fetch(`${api}/user/request`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",

        Authorization: `Bearer ${token}`,
      },
    });
    if (request.status === 200) {
      const jsonRequest = await request.json();
      return jsonRequest;
    }
    throw new Error();
  } catch (e) {
    throw e;
  }
};

export const refuseRequest = async (token: string, id: string) => {
  try {
    const request = await fetch(`${api}/user/request`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",

        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ id }),
    });

    if (request.status === 200) {
      return;
    }
    throw new Error();
  } catch (e) {
    throw e;
  }
};
export interface requestInfo {
  avatar: string;
  _id: string;
  username: string;
}
export const acceptRequest = async (token: string, id: string) => {
  try {
    const request = await fetch(`${api}/user/friend`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",

        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ id }),
    });

    if (request.status === 200) {
      return true;
    }
    throw new Error();
  } catch (e) {
    throw e;
  }
};

export const getFriendList = async (token: string) => {
  try {
    const request = await fetch(`${api}/user/friend`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",

        Authorization: `Bearer ${token}`,
      },
    });

    if (request.status === 200) {
      const jsonRequest = (await request.json()) as unknown as friend[];
      return jsonRequest;
    }
    throw new Error();
  } catch (e) {
    throw e;
  }
};

export interface requestInfo {
  avatar: string;
  id: string;
  username: string;
}
export interface friend {
  avatar: string;
  _id: string;
  username: string;
}
interface sendRequest {
  id: string;
}

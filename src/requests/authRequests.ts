const api = process.env.REACT_APP_API_URL as string;
export const register = async (
  email: string,
  username: string,
  password: string
) => {
  try {
    const request = await fetch(`${api}/user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password, email }),
    });
    if (request.status === 200) {
      return true;
    }
    if (request.status === 409) {
      return false;
    }
    throw new Error();
  } catch {
    throw new Error();
  }
};

export const registerWithGoogle = async (token: string, username: string) => {
  try {
    const request = await fetch(`${api}/user/google`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, token }),
    });
    if (request.status === 200) {
      return true;
    }

    if (request.status === 409) {
      return false;
    }
    throw new Error();
  } catch {
    throw new Error();
  }
};

export const loginGoogle = async (token: string) => {
  try {
    const request = await fetch(`${api}/user/login/google`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token }),
    });
    if (request.status === 200) {
      return await request.text();
    }
    if (request.status === 401) {
      return false;
    }
    throw new Error();
  } catch {
    throw new Error();
  }
};
export const login = async (email: string, password: string) => {
  try {
    const request = await fetch(`${api}/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    if (request.status === 200) {
      return await request.text();
    }
    if (request.status === 401) {
      return false;
    }

    throw new Error();
  } catch {
    throw new Error();
  }
};

export const getUserData = async (token: string) => {
  try {
    const request = await fetch(`${api}/user`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (request.status === 200) {
      const jsonRequest = (await request.json()) as unknown as userData;

      return jsonRequest;
    }

    throw new Error();
  } catch {
    throw new Error();
  }
};
export interface userData {
  token: string;
  friendsId: string[];
  friendRequests: string[];
  avatar: string;
  isUsingAvatar: false;
  id: string;
  email: string;
}

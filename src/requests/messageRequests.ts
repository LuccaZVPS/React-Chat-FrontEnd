const api = process.env.REACT_APP_API_URL as string;

export const addMessage = async (
  token: string,
  to: string,
  message: string
) => {
  try {
    const request = await fetch(`${api}/message`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",

        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ to, message }),
    });

    if (request.status === 200) {
      const jsonRequest = (await request.json()) as unknown as messsage;
      return jsonRequest;
    }
    throw new Error();
  } catch (e) {
    throw e;
  }
};
export const getMessage = async (token: string, friendId: string) => {
  try {
    const request = await fetch(`${api}/message/${friendId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",

        Authorization: `Bearer ${token}`,
      },
    });

    if (request.status === 200) {
      const jsonRequest = (await request.json()) as unknown as messsage[];
      return jsonRequest;
    }
    throw new Error();
  } catch (e) {
    throw e;
  }
};

interface messsage {
  sender: string;
  users: string[];
  message: string;
  _id: string;
}

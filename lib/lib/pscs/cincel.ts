import axios from "axios";

const _client = axios.create({
  baseURL: " https://api.cincel.digital/v3/",
  headers: {
    Accept: "application/json",
  },
});

const cincelClient = {
  timestamps: async (hash: string) => {
    return _client.get(`/timestamps/${hash}.asn1`, {
      responseType: "arraybuffer",
    });
  },
};

export default cincelClient;

import cincelClient from "./pscs/cincel";
import { without0x } from "./utils";

enum Nom151Provider {
  /** https://docs.cincel.digital/v3/basic-certificates#get-/timestamps/-hash- */
  Cincel = "CINCEL",
}

const getNOM151CertificateAsn1 = async (hash: string, provider: string) => {
  switch (provider) {
    case Nom151Provider.Cincel: {
      const response = await cincelClient.timestamps(without0x(hash));
      return response.data;
    }
    default:
      throw new Error(`Provider ${provider} not supported`);
  }
};

export { getNOM151CertificateAsn1 };

type Hex = `0x${string}`; // viem
type Base64 = string; // node-forge

export type Proof = SignatureRequestProofJSON | SignatureProofJSON;

export enum HashingAlgorithm {
  SHA256,
}

type Conservation = {
  nom151?: NOM151Conservation;
  merkleized?: MerkleizedConservation;
  witnessCo?: WitnessCoConservation;
};

export type SignatureRequestProofJSON = {
  name: string;
  mediatype: string;
  raw: Base64;
  algorithm: HashingAlgorithm;
  hash: Hex;
  conservation: Conservation;
  signatures: SignatureProofJSON[];
};

export type NOM151Conservation = {
  provider: string;
};

export type MerkleizedConservation = {
  merkleRoot: Hex;
  merkleProof: Hex[];
  conservation: NOM151Conservation;
  algorithm: string;
};

export type WitnessCoConservation = {
  timestamp: string;
  leafIndex: number;
  leftHashes: Hex[];
  rightHashes: Hex[];
  targetRootHash: Hex;
};

export type SignatureProofJSON = {
  signature: Base64;
  ocspResponse: Base64;
  certificate: Base64;
  conservation: Conservation;
  signatureHash: Hex;
  hash: Hex;
};

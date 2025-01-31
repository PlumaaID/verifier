import { Proof, SignatureProof, SignatureRequestProof } from "../types";

export const isSignatureRequestProof = (
  proof: Proof
): proof is SignatureRequestProof => !isSignatureProof(proof);

export const isSignatureProof = (proof: Proof): proof is SignatureProof =>
  "signature" in proof;

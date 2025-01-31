import { Proof, SignatureProofJSON, SignatureRequestProofJSON } from "../types";

export const isSignatureRequestProof = (
  proof: Proof
): proof is SignatureRequestProofJSON => !isSignatureProof(proof);

export const isSignatureProof = (proof: Proof): proof is SignatureProofJSON =>
  "signature" in proof;

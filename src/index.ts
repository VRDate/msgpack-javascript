// Main Functions:

export { encode } from "./encode";
export { decode } from "./decode";
export { decodeAsync, decodeArrayStream } from "./decodeAsync";

// Utilitiies for Extension Types:

export { ExtensionCodec, ExtensionCodecType, ExtensionDecoderType, ExtensionEncoderType } from "./ExtensionCodec";
export { ExtData } from "./ExtData";
export {
  EXT_TIMESTAMP,
  encodeDateToTimeSpec,
  encodeTimeSpecToTimestamp,
  encodeTimestampExtension,
  decodeTimestampExtension,
} from "./timestamp";

export { WASM_AVAILABLE as __WASM_AVAILABLE } from "./wasmFunctions";

export default function createInt8TypedArray(length, position, value) {
  const myBuffer = new ArrayBuffer(length);

  const myBufferView = new DataView(myBuffer);

  myBufferView.setUint8(position, value);

  let content = '<';

  for (let i = 0; i < myBufferView.byteLength; i += 1) {
    content += `${myBufferView.getUint8(i).toString(16).padStart(2, '0')} `;
  }
  content = `${content.trim()}>`;

  return `DataView {
    byteLength: ${length},
    byteOffset: 0,
    buffer: ArrayBuffer {
        [Uint8Contents]: ${content},
        byteLength: ${length}
    }
}`;
}

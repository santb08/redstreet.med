import mocks from "./mocks.json"
const { imagesAdapter } = require("web3/opensea");

describe("opensea", () => {
  it("should mapped correctly", () => {
    const expected = [
      {
        url: "https://i.seadn.io/gae/Unn8zn2BqxzVuIL36YIWHuqH-nid2GGtVwiiVy1_9U2zE3wh1TrkKDosmU6OURMkdG_OpXTe-S26sbt_17tVuDYm244IkPa4lFK6TA?w=500&auto=format",
        alt: "Cuatro Sur",
      },
      {
        url: "https://i.seadn.io/gae/G4OemDKwYDSQJec6fKdvsgHAkvbJLRdrKfL9ZmmhV_LsaNYUfpfkmUweObVnWiF2uuZZDwQl7nxuSG3I1j9DAT3a9eMZr9d7VQ4MVsE?w=500&auto=format",
        alt: "Roller Love",
      },
    ];
    const result = imagesAdapter(mocks);
    expect(result).toStrictEqual(expected);
  });
});

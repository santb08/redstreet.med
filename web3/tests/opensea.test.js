import mocks from "./mocks.json"
import mock from "./mock.json"
const { imagesAdapter } = require("web3/opensea");
const {mapCollectionsToPreviews} = require("web3/opensea")

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

  it("Collections should map correctly", () => {
    const expected = [
      {
        id: "untitled-collection-15031283",
        url: "https://i.seadn.io/gcs/files/d54f8b30b0f358c5bb329bda1487a144.jpg?w=500&auto=format",
        alt:"Redstreet - 80s",
      },
      {
        id: "redstreet-medellin",
        url: "https://i.seadn.io/gcs/files/279213fb708b2ac1236787f209c743ed.png?w=500&auto=format",
        alt:"Redstreet - Medellin",
      },
    ];
    const result = mapCollectionsToPreviews(mock);
    expect(result).toStrictEqual(expected);
  });
});

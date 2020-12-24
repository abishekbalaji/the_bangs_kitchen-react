import pageHeight from "./pageHeight";

const scrollToElem = (id) => {
  //   const coord = id.getBoundingClientRect();
  const offset = id.offsetTop;
  //   console.log("offsetTop: ", offset);
  //   console.log(coord.x, coord.y);
  //   if (coord.y < 0) {
  //     console.log("before: ", coord.y);
  //     const height = pageHeight();
  //     const elemHeight = id.clientHeight;
  //     console.log("height: ", height);
  //     console.log("elemHeight: ", elemHeight);
  //     console.log("height-elemHeight: ", height - elemHeight);
  //     coord.y += height;
  //     console.log("after: ", coord.y);
  //   }

  window.scrollTo({
    top: offset,
    left: 0,
    behavior: "smooth",
  });
};

export default scrollToElem;

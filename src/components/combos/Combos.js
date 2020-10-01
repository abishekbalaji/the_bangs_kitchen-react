import React from "react";

// import Combo from "./Combo";

// const Combos = () => (
//   <div id="combos" className="combos-div">
//     <h1 className="combos__title">Combos</h1>
//     <div className="combos__container">
//       <Combo
//         name="Combo 1"
//         items={["1 PC CRISPY FRIED CHICKEN", "1 SHAWARMA ROLL", "1 DRINK"]}
//       />
//       <Combo
//         name="Combo 2"
//         items={["QUARTER CHICKEN GRILL", "1 SHAWARMA ROLL", "1 DRINK"]}
//       />
//       <Combo
//         name="Combo 3"
//         items={[
//           "2 PC FRIED CHICKEN",
//           "2 SHAWARMA ROLL",
//           "QUARTER CHICKEN GRILL",
//           "2 DRINKS",
//         ]}
//       />
//       <Combo
//         name="Combo 4"
//         items={["1 PC FRIED CHICKEN", "1 PC CHICKEN FILLET BURGER", "1 DRINK"]}
//       />
//       <Combo
//         name="Combo 5"
//         items={["POPCORN", "1 PC CHICKEN FILLET BURGER", "1 DRINK"]}
//       />
//     </div>
//   </div>
// );

// export default Combos;

export default class Combos extends React.Component {
  items = document.getElementsByClassName("carousel__image");

  state = {
    current: undefined,
    prev: undefined,
    next: undefined,
    currentIndex: undefined,
  };

  componentDidMount() {
    this.setState((prevState) => ({
      currentIndex: 0,
      current: this.items[0],
      prev: this.items[this.items.length - 1],
      next: this.items[1],
    }));
    setTimeout(() => {
      this.state.current.classList.add("active");
      this.state.next.classList.add("next");
      this.state.prev.classList.add("prev");
    }, 1);
    console.log(this.state);
  }

  handleNext = () => {
    console.log(this.items);
    console.log(this.state);
    console.log(this.items[0]);
    // if (this.state.current === this.items[this.items.length - 1]) {
    //   this.setState((prevstate) => ({
    //     current: this.items
    //   }))
    // }
    this.state.next.classList.remove("next");
    this.state.prev.classList.remove("prev");
    this.state.current.classList.remove("initial");
    this.state.current.classList.remove("active");
    this.state.next.classList.add("initial");

    this.setState((prevState) => {
      if (prevState.current === this.items[this.items.length - 1]) {
        console.log("inside if");
        return {
          currentIndex: 0,
          current: this.items[0],
          prev: prevState.current,
          next: this.items[1],
        };
      } else if (prevState.next === this.items[this.items.length - 1]) {
        console.log("inside else if");
        return {
          currentIndex: prevState.currentIndex + 1,
          current: prevState.next,
          next: this.items[0],
          prev: prevState.current,
        };
      } else {
        console.log("inside else");
        return {
          currentIndex: prevState.currentIndex + 1,
          current: prevState.next,
          next: this.items[prevState.currentIndex + 2],
          prev: prevState.current,
        };
      }
    });
    setTimeout(() => {
      this.state.current.classList.add("active");
      this.state.next.classList.add("next");
      this.state.prev.classList.add("prev");
      this.state.current.classList.add("initial");
    }, 1);
  };

  handlePrev = () => {
    this.state.next.classList.remove("next");
    this.state.prev.classList.remove("prev");
    this.state.current.classList.remove("initial");
    this.state.current.classList.remove("active");
    this.state.prev.classList.add("initial");

    this.setState((prevState) => {
      if (prevState.current === this.items[0]) {
        return {
          currentIndex: this.items.length - 1,
          current: this.items[this.items.length - 1],
          next: prevState.current,
          prev: this.items[this.items.length - 2],
        }
      } else if (prevState.current === this.items[this.items.length - 1]) {
        return {
          currentIndex: prevState.currentIndex - 1,
          // current: ,
        }
      }
    })
  };

  render() {
    return (
      <div className="combos">
        <h1 className="combos__main-title">Combos</h1>
        <div className="carousel__wrapper">
          <div className="carousel">
            <img
              className="carousel__image initial"
              src="/images/posters/combo1.png"
            />
            <img className="carousel__image" src="/images/posters/combo2.png" />
            <img className="carousel__image" src="/images/posters/combo3.png" />
            <img className="carousel__image" src="/images/posters/combo4.png" />
            <img className="carousel__image" src="/images/posters/combo5.png" />
            <div onClick={this.handleNext} className="carousel__button--next">
              <i className="fas fa-arrow-right"></i>
            </div>
            <div onClick={this.handlePrev} className="carousel__button--prev">
              <i className="fas fa-arrow-left"></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// init = () => {
//   var itemClassName = "carousel__image";
//   (items = document.getElementsByClassName(itemClassName)),
//     (totalItems = items.length),
//     (slide = 0),
//     (moving = true);
// };
// setInitialClasses = () => {
//   this.init();
//   // Targets the previous, current, and next items
//   // This assumes there are at least three items.
//   items[totalItems - 1].classList.add("prev");
//   items[0].classList.add("active");
//   items[1].classList.add("next");
// };

// // Set event listeners
// setEventListeners = () => {
//   var next = document.getElementsByClassName("carousel__button--next")[0],
//     prev = document.getElementsByClassName("carousel__button--prev")[0];
//   next.addEventListener("click", this.moveNext);
//   prev.addEventListener("click", this.movePrev);
// };

// // Next navigation handler
// moveNext = () => {
// this.init();
// // Check if moving
// if (!moving) {
//   // If it's the last slide, reset to 0, else +1
//   if (slide === (totalItems - 1)) {
//     slide = 0;
//   } else {
//     slide++;
//   }
//   // Move carousel to updated slide
//   moveCarouselTo(slide);
// }
// }
// // Previous navigation handler
// movePrev = () => {
// // Check if moving
// if (!moving) {
//   // If it's the first slide, set as the last slide, else -1
//   if (slide === 0) {
//     slide = (totalItems - 1);
//   } else {
//     slide--;
//   }

//   // Move carousel to updated slide
//   moveCarouselTo(slide);
// }
// }

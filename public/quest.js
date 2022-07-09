const destination = document.querySelector(".destination"); // container where selected words go
const origin = document.querySelector(".origin"); // container where words initially start
const words = origin.querySelectorAll(".word"); // nodeList of all the words in the origin

let isAnimating = false; // bool to prevent competing animations (clicking a word before the previous word has finished moving)

// FLIP technique animation (First Last Invert Play)
const flip = (word, settings) => {
  // calculate the difference in position between where the word started and where it ended (First - Last = Invert)
  const invert = {
    x: settings.first.left - settings.last.left,
    y: settings.first.top - settings.last.top,
  };

  // do the animation (Play) from the original (Invert) position to the final current position
  let animation = word.animate(
    [
      { transform: `scale(1,1) translate(${invert.x}px, ${invert.y}px)` },
      { transform: `scale(1,1) translate(0, 0)` },
    ],
    {
      duration: 300,
      easing: "ease",
    }
  );

  // signify that animation has completed
  animation.onfinish = () => (isAnimating = false);
};

// move the word from the origin to the destination
const move = (word) => {
  const id = Math.random(); // random number used to link the word to its container (used in the putback function)
  const container = word.closest(".btn-container"); // the selected word's container element
  let rect = word.getBoundingClientRect(); // selected word's DOM rect
  let first, last; // containers for the initial and final (First and Last) positions of the element

  isAnimating = true; //signify an animation has started (or is about to)

  // give both the container and the word a data-id (used in the putback function) (using data-id and not a var because you can query for a data-attribute)
  container.dataset.id = id;
  word.dataset.id = id;

  // set the container to the heighth width of the word (so it stays visible when empty)
  container.style.height = `${word.offsetHeight}px`;
  container.style.width = `${word.offsetWidth}px`;

  // assign the initial top/left px values of the word -> move the word to the destination -> recaculate the the word's DOM rect in new position -> assign the final top/left values
  first = { top: rect.top, left: rect.left };
  destination.insertAdjacentElement("beforeend", word);
  rect = word.getBoundingClientRect();
  last = { top: rect.top, left: rect.left };

  // send word, and its caculated vales to the flip funciton
  flip(word, { first, last });
};

const putback = (word) => {
  const id = word.dataset.id; // get the ID of the current word
  const container = origin.querySelector(`[data-id="${id}"]`); // query for the container w/ the matching ID
  const siblings = [...destination.querySelectorAll(".word")].filter(
    (sib) => sib !== word
  ); // find the other word elements in the destination so we can animate them when the selected word is put back

  let rect = word.getBoundingClientRect(); // selected word's DOM rect
  let first, last; // containers for the initial and final (First and Last) positions of the element

  isAnimating = true; //signify an animation has started (or is about to)

  first = { top: rect.top, left: rect.left }; // assign the initial top/left px values

  // get the initial top/left px values for each sibling
  siblings.forEach((sib) => {
    let rect = sib.getBoundingClientRect();
    // I am assigning this value as a property of the element object because trying to keep a
    // variable linked to this element inside a loop that we can use later in a different loop
    // would be a real big pain. Best practice is not to modify objects/classes you don't own,
    // so to be safe and avoid overwriting an existing property value (ele.first or ele.last)
    // I am prefixing the property name with __
    sib.__first = { top: rect.top, left: rect.left };
  });

  container.insertAdjacentElement("beforeend", word); //move the word from the destination back to its original container

  rect = word.getBoundingClientRect(); // selected word's new DOM rect
  last = { top: rect.top, left: rect.left }; // assign the final top/left px values

  // get the final top/left px values for each sibling
  siblings.forEach((sib) => {
    let rect = sib.getBoundingClientRect();
    sib.__last = { top: rect.top, left: rect.left };
  });

  flip(word, { first, last }); // animate the word

  siblings.forEach((sib) =>
    flip(sib, { first: sib.__first, last: sib.__last })
  ); // animate the siblings

  // clean up the junk we added during the move function()
  container.style.height = "";
  container.style.width = "";
  container.removeAttribute("data-id");
  word.removeAttribute("data-id");
};

// add a conditional eventListener to each word
words.forEach((word) => {
  const event = () => {
    if (isAnimating) return; // if we already have an animation playing, don't let the user start a new one
    word.closest(".btn-container") ? move(word) : putback(word); // decide if we should use the move() or putback() functions based on the word's current location
  };

  word.addEventListener("click", event);
});

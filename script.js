window.addEventListener("mousemove", (event) => {
  let rect = document.getElementById("rect");
  let xval = gsap.utils.mapRange(
    0,
    window.innerWidth,
    50 + rect.getBoundingClientRect().width / 2,
    window.innerWidth - (50 + rect.getBoundingClientRect().width / 2),
    event.clientX
  );
  gsap.to("#rect", {
    left: xval,
    ease: "power50",
  });

  let Yval = gsap.utils.mapRange(
    0,
    window.innerHeight,
    50 + rect.getBoundingClientRect().height / 2,
    window.innerHeight - (50 + rect.getBoundingClientRect().height / 2),
    event.clientY
  );
  gsap.to("#rect", {
    top: Yval,
    ease: "power50",
  });

  // console.log(event);
});

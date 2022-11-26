// buttons and counter text
const counter = document.querySelector("#counter");
const btns = document.querySelectorAll(".btn");
const error = document.querySelector(".error");


let count = 0;

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const styles = e.currentTarget.classList;

    if (styles.contains("increase")) {
      count++;
     

 
    } else if (styles.contains("decrease")) {
      count--;
     

      if (count < 0){
        count=0;
        error.style.display = "block";
        counter.style.fontWeight = 'bold';
      }
      


    } else if (styles.contains("reset")) {
          count = 0;
    }

    counter.textContent = count;
  });
});

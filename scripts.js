let lista = document.querySelectorAll(".item");
let next = document.getElementById("next");
let prev = document.getElementById("prev");

// count = 3
// lista = [item1, item2, item3]


let count = lista.length;
let ativo = 0;

next.onclick = () => {
  let activeOld = document.querySelector(".active")
  activeOld.classList.remove("active");
  ativo += 1;
  if (ativo >= count) {
    ativo = 0;
    }
    lista[ativo].classList.add("active");
}


prev.onclick = () => {
  let activeOld = document.querySelector(".active")
  activeOld.classList.remove("active");
  ativo -= 1;
  if (ativo < 0) {
    ativo = count - 1;
    }
    lista[ativo].classList.add("active");
}
const btn = document.querySelector("#myElement");
console.log(btn)
let n = 1;

btn.addEventListener('click', () => {   
    alert(`You clicked ${n} times`);
 n+=1;
})
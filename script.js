const inputBtn = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn"); 
const result = document.getElementById("result");

const palindromeCheck = () => {
  if(inputBtn.value.length === 1){
    result.innerHTML = `<strong>${inputBtn.value}</strong> is a palindrome`
    result.style.display = "block";
  }else if(inputBtn.value === ""){
    alert("Please input a value")
  }else if(inputBtn.value.length > 1){
    let input = inputBtn.value;
    let regex = /[^A-Za-z0-9]/g;
    input = input.toLowerCase().replace(regex, "");
    result.style.display = "block";
    let str = input.split("").reverse().join("");
    input === str ? result.innerHTML = `<strong>${inputBtn.value}</strong> is a palindrome` : result.innerHTML = `<strong>${inputBtn.value}</strong> is not a palindrome`
    }
}
checkBtn.addEventListener("click", palindromeCheck)

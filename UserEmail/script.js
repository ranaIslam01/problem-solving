function userEmail(input) {
  if (!input.includes("@")) {
    return "Invalid Email";
  }
  const vag = input.split("@");
  const vag0 = vag[0];
  const vag1 = vag[1];

  const result = `(${vag0}) sent you an email from (${vag1})`;
  return result;
}

const userPrompt = prompt("Enter Your Email");
console.log(userPrompt);
const p = document.createElement("p");
p.style.fontSize = "30px";
p.style.cursor ="pointer";
p.style.backgroundColor = "blue";
p.style.fontWeight = 500;
p.style.color = "white";
p.style.borderRadius = "20px";
p.style.padding = "30px";
p.style.marginTop = "20px";
p.style.marginRight= "20px";
const a = userEmail(userPrompt);
const content = document.getElementById("content");
content.appendChild(p);
p.innerText = a;

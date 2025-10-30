
//এমন একটি ফাংশন লেখো যার নাম হবে calculateTax()। এটি দুটি ইনপুট নেবে — আয় (income) ও খরচ (expenses)।

//যদি আয় বা খরচ নেগেটিভ হয়, অথবা আয় খরচের চেয়ে কম হয়, তাহলে "Invalid Input" রিটার্ন করবে।

//অন্যথায় আয় থেকে খরচ বাদ দিয়ে পার্থক্যের ২০% ট্যাক্স হিসাব করে রিটার্ন করবে।


function calculateText (income, expenses) {
  if(income < 0 || expenses < 0 || income < expenses){
    console.log("Invalid Input");
  }else{
    const sum = income - expenses;
    console.log("Minus: ",sum);
    const tax = (sum/100)*20;
    console.log("Tax: ",tax);
  }
}
calculateText(600,20);

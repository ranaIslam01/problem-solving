// এমন একটি ফাংশন লেখো যার নাম checkDigitsInName()। এটি একটি নাম (string) ইনপুট নেবে।

// যদি ইনপুট string না হয়, তাহলে "Invalid Input" রিটার্ন করবে।

// যদি নামের মধ্যে কোনো সংখ্যা থাকে, তাহলে true রিটার্ন করবে, নয়তো false।

function checkDigitsInName(input){
  if(typeof input === 'string'){
    const check = /\d/.test(input);
    return check;
  }else{
    return "Invalid Input";
  }

}
console.log(checkDigitsInName("rnaa3434"));
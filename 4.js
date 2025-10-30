// এমন একটি ফাংশন লেখো যার নাম calculateFinalScore()। এটি একটি অবজেক্ট ইনপুট নেবে যেখানে থাকবে
// testScore, schoolGrade, এবং isFFamily।

// যদি স্কোর বা গ্রেড সীমার বাইরে হয়, "Invalid Input" রিটার্ন করবে।

// সব ঠিক থাকলে মোট স্কোর গণনা করবে।

// যদি মোট স্কোর ৮০ বা তার বেশি হয়, তাহলে true, নয়তো false রিটার্ন করবে।

function calculateFinalScore(input){
  const {testScore, schoolGrade} = input;
  if(
    typeof testScore !== "number" || testScore<0 || testScore >100 ||
    typeof schoolGrade !== "number" || schoolGrade < 0 || schoolGrade >10

  ){
    return "Invalid Input ";
  }

  const totalScore = testScore + schoolGrade;
  console.log(totalScore);
  return totalScore >= 80;
}
console.log(calculateFinalScore({testScore:100, schoolGrade: 10}));
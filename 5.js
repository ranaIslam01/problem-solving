// এমন একটি ফাংশন লেখো যার নাম waitingTime()।

// এটি একটি অ্যারে (interviewTimes) এবং একটি সংখ্যা (serialNumber) ইনপুট নেবে।

// যদি ইনপুট ভুল হয়, "Invalid Input" রিটার্ন করবে।

// অন্যথায় সব সময়ের গড় (average) বের করে গড় সময়ের ভিত্তিতে পরবর্তী প্রার্থীর অপেক্ষার সময় রিটার্ন করবে।

function waitingTime(input){
  const {interviewTimes, serialNumber} = input;
  if(
    !Array.isArray(interviewTimes)||
    interviewTimes.length === 0||
    typeof serialNumber !== "number"||
    serialNumber < 1
  ){
    return "Invalid Input";
  }
  const total = interviewTimes.reduce((a,b) => a+b, 0);
  console.log(total)
  const average = total / interviewTimes.length;
  console.log(average);
  const waitingForNext = average * (serialNumber - 1);
  console.log(waitingForNext);
  return waitingForNext;

}
console.log(waitingTime({interviewTimes: [30,20,10], serialNumber: 3}));
// এমন একটি ফাংশন লেখো যার নাম sendNotification()। এটি একটি ইমেইল ইনপুট নেবে।

// যদি ইমেইলে '@' না থাকে, তাহলে "Invalid Email" রিটার্ন করবে।

// অন্যথায় '@' দিয়ে ভাগ করে ইউজারনেম ও ডোমেইন বের করবে এবং রিটার্ন করবে
// "userName sent you an email from domainName"।


function sendNotification(input) {
  if(!input.includes("@")){
    return "invalid email";
  }
  
  const parts =  input.split("@");
  const part0 = parts[0];
  const part1 = parts[1];
  const result = `${part0} sent you an email from ${part1}`;
  return result;
}
console.log(sendNotification("rana@gmail.com"));


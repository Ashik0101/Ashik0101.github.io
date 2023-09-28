/*SmartTutor part is here */
let image1 = "./image/smartTutor/1.png";
let image2 = "./image/smartTutor/2.png";
let image3 = "./image/smartTutor/3.png";
let image4 = "./image/smartTutor/4.png";
let image5 = "./image/smartTutor/5.png";
let smartTutorImages = [image1, image2, image3, image4, image5];
let smartTutorCard = document.getElementById("smartTutorCard");

let index = 0;
let smartTutorimg = document.createElement("img");
smartTutorimg.src = smartTutorImages[0];
smartTutorCard.append(smartTutorimg);
setInterval(() => {
  index++;
  if (index == smartTutorImages.length - 1) {
    index = 0;
  }
  smartTutorCard.innerHTML = null;
  let smartTutorimg = document.createElement("img");
  smartTutorimg.src = smartTutorImages[index];
  smartTutorCard.append(smartTutorimg);
}, 2000);

/*SastaBazar part is here */
let SastaBazarImages = [
  "./image/sasta_bazar/1.png",
  "./image/sasta_bazar/2.png",
  "./image/sasta_bazar/3.png",
  "./image/sasta_bazar/4.png",
  "./image/sasta_bazar/5.png",
  "./image/sasta_bazar/6.png",
  "./image/sasta_bazar/7.png",
  "./image/sasta_bazar/8.png",
  "./image/sasta_bazar/9.png",
];

let sastaBazarCard = document.getElementById("sastaBazarCard");

let sastaBazarIndex = 0;
let sastaBazarImg = document.createElement("img");
sastaBazarImg.src = SastaBazarImages[0];
sastaBazarCard.append(sastaBazarImg);
setTimeout(() => {
  setInterval(() => {
    sastaBazarIndex++;
    if (sastaBazarIndex == SastaBazarImages.length - 1) {
      sastaBazarIndex = 0;
    }
    sastaBazarCard.innerHTML = null;
    let sastaBazarImg = document.createElement("img");
    sastaBazarImg.src = SastaBazarImages[sastaBazarIndex];
    sastaBazarCard.append(sastaBazarImg);
  }, 2000);
}, 1000);

/*<><><><><><><><><><><><><><><> */
/*TheFitnessFreak past is here */
let TheFitnessFreakImages = [
  "./image/the_fitness_freak/1.png",
  "./image/the_fitness_freak/2.png",
  "./image/the_fitness_freak/3.png",
  "./image/the_fitness_freak/4.png",
  "./image/the_fitness_freak/5.png",
];

let theFitnessFreakCard = document.getElementById("theFitnessFreakCard");

let theFitnessFreakIndex = 0;
let theFitnessFreakImg = document.createElement("img");
theFitnessFreakImg.src = TheFitnessFreakImages[0];
theFitnessFreakCard.append(theFitnessFreakImg);
setTimeout(() => {
  setInterval(() => {
    theFitnessFreakIndex++;
    if (theFitnessFreakIndex == TheFitnessFreakImages.length - 1) {
      theFitnessFreakIndex = 0;
    }
    theFitnessFreakCard.innerHTML = null;
    let theFitnessFreakImg = document.createElement("img");
    theFitnessFreakImg.src = TheFitnessFreakImages[theFitnessFreakIndex];
    theFitnessFreakCard.append(theFitnessFreakImg);
  }, 2000);
}, 1000);

/*<><><><><><><><><><><><><><><> */
/*betterLivingHome past is here */
let BetterLivingHomeImages = [
  "./image/better_living_home/1.png",
  "./image/better_living_home/2.png",
  "./image/better_living_home/3.png",
  "./image/better_living_home/4.png",
  "./image/better_living_home/5.png",
  "./image/better_living_home/6.png",
  "./image/better_living_home/7.png",
  "./image/better_living_home/8.png",
];
let betterLivingHomeCard = document.getElementById("betterLivingHomeCard");
let betterLivingHomeIndex = 0;
let betterLivingHomeImg = document.createElement("img");
betterLivingHomeImg.src = BetterLivingHomeImages[0];
betterLivingHomeCard.append(betterLivingHomeImg);
setTimeout(() => {
  setInterval(() => {
    betterLivingHomeIndex++;
    if (betterLivingHomeIndex == BetterLivingHomeImages.length - 1) {
      betterLivingHomeIndex = 0;
    }
    betterLivingHomeCard.innerHTML = null;

    let betterLivingHomeImg = document.createElement("img");
    betterLivingHomeImg.src = BetterLivingHomeImages[betterLivingHomeIndex];
    betterLivingHomeCard.append(betterLivingHomeImg);
  }, 2000);
}, 1000);

/*<><><><><><><><><><><><><><><> */
/*Content Generator App past is here */
let ContentGeneratorAppImages = [
  "./image/content_generator/thumbnail.png",
  "./image/content_generator/poem.png",
  "./image/content_generator/story.png",
  "./image/content_generator/joke.png",
  "./image/content_generator/quote.png",
];

let contentGeneratorAppCard = document.getElementById(
  "contentGeneratorAppCard"
);
let contentGeneratorAppIndex = 0;
let contentGeneratorAppImg = document.createElement("img");
contentGeneratorAppImg.src = ContentGeneratorAppImages[0];
contentGeneratorAppCard.append(contentGeneratorAppImg);

setTimeout(() => {
  setInterval(() => {
    contentGeneratorAppIndex++;
    if (contentGeneratorAppIndex == ContentGeneratorAppImages.length - 1) {
      contentGeneratorAppIndex = 0;
    }
    contentGeneratorAppCard.innerHTML = null;

    let contentGeneratorAppImg = document.createElement("img");
    contentGeneratorAppImg.src =
      ContentGeneratorAppImages[contentGeneratorAppIndex];
    contentGeneratorAppCard.append(contentGeneratorAppImg);
  }, 2000);
}, 1000);
/**Sending email here */
function sendEmail() {
  var params = {
    from_name: document.querySelector(".name-input-field").value,
    email_id: document.querySelector(".email-input-field").value,
    mobile_no: document.querySelector(".mobile-input-field").value,
    message: document.querySelector(".message-input-field").value,
  };

  console.log(params);
  if (
    !params.from_name ||
    !params.email_id ||
    !params.mobile_no ||
    !params.message
  ) {
    alert("Please fill in all the details !");
    return;
  }

  if (
    !validateEmail(params.email_id) &&
    !validateMobileNumber(params.mobile_no)
  ) {
    alert("Please Enter correct credentials !");
    return;
  }
  if (!validateMobileNumber(params.mobile_no)) {
    alert("Please Enter correct Mobile No. !");
    return;
  }
  if (!validateEmail(params.email_id)) {
    alert("Please Enter correct Email !");
    return;
  }

  emailjs
    .send("service_vfrq8yc", "template_j1eve8j", params)
    .then((res) => {
      alert("Message Sent To Md Ashik Ansari. Thank you !!");
      console.log(res);
      (document.querySelector(".name-input-field").value = ""),
        (document.querySelector(".email-input-field").value = ""),
        (document.querySelector(".mobile-input-field").value = ""),
        (document.querySelector(".message-input-field").value = "");
    })
    .catch((error) => {
      alert("Some Error in sending the mail ! Sorry for the inconvenience !!");
      console.log(error);
    });
}

//valdiating email here

function validateEmail(email) {
  // Regular expression pattern for email validation
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Test the email against the regex pattern
  return emailRegex.test(email);
}

//validating the phone number here
function validateMobileNumber(number) {
  // Regular expression pattern for mobile number validation
  var numberRegex = /^\d{10}$/;

  // Test the number against the regex pattern
  return numberRegex.test(number);
}

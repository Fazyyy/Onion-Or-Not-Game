const onionTitles = [
"Trump Warns Removing Confederate Statues Could Be Slippery Slope To Eliminating Racism Entirely",
"'No Way To Prevent This,' Says Only Nation Where This Regularly Happens",
"My Doctor Told Me I Should Vaccinate My Children, But Then Someone Much Louder Than My Doctor Told Me I Shouldn't",
"Man At Park Who Set Up Table Full Of Water Cups Has No Idea How Passing Marathon Runners Got Impression They Can Take Them",
"This Child Would Have Turned 6 Today If His Mother Hadn't Given Birth To Him In October",
"Incredible Realism: The Campaign In The Next 'Call Of Duty' Will Begin At Your Avatar's High School Cafeteria When He's Being Tricked Into Joining The Military By A Recruiter",
"'Sometimes Things Have To Get Worse Before They Get Better,' Says Man Who Accidentally Turned Shower Knob Wrong Way",
"Report: Uttering Phrase 'Easy Does It' Prevents 78% Of Drywall Damage While Moving Furniture",
"Barbara Bush Passes Away Surrounded By Loved Ones, Jeb",
"Family Has Way Too Many Daughters For Them Not To Have Been Trying For Son",
"News: Privacy Win! Facebook Is Adding A 'Protect My Data' Button That Does Nothing But Feels Good To Press",
"Dalai Lama Announces Next Life To Be His Last Before Retirement",
"Researchers Find Decline In Facebook Use Could Be Directly Linked To Desire To Be Happy, Fully Functioning Person",
"Manager Of Combination Taco Bell/KFC Secretly Considers It Mostly A Taco Bell",
"Trump: 'It's My Honor To Deliver The First-Ever State Of The Union'",
"Daring To Dream: Jeff Bezos Is Standing Outside A Guitar Center Gazing Longingly At A $200 Billion Guitar",
"Area Dad Looking To Get Average Phone Call With Adult Son Down To 47.5 Seconds",
"Experts Warn Beef Could Act As Gateway Meat To Human Flesh",
"Jeff Bezos Named Amazon Employee Of The Month",
"Dad Suggests Arriving At Airport 14 Hours Early",
"Report: Only 3% Of Conversations Actually Need To Happen",
"Delta Pilot Refuses To Land Until Gun Control Legislation Passed",
"Family Wishes Dad Could Find Healthier Way To Express Emotions Than Bursting Into Full-Blown Musical Number",
"New Honda Commercial Openly Says Your Kids Will Die In A Car Crash If You Buy A Different Brand",
"Teacher Frustrated No One In Beginner Yoga Class Can Focus Chakras Into Energy Blast"
]

const realTitles = [
"Man Rescued From Taliban Didn't Believe Donald Trump Was President",
"Nat Geo Hires Jeff Goldblum To Walk Around, Being Professionally Fascinated By Things",
"Mike Pence Once Ratted Out His Fraternity Brothers For Having A Keg",
"Reddit CEO Tells User, 'We Are Not The Thought Police,' Then Suspends That User",
"Trump Dedicates Golf Trophy To Hurricane Victims",
"Uber's Search For A Female CEO Has Been Narrowed Down To 3 Men",
"ICE Director: ICE Can't Be Compared To Nazis Since We're Just Following Orders",
"Passenger Turned Away From Two Flights After Wearing 10 Layers Of Clothing To Avoid Luggage Fee",
"Somali Militant Group Al-Shabaab Announces Ban On Single-Use Plastic Bags",
"UPS Loses Family's $846k Inheritance, Offers To Refund $32 Shipping Fee",
"Teen Suspended From High School After Her Anti-Bullying Video Hurts Principal's Feelings",
"Alabama Lawmaker: We Shouldn't Arm Teachers Because Most Are Women",
"Cat Named After Notorious B.I.G. Shot Multiple Times - And Survives",
"EPA Head Says He Needs To Fly First Class Because People Are Mean To Him In Coach",
"Apology After Japanese Train Departs 20 Seconds Early",
"Justin Bieber Banned From China In Order To 'Purify' Nation",
"Alcohol Level In Air At Fraternity Party Registers On Breathalyzer",
"NPR Tweets The Declaration Of Independence, And People Freak Out About A 'Revolution'",
"Man Who Mowed Lawn With Tornado Behind Him Says He 'Was Keeping An Eye On It.'",
"After Eating Chipotle For 500 Days, An Ohio Man Says He's Ready For Something New",
"'El Chapo' Promises Not To Kill Any Jurors From Upcoming Federal Trial",
"After 4th DWI, Man Argues Legal Limit Discriminates Against Alcoholics",
"Palestinian Judge Bans Divorce During Ramadan Because 'People Make Hasty Decisions When They're Hungry'",
"Argentinian Officers Fired After Claiming Mice Ate Half A Ton Of Missing Marijuana",
"'Nobody Kill Anybody': Murder-Free Weekend Urged In Baltimore"
]

document.addEventListener('DOMContentLoaded', () => {

  const minValue = 1;
  const realTitlesMax = (realTitles.length - 1);
  const onionTitlesMax = (onionTitles.length - 1);
  const elTitle = document.getElementById('mainTitle');
  const realButton = document.getElementById('real');
  const onionButton = document.getElementById('onion');
  const answerText = document.getElementById('answer');
  const nextButton = document.getElementById('next');

  let isOnion;

  let getRandumNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  let onionOrNot = () => {
    let i = getRandumNumber(minValue, 2);
    console.log(i);
    return i;
  }

  let getOnion = () => {
    let i = onionOrNot();
    if (i == 1){
      let randNum = getRandumNumber(minValue, realTitlesMax);
      elTitle.textContent = realTitles[randNum];
      isOnion = false;
    } else if (i == 2) {
      let randNum = getRandumNumber(minValue, onionTitlesMax);
      elTitle.textContent = onionTitles[randNum];
      isOnion = true;
    }
  }

  let onionButtonClick = () => {
    if(isOnion){
      answerText.textContent = "Correct, this was an Onion Article";
    } else {
      answerText.textContent = "Wrong, this was a real Article";
    }
  }

  let realButtonClick = () => {
    if(isOnion){
      answerText.textContent = "Wrong, this was an Onion Article";
    } else {
      answerText.textContent = "Correct, this was a real Article";
    }
  }

  let nextButtonClick = () => {
    getOnion();
  }

  realButton.addEventListener("click", realButtonClick);
  onionButton.addEventListener("click", onionButtonClick);
  nextButton.addEventListener("click", nextButtonClick);

  getOnion();
  

});
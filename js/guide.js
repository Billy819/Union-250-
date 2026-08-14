/* Guidance content. Videos load only when tapped, and only ever from
   youtube-nocookie.com — nothing from YouTube touches the page until you ask for it. */

const VIDEOS = [
  { id: "th5A6ZQ28pE", person: "John F. Kennedy", year: "1962",
    title: "We choose to go to the Moon",
    why: "A president told a whole country to try something that looked impossible. Seven years later, people walked on the Moon. Hard things are done on purpose." },

  { id: "ebrvE9KpCik", person: "Steve Jobs", year: "2005",
    title: "Your time is limited",
    why: "He talks about dots you can only connect looking backwards. The boring day you log today is one of those dots." },

  { id: "RRFDgDeboqE", person: "Walt Disney", year: "Classic",
    title: "Keep moving forward",
    why: "He was told his ideas were worthless and went bankrupt before he built any of it. Forward is the only direction that counts." },

  { id: "BxY_eJLBflk", person: "Denzel Washington", year: "Commencement",
    title: "Fall forward",
    why: "Falling is part of it. He says do not pray for an easy life — pray for the strength to handle a hard one." },

  { id: "TLKxdTmk-zc", person: "David Goggins", year: "Talk",
    title: "The most eye-opening 10 minutes",
    why: "Straight talk about the voice in your head that wants you to quit. Watch this one on a day you feel weak." },

  { id: "AyNXfe5HTII", person: "Michael Jordan", year: "Career",
    title: "Average is a choice",
    why: "The greatest was cut from a team once. He practiced the shot he missed. Talent lost to repetition." },

  { id: "RLTgnOuYb6o", person: "Oprah Winfrey", year: "Life advice",
    title: "You become what you believe",
    why: "She grew up with almost nothing and built one of the most trusted voices in America. Your history is not your ceiling." },

  { id: "YNY4UFaHbP4", person: "Barack Obama", year: "Advice",
    title: "Just learn how to get stuff done",
    why: "Less talking about who you are, more finishing what you started. Quietly the most useful advice on this page." },

  { id: "VfqpjiklOoA", person: "José Hernández", year: "NASA",
    title: "Rejected 11 times, then he flew",
    why: "A farm worker's son applied to NASA eleven times. Eleven rejections. The twelfth answer was yes." },

  { id: "ZEL0EAVtCTY", person: "Jensen Huang", year: "Only In America",
    title: "Vision, risk and the GPU",
    why: "He washed dishes at Denny's, then bet decades on a chip nobody wanted yet. Patience is a strategy." },

  { id: "m6ugFcwsgpE", person: "Carl Sagan", year: "Cosmos",
    title: "We humans are capable of greatness",
    why: "A reminder of how small we are and how much we can still do. Good for putting a bad day in perspective." },

  { id: "JtahB1-MNvk", person: "Neil deGrasse Tyson", year: "Interview",
    title: "The most eye-opening interview",
    why: "On curiosity, and on refusing to let anyone else decide what you are capable of learning." },

  { id: "hiiEeMN7vbQ", person: "Carol Dweck", year: "Research",
    title: "Developing a growth mindset",
    why: "The actual science behind this whole app: ability grows when you practise it. The word to learn is 'yet'." },

  { id: "AJ1-WE1B2Ss", person: "Matthew McConaughey", year: "Speech",
    title: "You owe it to you",
    why: "Your hero should be you in five years. Then you can never catch him — and that is the point." },

  { id: "sTzf5UEi4P4", person: "Jim Rohn", year: "Seminar",
    title: "The advice that reached 10 million people",
    why: "Small daily habits, repeated, decide everything. He explains why in the plainest words you will hear." },
];

const GUIDE_STEPS = [
  { n: "01", title: "Check your screen time",
    body: "On your iPhone, open <b>Settings &rarr; Screen Time &rarr; See All App &amp; Website Activity</b>. Look at today's total. That is the number you will type in. Do it at night, before bed, so the day is finished." },
  { n: "02", title: "Answer one honest question",
    body: "Did you stay clean today? Tap yes or no. Nobody sees this but you. An honest 'no' is worth far more than a dishonest 'yes' — the whole thing only works if the numbers are real." },
  { n: "03", title: "Save the day",
    body: "That's it. Two taps. Your score updates, and the map remembers. Logging takes about ten seconds and it is the only thing you have to do every day." },
  { n: "04", title: "Watch the Union grow",
    body: "Every 5 days you log, a new state joins the map — <b>even on bad days</b>. Showing up is what unlocks the country. Perfection is not required, and never was." },
  { n: "05", title: "Then build the Hall",
    body: "Day 250 completes the Union and opens <b>Level 2: the Hall of Innovation</b> — fifty American inventions, from Franklin's lightning rod to the iPhone, on exactly the same rhythm. That is 500 days in total, and the scoring never changes." },
];

const FAQ = [
  { q: "What if I relapse?",
    a: "Log it. You lose points that day, and then it's over. The next day starts at zero again with a clean slate. People who log their bad days finish this. People who hide from the app quit in week two. A relapse never takes a state away from you." },
  { q: "What if I forget to log a day?",
    a: "Open the Calendar tab and tap that day. You can fill in any day in the past. Nothing is lost." },
  { q: "What happens after day 250?",
    a: "Level 1 ends, the map is full, and Level 2 opens: <b>the Hall of Innovation</b>. Fifty American inventions light up on the same five-day rhythm, in the order they were invented — 1752 through 2007. Same rules, same scoring, 250 more days. Your points carry straight over." },
  { q: "Why do I still unlock a state on a bad day?",
    a: "Because the habit being trained here is honesty and consistency, not perfection. Five logged days is five logged days. Your score reflects the quality of those days; the map reflects the fact that you showed up." },
  { q: "Is 4 hours of screen time bad?",
    a: "It's not a moral failure — but it is roughly 60 days a year. Under 2 hours is where the biggest reward sits, because that's where you get your evenings back. Start by beating yesterday, not by beating an ideal." },
  { q: "The score dropped a lot. Should I restart?",
    a: "No. Restarting is the trap. A score can always be rebuilt in the days you have left; a streak of restarts can't be. Keep the same run." },
  { q: "Does this send my data anywhere?",
    a: "No. Everything stays in your own browser on your own device. There is no account and no server. Use <b>Export</b> in Settings to keep a backup file, especially before clearing your browser data." },
];

const URGE_TIPS = [
  { icon: "wave", title: "Ride the wave",
    body: "An urge is not a command. It rises, peaks around 10&ndash;20 minutes, and falls whether or not you act on it. Set a timer and simply outlast it. You do not have to fight it — just don't feed it." },
  { icon: "door", title: "Change the room",
    body: "Most relapses happen alone, in bed, at night, with a phone. Break any one of those four and the odds shift hard in your favour. Stand up. Walk to a different room. That's often the whole fix." },
  { icon: "phone", title: "Make the phone boring",
    body: "Charge it outside the bedroom. Turn on Grayscale (Settings &rarr; Accessibility &rarr; Display &amp; Text Size &rarr; Colour Filters). Delete the one app you already know is the problem. Willpower is expensive; friction is free." },
  { icon: "run", title: "Spend the energy",
    body: "Push-ups, a cold shower, a walk around the block, ten minutes of anything physical. The restlessness is real energy — give it somewhere honest to go." },
  { icon: "people", title: "Tell one person",
    body: "A friend, a sibling, a counsellor. Saying it out loud to one human being takes most of the power out of it. Secrecy is the fuel." },
  { icon: "star", title: "Judge the week, not the day",
    body: "One bad day inside a good week means nothing. Open the Calendar and look at the whole month. That is the real picture, and it is usually better than you feel." },
];

/* Decoration: twelve American moments, shown on the dashboard and in the guide. */
const PRIDE = [
 {
  "src": "assets/pride/crowd.jpg",
  "caption": "A crowd of new citizens",
  "blurb": "Every one of them chose this. That is what a country made of volunteers looks like."
 },
 {
  "src": "assets/pride/march.jpg",
  "caption": "The March on Washington, 1963",
  "blurb": "A quarter of a million people walked to the Lincoln Memorial and asked the country to keep its word."
 },
 {
  "src": "assets/pride/nasa.jpg",
  "caption": "Launch",
  "blurb": "Nobody had done it before. That is precisely why it was worth doing."
 },
 {
  "src": "assets/pride/sept11.jpg",
  "caption": "September 11, 2001",
  "blurb": "The flag went up over the rubble the same day. Down, never out."
 },
 {
  "src": "assets/pride/ellis.jpg",
  "caption": "Ellis Island",
  "blurb": "Twelve million arrivals, most of them broke and frightened, all of them betting on the future."
 },
 {
  "src": "assets/pride/pledge.jpg",
  "caption": "The Pledge",
  "blurb": "Hand over heart, first thing in the morning. Small rituals hold big things together."
 },
 {
  "src": "assets/pride/army.jpg",
  "caption": "Service",
  "blurb": "Somebody volunteered so you could have an ordinary evening."
 },
 {
  "src": "assets/pride/honor.jpg",
  "caption": "Full honours",
  "blurb": "The last salute. The country does not forget the people who paid for it."
 },
 {
  "src": "assets/pride/worldcup.jpg",
  "caption": "World champions",
  "blurb": "They said they would win it, then went and did it. Confidence backed by the work."
 },
 {
  "src": "assets/pride/katrina.jpg",
  "caption": "After the storm",
  "blurb": "Neighbours in boats before any agency arrived. That reflex is the real national character."
 },
 {
  "src": "assets/pride/disney.jpg",
  "caption": "Walt Disney's park",
  "blurb": "Turned down by 300 bankers. He kept moving forward and built it anyway."
 },
 {
  "src": "assets/pride/rodeo.jpg",
  "caption": "Carrying the colours",
  "blurb": "Full gallop, flag high, dirt flying. Some traditions do not need explaining."
 }
];

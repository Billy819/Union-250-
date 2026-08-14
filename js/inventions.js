/* The Hall of Innovation: 50 American inventions, ordered by the year they
   arrived, so unlocking them walks forward through history. */
const INVENTION_DATA = [
 {
  "id": 34,
  "name": "Lightning Rod",
  "year": "1752",
  "sortYear": 1752,
  "hook": "A kite, a key, and the end of burning steeples.",
  "cat": "home",
  "catName": "Daily Life",
  "story": [
   "In the 18th century, a summer thunderstorm was an existential catastrophe for any town. Lightning bolts struck church steeples and tall wooden barns, setting entire timber cities ablaze in unstoppable infernos that could destroy hundreds of homes in a single night.",
   "In Philadelphia, America’s premier founding polymath, Benjamin Franklin, proved that lightning was simply static electricity through his daring kite-and-key experiment in 1752.",
   "Franklin immediately turned theoretical science into practical public safety: he erected pointed iron rods on rooftops, connected by heavy iron wire down to the earth, creating a safe path for the electrical charge to dissipate harmlessly in the ground.",
   "Refusing to patent his device because he believed inventions should freely serve the public good, Franklin saw his lightning rods sprout across American and European skylines.",
   "The simple lightning rod saved countless lives and billions of dollars in infrastructure, standing as an enduring symbol of American scientific benevolence."
  ],
  "photos": [
   "assets/invent/34_1.jpg"
  ],
  "order": 1
 },
 {
  "id": 29,
  "name": "Cotton Gin",
  "year": "1793",
  "sortYear": 1793,
  "hook": "A machine that changed cotton, and the country, forever.",
  "cat": "industry",
  "catName": "Industry & Materials",
  "story": [
   "Before 1793, processing short-staple green-seed cotton was an excruciatingly slow bottleneck. A single worker could spend an entire grueling ten-hour day hand-picking the sticky seeds out of just one pound of raw cotton lint.",
   "Visiting a plantation in Georgia, young Massachusetts native Eli Whitney observed the problem and quickly built a wooden cylinder studded with wire teeth that rotated through metal grates, pulling the cotton fibers clean while brushing the seeds aside.",
   "His mechanical \"engine\" (shortened to <em>gin</em>) could process fifty pounds of cleaned cotton per day—a fifty-fold increase in productivity overnight.",
   "The cotton gin transformed the American South into the primary supplier of fiber for the burgeoning global Industrial Revolution, fueling the massive textile mills of New England and Great Britain.",
   "Whitney’s mechanical breakthrough demonstrated how mechanical engineering could rapidly conquer raw agricultural bottlenecks and reshape worldwide commerce."
  ],
  "photos": [
   "assets/invent/29_1.jpg"
  ],
  "order": 2
 },
 {
  "id": 28,
  "name": "Interchangeable Parts",
  "year": "1790s",
  "sortYear": 1798,
  "hook": "Parts that fit any gun — the idea that made mass production possible.",
  "cat": "industry",
  "catName": "Industry & Materials",
  "story": [
   "In the 18th century, if the trigger mechanism on a soldier’s musket snapped in battle, the weapon became an expensive club. Every musket was unique—hand-filed by a blacksmith who custom-fitted each screw, lock, and barrel to fit only that single rifle.",
   "Pioneered by innovators like Eli Whitney and clockmaker Eli Terry, the \"American System of Manufacturing\" established precise jigs, fixtures, gauges, and water-powered machine tools to craft uniform components.",
   "When standardized parts were dumped into a barrel, a worker could grab any bolt, slide it into any lock plate, and assemble a working machine in minutes without picking up a metal file.",
   "This modular concept jumped from weaponry to clocks, sewing machines, bicycles, and cars, creating the foundation for modern global manufacturing and convenient maintenance.",
   "Interchangeable parts democratized quality, allowing complex machinery to be repaired quickly and cheaply by everyday people across the globe."
  ],
  "photos": [
   "assets/invent/28_1.jpg"
  ],
  "order": 3
 },
 {
  "id": 24,
  "name": "Steamboat",
  "year": "1807",
  "sortYear": 1807,
  "hook": "Upstream, against the current, on purpose.",
  "cat": "transport",
  "catName": "Transport & Energy",
  "story": [
   "In the early days of the American republic, water travel was a mercilessly one-way street. Flatboats loaded with timber, grain, and furs could easily float down the Mississippi or Hudson rivers, but pushing a cargo craft back <em>upstream</em> against a muscular current required weeks of grueling pole-pushing and backbreaking human labor.",
   "In 1807, ambitious engineer Robert Fulton launched the <em>Clermont</em> on the Hudson River, pairing a high-pressure steam engine with paddle wheels. Skeptics lined the banks jeering at \"Fulton’s Folly,\" expecting the contraption to blow up or stall in the mud.",
   "Instead, the vessel chugged smoothly against the current from New York City to Albany, covering 150 miles in 32 hours and making history.",
   "Fulton’s steamboat opened the vast interior riverways of North America and the world to fast, dependable two-way commerce. Farm goods from the Midwest could travel swiftly to ocean ports, stitching continental economies into dynamic powerhouses.",
   "The steamboat conquered the currents of nature with the power of steam, cementing America's pioneer spirit on the open water."
  ],
  "photos": [
   "assets/invent/24_1.jpg"
  ],
  "order": 4
 },
 {
  "id": 31,
  "name": "Mechanical Reaper",
  "year": "1831",
  "sortYear": 1831,
  "hook": "One machine did the work of five men at harvest.",
  "cat": "industry",
  "catName": "Industry & Materials",
  "story": [
   "For thousands of years of recorded human history, the autumn grain harvest was a race against starvation. Men walked through fields with handheld scythes and sickles, swinging their backs until exhaustion, able to harvest only a modest acre or two before autumn rains caused the wheat to rot in the field.",
   "In the Shenandoah Valley of Virginia, young Cyrus McCormick took over his father’s frustrating farm experiments. In 1831, he unveiled a horse-drawn machine featuring a vibrating cutting blade, a reel to sweep stalks, and a platform to catch falling wheat.",
   "McCormick’s mechanical reaper did the work of five grown men, harvesting fields with unmatched speed and letting farmers plant hundreds of additional acres with absolute confidence.",
   "McCormick moved his factory to Chicago, building a sprawling agricultural empire with installment credit and field demonstrations that fed the booming cities of the world.",
   "The reaper freed millions of laborers from subsistence farm drudgery, liberating human minds to pursue education, engineering, science, and the arts."
  ],
  "photos": [
   "assets/invent/31_1.jpg"
  ],
  "order": 5
 },
 {
  "id": 6,
  "name": "Electrical Telegraph & Morse Code",
  "year": "1837",
  "sortYear": 1837,
  "hook": "Thought moving faster than a horse for the first time.",
  "cat": "info",
  "catName": "Information & Communication",
  "story": [
   "Before the spring of 1844, news traveled only as fast as a locomotive could chug or a galloping horse could breathe. When Samuel Morse stood in the Supreme Court chamber and tapped out <em>\"What hath God wrought,\"</em> sending those dots and dashes sixty miles to Baltimore, the human concept of time and distance collapsed forever.",
   "Morse, an accomplished painter devastated after a slow-traveling letter arrived too late for him to attend his young wife’s funeral, channeled his grief into an obsession with instant electromagnetic signaling.",
   "He didn't just invent the physical tapping key and receiver; he invented Morse Code—a brilliant linguistic compression algorithm assigning the shortest rhythmic bursts to the most common letters.",
   "The telegraph rapidly followed the iron rails of the transcontinental railroads, stitching vast wildernesses together with humming wires. For the first time, people read morning headlines about events that occurred on the opposite coast the previous evening.",
   "Morse’s invention was the true Victorian internet, proving that electricity could carry human thought at the speed of lightning and inspiring every digital communication standard that followed."
  ],
  "photos": [
   "assets/invent/06_1.jpg",
   "assets/invent/06_2.jpg"
  ],
  "order": 6
 },
 {
  "id": 30,
  "name": "Vulcanized Rubber",
  "year": "1839",
  "sortYear": 1839,
  "hook": "A clumsy accident on a hot stove made the modern tyre.",
  "cat": "industry",
  "catName": "Industry & Materials",
  "story": [
   "Natural latex sap harvested from rubber trees in South America was a fickle nightmare: in the heat of summer, it melted into a foul-smelling, sticky sludge; in the freezing depths of winter, it became as brittle as dry glass, cracking into useless shards.",
   "In Woburn, Massachusetts, an impoverished and obsessively determined inventor named Charles Goodyear spent years mixing rubber with every chemical he could buy. In 1839, he accidentally dropped a mixture of raw rubber and sulfur onto a roaring hot kitchen stove.",
   "Instead of charring away into liquid, the rubber charred without melting, transforming into an elastic, heat-resistant, waterproof material. He had discovered vulcanization.",
   "Vulcanized rubber made modern industry possible: it gave the world dependable tires for trucks and automobiles, watertight gaskets for steam engines, protective boots for workers, and insulating jackets for electrical wires.",
   "Goodyear’s perseverance unlocked an indispensable industrial elastomer, smoothing the ride of global transportation forever."
  ],
  "photos": [
   "assets/invent/30_1.jpg"
  ],
  "order": 7
 },
 {
  "id": 13,
  "name": "Modern Surgical Anesthesia",
  "year": "1846",
  "sortYear": 1846,
  "hook": "The day surgery stopped being torture.",
  "cat": "med",
  "catName": "Medicine & Life",
  "story": [
   "Before the autumn of 1846, the operating room of a hospital was a chamber of terror. Surgery was an agonizing last resort where physical speed was a surgeon's only virtue; patients had to be forcibly strapped down by burly assistants, enduring the bite of the scalpel with nothing more than a swig of whiskey or a leather strap to bite.",
   "On October 16, 1846, in the surgical amphitheater of Massachusetts General Hospital (now revered worldwide as the \"Ether Dome\"), Boston dentist William T.G. Morton changed medicine forever. He administered carefully vaporized sulfuric ether to a patient with a neck tumor.",
   "Dr. John Collins Warren picked up his knife, removed the growth, and looked up at the stunned gallery of doctors to proclaim: <em>\"Gentlemen, this is no humbug.\"</em> The patient had felt not a shred of pain.",
   "The discovery banished agony from surgical suites, allowing surgeons to slow down, operate meticulously on delicate internal organs, and save lives that were previously deemed untreatable.",
   "Morton’s brave demonstration gifted humanity freedom from surgical pain—one of the purest, most compassionate triumphs in medical history."
  ],
  "photos": [
   "assets/invent/13_1.jpg"
  ],
  "order": 8
 },
 {
  "id": 37,
  "name": "Refrigeration / Mechanical Ice Maker",
  "year": "1851",
  "sortYear": 1851,
  "hook": "A doctor built an ice machine to cool his fever patients.",
  "cat": "home",
  "catName": "Daily Life",
  "story": [
   "In the sweltering heat of Apalachicola, Florida, in the 1840s, a dedicated physician named Dr. John Gorrie watched his yellow fever and malaria patients suffer in oppressive hospital wards. Ice had to be shipped on schooners all the way from frozen New England ponds, making it a costly luxury.",
   "Gorrie believed that cool air was vital for healing. He built a clever mechanical pump that compressed air, cooled it with water, and allowed it to rapidly expand, absorbing ambient heat and freezing water into solid blocks of ice.",
   "Securing U.S. Patent No. 8,040 in 1851, Gorrie established the foundational mechanical refrigeration cycle that replaced the old ice-harvesting industry.",
   "His breakthrough transformed human nutrition: it allowed meat, dairy, produce, and life-saving medicines to travel across continents without spoiling, eliminating food-borne diseases and revolutionizing diets.",
   "Gorrie’s compassionate quest to soothe feverish patients gifted humanity cold food storage and dependable indoor temperature control."
  ],
  "photos": [
   "assets/invent/37_1.jpg"
  ],
  "order": 9
 },
 {
  "id": 41,
  "name": "Safety Elevator",
  "year": "1852",
  "sortYear": 1852,
  "hook": "He cut the rope himself to prove it. Cities went vertical.",
  "cat": "home",
  "catName": "Daily Life",
  "story": [
   "As cities grew in the mid-19th century, urban architecture hit a firm five-story ceiling. Nobody wanted to climb six flights of stairs, and traditional hoisting platforms suspended by hemp ropes were notorious for snapping, plunging cargo and passengers to catastrophic deaths.",
   "In Yonkers, New York, an inventive mechanic named Elisha Graves Otis devised a rugged spring-loaded safety brake: if the hoist rope broke, heavy steel guide springs instantly popped out and wedged into toothed vertical iron guide rails, locking the elevator in place.",
   "At the 1854 New York Crystal Palace exposition, Otis stood on a platform hoisted high above a gasping crowd and ordered the suspension cable cut with an axe. The platform dropped a few inches and halted dead. Otis tipped his hat and declared: <em>\"All safe, gentlemen!\"</em>",
   "The safety elevator made modern skyscrapers possible, allowing cities to grow vertically into soaring skylines like New York, Chicago, Hong Kong, and Dubai.",
   "Otis lifted human architecture toward the clouds, turning the top floors of buildings from dusty attics into coveted penthouses."
  ],
  "photos": [
   "assets/invent/41_1.jpg"
  ],
  "order": 10
 },
 {
  "id": 4,
  "name": "The Telephone",
  "year": "1876",
  "sortYear": 1876,
  "hook": "Eight words down a wire and the world got smaller.",
  "cat": "info",
  "catName": "Information & Communication",
  "story": [
   "\"Mr. Watson—come here—I want to see you!\" Those eight crackling words spoken through a liquid transmitter on March 10, 1876, sparked the loudest communication explosion in human history. Alexander Graham Bell had just transformed the human voice into undulating electrical signals.",
   "Before Bell secured his landmark patent in Boston, the speed of sound was limited by the strength of human lungs or the clatter of a courier's horse. Families separated by westward frontiers waited weeks for handwritten letters to cross prairies and mountain passes.",
   "Bell’s workshop tinkering unlocked the miracle of acoustic telepathy. Suddenly, a merchant in New York could strike a deal with a banker in Philadelphia in real time, and grandmother could hear a newborn baby chuckle three states away.",
   "The telephone wove disparate American communities together into a single beating pulse and quickly unfurled a nervous system across the globe. It proved that distance was merely a technical problem waiting for an ingenious solution.",
   "Every single voice note, customer service hotline, and late-night transatlantic heart-to-heart is a direct descendant of Bell’s determination to make the copper wires sing."
  ],
  "photos": [
   "assets/invent/04_1.jpg"
  ],
  "order": 11
 },
 {
  "id": 38,
  "name": "The Phonograph",
  "year": "1877",
  "sortYear": 1877,
  "hook": "The first machine that could remember a sound.",
  "cat": "home",
  "catName": "Daily Life",
  "story": [
   "Before the autumn of 1877, music was as fleeting as a summer breeze. If you wanted to hear a Mozart symphony or a folk song, you had to perform it yourself or sit in the room with musicians while they played. Once the last note echoed off the wall, it was gone forever.",
   "In his Menlo Park workshop, Thomas Edison wrapped tin foil around a grooved metal cylinder and rigged a diaphragm with a tiny needle. He turned the hand crank and shouted the nursery rhyme <em>\"Mary had a little lamb.\"</em>",
   "When he placed the needle back at the start and turned the handle, the machine spoke the rhyme back to him in his own raspy voice. Edison later recalled: <em>\"I was never so taken aback in my life.\"</em>",
   "For the first time in human history, sound was captured, preserved, and played back at will.",
   "The phonograph gave birth to the global music industry, allowed historic speeches to echo across centuries, and democratized audio entertainment for every living room on Earth."
  ],
  "photos": [
   "assets/invent/38_1.jpg"
  ],
  "order": 12
 },
 {
  "id": 23,
  "name": "Commercial Electric Light & Power System",
  "year": "1879",
  "sortYear": 1879,
  "hook": "Not just a bulb — the whole system behind it.",
  "cat": "transport",
  "catName": "Transport & Energy",
  "story": [
   "Many inventors had created crude, blinding electric arcs or short-lived filaments, but they were all impractical curiosities. In his legendary laboratory in Menlo Park, New Jersey, Thomas Alva Edison set out to create something far grander: a practical, gentle indoor light paired with a complete system to generate and distribute electric juice.",
   "After testing thousands of materials—from platinum wire to beard hairs—Edison found that carbonized Japanese bamboo filament could glow peacefully inside an evacuated glass bulb for over 1,200 hours.",
   "More importantly, Edison designed the parallel circuits, underground dynamos, meters, and safety fuses that made up the Pearl Street power station in lower Manhattan, illuminating Wall Street offices in 1882.",
   "Edison literally banished the night, extending the productive and creative hours of humanity, eliminating the fire hazards of kerosene lamps, and clearing the soot from living rooms.",
   "His light bulb became the universal cartoon symbol for a great idea—and his power grid set the standard for modern electrified civilization."
  ],
  "photos": [
   "assets/invent/23_1.jpg"
  ],
  "order": 13
 },
 {
  "id": 26,
  "name": "Alternating Current",
  "year": "1880s",
  "sortYear": 1885,
  "hook": "The current that could travel hundreds of miles.",
  "cat": "transport",
  "catName": "Transport & Energy",
  "story": [
   "In the epic \"War of the Currents\" that raged across 1880s America, direct current (DC) power grids could only transmit electricity about a mile before the voltage dropped off into uselessness, requiring noisy power stations on every city block.",
   "Enter Nikola Tesla, a brilliant Serbian immigrant with a mind tuned to cosmic frequencies, and George Westinghouse, a visionary Pittsburgh industrialist. Tesla patented the AC induction motor and polyphase electrical system, which Westinghouse boldly championed.",
   "AC power could be stepped up to hundreds of thousands of volts using transformers, sent effortlessly across hundreds of miles of thin wires, and stepped down safely to run household appliances.",
   "When Westinghouse illuminated the 1893 Chicago World's Fair in a dazzling sea of light and harnessed the thundering power of Niagara Falls in 1895, the verdict was clear: AC power was the lifeblood of the future.",
   "This triumphant collaboration between immigrant brilliance and American industrial capability electrified factories, farmlands, and cities across every continent."
  ],
  "photos": [
   "assets/invent/26_1.jpg"
  ],
  "order": 14
 },
 {
  "id": 42,
  "name": "Dishwasher",
  "year": "1886",
  "sortYear": 1886,
  "hook": "A wealthy hostess got tired of servants chipping her china.",
  "cat": "home",
  "catName": "Daily Life",
  "story": [
   "In Shelbyville, Illinois, a wealthy and independent-minded woman named Josephine Cochrane was frustrated that her fine heirloom china was constantly being chipped and broken by servants washing dishes by hand over the sink.",
   "When nobody took up her challenge to build a reliable mechanical washer, she went out to the woodshed behind her house, picked up a ruler, and famously declared: <em>\"If nobody else is going to invent a dish washing machine, I will do it myself!\"</em>",
   "Cochrane measured plates, cups, and saucers, designed wire racks to hold them upright, and placed them inside a copper boiler where hot soapy water was pumped up through rotating nozzles, cleaning the dishes with high-pressure spray instead of scrubbing.",
   "Her machine won highest honors at the 1893 World’s Columbian Exposition, and the company she founded grew into the household appliance giant KitchenAid.",
   "Cochrane’s determination freed millions of households from hours of dishpan drudgery, proving that American consumer innovation thrives when you take matters into your own hands."
  ],
  "photos": [
   "assets/invent/42_1.jpg"
  ],
  "order": 15
 },
 {
  "id": 39,
  "name": "Motion Picture Camera",
  "year": "1891",
  "sortYear": 1891,
  "hook": "Pictures that moved, and an industry that followed.",
  "cat": "home",
  "catName": "Daily Life",
  "story": [
   "Before the late 19th century, dramatic storytelling was confined to live theater stages and printed books. Visual movement could only be captured in sequential drawings that lacked the vitality of true motion.",
   "At the Edison laboratories in West Orange, New Jersey, Thomas Edison and his brilliant Scottish-born associate William Kennedy Dickson created the Kinetograph in 1891, using George Eastman’s newly invented flexible celluloid film.",
   "Dickson designed an escapement mechanism that pulled the perforated film smoothly past a rapid lens shutter, capturing forty-six photographic frames a second.",
   "When played back through their Kinetoscope viewer, images stepped to life: blacksmiths swung hammers, horses galloped, and acrobats flipped through the air with fluid realism.",
   "Their work gave birth to cinema—a cultural force that became America's great storytelling gift to the world, inspiring generations of filmmakers, educators, and dreamers."
  ],
  "photos": [
   "assets/invent/39_1.jpg"
  ],
  "order": 16
 },
 {
  "id": 35,
  "name": "Air Conditioning",
  "year": "1902",
  "sortYear": 1902,
  "hook": "Invented to fix smudged ink; it ended up redrawing the map.",
  "cat": "home",
  "catName": "Daily Life",
  "story": [
   "Picture a stifling summer day in Brooklyn, New York, in 1902. A printing plant was struggling because the brutal humidity was causing magazine pages to swell and warp, smearing fine color inks into a blurry mess.",
   "A young Cornell-educated engineer named Willis Carrier designed a machine that piped air over chilled coils, controlling both temperature and humidity with mechanical precision.",
   "Carrier’s invention did far more than dry ink: it moved into movie theaters, factories, hospitals, and homes, changing where and how the human race could comfortably live and work.",
   "Air conditioning made the modern American Sunbelt possible, turning sun-baked deserts into thriving hubs like Phoenix, Las Vegas, Houston, and Miami, while accelerating global tropical development.",
   "Carrier conquered summer heat and humidity, boosting human productivity and creating comfortable, healthy indoor environments worldwide."
  ],
  "photos": [
   "assets/invent/35_1.jpg"
  ],
  "order": 17
 },
 {
  "id": 21,
  "name": "The Airplane",
  "year": "1903",
  "sortYear": 1903,
  "hook": "Twelve seconds over a North Carolina beach.",
  "cat": "transport",
  "catName": "Transport & Energy",
  "story": [
   "On a cold, wind-whipped morning in Kitty Hawk, North Carolina, on December 17, 1903, two brothers who repaired bicycles in Dayton, Ohio, did what emperors and ancient philosophers had dreamed of for thousands of years: they conquered the sky.",
   "Wilbur and Orville Wright didn't just build a motorized glider; they solved the three-axis aerodynamic control problem—inventing wing-warping for roll, an elevator for pitch, and a movable rudder for yaw. Orville flew their handcrafted wood-and-muslin craft for 12 historic seconds over 120 feet of sand.",
   "While European experimenters tried to build inherently stable flying machines that couldn't maneuver, the Wrights recognized that a pilot needed full, dynamic mastery over the craft, treating flight like riding a bicycle through three-dimensional air.",
   "Within a few decades, their beachside experiment blossomed into transcontinental passenger airliners, global supply chains, and lunar-bound rockets.",
   "The Wright brothers proved that with meticulous grit, self-funded passion, and Midwestern ingenuity, two everyday mechanics could lift all of humanity into the clouds."
  ],
  "photos": [
   "assets/invent/21_1.jpg"
  ],
  "order": 18
 },
 {
  "id": 22,
  "name": "Assembly Line Auto Production",
  "year": "1913",
  "sortYear": 1913,
  "hook": "The car came to the worker instead of the other way round.",
  "cat": "transport",
  "catName": "Transport & Energy",
  "story": [
   "Before Henry Ford opened his Highland Park plant in Michigan, building an automobile was a slow, artisanal craft. A cadre of skilled mechanics hovered over a single chassis for twelve and a half hours, hand-fitting individual bolts and charging prices that only the ultra-wealthy could stomach.",
   "Inspired by grain conveyors and the overhead trolleys of Chicago meat-packing plants, Ford turned the entire concept upside down in 1913: <em>Bring the car to the worker, not the worker to the car.</em>",
   "Chassis were hauled along a moving conveyor while specialized workers added standardized parts in rhythmic unison. The production time for a Model T plummeted from 728 minutes down to an astonishing 93 minutes, driving the price down so dramatically that everyday factory hands could afford to buy the cars they assembled.",
   "Ford paired this mechanical triumph with the historic Five-Dollar-a-Day wage, creating a thriving American middle class with disposable income and leisure time.",
   "Mass production reshaped global manufacturing, proving that making high-quality products affordable to the working family is the ultimate catalyst for human prosperity."
  ],
  "photos": [
   "assets/invent/22_1.jpg"
  ],
  "order": 19
 },
 {
  "id": 40,
  "name": "Modern Zipper",
  "year": "1913–17",
  "sortYear": 1917,
  "hook": "The humble fastener that beat the button.",
  "cat": "home",
  "catName": "Daily Life",
  "story": [
   "In the 19th century, fastening boots, corsets, and heavy winter coats was a tedious battle with dozens of tiny buttons and hook-and-eye clasps that required special metal hook tools and endless patience.",
   "While early clasps had been explored by Elias Howe and Whitcomb Judson, it was Swedish-American engineer Gideon Sundback, working at the Universal Fastener Company in Meadville, Pennsylvania, who perfected the \"Hookless Fastener No. 2.\"",
   "Sundback increased the number of fastening teeth, gave each tooth a tiny hollow pocket on the bottom and a matching nib on top, and designed an elegant Y-shaped slider that interlocked them with a smooth pull.",
   "The B.F. Goodrich company adopted the fastener for rubber galoshes and dubbed it the \"Zipper\" for the zippy sound it made when pulled.",
   "Sundback’s precision fastener transformed clothing, luggage, spacesuits, and camping gear, quietly solving a daily frustration for billions of people."
  ],
  "photos": [
   "assets/invent/40_1.jpg"
  ],
  "order": 20
 },
 {
  "id": 25,
  "name": "Liquid-Fueled Rocket",
  "year": "1926",
  "sortYear": 1926,
  "hook": "A small rocket in a cabbage field; the Moon was the sequel.",
  "cat": "transport",
  "catName": "Transport & Energy",
  "story": [
   "On a frozen cabbage farm in Auburn, Massachusetts, on March 16, 1926, a quiet physics professor named Robert H. Goddard stood beside a skeletal frame of pipes and tanks. He lit a blowtorch, igniting a mixture of liquid oxygen and gasoline that shot his ten-foot rocket into the sky.",
   "The flight lasted only 2.5 seconds and reached an altitude of 41 feet, but it was the rocket equivalent of Kitty Hawk. Up until that cold morning, rockets had only burned clumsy, solid gunpowder, which lacked the controllable thrust needed to leave Earth's atmosphere.",
   "Goddard went on to patent gyroscopic stabilization, steerable thrust vanes, and multistage concepts. Though mocked by contemporary newspapers who claimed rockets couldn't fly in the vacuum of space, Goddard remained steadfast: <em>\"Every vision is a joke until the first man accomplishes it.\"</em>",
   "Every Saturn V that roared toward the Moon, every weather satellite tracking hurricanes, and every modern Martian rover can trace its propulsion lineage directly back to Goddard’s cabbage patch.",
   "His pioneering experiments gave humanity wings of fire to explore the great cosmos."
  ],
  "photos": [
   "assets/invent/25_1.jpg"
  ],
  "order": 21
 },
 {
  "id": 19,
  "name": "Defibrillator",
  "year": "1930s/1947",
  "sortYear": 1932,
  "hook": "A shock that restarts a stopped heart.",
  "cat": "med",
  "catName": "Medicine & Life",
  "story": [
   "When a human heart plunges into ventricular fibrillation, it ceases to pump blood. The muscle fibers merely flutter like a bag of worms, and brain death follows within minutes unless rhythm is violently reset.",
   "Pioneered in research by electrical engineer William Kouwenhoven at Johns Hopkins and brought into the clinical spotlight in 1947 by cardiac surgeon Dr. Claude Beck in Cleveland, the defibrillator demonstrated that a precisely calibrated pulse of electrical current could stun a chaotic heart, allowing its natural pacemaker to take back control.",
   "Beck famously shocked open the exposed heart of a 14-year-old boy on the operating table, restoring a regular pulse and saving the young man’s life.",
   "Subsequent American innovations created closed-chest defibrillation, portable units, and the automated external defibrillators (AEDs) that now hang in airports, gyms, and schools worldwide.",
   "These bright yellow life-saving boxes enable ordinary bystanders to step up and rescue fellow citizens from sudden death, a testament to American emergency medicine."
  ],
  "photos": [
   "assets/invent/19_1.jpg"
  ],
  "order": 22
 },
 {
  "id": 33,
  "name": "Synthetic Polymers / Nylon",
  "year": "1935",
  "sortYear": 1935,
  "hook": "Made from coal, air and water — and it changed clothing.",
  "cat": "industry",
  "catName": "Industry & Materials",
  "story": [
   "Before the 1930s, the global textile and manufacturing industries were held hostage to natural fibers: silk came from silkworms in Asia, wool from sheep, and bristles from wild boars. If weather, disease, or geopolitical conflicts disrupted trade, supply dried up instantly.",
   "Tucked in a DuPont research laboratory in Wilmington, Delaware, a brilliant organic chemist named Wallace Carothers was exploring the synthesis of giant molecular chains. In 1935, he whipped coal, water, and air into a silky, super-strong polymer called Nylon 6,6.",
   "Nylon caused an absolute sensation when unveiled at the 1939 New York World’s Fair: it was stronger than steel, more elastic than silk, and completely impervious to water and moths.",
   "During World War II, American nylon production pivoted instantly from women's stockings to heavy-duty parachutes, tow ropes, and aircraft tire cords.",
   "Carothers’ invention opened the floodgates for the entire modern synthetic materials revolution, shaping everything from athletic wear and carpets to life-saving medical sutures."
  ],
  "photos": [
   "assets/invent/33_1.jpg"
  ],
  "order": 23
 },
 {
  "id": 43,
  "name": "Nuclear Reactor / Atomic Energy",
  "year": "1942",
  "sortYear": 1942,
  "hook": "A squash court under a football stadium in Chicago.",
  "cat": "science",
  "catName": "Science & Defence",
  "story": [
   "On a freezing afternoon on December 2, 1942, beneath the abandoned West Stands of Stagg Field at the University of Chicago, a team of scientists led by Italian-American immigrant Enrico Fermi assembled a massive lattice of graphite blocks and uranium oxide rods: Chicago Pile-1.",
   "Physicists carefully withdrew the cadmium control rods while monitoring ticking neutron counters. At 3:25 PM, the counters sang a steady, continuous song: human beings had initiated the world’s very first self-sustaining, controlled nuclear chain reaction.",
   "Physicist Arthur Compton placed a cryptic long-distance call to Harvard: <em>\"The Italian navigator has landed in the New World.\"</em> The reply came: <em>\"How were the natives?\"</em> Compton answered: <em>\"Very friendly.\"</em>",
   "This historic experiment unlocked the atomic nucleus, providing a path to zero-carbon baseload electricity, cancer-treating medical radioisotopes, and nuclear-powered exploration across the world's oceans.",
   "Fermi's pile proved that American scientific teamwork could harness the deepest physical forces of the universe for the advancement of human civilization."
  ],
  "photos": [
   "assets/invent/43_1.jpg"
  ],
  "order": 24
 },
 {
  "id": 15,
  "name": "Mass Production of Penicillin",
  "year": "1940s",
  "sortYear": 1943,
  "hook": "The mould that ended the age of dying from a scratch.",
  "cat": "med",
  "catName": "Medicine & Life",
  "story": [
   "Alexander Fleming famously discovered the antibacterial power of the <em>Penicillium</em> mold in a London lab in 1928, but for over a decade, it remained a scientific curiosity. Scientists could only harvest microscopic droplets from shallow glass flasks—hardly enough to treat a single soldier with an infected scratch.",
   "With World War II raging, British researchers traveled to Peoria, Illinois, to partner with the USDA’s Northern Regional Research Laboratory. American scientists made a monumental breakthrough: submerged deep-tank fermentation using corn steep liquor and a potent local mold strain found on a Peoria cantaloupe.",
   "American chemical titans like Pfizer and Merck built massive, multi-story bubbling steel vats that pumped sterile air through nutrient broth, industrializing the production of the miracle drug.",
   "By D-Day in June 1944, American factories had produced enough penicillin to treat every wounded Allied soldier on the beaches of Normandy, turning deadly battlefield infections into treatable conditions.",
   "This triumph of American bioprocess engineering transformed antibiotics from precious laboratory relics into mass-produced shields that saved millions of lives worldwide."
  ],
  "photos": [
   "assets/invent/15_1.jpg"
  ],
  "order": 25
 },
 {
  "id": 36,
  "name": "Microwave Oven",
  "year": "1945",
  "sortYear": 1945,
  "hook": "A melted chocolate bar in an engineer's pocket.",
  "cat": "home",
  "catName": "Daily Life",
  "story": [
   "During World War II, Percy Spencer, a self-taught engineer at Raytheon in Massachusetts, was inspecting an active radar magnetron—a vacuum tube that generates high-frequency radio waves. He reached into his pocket for a snack and discovered his peanut-butter candy bar had melted into warm goo.",
   "Intrigued, Spencer held a bag of unpopped corn kernels near the humming magnetron; within seconds, popcorn was bouncing across his laboratory floor. The next morning, he put a raw egg in a kettle beside the tube and watched it rapidly heat and burst.",
   "Spencer realized that microwave radiation caused the water, fat, and sugar molecules in food to vibrate furiously, generating internal heat almost instantaneously.",
   "Raytheon patented the process, eventually shrinking massive commercial \"Radarange\" units into the friendly countertop microwave ovens that sit in nearly every kitchen across the world.",
   "Spencer’s accidental discovery brought hot meals to busy families in minutes, exemplifying the spontaneous, curious nature of American invention."
  ],
  "photos": [
   "assets/invent/36_1.jpg"
  ],
  "order": 26
 },
 {
  "id": 9,
  "name": "Transistor",
  "year": "1947",
  "sortYear": 1947,
  "hook": "The tiny switch that everything digital is built from.",
  "cat": "info",
  "catName": "Information & Communication",
  "story": [
   "In December 1947, amidst the snows of Murray Hill, New Jersey, three Bell Labs scientists—John Bardeen, Walter Brattain, and William Shockley—prodded a small crystal of germanium with two gold-foil contacts. When they pumped an electric current through one side, an amplified signal surged out the other.",
   "Prior to that snowy afternoon, the world ran on vacuum tubes—bulky, fragile, glowing glass bulbs that ran scorching hot, burned out constantly, and consumed tremendous power. You couldn't build a pocket radio with tubes, let alone an onboard spacecraft computer.",
   "The solid-state transistor solved everything: it was microscopic, generated almost no heat, lasted indefinitely, and acted as a blindingly fast electronic switch.",
   "It is, without exaggeration, the fundamental building block of all modern civilization. Every television, medical monitor, automobile engine control unit, and artificial intelligence cluster relies on trillions of these tiny semiconductor gates opening and closing billions of times a second.",
   "The transistor stands as a monument to American industrial physics—a microscopic gateway through which the entire modern digital era stepped into existence."
  ],
  "photos": [
   "assets/invent/09_1.jpg"
  ],
  "order": 27
 },
 {
  "id": 45,
  "name": "Radiocarbon Dating",
  "year": "1949",
  "sortYear": 1949,
  "hook": "A clock hidden inside every once-living thing.",
  "cat": "science",
  "catName": "Science & Defence",
  "story": [
   "Before the late 1940s, archaeologists staring at ancient campfire ashes, wooden tools, or fossilized bones were largely guessing at their age based on the depth of the dirt layer in which they were buried.",
   "In 1949, University of Chicago physical chemist Willard Libby realized that cosmic rays entering the upper atmosphere convert nitrogen into radioactive carbon-14, which living plants and animals absorb throughout their lifetimes.",
   "When an organism dies, its carbon-14 intake stops, and the radioactive isotope decays at a steady half-life of roughly 5,730 years. By measuring the remaining carbon-14 with sensitive Geiger counters, Libby could calculate the exact age of organic artifacts up to fifty thousand years old.",
   "Libby's method revolutionized archaeology, anthropology, oceanography, and geology, turning historical speculation into rigorous, quantifiable chronological science.",
   "For this breakthrough, Libby received the 1960 Nobel Prize in Chemistry, providing humanity with a reliable clock to read Earth’s ancient history."
  ],
  "photos": [
   "assets/invent/45_1.jpg"
  ],
  "order": 28
 },
 {
  "id": 32,
  "name": "Photovoltaic / Solar Cell",
  "year": "1954",
  "sortYear": 1954,
  "hook": "Bell Labs turned sunlight straight into electricity.",
  "cat": "industry",
  "catName": "Industry & Materials",
  "story": [
   "For millennia, humans watched the Sun bathe our planet in limitless light, powerless to harness its photons directly as usable electricity. We relied on burning prehistoric plants in the form of coal and petroleum to turn mechanical turbine wheels.",
   "In April 1954, at Bell Laboratories in New Jersey, three American researchers—chemist Calvin Fuller, physicist Gerald Pearson, and engineer Daryl Chapin—created a strip of silicon doped with precise impurities. When sunlight struck the wafer, electrons jumped, producing an electric current.",
   "The <em>New York Times</em> heralded the Bell Solar Battery as the dawn of an era that would lead to <em>\"the harnessing of the almost limitless energy of the sun.\"</em>",
   "Initial cells powered remote telephone repeaters and orbital satellites like Vanguard 1, but continual American innovation pushed efficiencies up and production costs down.",
   "Today, fields of solar panels gleam from desert plains to suburban rooftops, providing humanity with clean, sustainable, and inexhaustible energy drawn directly from the heavens."
  ],
  "photos": [
   "assets/invent/32_1.jpg"
  ],
  "order": 29
 },
 {
  "id": 14,
  "name": "Polio Vaccine",
  "year": "1955",
  "sortYear": 1955,
  "hook": "He refused to patent it. Who owns the sun?",
  "cat": "med",
  "catName": "Medicine & Life",
  "story": [
   "During the hot summers of the early 20th century, a silent terror stalked American neighborhoods. Parents kept children away from public pools, movie theaters, and playgrounds as the poliovirus struck down tens of thousands of youngsters each year, leaving healthy kids confined to leg braces or trapped inside mechanical iron lungs.",
   "Working tirelessly in his laboratory at the University of Pittsburgh, Dr. Jonas Salk developed an inactivated virus vaccine that trained the human immune system to fight off the pathogen without causing disease.",
   "When the nationwide field trials involving 1.8 million children (the famous \"Polio Pioneers\") concluded on April 12, 1955, church bells rang across America and factory whistles blew in celebration. When asked who owned the patent on the life-saving medicine, Salk famously replied: <em>\"The people, I would say. There is no patent. Could you patent the sun?\"</em>",
   "Together with Albert Sabin’s subsequent oral vaccine, American medical heroism effectively eradicated the scourge of polio from nearly every corner of the Earth.",
   "Salk’s achievement remains a shining beacon of selflessness and scientific brilliance, saving millions of children across generations from a lifetime of paralysis."
  ],
  "photos": [
   "assets/invent/14_1.jpg"
  ],
  "order": 30
 },
 {
  "id": 10,
  "name": "Integrated Circuit / Microchip",
  "year": "1958",
  "sortYear": 1958,
  "hook": "A whole circuit on one sliver of silicon.",
  "cat": "info",
  "catName": "Information & Communication",
  "story": [
   "By the late 1950s, engineers hit what they called the \"tyranny of numbers.\" Even with transistors, hand-soldering thousands of individual wires, resistors, and capacitors onto circuit boards led to massive tangle traps that were impossible to scale or keep reliable.",
   "During a quiet summer at Texas Instruments when most of his colleagues were on vacation, Jack Kilby had an epiphany: if every component could be made from the same semiconductor material, why not carve them all into a single sliver of silicon? Independently, Robert Noyce at Fairchild Semiconductor perfected the planar process using silicon and printed metal interconnects.",
   "Their microchip took the messy spaghetti of individual components and embedded an entire functional electronic neighborhood onto a single wafer.",
   "The result was an exponential explosion in speed and reliability paired with a precipitous collapse in cost. It ignited \"Moore's Law,\" driving computing power to double roughly every two years and turning high-tech processing from an exotic luxury into an everyday reality.",
   "The microchip transformed Silicon Valley into the engine room of global prosperity, cementing American leadership in the micro-electronics age."
  ],
  "photos": [
   "assets/invent/10_1.jpg"
  ],
  "order": 31
 },
 {
  "id": 16,
  "name": "Cardiac Pacemaker",
  "year": "1950/1960",
  "sortYear": 1958,
  "hook": "A wrong resistor became a heart's metronome.",
  "cat": "med",
  "catName": "Medicine & Life",
  "story": [
   "The human heart is an astonishing biological engine, contracting over one hundred thousand times a day on the instructions of its own tiny electrical system. But when that internal rhythm falters, dizziness, blackouts, and sudden cardiac death can follow.",
   "In Buffalo, New York, an inventive electrical engineer named Wilson Greatbatch was building an oscillator to record heart sounds. He accidentally grabbed a resistor of the wrong electrical value from his tackle box; when he plugged it in, the circuit pulsed for 1.8 milliseconds and paused for a second—mimicking a perfect human heartbeat.",
   "Greatbatch didn't toss the mistake in the trash. He teamed up with Buffalo surgeons, encapsulated the transistorized circuit in biocompatible epoxy, and created the first reliable, implantable cardiac pacemaker powered by mercury-zinc batteries.",
   "His device restored steady, rhythmic vitality to patients whose hearts were slowing to a halt, letting them walk out of hospital wards and return to full, active lives.",
   "Today, millions of grandmothers, marathon runners, and hardworking citizens walk the Earth with steady heartbeats courtesy of Greatbatch's serendipitous spark of American genius."
  ],
  "photos": [
   "assets/invent/16_1.jpg"
  ],
  "order": 32
 },
 {
  "id": 44,
  "name": "LASER",
  "year": "1960",
  "sortYear": 1960,
  "hook": "A solution looking for a problem — it found thousands.",
  "cat": "science",
  "catName": "Science & Defence",
  "story": [
   "For decades, light had been understood as an unruly, incoherent jumble—a chaotic mixture of wavelengths and phases scattering in every direction, like the glow from a camp lantern or a domestic tungsten bulb.",
   "Building on theoretical concepts explored by American physicists Charles Townes and Arthur Schawlow, Theodore Maiman at Hughes Research Laboratories in Malibu, California, built the world’s first working laser on May 16, 1960. He enclosed a synthetic ruby crystal rod inside a high-powered helical flash lamp.",
   "When pulsed with light, the ruby rod emitted a beam of pure, coherent, monochromatic crimson light: Light Amplification by Stimulated Emission of Radiation.",
   "Early critics playfully dismissed the laser as \"a solution looking for a problem,\" but it rapidly became indispensable to modern civilization.",
   "Today, lasers read barcode tags, transmit data across oceans through fiber-optic cables, perform delicate eye surgeries, cut industrial steel, and power advanced quantum physics labs."
  ],
  "photos": [
   "assets/invent/44_1.jpg"
  ],
  "order": 33
 },
 {
  "id": 49,
  "name": "Communication Satellites",
  "year": "1962",
  "sortYear": 1962,
  "hook": "Live television across an ocean, bounced off the sky.",
  "cat": "science",
  "catName": "Science & Defence",
  "story": [
   "In the early 1960s, transatlantic telephone calls traveled through a handful of expensive undersea cables that offered scratchy sound and zero capability to broadcast live moving television pictures between continents.",
   "On July 10, 1962, NASA launched Telstar 1—a glittering, sphere-shaped satellite built by Bell Labs and AT&T—into low Earth orbit atop a Thor-Delta rocket.",
   "Later that month, television viewers in America and Europe sat transfixed before their sets as live, crystal-clear television images of the Statue of Liberty and the Eiffel Tower beamed across the Atlantic Ocean in real time.",
   "Telstar proved that space was not just a desolate void to explore, but an orbital ocean that could relay news, financial transactions, and telephone calls across continents at the speed of light.",
   "It turned our planet into an interconnected global village, proving that American space technology could bring human cultures closer together."
  ],
  "photos": [
   "assets/invent/49_1.jpg"
  ],
  "order": 34
 },
 {
  "id": 1,
  "name": "The Internet / ARPANET",
  "year": "1969",
  "sortYear": 1969,
  "hook": "They typed L-O-G and the system crashed. It still worked.",
  "cat": "info",
  "catName": "Information & Communication",
  "story": [
   "Imagine a world where sharing a single research document meant printing a stack of paper, sliding it into a manila envelope, and waiting three days for the postman. In the heat of the Cold War, thinkers at the U.S. Department of Defense’s Advanced Research Projects Agency (DARPA) dreamed up an outrageous question: <em>What if computers across the country could chat with each other directly?</em>",
   "On October 29, 1969, a young programmer at UCLA typed \"L-O-G\" to a machine up in Stanford. The system promptly crashed after the letter \"O,\" but the digital spark caught fire. That fragile four-node experiment proved that packet switching could knit distant mainframes into a unified web.",
   "American researchers threw open the architecture with open communication standards like TCP/IP, ensuring no central master switch could dictate human conversation. Instead of hoarding the secret, Uncle Sam handed the blueprint to humanity.",
   "Today, that modest experiment pulses beneath global financial markets, streaming services, and family video calls. It bridged continents, democratized knowledge, and turned every human being with a screen into a global citizen.",
   "That is the American spirit in a nutshell—building open roads across uncharted intellectual territory so the entire planet can travel together."
  ],
  "photos": [
   "assets/invent/01_1.jpg"
  ],
  "order": 35
 },
 {
  "id": 48,
  "name": "CCD Sensor / Digital Imaging",
  "year": "1969",
  "sortYear": 1969,
  "hook": "The chip that made film optional.",
  "cat": "science",
  "catName": "Science & Defence",
  "story": [
   "For over a century, capturing a photograph required chemical film emulsions, smelly darkroom baths, and delicate rolls of negative film that had to be physically processed and printed on paper.",
   "In October 1969, at Bell Labs in New Jersey, physicists Willard Boyle and George E. Smith brainstormed a solid-state electronic device that could shift electrical charges along a semiconductor surface: the Charge-Coupled Device (CCD).",
   "They quickly realized the array of tiny silicon potential wells could convert light photons directly into electrical charge packets, capturing a 2D optical scene as an array of digital pixels.",
   "The CCD sensor completely eliminated chemical film, paving the way for digital cameras, camera-equipped smartphones, astronomical sky surveys, and biomedical endoscopy.",
   "Boyle and Smith’s digital retina allowed humanity to capture, preserve, and instantly share the beauty of our visual world across digital networks."
  ],
  "photos": [
   "assets/invent/48_1.jpg"
  ],
  "order": 36
 },
 {
  "id": 12,
  "name": "Graphical User Interface / GUI",
  "year": "1970s",
  "sortYear": 1970,
  "hook": "Windows, icons, a mouse — computing for everyone.",
  "cat": "info",
  "catName": "Information & Communication",
  "story": [
   "In the early days of computing, interacting with a processor was a cold, unforgiving ordeal. You sat before a black monitor with an ominous blinking green cursor, forced to memorize esoteric command-line prompts like `grep`, `cd /bin`, or `chmod 755` just to open a simple letter.",
   "Tucked away in the hills of Palo Alto, California, the brilliant minds at Xerox PARC looked at that intimidating screen and said: <em>Let's make this joyful.</em> They invented the desktop metaphor—complete with clickable folders, overlapping windows, trash cans, and a quirky rolling plastic puck called a \"mouse.\"",
   "Pioneers like Alan Kay and Adele Goldberg designed an interface so intuitive that a seven-year-old child could sit down and start creating within minutes. Apple and Microsoft later refined and popularized these ideas, bringing graphical operating systems into hundreds of millions of living rooms.",
   "The GUI transformed computers from exclusive mathematical calculators for the engineering elite into inviting creative canvases for artists, writers, musicians, and accountants.",
   "By making technology visually human, American innovators turned a cold silicon machine into an extension of the human imagination."
  ],
  "photos": [
   "assets/invent/12_1.jpg"
  ],
  "order": 37
 },
 {
  "id": 7,
  "name": "Email",
  "year": "1971",
  "sortYear": 1971,
  "hook": "The @ sign got the most important job in the alphabet.",
  "cat": "info",
  "catName": "Information & Communication",
  "story": [
   "Step back to Cambridge, Massachusetts, in 1971. Computer engineer Ray Tomlinson was staring at the early ARPANET terminals, wondering how researchers working on different machines across the nation could leave notes for one another without both having to sit at their desks at the exact same moment.",
   "Tomlinson grabbed a keyboard and made two historic choices: he wrote a clever program called SNDMSG, and he glanced at the row of punctuation keys looking for a symbol that wasn't part of any person's name. His finger landed on the humble `@` symbol.",
   "That little `@` sign instantly defined digital address space—separating the user's name from the machine hosting their mailbox. Tomlinson sent a test message to himself (something like <em>QWERTYUIOP</em>), and without fanfare, modern messaging was born.",
   "Email shattered the tyranny of time zones and postage costs. It empowered global commerce, opened asynchronous workflows across oceans, and replaced filing cabinets full of carbon paper with organized digital folders.",
   "Whenever you check your inbox or tag a collaborator with an `@` handle, you are using the elegant convention an American engineer conjured up to connect working minds."
  ],
  "photos": [
   "assets/invent/07_1.jpg"
  ],
  "order": 38
 },
 {
  "id": 47,
  "name": "Microprocessor",
  "year": "1971",
  "sortYear": 1971,
  "hook": "A whole computer's brain on one chip.",
  "cat": "science",
  "catName": "Science & Defence",
  "story": [
   "In the late 1960s, a Japanese calculator company approached a young Silicon Valley firm named Intel to design twelve custom integrated chips for a new desktop printing calculator.",
   "Intel engineer Ted Hoff looked at the convoluted multi-chip blueprint and suggested an audacious alternative: instead of a tangled set of single-purpose chips, why not build a single, general-purpose central processing unit on one piece of silicon that could be programmed to perform any logical task?",
   "Federico Faggin, Masatoshi Shima, and Stan Mazor joined Hoff, engineering the legendary Intel 4004 in 1971. It packed 2,300 transistors onto a ceramic package the size of a fingernail, matching the computational power of the room-sized ENIAC computer built 25 years prior.",
   "The microprocessor became the programmable brain of modern electronics—bringing computational intelligence to cars, traffic lights, microwave ovens, pacemakers, and personal computers.",
   "Hoff and his team consolidated human logic onto a sliver of sand, setting off the greatest computing boom in history."
  ],
  "photos": [
   "assets/invent/47_1.jpg"
  ],
  "order": 39
 },
 {
  "id": 3,
  "name": "The Mobile Phone",
  "year": "1973",
  "sortYear": 1973,
  "hook": "A two-pound brick, and a call made just to gloat.",
  "cat": "info",
  "catName": "Information & Communication",
  "story": [
   "Picture Sixth Avenue in New York City on a crisp April morning in 1973. Crowds were bustling, yellow cabs were honking, and pedestrian heads suddenly turned toward a tall Motorola engineer named Martin Cooper holding what looked like a two-pound cream-colored brick to his ear.",
   "Cooper didn't call the police or the press—he called his chief rival at Bell Labs just to gloat that he was calling from a real, handheld cellular telephone. That brick, the DynaTAC 8000X, offered a whopping twenty minutes of battery life and took ten hours to charge, but it shattered the physical tether tying humanity to a wall socket.",
   "Before Cooper’s stroll, phone numbers belonged to physical locations—a house, an office desk, a roadside booth. Cooper and his team declared that phone numbers should belong directly to individual people, wherever their boots happened to step.",
   "American telecommunications innovation transformed the phone from a stationary piece of real estate into an intimate personal companion. It unlocked spontaneous human connection and laid the asphalt for mobile commerce across every hemisphere.",
   "Now, billions of souls navigate deserts, mega-cities, and mountain ranges with a pocket communicator. It all started with an audacious American engineer smiling on a Manhattan sidewalk."
  ],
  "photos": [
   "assets/invent/03_1.jpg"
  ],
  "order": 40
 },
 {
  "id": 18,
  "name": "Recombinant DNA / Genetic Engineering",
  "year": "1973",
  "sortYear": 1973,
  "hook": "Cutting and pasting the code of life.",
  "cat": "med",
  "catName": "Medicine & Life",
  "story": [
   "Picture a delicatessen in Honolulu, Hawaii, in late 1972. Two scientists—Herbert Boyer from the University of California, San Francisco, and Stanley N. Cohen from Stanford—sat over pastrami sandwiches scribbling on napkins, realizing their independent research projects formed two halves of a biological puzzle.",
   "Boyer had isolated restriction enzymes that acted like molecular scissors, cutting DNA strands at exact sequences. Cohen had figured out how to introduce external ringlets of DNA, called plasmids, back into living bacteria.",
   "By combining their techniques in 1973, they spliced a piece of foreign genetic code into an <em>E. coli</em> bacterium, which promptly duplicated the new instructions as if they were its own. They had unlocked recombinant DNA technology.",
   "This breakthrough birthed the entire modern biotechnology industry. It allowed humanity to program microorganisms like biological factories to manufacture medicines, engineer drought-resistant crops, and develop targeted gene therapies for rare diseases.",
   "Boyer and Cohen showed that nature’s master code could be thoughtfully edited, opening an empowering new chapter in human medicine."
  ],
  "photos": [
   "assets/invent/18_1.jpg"
  ],
  "order": 41
 },
 {
  "id": 50,
  "name": "Barcodes & UPC",
  "year": "1974",
  "sortYear": 1974,
  "hook": "A pack of gum, and a pattern drawn in beach sand.",
  "cat": "science",
  "catName": "Science & Defence",
  "story": [
   "Picture a grocery store in the 1960s: checkout clerks had to manually read the price stamped on every can of beans, key the numbers into a mechanical register, and rely on back-room workers with clipboards to count inventory boxes by hand.",
   "Sitting on a beach in Miami in 1948, graduate student Norman Joseph Woodland had an epiphany: he dragged four fingers through the sand, realizing he could widen Samuel Morse's dots and dashes into thick and thin parallel lines that an optical scanner could read automatically.",
   "Decades later, Woodland and IBM engineer George Laurer turned the concept into the Universal Product Code (UPC) and laser scanner system. On June 26, 1974, at a supermarket in Troy, Ohio, a cashier scanned a 10-pack of Wrigley’s Juicy Fruit chewing gum, and history was made.",
   "The barcode revolutionized global supply chains, automated warehouse logistics, eliminated checkout lines, and enabled precise inventory control across every retail industry on Earth.",
   "Woodland and Laurer’s simple striped pattern brought speed, precision, and efficiency to the global marketplace, quietly organizing the world’s trade."
  ],
  "photos": [
   "assets/invent/50_1.jpg"
  ],
  "order": 42
 },
 {
  "id": 2,
  "name": "The Personal Computer",
  "year": "1971–1977",
  "sortYear": 1975,
  "hook": "Computing dragged out of the vault and into the garage.",
  "cat": "info",
  "catName": "Information & Communication",
  "story": [
   "Once upon a time, computers were colossal beasts locked behind plate-glass windows in corporate air-conditioned vaults. They wore tape reels like medals, devoured enough electricity to dim a neighborhood, and answered only to priests in white lab coats who spoke fluent punch-card.",
   "Then came the American garage pioneers. Visionaries like John Blankenbaker with the Kenbak-1, followed by Steve Jobs and Steve Wozniak soldering the Apple I among spare circuit boards, dared to ask why everyday citizens shouldn't command their own digital firepower.",
   "They shrunk room-sized behemoths down to desktop boxes with glowing screens, friendly keyboards, and wooden chassis. Suddenly, high schoolers could program games, small business owners could run accounting spreadsheets, and writers could banish correction tape forever.",
   "This was nothing less than the democratization of human intellect. By handing raw computing horsepower to the masses, America sparked a worldwide creative revolution that leveled the playing field for entrepreneurs everywhere.",
   "When you boot up your laptop at a coffee shop today, remember: you’re wielding a machine that was wrested out of the ivory tower by American dreamers who believed tools should serve free individuals."
  ],
  "photos": [
   "assets/invent/02_1.jpg"
  ],
  "order": 43
 },
 {
  "id": 17,
  "name": "MRI Machine",
  "year": "1977",
  "sortYear": 1977,
  "hook": "Seeing inside a living person without cutting.",
  "cat": "med",
  "catName": "Medicine & Life",
  "story": [
   "For decades, doctors seeking to understand what was happening inside a sick patient had to rely on X-rays—which exposed tissue to ionizing radiation and showed little more than bone silhouettes—or undergo exploratory surgery with a scalpel.",
   "Enter Dr. Raymond Damadian, an eccentric and determined physician-physicist from New York. In 1971, he discovered that cancerous tissue possessed distinctly different nuclear magnetic resonance signals than healthy tissue.",
   "Ignoring skeptics who insisted a full-body scan was mathematically impossible, Damadian and his assistants hand-wound superconducting wire coils and built \"Indomitable\"—the first full-body Magnetic Resonance Imaging scanner. On July 3, 1977, they achieved the world’s first human body scan.",
   "MRI technology allows physicians to view slices of the living brain, detect soft-tissue tumors, and assess spinal cord trauma with crystal clarity, all without a single drop of harmful radiation.",
   "It stands as a monumental triumph of American medical physics, turning magnetic resonance into a window that reveals life’s internal secrets."
  ],
  "photos": [
   "assets/invent/17_1.jpg"
  ],
  "order": 44
 },
 {
  "id": 5,
  "name": "Global Positioning System / GPS",
  "year": "1978",
  "sortYear": 1978,
  "hook": "Atomic clocks in orbit so nobody is ever lost.",
  "cat": "info",
  "catName": "Information & Communication",
  "story": [
   "For millennia, sailors stared anxiously at cloudy night skies, hoping a glimpse of Polaris or a clumsy sextant measurement would keep them off jagged reefs. If fog rolled in, human navigation became little more than educated guesswork and hopeful prayers.",
   "Enter the United States Department of Defense in 1978, which decided to build an artificial constellation of 24 atomic-clock-synchronized satellites circling twelve thousand miles above Earth. Dreamed up by minds like Roger L. Easton, Bradford Parkinson, and Gladys West, GPS gave the planet an infallible digital compass.",
   "The system works through sheer mathematical elegance: by timing radio signals traveling at the speed of light down to nanoseconds, a pocket receiver instantly calculates its own latitude, longitude, and elevation.",
   "In a crowning act of global generosity, the United States made this multi-billion-dollar military navigation net free for the entire civilian world to use. Overnight, airplanes landed safely in zero visibility, container ships charted optimal ocean routes, and search-and-rescue teams found lost hikers on snow-blind peaks.",
   "Today, your food delivery arrives hot and your road trips stay on track because American satellites continue their silent, faithful waltz above the clouds."
  ],
  "photos": [
   "assets/invent/05_1.jpg"
  ],
  "order": 45
 },
 {
  "id": 20,
  "name": "Synthetic Insulin",
  "year": "1978",
  "sortYear": 1978,
  "hook": "Bacteria taught to brew human insulin.",
  "cat": "med",
  "catName": "Medicine & Life",
  "story": [
   "Before the late 1970s, managing Type 1 diabetes was a fraught and precarious enterprise. Patients relied on insulin extracted from the pancreas glands of slaughtered cattle and pigs—a supply vulnerable to shortages that often triggered allergic reactions in human patients.",
   "In 1978, scientists at a scrappy San Francisco startup called Genentech, led by Herbert Boyer and in collaboration with City of Hope Medical Center, synthesized the chemical genes for human insulin and spliced them into laboratory bacteria.",
   "Those engineered microbes began churning out authentic human insulin—molecule for molecule identical to the hormone produced by a healthy human body.",
   "Approved in 1982 as \"Humulin,\" it became the world’s very first commercially produced recombinant DNA drug. It guaranteed an infinite, pure, and affordable supply of insulin to millions of diabetics worldwide.",
   "This milestone proved that genetic engineering was not just science fiction, but a compassionate, life-sustaining reality forged by American enterprise."
  ],
  "photos": [
   "assets/invent/20_1.jpg"
  ],
  "order": 46
 },
 {
  "id": 27,
  "name": "Lithium-Ion Battery Development",
  "year": "1980s",
  "sortYear": 1985,
  "hook": "The battery that untethered the modern world.",
  "cat": "transport",
  "catName": "Transport & Energy",
  "story": [
   "The transition to a wireless, renewable world required an energy reservoir that packed tremendous power into a lightweight, rechargeable package. Traditional lead-acid and nickel-cadmium batteries were simply too heavy, toxic, and weak to run modern mobile gadgets or long-range electric vehicles.",
   "Working at the University of Texas at Austin in the 1980s, American solid-state physicist John B. Goodenough made a colossal materials breakthrough: he discovered that a cathode made of lithium cobalt oxide could double the energy density of rechargeable cells while remaining stable.",
   "Goodenough’s cathode design unlocked the modern lithium-ion battery, enabling Sony and subsequent manufacturers to build safe, ultra-compact rechargeable powerpacks.",
   "His discovery sparked the revolution in laptops, smartphones, cordless power tools, and high-performance electric vehicles that are driving the global green-energy transition.",
   "Goodenough was awarded the Nobel Prize in Chemistry at age 97, proving that American academic dedication can literally power the world for generations."
  ],
  "photos": [
   "assets/invent/27_1.jpg"
  ],
  "order": 47
 },
 {
  "id": 46,
  "name": "Hubble Space Telescope",
  "year": "1990",
  "sortYear": 1990,
  "hook": "A flawed mirror, a daring repair, and the deep field.",
  "cat": "science",
  "catName": "Science & Defence",
  "story": [
   "Since Galileo first looked through a spyglass, astronomers had their views of the cosmos blurred, distorted, and dimmed by Earth’s thick, turbulent, and light-polluted atmosphere.",
   "On April 24, 1990, NASA launched the Hubble Space Telescope into low Earth orbit aboard Space Shuttle <em>Discovery</em>. Positioned above the clouds, Hubble turned its pristine mirror toward the deep void of space.",
   "When astronomers pointed Hubble at a seemingly empty patch of dark sky for ten days, the resulting \"Hubble Deep Field\" image revealed thousands of previously undiscovered galaxies stretching back to the dawn of cosmic time.",
   "Hubble helped pin down the age of the universe, confirmed the existence of supermassive black holes at the hearts of galaxies, and showed the breathtaking beauty of nebulae to millions of awe-struck schoolkids.",
   "Hubble transformed human cosmic understanding, serving as America’s grand astronomical gift to world science."
  ],
  "photos": [
   "assets/invent/46_1.jpg"
  ],
  "order": 48
 },
 {
  "id": 11,
  "name": "Wi-Fi Protocols",
  "year": "1990s",
  "sortYear": 1997,
  "hook": "The invisible utility you notice only when it stops.",
  "cat": "info",
  "catName": "Information & Communication",
  "story": [
   "Remember the tangled bird's nest of ethernet cables that used to snake across living room rugs, office cubicles, and school computer labs? Tripping over a blue cord meant ripping your desktop off the table and bringing the afternoon's internet session to an abrupt halt.",
   "While foundational radio frequency techniques originated internationally, American tech firms, academic consortia, and standard-setting bodies like the IEEE (headquartered in New York) drove the development and commercialization of the 802.11 standards that made wireless local area networking robust, ubiquitous, and dirt cheap.",
   "Through breakthroughs in spectrum modulation, hardware fabrication, and seamless protocol handshakes, engineers turned invisible radio waves into high-speed digital highways.",
   "Suddenly, laptops were liberated from desks, factories deployed wireless sensor networks, and coffee shops blossomed into vibrant remote workspaces.",
   "Wi-Fi untethered the human race from physical cables, proving once again that American engineering excellence thrives when setting free standards that unleash global mobility."
  ],
  "photos": [
   "assets/invent/11_1.jpg"
  ],
  "order": 49
 },
 {
  "id": 8,
  "name": "The Smartphone / iPhone",
  "year": "2007",
  "sortYear": 2007,
  "hook": "One device that swallowed a dozen others.",
  "cat": "info",
  "catName": "Information & Communication",
  "story": [
   "On January 9, 2007, Steve Jobs walked onto a stage in San Francisco and announced three separate products: a widescreen iPod with touch controls, a revolutionary mobile phone, and a breakthrough internet communicator. Then he paused, flashed a grin, and revealed they were all a single device.",
   "Before the iPhone, mobile devices were clumsy plastic bricks with cramped mechanical thumb-boards and tiny, uninspiring screens. Apple reimagined the phone as an infinite canvas of glass that adapted dynamically to whatever software you were running.",
   "By pioneering capacitive multi-touch, users could pinch-to-zoom into photos, flick through playlists with kinetic physics, and explore an App Store that empowered hundreds of thousands of independent software developers around the globe.",
   "It compressed entire living rooms of technology—cameras, camcorders, GPS navigators, game consoles, flashlights, and encyclopedia libraries—into a pocketable sliver of aluminum and glass.",
   "The smartphone transformed human behavior, culture, and business in under a decade, standing as a masterclass in American product design, visionary software, and intuitive elegance."
  ],
  "photos": [
   "assets/invent/08_1.jpg"
  ],
  "order": 50
 }
];

const INVENTION_CATS = {
 "info": "Information & Communication",
 "med": "Medicine & Life",
 "transport": "Transport & Energy",
 "industry": "Industry & Materials",
 "home": "Daily Life",
 "science": "Science & Defence"
};

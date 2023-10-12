// CSS loader animation
let loader;

function runLoader() {
  loader = setTimeout(showPage, 2000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("loaderDiv").style.display = "block";
}

// Specify HTML title element
const title = document.getElementById("title");
const poster = document.getElementById("poster");
const synopsis = document.getElementById("synopsis");

// Create array for answer to go into
let finalSelection = [];

// Grab local storage, parse and whack back into array
function grabLocalStorage() {
  const answersFromLocalStorage = JSON.parse(
    localStorage.getItem("finalSelection")
  );
  for (let i = 0; i < answersFromLocalStorage.length; i++) {
    finalSelection.push(answersFromLocalStorage[i]);
  }
}

// Clear local storage and empty array when hitting the Start Again button
function clearStorage() {
  localStorage.clear();
  finalSelection = [];
  history.back();
}

// Invoke it early so the code has data to work with
grabLocalStorage();

// Convert finalSelection to string
let stringSelection = finalSelection.join("");
console.log(stringSelection);

// Compare stringSelection to allMovies criteriaCodes and display result if it exists
function stringCompare() {
  for (let i = 0; i < allMovies.length; i++) {
    if (stringSelection === allMovies[i].criteriaCode) {
      poster.src = allMovies[i].poster;
      document.getElementById("title").innerHTML = `${allMovies[i].name}`;
      document.getElementById(
        "synopsis"
      ).innerHTML = `${allMovies[i].synopsis}`;
      break;
    }
  }
}

// Array to hold Movies
allMovies = [];

// Constructor to make Movies and push to array
function Movie(name, criteriaCode, poster, synopsis) {
  this.name = name;
  this.criteriaCode = criteriaCode;
  this.poster = `./posters/${poster}.jpg`;
  this.synopsis = synopsis;
  allMovies.push(this);
}

// Make some Movies
new Movie(
  "Dead of Night (1945)",
  "0101010000",
  "deadofnight",
  "A British anthology movie that tells five spooky tales. There’s one about a mirror (genuinely frightening) and one about golf (based on an H.G. Wells story, bizarrely) but the most famous story concerns a ventriloquist who loses control of his dummy.<br/><br/>An absolute gem in British horror history, in its strongest moments Dead of Night remains a scary film today. Its plot’s looped structure influenced the steady-state model of the creation of the universe, a now outdated alternative to the Big Bang. Seriously."
);
new Movie(
  "Barbarella (1968)",
  "1011111100",
  "barbarella",
  "Completely mad French sci-fi fantasy adaptation of a comic, chronicling the adventures of the eponymous heroine, a space-faring adventurer with outstanding fashion sense. In an early scene, she is restrained on an alien planet and attacked by a horde of bitey mechanical dolls with very very sharp teeth.<br/><br/>An undeniable cult classic with production design to die for, Barberella is perhaps most known as key inspiration for 80s synthpop giants Duran Duran (or Durand Durand, as the character is known in the movie)."
);
new Movie(
  "Asylum (1972)",
  "1111011000",
  "asylum",
  "Five tales of terror from British horror anthology factory, Amicus Productions. Hacked up body parts return to life. A tailor produces a material that reanimates the dead. Most importantly to us, a doctor devises a way of possessing a doll reproduction of himself - through willpower and desire alone.<br/><br/>Amicus Productions made plenty of anthology films in the 1960s and 70s and Asylum is perhaps the best of them. Its killer dolls take a while to turn up and are adorably diddy, but utterly unique in cinema."
);
new Movie(
  "Trilogy of Terror (1975)",
  "0011001001",
  "trilogyofterror",
  "A made for TV horror anthology, two of its three tales are disposable. The final one however, details a lone woman in her flat with a small doll originating from an indigenous tribe. The doll is however possessed by the spirit of an ancient warrior and comes to life quick sharpish, terrorising our lead, relentlessly chasing and attacking her throughout her apartment.<br/><br/>There’s a certain generation of Americans who had their childhoods ruined by this one segment of a TV movie. A sequel, Trilogy of Terror 2, failed to recapture the bad time vibes so beautifully captured in the original."
);
new Movie(
  "Magic (1978)",
  "0100111000",
  "magic",
  "Academy Award winner Richard Attenborough directs Academy Award winner Anthony Hopkins in a script from Academy Award winner. Yes, somehow those three luminaries combined to make a killer puppet movie. Hopkins plays a ventriloquist whose act catapults him to the big time, right as his dummy’s persona starts to blend with his own.<br/><br/>Marketed as a “terrifying love story”, Magic had a TV spot featuring a close up on Fats the dummy’s face as he barked out a poem and rolled his eyes back into his head. The fact it was allowed onto television at all is remarkable and the internet is rife with viewers claiming it traumatised them as youngsters. Nice one!"
);
new Movie(
  "Tourist Trap (1979)",
  "1110111100",
  "touristtrap",
  "A low budget flick about teens who become trapped overnight at a roadside museum. Its eccentric proprietor is a handful, but it’s his too-large collection of mannequins, waxwork figures and all-things dummy that is the real concern.<br/><br/>Tourist Trap doesn’t waste any time getting to the good stuff, with our first doll attack coming out of nowhere just minutes into the running time. Noisy, claustrophobic and refusing to explain the horror our characters have to survive, the movie is notable for being a favourite of Stephen King who wrote about it in his 1981 manifesto on horror itself, Danse Macabre."
);
new Movie(
  "The Pit (1981)",
  "0011111100",
  "thepit",
  "An isolated kid finds a pit in the woods, full of tiny monsters. He decides to lure his enemies there and feed them to the monsters, as you do. If that wasn’t enough, he’s advised throughout by his only friend, a teddy bear imaginatively named Teddy who may or may not actually be alive…<br/><br/>Very odd, very Canadian and very close to being something great, The Pit is a curiosity for fans of the types of oddball films that seemingly don’t get made anymore."
);

new Movie(
  "Poltergeist (1982)",
  "0011101000",
  "poltergeist",
  "A family moves into a new house, but something else is already there. It messes with them, first by moving furniture around, before quickly progressing to making trees come to life and eat people; creating visions of flesh literally falling off; and repeatedly stealing the youngest daughter. And then there’s the creepy clown doll…<br/><br/>An incredibly famous and popular movie made possible through the odd couple pairing of mainstream box office overlord Steven Spielberg, and director of the visceral and overwhelming horror standout The Texas Chain Saw Massacre, Tobe Hooper."
);

new Movie(
  "Dolls (1987)",
  "1000111010",
  "dolls",
  "A collection of people caught by a thunderstorm in the British countryside take refuge in the home of a pair of dollmakers. With literally every single room containing piles of dolls, surely nothing weird or creepy will happen?<br/><br/>Very much a fairytale (complete with wicked stepmother character) Dolls is much funnier and whimsical than the memorable poster would have you think. Not to say there’s a lack of doll-on-human violence; there is, including against Bunty Bailey, best known as the girl in A-Ha’s iconic “Take On Me” music video."
);

new Movie(
  "Ghosthouse (1988)",
  "0011111101",
  "ghosthouse",
  "A group of people descend upon a lonely country house. Too bad they’re unaware of the history of murder and possession that has taken place within, nor why they’re frequently visited by a teleporting little girl and her clown doll.<br/><br/>Italian cinema in the 1980s mostly ripped off popular movies without shame, and Ghosthouse is no exception - its clown doll is a direct steal from box-office hit Poltergeist (1982). There’s a repeating musical motif that characters repeatedly refer to as a “nursery rhyme” or “lullaby”. It is neither. It is the weirdest thing ever heard."
);

new Movie(
  "Child's Play (1988)",
  "0000101000",
  "childsplay",
  "A young boy receives the hottest new toy for his birthday, the Good Guy doll. Is the fact that it was found outside a toy store that burnt down via lightning strike shortly after a serial killer was shot to death inside? Surely not.<br/><br/>The Citizen Kane of killer doll films, Child’s Play and more importantly Chucky are the cultural touchstone for killer toys. He’s pretty serious here but would get funnier in the sequels. If you start anywhere with the genre, start here."
);

new Movie(
  "Pin (1988)",
  "0100111001",
  "pin",
  "A repressed young man is taught by his equally repressed father about human anatomy through Pin, a life-size medical mannequin. When Pin starts to talk to the son, bad things happen.<br/><br/>Firmly in the dramatic end of the horror pool, Pin received incredibly good reviews upon release but remains an underseen movie. Notable in the cast list is Terry O’Quinn who’d go on to worldwide renown as John Locke in TV phenomenon Lost."
);

new Movie(
  "Puppet Master (1989)",
  "1110101101",
  "puppetmaster",
  "A group of variously-powered psychics are compelled to visit a colleague at his stately home, only to find him dead. What’s worse is that a group of puppets are running around killing people. One of them vomits leeches and the Nazis are involved, somehow.<br/><br/>Originally destined for a cinema release, Puppet Master instead went straight to video and was popular enough to launch an entire studio: Full Moon Entertainment. Producer Charles Band is famous for making movies with the ethos of “throw everything at the wall and see what sticks” and there’s certainly the case for Puppet Master. It currently has at least a dozen sequels and a remake. The first three and the remake are the “good” ones."
);

new Movie(
  "Dolly Dearest (1991)",
  "1000111101",
  "dollydearest",
  "A family moves to Mexico to take ownership of a doll factory. Too bad they didn’t view it first, especially as it’s on top of an ancient Mayan tomb containing a malevolent spirit that loves a good possession.<br/><br/>Dolly Dearest is a transparent attempt to cash-in on the popularity of Child’s Play (1988) but the titular doll is creepy enough. Star Denise Crosby had quit Star Trek: The Next Generation a few years earlier in the hopes of making the jump from TV to Hollywood stardom. Her appearance in Dolly Dearest tells you how well that went for her."
);

new Movie(
  "Demonic Toys (1992)",
  "1100101111",
  "demonictoys",
  "A cop chases a pair of arms dealers into a toy warehouse; as one lays dying, his blood reanimates an ancient demon who - what else? - possesses a number of nearby toys and attempts to entrap our cop in his deadly plot.<br/><br/>In the late 1980s, producer Charles Band encountered a heavy metal band named “Dangerous Toys”. Thinking it might be a marketable name for a movie, he commissioned poster art, which was then sent to young screenwriter and future Blade/Batman/Superman/Terminator scribe David S. Goyer, who knocked up a script in two weeks. The title changed to Demonic Toys when the band whose name inspired the whole project sent a cease-and-desist."
);

new Movie(
  "Tales from the Hood (1995)",
  "1011001000",
  "talesfromthehood",
  "An anthology of five horror tales, each taking inspiration from issues faced by African-American communities. One segment of note follows a racist US senator who sets up office on a former slave plantation, and the room full of dolls that legend tells are haunted by the spirits of slaves.<br/><br/>An energetic blend of horror, humour and social commentary, Tales from the Hood suffered a lack of exposure with all its physical media out of print for decades but survived through strong audience word-of-mouth online, and cable TV exposure. A blu-ray release arrived in 2015, with reception strong enough to result in a pair of sequels made in 2018 and 2020."
);

new Movie(
  "Pinocchio's Revenge (1996)",
  "0110111101",
  "pinocchiosrevenge",
  "A lawyer takes home a piece of evidence in a murder trial: a large wooden Pinocchio puppet found buried next to a body. Her daughter becomes attached to the doll, but when bad things start to happen - including murder - the youngster blames Pinocchio.<br/><br/>The original screenplay for killer doll magnum opus Child’s Play (1988) featured a degree of ambiguity as to whether murders were being committed by the doll or the prepubescent protagonist. While this angle was nixed in favour of giving Chucky a personality, the concept is picked up by Pinocchio’s Revenge."
);

new Movie(
  "Bride of Chucky (1998)",
  "1000101110",
  "brideofchucky",
  "The world’s most famous killer doll is brought back to life by an ex-girlfriend. It’s not long before Chucky turns her into a doll too, and the pair begin a cross-country spree of murder, pinning the blame on a young couple.<br/><br/>Made in the post-Scream (1996) phase of self-aware, ironic horror, Bride of Chucky is a sharp and zippy road movie with a real visual flair provided by director Ronny Yu, at that point most famous for his Hong Kong martial arts movies. Taking the female lead is a young Katherine Heigl, long before her ascension into Hollywood’s A-list."
);

new Movie(
  "The Conjuring (2013)",
  "0011101000",
  "theconjuring",
  "A pair of demonologists investigate a house supposedly haunted by a witch keen to possess its inhabitants, but not before they spend some time with a (frankly horrifying) doll that somehow always returns after being thrown out.<br/><br/>A mega hit upon release, The Conjuring has spawned not just its own sequels but two concurrent spin off series’: The Nun, and the Annabelle series, focussing squarely on the doll featured in The Conjuring’s opening scenes."
);

new Movie(
  "Goosebumps (2015)",
  "0101101010",
  "goosebumps",
  "Gasp! The creatures in R.L. Stine’s Goosebumps books, beloved by 90s kids, are real! Shock! The new kid in town has accidentally released them from their leather-bound prisons! Gulp! They’re lead by Slappy, a living ventriloquist’s dummy with a nasty mouth on him!<br/><br/>The book series had dozens of entries but a grand total of two setups: kid moves to new town, and kid is left alone without parental supervision. The movie is smart enough to combine the two and act as a “greatest hits” platform for the novels’ fan favourite characters, of whom Slappy the dummy is squarely at the very top end."
);

stringCompare();

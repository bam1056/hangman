'use strict'

let string = 'Adult,Air,Aircraft,Airport,Album,Alphabet,Apple,Arm,Army,Baby,Baby,Backpack,Balloon,Banana,Bank,Barbecue,Bathroom,Bathtub,Bed,Bed,Bee,Bible,Bible,Bird,Bomb,Book,Boss,Bottle,Bowl,Box,Boy,Brain,Bridge,Butterfly,Button,Cappuccino,Car,Carpet,Carrot,Cave,Chair,Chief,Child,Chisel,Chocolates,Church,Church,Circle,Circus,Circus,Clock,Clown,Coffee,Coffeeshop,Comet,Compass,Computer,Crystal,Cup,Cycle,Data,Desk,Diamond,Dress,Drill,Drink,Drum,Dung,Ears,Earth,Egg,Electricity,Elephant,Eraser,Explosive,Eyes,Family,Fan,Feather,Festival,Film,Finger,Fire,Floodlight,Flower,Foot,Fork,Freeway,Fruit,Fungus,Game,Garden,Gas,Gate,Gemstone,Girl,Gloves,God,Grapes,Guitar,Hammer,Hat,Hieroglyph,Highway,Horoscope,Horse,Hose,Ice,Insect,Junk,Kaleidoscope,Kitchen,Knife,Leather,Leg,Library,Liquid,Magnet,Man,Map,Maze,Meat,Meteor,Microscope,Milk,Milkshake,Mist,Money,Monster,Mosquito,Mouth,Nail,Navy,Necklace,Needle,Onion,PaintBrush,Pants,Parachute,Passport,Pebble,Pendulum,Pepper,Perfume,Pillow,Plane,Planet,Pocket,Post,Potato,Printer,Prison,Pyramid,Radar,Rainbow,Record,Restaurant,Rifle,Ring,Robot,Rock,Rocket,Roof,Room,Rope,Saddle,Salt,Sandpaper,Sandwich,Satellite,School,Sex,Ship,Shoes,Shop,Shower,Signature,Skeleton,Slave,Snail,Software,Solid,Space,Shuttle,Spectrum,Sphere,Spice,Spiral,Spoon,Sports,Square,Staircase,Star,Stomach,Sun,Sunglasses,Surveyor,Swimming,Sword,Table,Tapestry,Teeth,Telescope,Television,Tennis,Thermometer,Tiger,Toilet,Tongue,Torch,Torpedo,Train,Treadmill,Triangle,Tunnel,Typewriter,Umbrella,Vacuum,Vampire,Videotape,Vulture,Water,Weapon,Web,Wheelchair,Window,Woman,Worm'

let wordArray = string.split(',')

let upperCaseArray = wordArray.map((x) => x.toUpperCase())

console.log(upperCaseArray)

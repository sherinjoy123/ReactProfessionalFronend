import tanjiro from "../assets/images/tanjiro2.png";
import nezuko from "../assets/images/nezuko.png";
import zenitsu from "../assets/images/zenitusu.png";
import inosuke from "../assets/images/Inosuke.png";

import waterBreath from "../assets/videos/water.mp4"
import Blood from "../assets/videos/nazukos.mp4"
import thunder from "../assets/videos/zentisu.mp4"
import beast from"../assets/videos/inosuke.mp4"

const characters = [
  {
    id: 1,
    name: "Tanjiro Kamado",
    age: 15,
    height: "165 cm",
    rank: "Demon Slayer",
    breathing: "Water Breathing",
    weapon: "Nichirin Sword",
    image: tanjiro,
    backgroundVideo:waterBreath,
    strength: 90,
    speed: 85,
    intelligence: 88,
    stamina: 95,
    color: "rgba(0,180,255,.6)",
    skills: [
      {
        icon: "🌊",
        name: "Water Surface Slash",
      },
      {
        icon: "🌀",
        name: "Water Wheel",
      },
      {
        icon: "🐉",
        name: "Dragon of Change",
      },
      {
        icon: "💧",
        name: "Constant Flux",
      },
    ],
    description:
      "Tanjiro is kind-hearted and determined. He fights to protect humanity and save his sister Nezuko.",
  },
  {
    id: 2,
    name: "Nezuko Kamado",
    age: 14,
    height: "153 cm",
    rank: "Demon",
    backgroundVideo:Blood,
    breathing: "Blood Demon Art",
    weapon: "None",
    strength: 95,
    speed: 90,
    intelligence: 72,
    stamina: 100,
    image: nezuko,
    color: "#ff4da6",
    skills: [
      {
        icon: "🔥",
        name: "Exploding Blood",
      },
      {
        icon: "👹",
        name: "Demon Form",
      },
      {
        icon: "❤️",
        name: "Rapid Regeneration",
      },
      {
        icon: "🩸",
        name: "Blood Demon Art",
      },
    ],
    description:
      "Nezuko is Tanjiro's younger sister who became a demon while still protecting humans.",
  },
  {
    id: 3,
    name: "Zenitsu Agatsuma",
    age: 16,
    height: "164 cm",
    rank: "Demon Slayer",
    breathing: "Thunder Breathing",
    weapon: "Nichirin Sword",
    backgroundVideo:thunder,
    image: zenitsu,
    strength: 88,
    speed: 99,
    intelligence: 80,
    stamina: 84,

    color: "#ffd700",
    skills: [
      {
        icon: "⚡",
        name: "Thunderclap & Flash",
      },
      {
        icon: "⚡",
        name: "Sixfold",
      },
      {
        icon: "⚡",
        name: "Godspeed",
      },
      {
        icon: "🌩",
        name: "First Form",
      },
    ],
    description:
      "Zenitsu appears fearful but becomes incredibly powerful while asleep.",
  },
  {
    id: 4,
    name: "Inosuke Hashibira",
    age: 15,
    height: "164 cm",
    rank: "Demon Slayer",
    breathing: "Beast Breathing",
    weapon: "Dual Nichirin Swords",
    image: inosuke,
    backgroundVideo:beast,
    strength: 88,
    speed: 99,
    intelligence: 80,
    stamina: 84,

    color: "#66ffcc",
    skills: [
      {
        icon: "🐗",
        name: "Beast Breathing",
      },
      {
        icon: "💨",
        name: "Spatial Awareness",
      },
      {
        icon: "⚔",
        name: "Crazy Cutting",
      },
      {
        icon: "🌪",
        name: "Devour",
      },
    ],
    description:
      "Raised in the mountains, Inosuke uses his unique Beast Breathing style in battle.",
  },
];

export default characters;
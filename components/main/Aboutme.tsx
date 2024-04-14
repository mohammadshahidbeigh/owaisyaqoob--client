import React from "react";
import AcademyCard from "../sub/AboutmeText";
import AcademyCardImg from "../sub/AboutmeDataProvider";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="about-me"
    >
      <h1 className="text-3xl md:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
        About Me
      </h1>
      <div className="h-half w-half flex flex-col md:flex-col gap-10 px-10 py-10">
        <AcademyCard
          src="/"
          title="Forging the Path: From Thang Ta to Best Fighter"
          description="
          I embarked on my Martial Arts journey in December 2012, initially focusing on disciplines such as Thang Ta martial art and Taekwondo. I underwent rigorous training in these sports, eventually participating in national competitions and securing the title of 12 times national gold medalist, spanning across various sports. I also earned two silver medals. Notably, in 2018, during a competition encompassing 28 states in India (Delhi, Agra), I was honored with the Best Fighter award.
          
          Subsequently, I explored Combat Sports and tried my hand at Kickboxing. However, it became evident to me that MMA was the ultimate sport, encompassing a comprehensive skill set involving kickboxing, grappling, striking, and everything in between. In 2017, my interest in Mixed Martial Arts - MMA sparked, leading me to officially start my MMA journey. Following this decision, I completed my first 6-month course and embarked on a journey across different locations in India for 2 to 3 months at a time, joining training camps in places like Chandigarh and Manipur."
        />

        {/* <AcademyCardImg
          src="/GymWebsite.png"
          title="Modern Gym Portfolio"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempor incididunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempor."
        /> */}
        <AcademyCard
          src="/GymWebsite.png"
          title="Triumphs in the Cage: Conquering 21 Fights and Dagestan"
          description="In 2019, I delved into immature MMA fight competitions, triumphing in 21 fights by 2021. This success paved the way for a remarkable opportunity – the Matrix Fight Night (MFN) Contender Series. During a single night, I participated in and won five fights, earning a spot in the Matrix Fight Night Professional, where I had the privilege to showcase my skills.

          Furthering my training, I ventured to the Soma Fight Club in Indonesia for an extensive training camp. There, I honed my skills in Striking, wrestling, Muay Thai, and grappling. Later, I traveled to Dagestan for a two-month training stint, an experience that included training alongside World Champion Khabib Nurmagomedov and Pound for Pound NO.1 World Champion Islam Makhachev.
          
          This journey reflects my dedication to mastering the diverse facets of martial arts, and I am excited to continue pushing my limits and achieving new heights in the world of Mixed Martial Arts."
        />
        <AcademyCard
          src="/GymWebsite.png"
          title="Road to the UFC: The Ultimate Destination"
          description="As I recount this journey, it underscores my unwavering dedication to mastering the multifaceted world of martial arts. With each challenge embraced and every milestone achieved, I am fueled by the passion to continue pushing my limits. With my eyes set on the future, the ultimate destination looms large – the road to the Ultimate Fighting Championship. Excitement courses through my veins as I anticipate the challenges and triumphs that lie ahead, eager to etch my name in the annals of the UFC and achieve new heights in the dynamic world of Mixed Martial Arts."
        />
        {/* <AcademyCardImg
          src="/GymWebsite.png"
          title="Modern Gym Portfolio"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempor incididunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
        /> */}
      </div>
    </div>
  );
};

export default Projects;

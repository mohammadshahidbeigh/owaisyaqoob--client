import React from "react";
import AcademyCard from "../sub/AcademyCard";

const Projects = () => {
  return (
    <div className="relative">
      <div
        className="flex flex-col items-center justify-center  py-20 sticky top-0 ml-3 "
        id="academy"
        style={{ background: "#030014" }}
      >
        <h1 className="text-xl md:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 border-b-8 border-purple-500">
          Lions Den Martial Arts Academy
        </h1>
      </div>

      <div className="h-half w-half flex flex-col md:flex-col gap-10 px-10 py-20">
        <AcademyCard
          src="/gymicons.png"
          title="For Beginners"
          description="Perfect for those who are new to martial arts. This program is designed to help beginners learn the fundamental techniques, build a strong foundation, and embark on their martial arts journey with confidence."
          pricing="Pricing: ₹1,000"
        />
        <AcademyCard
          src="/gymicons.png"
          title="Two Days a Week"
          description="For those who can't commit full-time, our 'Two Days a Week' program allows you to join us for two days a week over four weeks. It's an ideal option for individuals with busy schedules who still want to experience the benefits of martial arts training."
          pricing="Pricing: ₹1,200"
        />
        <AcademyCard
          src="/gymicons.png"
          title="3-Month Crash Course"
          description="Join our intensive 3-month crash course to master the fundamentals and basics of martial arts. This program is designed for individuals who are eager to accelerate their learning and gain a comprehensive understanding of martial arts principles."
          pricing="Pricing: ₹10,000"
        />
        <AcademyCard
          src="/gymicons.png"
          title="Aspiring Fighters"
          description="If you aspire to become a professional fighter, this program is tailored for you. Receive specialized training to enhance your skills, refine techniques, and prepare for competitive martial arts. Unlock your full potential as an aspiring fighter."
          pricing="Pricing: ₹1,500"
        />
        <AcademyCard
          src="/gymicons.png"
          title="Personal Training"
          description="Get personalized, one-on-one training with our experienced instructors. Whether your goal is to achieve specific fitness milestones or master advanced martial arts techniques, our personal training program is customized to meet your individual needs."
          pricing="Pricing: ₹2,000"
        />
        <AcademyCard
          src="/gymicons.png"
          title="Fitness & Self-Defense"
          description="Focus on fitness and self-defense skills with our specialized program suitable for all fitness levels. Improve your overall health, boost your confidence, and learn essential self-defense techniques to stay safe in any situation."
          pricing="Pricing: ₹1,000"
        />
        <AcademyCard
          src="/gymicons.png"
          title="Training with Head Coach"
          description="Train directly with our head coach, Owais Yaqoob, a seasoned martial artist with a wealth of experience. Receive expert guidance, personalized coaching, and valuable insights to take your martial arts journey to the next level."
          pricing="Pricing: ₹2,500"
        />
        <AcademyCard
          src="/gymicons.png"
          title="Weight or Fat-Cut Program"
          description="Explore our customized programs designed to help you achieve your weight or fat-cutting goals. Tailored nutrition plans and targeted workout routines will assist you on your journey to a healthier and more active lifestyle. Contact us for personalized pricing details."
          pricing="Pricing: ₹2,000"
        />
      </div>
    </div>
  );
};

export default Projects;

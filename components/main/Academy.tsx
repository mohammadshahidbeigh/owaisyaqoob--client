// components/main/Projects.tsx
"use client";

import React, { useState } from "react";
import AcademyCard from "../sub/AcademyCard";

type DescriptionKeys =
  | "For Beginners"
  | "Two Days a Week"
  | "3-Month Crash Course"
  | "Aspiring Fighters"
  | "Personal Training"
  | "Fitness & Self-Defense"
  | "Training with Head Coach"
  | "Weight or Fat-Cut Program";

const Projects = () => {
  const [expandedCard, setExpandedCard] = useState<DescriptionKeys | null>(
    null
  );

  const handleToggleExpand = (title: DescriptionKeys) => {
    setExpandedCard(expandedCard === title ? null : title);
  };

  const descriptions: Record<DescriptionKeys, string> = {
    "For Beginners":
      "Perfect for those who are new to martial arts. This program is designed to help beginners learn the fundamental techniques, build a strong foundation, and embark on their martial arts journey with confidence. This program includes basic martial arts techniques such as punches, kicks, and basic self-defense. It focuses on building strength, flexibility, and coordination. Our expert instructors ensure that you develop the right techniques from the start, providing personalized feedback and support to help you progress effectively. Additionally, the program includes introductory lessons on martial arts philosophy and history, ensuring a well-rounded understanding of the discipline. Students will engage in partner drills, individual practice, and group exercises, creating a supportive and motivating environment for all participants.",
    "Two Days a Week":
      "For those who can't commit full-time, our 'Two Days a Week' program allows you to join us for two days a week over four weeks. It's an ideal option for individuals with busy schedules who still want to experience the benefits of martial arts training. This program offers flexibility for busy individuals. Classes include a mix of strength training, cardio, and martial arts skills to keep you fit and engaged. Each session is designed to maximize your training time, ensuring you get a comprehensive workout that fits your lifestyle. The program also includes personalized fitness assessments to track your progress and adjust the training intensity accordingly. Participants will receive tailored advice on maintaining fitness outside of class, including home workouts and nutritional tips to support their martial arts journey.",
    "3-Month Crash Course":
      "Join our intensive 3-month crash course to master the fundamentals and basics of martial arts. This program is designed for individuals who are eager to accelerate their learning and gain a comprehensive understanding of martial arts principles. An intensive program that covers fundamental martial arts techniques, sparring, and advanced self-defense tactics. Ideal for fast learners. The course includes detailed instructions on various techniques, hands-on sparring sessions, and personalized coaching to help you achieve rapid progress. Participants will also have access to exclusive workshops and seminars with guest instructors, offering insights into advanced strategies and specialized skills. Regular performance evaluations ensure that each student receives feedback and guidance on their strengths and areas for improvement.",
    "Aspiring Fighters":
      "If you aspire to become a professional fighter, this program is tailored for you. Receive specialized training to enhance your skills, refine techniques, and prepare for competitive martial arts. Unlock your full potential as an aspiring fighter. Tailored training for aspiring fighters, including advanced techniques, fight strategies, and conditioning. Perfect for those aiming to compete professionally. Our training regimen includes rigorous physical conditioning, strategic fight planning, and mental preparation to ensure you are ready for the ring. The program covers advanced striking, grappling, and submission techniques, with an emphasis on real-world application and competition scenarios. Participants will engage in mock competitions and sparring matches to hone their skills and gain practical experience. Besides, the program includes sessions on sports psychology, nutrition, and injury prevention to support holistic fighter development.",
    "Personal Training":
      "Get personalized, one-on-one training with our experienced instructors. Whether your goal is to achieve specific fitness milestones or master advanced martial arts techniques, our personal training program is customized to meet your individual needs. Customized one-on-one sessions focusing on specific goals, whether it's improving fitness, learning advanced techniques, or preparing for competitions. Our trainers provide undivided attention, developing a personalized plan that targets your unique goals and challenges. Each session is tailored to your pace and skill level, ensuring optimal progress and enjoyment. In addition to physical training, the program includes personalized advice on diet, lifestyle changes, and mental conditioning to support your overall well-being. Regular assessments and feedback sessions ensure that your training remains aligned with your evolving goals.",
    "Fitness & Self-Defense":
      "Focus on fitness and self-defense skills with our specialized program suitable for all fitness levels. Improve your overall health, boost your confidence, and learn essential self-defense techniques to stay safe in any situation. Combines fitness routines with self-defense techniques. Great for improving overall fitness while learning how to protect yourself. The program includes high-intensity workouts, practical self-defense drills, and strategies to improve your reaction times and situational awareness. Participants will learn to defend against various threats, including strikes, grabs, and weapons, using practical and effective techniques. The program also emphasizes the importance of situational awareness, conflict avoidance, and de-escalation tactics. Regular fitness assessments and progress tracking ensure that participants stay motivated and achieve their fitness goals while gaining valuable self-defense skills.",
    "Training with Head Coach":
      "Train directly with our head coach, Owais Yaqoob, a seasoned martial artist with a wealth of experience. Receive expert guidance, personalized coaching, and valuable insights to take your martial arts journey to the next level. Get personalized coaching from our head coach, Owais Yaqoob. Focus on technique refinement, fight strategies, and advanced training. Benefit from Coach Owais's extensive experience and tailored feedback to refine your skills and improve your performance in a focused training environment. The program includes advanced drills, sparring sessions, and strategic planning tailored to your specific needs and goals. Participants will receive in-depth analysis of their techniques and performance, with actionable feedback to accelerate improvement. Additionally, the program offers exclusive access to high-level training resources and networking opportunities within the martial arts community.",
    "Weight or Fat-Cut Program":
      "Explore our customized programs designed to help you achieve your weight or fat-cutting goals. Tailored nutrition plans and targeted workout routines will assist you on your journey to a healthier and more active lifestyle. Custom nutrition and workout plans aimed at helping you achieve your weight or fat-cutting goals. Includes dietary guidance and tailored exercises. Our comprehensive approach includes meal planning, regular progress tracking, and motivational support to help you achieve sustainable results. The program is designed to fit your lifestyle and preferences, ensuring that you can maintain your new habits long-term. Participants will receive personalized coaching on proper nutrition, portion control, and effective workout techniques. Regular check-ins and adjustments ensure that your plan evolves with your progress, keeping you on track to meet your goals.",
  };

  const pricing: Record<DescriptionKeys, number> = {
    "For Beginners": 1,
    "Two Days a Week": 1200,
    "3-Month Crash Course": 10000,
    "Aspiring Fighters": 1500,
    "Personal Training": 2000,
    "Fitness & Self-Defense": 1000,
    "Training with Head Coach": 2500,
    "Weight or Fat-Cut Program": 2000,
  };

  const handlePayment = async (title: DescriptionKeys) => {
    try {
      console.log("Starting payment process for:", title);

      // Use the numeric value directly
      const amountInRupees = pricing[title];
      const amountInPaise = amountInRupees;
      console.log(
        `Amount in Rupees: ${amountInRupees}, Amount in Paise: ${amountInPaise}`
      );

      const response = await fetch("/api/create-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: amountInPaise,
        }), // Amount in paise
      });

      if (!response.ok) {
        console.error("Failed to create order", await response.text());
        return;
      }

      const orderData = await response.json();
      console.log("Order data received:", orderData);

      const options = {
        key: "rzp_live_vdK7EWhohq7pdQ",
        amount: orderData.amount,
        currency: "INR",
        name: "Academy",
        description: `Payment for ${title}`,
        order_id: orderData.id,
        handler: function (response: any) {
          alert(
            `Payment successful! Payment ID: ${response.razorpay_payment_id}`
          );
        },
        prefill: {
          name: "Mohammad Shahid Beigh",
          email: "mohammadshahidbeigh@gmail.com",
          contact: "6006684827",
        },
        notes: {
          address: "Corporate Office",
        },
        theme: {
          color: "#3399cc",
        },
      };

      const rzp1 = new (window as any).Razorpay(options);
      rzp1.open();
    } catch (error) {
      console.error("Error during payment", error);
    }
  };

  return (
    <div className="relative">
      <div
        className="flex flex-col items-center justify-center py-20 sticky top-0"
        id="academy"
        style={{ background: "#030014" }}
      >
        <h1 className="text-xl md:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 border-b-8 border-purple-500">
          Lions Den Martial Arts Academy
        </h1>
      </div>

      <div className="h-half w-half flex flex-col md:flex-col gap-10 px-10 py-20">
        {Object.keys(descriptions).map((title) => (
          <div key={title} className="p-0 rounded-lg ">
            <AcademyCard
              src="/gymicons.png"
              title={title as DescriptionKeys}
              description={descriptions[title as DescriptionKeys]}
              pricing={pricing[title as DescriptionKeys]}
              onToggleExpand={() =>
                handleToggleExpand(title as DescriptionKeys)
              }
              isExpanded={expandedCard === title}
              onPayment={() => handlePayment(title as DescriptionKeys)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

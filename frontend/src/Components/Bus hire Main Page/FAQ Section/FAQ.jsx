import React from "react";
import { RiArrowDropUpLine } from "react-icons/ri";
import Styles from "./FAQ.module.css";

const faqData = [
  {
    question: "What is redBus Hire?",
    answer:
      "redBus Hire helps you rent a vehicle from the best operators in your city.",
  },
  {
    question: "How does it work?",
    answer:
      "We ask you a few simple questions and connect you with the best operators for quotations.",
  },
  {
    question: "Which cities are you operational in?",
    answer:
      "We are operational in major cities like Mumbai, Pune, Bangalore, Delhi, Chennai, etc.",
  },
  {
    question: "What happens if the vehicle breaks down?",
    answer:
      "The operator will replace the vehicle during the journey.",
  },
  {
    question: "How are the Kilometers calculated?",
    answer:
      "Distance includes return trip and additional garage-to-pickup distance.",
  },
  {
    question: "What are the payment terms?",
    answer:
      "25% advance booking and remaining before or during the journey.",
  },
  {
    question: "What if I need to cancel my trip?",
    answer:
      "Cancellation depends on operator policy shown during booking.",
  },
  {
    question: "How are toll & taxes calculated?",
    answer:
      "Tolls are estimated and adjusted based on actuals.",
  },
  {
    question: "What are the benefits of booking with redBus?",
    answer:
      "Multiple options, comfort, and trusted operators.",
  },
  {
    question: "What are the COVID-19 measures?",
    answer:
      "Safety+ guidelines include masks, sanitizers, and temperature checks.",
  },
  {
    question: "Customer care availability?",
    answer:
      "24/7 support available.",
  },
  {
    question: "Are blankets provided?",
    answer:
      "Not currently due to Safety+ guidelines.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = React.useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={Styles.faqDivContainer}>
      <h2 className={Styles.bookInEasySteps_heading}>FAQs</h2>

      {faqData.map((item, index) => (
        <div key={index}>
          
          <div
            className={Styles.faqsEachDiv}
            onClick={() => toggleFAQ(index)}
          >
            <div className={Styles.faqDivText}>{item.question}</div>

            {activeIndex === index ? (
              <RiArrowDropUpLine className={Styles.icon} />
            ) : (
              <img
                src="https://www.redbus.in/bushire/static/mwebv2/home/ic-arrow-down-color.svg"
                alt="arrow"
                className={Styles.icon}
              />
            )}
          </div>

          {activeIndex === index && (
            <div className={Styles.faqsEachAnswerDiv}>
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
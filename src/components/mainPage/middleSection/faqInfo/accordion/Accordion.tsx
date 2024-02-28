import { forwardRef } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import classNames from "classnames";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import "./Accordion.scss";

// const accordionData = [
//   {
//     id: "item-1",
//     question: "Is it accessible?",
//     answer: "Yes. It adheres to the WAI-ARIA design pattern."
//   },
//   {
//     id: "item-2",
//     question: "Is it unstyled?",
//     answer: "Yes. It's unstyled by default, giving you freedom over the look and feel."
//   },
//   {
//     id: "item-3",
//     question: "Can it be animated?",
//     answer: "Yes! You can animate the Accordion with CSS or JavaScript."
//   }
// ];

type AccordionItem = {
  id: string;
  question: string;
  answer: string;
};

type AccordionProps = {
  accordionData: AccordionItem[];
};

const AccordionDemo = ({ accordionData }: AccordionProps) => (
  <Accordion.Root
    className="AccordionRoot"
    type="single"
    defaultValue="item-1"
    collapsible
  >
    {accordionData.map(({ id, question, answer }) => (
      <Accordion.Item key={id} className="AccordionItem" value={id}>
        <AccordionTrigger>{question}</AccordionTrigger>
        <AccordionContent>{answer}</AccordionContent>
      </Accordion.Item>
    ))}
  </Accordion.Root>
);

const AccordionTrigger = forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Header className="AccordionHeader">
      <Accordion.Trigger
        className={classNames("AccordionTrigger", className)}
        {...props}
        ref={forwardedRef}
      >
        {children}
        <ChevronDownIcon className="AccordionChevron" aria-hidden />
      </Accordion.Trigger>
    </Accordion.Header>
  )
);

const AccordionContent = forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Content
      className={classNames("AccordionContent", className)}
      {...props}
      ref={forwardedRef}
    >
      <div className="AccordionContentText">{children}</div>
    </Accordion.Content>
  )
);

export default AccordionDemo;

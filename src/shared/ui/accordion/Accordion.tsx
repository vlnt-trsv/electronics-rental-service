import { forwardRef } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import classNames from "classnames";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import "./Accordion.scss";
import { cn } from "@/shared/lib/utils";

// Определите пропсы для AccordionDemo
const AccordionDemo = ({ items }) => (
  <Accordion.Root
    className="AccordionRoot"
    type="single"
    defaultValue="item-1"
    collapsible
  >
    {items.map((item, index) => (
      <Accordion.Item
        key={`item-${index + 1}`}
        className="AccordionItem"
        value={`item-${index + 1}`}
      >
        <AccordionTrigger>{item.question}</AccordionTrigger>
        <AccordionContent>{item.answer}</AccordionContent>
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

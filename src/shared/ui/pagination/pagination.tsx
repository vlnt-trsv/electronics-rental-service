import * as React from "react";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";
import styles from "./pagination.module.scss";
import { cn } from "@/shared/lib/utils";
import { ButtonProps, buttonVariants } from "@/shared/ui/button/button";
import { useWindowResize } from "@/shared/lib";

const Pagination = ({ className, ...props }: React.ComponentProps<"nav">) => {
  return (
    <nav
      role="navigation"
      aria-label="pagination"
      className={cn(styles.pagination, className)}
      {...props}
    ></nav>
  );
};
Pagination.displayName = "Pagination";

const PaginationContent = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<"ul">
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn(styles.pagination__content, className)}
    {...props}
  />
));
PaginationContent.displayName = "PaginationContent";

const PaginationItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<"li">
>(({ className, ...props }, ref) => (
  <li ref={ref} className={cn(styles.pagination__item, className)} {...props} />
));
PaginationItem.displayName = "PaginationItem";

type PaginationLinkProps = {
  isActive?: boolean;
  disabled?: boolean;
} & Pick<ButtonProps, "size"> &
  React.ComponentProps<"a">;

const PaginationLink = ({
  className,
  isActive,
  size = "default",
  disabled,
  ...props
}: PaginationLinkProps) => (
  <a
    aria-current={isActive ? "page" : undefined}
    className={cn(
      styles.pagination__link,
      buttonVariants({
        variant: isActive ? "default" : "ghost",
        size,
      }),
      className,
      { [styles.pagination__link_disabled]: disabled }
    )}
    {...props}
  />
);

PaginationLink.displayName = "PaginationLink";

const PaginationPrevious = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => {
  const windowWidth = useWindowResize();

  return (
    <PaginationLink
      aria-label="Go to previous page"
      size="default"
      className={cn(styles.pagination__previous, className)}
      {...props}
    >
      <ChevronLeft className="h-4 w-4" style={{ color: "#ffffff" }} />
      {windowWidth > 768 && (
        <span style={{ color: "#ffffff" }}>Предыдущая</span>
      )}
    </PaginationLink>
  );
};
PaginationPrevious.displayName = "PaginationPrevious";

const PaginationNext = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => {
  const windowWidth = useWindowResize();

  return (
    <PaginationLink
      aria-label="Go to next page"
      size="default"
      className={cn(styles.pagination__next, className)}
      {...props}
    >
      {windowWidth > 768 && <span style={{ color: "#ffffff" }}>Следующая</span>}
      <ChevronRight className="h-4 w-4" style={{ color: "#ffffff" }} />
    </PaginationLink>
  );
};
PaginationNext.displayName = "PaginationNext";

const PaginationEllipsis = ({
  className,
  ...props
}: React.ComponentProps<"span">) => (
  <span
    aria-hidden
    className={cn(styles.pagination__ellipsis, className)}
    {...props}
  >
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More pages</span>
  </span>
);
PaginationEllipsis.displayName = "PaginationEllipsis";

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
};

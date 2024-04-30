import React from "react";
import {
  Pagination as BasePagination,
  PaginationContent as BasePaginationContent,
  PaginationItem as BasePaginationItem,
  PaginationLink as BasePaginationLink,
  PaginationNext as BasePaginationNext,
  PaginationPrevious as BasePaginationPrevious,
} from "@/shared/ui/pagination/pagination";

interface PaymentsProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Payments: React.FC<PaymentsProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  return (
    <BasePagination>
      <BasePaginationContent>
        <BasePaginationItem>
          <BasePaginationPrevious
            href="#"
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
          />
        </BasePaginationItem>
        {Array.from({ length: totalPages }, (_, index) => (
          <BasePaginationItem key={index}>
            <BasePaginationLink
              href="#"
              isActive={index + 1 === currentPage}
              onClick={() => onPageChange(index + 1)}
            >
              {index + 1}
            </BasePaginationLink>
          </BasePaginationItem>
        ))}
        <BasePaginationItem>
          <BasePaginationNext
            href="#"
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          />
        </BasePaginationItem>
      </BasePaginationContent>
    </BasePagination>
  );
};

export default Payments;

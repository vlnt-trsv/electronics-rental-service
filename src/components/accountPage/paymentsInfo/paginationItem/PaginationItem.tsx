// Pagination.tsx
import {
  Pagination as BasePagination,
  PaginationContent as BasePaginationContent,
  PaginationEllipsis as BasePaginationEllipsis,
  PaginationItem as BasePaginationItem,
  PaginationLink as BasePaginationLink,
  PaginationNext as BasePaginationNext,
  PaginationPrevious as BasePaginationPrevious,
} from "@/shared/ui/pagination/pagination";

type PaginationProps = {
  totalPages: number;
  currentPage: number;
  onPageChange: (newPage: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
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
        {Array.from({ length: totalPages }).map((_, index) => (
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

export default Pagination;

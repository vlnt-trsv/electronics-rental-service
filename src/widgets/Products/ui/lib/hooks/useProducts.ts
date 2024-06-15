import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGetProductsQuery } from "@/shared/api/api";
import { getImageUrl } from "@/shared/lib";

export function useProducts() {
  const navigate = useNavigate();
  const category = JSON.parse(localStorage.getItem("selectedCategory") || "{}");
  const {
    data: products,
    isError,
    isLoading,
  } = useGetProductsQuery(category._id);

  const [selectedOption, setSelectedOption] = useState(
    JSON.parse(localStorage.getItem("selectedSubscriptionOption") || "{}")
  );

  const product = JSON.parse(localStorage.getItem("selectedProduct") || "{}");
  const handleProductClick = (product: any) => {
    localStorage.setItem("selectedProduct", JSON.stringify({ ...product }));
    navigate(`${product?._id}`);
  };

  const handleOptionSelect = (option: any) => {
    setSelectedOption(option);
    localStorage.setItem(
      "selectedSubscriptionOption",
      JSON.stringify({ ...option })
    );
  };

  return {
    products,
    product,
    category,
    isError,
    isLoading,
    handleProductClick,
    handleOptionSelect,
    selectedOption,
    getImageUrl,
  };
}

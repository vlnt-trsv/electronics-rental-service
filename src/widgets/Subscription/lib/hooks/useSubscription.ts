import { useState, useEffect } from "react";
import { useGetRentalQuery } from "@/shared/api/api";
import Cookies from "js-cookie";

export function useSubscriptions() {
  const [selectedFilter, setSelectedFilter] = useState("Все");
  const [areSubscriptionsAvailable, setAreSubscriptionsAvailable] =
    useState(false);
  const [statuses, setStatuses] = useState([]);

  const userId = JSON.parse(Cookies.get("connect.user") || "{}");
  const {
    data: rentalData,
    isFetching,
    isError,
    isLoading,
  } = useGetRentalQuery(userId._id);

  useEffect(() => {
    // const rental = rentalData || JSON.parse(localStorage.getItem("subs") || "{}");
    if (rentalData?.rentals?.length > 0) {
      setAreSubscriptionsAvailable(true);
      const uniqueStatuses: any = Array.from(
        new Set(rentalData.rentals.map((r: { status: string }) => r.status))
      );
      setStatuses(uniqueStatuses);
    } else {
      setAreSubscriptionsAvailable(false);
    }
  }, [rentalData]);

  // useEffect(() => {
  //   localStorage.setItem("subs", JSON.stringify(rentalData));
  // }, [rentalData]);

  const getButtonVariant = (status: string) => {
    if (!areSubscriptionsAvailable) return "disabled";
    if (status === "default disabled") return "disabled";
    return selectedFilter === status ? "primary" : "default";
  };

  const handleFilterChange = (status: string) => {
    setSelectedFilter(status);
    // localStorage.setItem("selectedFilter", JSON.stringify(status));
  };

  const hasSubscriptions = rentalData && rentalData?.count > 0;

  return {
    rentalData,
    statuses,
    selectedFilter,
    isFetching,
    isError,
    isLoading,
    hasSubscriptions,
    getButtonVariant,
    handleFilterChange,
  };
}

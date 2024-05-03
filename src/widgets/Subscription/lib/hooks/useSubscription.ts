import { useState, useLayoutEffect, SetStateAction } from "react";
import { useGetRentalQuery } from "@/shared/api/api";
import Cookies from "js-cookie";

export function useSubscriptions() {
  const [subs, setSubs] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("Все");
  const [areSubscriptionsAvailable, setAreSubscriptionsAvailable] =
    useState(false);
  const [statuses, setStatuses] = useState([]);

  const userId = JSON.parse(Cookies.get("connect.user") || "{}");
  const {
    data: rental,
    isFetching,
    isError,
    isLoading,
  } = useGetRentalQuery(userId._id, {
    pollingInterval: 5000,
  });

  useLayoutEffect(() => {
    if (rental?.rentals?.length > 0) {
      setAreSubscriptionsAvailable(true);
      const uniqueStatuses = Array.from(
        new Set(rental.rentals.map((rental: { status: any }) => rental.status))
      );
      setStatuses(uniqueStatuses);
      const newSubs = rental.rentals;
      setSubs(newSubs);
    } else {
      setAreSubscriptionsAvailable(false);
    }
  }, [rental]);

  const getButtonVariant = (status: string) => {
    if (!areSubscriptionsAvailable) return "default disabled";
    return selectedFilter === status ? "primary" : "";
  };

  const handleFilterChange = (status: SetStateAction<string>) => {
    setSelectedFilter(status);
    localStorage.setItem("selectedFilter", JSON.stringify(status));
  };

  const hasSubscriptions = rental && rental?.count > 0;

  return {
    rental,
    subs,
    setSubs,
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

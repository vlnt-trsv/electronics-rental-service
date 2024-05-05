import { Timer } from "@/shared/lib";
import Text from "@/widgets/Aside/ui/Text";

export function renderSubscriptionDetails(
  status: string,
  subscriptionOptions: {
    _id?: string;
    name?: string;
    price: any;
    duration: any;
  },
  formattedRentalDate: string | number,
  formattedStartDate: string | number,
  formattedEndDate: string | number
) {
  console.log(
    "Start",
    formattedStartDate,
    "\n",
    "End",
    formattedEndDate,
    "\n",
    "Rental",
    formattedRentalDate
  );
  switch (status) {
    case "Не оплачено":
      return (
        <>
          <Text flex={true} justify="space-between">
            Оплатить товар до: <Text weight={700}>{formattedRentalDate}</Text>
          </Text>
          <Text flex={true} justify="space-between">
            Подписка на {subscriptionOptions?.duration || "DURATION"} дней
            <Text color="#ff6b6b" weight={700}>
              {subscriptionOptions?.price || "PRICE"} ₽
            </Text>
          </Text>
        </>
      );
    case "В аренде":
      return (
        <>
          <Text flex={true} justify="space-between">
            Подписка действует до:
            <Text>{formattedEndDate}</Text>
          </Text>
          <Text flex={true} justify="space-between">
            Относитесь к девайсу с любовью 🤗
          </Text>
        </>
      );
    case "Завершено":
      return (
        <Text flex={true} justify="space-between">
          Вернуть товар до:
          <Text>{formattedEndDate}</Text>
        </Text>
      );
    case "Отменено":
      return <Text>Подписка не действительна</Text>;
    default:
      return (
        <Text flex={true} justify="space-between">
          Подписка на {subscriptionOptions?.duration || "DURATION"} дней
          <Text color="#ff6b6b" weight={700}>
            {subscriptionOptions?.price || "PRICE"} ₽
          </Text>
        </Text>
      );
  }
}

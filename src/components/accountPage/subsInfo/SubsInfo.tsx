import { Button } from "@/components/ui/button";
import styles from "./SubsInfo.module.scss";
import SubsCard from "./SubsCard";

const SubsInfo = () => {
  const size = "lg";
  return (
    <div className={styles.subs}>
      <span className={styles.subs__title}>Подписки</span>
      <div className={styles.subs__filter}>
        <Button size={size}>Не оплачены</Button>
        <Button size={size}>Оплачены</Button>
        <Button size={size}>В аренде</Button>
        <Button size={size}>Завершённые</Button>
        <Button size={size}>Все</Button>
      </div>
      <div className={styles.subs__card}>
        <SubsCard />
      </div>
    </div>
  );
};

export default SubsInfo;

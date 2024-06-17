import { Heading, ListItem, Paragraph, UnorderedList } from "../DocComponents";

export default function Documents() {
  return (
    <>
      <Paragraph>
        Я, [ФИО], даю согласие Two2Buddy, находящейся по адресу
        Красный проспект, д.81, кв.76, на обработку моих персональных данных в соответствии с
        условиями настоящего согласия.
      </Paragraph>

      <Heading level={2}>1. Объем обрабатываемых данных</Heading>
      <Paragraph>
        В рамках настоящего согласия могут обрабатываться следующие персональные
        данные:
      </Paragraph>
      <UnorderedList>
        <ListItem>ФИО;</ListItem>
        <ListItem>Дата рождения;</ListItem>
        <ListItem>Адрес проживания;</ListItem>
        <ListItem>Контактный телефон;</ListItem>
        <ListItem>Адрес электронной почты;</ListItem>
        <ListItem>
          Иные данные, необходимые для исполнения обязательств по договору.
        </ListItem>
      </UnorderedList>

      <Heading level={2}>2. Цели обработки персональных данных</Heading>
      <Paragraph>
        Персональные данные обрабатываются в следующих целях:
      </Paragraph>
      <UnorderedList>
        <ListItem>
          Исполнение договорных обязательств перед субъектом персональных
          данных;
        </ListItem>
        <ListItem>
          Предоставление информации о продуктах и услугах компании;
        </ListItem>
        <ListItem>
          Обеспечение обратной связи с субъектом персональных данных;
        </ListItem>
        <ListItem>Иные законные цели.</ListItem>
      </UnorderedList>

      <Heading level={2}>3. Срок действия согласия</Heading>
      <Paragraph>
        Настоящее согласие действует с момента его подписания и до момента его
        отзыва субъектом персональных данных.
      </Paragraph>

      <Heading level={2}>4. Отзыв согласия</Heading>
      <Paragraph>
        Субъект персональных данных имеет право отозвать настоящее согласие в
        любое время, направив соответствующее уведомление на адрес [Адрес
        компании].
      </Paragraph>

      <Paragraph>Дата: ____________</Paragraph>
      <Paragraph>Подпись: ____________ /[ФИО]/</Paragraph>
    </>
  );
}

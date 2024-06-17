import {
  Heading,
  ListItem,
  OrderedList,
  Paragraph,
  UnorderedList,
} from "../DocComponents";

export default function Documents() {
  return (
    <>
      <Heading level={2}>1. Определения</Heading>
      <OrderedList>
        <ListItem>
          Арендодатель – Two2Buddy, предоставляющий услуги по аренде цифровой
          электроники.
        </ListItem>
        <ListItem>
          Арендатор – физическое или юридическое лицо, пользующееся услугами
          сервиса аренды цифровой электроники.
        </ListItem>
        <ListItem>
          Сервис – онлайн-платформа Two2Buddy, предоставляющая возможность
          аренды цифровой электроники.
        </ListItem>
        <ListItem>
          Электроника – цифровые устройства, доступные для аренды через Сервис.
        </ListItem>
      </OrderedList>

      <Heading level={2}>2. Предмет договора</Heading>
      <OrderedList>
        <ListItem>
          Арендодатель предоставляет Арендатору возможность временного
          использования Электроники через Сервис на условиях, установленных
          настоящим Договором.
        </ListItem>
      </OrderedList>

      <Heading level={2}>3. Условия аренды</Heading>
      <OrderedList>
        <ListItem>
          Арендатор выбирает Электронику на Сервисе и указывает срок аренды.
        </ListItem>
        <ListItem>
          Арендодатель обязуется предоставить выбранную Электронику в исправном
          состоянии в срок, указанный в Сервисе.
        </ListItem>
        <ListItem>
          Арендатор обязуется использовать Электронику в соответствии с ее
          назначением и не допускать ее порчи.
        </ListItem>
      </OrderedList>

      <Heading level={2}>4. Права и обязанности сторон</Heading>
      <OrderedList>
        <ListItem>
          <Paragraph>Права Арендодателя:</Paragraph>
          <UnorderedList>
            <ListItem>
              Запрашивать у Арендатора необходимые данные для заключения
              Договора.
            </ListItem>
            <ListItem>
              Проводить проверку состояния Электроники перед и после аренды.
            </ListItem>
            <ListItem>
              Отказать в аренде в случае нарушения Арендатором условий Договора.
            </ListItem>
          </UnorderedList>
        </ListItem>
        <ListItem>
          <Paragraph>Обязанности Арендодателя:</Paragraph>
          <UnorderedList>
            <ListItem>Предоставить Электронику в исправном состоянии.</ListItem>
            <ListItem>
              Обеспечить своевременную доставку Электроники Арендатору.
            </ListItem>
          </UnorderedList>
        </ListItem>
        <ListItem>
          <Paragraph>Права Арендатора:</Paragraph>
          <UnorderedList>
            <ListItem>Получать Электронику в исправном состоянии.</ListItem>
            <ListItem>
              Пользоваться услугами Сервиса в полном объеме в соответствии с
              условиями Договора.
            </ListItem>
          </UnorderedList>
        </ListItem>
        <ListItem>
          <Paragraph>Обязанности Арендатора:</Paragraph>
          <UnorderedList>
            <ListItem>Своевременно оплачивать услуги аренды.</ListItem>
            <ListItem>
              Возвращать Электронику в срок и в том же состоянии, в котором она
              была получена.
            </ListItem>
            <ListItem>
              Сообщать Арендодателю о любых неисправностях или повреждениях
              Электроники.
            </ListItem>
          </UnorderedList>
        </ListItem>
      </OrderedList>

      <Heading level={2}>5. Оплата</Heading>
      <OrderedList>
        <ListItem>
          Арендатор обязуется оплатить аренду Электроники в соответствии с
          тарифами, установленными на Сервисе.
        </ListItem>
        <ListItem>
          Оплата производится авансовым платежом за весь срок аренды.
        </ListItem>
      </OrderedList>

      <Heading level={2}>6. Ответственность сторон</Heading>
      <OrderedList>
        <ListItem>
          Арендодатель не несет ответственности за ущерб, причиненный Арендатору
          в результате использования Электроники, если такой ущерб не связан с
          неисправностью, возникшей по вине Арендодателя.
        </ListItem>
        <ListItem>
          Арендатор несет ответственность за сохранность и исправность
          Электроники на протяжении всего срока аренды.
        </ListItem>
      </OrderedList>

      <Heading level={2}>7. Разрешение споров</Heading>
      <OrderedList>
        <ListItem>
          Все споры и разногласия, возникающие из настоящего Договора, решаются
          путем переговоров между сторонами.
        </ListItem>
        <ListItem>
          В случае невозможности урегулирования спора путем переговоров, спор
          подлежит рассмотрению в суде по месту нахождения Арендодателя.
        </ListItem>
      </OrderedList>

      <Heading level={2}>8. Заключительные положения</Heading>
      <OrderedList>
        <ListItem>
          Настоящий Договор вступает в силу с момента акцепта условий Договора
          Арендатором на Сервисе и действует до полного выполнения сторонами
          своих обязательств.
        </ListItem>
        <ListItem>
          Арендодатель имеет право вносить изменения в условия Договора,
          уведомив об этом Арендатора не позднее, чем за 10 дней до вступления
          изменений в силу.
        </ListItem>
        <ListItem>
          Все уведомления и сообщения в рамках настоящего Договора должны
          направляться через Сервис или иным образом, предусмотренным Сервисом.
        </ListItem>
      </OrderedList>
    </>
  );
}

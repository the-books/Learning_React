import { lastName, firstName, middleName } from './2.1.3.0';

const event = "바흐 교향곡 연주회";
const qty = 2;
const price = 35000;
const ticketAgent = "티켓링크";

const email = `
${lastName} 님께,

${event} 티켓 ${qty} 건을 구매해 주셔서 감사합니다.

주문 상세 정보:
  ${lastName} ${firstName} ${middleName}
  ${qty} x $${price} = $${qty * price} 공연: ${event}

공연 시작 30분 전까지 배부처에서 티켓을 수령하시기 바랍니다.

감사합니다.

  ${ticketAgent} 드림
`;

export {};

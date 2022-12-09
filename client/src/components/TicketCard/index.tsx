import React from 'react';
import { ITicket } from '../../types';
import * as S from './styles';

type TicketProps = {
  ticket: ITicket;
};

const TicketCard = ({ ticket }: TicketProps) => {
  const generateStatus = (status: number) => {
    switch (status) {
      case -1:
        return 'Deleted';
      case 0:
        return 'Created';
      case 1:
        return 'Accepted';
      default:
        return 'Rejected';
    }
  };
  // const { ticket } = props;
  console.log('ticket', ticket);
  return (
    <S.CardContainer>
      <S.TitleStatusWrapper>
        <h3>
          #{ticket.id} - {ticket.description}
        </h3>
        <h4>status: {generateStatus(ticket.status)}</h4>
      </S.TitleStatusWrapper>
      <h4>Price: {(Math.round(ticket.price * 100) / 100).toFixed(2)}</h4>
    </S.CardContainer>
  );
};

export default TicketCard;

import React from 'react';
import { ITicket } from '../../types';
import * as S from './styles';

type TicketProps = {
  ticket: ITicket;
};

const TicketCard = ({ ticket }: TicketProps) => {
  // const { ticket } = props;
  console.log('ticket', ticket);
  return <S.CardContainer>{ticket.description}</S.CardContainer>;
};

export default TicketCard;

import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/Authcontext';
import api from '../../services/api';
import { ITicket } from '../../types';
import TicketCard from '../TicketCard';
import * as S from './styles';

const TicketList = () => {
  const { currentUser } = useContext(AuthContext);
  const [ticketList, setTicketList] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTickets = async () => {
      console.log('fetchTickets');
      try {
        const res = await api.get(`/tickets/`);
        setTicketList(
          res.data.filter(
            (ticket: ITicket) => ticket.client_id === currentUser.id
          )
        );
      } catch (err: any) {
        setError(err?.response?.data);
      }
    };
    fetchTickets();
  }, []);

  useEffect(() => {
    console.log('tickets', ticketList);
  }, [ticketList]);

  return (
    <S.TicketListContainer>
      <h1>Your tickets</h1>
      <S.TicketCardsRow>
        {ticketList.map((ticket: ITicket) => (
          <TicketCard key={ticket.id} ticket={ticket as ITicket} />
        ))}
      </S.TicketCardsRow>
    </S.TicketListContainer>
  );
};

export default TicketList;

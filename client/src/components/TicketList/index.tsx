import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/Authcontext';
import api from '../../services/api';
import { IPerson, ITicket } from '../../types';
import TicketCard from '../TicketCard';
import * as S from './styles';

const TicketList = () => {
  const { currentUser } = useContext(AuthContext);
  const [ticketList, setTicketList] = useState([]);
  const [peopleList, setpeopleList] = useState([]);
  // const [clientList, setClientList] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const res = await api.get(`/tickets/`);
        setTicketList(
          res.data.filter((ticket: ITicket) =>
            currentUser.role === 'clients'
              ? ticket.client_id === currentUser.id
              : ticket.architect_id === currentUser.id
          )
        );
      } catch (err: any) {
        setError(err?.response?.data);
      }
    };

    const fetchPeople = async () => {
      try {
        const res = await api.get(
          `/${currentUser.role === 'clients' ? 'architects' : 'clients'}/`
        );
        console.log('setPeople', res.data);
        setpeopleList(res.data);
      } catch (err: any) {
        setError(err?.response?.data);
      }
    };

    fetchPeople();

    fetchTickets();
  }, []);

  return (
    <S.TicketListContainer>
      <h1>
        {currentUser.role === 'clients' ? 'Your tickets' : 'Proposals to you'}
      </h1>
      <S.TicketCardsRow>
        {ticketList.map((ticket: ITicket) => (
          <TicketCard
            key={ticket.id}
            ticket={ticket as ITicket}
            responsible={
              peopleList.find((person: IPerson) =>
                currentUser.role === 'clients'
                  ? person.id === ticket.architect_id
                  : person.id === ticket.client_id
              ) as unknown as IPerson
            }
          />
        ))}
      </S.TicketCardsRow>
    </S.TicketListContainer>
  );
};

export default TicketList;

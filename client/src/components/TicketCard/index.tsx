import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/Authcontext';
import { IPerson, ITicket } from '../../types';
import * as S from './styles';
import * as Common from '../../styles/common';
import api from '../../services/api';

type TicketProps = {
  ticket: ITicket;
  responsible: IPerson;
};

const TicketCard = ({ ticket, responsible }: TicketProps) => {
  const { currentUser } = useContext(AuthContext);
  const [error, setError] = useState(null);
  console.log('responsible', responsible);
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

  const handleDelete = async () => {
    console.log('fetchArchitects');
    try {
      const res = await api.put(`/tickets/${ticket.id}/archive`);
      if (res.status) {
        window.location.reload();
      }
    } catch (err: any) {
      setError(err?.response?.data);
    }
  };

  return (
    <S.CardContainer>
      <S.TitleStatusWrapper>
        {responsible ? (
          <h3>
            #{ticket.id} - {ticket.description} ({responsible.first_name}{' '}
            {responsible.last_name})
          </h3>
        ) : null}
        <h4>status: {generateStatus(ticket.status)}</h4>
      </S.TitleStatusWrapper>
      <S.TitleStatusWrapper>
        <h4>Price: {(Math.round(ticket.price * 100) / 100).toFixed(2)}</h4>
        {currentUser.role === 'clients' ? (
          <Common.FormButton
            type="button"
            disabled={ticket.status === -1}
            onClick={handleDelete}
          >
            Delete
          </Common.FormButton>
        ) : (
          <p>Arq</p>
        )}
      </S.TitleStatusWrapper>
      {error ? <Common.ErrorMessage>{error}</Common.ErrorMessage> : null}
    </S.CardContainer>
  );
};

export default TicketCard;

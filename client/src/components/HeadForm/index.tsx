import React, { useContext, useEffect, useRef, useState } from 'react';
import { AuthContext } from '../../context/Authcontext';
import api from '../../services/api';
import { IPerson } from '../../types';
import * as S from './styles';
import * as Common from '../../styles/common';

const HeadForm = () => {
  const { currentUser } = useContext(AuthContext);
  const [architectList, setArchitectList] = useState([]);
  const [error, setError] = useState<string | null>(null);

  const priceRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  const architectRef = useRef<HTMLSelectElement>(null);

  useEffect(() => {
    const fetchArchitects = async () => {
      try {
        const res = await api.get(`/architects/`);
        setArchitectList(res.data);
      } catch (err: any) {
        setError(err?.response?.data);
      }
    };
    fetchArchitects();
  }, []);

  const handleSendTicket = async (e: React.FormEvent) => {
    e.preventDefault();
    const price = priceRef.current?.value;
    const description = descriptionRef.current?.value;
    const architectId = architectRef.current?.value;
    const arrayValues = [price, description, architectId];
    if (arrayValues.some((el) => !el)) {
      return setError('please fill all fields');
    }
    try {
      const res = await api.post('/tickets/new', {
        price,
        description,
        architect_id: architectId,
        client_id: currentUser.id,
        status: 0,
      });
      if (res.data.status === 'INSERT') {
        window.location.reload();
      }
    } catch (err: any) {
      setError(err?.response?.data);
    }
  };

  return (
    <S.FormContainer onSubmit={handleSendTicket}>
      <h1>Make a Proposal</h1>
      <S.ProposalInput>
        <label htmlFor="price">Price(R$)</label>
        <input ref={priceRef} type="text" id="price" placeholder="price" />
      </S.ProposalInput>
      <textarea ref={descriptionRef} placeholder="description" />
      <select ref={architectRef} defaultValue="" placeholder="description">
        <option value="" disabled>
          Select an architect
        </option>
        {architectList.map((arch: IPerson) => (
          <option key={arch.id} value={arch.id}>
            {arch.first_name} {arch.last_name}
          </option>
        ))}
      </select>
      <Common.FormButton type="submit">Send</Common.FormButton>
      {error ? <Common.ErrorMessage>{error}</Common.ErrorMessage> : null}
    </S.FormContainer>
  );
};

export default HeadForm;

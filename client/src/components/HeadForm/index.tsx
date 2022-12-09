import React, { useEffect, useRef, useState } from 'react';
import api from '../../services/api';
import * as S from './styles';

const HeadForm = () => {
  const [architectList, setArchitectList] = useState([]);
  const [error, setError] = useState(null);

  const priceRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  const architectRef = useRef<HTMLSelectElement>(null);

  useEffect(() => {
    const fetchArchitects = async () => {
      console.log('fetchArchitects');
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
    const architect = architectRef.current?.value;

    console.log(price, description, architect);
  };

  return (
    <S.FormContainer onSubmit={handleSendTicket}>
      <h1>Send a Proposal</h1>
      <S.ProposalInput>
        <label htmlFor="price">Price(R$)</label>
        <input ref={priceRef} type="text" id="price" placeholder="price" />
      </S.ProposalInput>
      <textarea ref={descriptionRef} placeholder="description" />
      <select ref={architectRef} placeholder="description">
        <option disabled>Select an architect</option>
        <option value="Architect1">Architect1</option>
        <option value="Architect2">Architect2</option>
        <option value="Architect3">Architect3</option>
      </select>
      <button type="submit">Send</button>
    </S.FormContainer>
  );
};

export default HeadForm;

import React, { useRef } from 'react';
import * as S from './styles';

const HeadForm = () => {
  const priceRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  const architectRef = useRef<HTMLSelectElement>(null);

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
        <label htmlFor="price">Price</label>
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

import React, { useState } from 'react';
import styled from 'styled-components';

export const CenteredForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const Label = styled.label`
  margin-bottom: 10px;
`;

export const TextInput = styled.input`
  padding: 10px;
  margin-bottom: 10px;
`;
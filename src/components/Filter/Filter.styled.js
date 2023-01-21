import styled from 'styled-components';

export const FilterTitle = styled.label`
  display: block;
  margin-bottom: ${p => p.theme.space[2]}px;
  font-weight: bold;
  color: ${p => p.theme.colors.textAccent};
  font-size: ${p => p.theme.sizes.m};
  display: flex;
  justify-content: center;
`;

export const FilterInput = styled.input`
  font-size: ${p => p.theme.fontSizes.l};
  background: ${p => p.theme.colors.bgPrimary};
  min-width: ${p => p.theme.sizes.xl};
  min-width: ${p => p.theme.sizes.xxxl};
  color: ${p => p.theme.colors.textPrimary};
  background: ${p => p.theme.colors.bgPrimary};
  border-radius: ${p => p.theme.radii.sm};
  &hover {
    background:orange;
  }
`;

 
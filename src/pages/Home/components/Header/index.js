/* eslint-disable no-nested-ternary */
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Header({ hasError, qtyOfContacts, qtyOfFielteredContacts }) {
  const alignment = hasError
    ? 'flex-end'
    : (
      qtyOfContacts > 0
        ? 'space-between'
        : 'center'
    );

  return (
    <Container $justifyContent={alignment}>
      {(!hasError && qtyOfContacts > 0) && (
        <strong>
          {qtyOfFielteredContacts}
          {qtyOfFielteredContacts === 1 ? ' contato' : ' contatos'}
        </strong>
      )}
      <Link to="/new">Novo Contato</Link>
    </Container>
  );
}

Header.propTypes = {
  hasError: PropTypes.bool.isRequired,
  qtyOfContacts: PropTypes.number.isRequired,
  qtyOfFielteredContacts: PropTypes.number.isRequired,
};

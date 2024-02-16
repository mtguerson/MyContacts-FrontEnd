import { useParams, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import PageHeader from '../../components/PageHeader';
import ContactForm from '../../components/ContactForm';
import Loader from '../../components/Loader';
import ContactsService from '../../services/ContactsService';
import toast from '../../utils/toast';

export default function EditContact() {
  const [contact, setContact] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    async function loadContact() {
      try {
        const contactData = await ContactsService.getContactById(id);
        setContact(contactData);
        setIsLoading(false);
      } catch {
        history.push('/');
        toast({
          type: 'danger',
          text: 'Contato não encontrado!',
        });
      }
    }

    loadContact();
  }, [id, history]);

  function handleSubmit() {

  }

  return (
    <>
      <Loader isLoading={isLoading} />
      <PageHeader
        title="Editar Matheus Guerson"
      />

      <ContactForm
        key={contact.id}
        buttonLabel="Salvar alterações"
        onSubmit={handleSubmit}
        contact={contact}
      />
    </>
  );
}

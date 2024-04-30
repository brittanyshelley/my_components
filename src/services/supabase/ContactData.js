import { useState, useEffect } from 'react';
import { supabase } from './supabaseClient';

const ContactData = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContacts = async () => {
      const user = supabase.auth.user();

      if (user && user.id === 'your-broker-user-id-here') {
        const { data, error } = await supabase
          .from('contacts')
          .select('*');

        if (error) {
          console.error('Error loading contacts:', error);
          alert('Error loading contacts');
        } else {
          setContacts(data);
        }
      } else {
        alert('Unauthorized access. Only the broker can view this data.');
      }
      setLoading(false);
    };

    fetchContacts();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (!contacts.length) return <div>No contacts found.</div>;

  return (
    <div>
      <h1>Contact Submissions</h1>
      {contacts.map(contact => (
        <div key={contact.id}>
          <p>Name: {contact.name}</p>
          <p>Email: {contact.email}</p>
          <p>Message: {contact.message}</p>
        </div>
      ))}
    </div>
  );
};

export default ContactData;

import React from 'react';
import ContactComponent from '../components/pure/contact';
import { Contact } from '../models/contact.class';

const ContactsComponent = () => {
   const contacto = new Contact('RUBÉN DARÍO','GONZÁLEZ','gonzalezruben@gmail.com',true);
    return (
        <div>
            <ContactComponent contact={contacto}></ContactComponent>
        </div>
    );
}

export default ContactsComponent;

import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './Greeting.module.css';

const Greeting = () => {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const fetchGreeting = async () => {
      try {
        const response = await axios.get('http://localhost:3000/random_greeting');
        setGreeting(response.data.greeting);
      } catch (error) {
        console.error('Error fetching greeting:', error);
      }
    };

    fetchGreeting();
  }, []);

  return (
    <div className={styles.greeting}>
      <h2>Welcome to the React World</h2>
      <div>{greeting}</div>
    </div>
  );
};

export default Greeting;
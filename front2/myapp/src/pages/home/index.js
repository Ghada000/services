import React from 'react';
import NavbarHome from '../../components/navbarhome'; 
import './home.css';
import { authh } from "./firebaseConfig";
import { signOut } from "firebase/auth";
import { useRouter } from 'next/router';

const Home = ({ user }) => {
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      await signOut(authh);
      router.push('/login'); 
    } catch (error) {
      console.error('Error signing out:', error.message);
    }
  };

const Home = ({ user, signOut }) => {
  return (
    <div>
      <NavbarHome user={user} signOut={handleSignOut} />
      <div>
        <h1>Welcome to TradeHub!</h1>
        <p>Hey there! Ready to explore TradeHub and discover new ways to exchange goods and services? Dive in and find what you need!</p>
        <div>
          <div>
            <h2>Services</h2>
            <p>Need a helping hand with tasks or looking for specialized skills? On TradeHub, you can find a variety of services offered by talented individuals just like you! From graphic design to tutoring, housekeeping to gardening, there's something for everyone. Browse listings, strike up a conversation, and make trades that benefit both parties.</p>
            <img src="/services.jpg" alt="Services" />
          </div>
          <div>
            <h2>Goods</h2>
            <p>Got items gathering dust or looking to refresh your space? TradeHub is the perfect place to swap goods and find new treasures. Whether it's electronics, furniture, clothing, or books, there's a wide range of items waiting to find a new home. Snap some photos, describe your items, and start trading today!</p>
            <img src="/goods.jpg" alt="Goods" />
          </div>
        </div>
      </div>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
};

export default Home;

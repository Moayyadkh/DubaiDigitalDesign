
//import React from "react"; 
import "./styles.css";
 

       

import React, { useState } from 'react';
import { Link as ReachRouterLink } from 'react-router-dom';


 
//import "./styles.css";
import {
  Container,
  Group,
  Background,
  /*
  Dropdown,
  
  Link,
  Search,
  

  SearchIcon,
  SearchInput,
  ButtonLink,
  PlayButton,
*/
Text,
  FeatureCallOut,
  Profile,
  Picture,
  Feature,
  Logo,
} from './styles/header'

export default function Header({ bg = true, children, ...restProps }) {
    return bg ? (
      <Background data-testid="header-bg" {...restProps}>
        {children}
      </Background>
    ) : (
      children
    );};
  
  Header.Frame = function HeaderFrame({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
  };
  
  Header.Group = function HeaderGroup({ children, ...restProps }) {
    return <Group {...restProps}>{children}</Group>;
  };
  
  Header.Logo = function HeaderLogo({ to, ...restProps }) {
    return (
      <ReachRouterLink to={to}>
        <Logo {...restProps} />
      </ReachRouterLink>
    );
  };
  /*
  Header.Search = function HeaderSearch({ searchTerm, setSearchTerm, ...restProps }) {
    const [searchActive, setSearchActive] = useState(false);
  
    return (
      <Search {...restProps}>
        <SearchIcon onClick={() => setSearchActive((searchActive) => !searchActive)} data-testid="search-click">
          <img src="/images/icons/search.png" alt="Search" />
        </SearchIcon>
        <SearchInput
          value={searchTerm}
          onChange={({ target }) => setSearchTerm(target.value)}
          placeholder="Search "
          active={searchActive}
          data-testid="search-input"
        />
      </Search>
    );
  };*/

  Header.Profile = function HeaderProfile({ children, ...restProps }) {
    return <Profile {...restProps}>{children}</Profile>;
  };
  
  Header.Feature = function HeaderFeature({ children, ...restProps }) {
    return <Feature>{children}</Feature>;
  };
  
  Header.Picture = function HeaderPicture({ src, ...restProps }) {
    return <Picture {...restProps} src={`/images/users/${src}.png`} />;
  };

  Header.FeatureCallOut = function HeaderFeatureCallOut({ children, ...restProps }) {
    return <FeatureCallOut {...restProps}>{children}</FeatureCallOut>;
  };
  
  Header.Text = function HeaderText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>;
  };
  

 /*
  
  Header.Dropdown = function HeaderDropdown({ children, ...restProps }) {
    return <Dropdown {...restProps}>{children}</Dropdown>;
  };
  

  
  Header.PlayButton = function HeaderPlayButton({ children, ...restProps }) {
    return <PlayButton {...restProps}>{children}</PlayButton>;
  };
  

  

  Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
    return <ButtonLink {...restProps}>{children}</ButtonLink>;
  };*/

       // Set the date we're counting down to
       var countDownDate = new Date("September 30, 2021 12:00:00").getTime();

       // Update the count down every 1 second
       var x = setInterval(function() {

           // Get today's date and time
           var now = new Date().getTime();

           // Find the distance between now and the count down date
           var distance = countDownDate - now;

           // Time calculations for days, hours, minutes and seconds
           var days = Math.floor(distance / (1000 * 60 * 60 * 24));
           var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
           var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
           var seconds = Math.floor((distance % (1000 * 60)) / 1000);

           // Display the result in the element with id="demo"

           

           document.getElementById("demo").innerHTML = "Website Under Counstruction , Days Left until launch : " + days + "d " + hours + "h " +
               minutes + "m " + seconds + "s ";

           // If the count down is finished, write some text
           if (distance < 0) {
               clearInterval(x);
               document.getElementById("demo").innerHTML = "EXPIRED";
               
           }
       }, 1000);
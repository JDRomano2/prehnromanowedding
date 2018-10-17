import React from 'react';
import { Header, Divider, Container } from 'semantic-ui-react';

const Planning = ({}) => {
  return (
    <div>
      <Container text textAlign='left'>
        <Header as='h2'>
          Accomodations
        </Header>
        <Header as='h4'>
          Best Western Plus
        </Header>
        <p>
          We have secured rooms at The Best Western Plus, conveniently located 0.7 miles from the Senate Garage. Check back soon for details on how to make a reservation at a discounted rate. {/*You can reserve a room at a discounted rate by calling the hotel or using the link below to reserve online. */}
        </p>
        <Header as='h4'>
          Airbnb
        </Header>
        <p>
          There are many Airbnb options in Uptown Kingston and the surrounding areas. Click on the following link to search current availability (note that some listings may not be posted until closer to the wedding): <a href="https://goo.gl/wYXeYa" target='__blank'>https://goo.gl/wYXeYa</a>
        </p>


        {/* <Divider />
        <Header as='h2'>
          Things to do in Kingston
        </Header> */}

        <Divider />
        <Header as='h2'>
          Getting here
        </Header>
        <Header as='h4'>
          By air
        </Header>
        <p>
          There are a number of major airports located within a few hours drive from Kingston, including: Newark Liberty International (EWR), John F. Kennedy International (JFK), LaGuardia International (LGA), Stewart International Airport (SWF), and Albany International (ALB).
        </p>
        <Header as='h4'>
          By car
        </Header>
        <p>
          Kingston is easily accessed from the New York State Thruway (I-87), at Exit 19 (Kingston).
        </p>
        <Header as='h4'>
          By bus (from NYC)
        </Header>
        <p>
          Take the Adirondack Trailways Bus from the New York Port Authority Bus Terminal to Kingston, NY. The bus station is approximately 1/2 mile from the Best Western Plus. Tickets may be purchased in advance online, from <a href="https://trailwaysny.com/purchase-tickets/" target='__blank'>https://trailwaysny.com/purchase-tickets/</a>, and cost approximately $27 per person, each direction.
        </p>

        <Divider />
        <Header as='h2'>
          Wedding transportation
        </Header>
        <p>
          Transportation will be provided between the Best Western Plus and both the ceremony venue and the reception venue. Guests staying at the Best Western Plus may also find it convenient to walk to/from the reception. Check back as the date approaches for more information on timing, pickup and drop-off locations, and more!
        </p>
      </Container>
    </div>
  );
}

export default Planning;

import React from 'react';
import { Header, Divider, Container, List } from 'semantic-ui-react';

const Planning = ({}) => {
  return (
    <div>
      <Container text textAlign='left'>
        <Header as='h2'>
          Weekend Schedule
        </Header>
        <ul>
          <li><b>Saturday, August 10</b></li>
          <ul>
            <li><u>2:00pm-3:30pm:</u> Wedding (<i>St. Peter's Church, Rosendale</i>)</li>
            <li><u>5:30pm-6:30pm:</u> Cocktail Hour (<i>Senate House grounds, Kingston</i>)</li>
            <li><u>6:30pm-10:30pm:</u> Reception (<i>Senate Garage, Kingston</i>)</li>
            <li><u>10:30pm-?:</u> After-Party (<i>TBD, Uptown Kingston</i>)</li>
          </ul>
          <li><b>Sunday, August 11</b></li>
          <ul>
            <li><u>10:00am-12:00pm:</u> Farewell Brunch (<i>Deising's Bakery, Kingston</i>)</li>
          </ul>
        </ul>

        <Divider />
        <Header as='h2'>
          Accomodations
        </Header>
        <Header as='h4'>
          Best Western Plus
        </Header>
        <p>
          We have secured rooms at The Best Western Plus, conveniently located
          only 0.7 miles from the Senate Garage. You can reserve a room at a
          discounted rate by calling the hotel or using the link below to
          reserve online (please note that rooms are subject to availability and
          the discounted rate may not be available close to the date of the
          wedding):
        </p>
        <p>
          <a href="https://www.bestwestern.com/en_US/book/hotel-rooms.33159.html?groupId=K44SS2E9" target='__blank'>https://www.bestwestern.com/en_US/book/hotel-rooms.33159.html?groupId=K44SS2E9</a>
        </p>
        <Header as='h4'>
          Airbnb
        </Header>
        <p>
          There are many Airbnb options in Uptown Kingston and the surrounding
          areas. Click on the following link to search current availability:
        </p>
        <p>
        <a href="https://goo.gl/wYXeYa" target='__blank'>https://goo.gl/wYXeYa</a>
        </p>


        <Divider />
        <Header as='h2'>
          Things to do in and around Kingston
        </Header>
        <Header as='h4'>Breweries</Header>
        <p>
          The Hudson Valley is home to a number of great craft breweries. Here are some of our favorites in and around Kingston:
        </p>
        <List bulleted>
          <List.Item href='http://www.keeganales.com/'>Keegan Ales</List.Item>
          <List.Item href='http://www.arrowoodfarms.com/'>Arrowood Farms</List.Item>
          <List.Item href='https://www.badseedhardcider.com/'>Bad Seed Cider</List.Item>
        </List>

        <Header as='h4'>
          Historic sites
        </Header>
        <p>
          Kingston played an important role in the American Revolution, and accordingly is home to many historic sites, including the following:
        </p>
        <List bulleted>
          <List.Item href='https://parks.ny.gov/historic-sites/18/details.aspx'>Senate House State Historic Site</List.Item>
          <List.Item href='https://www.hurleyheritagesociety.org/'>Hurley Historic District</List.Item>
        </List>

        <Header as='h4'>
          Hiking and other outdoor activities
        </Header>
        <List bulleted>
          <List.Item href='https://parks.ny.gov/parks/127/details.aspx'>Minnewaska State Park</List.Item>
          <List.Item href='https://www.mohonk.com/a-day-at-mohonk/hiking/'>Mohonk Mountain House hikes</List.Item>
          <List.Item href='https://walkway.org/'>Walkway Over the Hudson</List.Item>
          <List.Item href='https://www.wvrta.org/'>Wallkill Valley Rail Trail</List.Item>
        </List>

        <Header as='h4'>
          Shopping
        </Header>
        <List bulleted>
          <List.Item href='https://www.kingston-ny.gov/content/11648/8403/11019/11027/default.aspx'>Kingston Stockade District Shopping</List.Item>
          <List.Item href='http://woodstockguide.com/shopping.html'>Woodstock Shopping</List.Item>
        </List>

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
          Transportation and Parking
        </Header>
        <Header as='h4'>
          Wedding (St. Peter's Church)
        </Header>
        <p>
          Transportation will be provided between the Best Western Plus and both
          the ceremony venue and the reception venue. Guests staying at the Best
          Western Plus may also find it convenient to walk to/from the
          reception. Since seating on the bus will be limited, we encourage
          guests to drive to St. Peter's Church if they are able. Information
          regarding locations and timing is shown below!
        </p>
        <p>
          Guests who opt to drive to the wedding can park at St. Peter's Church,
          in either of the two lots adjacent to the church. If necessary, some
          parking is also available on the right side of Keator Avenue, going up
          the hill to the left of, and behind, the church.
        </p>
        <Header as='h4'>
          Reception (Senate Garage)
        </Header>
        <p>
          Like mentioned above, a bus will be provided, making trips between the
          Best Western Plus and the Senate Garage. For timing, please refer to
          the information below.
        </p>
        <p>
          Parking at the Senate Garage may be somewhat more limited, so we
          suggest walking (convenient from most parts of Uptown Kingston,
          including the Best Western Plus) or carpooling when possible. Some
          parking spaces may be available in the small lot behind the Senate
          House or along the streets (metered) near the venue.
        </p>
        <Header as='h4'>
          Farewell Brunch (Deising's Bakery)
        </Header>
        <p>
          Deising's Bakery has one parking lot that
          will likely fill up quickly, but streetside parking is also available.
          Like for the Senate Garage, Deising's is located within easy walking
          distance of the Best Western Plus, as well as most other locations in
          Uptown Kingston.
        </p>
        <Header as='h3'>
          Bus Schedule (Saturday, August 10)
        </Header>
        <ul>
          <li><u>1:15 PM</u> - Depart Best Western Plus for St. Peter's Church</li>
          <li><u>3:30 PM</u> - Depart St. Peter's Church returning to Best Western Plus</li>
          <li><u>5:00 PM</u> - Depart Best Western Plus for Senate Garage</li>
          <li><u>9:00 PM to 10:30 PM</u> - Depart Senate Garage to Best Western Plus (<b>every 30 minutes</b>)</li>
          <li><u>12:00 PM</u> - Final departure, Senate Garage to Best Western Plus</li>
        </ul>
      </Container>
    </div>
  );
}

export default Planning;

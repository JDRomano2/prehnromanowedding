import React from 'react';
import { Image, Container, Header, Divider } from 'semantic-ui-react';

import loch from '../images/loch.png';
import piora from '../images/piora.png';
import selfie from '../images/selfie.png';

class Story extends React.Component {
  render() {
    return (
      <div>
        <Container text textAlign='left'>


          <Divider />

          <Header as='h2'>How We Met</Header>
          <p>
            Sarah and Joe were introduced through the dating app Coffee Meets Bagel in February, 2015. Sarah was completing a residency at St. Barnabas Hospital, and Joe was working on his PhD at Columbia University. Although they first met at the Hungarian Pastry Shop in Morningside Heights, their first real date was at Yakitori Totto in Midtown Manhattan. The two hit it off and began dating regularly. At the time, Joe had an apartment that had a mini kitchen, with a half stove and no oven. Sarah was really impressed that Joe would prepare quality meals for them out of these tiny facilities; he even had a toaster oven he would set on a chair to use for baking!
          </p>

          <Image src={piora} centered style={{marginTop: '36px'}}/>
          <p style={{textAlign: 'center'}}>
            <i>First birthday dinner together; Piora, NYC</i>
          </p>

          <p>
            Joe first met Sarah’s family on her birthday in late March, and they later traveled to Vermont to visit Joe’s family for a Memorial Day family reunion. Since then, the two have had many amazing adventures together. Joe and Sarah have remained in NYC since, and currently reside in the neighborhood of North Riverdale while finishing up their degrees.
          </p>

          <Divider />

          <Header as='h2'>Our Engagement</Header>
          <Image src={loch} centered style={{marginTop: '36px'}}/>
          <p style={{textAlign: 'center'}}>
            <i>
              The Loch Vale; Rocky Mountain National Park
            </i>
          </p>

          <p>
            In September, 2018, Joe and Sarah took a vacation to Denver, Colorado and the surrounding areas. One day, they went hiking at Rocky Mountain National Park. After stopping for lunch by the lake in the Loch Vale, Joe surprised Sarah and proposed! They decided that they would hold their wedding in one of their hometowns, and eventually selected the Senate Garage–a beautiful space located in the heart of uptown Kingston new york, on the grounds of the historic site of the first Senate of the United States. The ceremony will be held in Sarah’s childhood parish, St. Peter’s Catholic Church, in Rosendale, New York.
          </p>

          <Image src={selfie} centered style={{marginTop: '36px'}}/>
          <p style={{textAlign: 'center'}}>
            <i>Sarah showing off her new ring!</i>
          </p>
        </Container>
      </div>
    );
  }
}

export default Story;

import React from 'react';
import { Button } from 'antd';

import { Carousel } from 'antd';

const items = [
  {
    key: '1',
    title: 'Should there be a Universal Basic Income (UBI)?',
    content: 'A Universal Basic Income scheme is a government policy that typically replaces means-tested welfare systems with a single unconditional payment. This idea has a long history; able to trace its origins to various humanist, socialist, and libertarian thinkers over the last several centuries.',
  },
  {
    key: '2',
    title: 'Do journalists have a moral obligation to display violent images?',
    content: 'Journalists have an obligation to minimise harm. But what does that mean in practice? Is it more of a violation of dignity to publicise people’s suffering or to let them suffer in the dark? And on balance, do violent images raise public awareness or quench a public thirst for the shock factor?',
  },
  {
    key: '3',
    title: 'Should teachers be allowed to wear religious symbols at School?',
    content: 'Religious individuals use a range of symbols to demonstrate their belief in a certain faith, the cross for Christians, burkas and headscarfs for Muslims, turbans for Sikhs, et cetera. It can be argued that all individuals have the right to wear whatever symbols they like, as pertaining to their faith. However, if teachers wear these symbols in the classroom, they violate the status of religious neutrality in schools, potentially influencing their students and hindering their right to learn in an objective, neutral environment. While some say allowing religious symbols would introduce students to new cultures, others say it would distract them from learning and could subtly affect their own beliefs. And so we can then consider: should teachers be permitted to wear religious symbols at school?'
  },
]

function AppHero() {
  return (
    <div id="hero" className="heroBlock">
      <Carousel>
        {items.map(item => {
          return (
            <div key={item.key} className="container-fluid">
              <div className="content">
                <h3>{item.title}</h3>
                <p>{item.content}</p>
                <div className="btnHolder">
                  <Button type="primary" size="large">< i className="fas fa-users"></i>What others say</Button>
                  <Button size="large"><i className="fas fa-pen"></i> Contriubte</Button>
                </div>
              </div>
            </div>  
          );
        })}
      </Carousel>
    </div>
  );
}

export default AppHero;
import { useState } from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

export const DataTabs = ({defaultActiveKey, itemsData}) => {

    const [key, setKey] = useState(defaultActiveKey);

  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
        {
            itemsData.map((item) => {
                return (
                    <Tab eventKey={item.itemKey} title={item.header}>
                        <div>{item.body}</div>
                    </Tab>
                )
            })
        }
    </Tabs>
  );
}

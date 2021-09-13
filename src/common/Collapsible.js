import Accordion from 'react-bootstrap/Accordion';

export const Collapsible = ({defaultActiveKey, itemsData}) => {
    return (
        <Accordion defaultActiveKey={defaultActiveKey}>
            {
                itemsData.map((item) => {
                    return (
                        <Accordion.Item eventKey={item.itemKey}>
                            <Accordion.Header>{item.header}</Accordion.Header>
                            <Accordion.Body>{item.body}</Accordion.Body>
                        </Accordion.Item>
                    )
                })
            }
        </Accordion>
    )
}

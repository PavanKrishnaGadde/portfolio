import { Collapsible } from '../common/Collapsible';
import { DataTabs } from '../common/DataTabs';
import '../styles/details.scss';

export const Details = () => {

    
    const projectsData = [{
        itemKey: 'tab1',
        header: 'Office',
        body: 'Worked for client Vadafone Italy'
    },
    {
        itemKey: 'tab2',
        header: 'Indivdual',
        body: 'Online Room Finding portal'
    }];

    const itemsData = [{
        itemKey: 'tab1',
        header: 'Experience',
        body: 'Software Engineer at Oracle'
    },
    {
        itemKey: 'tab2',
        header: 'Education',
        body: 'B.Tech from NIT Warangal'
    },
    {
        itemKey: 'tab3',
        header: 'Projects',
        body: <div><DataTabs defaultActiveKey={projectsData[0].itemKey} itemsData={projectsData} /></div>
    },
    {
        itemKey: 'tab4',
        header: 'Publications',
        body: 'SmartCap for Alzheimers patients using deep learning'
    },
    {
        itemKey: 'tab5',
        header: 'Skills and Technologies',
        body: 'Java, Javascript, HTML, CSS, C++, React, Springboot'
    },
    {
        itemKey: 'tab6',
        header: 'Extra-Curricular Activities',
        body: 'General Secretary at Science and Hobbies Club, NIT Warangal'
    }];

    return (
        <div className="details-section" >
           <Collapsible defaultActiveKey={itemsData[0].itemKey} itemsData={itemsData} />
        </div>
    );
}
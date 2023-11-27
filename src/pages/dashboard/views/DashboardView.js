import React from 'react';
import Card from '../../../components/card';
import Text from '../../../components/text';
import Flex from '../../../components/flex';
import Icon from '../../../components/icon';
import Button from '../../../components/button';
import UsersIcon from '../../../components/svg/usersIcon';
import NotesIcon from '../../../components/svg/notesIcon';
import ChevronRightThinIcon from '../../../components/svg/chevronRightThinIcon';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import MoneyNoteIcon from '../../../components/svg/moneyNoteIcon';
import ReceiptLongIcon from '../../../components/svg/receiptLongIcon';
import UserDoubleIcon from '../../../components/svg/userDoubleIcon';
import TotalCard from '../../../components/TotalCard';

import { useMediaQuery } from 'react-responsive';
import { Navigate, useNavigate } from 'react-router-dom';

const DashboardView = (props) => {
    const isMobile = useMediaQuery({query: '(max-width: 767px)'});
    const navigate = useNavigate()

    return (
        <>
            <div className="dash-box">
                <Card className="border-radius-5">
                    <Text type="H3" text="Total Sales On Portal" />
                    <div className="row row-mrl-1 row-cols-2 row-cols-md-5">
                        <div className="col">
                            <Card className="dashboard-number-wrp">
                                <Text type="H2" text={props?.dashboardData?.total_members_subscribed ?? '-'} className={`text-center ${isMobile ? '' : 'mb-20'}`} />
                                <Text type="PARAGRAPH" text="Total Members Collection From All Portals" className="my-0 text-center" />
                            </Card>
                        </div>
                        <div className="col">
                            <Card className="dashboard-number-wrp">
                                <Text type="H2" text={props?.dashboardData?.total_approved_guru  ?? '-'} className={`text-center ${isMobile ? '' : 'mb-20'}`} />
                                <Text type="PARAGRAPH" text={<>Amazon <br /> Sales</>} className="my-0 text-center" />
                            </Card>
                        </div>
                        <div className="col">
                            <Card className="dashboard-number-wrp">
                                <Text type="H2" text="20" className={`text-center ${isMobile ? '' : 'mb-20'}`} />
                                <Text type="PARAGRAPH" text={<>Wallmout <br /> Sales</>} className="my-0 text-center" />
                            </Card>
                        </div>
                        <div className="col">
                            <Card className="dashboard-number-wrp">
                                <Text type="H2" text="100" className={`text-center ${isMobile ? '' : 'mb-20'}`} />
                                <Text type="PARAGRAPH" text={<>Portal <br /> Sales</>} className="my-0 text-center" />
                            </Card>
                        </div>
                        <div className="col">
                            <Card className="dashboard-number-wrp">
                                <Text type="H2" text="6"  className={`text-center ${isMobile ? '' : 'mb-20'}`} />
                                <Text type="PARAGRAPH" text={<>Others <br /> Sale</>} className="my-0 text-center" />
                            </Card>
                        </div>
                    </div>
                </Card>
            </div>
            <div className="dash-box">
                <Tabs className="tabs-wrapper">
                    <TabList className="tabs-nav">
                        <Tab className="tab-nav-item" selectedClassName="isActive">Amazon</Tab>
                        <Tab className="tab-nav-item" selectedClassName="isActive">Wallmount</Tab>
                        <Tab className="tab-nav-item" selectedClassName="isActive">Portal</Tab>
                        
                    </TabList>
                    <div className="tabs-content">
                        <TabPanel className="tab-panel-content">
                            <div className="row">
                                <div className="col-12 col-md-6 border-right-2">
                                    <Card>
                                        <Text
                                            type="H4"
                                            text="Total Sales"
                                        />
                                       
                                        <DashPayItems
                                            icon={<MoneyNoteIcon width="56" height="40" />}
                                            text=""
                                            price={"11"}
                                            action={
                                                <Button
                                                    type="button"
                                                    outline
                                                    small={isMobile ? true : false}
                                                    text="View Sales"


                                                  
                                                />
                                            }
                                        />
                                    </Card>
                                </div>
                                <div className="col-12 col-md-6">
                                    <Card>
                                        <Text
                                            type="H4"
                                            text="Pending Orders"
                                        />
                                        
                                        <DashPayItems
                                            icon={<ReceiptLongIcon width="46" height="50" />}
                                            text=""
                                            price="10"
                                            action={
                                                <Button
                                                    type="button"
                                                    outline
                                                    small={isMobile ? true : false}
                                                    text="View Pending Orders"

                                                />
                                            }
                                        />
                                    </Card>
                                </div>
                            </div>
                        </TabPanel>

                        <TabPanel className="tab-panel-content">
                            <div className="row">
                                <div className="col-12 col-md-6 border-right-2">
                                    <Card>
                                        <Text
                                            type="H4"
                                            text="Total Sales"
                                        />
                                       
                                        <DashPayItems
                                            icon={<MoneyNoteIcon width="56" height="40" />}
                                            text=""
                                            price={"11"}
                                            action={
                                                <Button
                                                    type="button"
                                                    outline
                                                    small={isMobile ? true : false}
                                                    text="View Sales"


                                                  
                                                />
                                            }
                                        />
                                    </Card>
                                </div>
                                <div className="col-12 col-md-6">
                                    <Card>
                                        <Text
                                            type="H4"
                                            text="Pending Orders"
                                        />
                                        
                                        <DashPayItems
                                            icon={<ReceiptLongIcon width="46" height="50" />}
                                            text=""
                                            price="10"
                                            action={
                                                <Button
                                                    type="button"
                                                    outline
                                                    small={isMobile ? true : false}
                                                    text="View Pending Orders"

                                                />
                                            }
                                        />
                                    </Card>
                                </div>
                            </div>
                        </TabPanel>


                        <TabPanel className="tab-panel-content">
                            <div className="row">
                                <div className="col-12 col-md-6 border-right-2">
                                    <Card>
                                        <Text
                                            type="H4"
                                            text="Total Sales"
                                        />
                                       
                                        <DashPayItems
                                            icon={<MoneyNoteIcon width="56" height="40" />}
                                            text=""
                                            price={"11"}
                                            action={
                                                <Button
                                                    type="button"
                                                    outline
                                                    small={isMobile ? true : false}
                                                    text="View Sales"


                                                  
                                                />
                                            }
                                        />
                                    </Card>
                                </div>
                                <div className="col-12 col-md-6">
                                    <Card>
                                        <Text
                                            type="H4"
                                            text="Pending Orders"
                                        />
                                        
                                        <DashPayItems
                                            icon={<ReceiptLongIcon width="46" height="50" />}
                                            text=""
                                            price="10"
                                            action={
                                                <Button
                                                    type="button"
                                                    outline
                                                    small={isMobile ? true : false}
                                                    text="View Pending Orders"

                                                />
                                            }
                                        />
                                    </Card>
                                </div>
                            </div>
                        </TabPanel>

                    </div>
                </Tabs>
            </div>
            <div className="row">
                
                <div className="col-12 col-md-12">
                    <div className="dash-box dash-box-height-full">
                        <Tabs className="tabs-wrapper">
                            <TabList className="tabs-nav">
                                <Tab className="tab-nav-item" selectedClassName="isActive">Amazon</Tab>
                                <Tab className="tab-nav-item" selectedClassName="isActive">Wallmount</Tab>
                                <Tab className="tab-nav-item" selectedClassName="isActive">Portal</Tab>
                            </TabList>
                            <div className="tabs-content">
                                <TabPanel className="tab-panel-content">
                                    <Card>
                                        <Flex justifyContent="between">
                                            <Text type="H4" text="Mirchi Powder" className="mb-0" />
                                            <Button
                                                linkPrimary
                                                text="View details"
                                                icon={<ChevronRightThinIcon />}
                                               
                                            />
                                        </Flex>
                                        <div className="chart-wrapper">

                                        </div>
                                    </Card>
                                </TabPanel>
                                
                                <TabPanel className="tab-panel-content">
                                    <Card>
                                        <Flex justifyContent="between">
                                            <Text type="H4" text="Sugar" className="mb-0" />
                                            <Button
                                                linkPrimary
                                                text="View details"
                                                icon={<ChevronRightThinIcon />}
                                               
                                            />
                                        </Flex>
                                        <div className="chart-wrapper">

                                        </div>
                                    </Card>
                                </TabPanel>


                                <TabPanel className="tab-panel-content">
                                    <Card>
                                        <Flex justifyContent="between">
                                            <Text type="H4" text="Water" className="mb-0" />
                                            <Button
                                                linkPrimary
                                                text="View details"
                                                icon={<ChevronRightThinIcon />}
                                               
                                            />
                                        </Flex>
                                        <div className="chart-wrapper">

                                        </div>
                                    </Card>

                                    <Card>
                                        <Flex justifyContent="between">
                                            <Text type="H4" text="Apples" className="mb-0" />
                                            <Button
                                                linkPrimary
                                                text="View details"
                                                icon={<ChevronRightThinIcon />}
                                               
                                            />
                                        </Flex>
                                        <div className="chart-wrapper">

                                        </div>
                                    </Card>
                                </TabPanel>
                            </div>
                        </Tabs>
                    </div>
                </div>
            </div>
           
           
        </>
    );
};

export default DashboardView;


const DashList = props => {
    return(
        <div className="dash-list-item">
            <Text type="H4" text={props.title} />
            <div className="dash-list-item-right">
                <Text type="H3" text={props.number} className="mb-0" />
                <span className="dash-list-item-right-icon">
                    {props.icon}
                </span>
            </div>
        </div>
    )
};

const DashPayItems = props => {
    return(
        <div className="dash-pay-items">
            <div className="dash-pay-items-left">
                <div className="dash-pay-items-icon">
                    {props.icon}
                </div>
                <div className="dash-pay-items-text">
                    <Text type="PARAGRAPH" text={props?.text} />
                    <Text type="H3" text={props?.price} />
                </div>
            </div>
            <div className="dash-pay-items-right">
                {props.action}
            </div>
        </div>
    )
}

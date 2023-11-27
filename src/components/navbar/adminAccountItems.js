import DashboardIcon from "../svg/dashboardIcon";
import UserManagementIcon from '../svg/userManagementIcon'
import IncomeIcon from "../svg/incomeIcon";
import PaymentIcon from '../svg/paymentIcon';
import PayrollIcon from "../svg/payrollIcon";
import AccountIcon from "../svg/accountIcon";


export const adminAccountItems = [
  {
    title: 'Dashboard',
    url: '/dashboard',
    icon: <DashboardIcon />,
  },
  
  {
      title: 'Purchase Invoices',
      url: '/purchase-invoices',
      icon: <UserManagementIcon />,
  },

  {
    title: 'Location',
    url: '/location',
    icon: <UserManagementIcon />,
  },

 
  {
    title: 'Logout',
    url: '/',
    icon: <UserManagementIcon />,
  },
  
  ];

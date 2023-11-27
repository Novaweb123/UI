import DashboardIcon from "../svg/dashboardIcon";
import UserManagementIcon from '../svg/userManagementIcon'
import IncomeIcon from "../svg/incomeIcon";
import PaymentIcon from '../svg/paymentIcon';
import PayrollIcon from "../svg/payrollIcon";
import AccountIcon from "../svg/accountIcon";
import VideosIcon from "../svg/videosIcon";

export const menuItems = [
    {
      title: 'Dashboard',
      url: '/dashboard',
      icon: <DashboardIcon />,
    },
    

    {
      title: 'Transactions',
      icon: <UserManagementIcon />,
      submenu: [
        {
          title: 'Purchase',
          url: '/purchase-invoices',
          icon: <DashboardIcon />,
       
        },
        {
          title: 'Stock transfer',
          url: '/dashboard',
          icon: <DashboardIcon />,
       
        },
       
      ],
    },

    {
      title: 'Reports',
      icon: <UserManagementIcon />,
      submenu: [
        {
          title: 'Fulfillement reports',
          url: '/fulfillemnt-reports',
          icon: <DashboardIcon />,
       
        },
        {
          title: 'Stock Report',
          icon: <DashboardIcon />,
          submenu: [
            {
              title: 'Belmont',
              url: '/dashboard',
              icon: <DashboardIcon />,
           
            },
            {
              title: 'Richmond',
              url: '/dashboard',
              icon: <DashboardIcon />,
           
            },
            {
              title: 'Hyderabad',
              url: '/dashboard',
              icon: <DashboardIcon />,
           
            },
            {
              title: 'Haridwar',
              url: '/dashboard',
              icon: <DashboardIcon />,
           
            },
            
           
          ],
       
        },
       
      ],
    },


    
    

    {
      title: 'Location',
      url: '/location',
      icon: <UserManagementIcon />,
    },

    {
      title: 'User Management',
      url: '/admin',
      icon: <UserManagementIcon />,
    },

    {
      title: 'Currency',
      url: '/currency',
      icon: <UserManagementIcon />,
    },
    {
      title: 'Logout',
      url: '/',
      icon: <UserManagementIcon />,
    },
    
  ];

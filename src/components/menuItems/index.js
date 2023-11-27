import { useState, useEffect, useRef } from 'react';
import Dropdown from '../dropdown';

import { Link, useLocation } from 'react-router-dom';
import ChevronRightThinIcon from '../svg/chevronRightThinIcon';

const MenuItems = ({ items, depthLevel }) => {
  const location = useLocation()
  const [dropdown, setDropdown] = useState(false);

  let ref = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (
        dropdown &&
        ref.current &&
        !ref.current.contains(event.target)
      ) {
        setDropdown(false);
      }
    };
    document.addEventListener('mousedown', handler);
    document.addEventListener('touchstart', handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener('mousedown', handler);
      document.removeEventListener('touchstart', handler);
    };
  }, [dropdown]);

  const onMouseEnter = () => {
    window.innerWidth > 960 && setDropdown(true);
  };

  const onMouseLeave = () => {
    window.innerWidth > 960 && setDropdown(false);
  };

  const closeDropdown = () => {
    dropdown && setDropdown(false);
  };
  return (
    <li
      className="nav-item"
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={closeDropdown}
    >
      {items.url && items.submenu ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? 'true' : 'false'}
            onClick={() => setDropdown((prev) => !prev)}
            className={`nav-link nav-link-toggle ${location?.pathname === items.url ? 'active' : ''}`}
          >
            {window.innerWidth < 960 && depthLevel === 0 ? (
              <>
                {items.icon && <span className="nav-link-icon">{items.icon}</span>}
                items.title
              </>
            ) : (
              <Link to={items.url} 
              className={location?.pathname === items.url ? 'active' : ''}>
                {items.icon && <span className="nav-link-icon">{items.icon}</span>}
                {items.title}
              </Link>
            )}

            {depthLevel > 0 &&
            window.innerWidth < 960 ? null : depthLevel > 0 &&
              window.innerWidth > 960 ? (
              <span>&raquo;</span>
            ) : (
              <span className="arrow"><ChevronRightThinIcon down={dropdown ? true : false} /> </span>
            )}
          </button>
          <Dropdown
            depthLevel={depthLevel}
            submenus={items.submenu}
            dropdown={dropdown}
          />
        </>
      ) : !items.url && items.submenu ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? 'true' : 'false'}
            onClick={() => setDropdown((prev) => !prev)}            
            className={`nav-link nav-link-toggle ${location?.pathname === items.url ? 'active' : ''}`}
          >
            {items.icon && <span className="nav-link-icon">{items.icon}</span>} {' '}
            {items.title}{' '}
            {depthLevel > 0 ? (
              <span>&raquo;</span>
            ) : (
              <span className="arrow"><ChevronRightThinIcon down={dropdown ? true : false} /></span>
            )}
          </button>
          <Dropdown
            depthLevel={depthLevel}
            submenus={items.submenu}
            dropdown={dropdown}
          />
        </>
      ) : (
        <Link 
          to={items.url} 
          className={location?.pathname === items.url ? 'nav-link active' : 'nav-link'}
        >
          {items.icon && <span className="nav-link-icon">{items.icon}</span>}
          {items.title}
        </Link>
      )}
    </li>
  );
};

export default MenuItems;
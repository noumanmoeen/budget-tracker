import React, { useState } from 'react';

const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState(children[0].props.label);

  const handleClick = (e, newActiveTab) => {
    e.preventDefault();
    setActiveTab(newActiveTab);
  };

  return (
    <>
      <div className='max-w-md mx-auto'>
        <div className='flex border-b text-text bg-primary shadow-lg'>
          {children.map((child, i) => (
            <button
              key={child.props.label}
              className={`${
                activeTab === child.props.label
                  ? 'bg-secondary text-primary'
                  : ''
              } flex-1 font-medium py-2  ${
                i === 0
                  ? `border-l rounded-l-md`
                  : i === children.length - 1
                  ? `border-r rounded-r-md`
                  : ''
              } `}
              onClick={(e) => handleClick(e, child.props.label)}
            >
              {console.log(i)}
              {child.props.label}
            </button>
          ))}
        </div>
      </div>
      <div className='py-4'>
        {children.map((child) => {
          if (child.props.label === activeTab) {
            return <div key={child.props.label}>{child.props.children}</div>;
          }
          return null;
        })}
      </div>
    </>
  );
};

const Tab = ({ label, children }) => {
  return (
    <div label={label} className='hidden'>
      {children}
    </div>
  );
};
export { Tabs, Tab };

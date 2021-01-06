import React from 'react';
import '../../stylesheets/component/common/sidebar.css';

const Sidebar = props => {

    const { open } = props;

    const open = open => {

        return open ? 'open' : 'closed';
        
    }

    return (
        <div className={`sidebar ${open(open)}`}> 
        </div>
    );
}


export default Sidebar;
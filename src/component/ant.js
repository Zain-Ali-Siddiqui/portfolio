import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { CloseOutlined, MenuOutlined, AppstoreOutlined, ContactsOutlined, ProjectOutlined, GoogleOutlined } from '@ant-design/icons';
import { Button, Menu } from 'antd';

function getItem(label, key, icon, children, type) {
    return { key, icon, children, label, type, };
}

const items = [
    getItem(<a href="#h">Home</a>, '1', <AppstoreOutlined />),
    getItem(<a href='#visual' > Visual </a> , '2', <ContactsOutlined />),
    getItem(<a href='#project'>Project  </a> , '3', <ProjectOutlined />),
    getItem(<a href='#social' >Social</a> ,'4',  <GoogleOutlined />),
];

const Ant = () => {
    const [collapsed, setCollapsed] = useState(true);

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };

    return (
        <>
            <div
                style={{
                    width: 256,
                    marginTop: '-40px'
                }}
            >
                <Button
                    type="primary"
                    onClick={toggleCollapsed}
                    style={{
                        marginBottom: 16,
                    }}
                >
                    {collapsed ? <MenuOutlined /> : <> <CloseOutlined /></>}
                </Button>
                {collapsed != true ? <Menu
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="dark"
                    inlineCollapsed={collapsed}
                    items={items}
                />
                    :
                    <Menu
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        mode="inline"
                        theme="dark"
                        inlineCollapsed={collapsed}
                        style={{ display: 'none' }}
                    />
                }

            </div>
        </>
    );
};

export default Ant;